import { Link } from "gatsby";
import React, { ReactNode } from "react";

interface ILayoutProps {
  children?: ReactNode;
  title: string;
}

const Layout = ({ title, children }: ILayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
