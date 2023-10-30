import { ICalendarEvent } from "../";
import { generateGoogleCalendarUrl, generateIcsCalendarFile, generateYahooCalendarUrl } from './../utils';
import { PiMicrosoftOutlookLogoBold } from 'react-icons/pi';
import { IoLogoGoogle, IoLogoApple } from 'react-icons/io';
import { TbBrandYahoo } from 'react-icons/tb';
import { cn } from "../../../utils/helpers";

interface AddToCalendarButtonTooltipProps {
  calendarEvent: ICalendarEvent;
  tooltipItemsCls?: string;
  tooltipListWrapperCls?: string;
  showBrandIcons: boolean;
  options: Array<ICalendarOption | string>
}

export enum ICalendarOption {
  Apple = "Apple",
  Google = "Google",
  Yahoo = "Yahoo",
  Outlook = "Outlook",
}

export default function Tooltip({ calendarEvent, options, showBrandIcons, tooltipItemsCls = '', tooltipListWrapperCls = '' }: AddToCalendarButtonTooltipProps) {
  const listItemCls = "relative flex h-[100%] items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 text-black dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  if (!calendarEvent) return (<>
    <div>No event found</div>
  </>)

  const icons = !!showBrandIcons;

  const generateGoogleLink = (text: string, iconEl: JSX.Element) => {
    return (<a
      href={generateGoogleCalendarUrl(calendarEvent)}
      target="_blank" rel="noopener noreferrer"
      className={cn(listItemCls, tooltipItemsCls)}
      data-testid="calendar-link">
      {icons && iconEl}<span className="ml-2 icon__placeholder" /> {text}
    </a>)
  }

  const generateICSLink = (text: string, iconEl: JSX.Element) => {
    return (<a
      href={generateIcsCalendarFile(calendarEvent)}
      target="_blank" rel="noopener noreferrer"
      className={cn(listItemCls, tooltipItemsCls)}
      data-testid="calendar-link">
      {icons && iconEl}<span className="ml-2 icon__placeholder" /> {text}
    </a>)
  }

  const generateYahooLink = (text: string, iconEl: JSX.Element) => {
    return (<a
      href={generateYahooCalendarUrl(calendarEvent)}
      target="_blank" rel="noopener noreferrer"
      className={cn(listItemCls, tooltipItemsCls)}
      data-testid="calendar-link">
      {icons && iconEl} <span className="ml-2 icon__placeholder" /> {text}
    </a>)
  }

  return (
    <div className={cn("flex-col mt-2 rounded-lg overflow-hidden group-focus-within:block list-none absolute bg-gray-50 w-48 z-1 shadow-lg animate-slideIn", tooltipListWrapperCls)} data-testid="add-to-calendar-button-tooltip">
      {options && options.length && options.map((cal) => {
        if (cal === ICalendarOption.Google || cal.toLocaleLowerCase() == "google") {
          return generateGoogleLink("Google Calendar", <IoLogoGoogle className="w-4" />);
        } else if (cal === ICalendarOption.Apple || cal.toLocaleLowerCase() == "apple") {
          return generateICSLink("Apple Calendar", <IoLogoApple className="w-4" />);
        } else if (cal === ICalendarOption.Outlook || cal.toLocaleLowerCase() == "outlook") {
          return generateICSLink("Outlook Calendar", <PiMicrosoftOutlookLogoBold className="w-4" />);
        } else if (cal === ICalendarOption.Yahoo || cal.toLocaleLowerCase() == "yahoo") {
          return generateYahooLink("Yahoo Calendar", <TbBrandYahoo className="w-4" />);
        }
      })}
    </div>
  );
}

