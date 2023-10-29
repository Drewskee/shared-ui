import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...args: string[]) => {
    return twMerge(classnames(args));
}