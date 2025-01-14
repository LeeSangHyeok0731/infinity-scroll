import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getPostList, postType } from "./postList";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
`;

const PostItem = styled.div``;

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const [posts, setPosts] = useState<postType[]>(getPostList(1));

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [page, posts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Container>
      {posts.map((post: postType, idx: number) => (
        <PostItem
          key={idx}
          style={{ padding: "20px", borderBottom: "1px solid #ccc" }}
        >
          {post.page}
          {post.title}
          {post.content}
        </PostItem>
      ))}
    </Container>
  );
};

export default InfiniteScroll;
