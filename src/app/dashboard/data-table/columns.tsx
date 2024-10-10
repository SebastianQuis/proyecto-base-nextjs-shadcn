/**
 * LO QUE SE VA A MOSTRAR EN LAS CABECERAS
 *
 * ESTE SE APOYA MUCHO DEL OBJETO Payment que viene de payments.tsx
 *
 */

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Payment } from "@/app/data/payments";
import { Badge } from "@/components/ui/badge";
import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUp, Filter, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";


// FUNCION PARA HACER BUSQUEDA ENTRE DIFERENTE COLUMNAS
const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: any) => void
) => {
  const filterValueLower = filterValue.toLowerCase();
  const arrFilterValues = filterValueLower.split(" ");
  console.log(arrFilterValues);

  const rowValues =
    `${row.original.clientName} ${row.original.email} ${row.original.status}`.toLowerCase();

  return arrFilterValues.every((value) => rowValues.includes(value));
};

// FUNCTIONAL COMPONENT - cambiar iconos de ordenamiento
const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") {
    return <ArrowDownIcon className="ml-2 h-4 w-4" />;
  }

  if (isSorted === "desc") {
    return <ArrowUp className="ml-2 h-4 w-4" />;
  }

  return <Filter size={13} className="ml-3" />;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        onClick={() => {
          // console.log(row);
        }}
      />
    ),
    // EL BUTTON DE SELECCIONAR NO SALGA EN EL FILTRO POR COLUMNAS
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    filterFn: myCustomFilterFn,
    // header: () => <div className="font-bold text-black">Cliente</div>,
    // FILTRO DE ORDENAMIENTO
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
    // header: () => <div className="font-bold text-black">Correo</div>,
    // FILTRO DE ORDENAMIENTO
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Correo
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    filterFn: myCustomFilterFn,
    // header: () => <div className="text-start font-bold text-black">Estado</div>,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string; // obteniendo el status
      const variant =
        {
          pending: "secondary",
          processing: "info",
          success: "success",
          failed: "destructive",
        }[status] ?? ("default" as any);

      return (
        <Badge
          className="grid grid-cols-1 justify-center items-center w-3/4 text-center"
          variant={variant}
          capitalize
        >
          {status as string}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-end font-bold text-black">Cantidad</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(JSON.stringify(payment));
                // navigator.clipboard.writeText(payment.id);
                toast.success("Payment ID copied to clipboard", {
                  style: { backgroundColor: "white" },
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                toast.success("Payments", {
                  // description: JSON.stringify(payments),
                });
              }}
            >
              Agregar Payment
            </DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
