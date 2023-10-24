import React from "react";
import Tooltip from "./Tooltip";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...args: string[]) => {
    return twMerge(classnames(args));
}

import { IoIosAddCircleOutline } from 'react-icons/io';

export interface ICalendarEvent {
    title: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    durationInMinutes?: number;
    address?: string;
    showBrandIcons?: boolean;
}


interface AddToCalendarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    calendarEvent: ICalendarEvent;
    buttonText?: string;
    testId?: string;
    wrapperCls?: string;
    buttonCls?: string;
    tooltipWrapperCls?: string;
    tooltipListWrapperCls?: string;
    tooltipListItemCls?: string;
}

export default function AddToCalendarButton(props: AddToCalendarButtonProps) {
    const {
        calendarEvent,
        buttonText,
        testId,
        wrapperCls = "",
        buttonCls = "",
        tooltipWrapperCls = "",
        tooltipListWrapperCls = ""
    } = props;
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

    const showOpts = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsTooltipVisible(!isTooltipVisible);
    }

    const baseBtnCls = "flex items-center px-4 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

    return (
        <div className={cn(wrapperCls)} data-testid={testId ? `${testId}-add-to-calendar-wrapper` : "add-to-calendar-wrapper"}>
            <button onClick={showOpts} data-testid="add-to-calendar-button" className={cn(baseBtnCls, buttonCls)}>
                <IoIosAddCircleOutline className="w-4 text-[17px]" /> 
                <span className="flex ml-4">{buttonText ? buttonText : "Add to Calendar"}</span>
            </button>
            {isTooltipVisible && (
                <Tooltip calendarEvent={calendarEvent}
                    tooltipWrapperCls={tooltipWrapperCls}
                    tooltipListWrapperCls={tooltipListWrapperCls} />)}
        </div>
    );
}
