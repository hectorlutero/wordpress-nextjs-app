import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

// const inter = Inter("latin");

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`api/wordpress/`);
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }

    fetchData();
  }, []);
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      ))}
    </>
  );
}
