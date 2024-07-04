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
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name is required",
  }),
  lastName: z.string().min(2, {
    message: "Last Name is required",
  }),
  phone: z.string().min(9, {
    message: "Phone number is required",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  street: z.string().min(2, {
    message: "Street address is required",
  }),
  city: z.string().min(3, {
    message: "City is required",
  }),
  country: z.string().optional(),
  zip: z.string().optional(),
});
export default function CheckoutForm({ className }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      country: "",
      street: "",
      zip: "",
    },
  });

  function onSubmit(data) {
    console.log("Checkout form Submitted", data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(`space-y-3 border rounded p-6 ${className}`)}
      >
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-base font-semibold">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="w-full"
                    placeholder="firstName"
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
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="w-full"
                    placeholder="Last Name"
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
              <FormLabel className="text-base font-semibold"> Email</FormLabel>
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {" "}
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="w-full"
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {" "}
                Street Address
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Street Address"
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
              <FormLabel className="text-base font-semibold"> City</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="City"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">
                {" "}
                Country
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Country"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold"> ZIP</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="ZIP"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
