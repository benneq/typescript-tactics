import { type HTMLAttributes, useEffect, useState, useRef } from 'react';
import { createElement, type ReactNode } from 'react';

const hrefId = (text: string): string => {
  return (
    '#' +
    text
      .normalize('NFKD')
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, '-')
  );
};

type Props = {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className: string;
  children: ReactNode;
};

export default function Heading({ component, className, children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [id, setId] = useState<string>();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (id === window.location.hash) {
      ref.current?.scrollIntoView();
    }
  }, [id]);

  useEffect(() => {
    if (ref.current) {
      const text = ref.current.textContent || undefined;
      setId(text && hrefId(text));
    }
  }, [children]);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return createElement<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>(
    component,
    {
      id,
      className: `${className}
        relative
        before:absolute before:content-['#'] before:-translate-x-full before:-left-1
        before:transition-opacity
        ${show ? 'before:opacity-100' : 'before:opacity-20'}
      `,
      ref,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    <a href={id}>{children}</a>
  );
}
