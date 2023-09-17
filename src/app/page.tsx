import styles from "./page.module.css";
import { FeaturedWork, Footer, HeroHome, RecentPosts } from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroHome /> <RecentPosts /> <FeaturedWork /> <Footer />
    </>
  );
}
