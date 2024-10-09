import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-xl">Bem vindo!</h1>
        <Button className="gap-2">
          <LogIn />
          Fazer login
        </Button>
      </div>
    </div>
  );
}
