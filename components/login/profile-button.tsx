"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dashBoardLogout, dashBoardMenus } from "@/config/dashboard";
import { shimmer, toBase64 } from "@/lib/utils";
import { supabase } from "@/utils/supabase-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ProfileButtonProps {
  profileImageUrl?: string;
}

const ProfileButton: FC<ProfileButtonProps> = ({ profileImageUrl }) => {
  const router = useRouter();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }

    router.refresh();
  };

  return (
    <div className="flex sm:ml-4 sm:mt-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={profileImageUrl || "/images/user-placeholder.png"}
            alt="Avatar"
            height={40}
            width={40}
            className="h-[40px] w-[40px] rounded-full"
            priority
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(40, 40),
            )}`}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 font-sans">
          <Link
            href={dashBoardMenus.post.slug || ""}
            className="group inline-flex w-full items-center rounded-md bg-white px-3 py-1.5 hover:bg-gray-100"
          >
            <dashBoardMenus.post.icon className="mr-2 h-4 w-4 text-gray-500 group-hover:text-gray-900" />
            <span className="text-sm text-gray-500 group-hover:text-gray-900">
              {dashBoardMenus.post.title}
            </span>
          </Link>
          <DropdownMenuSeparator />

          <Link
            href={dashBoardMenus.bookmarks.slug || ""}
            className="group inline-flex w-full items-center rounded-md bg-white px-3 py-1.5 hover:bg-gray-100"
          >
            <dashBoardMenus.bookmarks.icon className="mr-2 h-4 w-4 text-gray-500 group-hover:text-gray-900" />
            <span className="text-sm text-gray-500 group-hover:text-gray-900">
              {dashBoardMenus.bookmarks.title}
            </span>
          </Link>
          <DropdownMenuSeparator />

          <Link
            href={dashBoardMenus.settings.slug || ""}
            className="group inline-flex w-full items-center rounded-md bg-white px-3 py-1.5 hover:bg-gray-100"
          >
            <dashBoardMenus.settings.icon className="mr-2 h-4 w-4 text-gray-500 group-hover:text-gray-900" />
            <span className="text-sm text-gray-500 group-hover:text-gray-900">
              {dashBoardMenus.settings.title}
            </span>
          </Link>
          <DropdownMenuSeparator />

          <button
            onClick={signOut}
            type="button"
            className="group inline-flex w-full items-center rounded-md bg-white px-3 py-1.5 hover:bg-gray-100"
          >
            <dashBoardLogout.icon className="mr-2 h-4 w-4 text-gray-500 group-hover:text-gray-900" />
            <span className="group-hover:text-gray-90 text-sm text-gray-500">
              {dashBoardLogout.title}
            </span>
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileButton;
