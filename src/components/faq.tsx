import React from "react";
import axios from "@/lib/axios";
import { AxiosError } from "axios";

import MaxWidthWrapper from "./ui/max-width-wrapper";
import FAQList from "./faq-list";
import { FAQItem } from "@/config/faq";
import ErrorBanner from "./ui/error-banner";

const Faq: React.FC = async () => {
  async function getFAQ() {
    try {
      const { data } = await axios.get("/faq");

      if (data instanceof AxiosError) {
        throw new Error();
      }

      return data as FAQItem[];
    } catch (error) {
      console.log(error);
    }
  }

  const faq = await getFAQ();

  return (
    <section id="faq" className="py-10">
      <h2 className="font-bold text-2xl text-center">Відповіді на питання</h2>
      <MaxWidthWrapper>
        {faq && !!faq.length && <FAQList faq={faq} />}
        {!faq && (
          <ErrorBanner/>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default Faq;
