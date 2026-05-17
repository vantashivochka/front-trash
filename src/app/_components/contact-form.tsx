"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  return (
    <section id="contact-us">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "flex flex-col gap-4 md:max-w-md md:w-full md:mx-auto mx-4 bg-secondary rounded-md px-4 py-6 border border-gray-200 dark:border-gray-500",
            className
          )}
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

          <Collapsible>
            <CollapsibleTrigger className="text-sm text-muted-foreground inline-flex items-center text-start gap-1 hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
              <Plus className="w-4 h-4" />
              Вказати додаткову інформацію (не обов&apos;язково)
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-4 mt-4">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тип вантажу</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Наприклад, будівельний або металевий"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Місто</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Наприклад, м. Київ або м. Ірпінь"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Додаткова інформація</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Наприклад, кількість вантажу, поверхи"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Button type="submit" isLoading={isSending}>
            Замовити дзвінок
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
