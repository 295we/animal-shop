import { swiperImg, endInfo } from './info_list.js'

Vue.config.productionTip = false
new Vue({
	el: '#app',
	data() {
		return {
			userName: '张三',
			activeIndex: '3',
			swiperImg: swiperImg,
			endInfo: endInfo,
		}
	},
	methods: {
		// 退出登录方法
		exit() {
			window.open('./login.html', '_self')
		},
		goDetail() {
			window.open('./detail.html', '_self')
		},
		goIndex() {
			window.open('./index.html', '_self')
		},
	},
})

var swiper = new Swiper('.mySwiper', {
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: true,
})

// 操作一个dom元素
const domA = document.getElementById('eleA')
function changeContent(event) {
	event.preventDefault()
	const str = this.innerText
	this.innerText = str.slice(0, 4) + 'your telNumber'
}
domA.addEventListener('click', changeContent)

// 操作第二个dom元素
const brand = document.querySelector('#brand')

brand.onclick = function () {
	this.style.color = 'red'
	this.style.borderColor = 'red'
}
