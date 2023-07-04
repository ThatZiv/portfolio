import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography, Divider } from "@mui/material";
const MarkdownConfig = {
  h1: ({ node, children }) => (
    <Typography variant="h1" style={{ fontFamily: "Blinker, sans-serif" }}>
      {children}
    </Typography>
  ),
};

function Markdown({ children }) {
  return (
    <ReactMarkdown linkTarget="_blank" components={MarkdownConfig}>
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
