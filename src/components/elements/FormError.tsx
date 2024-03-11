type Props = {
  message: string;
};

export default function FormError({ message }: Props) {
  return (
    <span className="block text-red-800 text-xs mt-1 mb-3">{message}</span>
  );
}
