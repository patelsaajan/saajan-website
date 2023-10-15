import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type cardPrompts = {
  title: string;
  date: string;
  tags: string;
  body: string;
  blogSlug: string;
};

const BlogCards = ({ title, date, tags, body, blogSlug }: cardPrompts) => {
  const options: { dateStyle: "long" } = { dateStyle: "long" };
  console.log(blogSlug);
  return (
    <Link href={`/blog/${blogSlug}`}>
      <Box
        sx={{ display: "flex column", width: "100%", gap: "10px", mb: "40px" }}
      >
        <Typography variant="h5" fontWeight={"550"}>
          {title}
        </Typography>
        <Box display={"flex"} gap={"10px"}>
          <Typography>
            {new Intl.DateTimeFormat("en-uk", options).format(new Date(date))}
          </Typography>{" "}
          | <Typography sx={{ color: "#8695A4" }}>{tags}</Typography>
        </Box>
        <Typography>{body}</Typography>
        <Divider sx={{ mt: "20px", Size: "10px" }} />
      </Box>
    </Link>
  );
};

export default BlogCards;
