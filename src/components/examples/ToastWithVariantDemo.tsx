"use client";

import { useToast } from "@/lib/hooks/useToast";
import { Button } from "@/components/ui/Button";
import { ToastAction } from "@/components/ui/Toast";

const ToastWithVariantDemo = () => {
    const { toast } = useToast();

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request.",
                    action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                });
            }}>
            Show Variant Toast
        </Button>
    );
};

export default ToastWithVariantDemo;
