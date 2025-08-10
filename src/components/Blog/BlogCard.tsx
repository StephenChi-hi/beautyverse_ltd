import React from "react";
import { Header3, Paragraph2, Header4 } from "../Text";
import Button from "../Button";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="w-full  overflow-hidden shadow-lg- bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="w-full h-[300px]  object-cover"
        src={image.replace("/upload/", "/upload/w_1000,f_auto/")}
        alt={title}
      />
      <div className="p-4 flex flex-col ">
        <Header4 className=" font-semibold text-gray-800 mb-2">{title}</Header4>
        <Paragraph2 className="text-gray-600 mb-4">
          {" "}
          {description.split(" ").slice(0, 11).join(" ")}...
        </Paragraph2>
        <Button
          text="Learn more"
          href={link}
          isLink={true}
          additionalClasses="border-0 xl:w-fit w-full "
        />
      </div>
    </div>
  );
};

export default BlogCard;
