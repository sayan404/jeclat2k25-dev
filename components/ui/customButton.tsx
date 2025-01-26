import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
//======================================Animated Text Gradient
export const CustomButtom = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outline"
      className={cn(
        'bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl tracking-wide duration-[4200ms]',
        'from-zinc-500 via-zinc-950 to-zinc-600',
        'dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600',
        props.className,
      )}
    />
  );
};