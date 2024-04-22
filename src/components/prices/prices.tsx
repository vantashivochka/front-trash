import React from "react";
import MaxWidthWrapper from "../ui/max-width-wrapper";
import { GarbageDataTable } from "../tables/garbage/data-table";
import {
  GARBAGE_PRICE_LIST,
  CARGO_PRICE_LIST,
  PriceListItem,
} from "@/config/price-list";
import { garbageColumns } from "../tables/garbage/columns";
import { CargoDataTable } from "../tables/cargo/data-table";
import { cargoColumns } from "../tables/cargo/columns";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import ErrorBanner from "../ui/error-banner";

const Prices: React.FC = async () => {
  async function getList(category: "cargo" | "garbage") {
    try {
      const { data } = await axios.get(`/prices?category=${category}`);

      if (data instanceof AxiosError) {
        throw new Error();
      }

      return data as PriceListItem[];
    } catch (error) {
      console.log(error);
    }
  }

  const garbageList = await getList("garbage");

  return (
    <section
      className="border-t py-10 border-gray-200 dark:border-gray-500 mt-10"
      id="price"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-semibold text-xl">Вивезення сміття</h3>
              <GarbageDataTable
                columns={garbageColumns}
                data={[
                  {
                    id: 1,
                    price: 600,
                    title: "Газель (2 т.)",
                  },
                  {
                    id: 2,
                    price: 600,
                    title: "Газель (0,5 т.)",
                  },
                  {
                    id: 3,
                    price: 2000,
                    title: "ЗІЛ (5 т.)",
                  },
                  {
                    id: 4,
                    price: 3200,
                    title: "КамАЗ (10 т.)",
                  },
                ]}
              />
              {/* {!garbageList && <ErrorBanner />} */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Prices;
