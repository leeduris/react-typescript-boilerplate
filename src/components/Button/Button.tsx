import React from 'react'
import { ThemeButton } from  './Button.style'
import { ButtonProps } from './types'
import PropTypes from 'prop-types'

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ThemeButton
            type={props.type}
            variant={props.variant}
            size={props.size}
            id={props.id}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </ThemeButton>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    variant: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
}

Button.defaultProps = {
    variant: 'primary',
    size: 'lg',
    type: 'button',
    disabled: false
}
