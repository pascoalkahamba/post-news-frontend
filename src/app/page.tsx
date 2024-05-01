"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MouseEventHandler, useState } from "react";
type HandleClickProps = MouseEventHandler<HTMLElement> | undefined;

export interface CircleI {
  clientX: number;
  clientY: number;
}

export default function HomePage() {
  function isPalindrome(num: number): boolean {
    const nums = String(num).split("");
    const firstNum = nums[0];
    const lastNum = nums.at(-1);

    if (firstNum === lastNum) return true;
    else return false;
  }

  console.log(isPalindrome(1212312));
  return (
    <section>
      <p>Hello World</p>
      <Button variant="destructive" />
    </section>
  );
}
