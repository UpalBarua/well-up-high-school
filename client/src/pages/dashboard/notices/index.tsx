import axios from "@/api/axios";
import { NoticeFormData } from "@/types/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/data-table";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ReactElement, useState } from "react"; 
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import DashboardLayout from "@/layouts/dashboard-layout";
import Link from "next/link";

const NoticePage = () => {
  const queryClient = useQueryClient();
  const { data: notices = [] as NoticeFormData[], error } = useQuery<
    NoticeFormData[]
  >({
    queryKey: ["notices"],
    queryFn: async () => {
      try {
        const { data } = await axios.get("/notices");
        return data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });

  const deleteNotice = useMutation(
    (noticeId: string) => {
      return axios.delete(`/notices/${noticeId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["notices"]);
        addToast("Notice deleted successfully", { type: 'success' }); // Show a success toast
      },
    }
  );

  const handleDeleteNotice = (noticeId: string) => {
    deleteNotice.mutate(noticeId);
  };

  
  const columns: ColumnDef<NoticeFormData>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "author",
      header: "Author",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <Button size="sm" variant="secondary" asChild>
            <Link href={`/dashboard/notices/${row.original._id}`}>Details</Link>
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => handleDeleteNotice(row.original._id)}
          >
            <AiOutlineDelete />
          </Button>
          <Button size="sm" variant="secondary">
            <Link href={`/dashboard/notices/edit/${row.original._id}`}>
              <AiOutlineEdit />
            </Link>
          </Button>
        </div>
      ),
    },
  ];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: notices,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <main>
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-2xl font-bold">Notices</h2>
        <Button asChild>
          <Link href="/dashboard/notices/new">Add New Notice</Link>
        </Button>
      </div>
      <DataTable columns={columns} table={table} />
    </main>
  );
};

NoticePage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NoticePage;
