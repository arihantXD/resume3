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
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <div className="pt-12">
      <div className="font-medium text-light-gray">Contact</div>
      <div>
        <div className="py-4 flex flex-wrap gap-4 text-xs">
          <div className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center">
            <Mail size={14} />
            <div>Gmail</div>
          </div>
          <div className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center">
            <Linkedin size={14} />
            <div>linkedIn</div>
          </div>
          <div className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center">
            <Github size={14} />
            <div>GitHub</div>
          </div>
          <div className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center">
            <Instagram size={14} />
            <div>Instagram</div>
          </div>
        </div>
      </div>
      <div className="text-center font-medium py-4">or</div>
      <div className="bg-extra-light-gray px-4 py-8 rounded-lg border-[1px] border-lighter-gray">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(() => {
              console.log("hii");
            })}
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-[#e2e2e2] text-dark-gray placeholder:text-dark-gray text-xs border border-lighter-gray  h-[30px]"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-[#e2e2e2] text-dark-gray placeholder:text-dark-gray text-xs border border-lighter-gray  h-[30px]"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="bg-[#e2e2e2] text-dark-gray placeholder:text-dark-gray text-xs border resize-none border-lighter-gray  h-[30px]"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="bg-black">Send</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
