import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType =
    'primary'
    | 'default'
    | 'danger'
    | 'link'


interface BaseButtonProps {
    /**
     * Set the custom css
     */
    className?: string;
    /**Set whether  Button is able to click */
    disabled?: boolean;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
    Color of Button
     */
    btnType?: ButtonType;
    children: React.ReactNode;
    /**
     * when type is Link set the href of Button
     */
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * ## Reference
 *
 * ~~~js
 *
 * import { Button } from 'vikingship'
 *
 * ~~~
 */


export const Button: React.FC<ButtonProps> = props => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: "link" === btnType && disabled,
    });

    if ("link" === btnType && href) {
        return (
            <a className={classes} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps} >
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    btnType:"primary",
    size:"lg",
    disabled:false
}

export default Button;
