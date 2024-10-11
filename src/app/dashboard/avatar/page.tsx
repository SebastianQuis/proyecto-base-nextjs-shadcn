import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
  return (
    <div className="h-[500px] flex items-center justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-xl m-2">shadcn/ui</h1>
    </div>
  );
}
