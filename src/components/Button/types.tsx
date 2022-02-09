export interface ButtonProps {
    children: any,
    variant?: string,
    size?: string,
    className?: string,
    id?: string,
    type?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

export interface ThemeButtonProps {
    [key: string]: any
}