window.onload = function () {
	//Хэшблок закрыть
	const hashClose = document.querySelector('.hashblock__close');
	const hashWrapClose = document.querySelector('.hashblock_wrapper');
	hashClose.addEventListener('click', () => {
		hashWrapClose.classList.add('hashblock_wrapper__active');
	});

	//табы при наведении и нажатии
	document.addEventListener("click", documentActions);
	//Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('menu__arrow_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item.menu__arrow_hover').length > 0) {
				document.querySelector('.menu__item.menu__arrow_hover').classList.remove('menu__arrow_hover');
			}
		}
	}


	//Активное меню при скролле
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;


		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.menu__body').clientHeight <= scrollDistance) {
				document.querySelectorAll('.menu__body a').forEach((el) => {
					if (el.classList.contains('nav_href_active')) {
						el.classList.remove('nav_href_active');
					}
				});

				document.querySelectorAll('.nav__button-active')[i].querySelector('a').classList.add('nav_href_active');
			}
		});
	});


	// Scrollbar Points активные
	const swiperBtnPrev = document.querySelector('.swiper-button-prev-custom')
	const swiperBtnNext = document.querySelector('.swiper-button-next-custom')
	const scrollbarPoints = Array.from(document.querySelectorAll('.scrollbar__points-point'))

	swiperBtnNext.addEventListener('click', () => {
		if (scrollbarPoints[3].classList.contains('scrollbar__points-point-active')) {
			scrollbarPoints[4].classList.add('scrollbar__points-point-active')
			scrollbarPoints[5].classList.add('scrollbar__points-point-active')
		} else if (scrollbarPoints[1].classList.contains('scrollbar__points-point-active')) {
			scrollbarPoints[2].classList.add('scrollbar__points-point-active')
			scrollbarPoints[3].classList.add('scrollbar__points-point-active')
		} else {
			console.log('asdas')
		}
	})
	swiperBtnPrev.addEventListener('click', () => {
		if (scrollbarPoints[4].classList.contains('scrollbar__points-point-active')) {
			scrollbarPoints[4].classList.remove('scrollbar__points-point-active')
			scrollbarPoints[5].classList.remove('scrollbar__points-point-active')
		} else if (scrollbarPoints[2].classList.contains('scrollbar__points-point-active')) {
			scrollbarPoints[2].classList.remove('scrollbar__points-point-active')
			scrollbarPoints[3].classList.remove('scrollbar__points-point-active')
		} else {
			console.log('asdas')
		}
	})
}
