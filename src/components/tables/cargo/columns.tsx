"use client";

import { PriceListItem } from "@/config/price-list";
import { ColumnDef } from "@tanstack/react-table";

export const cargoColumns: ColumnDef<PriceListItem>[] = [
  {
    accessorKey: "title",
    header: "Машина",
  },
  {
    accessorKey: "price",
    header: "Ціна",
    cell: ({ row }) => {
      return (
        <span className="font-medium">{`${row.getValue(
          "price"
        )}₴ + 200₴/год.`}</span>
      );
    },
  },
];
