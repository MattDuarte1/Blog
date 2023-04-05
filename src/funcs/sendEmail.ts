import { showToast } from '@/molecules/ToastAnimated';
import { checkEmail } from './checkEmail';

type ToastType = 'warn' | 'success' | 'error';
type UseEmailSenderProps = (
  inputRef: React.MutableRefObject<HTMLInputElement>,
  setFieldsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
) => () => Promise<void>;

export const useEmailSender: UseEmailSenderProps = (
  inputRef,
  setFieldsDisabled,
) => {
  const showToastNotification = (type: ToastType, message: string) => {
    showToast({ type, message });
  };

  return async () => {
    try {
      if (inputRef.current.value.length < 1) {
        showToastNotification('warn', 'Digite um email!');
        return;
      }

      if (!checkEmail(inputRef.current.value)) {
        showToastNotification('warn', 'Digite um email válido!');
        return;
      }

      setFieldsDisabled(true);

      const formData = new FormData(this);
      formData.append('service_id', `${process.env.NEXT_PUBLIC_SERVICE_ID}`);
      formData.append('template_id', `${process.env.NEXT_PUBLIC_TEMPLATE}`);
      formData.append('user_id', `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`);
      formData.append('email', `${inputRef.current.value}`);

      await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData,
      });

      showToastNotification('success', 'Enviado com Sucesso!');
    } catch (err) {
      showToastNotification('error', 'Desculpe, Ocorreu um Error!');
    } finally {
      inputRef.current.value = '';
      setFieldsDisabled(false);
    }
  };
};
