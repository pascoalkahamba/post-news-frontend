"use client";
import Header from "../header";

interface BestPostsLayoutProps {
  children: React.ReactNode;
}

export default function BestPostsLayout({ children }: BestPostsLayoutProps) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
