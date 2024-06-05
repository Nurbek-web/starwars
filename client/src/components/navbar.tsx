"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { ModeToggle } from "./theme-button";

export default function MainNav() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-20">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          href="#"
        >
          <ChefHatIcon className="h-6 w-6" />
          <span className="sr-only">nFactorial Incubator 2024</span>
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/"
        >
          Characters
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/about"
        >
          Planets
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/about"
        >
          Spaceships
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/about"
        >
          About
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              href="#"
            >
              <ChefHatIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="/"
            >
              Recipes
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="/about"
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}

function ChefHatIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
      <path d="M6 17h12" />
    </svg>
  );
}
