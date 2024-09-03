import React from "react";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { GarbageDataTable } from "@/components/tables/garbage/data-table";
import { garbageColumns } from "@/components/tables/garbage/columns";

const Prices: React.FC = async () => {
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
                    title: "Бус (1,5 т.)",
                  },
                  {
                    id: 2,
                    price: 600,
                    title: "Газель (2 т.)",
                  },
                  {
                    id: 3,
                    price: 2400,
                    title: "ЗІЛ (5 т.)",
                  },
                  {
                    id: 4,
                    price: 3500,
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
