import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteScroll: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // 아이템 리스트
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [page, setPage] = useState<number>(1); // 페이지 상태
  const { ref, inView } = useInView({
    threshold: 0.9, // 90% 이상 보이면 트리거
  });

  const MetaData = [
    { title: "이상혁", content: "프론트엔드 개발자" },
    { title: "상혁", content: "웹 프론트엔드" },
    { title: "LEE SangHyuk", content: "프론트엔드 엔지니어" },
    { title: "이상", content: "UI/UX 개발자" },
    { title: "SangHyuk", content: "React 개발자" },
    { title: "이.상.혁", content: "프론트엔드 전문가" },
    { title: "HYUK", content: "웹 인터페이스 개발" },
    { title: "이상혁 개발자", content: "JavaScript 마스터" },
    { title: "L. SangHyuk", content: "프론트엔드 마법사" },
    { title: "상혁이", content: "웹 서비스 개발" },
    { title: "이상혁", content: "CSS 마스터" },
    { title: "S. Hyuk", content: "UI 개발자" },
    { title: "이상형", content: "프론트엔드 퍼포먼스 전문가" },
    { title: "이상혁", content: "TypeScript 개발자" },
    { title: "상혁", content: "HTML/CSS 개발자" },
    { title: "Sang Hyuk", content: "웹 디자인 개발" },
    { title: "이상혁", content: "React.js 전문가" },
    { title: "상혁이", content: "프론트엔드 설계자" },
    { title: "이상혁", content: "JavaScript 엔지니어" },
    { title: "SangHyuk Lee", content: "프론트엔드 UI 개발자" },
    { title: "혁이", content: "웹 프론트엔드 마스터" },
    { title: "상혁", content: "프론트엔드 개발 전문가" },
    { title: "이상", content: "웹 퍼블리셔" },
    { title: "이상혁", content: "프론트엔드 디자인" },
    { title: "상혁 Lee", content: "SPA 개발자" },
    { title: "이상혁", content: "웹 애플리케이션 개발자" },
    { title: "SangHyuk", content: "UI/UX 퍼블리셔" },
    { title: "이상형", content: "인터랙티브 웹 개발자" },
    { title: "이상혁", content: "웹 플랫폼 개발자" },
    { title: "상혁이", content: "프론트엔드 최적화 전문가" },
    { title: "HYUK", content: "웹 성능 전문가" },
    { title: "상혁", content: "컴포넌트 개발자" },
    { title: "이상혁", content: "프론트엔드 설계자" },
    { title: "이상", content: "프론트엔드 디자인 전문가" },
    { title: "상혁", content: "웹 인터페이스 디자이너" },
    { title: "S. Hyuk", content: "프론트엔드 개발 마스터" },
    { title: "이상혁", content: "React UI 개발자" },
    { title: "LEE SangHyuk", content: "웹 서비스 엔지니어" },
    { title: "상혁이", content: "SPA 전문가" },
    { title: "이상혁", content: "웹 표준 개발자" },
    { title: "혁이", content: "프론트엔드 아키텍트" },
    { title: "상혁", content: "프론트엔드 인터랙션 개발자" },
    { title: "이상형", content: "웹 인터페이스 설계자" },
    { title: "SangHyuk", content: "웹 UI/UX 전문가" },
    { title: "상혁 Lee", content: "프론트엔드 시스템 개발자" },
    { title: "이상혁", content: "TypeScript 마스터" },
    { title: "이상", content: "웹 컴포넌트 개발자" },
    { title: "상혁", content: "프론트엔드 퍼포먼스 최적화" },
    { title: "Sang Hyuk", content: "웹 프로토타입 개발자" },
    { title: "이상혁", content: "프론트엔드 기술 리더" },
  ];

  // 🔹 아이템 추가 함수
  const loadMoreItems = useCallback(
    async (pageNumber: number) => {
      if (loading) return; // 로딩 중이면 중단
      setLoading(true);

      // 1초 로딩 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // ✅ 새로운 아이템 20개 생성
      const newItems = Array.from({ length: 20 }, (_, index) => {
        return `Item ${index + 1 + (pageNumber - 1) * page}`;
      });

      // 기존 아이템에 추가
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
    setPage(page + 1);
  }, [inView, loading]);

  // 🔹 페이지가 변경되면 새로운 아이템 로드
  useEffect(() => {
    if (page === 1) return; // 초기 로딩은 이미 했으므로 무시
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
      <div ref={ref} style={{ height: "20px" }} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
