import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), "markdownFiles/projects/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export default getPostContent;
