/**
 * Hook for making strings into slug format
 *
 * It is a simple hook for turing something like "Example String" into "example-string".
 * It is used multiple times throughout the project, hence my making it a hook.
 */
export default function useSlugify() {
  const slugify = (string: string) => {
    return string
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };
  return slugify;
}
