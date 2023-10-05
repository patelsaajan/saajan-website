import { PostMetadata } from "@/components/PostMetadata";
import matter from "gray-matter";
import fs from "fs";

const getPostMetadata = (folderPath: string): PostMetadata[] => {
  const folder = folderPath;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith("md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folderPath}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      desc: matterResult.data.desc,
      active: matterResult.data.active,
      tags: matterResult.data.tags,
      imageSrc: matterResult.data.imageSrc,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export default getPostMetadata;