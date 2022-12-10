import dateFormat from './dateFormat.js'
import { infoList, aniList, dateList } from './info_list.js'

const load = () => {
	Vue.config.productionTip = false
	new Vue({
		el: '#app',
		data() {
			const checkText = (rule, value, callback) => {
				if (!value) {
					callback(new Error('评论不能为空'))
				} else {
					callback()
				}
			}
			return {
				userName: '张三',
				activeIndex: '2',
				currentDate: new Date(),
				infoList: infoList,
				aniList: aniList,
				dialogFormVisible: false,
				textForm: {
					text: '',
				},
				rules: [
					{
						required: true,
						message: '您不能发表空评论',
						validator: checkText,
					},
				],
				dateList: dateList,
			}
		},
		computed: {
			curDate() {
				return dateFormat(this.currentDate)
			},
		},
		methods: {
			// 退出登录方法
			exit() {

				window.open('./login.html', '_self')
			},
			goDetail() {
				window.open('./detail.html', '_self')
			},
			// 开启对话框
			showDialog() {
				this.dialogFormVisible = true
			},
			// 关闭对话框
			async submitForm() {
				if (this.textForm.text) {
					this.$message.success('提交评论成功')
					this.$refs.myForm.resetFields()
					this.textForm.text = ''
					this.dialogFormVisible = false
				} else {
					this.$message.error('提交评论失败')
				}
			},
		},
	})

	// 操作第三个dom
	// 每次经过‘在售品种字体都会变大’
	var i = 18.72
	const categoryDog = document.querySelector('#categoryDog')
	categoryDog.onmouseenter = function () {
		this.style.color = 'skyblue'
		this.style.fontSize = `${++i}px`
	}
}

// 操作bom 第三个
window.addEventListener('load', load)
