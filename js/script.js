
// 时间函数 没1秒执行一次
var myVar=setInterval(function(){myTimer()},1000);

function myTimer() {
    // 获取当前标准时间
    var d=new Date();
    // 只保留时分秒部分并转化为字符
    var t=d.toLocaleTimeString();
    // 获取demo元素并把t赋值给demo内容
    document.getElementById('demo').innerHTML=t;
}

// 获取所有css选择器元素
const panels = document.querySelectorAll('.panel')
// 循环
panels.forEach(panel => {
    // 添加点击事件
    panel.addEventListener('click',() => {
        // 调用删除class名函数
        removeActiveClasses()
        // 给点击的元素添加class名
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    // 循环
    panels.forEach(panel => {
        // 删除括号内的class名
        panel.classList.remove('active')
    })
}