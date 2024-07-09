"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  locale: z
    .string({
      required_error: "Please select a language.",
    })
});

const LanguageSwitcher = ({ dictionary }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState("");

  useEffect(() => {
    setSelectedLocale(pathname.includes("bn") ? "bn" : "en");
  }, [pathname]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      locale: selectedLocale
    }
  });

  const handleLocaleChange = (value) => {
    setSelectedLocale(value); 
    const newPath = pathname.replace(/(\/bn|\/en)/, `/${value}`);
    router.push(newPath);
  };

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="locale"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handleLocaleChange(value);
                }} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[120px] dark:bg-secondary dark:text-secondary-foreground">
                    <SelectValue placeholder={dictionary?.language} />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="bn">Bangla</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default LanguageSwitcher;
