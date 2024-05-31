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
import { LogOut, User, UserCheck } from "lucide-react";
import Link from "next/link";

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

export default function UserToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="dark:hover:bg-blue-600 hover:bg-blue-500 p-2 hover:cursor-pointer rounded"
        >
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/profile">
          <DropdownMenuItem className="p-0">
            <div className="flex justify-center items-center gap-2 p-2 hover:bg-blue-500 dark:hover:bg-blue-600 rounded cursor-pointer w-full">
              <span>Perfil</span>
              <UserCheck />
            </div>
          </DropdownMenuItem>
        </Link>
        <Link href="/logout">
          <DropdownMenuItem className="p-0">
            <div className="flex justify-center items-center gap-2 p-2 hover:bg-blue-500 dark:hover:bg-blue-600 rounded cursor-pointer w-full">
              <span>Sair</span>
              <LogOut />
            </div>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
