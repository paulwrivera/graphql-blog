import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-md p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-md h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Comment" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-md focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Email" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm
        text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
