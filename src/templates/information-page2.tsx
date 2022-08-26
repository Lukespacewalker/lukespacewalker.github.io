import { graphql } from "gatsby";
import * as React from "react";
const InformationPage = ({ mdx }, children) => {
  return <div>{children}</div>;
};

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        type
        tag
        date(formatString: "dddd, DD MMMM YYYY", locale: "th")
        excerpt
        authors {
          id
          name
          position
          avatar {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 150
                height: 150
                transformOptions: { cropFocus: NORTH }
                layout: FIXED
              )
            }
          }
        }

        images {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: CONSTRAINED, height: 800)
          }
        }

        background {
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
            original {
              width
              height
            }
          }
        }
      }
    }
  }
`;

export default InformationPage;
