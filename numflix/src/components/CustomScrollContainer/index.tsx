import { useScroll } from 'framer-motion';
import { ScrollBar, ScrollWrap, Wrap } from './style';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { scrollState } from '@src/atoms';

const CustomScrollContainer = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: ref });
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  let scrollbarTimeout: NodeJS.Timeout;
  const setScroll = useSetRecoilState(scrollState);

  useEffect(() => {
    if (ref.current) {
      const handleScrollbar = () => {
        const contentHeight = ref.current!.scrollHeight;
        const visibleHeight = ref.current!.clientHeight;
        const scrollbarHeightRatio = 0.8; // Custom scrollbar height ratio
        const scrollbarHeight = visibleHeight * scrollbarHeightRatio;

        setScrollHeight(scrollbarHeight);

        const maxScrollTop = contentHeight - visibleHeight;
        const scrollbarMaxTop = visibleHeight - scrollbarHeight;
        const scrollTop = ref.current!.scrollTop;
        const scrollbarTop = (scrollTop / maxScrollTop) * scrollbarMaxTop;

        setScrollTop(scrollbarTop);

        setIsVisible(true);

        if (scrollbarTimeout) clearTimeout(scrollbarTimeout);
        scrollbarTimeout = setTimeout(() => setIsVisible(false), 1000);
      };

      handleScrollbar(); // Initialize scrollbar position

      ref.current.addEventListener('scroll', handleScrollbar);
      window.addEventListener('resize', handleScrollbar);

      return () => {
        ref.current?.removeEventListener('scroll', handleScrollbar);
        window.removeEventListener('resize', handleScrollbar);
      };
    }
  }, [ref]);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scrollY, setScroll]);

  return (
    <Wrap>
      <ScrollWrap ref={ref}>
        {children}
        <ScrollBar
          $scrollTop={scrollTop}
          $scrollHeight={scrollHeight}
          $isVisible={isVisible}
        />
      </ScrollWrap>
    </Wrap>
  );
};

export default CustomScrollContainer;
