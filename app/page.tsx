import fs from "fs";
import Link from "next/link";
import matter from 'gray-matter';
import { PostMetaData } from "../components/PostMetaData";

const getPostMetadata = (): PostMetaData[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //Get gray-matter data from each file
 
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync('posts/' + fileName, 'utf8');
    const matterResult = matter(fileContents);

    return{
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.date}</p>
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
