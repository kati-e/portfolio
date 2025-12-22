/**
 * Convert a string into a URL-friendly slug.
 * Removes diacritics, lowercases, trims, replaces whitespace with hyphens,
 * and strips disallowed characters.
 */
export default function slugify(input: string) {
  if (!input) return "";
  return input
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove all non-word chars except hyphens
}
