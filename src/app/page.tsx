import { redirect } from "next/navigation";

export default function Home() {
  // redireccionar a esta ruta
  redirect("dashboard/home");
}
