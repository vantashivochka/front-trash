"use client";

import { PriceListItem } from "@/config/price-list";
import { ColumnDef } from "@tanstack/react-table";

export const garbageColumns: ColumnDef<PriceListItem>[] = [
  {
    accessorKey: "title",
    header: "Машина",
    cell: ({ row }) => {
      return <span className="text-lg text-primary font-medium">
        {row.original.title}
      </span>
    },
  },
  {
    accessorKey: "price",
    header: "Ціна",
    cell: ({ row }) => {
      return row.original.id !== 3 && row.original.id !== 4 ? (
        <span className="font-medium">{`${row.getValue(
          "price"
        )}₴ + 250₴/куб.`}</span>
      ) : (
        <span className="font-medium">{`${row.getValue(
          "price"
        )}₴`}</span>
      );
    },
  },
];
