import Header from "../header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
