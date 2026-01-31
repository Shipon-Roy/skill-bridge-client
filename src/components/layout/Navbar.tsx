"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Container from "./Container";
import { GiGraduateCap } from "react-icons/gi";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "logo",
    alt: "logo",
    title: "Skill Bridge",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Tutors",
      url: "/tutors",
    },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  },
  className,
}: Navbar1Props) => {
  return (
    <section
      className={cn(
        "py-6 bg-linear-to-r bg-gray-900  backdrop-blur-md shadow-2xl border-b border-green-500/20 sticky top-0 z-50",
        className,
      )}
    >
      <Container>
        <div className="container mx-auto px-6">
          {/* Desktop Menu */}
          <nav className="hidden items-center justify-between lg:flex">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link
                href={logo.url}
                className="flex items-center gap-3 group hover:scale-105 transition-all p-2 rounded-xl hover:bg-green-500/10"
              >
                <span className="text-4xl text-green-400 drop-shadow-lg group-hover:text-green-300">
                  <GiGraduateCap />
                </span>
                <span className="text-2xl font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent tracking-tight">
                  {logo.title}
                </span>
              </Link>
              <div className="flex items-center">
                <NavigationMenu className="backdrop-blur-sm">
                  <NavigationMenuList className="gap-2">
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-11 px-6 border-green-500/50 bg-gray-800/50 hover:bg-green-500/10 hover:border-green-400 text-gray-300 hover:text-white backdrop-blur"
              >
                <Link href={auth.login.url}>{auth.login.title}</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="h-11 px-6 bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-xl hover:shadow-green-500/25 text-white font-semibold"
              >
                <Link href={auth.signup.url}>{auth.signup.title}</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href={logo.url}
                className="flex items-center gap-3 group hover:scale-105 transition-all p-2 rounded-xl hover:bg-green-500/10"
              >
                <span className="text-3xl text-green-400 drop-shadow-lg group-hover:text-green-300">
                  <GiGraduateCap />
                </span>
                <span className="text-xl font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {logo.title}
                </span>
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 hover:bg-gray-800/50 backdrop-blur"
                  >
                    <Menu className="size-6 text-gray-300" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-linear-to-b from-gray-900 to-black/50 border-green-500/30 backdrop-blur-xl p-0 w-80">
                  <SheetHeader className="p-8 border-b border-green-500/20">
                    <SheetTitle className="flex items-center gap-3">
                      <span className="text-3xl text-green-400 drop-shadow-lg">
                        <GiGraduateCap />
                      </span>
                      <span className="text-2xl font-bold bg-linear-to-r from-white to-gray-200 bg-clip-text text-transparent">
                        {logo.title}
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-8">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-800/50">
                      <Button
                        asChild
                        variant="outline"
                        className="h-14 border-green-500/50 bg-gray-800/30 hover:bg-green-500/10 text-gray-300 hover:text-white backdrop-blur"
                      >
                        <Link href={auth.login.url}>{auth.login.title}</Link>
                      </Button>
                      <Button
                        asChild
                        className="h-14 bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-xl hover:shadow-green-500/25 text-white font-semibold"
                      >
                        <Link href={auth.signup.url}>{auth.signup.title}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="group inline-flex h-12 w-max items-center justify-center rounded-xl bg-gray-800/50 backdrop-blur border border-transparent hover:border-green-500/50 px-6 py-3 text-sm font-semibold text-gray-200 hover:text-white hover:bg-gray-800/80 transition-all duration-300 shadow-lg hover:shadow-green-500/10"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link
      key={item.title}
      href={item.url}
      className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-800/60 transition-all text-lg font-semibold text-gray-200 hover:text-white border border-transparent hover:border-green-500/50"
    >
      {item.title}
    </Link>
  );
};

export { Navbar };
