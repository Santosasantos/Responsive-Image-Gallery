/**
 * Title: Write a program using JavaScript on DragDropOverlay
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

const DragDropOverlay = ({ dragging, draggedIndex, image }) => {
  return (
    dragging &&
    Number(draggedIndex) === Number(image.id) && (
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed rounded-lg z-50">
        Drop Here
      </div>
    )
  );
};

export default DragDropOverlay;
