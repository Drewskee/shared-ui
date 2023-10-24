import { ICalendarEvent } from "../";
import { generateGoogleCalendarUrl, generateIcsCalendarFile, generateYahooCalendarUrl } from './../utils';
import { PiMicrosoftOutlookLogoBold } from 'react-icons/pi';
import { IoLogoGoogle, IoLogoApple } from 'react-icons/io';
import { TbBrandYahoo } from 'react-icons/tb';

interface AddToCalendarButtonTooltipProps {
  calendarEvent: ICalendarEvent;
  tooltipWrapperCls?: string;
  tooltipListWrapperCls?: string;
}

export default function Tooltip({ calendarEvent }: AddToCalendarButtonTooltipProps) {
  const listCls = "relative flex h-[100%] items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 text-black dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
  if (!calendarEvent) return (<>
    <div>No event found</div>
  </>)

  const icons = !!calendarEvent.showBrandIcons;

  return (
    <div className="flex-col group-focus-within:block list-none absolute bg-gray-50 w-48 z-1 shadow-lg animate-slideIn" data-testid="add-to-calendar-button-tooltip">
      <a
        href={generateGoogleCalendarUrl(calendarEvent)}
        target="_blank" rel="noopener noreferrer"
        className={listCls}
        data-testid="calendar-provider-link">
        {icons && <IoLogoGoogle className="w-4" />}<span className="ml-2 icon__placeholder" /> Google Calendar
      </a>
      <a
        href={generateIcsCalendarFile(calendarEvent)}
        target="_blank" rel="noopener noreferrer"
        className={listCls}
        data-testid="calendar-provider-link">
        {icons && <IoLogoApple className="w-4" />} <span className="ml-2 icon__placeholder" /> Apple Calendar
      </a>

      <a
        href={generateYahooCalendarUrl(calendarEvent)}
        target="_blank" rel="noopener noreferrer"
        className={listCls}
        data-testid="calendar-provider-link">
        {icons && <TbBrandYahoo className="w-4" />} <span className="ml-2 icon__placeholder" /> Yahoo Calendar
      </a>

      <a
        href={generateIcsCalendarFile(calendarEvent)}
        target="_blank"
        rel="noopener noreferrer"
        className={listCls}
        data-testid="calendar-provider-link">
        {icons && <PiMicrosoftOutlookLogoBold className="w-4" />} <span className="ml-2 icon__placeholder" /> Outlook Calendar
      </a>
    </div>
  );
}

