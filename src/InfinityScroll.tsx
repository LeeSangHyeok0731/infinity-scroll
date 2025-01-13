import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // 반복할 div의 내용
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); // 현재 페이지 상태
  const { ref, inView } = useInView({
    triggerOnce: false, // 계속해서 트리거되도록 설정
    threshold: 0.1, // 10% 이상 보일 때 트리거
  });

  const loadMoreItems = () => {
    setLoading(true);
    // 페이지마다 새로운 아이템 20개를 추가
    setTimeout(() => {
      const newItems = Array.from(
        { length: 20 },
        (_, index) => `Item ${index + 1 + (page - 1) * 20}`
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 1000); // 예시로 1초 딜레이를 주어 로딩 상태를 시뮬레이션
  };

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1); // 페이지 증가
    }
  }, [inView, loading]);

  useEffect(() => {
    loadMoreItems(); // 페이지가 바뀔 때마다 새로운 아이템 로드
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
