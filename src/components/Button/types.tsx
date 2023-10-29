import { ComponentPropsWithoutRef } from 'react';

export interface IButtonStory {
  classOverrides?: string;
  dataTestId: string;
  variant?: IButtonVariant;
  brandColor?: ColorKey;
  text: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
}

export interface IButton extends ComponentPropsWithoutRef<'button'> {
  classOverrides?: string;
  dataTestId: string;
  isLoading?: boolean;
  variant?: IButtonVariant;
  brandColor?: ColorKey;
  text: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum ColorKey {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  default = "default",
  white = "white",
};

export enum IButtonVariant {
  outlined = "outlined",
  filled = "filled",
  ghost = "ghost",
}


export interface IButtonStyleDict {
  palette: ColorKey,
  variant: IButtonVariant,
  base: string;
  active: string;
  disabled?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}