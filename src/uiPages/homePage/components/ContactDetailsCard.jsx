import React from "react";
import { PERSONAL_DATA } from "@/utils/constants/personalData";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactDetailsCard() {
  return (
    <div className="bg-c-primary dark:bg-[#151515]  flex flex-col gap-y-5 md:flex-row md:justify-between p-8 rounded-2xl text-white ">
      {/* Email */}
      <div className="flex items-center gap-3">
        <div className="bg-black p-3 rounded-full">
          <Mail />
        </div>

        <p>{PERSONAL_DATA.email}</p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <div className="bg-black p-3 rounded-full">
          <Phone />
        </div>
        <p>{PERSONAL_DATA.phone}</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-3">
        <div className="bg-black p-3 rounded-full">
          <MapPin />
        </div>
        <p>
          {[PERSONAL_DATA.address.city, PERSONAL_DATA.address.district]
            .filter(Boolean)
            .join(", ")}
          <br />
          {[PERSONAL_DATA.address.state, PERSONAL_DATA.address.country]
            .filter(Boolean)
            .join(", ")}
          .
        </p>
      </div>
    </div>
  );
}
