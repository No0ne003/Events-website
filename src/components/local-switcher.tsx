"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Earth } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LocalSwitcher = () => {
  const router = useRouter();
  const localActive = useLocale();

  const switchLocale = (newLocale: string) => {
    router.replace(`/${newLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0 flex gap-1">
          <Earth className="size-[1.2rem]" />
          <p className="text-sm capitalize">{localActive}</p>
          <span className="sr-only">language switcher</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("fr")}>
          French
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("ar")}>
          Arabic
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocalSwitcher;
