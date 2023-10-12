import { PostMetadata } from "@/components/metadataFunctions/postMetadataInterface";
import matter from "gray-matter";
import fs from "fs";
import { RecipeMetadata } from "./recipeMetadataInterfance";

const getRecipeMetadata = (): RecipeMetadata[] => {
  const folder = "markdownFiles/recipes";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith("md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      imageSrc: matterResult.data.imageSrc,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getRecipeMetadata;
