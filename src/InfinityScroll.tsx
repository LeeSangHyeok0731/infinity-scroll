import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>(["Item"]); // 첫 번째 'Item'을 기본값으로 추가
  const [loading, setLoading] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // 하나만 트리거되지 않게 설정
    threshold: 0.1, // 10% 이상 보일 때 트리거
  });

  const loadMoreItems = () => {
    setLoading(true);
    // 새로운 아이템을 추가 (여기서는 "Item" 텍스트만 반복)
    setTimeout(() => {
      setItems((prev) => [...prev, "Item"]);
      setLoading(false);
    }, 1000); // 예시로 1초 딜레이를 주어 로딩 상태를 시뮬레이션
  };

  useEffect(() => {
    if (inView && !loading) {
      loadMoreItems(); // `div`가 화면에 보일 때마다 새로운 아이템 추가
    }
  }, [inView, loading]); // `loading` 상태를 의존성 배열에 추가하여 무한히 호출되지 않게 방지

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
