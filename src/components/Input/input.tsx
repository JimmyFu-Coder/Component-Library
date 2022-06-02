import React, {ChangeEvent, InputHTMLAttributes, ReactElement} from 'react'
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean,
    className?: string,
    size?: InputSize, // remove size from Attributes
    icon?: IconProp,
    prepend?: string | ReactElement,
    append?: string | ReactElement,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {
    // attribute
    const {disabled, size, icon, prepend, append, className, children, style, value, ...restProps} = props

    // className
    const classes = classNames("viking-input-wrapper", className, {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    return (
        <div>
            <div className={classes} style={style}>
                {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
                {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
                <input
                    className="viking-input-inner"
                    disabled={disabled}
                    value={value}
                    {...restProps}
                />
                {append && <div className="viking-input-group-append">{append}</div>}
            </div>
        </div>
    )
}

export default Input