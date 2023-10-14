import path from "path";
import fs from "fs";
import matter from "gray-matter";
import getRecipeMetadata from "./getRecipeMetadata";

const getRecipeContent = (slug: string) => {
  const folder = path.join(process.cwd(), "markdownFiles/recipes/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getRecipeContent;
