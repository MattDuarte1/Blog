import Categories from '@/organisms/Categories';
import { HeadComponent } from '@/components/HeadComponent';
import Hero from '@/organisms/Hero';
import NewsLetter from '@/organisms/NewsLetter';
import PostSection from '@/organisms/Posts';
import StatusConnection from '@/molecules/StatusConnection';
import { IError, InitialDataProps } from '@/interfaces/Home';
import { IPost } from '@/interfaces/Post';
import { HTMLAttributes, forwardRef } from 'react';

type HomeTemplateProps = {
  data: InitialDataProps;
  error: IError;
  status: string;
  statusMessage: string;
  postData: IPost[];
};

const HomeTemplate = forwardRef<
  HTMLAttributes<HTMLElement> & HTMLElement,
  HomeTemplateProps
>(({ data, error, status, statusMessage, postData, ...props }, ref) => {
  return (
    <main ref={ref} {...props}>
      <HeadComponent
        title={data.seo.title}
        description={data.seo.description}
      />
      <Hero data={data.heroSection} />
      <Categories data={data.categorySection} />
      <StatusConnection error={error} status={status} message={statusMessage} />
      <PostSection data={postData} />
      <NewsLetter data={data.subscribeSection} />
    </main>
  );
});

HomeTemplate.displayName = 'HomeTemplate Component';

export default HomeTemplate;
