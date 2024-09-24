import { FC } from "react";
import { RequiredSymbol } from "../required-symbol";

interface Props {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormInput: FC<Props> = ({name, label, required, className, ...props}) => {
    return (
        <div className={className}>
            {
                label && (
                    <p className="font-medium mb-2">
                        {label} {required && <RequiredSymbol/>}
                </p>
                )
}
        </div>
    )
}