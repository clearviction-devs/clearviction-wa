import useScroll from './CustomScroll.tsx';

function useLinkHandler() {
  const { handleLinkClick: handleScroll } = useScroll();

  const handleLinkClick = (event: any) => {
    const target = event.target.getAttribute('data-href');

    if (target.startsWith('#')) {
      handleScroll(event);
    }
  };

  return { handleLinkClick };
}

export default useLinkHandler;
