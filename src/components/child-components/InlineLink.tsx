export default function ({
  href,
  text,
  ariaLabel,
}: {
  href: string;
  text: string;
  ariaLabel?: string;
}) {
  return (
    <>
      {" "}
      <a
        className="inline-link"
        href={href}
        target="_blank"
        aria-label={ariaLabel}
      >
        {text}
      </a>{" "}
    </>
  );
}
