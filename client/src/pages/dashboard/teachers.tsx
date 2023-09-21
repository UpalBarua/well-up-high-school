import axios from '@/api/axios';
import DataTable from '@/components/data-table';
import DashboardLayout from '@/layouts/dashboard-layout';
import type { Teacher } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import { ReactElement } from 'react';

const Teachers = () => {
  const { data: teachers = [] as Teacher[] } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const { data } = await axios.get<Teacher[]>('/teachers');
      return data;
    },
  });

  const columns: ColumnDef<Teacher>[] = [
    {
      accessorKey: 'fullName',
      header: 'Name',
    },
    {
      accessorKey: 'specializedRole',
      header: 'Role',
    },
    {
      accessorKey: 'Subjects',
      header: 'subjects',
      cell: ({ row }) =>
        row.original.subjects?.map((subject) => (
          <span>{subject?.className}</span>
        )),
    },
    {
      accessorKey: 'classesTaught',
      header: 'Classes',
      cell: ({ row }) =>
        row.original.classesTaught.map((item) => <span>{item.className}</span>),
    },

    {
      accessorKey: 'phone',
      header: 'Phone',
    },
  ];

  const table = useReactTable({
    data: teachers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main>
      <h2 className="text-xl font-bold">Teachers</h2>
      <div className="rounded-md border">
        <DataTable columns={columns} table={table} />
      </div>
    </main>
  );
};

Teachers.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Teachers;
