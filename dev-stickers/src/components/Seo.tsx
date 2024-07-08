import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string | undefined | null;
}

const Seo = ({ title }: ISeoProps) => {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      allSite {
        nodes {
          siteMetadata {
            title
          }
        }
      }
    }
  `);
  return (
    <title>
      {title + " | "}
      {data.allSite.nodes[0].siteMetadata?.title}
    </title>
  );
};

export default Seo;
