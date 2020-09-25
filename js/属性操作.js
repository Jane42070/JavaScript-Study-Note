window.onload = function () {
	var oDiv = document.getElementById('div1')

	var sMystyle = 'fontSize'
	var sValue = '30px'

	// oDiv.style.color=sValue
	// oDiv.style.sMystyle = sValue

	// 属性用变量来代替的话需要用 [] 来操作
	oDiv.style[sMystyle] = sValue
}
