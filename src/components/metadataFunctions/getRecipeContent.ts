import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getRecipeMetadata from "@/components/metadataFunctions/getPostMetadata";

const getRecipeContent = (slug: string) => {
  const folder = path.join(process.cwd(), "markdownFiles/recipes/");
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const recipe = getRecipeMetadata(
    path.join(process.cwd(), "markdownFiles/projects")
  );
  return recipe.map((recipe) => ({ slug: recipe.slug }));
};

export default getRecipeContent;
