import { useEffect } from "react";

// 특정 인덱스의 항목이 화면 중앙에 위치하도록 스크롤하는 커스텀 훅
const useScrollToCenter = (
  index: number, // 스크롤할 항목의 인덱스
  listRef: React.RefObject<HTMLElement>, // 스크롤할 리스트의 Ref
  middleIndex: number = 4 // 화면의 중앙 인덱스 (기본값은 4)
) => {
  useEffect(() => {
    // 유효하지 않은 인덱스이거나 리스트 Ref가 없으면 종료
    if (index < 0 || !listRef.current) return;

    const list = listRef.current; // 리스트 요소 참조

    // 리스트의 첫 번째 자식 요소의 높이를 가져옴 (각 항목의 높이)
    const itemHeight = list.children[0].clientHeight;

    // 스크롤할 위치 계산 (index에서 middleIndex만큼 위로 스크롤)
    const scrollTop = itemHeight * (index - middleIndex);

    // 부드러운 스크롤로 해당 위치로 이동
    list.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, [index, listRef]); // index와 listRef가 변경될 때마다 실행
};

export default useScrollToCenter;
