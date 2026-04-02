import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-16">{children}</main>;
}
