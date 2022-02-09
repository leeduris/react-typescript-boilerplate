export type toastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
    (type: toastType, message: string): void
}