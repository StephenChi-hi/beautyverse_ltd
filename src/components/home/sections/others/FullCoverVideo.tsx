import React from "react";

interface VideoProps {
  src?: string;
}

const FullCoverVideo: React.FC<VideoProps> = ({ src }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        src={
          src ||
          "https://res.cloudinary.com/dz0vukmgt/video/upload/v1754812647/video5819105701628223167_dthgxa.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </div>
  );
};

export default FullCoverVideo;
