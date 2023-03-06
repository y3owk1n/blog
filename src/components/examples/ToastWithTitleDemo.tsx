"use client";

import { useToast } from "@/lib/hooks/useToast";
import { Button } from "@/components/ui/Button";

const ToastWithTitleDemo = () => {
    const { toast } = useToast();

    return (
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
    );
};

export default ToastWithTitleDemo;
