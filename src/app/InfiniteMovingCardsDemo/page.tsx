"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards/page";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="min-h-[100vh] rounded-md flex flex-col antialiased bg-white   relative overflow-hidden">

        <div className="font-orelega text-6xl p-10 mt-20 md:mt-0 text-black">
            <h1>See what our customers</h1>

            <h2>think about us</h2>
        </div>

        <div className="p-10 text-xl font-sen">
            <p>These are feedbacks that were given after we performed the services.</p>
        </div>

        <div>
            <InfiniteMovingCards
                items={comentarios}
                direction="right"
                speed="slow"
                className="font-sen"
            />
        </div>

    </div>
  );
}

const comentarios = [
  {
    quote:
      "Rejane and family have been cleaning my house over seven years, and I can confidently say that their service has been great. From day one, they have consistently gone above and beyond to keep my home clean and organized.  Also, I trust them with my space, belongings, and privacy. They show up consistently, rain or shine, and their attention to detail is truly commendable. I super recommend Aguiar Cleaning services.",
    name: "Anonymous",
    title: "Rating 5",
  },
  {
    quote:
      "I highly recommend Aguiar Cleaning for their exceptional housekeeping services.  Rejane, Gabi and Daniel have provided services for our family for seven years.  Not only are they terrific at what they do, but they go above and beyond in their care for our home and pets.  Their attention to detail, reliability and trustworthiness make them stand out above other housekeeping services.  I appreciate their professionalism and I’m grateful for their hard work and the peace of mind they bring. ",
    name: "Dana B.. Redmond",
    title: "Rating 5",
  },
  {
    quote: "Aguiar Cleaning was recommended years ago by a friend and we have had them to our home for regular cleanings ever since. They have been consistently reliable, efficient and thorough and it has made our lives as a family of 5 so much easier! I have recommended them to several friends who have also been so happy with their services. Thank you Rejane and family!",
    name: "Anonymous",
    title: "Rating 5",
  },
  
];
