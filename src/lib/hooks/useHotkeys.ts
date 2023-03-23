import { useEffect } from "react";

export type KeyboardModifiers = {
    alt: boolean;
    ctrl: boolean;
    meta: boolean;
    mod: boolean;
    shift: boolean;
};

export type Hotkey = KeyboardModifiers & {
    key?: string;
};

type CheckHotkeyMatch = (event: KeyboardEvent) => boolean;

/**
 * Function to parse a hotkey string into a Hotkey object
 * @param {string} hotkey - The hotkey string to parse
 * @returns {Hotkey} - The parsed hotkey object
 */
export function parseHotkey(hotkey: string): Hotkey {
    const keys = hotkey
        .toLowerCase()
        .split("+")
        .map((part) => part.trim());

    const modifiers: KeyboardModifiers = {
        alt: keys.includes("alt"),
        ctrl: keys.includes("ctrl"),
        meta: keys.includes("meta"),
        mod: keys.includes("mod"),
        shift: keys.includes("shift"),
    };

    const reservedKeys = ["alt", "ctrl", "meta", "shift", "mod"];

    const freeKey = keys.find((key) => !reservedKeys.includes(key));

    return {
        ...modifiers,
        key: freeKey,
    };
}

/**
 * Function to check if a keyboard event matches a given hotkey
 * @param {Hotkey} hotkey - The hotkey to check against
 * @param {KeyboardEvent} event - The keyboard event to check
 * @returns {boolean} - Whether the hotkey and event match
 */
function isExactHotkey(hotkey: Hotkey, event: KeyboardEvent): boolean {
    const { alt, ctrl, meta, mod, shift, key } = hotkey;
    const { altKey, ctrlKey, metaKey, shiftKey, key: pressedKey } = event;

    if (alt !== altKey) {
        return false;
    }

    if (mod) {
        if (!ctrlKey && !metaKey) {
            return false;
        }
    } else {
        if (ctrl !== ctrlKey) {
            return false;
        }
        if (meta !== metaKey) {
            return false;
        }
    }
    if (shift !== shiftKey) {
        return false;
    }

    if (
        key &&
        (pressedKey.toLowerCase() === key.toLowerCase() ||
            event.code.replace("Key", "").toLowerCase() === key.toLowerCase())
    ) {
        return true;
    }

    return false;
}

/**
 * Function to check if a hotkey matches an event
 * @param {string} hotkey - The hotkey to match
 * @returns {CheckHotkeyMatch} - A function to check if the hotkey matches the event
 */
export function getHotkeyMatcher(hotkey: string): CheckHotkeyMatch {
    return (event) => isExactHotkey(parseHotkey(hotkey), event);
}

export interface HotkeyItemOptions {
    preventDefault?: boolean;
}

type HotkeyItem = [
    string,
    (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => void,
    HotkeyItemOptions?
];

/**
 * Function to get a hotkey handler
 * @param {HotkeyItem[]} hotkeys - An array of hotkey items
 * @returns {(event:React.KeyboardEvent<HTMLElement> | KeyboardEvent ) => void } - A function that handles hotkey events
 */
export function getHotkeyHandler(
    hotkeys: HotkeyItem[]
): (event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => void {
    return (event) => {
        const _event = "nativeEvent" in event ? event.nativeEvent : event;
        hotkeys.forEach(
            ([hotkey, handler, options = { preventDefault: true }]) => {
                if (getHotkeyMatcher(hotkey)(_event)) {
                    if (options.preventDefault) {
                        event.preventDefault();
                    }

                    handler(_event);
                }
            }
        );
    };
}

/**
 * Function to determine if an event should be fired
 * @param {KeyboardEvent} event - The event to be fired
 * @param {string[]} tagsToIgnore - An array of tags to ignore
 * @param  [triggerOnContentEditable=false] - Whether to trigger on content editable elements
 * @returns {boolean} - Whether the event should be fired
 */
function shouldFireEvent(
    event: KeyboardEvent,
    tagsToIgnore: string[],
    triggerOnContentEditable = false
): boolean {
    if (event.target instanceof HTMLElement) {
        if (triggerOnContentEditable) {
            return !tagsToIgnore.includes(event.target.tagName);
        }

        return (
            !event.target.isContentEditable &&
            !tagsToIgnore.includes(event.target.tagName)
        );
    }

    return true;
}

/**
 * Function to add hotkeys to a webpage
 * @param {HotkeyItem[]} hotkeys - An array of hotkey items
 * @param {string[]} [tagsToIgnore=["INPUT", "TEXTAREA", "SELECT"]] - An array of tags to ignore when triggering hotkeys
 * @param [triggerOnContentEditable=false] - Whether to trigger hotkeys on content editable elements
 */
export function useHotkeys(
    hotkeys: HotkeyItem[],
    tagsToIgnore: string[] = ["INPUT", "TEXTAREA", "SELECT"],
    triggerOnContentEditable = false
) {
    useEffect(() => {
        const keydownListener = (event: KeyboardEvent) => {
            hotkeys.forEach(
                ([hotkey, handler, options = { preventDefault: true }]) => {
                    if (
                        getHotkeyMatcher(hotkey)(event) &&
                        shouldFireEvent(
                            event,
                            tagsToIgnore,
                            triggerOnContentEditable
                        )
                    ) {
                        if (options.preventDefault) {
                            event.preventDefault();
                        }

                        handler(event);
                    }
                }
            );
        };

        document.documentElement.addEventListener("keydown", keydownListener);
        return () =>
            document.documentElement.removeEventListener(
                "keydown",
                keydownListener
            );
    }, [hotkeys, tagsToIgnore, triggerOnContentEditable]);
}
