// 向外暴露一个表单验证函数 用于验证手机号合法性
export function validMobile(str) {
	return /^1[3-9]\d{9}$/.test(str)
}
