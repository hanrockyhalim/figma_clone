"use client";

import Live from "@/components/Live";
import { Room } from "./Room";

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <h1 className="text-2xl text-white">Figma Clone</h1>
      <Live />
    </div>
  );
}
