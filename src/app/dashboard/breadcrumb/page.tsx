"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation"; // Importa usePathname
import { useEffect, useState } from "react";

export default function HomePage() {
  const pathname = usePathname(); // Obtén la ruta actual con usePathname
  const [pathSegments, setPathSegments] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const segments = pathname.split("/").filter(Boolean); // Obtén los segmentos del pathname
      setPathSegments(segments as []); // Actualiza los segmentos
    }
  }, [pathname]); // Actualiza los segmentos cuando cambie la ruta

  return (
    <div>
      <h1>{pathname}</h1>
      <h1>{}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {/* [ dashboard, breadcumb ] */}
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            console.log(href); // /dashboard/breadcrumb

            return (
              <div key={index} className="flex items-center">
                <BreadcrumbItem>
                  {index === pathSegments.length - 1 ? ( // 1 -1
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <div>
                      <BreadcrumbLink href={href}>
                        {segment === "dashboard" ? null : segment}
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </div>
                  )}
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator /> */}
              </div>
            );
          })}

          {/* <BreadcrumbSeparator /> */}
          {/* <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
