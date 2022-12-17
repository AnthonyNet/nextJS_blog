import { PostMetaData } from './PostMetaData';
import Link from 'next/link';

const PostPreview = (props: PostMetaData) => {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
     
      <img src={`/images/${props.imgUrl}`} alt="oops" />
      <p>{props.date}</p>
    </div>
  )
}

export default PostPreview