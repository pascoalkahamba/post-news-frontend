interface LayoutCreateAccountProps {
  children: React.ReactNode;
}

export default function LayoutCreateAccount({
  children,
}: LayoutCreateAccountProps) {
  return (
    <section>
      <h1>Criar conta</h1>
      {children}
    </section>
  );
}
