"use client";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import NavigationMenuLinks from "@/components/ui/navigation-menu-links";
import UserToggle from "@/components/user-toggle";
import { User, MessageSquareMore } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <section className="flex justify-around items-center bg-blue-300 dark:bg-blue-900 py-2">
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
          <UserToggle />

          <div className="dark:hover:bg-blue-600 hover:bg-blue-500 p-2 hover:cursor-pointer rounded">
            <MessageSquareMore />
          </div>

          <ModeToggle />
        </div>
      </div>
    </section>
  );
}
