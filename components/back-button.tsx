import React from "react";
import { useRouter } from "next/router";
import Icon, { Icons } from "@/components/icon";
export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-transparent-100 mb-6 inline-flex w-24  items-center rounded-full py-2 px-6 shadow-md hover:shadow-indigo-500/50 "
    >
      <Icon icon={Icons.LeftArrow} />
      <span className="ml-1">Geri</span>
    </button>
  );
}
