/**
 * Created by Waiting on 2016/10/10.
 */

$(document).ready(function(){
    pageSlider.bindEvent();
    materLib.bindEvent();
    //禁止拖曳
    document.ondragstart = function(){return false};
});

