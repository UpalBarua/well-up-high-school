import axios from "@/api/axios";
import DataTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layouts/dashboard-layout";
import type { StudentData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import Link from "next/link";
import { ReactElement, useState } from "react";

const Students = () => {
  const { data: students = [] as StudentData[] } = useQuery<StudentData[]>({
    queryKey: ["students"],
    queryFn: async () => {
      const { data } = await axios.get("/students");
      return data.data;
    },
  });

  const columns: ColumnDef<StudentData>[] = [
    {
      accessorKey: "firstName",
      header: "Name",
    },
    {
      accessorKey: "studentId",
      header: "studentId",
    },
    {
      accessorKey: "classInfo",
      header: "classInfo",
      cell: ({ row }) => (
        <>
          <span className="block">
            Class: {row?.original.classInfo.class}, Session:
            {row?.original.classInfo.session}
            <br></br>
          </span>
          <span>
            Section: {row?.original.classInfo.section}, Group:{" "}
            {row?.original.classInfo.group}
          </span>
        </>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <Button size="sm" variant="secondary" asChild>
          <Link href={`/dashboard/students/${row.original._id}`}>Details</Link>
        </Button>
      ),
    },
  ];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: students,
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
        <h2 className="text-2xl  font-bold">Students</h2>
        <Button asChild>
          <Link href="/dashboard/students/new">Add New Student</Link>
        </Button>
      </div>
      <DataTable columns={columns} table={table} />
    </main>
  );
};

Students.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Students;
