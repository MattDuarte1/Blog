import { gql } from 'graphql-request';
import {
  FRAGMENTS_HOMEPAGE,
  FRAGMENTS__HEADER,
  FRAGMENTS__POST,
} from './fragments';

export const GRAPHQL_QUERY_HOME = gql`
  ${FRAGMENTS_HOMEPAGE}

  query HomePage {
    homePage {
      seo {
        ...seo
      }
      heroSection {
        ...hero
      }
      categorySection {
        ...categories
      }
      postSection {
        ...post
      }
      subscribeSection {
        ...subscribe
      }
    }
  }
`;

export const GRAPHQL_QUERY_POST = gql`
  ${FRAGMENTS__POST}
  query getPost($Id: ItemId) {
    contentPost(filter: { id: { eq: $Id } }) {
      metaContent: _seoMetaTags {
        content
        attributes
        tag
      }
      ...ContentPost
    }
  }
`;

export const GRAPHQL_QUERY_ALL_POST = gql`
  query AllPosts {
    allContentPosts {
      id
      title
      createdAt
      description
      authorCompact {
        name
        createdAt
        image {
          url
          alt
          title
        }
      }
      content
      category {
        title
      }
    }
  }
`;

export const GRAPHQL_QUERY_HEADER = gql`
  ${FRAGMENTS__HEADER}
  query getHeader {
    contentHeader {
      ...MenuContent
    }
  }
`;
