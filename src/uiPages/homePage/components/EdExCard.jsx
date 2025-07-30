import React from "react";
import {
  GraduationCap,
  Cog,
  School,
  University,
  Building2,
  Building,
} from "lucide-react";

export function EdExCard({ data }) {
  return (
    // Wrap Icon and Content Section
    <div className="w-full flex gap-1">
      <div className="flex flex-col items-center">
        {/* Icon and Vertical line */}
        <div className="p-3 border-1 border-dashed border-c-primary rounded-full">
          {/* Conditional rendering of icons based on the year */}
          {/* Education */}
          {data.id === "bsc" && <GraduationCap />}
          {data.id === "dme" && <Cog />}
          {data.id === "hsc" && <School />}
          {data.id === "sslc" && <University />}

          {/* Expreience */}
          {data.id === "jas-digicraft-tek" && <Building2 />}
          {data.id === "g-tec" && <Building />}
        </div>

        {/* Vertical Line */}
        <div className="border-l-1 border-dashed border-c-primary h-full w-[1px]"></div>
      </div>

      {/* Content */}
      <div className="w-full space-y-4 p-5">
        {/* Year */}
        <p className="text-c-primary">{data.year}</p>

        {/* Course and Institute */}
        <div className="space-y-1">
          <h1 className="text-lg md:text-2xl font-semibold">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
        </div>

        {/* Percentage */}
        {data?.percentage && (
          <p className="border border-c-primary rounded-tl-full rounded-tr-full rounded-br-full  px-4 py-2 inline">
            {data.percentage}
          </p>
        )}
      </div>
    </div>
  );
}
