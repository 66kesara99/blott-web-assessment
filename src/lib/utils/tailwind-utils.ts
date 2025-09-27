import { ClassArray, ClassDictionary, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassDictionary
  | ClassArray;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
