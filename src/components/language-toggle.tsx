"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const languageDetails = [
  {
    language: "Português",
    pictue: "/portuguese.jpg",
  },
  {
    language: "Inglês",
    pictue: "/english.jpg",
  },
];

export function LanguageToggle() {
  const { setTheme } = useTheme();

  const currentLanguage = languageDetails.find(
    ({ language, pictue: _ }) => language === "Português"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="flex justify-center items-center gap-3 rou"
        >
          <span>{currentLanguage?.language}</span>
          <Image
            src={currentLanguage?.pictue ?? ""}
            width={20}
            height={10}
            alt="Language picture"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageDetails.map(({ language, pictue }) => (
          <DropdownMenuItem key={language} className="p-0">
            <div className="flex justify-center items-center gap-2 p-2 hover:bg-blue-500 dark:hover:bg-blue-600 rounded cursor-pointer w-full">
              <span>{language}</span>
              <Image
                src={pictue}
                width={20}
                height={10}
                alt="Language picture"
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
