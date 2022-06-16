import React, {ReactElement} from "react";
import Button from "@mui/material/Button";
import {SvgIconProps} from "@mui/material";

interface Props {
    startIcon?: ReactElement<SvgIconProps>,
    content: string;
    variant?: "contained" | "text" | "outlined" | undefined;
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

export const CustomButton = ({startIcon, content, variant = 'contained', color = 'primary'}: Props) => {
    return (
        <Button startIcon={startIcon} variant={variant} color={color} sx={{textTransform: 'none'}}>{content}</Button>
    )

}
