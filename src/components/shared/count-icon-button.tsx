import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { CountButtonProps } from './count-button';
import { Button } from '../ui/button';
import { cn } from "@/lib/utils";


interface IconButtonProps {
  size?: CountButtonProps['size'];
  disabled?: boolean;
  type?: 'plus' | 'minus';
  onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
  size = 'sm',
  disabled,
  type,
  onClick,
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={cn(
        'p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400',
        size === 'sm' ? 'w-[30px] h-[30px] rounded-[10px]' : 'w-[38px] h-[38px] rounded-md',
      )}>
      {type === 'plus' ? (
        <GoPlus className={size === 'sm' ? 'h-4' : 'h-5'} />
      ) : (
        <FiMinus className={size === 'sm' ? 'h-4' : 'h-5'} />
      )}
    </Button>
  );
};
