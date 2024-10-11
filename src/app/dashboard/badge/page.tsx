import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex gap-3">
      <Badge>default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge capitalize={true} variant={"info"}>
        info
      </Badge>
      <Badge capitalize={true} variant={"success"}>
        success
      </Badge>
    </div>
  );
}
