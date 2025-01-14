export type postType = {
  page?: number;
  title: string;
  content: string;
};

export const getPostList = (page: number): postType[] => {
  console.log(page);
  return postList.filter((_, index) => index <= page && index > page - 10);
};

export const postList: postType[] = [
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
  { title: "이상혁", content: "프론트엔드 기술 리더" },
  { title: "이상혁", content: "프론트엔드 기술 리더" },
  { title: "이상혁", content: "프론트엔드 기술 리더" },
];
