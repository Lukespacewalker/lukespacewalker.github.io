import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
export const MDXImage = ({
  imageList,
  mode = "block",
  className = "",
  name,
  alt = "",
  caption,
  ...otherProps
}: {
  imageList: any[];
  mode: "block" | "inline-block";
  className: string;
  name: string;
  caption?: string;
  alt: string;
  [x: string]: any;
}) => {
  const image = imageList.find(
    (image) => image.name === name.substring(0, name.lastIndexOf("."))
  );
  return (
    <div className={`${className} ${mode}`}>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        {...otherProps}
        alt={alt}
      />
      {caption && <div className="text-center">{caption}</div>}
    </div>
  );
};
