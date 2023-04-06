import type { GetStaticProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import { GRAPHQL_QUERY_HOME } from '../graphql/queries';
import { request } from '../lib/datocms';
import { ISubscription } from '@/interfaces/Home';
import { useQuerySubscription } from 'react-datocms';
import { useBlogContext } from '@/contexts/Theme/hook';
import HomeTemplate from '@/templates/Home';

interface IHome {
  subscription: ISubscription;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const graphqlRequest = {
    query: GRAPHQL_QUERY_HOME,
  };

  return {
    props: {
      subscription: ctx.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_PUBLIC_DATO_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
    revalidate: 60 * 60 * 5,
  };
};

const Home: NextPage = ({ subscription }: IHome) => {
  const { data, error, status } = useQuerySubscription(subscription);
  const [postData, setPostData] = useState(data.homePage.postSection);
  const {
    state: { categorySelected },
  } = useBlogContext();

  useEffect(() => {
    const categoryPostsFiltered = data.homePage.postSection.filter((item) =>
      item.category.find((item) => item.title === categorySelected),
    );
    const categoryNameNotIsNull =
      categorySelected !== null
        ? setPostData(categoryPostsFiltered)
        : setPostData(data.homePage.postSection);

    return categoryNameNotIsNull;
  }, [categorySelected, data.homePage.postSection]);

  const statusMessage = {
    connecting: 'Conectando com o DatoCMS...',
    connected: 'Conectado ao DatoCMS, recebendo atualizações ao vivo!',
    closed: 'Conexão Desativada',
  };

  return (
    <HomeTemplate
      data={data.homePage}
      postData={postData}
      status={status}
      statusMessage={statusMessage[status]}
      error={error}
    />
  );
};

export default Home;
