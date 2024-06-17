"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import {
  ContactUsSchema,
  ContactUsValidator,
} from "@/lib/validators/contact-us";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface ContactFormProps {
  className?: string;
}

interface ContactFormPayload extends ContactUsSchema {
  gclid: string | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");
  const form = useForm<ContactUsSchema>({
    resolver: zodResolver(ContactUsValidator),
    defaultValues: {
      category: "garbage",
    },
  });

  const { mutate: sendForm, isPending: isSending } = useMutation({
    mutationFn: async (values: ContactFormPayload) => {
      const { data } = await axios.post(`contact`, values);

      return data;
    },
    onSuccess: () => {
      router.push("/thank-you");
    },
  });

  function onSubmit(values: ContactUsSchema) {
    sendForm({
      gclid,
      ...values,
    });
  }

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        delay: 4 * 0.3,
      },
    },
  };

  return (
    <section id="contact-us">
      <Form {...form}>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "flex flex-col gap-4 md:max-w-md md:w-full md:mx-auto mx-4 bg-secondary rounded-md px-4 py-6 border border-gray-200 dark:border-gray-500",
            className
          )}
          initial="hidden"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-center text-lg font-bold">Замовити дзвінок</h3>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ім&apos;я</FormLabel>
                <FormControl>
                  <Input placeholder="Наприклад, Дмитро" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <Input placeholder="Наприклад, +380123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" isLoading={isSending}>
            Замовити дзвінок
          </Button>
        </motion.form>
      </Form>
    </section>
  );
};

export default ContactForm;
