import * as React from "react";

/**
 * Hook to track if a component has been mounted
 * @returns {boolean} - Whether the component has been mounted
 */
export function useMounted(): boolean {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}
