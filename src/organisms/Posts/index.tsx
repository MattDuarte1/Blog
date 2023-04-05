import { useRouter } from 'next/router';
import { IPost } from '@/interfaces/Post';
import Heading from '@/atoms/Heading';
import PostCard from '@/molecules/PostCard';
import * as Styled from './styles';
import { forwardRef } from 'react';

interface PostSectionProps {
  data: IPost[];
}

const Posts = forwardRef<HTMLDivElement, PostSectionProps>(
  ({ data, ...props }, ref) => {
    const router = useRouter();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      router.push({ pathname: `/post/${e.currentTarget.id}` });
    };
    return (
      <Styled.Container id="posts" ref={ref} {...props}>
        <Heading size="large">Todos os Posts</Heading>
        <Styled.Content>
          {data.map((item) => (
            <PostCard key={item.id} {...item} onClick={handleClick} />
          ))}
        </Styled.Content>
      </Styled.Container>
    );
  },
);

Posts.displayName = 'Posts Component';

export default Posts;
