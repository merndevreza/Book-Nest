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
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Email is required.",
    }),
    password: z.string().min(4, {
      message: "Password must be at least 4 characters",
    }),
    passwordConfirm: z.string(),
    checkbox: z.boolean().default(false),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      return data.checkbox === true;
    },
    {
      message: "Please read our terms and condition",
      path: ["checkbox"],
    }
  );

export default function RegistrationForm({ dictionary }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      checkbox: false,
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          password: data?.password,
        }),
      });
      const result = await response.json();

      if (response.ok && result.status === 201) { 
        router.push("/login");
      } else if (result.status === 409) {
        setError(result.message);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex  gap-2 ">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base font-semibold">
                    {dictionary?.firstName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base font-semibold">
                    {dictionary?.lastName}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
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
                  {dictionary?.password}
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="w-full"
                    placeholder="Create password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">
                  {dictionary?.confirmPassword}
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="w-full"
                    placeholder="Re-enter the password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checkbox"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    <Link className="font-semibold underline" href="#">
                      {dictionary?.acceptTermsAndConditions}
                    </Link>
                  </FormLabel>
                </div>
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
