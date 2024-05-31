import { resolveObjectURL } from "buffer";
import { Metadata } from "next";
import { title } from "process";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Post-news",
    template: "%s | Post-news",
  },
};

// export async function generateMetadata({ params, pathname, searchPathname }) {
//   return {
//     title: `Fazer Login ${pathname}`,
//     pathname,
//     searchPathname,
//   };
// }

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <section>{children}</section>;
}
