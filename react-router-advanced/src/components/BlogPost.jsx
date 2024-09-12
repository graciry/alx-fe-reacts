import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Extract the dynamic parameter from the URL

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Blog Post ID: {id}</p>
    </div>
  );
}

export default BlogPost;
