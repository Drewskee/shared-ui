import React, { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface ITypography {
  Tag: string;
  children?: ReactNode;
  textClassOverrides?: string;
  text?: string;
}
const Typography: React.FC<ITypography> = (props: any) => {
  const { Tag, textClassOverrides, text, children } = props;

  if (children) {
    return (
      <Tag
        className={twMerge(
          'border-none font-normal text-black dark:text-white',
          `${textClassOverrides}`,
        )}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={twMerge(
        'border-bottom-none font-normal text-black dark:text-white',
        `${textClassOverrides}`,
      )}
    >
      {text}
    </Tag>
  );
};

export default Typography;
