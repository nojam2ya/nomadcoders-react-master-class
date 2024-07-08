import React from "react";
import Layout from "../../components/Layout";
import { graphql, HeadFC, PageProps } from "gatsby";
import Seo from "../../components/Seo";

const BlogPost = ({ data, children }: PageProps<Queries.BlogPostQuery>) => {
  console.log(data);
  return <Layout title="Blog Post">{children}</Layout>;
};

export const query = graphql`
  query BlogPost($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        title
        category
        date
        author
        slug
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.BlogPostQuery>) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default BlogPost;
