import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getPostList, postType } from "./postList";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
`;

const PostItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const InfiniteScroll = (): JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [posts, setPosts] = useState<postType[]>(getPostList(10));
  const [loading, setLoading] = useState<boolean>(false); // 🔥 로딩 상태 추가

  const handleScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    // 🔥 로딩 중이 아니고, 스크롤이 300px 이내로 도달하면 데이터 로드
    if (!loading && scrollTop + innerHeight >= scrollHeight - 500) {
      setLoading(true); // 🔥 중복 방지
      setTimeout(() => {
        setPosts((prevPosts) => prevPosts.concat(getPostList(page + 10)));
        setPage((prevPage) => prevPage + 10);
        setLoading(false); // 🔥 로딩 끝
      }, 1000); // 🔥 로딩 시뮬레이션
    }
  }, [loading, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // 🔥 passive 적용

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container>
      {posts.map((post: postType, idx: number) => (
        <PostItem key={idx}>
          <h3>{post.title}</h3>
          <div>{idx}</div>
          <p>{post.content}</p>
        </PostItem>
      ))}
      {loading && <p>Loading...</p>} {/* 🔥 로딩 상태 표시 */}
    </Container>
  );
};

export default InfiniteScroll;
