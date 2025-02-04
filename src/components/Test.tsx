import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchFacebookPosts } from "../services/FacebookService";
import { FacebookPost } from "../dto/facebook.dto";
const Test = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchFacebookPosts();
      console.log(data);
      setPosts(data);
    };

    getPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div>
      <h1>Facebook Posts</h1>
      {posts.map((post, key) => (
        <div key={key}>
          <h1>
            <strong>Post id</strong>
            {post.id}
          </h1>
          <h2>
            <strong>Post messages</strong>
            {post.message}
          </h2>
          <h3>
            <strong>Post date</strong>
            {formatDate(post.created_time)}
          </h3>
          <a
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={post.full_picture} alt="Post" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Test;
