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
        <Button sx={{textDecoration: 'none', textTransform: 'none'}} startIcon={startIcon} variant={variant}
                color={color}
        ><span className="btn-content">{content}</span></Button>
    )

}
