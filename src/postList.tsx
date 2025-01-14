export type postType = {
  page: number;
  title: string;
  content: string;
};

export const getPostList = (page: number): postType[] => {
  return postList.filter((post: postType) => post.page === page);
};

export const postList: postType[] = [
  { page: 1, title: "이상혁", content: "프론트엔드 개발자" },
  { page: 2, title: "상혁", content: "웹 퍼블리셔" },
  { page: 3, title: "LEE SangHyuk", content: "UI/UX 디자이너" },
  { page: 4, title: "이상", content: "React 개발자" },
  { page: 5, title: "SangHyuk", content: "JavaScript 마스터" },
  { page: 6, title: "이.상.혁", content: "프론트엔드 아키텍트" },
  { page: 7, title: "HYUK", content: "웹 인터페이스 개발자" },
  { page: 8, title: "이상혁 개발자", content: "TypeScript 전문가" },
  { page: 9, title: "L. SangHyuk", content: "프론트엔드 성능 최적화" },
  { page: 10, title: "상혁이", content: "웹 서비스 엔지니어" },
  { page: 11, title: "이상혁", content: "UI 컴포넌트 개발자" },
  { page: 12, title: "S. Hyuk", content: "프론트엔드 기술 리더" },
  { page: 13, title: "이상형", content: "웹 애플리케이션 개발자" },
  { page: 14, title: "이상혁", content: "디자인 시스템 설계자" },
  { page: 15, title: "상혁", content: "SPA 개발 전문가" },
  { page: 16, title: "Sang Hyuk", content: "프론트엔드 리액트 개발자" },
  { page: 17, title: "이상혁", content: "웹 플랫폼 엔지니어" },
  { page: 18, title: "상혁이", content: "프론트엔드 퍼포먼스 엔지니어" },
  { page: 19, title: "이상혁", content: "웹 표준 전문가" },
  { page: 20, title: "SangHyuk Lee", content: "컴포넌트 기반 개발자" },
  { page: 21, title: "혁이", content: "프론트엔드 최적화 전문가" },
  { page: 22, title: "상혁", content: "인터랙션 디자이너" },
  { page: 23, title: "이상", content: "웹 퍼블리싱 전문가" },
  { page: 24, title: "이상혁", content: "React Native 개발자" },
  { page: 25, title: "상혁 Lee", content: "웹 성능 최적화 전문가" },
  { page: 26, title: "이상혁", content: "디자인 시스템 개발자" },
  { page: 27, title: "SangHyuk", content: "프론트엔드 기술 전문가" },
  { page: 28, title: "이상형", content: "웹 API 개발자" },
  { page: 29, title: "이상혁", content: "프론트엔드 프로젝트 매니저" },
  { page: 30, title: "상혁이", content: "UI/UX 기획자" },
  { page: 31, title: "HYUK", content: "웹 브라우저 최적화 전문가" },
  { page: 32, title: "상혁", content: "프론트엔드 오픈소스 기여자" },
  { page: 33, title: "이상혁", content: "웹 접근성 전문가" },
  { page: 34, title: "이상", content: "React Hook 개발자" },
  { page: 35, title: "상혁", content: "컴포넌트 기반 UI 디자이너" },
  { page: 36, title: "S. Hyuk", content: "웹 인터페이스 설계자" },
  { page: 37, title: "이상혁", content: "프론트엔드 기술 리더" },
  { page: 38, title: "LEE SangHyuk", content: "모바일 웹 개발자" },
  { page: 39, title: "상혁이", content: "웹 UX 최적화 전문가" },
  { page: 40, title: "이상혁", content: "프론트엔드 팀 리더" },
  { page: 41, title: "혁이", content: "웹 퍼포먼스 엔지니어" },
  { page: 42, title: "상혁", content: "UI 애니메이션 개발자" },
  { page: 43, title: "이상형", content: "웹 인터랙션 디자이너" },
  { page: 44, title: "SangHyuk", content: "웹 페이지 최적화 전문가" },
  { page: 45, title: "상혁 Lee", content: "프론트엔드 유지보수 전문가" },
  { page: 46, title: "이상혁", content: "웹 디자인 마스터" },
  { page: 47, title: "이상", content: "프론트엔드 시스템 엔지니어" },
  { page: 48, title: "상혁", content: "React 컴포넌트 전문가" },
  { page: 49, title: "Sang Hyuk", content: "웹 서비스 최적화" },
  { page: 50, title: "이상혁", content: "웹 디자인 퍼블리셔" },
];
