import clsx, {ClassValue} from "clsx";
import {twMerge} from "tailwind-merge"

//apply clsx to classes and merge 
export const cn = (...classes : ClassValue[]) => twMerge(clsx(...classes));