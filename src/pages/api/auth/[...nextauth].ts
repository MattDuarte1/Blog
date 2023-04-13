import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: { scope: 'read:user' },
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  secret: process.env.SECRET,
});
