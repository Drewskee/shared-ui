import React from "react";
import Tooltip from "./Tooltip";
import { ButtonVariant, ColorKey } from './../shared.types';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Button from "./../Button";
import { cn } from './../../utils/helpers';

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
    startIcon?: JSX.Element;
    variant?: ButtonVariant;
    brandColor?: ColorKey;
}

export default function AddToCalendarButton(props: AddToCalendarButtonProps) {
    const {
        calendarEvent,
        buttonText = "Add to Calendar",
        testId,
        wrapperCls = "",
        buttonCls = "",
        tooltipWrapperCls = "",
        tooltipListWrapperCls = "",
        startIcon,
        variant = ButtonVariant.ghost,
        brandColor = ColorKey.primary
    } = props;
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

    const showOpts = () => {
        setIsTooltipVisible(!isTooltipVisible);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        showOpts();
    }

    const baseBtnCls = "flex items-center gap-2 px-4 py-2";

    return (
        <div className={cn(wrapperCls)} data-testid={testId ? `${testId}-add-to-calendar-wrapper` : "add-to-calendar-wrapper"}>
            <Button variant={variant} brandColor={brandColor} classOverrides={cn(baseBtnCls, buttonCls)} onClick={handleClick} dataTestId="infini-ui-data-testid" text={buttonText} startIcon={startIcon || <IoIosAddCircleOutline className="w-4 text-[17px]" />}></Button>
            
            {isTooltipVisible && (
                <Tooltip calendarEvent={calendarEvent}
                    tooltipWrapperCls={tooltipWrapperCls}
                    tooltipListWrapperCls={tooltipListWrapperCls} />)}
        </div>
    );
}
