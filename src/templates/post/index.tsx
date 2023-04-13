import { HeadComponent } from '@/components/HeadComponent';
import Heading from '@/atoms/Heading';
import HtmlContent from '@/components/HtmlContent';
import { IPost } from '@/interfaces/Post';
import { renderMetaTags } from 'react-datocms';
import { AiOutlineEye } from 'react-icons/ai';
import * as S from './styles';

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
    <div>
      <HeadComponent>{renderMetaTags(metaContent)}</HeadComponent>
      <S.ArtigoHeader url={image?.url}>
        <Heading size="large">{title}</Heading>
        <span>{description}</span>
        <span style={{ fontWeight: '700' }}>
          Criado por {authorCompact.name} - {dataFormat}
        </span>
        <S.ViewBox data-views={views}>
          <AiOutlineEye />
        </S.ViewBox>
      </S.ArtigoHeader>
      <HtmlContent html={content} />
    </div>
  );
};

export default PostTemplate;
