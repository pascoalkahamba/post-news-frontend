"use client";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import NavigationMenuLinks from "@/components/ui/navigation-menu-links";
import { User, MessageSquareMore } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex justify-around items-center bg-blue-300 dark:bg-blue-400 py-2">
      <Image
        src="/new-york-post.png"
        width={50}
        height={40}
        alt="website Picture"
      />
      <NavigationMenuLinks />
      <div className="flex justify-center items-center gap-12">
        <LanguageToggle />
        <div className="flex justify-evenly items-center gap-2">
          <div className="dark:hover:bg-blue-600 hover:bg-blue-500 p-2 hover:cursor-pointer rounded">
            <User />
          </div>
          <div className="dark:hover:bg-blue-600 hover:bg-blue-500 p-2 hover:cursor-pointer rounded">
            <MessageSquareMore />
          </div>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
