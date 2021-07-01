$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Товары
	if ($('.products .swiper-container').length) {
		new Swiper('.products .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), $(swiper.$el).find('.product').length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Карусель в тексте
	if ($('.text_carousel .swiper-container').length) {
		new Swiper('.text_carousel .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 52,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.thums-swiper-button-next',
				prevEl: '.thums-swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 15,
					slidesPerView: 3
				}
			}
		})

		const productSlider = new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Боковая колонка - Категории
	$('aside .categories .item > a.sub_link').click(function (e) {
		e.preventDefault()

		!$(this).hasClass('active')
			? $(this).addClass('active').next().slideDown(300)
			: $(this).removeClass('active').next().slideUp(200)
	})


	// Оформление заказа
	$('.checkout_info .delivery_method label').click(function () {
		let _self = $(this)

		setTimeout(() => {
			let deliveryInfo = _self.data('info')

			$('.checkout_info .form .delivery_method .method_info').hide()
			$('.checkout_info .form .delivery_method ' + deliveryInfo).fadeIn(300)
		})
	})


	// Личный кабинет - Данные покупателя
	$('.lk_info .personal .edit_info_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.personal')

		parent.find('.password_form').hide()
		parent.find('.info_form').fadeIn(300)

		parent.find('.info_form .input').prop('disabled', false)
		parent.find('.info_form .submit').css('display', 'flex')
	})

	$('.lk_info .personal .info_form .cancel_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.personal')

		parent.find('.info_form .input').prop('disabled', true)
		parent.find('.info_form .submit').css('display', 'none')
	})


	$('.lk_info .personal .edit_pass_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.personal')

		parent.find('.info_form').hide()
		parent.find('.info_form .input').prop('disabled', true)

		parent.find('.password_form').fadeIn(300)
	})

	$('.lk_info .personal .password_form .cancel_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.personal')

		parent.find('.password_form').hide()
		parent.find('.info_form').fadeIn(300)
	})


	// Товар в избранное
	$('.product .favorite_btn, .product_info .data .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в корзину
	$('.product_info .data .buy_btn').click(function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#cart_success_modal',
			type: 'inline',
			touch: false
		})
	})


	// Спойлер в комментариях
	$('.product_info .faq .items .more_btn').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.items')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.hide').slideUp(200)
		} else {
			$(this).addClass('active')

			$parent.find('.hide').slideDown(300)
		}
	})


	// Отправка форм
	$('body').on('submit', '.action_form form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#action_success_modal',
			type: 'inline',
			touch: false
		})
	})

	$('body').on('submit', '.subscribe form', function (e) {
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src: '#subscribe_success_modal',
			type: 'inline',
			touch: false
		})
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}