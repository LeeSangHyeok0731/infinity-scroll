import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // 아이템 리스트
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [page, setPage] = useState<number>(1); // 페이지 상태
  const { ref, inView } = useInView({
    threshold: 1, // 🔥 100% 화면에 보여야 감지
  });

  // 🔹 아이템 추가 함수
  const loadMoreItems = useCallback(
    async (pageNumber: number) => {
      if (loading) return;
      setLoading(true);

      // 1초 로딩 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // ✅ 새로운 아이템 20개 생성
      const newItems = Array.from({ length: 20 }, (_, index) => {
        return `Item ${index + 1 + (pageNumber - 1) * 20}`;
      });

      // 기존 아이템에 추가
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    },
    [loading]
  );

  // 🔹 초기 데이터 로딩
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
    if (page === 1) return;
    loadMoreItems(page);
  }, [page, loadMoreItems]);

  return (
    <div style={{ padding: "20px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ padding: "20px", borderBottom: "1px solid #ccc" }}
        >
          {item}
        </div>
      ))}
      {/* 스크롤 감지용 div */}
      <div ref={ref} style={{ height: "100px" }} /> {/* 🔥 감지 영역 확대 */}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
