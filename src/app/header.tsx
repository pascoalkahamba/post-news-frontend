"use client";
import { ModeToggle } from "@/components/mode-toggle";
import NavigationMenuLinks from "@/components/ui/navigation-menu-links";
export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-800 p-2">
      <p>Post News</p>
      <NavigationMenuLinks />
      <ModeToggle />
    </div>
  );
}
