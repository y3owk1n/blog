import { classNames } from "@/lib/classNames";

interface CalloutProps {
    icon?: string;
    children?: React.ReactNode;
    type?: "default" | "warning" | "danger";
}

export function Callout({
    children,
    icon,
    type = "default",
    ...props
}: CalloutProps) {
    return (
        <div
            className={classNames(
                "my-6 flex items-start rounded-md border border-slate-200 p-4",
                type === "default" && "border-slate-900 dark:border-slate-700",
                type === "danger" && "border-red-600",
                type === "warning" && "border-yellow-500"
            )}
            {...props}>
            {icon && <span className="mr-4 text-2xl">{icon}</span>}
            <div>{children}</div>
        </div>
    );
}
