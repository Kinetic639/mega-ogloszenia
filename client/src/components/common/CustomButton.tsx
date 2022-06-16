import React from "react";
import Button from "@mui/material/Button";

interface Props {
    content: string;
    variant?: "contained" | "text" | "outlined" | undefined;
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined
}

export const CustomButton = ({content, variant = 'contained', color = 'primary'}: Props) => {
    return (
        <Button variant={variant} color={color} sx={{textTransform: 'none'}}>{content}</Button>
    )

}
