import Header from "@/components/layout/Header";
import PostCard from "./PostCard";
import { PostProps } from "@/interfaces";
import { NextPage } from "next";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header title="Post Page" />

      {posts.map((post) => (
        <PostCard
          key={post.title + post.userId}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  const posts = data.slice(0, 10).map((post) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}


export default Posts;
