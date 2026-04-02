import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:px-10 md:py-16">{children}</main>;
}
