"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { doCredentialLogin } from "@/app/actions"; 

const FormSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters",
  }),
});
export default function LoginForm({ dictionary }) { 
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    await doCredentialLogin(data); 
  }
  return (
    <> 
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {" "}
                  {dictionary?.email}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="w-full"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {" "}
                  {dictionary?.password}
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="w-full"
                    placeholder="Your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="themePrimary" type="submit">
            {dictionary?.submit}
          </Button>
        </form>
      </Form>
    </>
  );
}
