// typeface
export type FlexWrapperProperties = {
  children: React.ReactNode;
  flexDirection?: 'row' | 'col';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  classes?: string;
};

/**
 * Presentational component used as the main DIV wrapper component
 * throughout the app. I mainly use FLEX for layouting, so this
 * component is used a lot.
 *
 * Additionally a similar GRID component can be made but this app
 * doesn't need it at the moment.
 *
 * @example <FlexWrapper flexDirection="col" justifyContent="center" alignItems="center" classes="bg-red-500">Hello World</FlexWrapper>
 * @params @see FlexWrapperProperties
 * @returns React.ReactNode
 */
export default function FlexWrapper({
  children,
  classes = '',
  flexDirection = 'row',
  justifyContent = 'start',
  alignItems = 'start',
}: FlexWrapperProperties) {
  const flexClass = `w-full flex flex-${flexDirection} justify-${justifyContent} items-${alignItems}`;

  return <div className={`${flexClass} ${classes}`}>{children}</div>;
}
