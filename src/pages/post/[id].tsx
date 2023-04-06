import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { GRAPHQL_QUERY_POST, GRAPHQL_QUERY_ALL_POST } from '@/graphql/queries';
import { request } from '@/lib/datocms';
import { IPost } from '@/interfaces/Post';
import { useRouter } from 'next/router';
import { PostPage } from '@/templates/Post';
import { NotFoundPage } from '@/templates/NotFoundPage';
import { useFetch } from '@/lib/fetcher';

interface SobreProps {
  data: IPost;
  preview?: boolean;
}

const Sobre = ({ data, preview }: SobreProps) => {
  const { isFallback, push } = useRouter();
  const isPreviewMod = preview ? 'page-views-preview' : 'page-views';

  /**
   * Recebe a data do datocms e transforma em pt-br
   */
  const dataFormat = new Date(data.createdAt).toLocaleDateString();

  /**
   * isPreviewMod - se estiver no modo preview retorna 'page-views-previews' senão retorna 'page-views';
   * data.title - titulo do post.
   * @return retorna um objeto com o total de views
   */
  const { data: viewsData } = useFetch(`/api/${isPreviewMod}?id=${data.title}`);

  /**
   * se não for isFallback e não tiver title vai para a rota 404.
   */

  if (!isFallback && !data?.title) {
    return push('/404');
  }

  return (
    <PostPage {...data} views={viewsData?.total} dataFormat={dataFormat} />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * Faz requisição para o datoCMS usando a lib request do graphql-request
   * Passei a query GRAPHQL_QUERY_ALL_POST que está na pasta graphql
   */
  const { allContentPosts } = await request({
    query: GRAPHQL_QUERY_ALL_POST,
  });

  /**
   * Faz o map de todos os posts do aallContentPosts e retornar um objeto com params: e passa o id do post;
   */

  const paths = allContentPosts.map((post: IPost) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as Params;
  const { contentPost } = await request({
    query: GRAPHQL_QUERY_POST,
    variables: { Id: id },
    includeDrafts: ctx.preview,
  });

  return {
    props: {
      data: contentPost,
      preview: ctx.preview ?? false,
    },
  };
};

export default Sobre;
