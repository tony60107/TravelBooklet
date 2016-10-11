/**
 * Created by Waiting on 2016/10/10.
 */


var PageSlider = Class.extend({

    init: function(){
        var pageList = $('#pageList');

    },

    bindEvent: function(){
        $('#prevPages').on('click', function(){
            if(pageList.offsetLeft < pageList.parentNode.offsetWidth - 162 * pageList.children.length + 400){
                animate(pageList, pageList.parentNode.offsetWidth - 162 * pageList.children.length - 10);
                return;
            }
            animate(pageList, pageList.offsetLeft-400);
        });
        $('#nextPages').on('click', function(){
            if(pageList.offsetLeft >= 0  - 400){
                animate(pageList, 0);
                return;
            }
            animate(pageList, pageList.offsetLeft+400);
        });
    },
});