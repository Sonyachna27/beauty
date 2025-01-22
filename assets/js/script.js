
document.addEventListener("DOMContentLoaded", function () {
	
	toggleMenu();
	animationHeader();
	accordionFunction();
	addAnimationInit();
	relaxSlider();
	reviewsSlider();
	worksSlider();
	openTabs();
	prettyScroll();
	animateText();
	lightbox.init({
		showImageNumberLabel: true,
		disableScrolling: false,
		fitImagesInViewport:true,
			}	
	);
	
});

setTimeout(function () {
	let aosOffset = 120;
	if (window.innerWidth < 480) {
		aosOffset = 30;
	}
	AOS.init({
		offset: aosOffset
	});
}, 100);

const animationHeader = () =>{
	let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
		const headerNav = document.querySelector(".header");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		let windowInnerWidth = window.innerWidth;
    if (windowInnerWidth >= 1024) {
      if (scrollTop > lastScrollTop) {
        if (scrollTop > 100) {
          headerNav.classList.add("fixed-header-nav");
          headerNav.style.animationName = "smoothScroll";
        }
      } else if (scrollTop <= 0) {
        headerNav.classList.remove("fixed-header-nav");
        headerNav.style.animationName = "removeSmoothScroll";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  });
}
const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burger");
  const navLinks = document.querySelectorAll("nav a");
  burgerMenu.addEventListener("click", () =>
    htmlElement.classList.toggle("open")
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}
const animateText = () =>{
	const aboutText = document.querySelectorAll('.team__item__name, .team__item__position');
	aboutText.forEach((text) => {
		text.setAttribute('data-aos', 'fade-up');
	})
}

const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });

    const buttons = item.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });
};
const addAnimationInit = () => {

	const scrollers = document.querySelectorAll('.marquee');
	if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
		addAnimation();
	}
	function addAnimation(){
		scrollers.forEach((scroller) =>{
			scroller.setAttribute("data-animate", true);
			const scrollerInner = scroller.querySelector('.marquee__wrap');
			const scrollerContent = Array.from(scrollerInner.children);
			scrollerContent.forEach(item =>{
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner.appendChild(duplicatedItem);
			});
			
		});
	}
}

const relaxSlider = () =>{

const relaxSliderWrap = document.querySelector('.relaxSlider');
if(!relaxSliderWrap) return;
const slides = document.querySelectorAll(".relax-slide");
slides.forEach((slide, index) => {
	if (index % 2 === 0  || index === 0) {
		slide.classList.add("even");
	} else {
		slide.classList.add("odd");
	}
});
var relaxSwiper = new Swiper(relaxSliderWrap, {
	slidesPerView: 1,
	spaceBetween: 22,
	loop: true,
	slidesPerView: 1,
			spaceBetween: 20,
			watchOverflow: true,
			loop: true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				speed: 3000,
			breakpoints: {
				367: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				550: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 3.75,
					spaceBetween: 20,
				},
				1023: {
					slidesPerView: 4.75,
					spaceBetween: 20,
				},
			},
		});
}
const reviewsSlider = () =>{
	const reviewsSliderWrap = document.querySelector('.reviewsSlider');
	if(!reviewsSliderWrap) return;
	var reviewsSliderInit = new Swiper(reviewsSliderWrap, {
		pagination: {
			el: ".reviews-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".reviews-button-next",
			prevEl: ".reviews-button-prev",
		},
		breakpoints: {
				367: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1023: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
	});

}
const worksSlider = () =>{
	const worksSliderWrap = document.querySelector('.worksSlider');
	if(!worksSliderWrap) return;
	var reviewsSliderInit = new Swiper(worksSliderWrap, {
		pagination: {
			el: ".works-pagination",
			type: "progressbar",
		},
		navigation: {
			nextEl: ".works-button-next",
			prevEl: ".works-button-prev",
		},
		breakpoints: {
				367: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1023: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
	});

}
const openTabs = () => {
  const tabGroups = document.querySelectorAll(".target__wrap"); 

  tabGroups.forEach((group) => {
    const tabsLinks = group.querySelectorAll(".target__list-item");
    const allContentBlocks = group.querySelectorAll(".target__content");
    let frontBlockId = tabsLinks[0].dataset.name; 

    function addTabsActive() {
      tabsLinks.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabsLinks.forEach((otherButton) => {
            otherButton.classList.remove("active");
          });
          button.classList.add("active");
          showContent(button.dataset.name, index);
        });
      });
    }

    function updateActiveTab(index) {
      tabsLinks.forEach((button, i) => {
        if (i === index) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }

    function changeSlide(blockId) {
      allContentBlocks.forEach((block) => {
        if (block.getAttribute("id") === blockId) {
          block.style.display = "flex";
          block.style.opacity = 1;
        } else {
          block.style.opacity = 0;
          block.style.display = "none";
        }
      });
      frontBlockId = blockId;
    }

    function showContent(itemName, index) {
      changeSlide(itemName);
      updateActiveTab(index);
    }
    addTabsActive();
    showContent(frontBlockId, 0); 
  });
};
const prettyScroll = () => {
	document.querySelectorAll('a[href^="#"]').forEach(link => {
			link.addEventListener('click', function(e) {
					e.preventDefault();

					const href = this.getAttribute('href').substring(1);
					const scrollTarget = document.getElementById(href);

					if (!scrollTarget) return;

					const header = document.querySelector('header');
					const fixedHeader = document.querySelector('.header__bottom');

					const topOffset = header?.offsetHeight || 0;
					const fixedOffset = fixedHeader?.offsetHeight || 0;

					const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
					const elementPosition = scrollTarget.getBoundingClientRect().top;

					const offsetPosition = isDesktop 
							? elementPosition - fixedOffset 
							: elementPosition - topOffset;

					window.scrollBy({
							top: offsetPosition,
							behavior: 'smooth'
					});
			});
	});
};

$(document).ready(function() {
  // Ініціалізуємо кожен блок окремо
  $(".team__item__img").each(function() {
    const $slideshow = $(this); // Отримуємо поточний блок
    
    // Ініціалізація слайдера для кожного блоку
    $slideshow.cycle({
      timeout: 0, // Вимикаємо автоматичну зміну слайдів
      fx: 'fade', // Ефект переходу (за бажанням)
    });
    
    // Знаходимо кнопку всередині батьківського блоку
    const $nextButton = $slideshow.closest(".team__item").find(".next-button");
    
    // Прив'язуємо кнопку до відповідного слайдшоу
    $nextButton.on("click", function() {
      $slideshow.cycle("next"); // Перемикаємо на наступний слайд
    });
  });
});

