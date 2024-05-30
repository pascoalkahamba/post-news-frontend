"use client";
import Header from "../header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
