"use client";
import { LanguageToggle } from "@/components/language-toggle";
import { ModeToggle } from "@/components/mode-toggle";
import NavigationMenuLinks from "@/components/ui/navigation-menu-links";
import Image from "next/image";
export default function Header() {
  return (
    <div className="flex justify-around items-center bg-slate-800 py-2">
      <Image
        src="/new-york-post.png"
        width={50}
        height={40}
        alt="website Picture"
      />
      <NavigationMenuLinks />
      <div className="flex justify-center items-center gap-12">
        <LanguageToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
