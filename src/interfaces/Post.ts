import { SeoOrFaviconTag, TitleMetaLinkTag } from 'react-datocms/seo';

type CategoryData = {
  title: string;
};

export type IPost = {
  metaContent: TitleMetaLinkTag[] | SeoOrFaviconTag[];
  id: string;
  title: string;
  image?: {
    url: string;
    alt?: string;
  };
  content: string;
  description: string;
  createdAt: string;
  authorCompact: {
    name: string;
    createdAt?: string;
    image: {
      alt: string;
      url: string;
      title?: string;
    };
  };
  contentStruct?: {
    value: Document | Node;
  };
  category?: CategoryData[];
};
