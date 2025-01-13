import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // 아이템 리스트
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [page, setPage] = useState<number>(1); // 페이지 상태
  const [count, setCount] = useState<number>(1);
  const { ref, inView } = useInView({
    threshold: 0.9, // 10% 이상 보이면 트리거
  });

  // 🔹 아이템 추가 함수 (중복 방지)
  const loadMoreItems = useCallback(
    async (pageNumber: number) => {
      if (loading) return; // 로딩 중이면 중단
      setLoading(true);

      // 1초 로딩 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newItems = Array.from({ length: 20 }, (_, index) => {
        setCount(count + 1);
        return `Item ${index + count + (pageNumber - 1) * 20}`;
      });

      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    },
    [loading]
  );

  // 🔹 초기 데이터 로딩 (최초 1번만 실행)
  useEffect(() => {
    loadMoreItems(1);
  }, [loadMoreItems]);

  // 🔹 스크롤이 끝에 닿으면 페이지 증가
  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  // 🔹 페이지가 변경되면 새로운 아이템 로드
  useEffect(() => {
    if (page === 1) return; // 초기 로딩은 이미 했으므로 무시
    loadMoreItems(page);
  }, [page, loadMoreItems]);

  return (
    <div style={{ padding: "20px" }}>
      {items.map((items, index) => (
        <div
          key={index}
          style={{ padding: "20px", borderBottom: "1px solid #ccc" }}
        >
          {items}
        </div>
      ))}
      {/* 스크롤 감지용 div */}
      <div ref={ref} style={{ height: "20px" }} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
