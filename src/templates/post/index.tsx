import { HeadComponent } from '@/components/HeadComponent';
import Heading from '@/atoms/Heading';
import HtmlContent from '@/components/HtmlContent';
import { IPost } from '@/interfaces/Post';
import { renderMetaTags } from 'react-datocms';
import { AiOutlineEye } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const ArtigoHeader = styled.section<{ url: string }>`
  ${({ theme, url }) => css`
    background-image: url(${url});
    background-size: cover;
    background-color: ${theme.colors.white};
    min-height: 540px;
    box-shadow: inset 0 0 0 100vw rgb(0 0 0 / 65%);

    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    align-items: center;
    padding: 2rem;

    h1,
    span {
      color: #fff;
    }
  `}
`;

const ViewBox = styled.div`
  ${({ theme }) => css`
    position: relative;
    > svg {
      color: #fff;
      font-size: ${theme.font.sizes.xlarge};
    }

    ::before {
      content: attr(data-views);
      position: absolute;
      overflow: hidden;
      top: -1rem;
      right: -2rem;
      font-size: 1.2rem;
      font-weight: bolder;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: ${theme.colors.blue};
      border-top-left-radius: 0.7rem;
      border-top-right-radius: 0.7rem;
      border-bottom-right-radius: 0.7rem;
      height: 2.5rem;
      width: 4rem;
    }
  `}
`;

type PostTemplateProps = {
  views: string;
  dataFormat: string;
} & IPost;

const PostTemplate = ({
  metaContent,
  image,
  title,
  description,
  authorCompact,
  content,
  dataFormat,
  views,
}: PostTemplateProps) => {
  return (
    <>
      <HeadComponent>{renderMetaTags(metaContent)}</HeadComponent>
      <ArtigoHeader url={image.url}>
        <Heading size="large">{title}</Heading>
        <span>{description}</span>
        <span style={{ fontWeight: '700' }}>
          Criado por {authorCompact.name} - {dataFormat}
        </span>
        <ViewBox data-views={views}>
          <AiOutlineEye />
        </ViewBox>
      </ArtigoHeader>
      <HtmlContent html={content} />
    </>
  );
};

export default PostTemplate;
