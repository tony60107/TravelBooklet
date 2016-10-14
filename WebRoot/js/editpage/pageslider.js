/**
 * Created by Waiting on 2016/10/10.
 */

/*小冊編輯頁面底部的頁面縮圖區*/

var PageSlider = Class.extend({

    init: function(){
        var pageList = $('#pageList');
    },

    bindEvent: function(){
        //往前翻
        $('#prevPages').on('click', function(){
            //當到達最前面停止
            if(pageList.offsetLeft >= 0  - 400){
                animate(pageList, 0);
                return;
            }
            animate(pageList, pageList.offsetLeft+400);
        });
        //往後翻
        $('#nextPages').on('click', function(){
            //當到達最底部停止
            if(pageList.offsetLeft < pageList.parentNode.offsetWidth - 162 * pageList.children.length + 400){
                animate(pageList, pageList.parentNode.offsetWidth - 162 * pageList.children.length - 10);
                return;
            }
            animate(pageList, pageList.offsetLeft-400);
        });
    },
});

var pageSlider = new PageSlider();