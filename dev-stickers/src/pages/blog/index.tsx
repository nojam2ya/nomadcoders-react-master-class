import React from "react";
import Layout from "../../components/Layout";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Seo from "../../components/Seo";

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout title="Blog Posts">
      <section>
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <hr />
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Blog" />;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          category
          author
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default Blog;
