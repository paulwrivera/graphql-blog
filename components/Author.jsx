import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="relative max-w-md mx-auto md:max-w-2xl -mt-16 lg:mt-12 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-md">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center">
          <div className="absolute left-auto right-auto -top-12">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={author.name}
              height="100px"
              width="100px"
              className="align-middle rounded-full border-none"
              src={author.photo.url}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal">{author.name}</h3>
      </div>
      <div className="mt-3 py-6 border-t border-slate-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <p className="font-light leading-relaxed text-slate-600">{author.bio}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Author;
