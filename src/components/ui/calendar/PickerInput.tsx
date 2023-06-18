import React, { useCallback, useContext, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

import { BORDER_COLOR, DATE_FORMAT, RING_COLOR } from "./constants";
import DatepickerContext from "./context";
import { dateIsValid } from "./helpers";
import PickerToggleButton from "./PickerToggleButton";

type Props = {
    setContextRef?: (ref: React.RefObject<HTMLInputElement>) => void;
};

const PickerInput: React.FC<Props> = (e: Props) => {
    // Context
    const {
        primaryColor,
        period,
        dayHover,
        changeDayHover,
        calendarContainer,
        inputText,
        changeInputText,
        hideDatepicker,
        changeDatepickerValue,
        asSingle,
        placeholder,
        separator,
        disabled,
        inputClassName,
        toggleClassName,
        toggleIcon,
        readOnly,
        displayFormat,
        inputId,
        inputName,
        classNames,
    } = useContext(DatepickerContext);

    // UseRefs
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (
            inputRef &&
            e.setContextRef &&
            typeof e.setContextRef === "function"
        ) {
            e.setContextRef(inputRef);
        }
    }, [e, inputRef]);

    // Functions
    const getClassName = useCallback(() => {
        const input = inputRef.current;

        if (
            input &&
            typeof classNames != "undefined" &&
            typeof classNames.input === "function"
        ) {
            return classNames?.input(input);
        }

        const border =
            BORDER_COLOR.focus[primaryColor as keyof typeof BORDER_COLOR.focus];
        const ring =
            RING_COLOR["second-focus"][
                primaryColor as keyof (typeof RING_COLOR)["second-focus"]
            ];
        const classNameOverload =
            typeof inputClassName === "string" ? inputClassName : "";
        return twMerge(
            `relative border transition-all duration-300 py-2 pl-3 pr-14 w-full border-slate-300 dark:text-slate-50 dark:border-slate-700 rounded-md text-sm placeholder-slate-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${border} ${ring} ${classNameOverload}`
        );
    }, [inputRef, classNames, primaryColor, inputClassName]);

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;
            const start = `${inputValue.slice(0, 4)}-${inputValue.slice(
                5,
                7
            )}-${inputValue.slice(8, 10)}`;
            const end = `${inputValue.slice(13, 17)}-${inputValue.slice(
                18,
                20
            )}-${inputValue.slice(21, inputValue.length)}`;
            const input = inputRef?.current;

            if (
                start.length === 10 &&
                end.length === 10 &&
                dateIsValid(new Date(start)) &&
                dateIsValid(new Date(end)) &&
                dayjs(start).isBefore(end)
            ) {
                changeDatepickerValue(
                    {
                        startDate: start,
                        endDate: end,
                    },
                    e.target
                );
                changeDayHover(dayjs(end).add(-1, "day").format(DATE_FORMAT));
                hideDatepicker();
                if (input) {
                    input.blur();
                }
            }
            changeInputText(e.target.value);
        },
        [changeDatepickerValue, changeDayHover, changeInputText, hideDatepicker]
    );

    // UseEffects && UseLayoutEffect
    useEffect(() => {
        const button = buttonRef?.current;

        function focusInput(e: Event) {
            e.stopPropagation();
            const input = inputRef.current;

            if (input) {
                input.focus();
                if (inputText && !readOnly) {
                    changeInputText("");
                    if (dayHover) {
                        changeDayHover(null);
                    }
                    if (period.start && period.end) {
                        changeDatepickerValue(
                            {
                                startDate: null,
                                endDate: null,
                            },
                            input
                        );
                    }
                }
            }
        }

        if (button) {
            button.addEventListener("click", focusInput);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", focusInput);
            }
        };
    }, [
        changeDatepickerValue,
        changeDayHover,
        changeInputText,
        dayHover,
        inputText,
        period.end,
        period.start,
        readOnly,
        inputRef,
    ]);

    useEffect(() => {
        const div = calendarContainer?.current;
        const input = inputRef.current;

        function showCalendarContainer() {
            if (div && div.classList.contains("hidden")) {
                div.classList.remove("hidden");
                div.classList.add("block");
                // window.innerWidth === 767
                if (
                    window.innerWidth > 767 &&
                    window.screen.height - 100 <
                        div.getBoundingClientRect().bottom
                ) {
                    div.classList.add("bottom-full");
                    div.classList.add("mb-2.5");
                    div.classList.remove("mt-2.5");
                }
                setTimeout(() => {
                    div.classList.remove("translate-y-4");
                    div.classList.remove("opacity-0");
                    div.classList.add("translate-y-0");
                    div.classList.add("opacity-1");
                }, 1);
            }
        }

        if (div && input) {
            input.addEventListener("focus", showCalendarContainer);
        }

        return () => {
            if (input) {
                input.removeEventListener("focus", showCalendarContainer);
            }
        };
    }, [calendarContainer]);

    const renderToggleIcon = useCallback(
        (isEmpty: boolean) => {
            return typeof toggleIcon === "undefined" ? (
                <PickerToggleButton isEmpty={isEmpty} />
            ) : (
                toggleIcon(isEmpty)
            );
        },
        [toggleIcon]
    );

    const getToggleClassName = useCallback(() => {
        const button = buttonRef.current;

        if (
            button &&
            typeof classNames !== "undefined" &&
            typeof classNames.toggleButton === "function"
        ) {
            return classNames.toggleButton(button);
        }

        return twMerge(
            `absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed`,
            toggleClassName
        );
    }, [toggleClassName, buttonRef, classNames]);

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                className={twMerge(getClassName())}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={
                    placeholder
                        ? placeholder
                        : `${displayFormat ?? ""}${
                              asSingle
                                  ? ""
                                  : ` ${separator ?? ""} ${displayFormat ?? ""}`
                          }`
                }
                value={inputText}
                id={inputId}
                name={inputName}
                autoComplete="off"
                role="presentation"
                onChange={handleInputChange}
            />

            <button
                type="button"
                ref={buttonRef}
                disabled={disabled}
                className={getToggleClassName()}>
                {renderToggleIcon(
                    inputText == null ||
                        (inputText != null && !inputText.length)
                )}
            </button>
        </>
    );
};

export default PickerInput;
