import React, { useState, useEffect } from "react";
import { getRecentComments } from "../services";

const CommentWidget = () => {
  const [relatedComments, setRelatedComments] = useState([]);

  useEffect(() => {
    getRecentComments().then((newComments) => {
      setRelatedComments(newComments);
    });
  }, []);

  return (
    <div className="shadow-lg bg-white rounded-md p-4 flex flex-col justify-between leading-normal pb-4 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Recent Comments
      </h3>
      {relatedComments.map((comment, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="flex-grow ml-4 mb-2">
            <a
              href={`/post/${comment.post.slug}`}
              className="text-lg"
              key={index}
            >
              {comment.name} on {comment.post.title}
            </a>
            <p className="text-md text-gray-500">
              {comment.comment.substring(0, 120)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentWidget;
