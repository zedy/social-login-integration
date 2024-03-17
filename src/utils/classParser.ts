/**
 * Class parser is a utility function that is used to parse classes
 * primarily so that elements don't have those empty spaces or undefined
 * within their class attribute.
 *
 * @param defaultClass - Default class to be used
 * @param additional - Additional class to be used
 */
export default function classParser(
  defaultClass: string,
  additional: string | undefined
): string {
  if (additional) {
    return `${defaultClass} ${additional}`;
  }

  return defaultClass;
}
