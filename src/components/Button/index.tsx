import React from "react";
import type { IButton } from './types';
import { IButtonStyleDict } from './types';
import { styleDictionary } from './const';
import { cn } from './../../utils/helpers';

const Button = ({
  dataTestId,
  classOverrides = '',
  text,
  disabled = false,
  brandColor,
  variant,
  startIcon,
  endIcon,
  onClick,
}: IButton) => {

  const [isFocused, setFocused] = React.useState<boolean>(false)
  const btnRef = React.useRef<any>()
  const clsBase = "flex flex-row px-6 py-2 rounded-xl cursor-pointer justify-between items-center";
  const disabledCls = "cursor-not-allowed border-2 bg-gray-600 border-gray-300 text-gray-300 hover:text-gray-300 hover:bg-gray-600 hover:border-gray-300";
  const palette = styleDictionary.find((dict: IButtonStyleDict) => dict.palette === brandColor && dict.variant === variant)

  const isDisabledCls = (disabled: boolean) => {
    return palette && disabled && disabledCls || "";
  }

  const isActiveCls = () => {
    return palette && !disabled && isFocused && palette.active || "";
  }

  const baseCls = () => {
    return palette && palette.base || "";
  }

  const _onFocus = () => {
    setFocused(true)
  }
  const _onBlur = () => {
    setFocused(false)
  }

  return (
    <button
      ref={btnRef}
      onFocus={_onFocus}
      onBlur={_onBlur}
      onClick={onClick}
      data-testid={dataTestId}
      disabled={disabled}
      type="button"
      className={cn(clsBase,
        baseCls(),
        isActiveCls(),
        isDisabledCls(disabled),
        classOverrides)}
    >
      <span className="mr-2">{startIcon && startIcon}</span> <span>{text}</span> {endIcon && endIcon}
    </button>
  );
};

export default Button;