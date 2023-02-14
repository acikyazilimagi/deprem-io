import { IButtonProps } from '@/lib/types/component-props/form.props';
import { useFormState } from 'react-hook-form';

const Button = ({ className, label }: IButtonProps) => {
  const { isValid } = useFormState();

  return (
    <button
      className={`${
        !isValid ? 'opacity-50' : ''
      } mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className} `}
      disabled={!isValid}
    >
      {label}
    </button>
  );
};

export default Button;
