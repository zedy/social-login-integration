import classParser from '../../utils/class-parser';

type ImageProps = {
  alt: string;
  className?: string;
  src: string;
};

const DEFAULT_CLASS = 'bg-transparent border-0';

export default function Image({ alt, src, className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={classParser(DEFAULT_CLASS, className)}
    />
  );
}
