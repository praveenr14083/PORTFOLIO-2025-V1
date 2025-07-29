import React from "react";
import { PERSONAL_DATA } from "@/utils/constants/personalData";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactDetailsCard() {
  return (
    <div className="dark:bg-accent border border-border flex flex-col gap-y-5 md:flex-row md:justify-between p-8 rounded-2xl ">
      {/* Email */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 p-3 rounded-xl text-white">
          <Mail />
        </div>

        <p>{PERSONAL_DATA.email}</p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <div className="bg-green-500 p-3 rounded-xl text-white">
          <Phone />
        </div>
        <p>{PERSONAL_DATA.phone}</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-3">
        <div className="bg-violet-500 p-3 rounded-xl text-white">
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
