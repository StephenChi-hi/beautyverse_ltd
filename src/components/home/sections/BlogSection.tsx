"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Header3, Paragraph1 } from "@/components/Text";
import BlogCard from "@/components/Blog/BlogCard";
import Button from "@/components/Button";

type BlogValues = {
  id: string;
  title: string;
  blogImageURL1: string;
  blogImagePublicId1: string;
  description: string;
};

function BlogIntro() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogValues[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        }) as BlogValues[];

        // Shuffle and pick 4 random blogs
        const shuffled = blogsData.sort(() => 0.5 - Math.random());
        const randomFour = shuffled.slice(0, 6);

        setBlogs(randomFour);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container1 py-[24px] xl:py-[80px] text-p_black">
      <div
        className="flex flex-col gap-[8px] text-center xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[34px]"
        data-aos="fade-up"
      >
        <Header3 className="text-white text-center">
          Our <span className="text-primary">Products</span>
        </Header3>
        <Paragraph1 className="max-w-[883px] text-white text-center">
          Crafted for beauty professionals, trusted by retailers, and loved by
          skincare enthusiasts around the world — our collections blend
          innovation, artistry, and care in every detail.
        </Paragraph1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
        {!loading && blogs.length > 0
          ? blogs.map((blog) => (
              <div key={blog.id}>
                <BlogCard
                  title={blog.title}
                  description={blog.description}
                  image={blog.blogImageURL1}
                  link={`/products/${blog.id}`}
                />
              </div>
            ))
          : Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-[300px] w-full bg-gray-200 rounded-md animate-pulse"
                ></div>
              ))}
      </div>

      <div className=" pb- pt-8 flex justify-center   ">
        <Button
          text="View More  "
          href="/products"
          isLink={true}
          border="border-2 border-primary "
          additionalClasses="border-primary xl:w-fit flex justify-center  w-full "
        />
      </div>
    </div>
  );
}

export default BlogIntro;
