import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/metadataFunctions/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), "posts/projectsMarkdownFiles/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata(
    path.join(process.cwd(), "posts/projectsMarkdownFiles")
  );
  return posts.map((post) => ({ slug: post.slug }));
};

export default getPostContent;
