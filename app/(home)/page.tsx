"use client";

import { Button } from "@/components/ui/button";
import { LogIn, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  const { status, data } = useSession();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-xl">Bem vindo!</h1>
        {status === "authenticated" && data?.user && (
          <div className="flex flex-col">
            <div className="flex items-center gap-2 py-4">
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>

              <div className="flex flex-col">
                <p className="font-medium">{data.user.name}</p>
              </div>
            </div>

            <Separator />
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2">
          {status === "unauthenticated" && (
            <Button
              onClick={handleLoginClick}
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} />
              Fazer Login
            </Button>
          )}

          {status === "authenticated" && (
            <Button
              onClick={handleLogoutClick}
              className="w-full justify-start gap-2"
            >
              <LogOutIcon size={16} />
              Fazer Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
