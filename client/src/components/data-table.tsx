import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  flexRender,
  type ColumnDef,
  type Table as TTable,
} from '@tanstack/react-table';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
  MdSearch,
} from 'react-icons/md';

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  table: TTable<TData>;
};

const DataTable = <TData, TValue>({
  table,
  columns,
}: DataTableProps<TData, TValue>) => {
  return (
    <div className="rounded-lg border bg-white shadow-sm border-primary-50/50">
      <div className="flex items-center p-2.5 justify-between gap-4 bg-primary-50/10">
        <div className="flex items-center gap-2 w-full">
          <MdSearch className="text-2xl" />
          <Input
            className="h-8"
            placeholder="Search"
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('name')?.setFilterValue(event.target.value)
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={table.getCanPreviousPage()}
            className="gap-0">
            <MdOutlineNavigateBefore className="text-xl" />
            <span>Previous</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={table.getCanNextPage()}
            className="gap-0">
            <span>Next</span>
            <MdOutlineNavigateNext className="text-xl" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
