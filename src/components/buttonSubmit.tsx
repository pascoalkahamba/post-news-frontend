import { Button } from "./ui/button";

interface ButtonSumitProps {
  isPending: boolean;
  isValid: boolean;
  isDirty: boolean;
  target: string;
  targetLoading: string;
  className?: string;
}

export default function ButtonSumit({
  isPending,
  isValid,
  isDirty,
  target,
  targetLoading,
  className,
}: ButtonSumitProps) {
  const disabled = !isValid || !isDirty;
  return (
    <Button
      type="submit"
      className={`${
        disabled
          ? `bg-blue-200 rounded-full text-black ${className}`
          : `bg-blue-600 rounded-full hover:bg-blue-500 mt-3 ${className}`
      }`}
      disabled={disabled}
    >
      {isPending ? targetLoading : target}
    </Button>
  );
}
