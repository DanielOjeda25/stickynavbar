// navigation.js
class StickyNavigation {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;

    const tabs = document.querySelectorAll(".et-hero-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        this.onTabClick(event, tab);
      });
    });

    window.addEventListener("scroll", () => this.onScroll());
    window.addEventListener("resize", () => this.onResize());
  }

  onTabClick(event, element) {
    event.preventDefault();
    const targetId = element.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const scrollTop = targetElement.offsetTop - this.tabContainerHeight + 1;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }

  onScroll() {
    this.checkTabContainerPosition();
    this.findCurrentTabSelector();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkTabContainerPosition() {
    const tabContainer = document.querySelector(".et-hero-tabs");
    const offset =
      tabContainer.offsetTop +
      tabContainer.clientHeight -
      this.tabContainerHeight;
    const scrollTop = window.scrollY;

    const tabsContainer = document.querySelector(".et-hero-tabs-container");
    if (scrollTop > offset) {
      tabsContainer.classList.add("et-hero-tabs-container--top");
    } else {
      tabsContainer.classList.remove("et-hero-tabs-container--top");
    }
  }

  findCurrentTabSelector() {
    let newCurrentId = null;
    let newCurrentTab = null;

    const tabs = document.querySelectorAll(".et-hero-tab");
    tabs.forEach((tab) => {
      const id = tab.getAttribute("href");
      const offsetTop =
        document.querySelector(id).offsetTop - this.tabContainerHeight;
      const offsetBottom = offsetTop + document.querySelector(id).clientHeight;

      const scrollTop = window.scrollY;
      if (scrollTop > offsetTop && scrollTop < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = tab;
      }
    });

    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.offsetWidth + "px";
      left = this.currentTab.offsetLeft + "px";
    }
    const slider = document.querySelector(".et-hero-tab-slider");
    slider.style.width = width;
    slider.style.left = left;
  }
}

new StickyNavigation();
