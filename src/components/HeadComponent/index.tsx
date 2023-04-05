import Head from 'next/head';
import { ReactNode } from 'react';

type HeadComponentProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const HeadComponent = ({
  title,
  description,
  children,
}: HeadComponentProps) => {
  if (children) {
    return <Head>{children}</Head>;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
