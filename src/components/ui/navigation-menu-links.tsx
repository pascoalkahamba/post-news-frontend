"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useRouter, useParams, usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuLinks() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          className={
            pathname === "/"
              ? "border-b-2 border-cyan-600 border-solid mb-[-8px] p-2"
              : "mb-[-8px] p-2"
          }
        >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Página inicial
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={
            pathname === "/notifications"
              ? "border-b-2 border-cyan-600 border-solid mb-[-8px] p-2"
              : "mb-[-8px] p-2"
          }
        >
          <Link href="/notifications" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Notificações
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={
            pathname === "/best-posts"
              ? "border-b-2 border-cyan-600 border-solid mb-[-8px] p-2"
              : "mb-[-8px] p-2"
          }
        >
          <Link href="/best-posts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Posts em destaques
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
