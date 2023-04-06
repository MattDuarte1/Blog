import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    padding: 10rem;
    max-width: 100%;
    line-height: 1.5;

    iframe {
      width: 500px;
    }

    button {
      background-color: ${theme.colors.lightGrey2};
      padding: ${theme.spacings.xsmall};
      cursor: pointer;
      border: none;
    }

    p {
      margin: ${theme.spacings.medium} 0;
    }
    a,
    a:visited,
    a:link {
      color: ${theme.colors.grey};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }
    a:hover {
      filter: brightness(50%);
    }
    code {
      font-family: monospace;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xsmall};
      background: ${theme.colors.darkGrey};
      padding: 0.2rem;
      margin: 0.2rem;
    }
    pre {
      background: ${theme.colors.darkGrey};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.black};
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }
    pre code {
      color: inherit;
      background: inherit;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.lightGrey1};
    }
    ul,
    ol {
      margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
    }
    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }
    table {
      width: 90%;
      border-collapse: collapse;
      margin: ${theme.spacings.medium} 0;
      background-color: ${theme.colors.darkGrey};
    }
    table td,
    table th {
      padding: ${theme.spacings.xsmall};
      border: 0.1rem solid ${theme.colors.lightGrey1};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.lightGrey1};
      color: ${theme.colors.darkGrey};
      filter: brightness(80%);
      padding-left: ${theme.spacings.medium};
      font-style: italic;
      margin: ${theme.spacings.medium};
    }
    @media ${theme.media.lteMedium} {
      font-size: 2rem;
      padding: 3rem;

      iframe {
        width: 100%;
      }
    }
  `}
`;
