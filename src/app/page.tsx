"use client";
import { useState } from "react";

// import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// import { Abhaya_Libre } from "next/font/google";

// const abhaya = Abhaya_Libre({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

export default function Home() {
  const [password, setPassword] = useState("");

  const { toast } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEnter = () => {
    if (password === "123") {
      window.location.href  = "/home"
    } else {
      toast({
        title: "Incorrect Password",
        description: "Try again.",
        variant:"destructive"
      })
    }
  }

  return (
    <div className="bg-gray-500 h-screen w-screen flex flex-col justify-center items-center">
      <div className="mx-auto flex justify-center items-center gap-4">
        {/* <Label
          htmlFor="password-input"
          className={cn("text-xl font-extralight", abhaya.className)}
        >
          Password
        </Label> */}
        <Input
          type="text"
          id="password-input"
          className="bg-white"
          onChange={handleInputChange}
        />
        <Button onClick={handleEnter} className="bg-transparent">Enter</Button>
      </div>
    </div>
  );
}
