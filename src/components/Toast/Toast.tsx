import { toast } from 'react-toastify'
import { ToastProps } from './types'

export const Toast: ToastProps = (type, message = "Technical error occurred") => {
    return void toast[type](message)
}