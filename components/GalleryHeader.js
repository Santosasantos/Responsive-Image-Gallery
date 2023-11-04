/**
 * Title: Write a program using JavaScript on GalleryHeader
 * Author: Md Rabiul Islam Santo
 * Linkedin: https://www.linkedin.com/in/md-rabiul-islam-santo/
 * GitHub: https://github.com/Santosasantos
 * Facebook: https://www.facebook.com/profile.php?id=100004670475240
 * Twitter: https://twitter.com/___Santo05___
 * WhatsApp: https://wa.me/8801616913975
 * Telegram: https://t.me/santoiit
 * Date: 04, November 2023
 */

import React from "react";

const GalleryHeader = ({
  selectThumbnails,
  setSelectThumbnails,
  handleDeleteClick,
}) => {
  return (
    <nav className="py-4 px-6">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {selectThumbnails.length === 0 ? (
            "Gallery"
          ) : (
            <label
              htmlFor="select"
              className="flex flex-row justify-between items-center gap-x-4"
            >
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={selectThumbnails.length > 0}
                className="h-5 w-5 accent-blue-500 cursor-pointer"
                onChange={() => setSelectThumbnails([])}
              />
              {selectThumbnails.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-500 font-medium"
          onClick={handleDeleteClick}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default GalleryHeader;
