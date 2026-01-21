import { toast, useSonner } from 'sonner';

export const useToast = () => {
  const { toasts } = useSonner();
  return { toast, toasts };
};
