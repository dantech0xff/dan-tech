import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import ImageWrapper from "./ImageWrapper";
import LinkWrapper from "./LinkWrapper";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import { BlogNewsletterForm } from "./NewsletterForm";

export const MDXComponents = {
  ImageWrapper,
  TOCInline,
  a: LinkWrapper,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
