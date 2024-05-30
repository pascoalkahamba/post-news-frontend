interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <section>
      <h1>Pagina Login</h1>
      {children}
    </section>
  );
}
