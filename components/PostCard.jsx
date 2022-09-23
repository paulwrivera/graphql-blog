import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-center bg-no-repeat bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style={{ backgroundImage: `url(${post.featuredImage.url})` }}
    />
    <div className="shadow-lg bg-white rounded-md p-4 flex flex-col justify-between leading-normal">
      <div className="my-4">
        <div className="text-gray-900 font-bold text-xl mb-3">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </div>
        <div className="flex items-center mb-4">
          <div className="text-sm mb-2">
            <p className="text-gray-900 leading-none">
              by {post.author.name} on{" "}
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-base">
          {post.excerpt.substring(0, 240)}...{" "}
          <a className="text-blue-500 text-l" href={`/post/${post.slug}`}>
            Read More
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default PostCard;
