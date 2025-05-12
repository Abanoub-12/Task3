import Toast from 'components/ui/Toast'
import toast from 'react-hot-toast'

export const getToastMessage = (message: string) => {
  toast(toast => Toast({ toastId: toast.id, message }), {
    duration: 3000,
    style: { width: '100%', maxWidth: '100%' }
  })
}
