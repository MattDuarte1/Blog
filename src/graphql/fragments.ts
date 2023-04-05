import { gql } from 'graphql-request';

export const FRAGMENTS_HOMEPAGE = gql`
  fragment seo on SeoField {
    title
    description
  }

  fragment subscribe on ContentSubscribeRecord {
    image {
      url
      alt
    }
    title
    description
  }

  fragment hero on HeroSectionRecord {
    title
    description
    image {
      alt
      url
      custom: customData
    }
  }

  fragment categories on ContentCategoryRecord {
    id
    title
    image {
      url
      alt
    }
  }

  fragment author on ContentAuthorRecord {
    name
    createdAt
    image {
      url
      alt
      title
    }
  }

  fragment post on ContentPostRecord {
    id
    title
    createdAt
    image {
      url
    }
    authorCompact {
      ...author
    }
    category {
      title
    }
  }
`;

export const FRAGMENTS__POST = gql`
  fragment author on ContentAuthorRecord {
    name
    createdAt
    image {
      url
      alt
      title
    }
  }

  fragment ContentPost on ContentPostRecord {
    id
    title
    image {
      url
      alt
    }
    createdAt
    description
    authorCompact {
      ...author
    }
    content
    category {
      title
    }
  }
`;

export const FRAGMENTS__HEADER = gql`
  fragment MenuContent on ContentHeaderRecord {
    menu {
      title
      href
      newtab
    }
  }
`;
