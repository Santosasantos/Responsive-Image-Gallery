/**
 * Title: Write a program using JavaScript on _index
 * Author: Md Rabiul Islam Santo
 * Linkedin: https://www.linkedin.com/in/md-rabiul-islam-santo/
 * GitHub: https://github.com/Santosasantos
 * Facebook: https://www.facebook.com/profile.php?id=100004670475240
 * Twitter: https://twitter.com/___Santo05___
 * WhatsApp: https://wa.me/8801616913975
 * Telegram: https://t.me/santoiit
 * Date: 04, November 2023
 */

import Gallery from "@/components/Gallery";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Simple Image Gallery</title>
        <meta
          name="description"
          content="Create a responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image. The gallery should be visually appealing and provide a seamless user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery />
    </>
  );
};

export default Index;
