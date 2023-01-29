import { Checkbox } from "@/components/Checkbox";
import React from "react";

const CheckboxDemo = () => {
    return (
        <div className="space-y-2">
            <div className="flex gap-4">
                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Accept terms and conditions
                        </label>
                        <p className="text-sm text-slate-500">
                            You agree to our Terms of Service and Privacy
                            Policy.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox
                    id="terms2"
                    disabled
                />
                <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Accept terms and conditions
                </label>
            </div>
        </div>
    );
};

export default CheckboxDemo;
