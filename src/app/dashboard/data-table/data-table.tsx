"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import type { Payment } from "@/app/data/payments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { parseJSON, set } from "date-fns";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentStatus, setCurrentStatus] = useState("all");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const isDeleteButtonVisible = Object.keys(rowSelection).length > 0;
  // const [carrito, setCarrito] = useState({...Payment});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // PAGINACION
    onSortingChange: setSorting, // ORDENAMIENTO DE COLUMNS
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting, // ORDENAMIENTO DE COLUMNS
      columnFilters, // FILTRO POR INPUT
      columnVisibility, // VISIBILITY
      rowSelection, // SELECTION ROW
    },
    onColumnFiltersChange: setColumnFilters, // FILTRO POR INPUT
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility, // VISIBILITY
    onRowSelectionChange: setRowSelection, // SELECTION ROW
  });

  // TODO - FUNCIONALIDAD PARA AGREGAR AL CARRITO

  return (
    <div>
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Busca por (cliente, correo o estado)"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("email")?.setFilterValue(event.target.value);
            // FUNCIONALIDAD ADICIONAL - AL MOMENTO DE BUSCAR, NO RESPESTA EL FILTRO Y MUESTRA TODOS LOS DATOS
            setCurrentStatus("all");
            table.getColumn("status")?.setFilterValue(undefined);
          }}
          className="max-w-sm"
        />

        <div className="flex flex-row gap-4">
          {/* <h1>{table.getSelectedRowModel().rows.length}</h1> */}
          {
            // mostrar un boton si dentro de la table hay ya productos seleccionados
            isDeleteButtonVisible && (
              <Button
                variant={"destructive"}
                onClick={() => {
                  // console.log(rowSelection);
                  const ids = table.getSelectedRowModel().rows.map((row) => {
                    return (row.original as Payment).id;
                  });
                  console.log(ids);
                }}
              >
                Eliminar
              </Button>
            )
          }

          <Select
            value={currentStatus}
            onValueChange={(value) => {
              setCurrentStatus(value);
              table
                .getColumn("status")
                ?.setFilterValue(value === "all" ? undefined : value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="px-4 py-2">Estado</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="success">Success</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columnas
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .filter((column) => column.id !== "actions") // PARA QUE LOS ACTIONS NO SE PUEDAN OCULTAR
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {/* {columnTranslations[column.id] || column.id} */}
                      {/* Si no hay traducción, muestra el ID original */}
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border">
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
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              // NO RESULTS
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex flex-row items-center justify-between px-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>

          {/* TODO - PAGINACION */}
          <div className="flex flex-row space-x-2 py-4 mr-4">
            <Select
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="w-[100px] px-4">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Items por página</SelectLabel>
                  {
                    // TODO - hacer funcionalidad con el table.getRowCount()
                  }
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button
              variant="default"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
