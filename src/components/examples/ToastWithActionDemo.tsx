"use client";

import { Button } from "@/components/ui/Button";
import { ToastAction } from "@/components/ui/Toast";
import { useToast } from "@/lib/hooks/useToast";

const ToastWithActionDemo = () => {
    const { toast } = useToast();

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                });
            }}>
            Show Action Toast
        </Button>
    );
};

export default ToastWithActionDemo;
