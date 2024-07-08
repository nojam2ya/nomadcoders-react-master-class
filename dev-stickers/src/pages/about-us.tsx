import React from "react";
import Layout from "../components/Layout";
import { HeadFC } from "gatsby";
import Seo from "../components/Seo";

const AboutUs = () => {
  return <Layout title="About Us"></Layout>;
};

export default AboutUs;

export const Head: HeadFC = () => <Seo title="About Us" />;
