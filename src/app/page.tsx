"use client";
import { ModeToggle } from "@/components/modeToggle";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, useState } from "react";
type HandleClickProps = MouseEventHandler<HTMLElement> | undefined;

export interface CircleI {
  clientX: number;
  clientY: number;
}

export default function HomePage() {
  return (
    <section>
      <p>Hello World</p>
      <Button variant="destructive" />
    </section>
  );
}
