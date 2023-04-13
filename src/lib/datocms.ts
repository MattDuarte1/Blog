import { GraphQLClient } from 'graphql-request';
interface RequestProps {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}
export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: RequestProps) {
  const headers: any = {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_DATO_URL}`, {
    headers,
  });
  return client.request(query, variables);
}
