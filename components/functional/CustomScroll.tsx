function useScroll() {
  let headerHeight: number | null = null;
  if (typeof window !== 'undefined') {
    const header = document.getElementById('main-header');
    headerHeight = header?.clientHeight || null;
  }

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    const target = event.target.getAttribute('data-href');
    const element = document.querySelector(target);
    if (element && headerHeight) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return { handleLinkClick };
}

export default useScroll;
