// typeface
export type GridWrapperProperties = {
  children: React.ReactNode;
  classes?: string;
};

/**
 * Presentational component used as the main grid wrapper for the profile form.
 *
 * @example <GridWrapper classes="bg-red-500">Hello World</GridWrapper>
 * @params @see GridWrapperProperties
 * @returns React.ReactNode
 */
export default function GridWrapper({
  children,
  classes = '',
}: GridWrapperProperties) {
  const gridClass = `w-full grid grid-rows-1 grid-cols-1 gap-1 sm:gap-10 sm:grid-rows-1 sm:grid-cols-2`;

  return <div className={`${gridClass} ${classes}`}>{children}</div>;
}
