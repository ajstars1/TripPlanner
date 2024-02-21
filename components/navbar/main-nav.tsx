import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex text-sm items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/"
        className="font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
