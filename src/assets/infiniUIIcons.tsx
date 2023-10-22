import { ReactSVG } from 'react-svg';

import { twMerge } from 'tailwind-merge';

import appleIcon from './svg_icons/apple.svg';
import wifiIcon from './svg_icons/wifi_icon.svg';

interface IIconFactory {
  name?: string;
  color?: string;
  classOverrides?: string;
}

const infiniUiIcons = (props: IIconFactory) => {
  const { name, color, classOverrides = '' } = props;

  const iconMap: Record<string, any> = {
    "apple": appleIcon,
    "wifiIcon": wifiIcon,
  };

  if (!name) return <></>;

  return (
    <ReactSVG
      src={iconMap[name]}
      className={twMerge(
        `flex-col justify-center w-16 [&_svg]:min-h-[30px] text-${color}`,
        classOverrides,
      )}
    />
  );
};

export default infiniUiIcons;