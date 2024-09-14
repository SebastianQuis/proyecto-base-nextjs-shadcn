import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


/**
 * funcion helper ayuda a unir y sobrescribir clases basado
 * en objetos y condiciones, una funcion de que todos los componentes
 * usan un mismo estilo
 */


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
