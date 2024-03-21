/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  error: Error;
  resetErrorBoundary?: () => void;
};

export default function ShowErrorBoundary({
  error,
  resetErrorBoundary,
}: Props) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}
