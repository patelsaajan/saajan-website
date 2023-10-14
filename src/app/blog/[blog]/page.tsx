import getBlogMetadata from "@/components/metadataFunctions/getBlogMetadata";
import React from "react";

interface pagePromps {
  params: { projectName: string };
}

export const generateStaticParams = async () => {
  const post = getBlogMetadata();
  return post.map((post) => ({ slug: post.slug }));
};

const page = ({ params }: pagePromps) => {
  const slug = params.projectName;
  // const post = getPostContent(slug, "markdownFiles/blog/");
  return <div>page</div>;
};

export default page;
