import { MouseEventHandler, useState } from "react";
import Dashboard from "./dashboard/page";
type HandleClickProps = MouseEventHandler<HTMLElement> | undefined;

export default function HomePage() {
  return <Dashboard />;
}
