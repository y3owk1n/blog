"use client";

import { Button } from "@/components/ui/Button";
import { useToast } from "@/lib/hooks/useToast";

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    description: "Your message has been sent.",
                });
            }}>
            Show Simple Toast
        </Button>
    );
};

export default ToastDemo;
