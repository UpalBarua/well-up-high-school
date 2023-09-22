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
import Image from 'next/image';
import { ReactElement } from 'react';

const Teachers = () => {
  const { data: teachers = [] as Teacher[] } = useQuery<Teacher[]>({
    queryKey: ['teachers'],
    queryFn: async () => {
      const { data } = await axios.get('/teachers');
      return data.data;
    },
  });

  console.log(teachers);

  const columns: ColumnDef<Teacher>[] = [
    {
      accessorKey: 'imageURL',
      header: 'Picture',
      cell: ({ row }) => (
        <div className="relative aspect-square w-10 rounded-full">
          <Image
            className="rounded-full object-center object-cover"
            src={row.original.imageURL}
            alt={row.original.name}
            fill
          />
        </div>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      accessorKey: 'Subjects',
      header: 'subjects',
      cell: ({ row }) => <span>{row.original.subjects.join(', ')}</span>,
    },
    {
      accessorKey: 'classes',
      header: 'Classes',
      cell: ({ row }) => <span>{row.original.classes.join(', ')}</span>,
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
