import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",
  transition: "0.2s",
  position: "relative",

  "&:before": {
    content: "",
    position: "absolute",
    bottom: "-5px",
    width: "100%",
    height: "0",
    borderBottom: "2px solid transparent",
    transform: "scaleX(0)",
    transition: "0.4s ease-in-out",
  },

  "&:hover": {
    color: "$grey5",

    "&:before": {
      borderBottomColor: "$brand1",
      transform: "scaleX(1)",
    },
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {});

export const Project = styled("article", {
  marginTop: "4rem",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "max-content",

      "@mobile": {
        width: "auto",
      },

      "&::before": {
        content: "New",
        position: "absolute",
        top: "5px",
        right: "-4rem",
        width: "max-content",
        height: "28px",
        backgroundColor: "$brand1",
        padding: "0px 8px",
        borderRadius: "var(--radii-1)",
        fontSize: "14px",
        color: "var(--colors-whiteFixed)",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter",

        "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      },
    },
  },
});
