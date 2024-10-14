// ScrollObserver.js

class ScrollObserver {
  constructor(parentSelector, elementSelectors) {
    this.parent = document.querySelector(parentSelector);
    this.elements = this.parent.querySelectorAll(elementSelectors.join(', '));
    this.initObserver();
  }

  initObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.classList.remove('not-in-view');
          } else {
            entry.target.classList.remove('in-view');
            entry.target.classList.add('not-in-view');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
      }
    );

    this.elements.forEach((element) => {
      observer.observe(element);
    });
  }
}

export default ScrollObserver;