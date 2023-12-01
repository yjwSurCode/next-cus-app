import "../../styles/globals.css";
import React from "react";
import { redirect } from "next/navigation";
import Providers from "@/app/(app)/providers";
import { PostHogIdentify } from "@/providers/PostHogProvider";
// import { SideNavWithTopNav } from "@/components/SideNavWithTopNav";
// import { TokenCheck } from "@/components/TokenCheck";
// import { auth } from "@/app/api/auth/[...nextauth]/auth";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();

  // if (!session?.user.email) redirect("/login");

  return (
    <Providers>
      <PostHogIdentify />
      {/* <TokenCheck /> */}
      <div>(app) layout</div>
      <div>{children}</div>
    </Providers>
  );
}
