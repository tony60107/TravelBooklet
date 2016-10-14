/**
 * Created by Waiting on 2016/10/11.
 */

/*小冊編輯頁面的素材庫*/
var stage, layer;
var MaterLib = Class.extend({
    init: function(){
        //新增文字方塊
        var addTextBox = $('#addTextBox');
        //插入圖片
        var addImg = $('#addImg');
        //插入色塊
        var addColorBlock = $('#addColorBlock');
        //插入線條
        var addLine = $('#addLine');
        //插入圖示
        var addIcon = $('#addIcon');
        //插入副標題
        var addSubTitle = $('#addSubTitle');
        //插入大標題
        var addTitle = $('#addTitle');
        //插入自訂素材
        var addCusMater = $('#addCusMater');
        //新增素材
        var addMater = $('#addMater');

        //拖曳時顯示的圖片
        var dragImg = $('#dragImg');


        stage = new Konva.Stage({
            container: 'canvasOne',
            width: 508,
            height: 660
        });

        layer = new Konva.Layer();

    },
    bindEvent: function(){
        document.getElementById("addTextBox").onmousedown = function(){
            drag(addText);
        }

    }
});

/*素材庫點擊拖曳*/
function drag(fn, event){
    var event = event || window.event;
    dragImg.style.left = scroll().left + event.clientX - dragImg.width / 2 + "px";
    dragImg.style.top = scroll().top + event.clientY - dragImg.width / 2 + "px";
    dragImg.style.display = "block";
    document.onmousemove = function(event){
        var event = event || window.event;
        dragImg.style.left = scroll().left + event.clientX - dragImg.width / 2 + "px";
        dragImg.style.top = scroll().top + event.clientY - dragImg.width / 2 + "px";
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }

    document.onmouseup = function(){
        document.onmousemove = null;
        dragImg.style.display = "none"
        if(fn){fn();}
        document.onmouseup = null;
    }
}

/*添加文字方塊*/
function addText(event){
    var event = event || window.event;
    var x = event.clientX - getElementLeft($$('canvasOne')) + scroll().left;
    var y = event.clientY - getElementTop($$('canvasOne')) + scroll().top;
    var addTextInput = $$('addTextInput');
    console.dir(event);
    addTextInput.style.display = "block";
    addTextInput.style.left = scroll().left + event.clientX - addTextInput.offsetWidth/2 + "px";
    addTextInput.style.top = scroll().top + event.clientY - addTextInput.offsetHeight/2 + "px";

    var complexText = new Konva.Text({
        x: x,
        y: y,
        text: '你好哇!!!',
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        align: 'left'
    });
    layer.add(complexText);
    stage.add(layer);
}

var materLib = new MaterLib();