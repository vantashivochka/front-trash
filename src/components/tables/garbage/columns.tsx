"use client";

import { PriceListItem } from "@/config/price-list";
import { ColumnDef } from "@tanstack/react-table";

export const garbageColumns: ColumnDef<PriceListItem>[] = [
  {
    accessorKey: "title",
    header: "Машина",
  },
  {
    accessorKey: "price",
    header: "Ціна",
    cell: ({ row }) => {
      return row.getValue("title") !== "КамАЗ (10 т.)" ? (
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
