
import { IButtonVariant, ColorKey, IButtonStyleDict } from './../shared.types';

export const styleDictionary: IButtonStyleDict[] = [
    {
        palette: ColorKey.primary, variant: IButtonVariant.filled,
        base: "text-white bg-brand-primary hover:bg-brand-primaryHover border-2 border-brand-primary hover:border-brand-primaryHover",
        active: "focus:bg-brand-primary focus:ring-bg-brand-primaryHover border-brand-primaryHover"
    },
    {
        palette: ColorKey.primary, variant: IButtonVariant.outlined,
        base: "text-brand-primary border-brand-primary border-2 bg-transparent hover:border-brand-primaryHover hover:text-brand-primaryHover",
        active: "focus:bg-transparent focus:ring-brand-primaryHover border-brand-primaryHover"
    },
    {
        palette: ColorKey.primary, variant: IButtonVariant.ghost,
        base: "text-brand-primary bg-transparent hover:text-brand-primaryHover",
        active: "focus:bg-transparent focus:ring-brand-primaryHover border-2 border-brand-primaryHover"
    },

    {
        palette: ColorKey.secondary, variant: IButtonVariant.filled,
        base: "text-black bg-brand-secondary hover:bg-brand-secondaryHover border-2 border-brand-secondary hover:border-brand-secondaryHover",
        active: "focus:bg-brand-secondary focus:ring-bg-brand-secondaryHover focus:border-brand-secondaryHover"
    },
    {
        palette: ColorKey.secondary, variant: IButtonVariant.outlined,
        base: "text-brand-secondary border-brand-secondary border-2 bg-transparent hover:border-brand-secondaryHover hover:text-brand-secondaryHover",
        active: "text-black hover:text-black focus:bg-brand-secondary focus:ring-brand-secondaryHover border-brand-secondaryHover"
    },
    {
        palette: ColorKey.secondary, variant: IButtonVariant.ghost,
        base: "text-brand-secondary bg-transparent hover:text-brand-secondaryHover",
        active: "focus:bg-transparent focus:ring-brand-secondaryHover border-2 border-brand-secondaryHover"
    },

    {
        palette: ColorKey.white, variant: IButtonVariant.filled,
        base: "bg-white text-black hover:text-brand-primary",
        active: "focus:bg-white focus:ring-white text-brand-primaryHover"
    },
    {
        palette: ColorKey.white, variant: IButtonVariant.outlined,
        base: "text-white border-white border-2 bg-transparent hover:bg-white hover:border-white hover:text-brand-primaryHover",
        active: "focus:bg-white focus:ring-white text-brand-primary"
    },
    {
        palette: ColorKey.white, variant: IButtonVariant.ghost,
        base: "text-white bg-transparent hover:text-white hover:border-2 hover:border-white",
        active: "focus:bg-transparent focus:ring-white border-2 border-white"
    },
    {
        palette: ColorKey.default, variant: IButtonVariant.filled,
        base: "",
        active: ""
    },
    {
        palette: ColorKey.default, variant: IButtonVariant.outlined,
        base: "",
        active: ""
    },
    {
        palette: ColorKey.default, variant: IButtonVariant.ghost,
        base: "",
        active: ""
    },
];
