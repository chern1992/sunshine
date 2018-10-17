//监听滚动
export function addListenerScroll(id, config, refs) {
    window.addEventListener('scroll',scrollEventDo.bind(this, id, config, refs), false);
}

//取消监听滚动
export function removeListenerScroll(id, config, refs) {
    window.removeEventListener('scroll',scrollEventDo.bind(this, id, config, refs), false);
}

//执行滚动事件
export function scrollEventDo(id, config, refs) {
    
}








