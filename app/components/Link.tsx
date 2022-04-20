import { Link as RemixLink } from '@remix-run/react';

export type LinkProps = {
  href: string;
  label?: string;
  style?: boolean;
  fontMono?: boolean;
};

const Link = ({ href, style, fontMono, label }: LinkProps): JSX.Element => {
  const isExternal = href.startsWith('http');

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      className={`${
        style
          ? "text-blue-500 underline underline-offset-2 decoration-sky-500 hover:decoration-dashed"
          : ''
      } ${fontMono ? 'font-mono' : ''}`}
    >
      {label ?? href?.split('://')?.[1] ?? href}
    </a>
  ) : (
    <RemixLink to={href} prefetch="render">
      {label}
    </RemixLink>
  );
};

export default Link;
