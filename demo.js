/**
 * ********************************************
 * 倒计时计算函数
 * timeStr 时间
 * doc 显示时间的元素
 */
var timeDJS = function (timeStr, doc) {

	timeStr = timeStr || new Date() // 当没有时间传入时显示当前时间 ^-^
	
	// 时间戳处理
	timeStr = timeStr.toString()
	timeStr = timeStr.length == 10 ? parseInt(timeStr + '000') : (timeStr.length == 13 ? parseInt(timeStr) : timeStr)

	var timeGMT = new Date(timeStr) // GMT时间格式

	if (timeGMT == 'Invalid Date') { // 去掉异常
		console.log('无效的时间')
		doc.innerText = '无效的时间'
		return false
	}

	var timeStamp = timeGMT.valueOf() // 获取时间戳

	var timeInterval = setInterval( function () {
		// 循环显示时间
		
		// 时间显示
		var newStamp = Math.abs(timeStamp - new Date().valueOf()) // 时间

		var H = parseInt(newStamp / (1000 * 60 * 60)) // 小时
		var M = parseInt((newStamp - H * 1000 * 60 * 60) / (1000 * 60)) // 分钟
		var S = parseInt((newStamp - H * 1000 * 60 * 60 - M * 1000 * 60) / (1000)) // 秒

		// 显示时间
		var docStr = H + '时' + M + '分' + S + '秒'
		doc.innerText = docStr

		if (new Date().valueOf() >= timeStamp ) { // 结束循环
			console.log('时间已到')
			doc.innerText = '0时0分0秒'
			clearInterval(timeInterval)
			return false
		}


	}, 500)

	return true
}


var timeStr = '1547995644' // 时间 :1547975644  :2019/1/20 14:00:00
var doc = document.getElementById('timeDOC') // 给一个div定义一个id, 名称为timeDOC

// 执行时间
timeDJS(timeStr, doc)