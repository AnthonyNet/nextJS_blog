import fs from "fs";
import Link from "next/link";
import matter from 'gray-matter';
import { PostMetaData } from "../components/PostMetaData";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
 
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
   <PostPreview key={post.slug} {...post} />
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
