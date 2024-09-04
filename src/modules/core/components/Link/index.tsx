import React from 'react';

import NextLink from 'next/link';

/**
 * If the self link is true, then the URL should be full url exmaple https:.....
 * if the self link is false, then it will be relative URL
 */
export type HrefType = LinkProps['asSelfLink'] extends true
  ? `https${string}`
  : `/${string}` | '#' | string;

type LinkProps = {
  /**
   * URL,
   *
   * @required
   */
  href: HrefType;

  /**
   * - It can be HTMl element
   * - or just a html string
   *
   * @required
   */
  children: React.ReactNode | string;
  /**
   * If the self link is true, then the URL should be full url exmaple https:.....
   * if the self link is false, then it will be relative URL
   *
   * @default false
   *
   * @optional
   */
  asSelfLink?: boolean;

  /**
   * - to override the custom CSS
   *
   * @optional
   */
  className?: string;

  /**
   * - To open the tab in new page
   *
   * @default false
   *
   * @optional
   */
  newTab?: boolean;

  /**
   *
   * - call back to function
   *
   * @optional
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

  /**
   * - title for aria-label,
   *
   * @default ''
   *
   * @optional
   */
  title?: string;
};

const Link = ({
  href,
  children,
  asSelfLink,
  className,
  newTab,
  onClick,
  title,
}: LinkProps) => {
  const resolvedLink = !asSelfLink ? `${href}` : href;

  return (
    <NextLink
      href={resolvedLink}
      target={newTab ? '_blank' : ''}
      className={className}
      passHref
      title={title}
      aria-label={
        title || typeof children === 'string' ? (children as string) : 'link'
      }
      onClick={onClick}
      prefetch
    >
      {children}
    </NextLink>
  );
};

export default Link;
