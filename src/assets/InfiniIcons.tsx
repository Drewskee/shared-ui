import { ReactSVG } from 'react-svg';

import { twMerge } from 'tailwind-merge';

import appleIcon from './svg_icons/apple.svg';
import bankIcon from './svg_icons/bank.svg';
import calendarIcon from './svg_icons/calendar_event.svg';
import cardsIcon from './svg_icons/cards.svg';
import cbxLogo from './svg_icons/cbx_logo.svg';
import chatBubbleIcon from './svg_icons/chat_bubble.svg';
import checkIcon from './svg_icons/check.svg';
import chevronDownIcon from './svg_icons/chevron-down.svg';
import chevronLeftIcon from './svg_icons/chevron-left.svg';
import chevronRightIcon from './svg_icons/chevron-right.svg';
import chevronUpIcon from './svg_icons/chevron-up.svg';
import connectionsIcon from './svg_icons/connections.svg';
import emailNotificationIcon from './svg_icons/email-notification.svg';
import emailBubbleIcon from './svg_icons/email_bubble.svg';
import emptyInboxIcon from './svg_icons/empty-inbox.svg';
import exclamationCircleIcon from './svg_icons/exclamation-circle.svg';
import eyeCloseIcon from './svg_icons/eye-close.svg';
import eyeOpenIcon from './svg_icons/eye-open.svg';
import googleIcon from './svg_icons/google.svg';
import hamburgerIcon from './svg_icons/hamburger.svg';
import informationCircleIcon from './svg_icons/information-circle.svg';
import mailIcon from './svg_icons/mail.svg';
import messageBubbleIcon from './svg_icons/message-bubble.svg';
import minusCircleIcon from './svg_icons/minus-circle.svg';
import payIcon from './svg_icons/pay.svg';
import plusCircleIcon from './svg_icons/plus-circle.svg';
import propertyIcon from './svg_icons/property.svg';
import sendInvitationIcon from './svg_icons/send-invitation.svg';
import wifiIcon from './svg_icons/wifi_icon.svg';

interface IIconFactory {
  name?: string;
  color?: string;
  classOverrides?: string;
}

const infiniUIIcons = (props: IIconFactory) => {
  const { name, color, classOverrides = '' } = props;

  const iconMap: Record<string, any> = {
    "apple": appleIcon,
    "google": googleIcon,
    "bank": bankIcon,
    "calendar": calendarIcon,
    "cards": cardsIcon,
    "check": checkIcon,
    'chevron-down': chevronDownIcon,
    'chevron-up': chevronUpIcon,
    'chevron-left': chevronLeftIcon,
    'chevron-right': chevronRightIcon,
    'email-notification': emailNotificationIcon,
    'empty-inbox': emptyInboxIcon,
    "mail": mailIcon,
    "eyeClose": eyeCloseIcon,
    "eyeOpen": eyeOpenIcon,
    "hamburger": hamburgerIcon,
    'information-circle': informationCircleIcon,
    'exclamation-circle': exclamationCircleIcon,
    'minus-circle': minusCircleIcon,
    'plus-circle': plusCircleIcon,
    "property": propertyIcon,
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

export default infiniUIIcons;