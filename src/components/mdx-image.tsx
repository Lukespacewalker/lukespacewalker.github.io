import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXContext } from "./mdx-context";
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
  caption?: string | React.ReactNode;
  alt: string;
  [x: string]: any;
}) => {
  imageList = imageList ?? React.useContext(MDXContext).imagesList;
  const image = imageList?.find(
    (image) => image.name === name.substring(0, name.lastIndexOf("."))
  );
  return (
    image && (
      <div className="image-container">
        <div className={`${className} ${mode}`}>
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            {...otherProps}
            alt={alt}
          />
          {caption && <div className="text-center">{caption}</div>}
        </div>
      </div>
    )
  );
};