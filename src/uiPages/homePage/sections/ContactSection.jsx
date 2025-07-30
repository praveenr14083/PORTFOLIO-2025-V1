"use client";

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactDetailsCard } from "../components/ContactDetailsCard";
import { SparkleHeading } from "@/components/common/SparkleHeading";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      reset();
    } catch (error) {
      console.error("Email send error:", error.text);
    }
  };

  return (
    <section id="contact" className="bg-background">
      <section className="section-px py-8 sm:py-10 md:py-12 lg:py-14">
        <div>
          <SparkleHeading firstText="contact" secondText="me" />

          <div className="grid grid-cols-1 md:grid-cols-2 py-8 sm:py-10 md:py-12 lg:py-14">
            {/* Image */}
            <div className="flex justify-center items-center">
              <div className="relative size-50 md:size-80">
                <Image
                  src="/assets/contact/hand.png"
                  alt="Hero background"
                  fill
                  className="object-contain z-6 drop-shadow-[0_0px_35px_rgba(0,163,224,0.3)] rotate-2"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <fieldset className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    id="name"
                    className="focus-visible:ring-0 focus:border-c-primary"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </fieldset>

                {/* Email */}
                <fieldset className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </fieldset>

                {/* Phone */}
                <fieldset className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    type="tel"
                    id="phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </fieldset>

                {/* Message */}
                <fieldset className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    id="message"
                    placeholder="Type your message here."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </fieldset>

                <Button
                  className="w-full hover:bg-c-primary hover:text-white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>

          <div>
            <ContactDetailsCard />
          </div>
        </div>
      </section>
    </section>
  );
}
