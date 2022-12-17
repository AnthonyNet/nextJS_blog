import fs from 'fs';
import matter from 'gray-matter';
import { PostMetaData } from '../components/PostMetaData';


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
        imgUrl: matterResult.data.imgUrl,
        slug: fileName.replace('.md', ''),
      };
    });
  
    return posts;
  };

  export default getPostMetadata;
  