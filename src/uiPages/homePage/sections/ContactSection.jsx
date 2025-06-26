import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactDetailsCard } from "../components/ContactDetailsCard";
import { SparkleHeading } from "@/components/common/SparkleHeading";

export function ContactSection() {
  return (
    // Main Section
    <section className="w-full section-px py-8 sm:py-10 md:py-12 lg:py-14 bg-background">
      {/* Wrap Heading and Image, Contact Form */}
      <div>
        {/* Section Heading */}
        <SparkleHeading firstText="contact" secondText="me" />

        {/* Wrap Image and Contact Form */}
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

          <div>
            <form className="space-y-6">
              <fieldset className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="focus-visible:ring-[0px] focus:border-c-primary"
                  type="name"
                  id="name"
                />
              </fieldset>

              <fieldset className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" />
              </fieldset>

              <fieldset className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input type="phone" id="phone" />
              </fieldset>

              <fieldset className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
              </fieldset>

              <Button
                className="w-full hover:bg-c-primary hover:text-white"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        <div>
          <ContactDetailsCard />
        </div>
      </div>
    </section>
  );
}
