"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import { useState } from "react";


export default function HomePage() {

  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Dialog>


        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>


        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                onChange={ (event) => {
                  // console.log(event.target.value);
                  setInputValue(event.target.value);
                }}
                id="link"
                defaultValue={ inputValue }
                // readOnly
              />
            </div>
            <Button type="submit" size="sm" className="px-3" 
              onClick={ () => { 
                
                navigator.clipboard.writeText( inputValue.trim() ); 
                // todo - mostrar texto de "copied"

              }}>
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}