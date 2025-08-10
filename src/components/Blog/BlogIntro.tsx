"use client";

import React, { useState, useEffect } from "react";
import { Header3, Paragraph1, ParagraphLink1 } from "../Text";
import AOS from "aos";
import BlogCard from "./BlogCard";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, addDoc, getDocs } from "firebase/firestore";

type BlogValues = {
  id: string;
  title: string;
  blogImageURL1: string;
  blogImagePublicId1: string;
  description: string;
};

interface BlogIntroProps {
  blogs: BlogValues[];
}

function BlogIntro({ blogs }: BlogIntroProps) {
  
 

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div>
      <div className=" container1 py-[24px] xl:py-[100px] pt-[100px]  text-white">
        {" "}
        <div
          className=" flex flex-col gap-[8px] text-center xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Discover Our <span className="text-primary">Brands</span>
          </Header3>
          <Paragraph1 className="max-w-[883px] text-center">
            From luxurious skincare to innovative cosmetics, each Beautyverse
            creation blends artistry, quality, and care. Explore our collections
            and find the perfect products to inspire your daily beauty rituals.
          </Paragraph1>
        </div>
        {/* data-aos="fade-right" */}
        <div className=" grid grid-cols-1 xl:grid-cols-3  sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
          {blogs && blogs.length > 0
            ? blogs.map((blog: any) => (
                <div key={blog.id}>
                  <BlogCard
                    title={blog.title}
                    description={blog.description}
                    image={blog.blogImageURL1}
                    link={`/products/${blog.id}`}
                  />
                </div>
              ))
            : Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="h-[300px] w-full bg-gray-200 rounded-md animate-pulse"
                  ></div>
                ))}
        </div>
      </div>
    </div>
  );
}

export default BlogIntro;
