import Heading from '@/atoms/Heading';
import * as Styled from './styles';
import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { IPost } from '@/interfaces/Post';
import { forwardRef } from 'react';
import { useFetch } from '@/lib/fetcher';
import { useRouter } from 'next-router-mock';

type PostCardProps = IPost & {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const PostCard = forwardRef<HTMLElement, PostCardProps>(
  ({ title, authorCompact, image, createdAt, id, onClick, ...props }, ref) => {
    const newFormatDataBR = new Date(createdAt).toLocaleDateString();
    const { isPreview } = useRouter();
    const isPreviewMod = isPreview ? 'page-views-preview' : 'views';
    const { data: viewsData } = useFetch(`/api/${isPreviewMod}?id=${title}`);

    return (
      <Styled.Container onClick={onClick} id={id} ref={ref} {...props}>
        <Image
          src={image.url}
          alt={image.alt ? image.alt : 'image alt'}
          width={260}
          height={198}
        />
        <Heading size="xsmall" color="black">
          {title}
        </Heading>
        <Styled.AuthorContent>
          <Styled.AuthorDescription>
            <Styled.Avatar>
              <Image
                width={50}
                height={50}
                priority
                src={authorCompact.image.url}
                alt={authorCompact.image.alt}
              />
            </Styled.Avatar>
            <Styled.AuthorInfo>
              <h4>{authorCompact.name}</h4>
              <p>{newFormatDataBR}</p>
            </Styled.AuthorInfo>
          </Styled.AuthorDescription>
          <Styled.ViewBox>
            <AiOutlineEye />
            <Heading size="small">{viewsData ? viewsData.total : 0}</Heading>
          </Styled.ViewBox>
        </Styled.AuthorContent>
      </Styled.Container>
    );
  },
);

PostCard.displayName = 'PostCard Component';

export default PostCard;
