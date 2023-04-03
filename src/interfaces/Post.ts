import { SeoOrFaviconTag, TitleMetaLinkTag } from 'react-datocms/seo';

export interface IPost {
  metaContent?: TitleMetaLinkTag[] | SeoOrFaviconTag[];
  id: string;
  title: string;
  image?: {
    url: string;
    alt?: string;
  };
  content?: Document | Node | string;
  createdAt: string;
  description?: string;
  authorCompact: {
    name: string;
    image: {
      alt: string;
      url: string;
    };
  };
  contentStruct?: {
    value: Document | Node;
  };
  category?: category[];
}

type category = {
  title: string;
};
