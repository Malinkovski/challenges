/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BlogProps } from "../properties/props";
import useRandomItems from "../customhooks/useRandomItems";

const RelatedBlogs: React.FC = () => {
  const relatedBlogs = useRandomItems("http://localhost:5001/blogs", 3);

  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((blog: BlogProps) => (
          <li key={blog.id} className="mb-4">
            <a href={`/blog/${blog.id}`} className="wrap-pic-w">
              <img src={blog.img} alt="PRODUCT" className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {blog.title}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
