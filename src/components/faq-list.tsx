import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/config/faq";

interface FAQListProps {
  faq: FAQItem[];
}

const FAQList: React.FC<FAQListProps> = ({ faq }) => {
  return (
    <Accordion type="multiple">
      {faq.map((faq) => (
        <AccordionItem value={faq.id + "item"} key={faq.id}>
          <AccordionTrigger className="text-left font-normal">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQList;
