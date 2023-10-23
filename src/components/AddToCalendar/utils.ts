import { ICalendarEvent } from "./";

const MINUTE_IN_MS = 60 * 1000;

function getEndTime(calendarEvent: ICalendarEvent) {
  return calendarEvent.endDate ?? addMinutesToDate(calendarEvent.startDate, calendarEvent.durationInMinutes || 0);
}

function formatDateForCalendarUrl(date: Date) {
  return date.toISOString().replace(/-|:|\.\d+/g, '');

}
function addMinutesToDate(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * MINUTE_IN_MS);
}

export const generateGoogleCalendarUrl = (calendarEvent: ICalendarEvent) =>{
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(getEndTime(calendarEvent));

  const encodedUrl = encodeURI([
    'https://www.google.com/calendar/render',
    '?action=TEMPLATE',
    `&text=${  calendarEvent.title || ''}`,
    `&dates=${  startDate || ''}`,
    `/${  endDate || ''}`,
    // TODO: append video appointment link to description
    `&details=${  `${calendarEvent.description}\n`+`https://cemkiray.com` || ''}`,
    `&location=${  calendarEvent.address || ''}`,
    '&sprop=&sprop=name:'].join(''));

  return encodedUrl;
}

// Generates ICS for Apple and Outlook calendars
export const generateIcsCalendarFile = (calendarEvent: ICalendarEvent) => {
  const startDate = formatDateForCalendarUrl(calendarEvent.startDate);
  const endDate = formatDateForCalendarUrl(getEndTime(calendarEvent));

  const encodedUrl = encodeURI(
    `data:text/calendar;charset=utf8,${  [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `URL:${  document.URL}`,
      `DTSTART:${  startDate || ''}`,
      `DTEND:${  endDate || ''}`,
      `SUMMARY:${  calendarEvent.title || ''}`,
      `DESCRIPTION:${  calendarEvent.description || ''}`,
      `LOCATION:${  calendarEvent.address || ''}`,
      'END:VEVENT',
      'END:VCALENDAR'].join('\n')}`);

  return encodedUrl;
}

export const generateYahooCalendarUrl = (calendarEvent: ICalendarEvent) => {
  const st = helpers.formatTime(calendarEvent.startDate)
  const duration = helpers.getEventDurationForYahoo(calendarEvent);

  const encodedUrl = encodeURI([
    'http://calendar.yahoo.com/?v=60&view=d&type=20',
    `&title=${  calendarEvent.title || ''}`,
    `&st=${  st || ''}`,
    `&dur=${  duration || ''}`,
    `&desc=${  calendarEvent.description || ''}`,
    `&in_loc=${  calendarEvent.address || ''}`
  ].join(''));

  return encodedUrl;
}



const helpers = {
  formatTime (date: Date) {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  },
  getEventDurationForYahoo (calendarEvent: ICalendarEvent) {
    const eventDuration = calendarEvent.endDate ?
      ((calendarEvent.endDate.getTime() - calendarEvent.startDate.getTime()) / MINUTE_IN_MS) :
      calendarEvent.durationInMinutes || 0;

    const yahooHourDuration = eventDuration < 600 ?
      `0${  Math.floor((eventDuration / 60))}` :
      `${Math.floor((eventDuration / 60))  }`;

    const yahooMinuteDuration = eventDuration % 60 < 10 ?
      `0${  eventDuration % 60}` :
      `${eventDuration % 60  }`;

    const yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

    return yahooEventDuration;
  }
}