import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // 아이템 리스트
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [page, setPage] = useState<number>(1); // 페이지 상태
  const { ref, inView } = useInView({
    triggerOnce: false, // 계속해서 트리거되도록 설정
    threshold: 0.1, // 10% 이상 보일 때 트리거
  });

  // 아이템을 추가하는 함수
  const loadMoreItems = (pageNumber: number) => {
    setLoading(true);
    setTimeout(() => {
      const newItems = Array.from(
        { length: 20 },
        (_, index) => `Item ${index + 1 + (pageNumber - 1) * 20}`
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 1000); // 1초 딜레이로 로딩 시뮬레이션
  };

  // 초기 데이터 로딩 (컴포넌트 마운트 시)
  useEffect(() => {
    loadMoreItems(1); // 첫 번째 페이지 로드
  }, []);

  // 스크롤이 바닥에 닿았을 때 페이지 증가
  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  // 페이지가 변경되면 추가 아이템 로드
  useEffect(() => {
    if (page > 1) {
      loadMoreItems(page);
    }
  }, [page]);

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
      <div ref={ref} style={{ height: "20px" }} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
