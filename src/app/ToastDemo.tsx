"use client";

import { Button } from "@/components/Button";
import { ToastAction } from "@/components/Toast";
import { useToast } from "@/lib/hooks/useToast";

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div className="space-x-2">
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: "Your message has been sent.",
                    });
                }}>
                Show Simple Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    });
                }}>
                Show With Title Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: (
                            <ToastAction altText="Try again">
                                Try again
                            </ToastAction>
                        ),
                    });
                }}>
                Show Action Toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: (
                            <ToastAction altText="Try again">
                                Try again
                            </ToastAction>
                        ),
                    });
                }}>
                Show Variant Toast
            </Button>
        </div>
    );
};

export default ToastDemo;
