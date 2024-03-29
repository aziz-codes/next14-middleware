import GithubProdiver from "next-auth/providers/github";
import NextAuth from "next-auth/next";
const authOptions = {
  providers: [
    GithubProdiver({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
