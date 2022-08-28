
var swiper = new Swiper(".image-slider", {
	slidesPerView: 3,
	slidesPerGroup: 2,
	spaceBetween: 100,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next-custom',
		prevEl: '.swiper-button-prev-custom',
	},
	breakpoints: {
		650: {
			slidesPerView: 3,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},
		320: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
	},
});


var dataswiper = new Swiper(".data-slider", {
	slidesPerView: 2.4,
	spaceBetween: -100,

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		1000: {
			slidesPerView: 2.4,
			spaceBetween: -100,
		},
		670: {
			slidesPerView: 1.5,
			spaceBetween: -100,
		},
		320: {
			centeredSlides: true,
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,

		},
	}
});

var tokenswiper = new Swiper(".token-slider", {
	slidesPerView: 1,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var scenswiper = new Swiper(".application", {
	slidesPerView: 1.8,
	spaceBetween: 50,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		850: {
			slidesPerView: 2,
			spaceBetween: 70,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 1.5,
			spaceBetween: 70,
			centeredSlides: true,
		},
		670: {
			slidesPerView: 1.8,
			spaceBetween: 100,
		},
		550: {
			centeredSlides: true,
			slidesPerView: 1.8,
			spaceBetween: 100,
		},
		420: {
			slidesPerView: 1.5,
		},
		375: {
			slidesPerView: 1.4,
			centeredSlides: true,
			spaceBetween: 35,
		},
		320: {
			slidesPerView: 1.15,
			centeredSlides: true,
			spaceBetween: 35,
		}
	}
});

