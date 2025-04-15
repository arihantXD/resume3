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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

export const formSchema = z.object({
  username: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Email is invalid.",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
});

const ContactSection = () => {
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (formData: any) => {
    try {
      setBtnLoading(true);
      const { data } = await axios.post("/api/contact", formData);
      console.log(data?.message);
      setBtnLoading(false);
      toast.success(data?.message);
    } catch (error: any) {
      setBtnLoading(false);
      toast.error(
        error?.response?.data?.message ||
          "Internal error, please mail me manually. Sorry ! 😥",
        {
          style: {
            textAlign: "center",
          },
        }
      );
      console.log(error);
    }
  };

  return (
    <div className="pt-12">
      <div className="font-medium text-light-gray">Contact</div>
      <div>
        <div className="py-4 flex flex-wrap gap-4 text-xs">
          <Link
            href={"/Resume.docx"}
            className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center"
          >
            <Download size={14} />
            Resume
          </Link>
          <div className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center">
            <Mail size={14} />
            <div>kamdearihant01@gmail.com</div>
          </div>
          <Link
            href={"https://www.linkedin.com/in/arihant-kamde-2976451b5"}
            target="_blank"
            className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center"
          >
            <Linkedin size={14} />
            <div>LinkedIn</div>
          </Link>
          <Link
            href={"https://github.com/arihantXD"}
            target="_blank"
            className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center"
          >
            <Github size={14} />
            <div>GitHub</div>
          </Link>
          <Link
            href={"https://www.instagram.com/arihant0.1?igsh=N3Bocngzc2M5a3R5"}
            target="_blank"
            className="bg-extra-light-gray px-3 border border-lighter-gray rounded-lg py-1 w-fit flex gap-2 items-center"
          >
            <Instagram size={14} />
            <div>Instagram</div>
          </Link>
        </div>
      </div>
      <div className="text-center font-medium py-4">or</div>
      <div className="bg-extra-light-gray px-4 py-8 rounded-lg border-[1px] border-lighter-gray">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(sendEmail)}>
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
                name="email"
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
                name="message"
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
              <Button
                onClick={form.handleSubmit(sendEmail)}
                className="bg-black"
                disabled={btnLoading ? true : false}
              >
                Send
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
