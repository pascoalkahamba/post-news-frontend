"use client";
import Header from "../header";

interface NotificationsLayoutProps {
  children: React.ReactNode;
}

export default function NotificationsLayout({
  children,
}: NotificationsLayoutProps) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
