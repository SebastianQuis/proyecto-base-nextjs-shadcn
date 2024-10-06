"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid grid-cols-2 gap-2">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/*TODO - VER QUE PASA CON EL MODO RESPONSIVE USANDO DRAWER, HAY ERORR EN CONSOLA*/}

      {
        // isDesktop ? (
        //   <Dialog open={open} onOpenChange={setOpen}>
        //     <DialogTrigger asChild>
        //       <Button variant="outline" className="text-2xl">
        //         Edit Profile isDesktop
        //       </Button>
        //     </DialogTrigger>
        //     <DialogContent className="sm:max-w-[425px]">
        //       <DialogHeader>
        //         <DialogTitle>Edit profile</DialogTitle>
        //         <DialogDescription>
        //           Make changes to your profile here. Click save when you're done.
        //         </DialogDescription>
        //       </DialogHeader>
        //       <ProfileForm />
        //     </DialogContent>
        //   </Dialog>
        // ) : (
        //   <Dialog open={open} onOpenChange={setOpen}>
        //     <DialogTrigger asChild>
        //       <Button variant="outline" className="text-2xl">
        //         Edit Profile !isDesktop
        //       </Button>
        //     </DialogTrigger>
        //     <DialogContent className="sm:max-w-[425px]">
        //       <DialogHeader>
        //         <DialogTitle>Edit profile</DialogTitle>
        //         <DialogDescription>
        //           Make changes to your profile here. Click save when you're done.
        //         </DialogDescription>
        //       </DialogHeader>
        //       <ProfileForm />
        //     </DialogContent>
        //   </Dialog>)
      }
    </div>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
