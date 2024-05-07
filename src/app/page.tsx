"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, useState } from "react";
type HandleClickProps = MouseEventHandler<HTMLElement> | undefined;

export default function HomePage() {
  return (
    <section>
      <p>Hello World</p>
      <Button variant="destructive" />
    </section>
  );
}
