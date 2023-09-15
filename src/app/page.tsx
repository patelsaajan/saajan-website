import styles from "./page.module.css";
import { HeroHome, RecentPosts } from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroHome /> <RecentPosts />
    </>
  );
}
