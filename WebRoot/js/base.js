/**
 * Created by Waiting on 2016/10/11.
 */

function animate(obj,target){
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
    },10)
}