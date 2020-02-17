let timer1, timer2

/**
 * 复位滚动条
 */
export default function resetScroll() {
    clearInterval(timer1)
    clearInterval(timer2)
    const html = document.documentElement
    timer1 = animate(html.scrollTop, 0, val => {
        html.scrollTop = val
    })
    timer2 = animate(html.scrollLeft, 0, val => {
        html.scrollLeft = val
    })
}

/**
 * 在指定时间内，从初始值变化到结束值
 * @param {*} start 
 * @param {*} end 
 */
function animate(start, end, callback) {
    const tick = 16
    const total = 300
    const startTime = new Date().getTime()
    const times = Math.ceil(total / tick)
    const dis = (end - start) / times
    const timer = setInterval(() => {
        const disTime = new Date().getTime() - startTime
        start += dis
        if (disTime >= total) {
            start = end
            clearInterval(timer)
        }
        callback && callback(start)
    }, tick)
    return timer
}
