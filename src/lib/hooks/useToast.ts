// Inspired by react-hot-toast library

import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/Toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};

const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

/**
 * Function to generate a unique id
 * @returns {string} - A unique id
 */
function genId(): string {
    count = (count + 1) % Number.MAX_VALUE;
    return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
    | {
          type: ActionType["ADD_TOAST"];
          toast: ToasterToast;
      }
    | {
          type: ActionType["UPDATE_TOAST"];
          toast: Partial<ToasterToast>;
      }
    | {
          type: ActionType["DISMISS_TOAST"];
          toastId?: ToasterToast["id"];
      }
    | {
          type: ActionType["REMOVE_TOAST"];
          toastId?: ToasterToast["id"];
      };

interface State {
    toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Function to add a toast to the remove queue
 * @param {string} toastId - The id of the toast to be removed
 */
const addToRemoveQueue = (toastId: string) => {
    if (toastTimeouts.has(toastId)) {
        return;
    }

    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId,
        });
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
};

/**
 * Reducer function to manage the state of the toasts
 * @param {State} state - The current state of the toasts
 * @param {Action} action - The action to be performed on the state
 * @returns {State} - The updated state of the toasts
 */
export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };

        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === action.toast.id ? { ...t, ...action.toast } : t
                ),
            };

        case "DISMISS_TOAST":
            const { toastId } = action;

            // ! Side effects ! - This could be extracted into a dismissToast() action,
            // but I'll keep it here for simplicity
            if (toastId) {
                addToRemoveQueue(toastId);
            } else {
                state.toasts.forEach((toast) => {
                    addToRemoveQueue(toast.id);
                });
            }

            return {
                ...state,
                toasts: state.toasts.map((t) =>
                    t.id === toastId || toastId === undefined
                        ? {
                              ...t,
                              open: false,
                          }
                        : t
                ),
            };
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: [],
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t) => t.id !== action.toastId),
            };
    }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

/**
 * Function to dispatch an action to the reducer and update the state
 * @param {Action} action - The action to be dispatched
 */
function dispatch(action: Action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
        listener(memoryState);
    });
}

type Toast = Omit<ToasterToast, "id">;

type ToastReturn = {
    id: string;
    dismiss: () => void;
    update: (props: ToasterToast) => void;
};

/**
 * Function to create a toast notification
 * @param {Toast} props - The properties of the toast
 * @returns {ToastReturn} - An object containing the toast id, dismiss function and update function
 */
function toast({ ...props }: Toast): ToastReturn {
    const id = genId();

    const update = (props: ToasterToast) =>
        dispatch({
            type: "UPDATE_TOAST",
            toast: { ...props, id },
        });
    const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open) => {
                if (!open) dismiss();
            },
        },
    });

    return {
        id: id,
        dismiss,
        update,
    };
}

interface UseToastReturn {
    toast: ({ ...props }: Toast) => ToastReturn;
    dismiss: (toastId?: string) => void;
    toasts: ToasterToast[];
}

/**
 * Custom hook to manage toasts
 * @returns {UseToastReturn} - An object containing the toast, dismiss and toasts functions
 */
function useToast(): UseToastReturn {
    const [state, setState] = React.useState<State>(memoryState);

    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);

    return {
        ...state,
        toast,
        dismiss: (toastId?: string) =>
            dispatch({ type: "DISMISS_TOAST", toastId }),
    };
}

export { useToast, toast };
