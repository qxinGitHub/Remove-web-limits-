// ==UserScript==
// @namespace         https://greasyfork.org/zh-CN/users/106222-qxin-i
 
// @name              网页限制解除(改)
// @name:en           Remove web limits(modified)
// @name:zh           网页限制解除(改)
// @name:ja           ウェブの規制緩和(変更)
 
// @author            Cat73 & iqxin(修改) 
// @contributor       iqxin
 
// @description       通杀大部分网站,可以解除禁止复制、剪切、选择文本、右键菜单的限制。原作者cat73,因为和搜索跳转脚本冲突,遂进行了改动。
// @description:en    Pass to kill most of the site, you can lift the restrictions prohibited to copy, cut, select the text, right-click menu.revised version
// @description:zh    通杀大部分网站,可以解除禁止复制、剪切、选择文本、右键菜单的限制。原作者cat73,因为和搜索跳转脚本冲突,遂进行了改动
// @description:zh-TW 通殺大部分網站,可以解除禁止復制、剪切、選擇文本、右鍵菜單的限制。
// @description:ja    サイトのほとんどを殺すために渡し、あなたは、コピー切り取り、テキスト、右クリックメニューを選択することは禁止の制限を解除することができます。
 
// @description       原作者https://www.github.com/Cat7373/,因为和搜索跳转脚本冲突,遂进行了改动
// @homepageURL       https://cat7373.github.io/remove-web-limits/
// @supportURL        https://greasyfork.org/zh-CN/scripts/28497
 
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABpElEQVR4nO3Vv2uUQRDG8c/ebSMWqay0trATAxrUSi1S2AiWFoJYpNCgoBjURsHWJKeNRfAvsDgFixQqKdPZ2ViEiCJYBOQu8f1hEXO59713j7MUfLZ6d2a/O8vMO0OzDnin9Ku2Mjvuaw07xgSAYEVXe2indMhj92zpKJLnBhF8MDeye9hn6zbN70eRiqCw02Bra3up8BBLu1FEBxsBucXqW4csz0ULe4jorSCMuPU89boRELDMHiI6Y8V65bbCUTccc70RkaOwKLOg0IkyXa9qTjOu2LAs6NZuD86hrdTyxRNTkUqqdhXlHrngGRVEZsMpJwex9DxIZSHYclesIb65LCoHgIs66UJq6btDBZHZrPh8V6YBOX66LbOkTGckBYimBW2FVTNeuOZNyrFJ236Yl4NSy5SbVm1PDvhodqgyMledTdRlAtDzqfL9tfkwUtyaRkv9LwFj9B/w7wPycXOhqlJ0yZHKPChMi5MCiM47XhsopbVJAUHfrYbmN/EToN+02eLPfz9OYyZhFJzW1Jn3lTsxaKQjCkp52jy45r1ZvSbTb9M0d4PBozGZAAAAAElFTkSuQmCC
 
// @version           4.4.6
// @license           LGPLv3
 
// @match             *://*/*
// @exclude        *www.bilibili.com/video*
// @exclude        *www.bilibili.com/v*
// @exclude        *www.bilibili.com/bangumi*
// @exclude        *www.youtube.com/watch*
// @exclude        *www.panda.tv*
 
// @connect     eemm.me
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_addStyle
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @run-at      document-start
// ==/UserScript==
(function() {
    'use strict';
 
    var settingData = {
        "status":1,
        "version" : 0.1,
        "message" : "啦啦啦,啦啦啦,我是卖报的小行家",
        "positionTop":"0",
        "positionLeft":"0",
        "positionRight":"auto",
        "addBtn" : true,
        "connectToTheServer" : false,
        "waitUpload":[],
        "currentURL":"null",
        "shortcut":3,
        // 域名规则列表
        "rules" : {
            "rule_def": {
                "name": "default",
                "hook_eventNames": "contextmenu|select|selectstart|copy|cut|dragstart|mousemove|beforeunload",
                "unhook_eventNames": "mousedown|mouseup|keydown|keyup",
                "dom0": true,
                "hook_addEventListener": true,
                "hook_preventDefault": true,
                "hook_set_returnValue": true,
                "add_css": true
            },
            "rule_plus": {
                "name": "default",
                "hook_eventNames": "contextmenu|select|selectstart|copy|cut|dragstart|mousedown|mouseup|mousemove|beforeunload",
                "unhook_eventNames": "keydown|keyup",
                "dom0": true,
                "hook_addEventListener": true,
                "hook_preventDefault": true,
                "hook_set_returnValue": true,
                "add_css": true
            },
            "rule_zhihu": {
                "name": "default",
                "hook_eventNames": "contextmenu|select|selectstart|copy|cut|dragstart|mousemove",
                "unhook_eventNames": "keydown|keyup",
                "dom0": true,
                "hook_addEventListener": true,
                "hook_preventDefault": true,
                "hook_set_returnValue": true,
                "add_css": true
            }
        },
        "data": [
            "b.faloo.com",
            "bbs.coocaa.com",
            "book.hjsm.tom.com",
            "book.zhulang.com",
            "book.zongheng.com",
            "chokstick.com",
            "chuangshi.qq.com",
            "city.udn.com",
            "cutelisa55.pixnet.net",
            "huayu.baidu.com",
            "imac.hk",
            "life.tw",
            "luxmuscles.com",
            "news.missevan.com",
            "read.qidian.com",
            "www.15yan.com",
            "www.17k.com",
            "www.18183.com",
            "www.360doc.com",
            "www.coco01.net",
            "www.eyu.com",
            "www.hongshu.com",
            "www.hongxiu.com",
            "www.imooc.com",
            "www.jjwxc.net",
            "www.readnovel.com",
            "www.tadu.com",
            "www.xxsy.net",
            "www.z3z4.com",
            "www.zhihu.com",
            "yuedu.163.com",
            "www.ppkao.com",
            "movie.douban.com",
            "www.ruiwen.com",
            "vipreader.qidian.com",
            "www.pigai.org",
            "www.shangc.net",
            "www.myhtlmebook.com",
            "www.yuque.com",
            "www.longmabookcn.com",
            "www.alphapolis.co.jp",
            "www.sdifen.com",
            "votetw.com",
            "boke112.com",
            "www.myhtebooks.com",
            "www.xiegw.cn",
            "chuangshi.qq.com",
            "www.uta-net.com",
            "www.bimiacg.net"
        ]
    }
 
    var rwl_userData = null;
    var hostname = window.location.hostname;
    var btn_node = null;   
    var rule = null;
    var list = null;
    var hasFrame = false;
 
    // 储存名称
    var storageName = "iqxinStorageName";
    // 要处理的 event 列表
    var hook_eventNames, unhook_eventNames, eventNames;
    // 储存被 Hook 的函数
    var EventTarget_addEventListener = EventTarget.prototype.addEventListener;
    var document_addEventListener = document.addEventListener;
    var Event_preventDefault = Event.prototype.preventDefault;
 
    // 查看本地是否存在旧数据
    rwl_userData = GM_getValue("rwl_userData");
    if(!rwl_userData){
        rwl_userData = settingData
        // GM_setValue("rwl_userData",rwl_userData);
    }
    // 自动更新数据
    for(let value in settingData){
        if(!rwl_userData.hasOwnProperty(value)){
            rwl_userData[value] = settingData[value];
            GM_setValue("rwl_userData",rwl_userData);
        }
    }
 
    version_up_3_to_4();
 
    // 获取黑名单网站
    list = get_black_list();
 
    // 添加按钮
    // if(rwl_userData.addBtn){
        addBtn();  // 添加
        btn_node = document.getElementById("black_node");
 
        var timer = setInterval(function(){
            if(document.getElementById("black_node")){
                clearInterval(timer);
                qxinStart();
            } else {
                addBtn();
            }
        },500)
 
    // }
 
    GM_registerMenuCommand("复制限制解除 设置", setMenu)
    var userSetting = GM_getValue("rwl_userData");
 
    // // ------------------------------函数 func
 
    function qxinStart(){
        console.log("脚本: 复制限制解除(改) --- 开始执行 --- 发布者: qxin --- GitHub: https://github.com/qxinGitHub/Remove-web-limits-");
        addDragEven();
        setBtnClick();
 
        // 检查是否在黑名单中
        if(check_black_list(list,hostname)){
            try {
                if(rwl_userData.addBtn){
                    btn_node.checked = true;
                }
            } catch (e) {
                console.error("脚本rwl-错误：\n btn_node : %s\n%s\n脚本rwl-错误位置： btn_node.checked = true;",btn_node,e);
            } finally {
                init();
            }
        }
    }
 
    //添加按钮 func
    function addBtn(){
        var node = document.createElement("remove-web-limits-iqxin");
        node.id = "rwl-iqxin";
        node.className = "rwl-exempt";
 
        // 再次打开窗口小于之前窗口的情况,导致按钮出现在可视窗口之外
        var screenClientHeight = document.documentElement.clientHeight;
        var tempHeight;
        if (rwl_userData.positionTop>screenClientHeight){
            tempHeight  = screenClientHeight -40;
        } else{
            tempHeight = rwl_userData.positionTop;
        }
        // 改变窗口大小的情况
        window.onresize=function(){  
            var screenClientHeight = document.documentElement.clientHeight;
            var tempHeight;
 
            if (rwl_userData.positionTop>screenClientHeight){
                    tempHeight  = screenClientHeight -40;
            } else{
                tempHeight = rwl_userData.positionTop;
            }
 
            node.style.top =  tempHeight + "px";
        }
 
        tempHeight = tempHeight<0?0:tempHeight
        node.style.cssText = "position:fixed;top:"+tempHeight+"px;left:"+rwl_userData.positionLeft+"px;right:"+rwl_userData.positionRight+"px;";
        // node.innerHTML = '<label><input type="checkbox" name="" id="black_node">黑名单</label><qxinbutton id="delete">delete</btton>';
        // node.innerHTML = '<label>限制解除 <input type="checkbox"  name="" id="black_node"></label>';
        node.innerHTML = '<qxinbutton type="qxinbutton" id="rwl-setbtn"> set </qxinbutton> <lalala style="cursor:move; font-size:12px;">限制解除</lalala> <input type="checkbox" name="" id="black_node" >';
        if(window.self === window.top){
            if (document.querySelector("body")){
                document.body.appendChild(node);
            } else {
                document.documentElement.appendChild(node);
            }
        }
        node.addEventListener("mouseover",function(){
            node.classList.add("rwl-active-iqxin");
        });
        node.addEventListener("mouseleave",function(){
            setTimeout(function(){
                node.classList.remove("rwl-active-iqxin");
                black_check(black_node.checked);
            },100)
        });
 
        var style = document.createElement("style");
        style.type="text/css";
 
        var styleInner = "#rwl-iqxin{" +
                "position:fixed;" +
                "transform:translate(-95px,0);" +
                "width:85px;" +
                "height:25px;" +
                "font-size:12px;" +
                "font-weight: 500;" +
                "font-family:Verdana, Arial, '宋体';" +
                "color:#fff;" +
                "background:#333;" +
                "z-index:2147483647;" +
                "margin: 0;" +
                "opacity:0.05;" +
                "transition:0.3s;" +
                "overflow:hidden;" +
                "user-select:none;" +
                "text-align:center;" +
                "white-space:nowrap;" +
                "line-height:25px;" +
                "padding:0 16px;" +
                "border:1px solid #ccc;" +
                "border-width:1px 1px 1px 0;" +
                "border-bottom-right-radius:5px;" +
                "box-sizing: content-box;" +
            "}" +
            "#rwl-iqxin input{" +
                "margin: 0;" +
                "padding: 0;" +
                "vertical-align:middle;" +
                "-webkit-appearance:checkbox;" +
                "-moz-appearance:checkbox;" +
                "position: static;" +
                "clip: auto;" +
                "opacity: 1;" +
                "cursor: pointer;" +
            "}" +
            "#rwl-iqxin.rwl-active-iqxin{" +
                "left: 0px;" +
                "transform:translate(0,0);" +
                "opacity: 0.9;" +
                "height: 32px;" +
                "line-height: 32px" +
            "}" +
            "#rwl-iqxin label{" +
                "margin:0;" +
                "padding:0;" +
                "font-weight:500;" +
            "}" +
            "#rwl-iqxin #rwl-setbtn{" +
                "margin: 0 4px 0 0;" +
                "padding: 0 0 0 4px;" +
                "border: none;" +
                "border-radius: 2px;" +
                "cursor: pointer;" +
                "background: #fff;" +
                "color: #000;" +
            "}" +
            " "
            
        if(!rwl_userData.addBtn){
            var styleTemp = "#rwl-iqxin{display:none}";
            style.innerHTML = styleInner + styleTemp;
        } else {
            style.innerHTML = styleInner;
        }
        if(document.querySelector("#rwl-iqxin")){
            // console.log("通过style插入");
            document.querySelector("#rwl-iqxin").appendChild(style);
        } else {
            // console.log("通过GM插入");
            GM_addStyle(styleInner);
        }
    };
 
    // 给按钮绑定点击事件
    function setBtnClick(){  
        document.querySelector("#rwl-setbtn").addEventListener("click",setMenu);
    }
 
    // 菜单
     function setMenu(){
            var oldEditBox = document.querySelector("#rwl-setMenu");
            if(oldEditBox){
                oldEditBox.parentNode.removeChild(oldEditBox);
                return;
            }
            var userSetting = GM_getValue("rwl_userData");
            var upload_checked = userSetting.connectToTheServer?"checked":"";
            var btnchecked =  userSetting.addBtn?'checked':''
 
            var odom = document.createElement("div");
            odom.id = "rwl-setMenu";
            odom.style.cssText ="position: fixed;" +
                "top: 100px;" +
                "left: 50px;" +
                "padding: 10px;" +
                "background: #fff;" +
                "border-radius: 4px;";
            GM_addStyle("#rwl-setMenuSave," +
                "#rwl-reset," +
                "#rwl-setMenuClose{" +
                    "margin: 0;" +
                    "padding: 0 2px;" +
                    "border: none;" +
                    "border-radius: 2px;" +
                    "cursor: pointer;" +
                    "background: #fff;" +
                    "color: #000;" +
                "}" +
                "#rwl-reset{" +
                    "border: 1px solid #666;" +
                "}" +
                "#rwl-setMenuSave{" +
                    "border: 1px solid green;" +
                "}" +
                "#rwl-setMenuClose{" +
                    "border: 1px solid red;" +
                "}" +
                "#rwl-setMenu{" +
                    "text-align:left;" +
                    "font-size:14px;" +
                    "z-index:999999;" +
                    "border: 1px solid cornflowerblue;" +
                "}" +
                "#rwl-setMenu p{" +
                    "margin:5px auto;" +
                "}" +
                " ")
            var innerH = "" +
                "<p>距离顶部距离（单位 像素） <input id='positiontop' type='text' value=" + userSetting.positionTop + "></p>" + "" +
                // "<laberl> <p>允许上传黑名单<input id='uploadchecked'  type='checkbox' " + upload_checked + "></p>" + "</laberl>" +
                "<p id='rwl-shortcuts' title='快捷键'>快捷键：" +
                    "<select id='rwl-shortcut'>" +
                        "<option value='off'" + (userSetting.shortcut == 0?"selected":"")  + ">关闭</option>" +
                        "<option value='f1'" + (userSetting.shortcut == 1?"selected":"")  + "> F1 </option>" +
                        "<option value='ctrlf1'" + (userSetting.shortcut == 2?"selected":"")  + ">ctrl + F1</option>" +
                        "<option value='ctrlc'" + (userSetting.shortcut == 3?"selected":"")  + ">ctrl + C</option>" +
                    "</select>" +
                "</p> " +
                "<laberl> <p>显示按钮<input id='btnchecked'  type='checkbox' " + btnchecked + "> 点击脚本管理扩展可以再次打开设置</p>" + "</laberl>" +
                "<p>问题反馈地址: <a target='_blank' href='https://github.com/qxinGitHub/Remove-web-limits-'>GitHub(qxin)</a>, <a target='_blank' href='https://greasyfork.org/zh-CN/scripts/28497-remove-web-limits-modified'>GreasyFork(qxin)</a>  </P>" +
                "<p>项目原作者为 <a target='_blank' href='https://cat7373.github.io/remove-web-limits/'>cat7373</a>, <a target='_blank' href='https://github.com/Cat7373/remove-web-limits'>项目主页</a> </P>" +
                "<p>能力有限,不能每个网站都能完美</P>" +
                "<p>如若反馈,务必带上详细网址</P>" +
                "<p>  </P>" +
                // "<p><s>显示按钮（待添加）</s></p>" +
                // "<p><s>按钮透明度（待添加）</s></p>" +
                // "<p><s>快速复制（待添加）</s></p>" +
                // "<p><s>其他 (待添加）</s></p>" +
                "<p>数据存储方式为JSON,如若在此修改,注意引号逗号</P>" +
                "<textarea wrap='off' cols='45' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify(userSetting.data,false,4) + "</textarea>" + 
                "<br>" +
                "<qxinbutton id='rwl-reset'>清空设置</qxinbutton> &nbsp;&nbsp;&nbsp;" +
                "<qxinbutton id='rwl-setMenuSave'>保存</qxinbutton> &nbsp;&nbsp;&nbsp;" +
                "<qxinbutton id='rwl-setMenuClose' onclick='this.parentNode.parentNode.removeChild(this.parentNode);' title='如果无法关闭 请刷新界面' >关闭</qxinbutton> &nbsp;&nbsp;&nbsp;" +
                "<span style='font-size:0.7em;'>--| qxin v4.4.6 2021-06-09 |--</span>" +
                ""
            "";
            odom.innerHTML = innerH;
            document.body.appendChild(odom);
 
            document.querySelector("#rwl-setMenuSave").addEventListener("click",saveSetting);
            document.querySelector("#rwl-setMenuClose").addEventListener("click",closeMenu);
            document.querySelector("#rwl-reset").addEventListener("click",rwlReset);
 
        }
 
    // 保存选项
    function saveSetting(){
        var positionTop = document.querySelector("#rwl-setMenu #positiontop").value;
        // var uploadChecked = document.querySelector("#rwl-setMenu #uploadchecked").checked;
        var shortcut = document.querySelector("#rwl-setMenu #rwl-shortcut").selectedIndex;
        var addBtnChecked = document.querySelector("#rwl-setMenu #btnchecked").checked;
        var codevalue = document.querySelector("#rwl-setMenu textarea").value;
        if(codevalue){
            var userSetting = GM_getValue("rwl_userData");
 
            userSetting.addBtn = addBtnChecked;
            userSetting.data = JSON.parse(codevalue);
            userSetting.positionTop = parseInt(positionTop);
            userSetting.shortcut = parseInt(shortcut);
            // userSetting.connectToTheServer = uploadChecked;
 
            GM_setValue("rwl_userData",userSetting);
            // 刷新页面
            setTimeout(function(){
                window.location.reload();
            },300);
        } else {
            alert("输入为空");
            // this.reset();
        }
        closeMenu();
    }
    // 复原菜单
    function rwlReset(){
        GM_deleteValue("rwl_userData");
        window.location.reload();
    }
 
    //关闭菜单
    function closeMenu(){
        var oldEditBox = document.querySelector("#rwl-setMenu");
        if(oldEditBox){
            oldEditBox.parentNode.removeChild(oldEditBox);
            return;
        }
    }
 
    // 增加拖拽事件 进行绑定
    function addDragEven(){
        setTimeout(function(){
            try {
                dragBtn()
            } catch (e) {
                console.error("dragBtn函数 报错");
            }
        },1000)
        // dragBtn();  // 增加拖动事件
    }
 
    // 增加拖动事件 func
    function dragBtn(){
        var rwl_node = document.querySelector("#rwl-iqxin");
        rwl_node.addEventListener("mousedown",function(event){
            rwl_node.style.transition = "null";
            var disX = event.clientX - rwl_node.offsetLeft;
            var disY = event.clientY - rwl_node.offsetTop;
 
            var move = function(event){
                rwl_node.style.left = event.clientX - disX + "px" ;
                rwl_node.style.top  = event.clientY - disY + "px" ;
            }
 
            document.addEventListener("mousemove",move);
            document.addEventListener("mouseup",function(){
                rwl_node.style.transition = "0.3s";
                document.removeEventListener("mousemove",move);
                // 此函数内所有的注释语句都是有用的
                    // 开启后,可拖动到屏幕右侧,但尚未添加css
                    // 在上面添加 rwl-active-iqxin 的地方加上判断左右,在加上相应的css即可
                    // 懒 2018-04-18 21:51:32
                // var bodyWidth = document.body.clientWidth;
                var rwl_nodeWidth = rwl_node.offsetLeft + rwl_node.offsetWidth/2;
                // if(rwl_nodeWidth > bodyWidth/2){
                //     rwl_node.style.left = "auto";
                //     rwl_node.style.right = 0;
                //     rwl_userData.positionLeft = "auto";
                //     rwl_userData.positionRight = "0";
                // } else {
                    rwl_node.style.right = rwl_userData.positionRight = "auto";
                    rwl_node.style.left = rwl_userData.positionLeft =  0;
                // }
                rwl_userData.positionTop = rwl_node.offsetTop;
                GM_setValue("rwl_userData",rwl_userData);
 
            })
        })
    }
 
    // 初始化 init func  这里才是核心
    function init() {
        // 针对个别网站采取不同的策略
        rule = clear();
        // 设置 event 列表
        hook_eventNames = rule.hook_eventNames.split("|");
        // TODO Allowed to return value
        unhook_eventNames = rule.unhook_eventNames.split("|");
        eventNames = hook_eventNames.concat(unhook_eventNames);
 
        // 调用清理 DOM0 event 方法的循环
        if(rule.dom0) {
            setInterval(clearLoop, 10 * 1000);
            setTimeout(clearLoop, 1500);
            window.addEventListener('load', clearLoop, true);
            clearLoop();
        }
 
        // hook addEventListener //导致搜索跳转失效的原因
        if(rule.hook_addEventListener) {
            EventTarget.prototype.addEventListener = addEventListener;
            document.addEventListener = addEventListener;
 
            if(hasFrame){
                for(let i = 0;i<hasFrame.length;i++){
                    hasFrame[i].contentWindow.document.addEventListener = addEventListener;
                }
            }
 
        }
 
        // hook preventDefault
        if(rule.hook_preventDefault) {
            Event.prototype.preventDefault = function() {
                if(hook_eventNames.indexOf(this.type) < 0) {
                    Event_preventDefault.apply(this, arguments);
                }
            };
 
            if(hasFrame){
                for(let i = 0;i<hasFrame.length;i++){
                    hasFrame[i].contentWindow.Event.prototype.preventDefault = function() {
                        if(hook_eventNames.indexOf(this.type) < 0) {
                            Event_preventDefault.apply(this, arguments);
                        }
                    };
                }
            }
        }
 
        // Hook set returnValue
        if(rule.hook_set_returnValue) {
            Event.prototype.__defineSetter__('returnValue', function() {
                if(this.returnValue !== true && hook_eventNames.indexOf(this.type) >= 0) {
                    this.returnValue = true;
                }
            });
        }
 
        // 添加CSS     // console.debug('url: ' + url, 'storageName：' + storageName, 'rule: ' + rule.name);
        if(rule.add_css) {
            GM_addStyle('html, :not([class*="rwl-exempt"]) {-webkit-user-select:text!important; -moz-user-select:text!important;} :not([class*="rwl-exempt"]) ::selection {color:#fff; background:#3390FF!important;}');
        } //else {
            //GM_addStyle('html, :not([class*="rwl-exempt"]) {-webkit-user-select:text!important; -moz-user-select:text!important;}');
        //}
    }
 
    // Hook addEventListener proc
    function addEventListener(type, func, useCapture) {
        var _addEventListener = this === document ? document_addEventListener : EventTarget_addEventListener;
        if(hook_eventNames.indexOf(type) >= 0) {
            _addEventListener.apply(this, [type, returnTrue, useCapture]);
        } else if(unhook_eventNames.indexOf(type) >= 0) {
            var funcsName = storageName + type + (useCapture ? 't' : 'f');
 
            if(this[funcsName] === undefined) {
                this[funcsName] = [];
                _addEventListener.apply(this, [type, useCapture ? unhook_t : unhook_f, useCapture]);
            }
 
            this[funcsName].push(func);
        } else {
            _addEventListener.apply(this, arguments);
        }
    }
 
    // 清理循环
    function clearLoop() {
        rule = clear() // 对于动态生成的节点,随时检测
        var elements = getElements();
 
        for(var i in elements) {
          for(var j in eventNames) {
            var name = 'on' + eventNames[j];
 
            // ;?未解决
                // 2018-04-02 elements中会有字符串出现,原版不会,问题不明,根本原因尚未解决
                // 相关反馈  https://greasyfork.org/zh-CN/forum/discussion/36014
                // 问题版本号  v3.0.7
                // 问题补充   之前可以使用,具体版本未测（2018-04-02 21:27:53）,原版可以使用
            if(Object.prototype.toString.call(elements[i])=="[object String]"){
                continue;
            }
 
            // console.log(elements[i])
            // if(typeof elements[i][name] === "object"){
            //     console.log(typeof elements[i][name])
            // }
            if(elements[i][name] !== null && elements[i][name] !== onxxx) {
                if(unhook_eventNames.indexOf(eventNames[j]) >= 0) {
                    elements[i][storageName + name] = elements[i][name];
                    elements[i][name] = onxxx;
              } else {
                    elements[i][name] = null;
              }
            }
          }
        }
        
        document.onmousedown = function(){return true;};
    }
 
    // 返回true的函数
    function returnTrue(e) {
        return true;
    }
    function unhook_t(e) {
        return unhook(e, this, storageName + e.type + 't');
    }
    function unhook_f(e) {
        return unhook(e, this, storageName + e.type + 'f');
    }
    function unhook(e, self, funcsName) {
        var list = self[funcsName];
        for(var i in list) {
            list[i](e);
        }
 
        e.returnValue = true;
        return true;
    }
    function onxxx(e) {
        var name = storageName + 'on' + e.type;
        this[name](e);
 
        e.returnValue = true;
        return true;
    }
 
    // 获取所有元素 包括document
    function getElements() {
        var elements = Array.prototype.slice.call(document.getElementsByTagName('*'));
        elements.push(document);
 
        // 循环所有 frame 窗口
        var frames = document.querySelectorAll("frame")
        if(frames){
            hasFrame = frames;
            var frames_element;
            for (let i = 0;i<frames.length;i++){
                frames_element = Array.prototype.slice.call(frames[i].contentWindow.document.querySelectorAll("*"))
                elements.push(frames[i].contentWindow.document)
                elements = elements.concat(frames_element);
            }
        }
        return elements;
    };
 
    // 获取黑名单网站 Func
    function get_black_list(){
        // 之前版本可能导致存储空的字符串
            // 2018-06-11 15:11:44 保留,当容错处理
        var data_temp = rwl_userData.data;
        data_temp = data_temp.filter(function(item){
                return item.length>1;
            })
        return data_temp;
    }
    
    // 检查是否存在于黑名单中 返回位置 func
    function check_black_list(list,host){
        for(let i=0;i<list.length;i++){
            if(~hostname.indexOf(list[i])){
                return i+1;  //万一匹配到第一个,返回0
            }
        }
        return false;
    }
 
    // 鼠标点击后按钮后 检查是否在黑名单
    function black_check(bool){
        var list = GM_getValue("rwl_userData").data
        var check = check_black_list(list,hostname);
 
        if (bool && !check) {
            list = list.concat(hostname);
            // console.log("选中 不在黑名单, 增加",hostname,list);
            rwl_userData.waitUpload.push(hostname); //准备上传
            rwl_userData.currentURL = window.location.href;
            // console.log("after: ",rwl_userData.waitUpload)
 
            saveData(list);
            init();
 
        }else if(!bool && check){
            list.splice(check-1,1);
            saveData(list);
            // 刷新页面
            setTimeout(function(){
                window.location.reload(true);
                console.log("刷新页面loading");
            },350);
        }else{
            return false;
        }
    }
 
    // 保存本地数据,并将数据上传至服务器
    function saveData(lists){
        lists = lists.filter(function(item){
            return item.length>1;
        })
 
        // 更新数据
        rwl_userData.data = lists.sort();
 
        // 将本地黑名单上传
        // if (rwl_userData.waitUpload.length > 0 && rwl_userData.connectToTheServer){
        //     // console.log("rwl : 上传...",rwl_userData.waitUpload);
        //     // console.log("rwl : 开始上传-----");
        //     GM_xmlhttpRequest({
        //       method: "POST",
        //       // url: "http://127.0.0.1:8000/tool/testajax/",
        //       url: "http://eemm.me/tool/rwl_upload/",
        //       data: JSON.stringify(rwl_userData),
        //       headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //       },
        //       onload: function(response) {
        //         // console.log("rwl : 上传成功----");
        //       }
        //     });
        //     rwl_userData.waitUpload = [];
        // }
 
        GM_setValue("rwl_userData",rwl_userData);
        return rwl_userData;
    }
 
    // 数组去重
    function unique(arr) {
      var ret = []
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        if (ret.indexOf(item) === -1) {
          ret.push(item)
        }
      }
      return ret;
    }
 
    // 复制到剪贴板
    function setClipboard(){
        var text_obj = window.getSelection();
        var text = text_obj.toString();
        GM_setClipboard(text);
 
    }
 
    // 快捷键 F1（ctrl+f1） 复制 
    function hotkey() {
        var a = window.event.keyCode;
        // if ((a == 112) && (event.ctrlKey)) {
        if (a == 112 && userSetting.shortcut == 1) {
            event.preventDefault();
            setClipboard();
            event.keyCode=0;
            event.returnValue=false;
            return false; 
        } else if (a == 112 && (event.ctrlKey) && userSetting.shortcut == 2){
            setClipboard();
        } else if((a == 67) && (event.ctrlKey) && userSetting.shortcut == 3){
            setClipboard();
        }else {
            console.log("关闭了快捷键");
        }
    } 
    document.onkeydown = hotkey; //当onkeydown 事件发生时调用hotkey函数  
 
    // 部分网站采用了其他的防复制手段
    function clear(){
        // console.log("进入clear",hostname,rwl_userData.rules);
        switch (hostname){
            case "chuangshi.qq.com": clear_chuangshi();break;
            case "votetw.com": clear_votetw();break;
            case "www.myhtebooks.com": clear_covers(".fullimg");break;
            case "www.z3z4.com": clear_covers(".moviedownaddiv"); break;
            case "huayu.baidu.com": clear_covers("#jqContextMenu"); break;
            case "www.myhtlmebook.com": clear_covers("img.fullimg"); break;
            case "zhihu.com":
            case "www.zhihu.com": return rwl_userData.rules.rule_zhihu; break;
            case "t.bilibili.com": clear_link_bilibili(); break;
            case "www.uslsoftware.com": clear_covers(".protect_contents-overlay");clear_covers(".protect_alert"); return rwl_userData.rules.rule_plus; break;
            case "www.longmabookcn.com": clear_covers(".fullimg"); return rwl_userData.rules.rule_plus; break;
            case "boke112.com": return rwl_userData.rules.rule_plus; break;
            case "www.shangc.net": return rwl_userData.rules.rule_plus; break;
        }
        return rwl_userData.rules.rule_def;
    }
    // 去除覆盖层
    function clear_covers(ele){
        var odiv = document.querySelector(ele);
        if(odiv){
            odiv.parentNode.removeChild(odiv);
        }
    }
    // b站将文字嵌套在链接中
    function clear_link_bilibili(){
        var odiv = document.querySelector(".description");
        if(odiv){
            var tDiv = odiv.querySelector(".content-ellipsis");
            var aDiv = odiv.querySelector("a");
             odiv.appendChild(tDiv);
        }
    }
    // https://votetw.com/wiki/%E6%9E%97%E6%99%BA%E5%A0%85
    // 会创建多个无id,无class的div,覆盖在文字上层
    function clear_votetw(){
        var odivs = document.querySelectorAll(".mw-parser-output>div")
        odivs.forEach(function(value){
            value.setAttribute("style","");
        })
    }
 
    // 创世中文网
    function clear_chuangshi(){
        console.log("创世中文网 开始执行");

        // JS 汉字与Unicode码的相互转化
            // https://www.cnblogs.com/wwlhome/p/5650744.html
        function tounicode(data)
        {
            if(data == '') return '请输入汉字';
            var str =''; 
            for(var i=0;i<data.length;i++)
            {
                str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
            }
            return str;
        }
        function tohanzi(data)
        {
            if(data == '') return '请输入十六进制unicode';
            data = data.split("\\u");
            var str ='';
            for(var i=0;i<data.length;i++)
            {
                str+=String.fromCharCode(parseInt(data[i],16).toString(10));
            }
            return str;
        }
        // javascript中的replace函数同时替换多个字符串
            // https://bbs.csdn.net/topics/320097246
        Array.prototype.each = function(trans) {
                for (var i=0; i<this.length; i++)
                    this[i] = trans(this[i], i, this);
                return this;
            };
        Array.prototype.map = function(trans) {
            return [].concat(this).each(trans);
        };
        RegExp.escape = function(str) {
            return new String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        };
        function properties(obj) {
            var props = [];
            for (var p in obj) props.push(p);
            return props;
        }
        // ---------------------------------------------
        var bookreadercontent = document.querySelector(".bookreadercontent");
        if(bookreadercontent){
            var str = bookreadercontent.innerText;
            var strUnicode = tounicode(str);
            var replacements = {"e2af":"4e09","e2af":"4e0b","e2c9":"4e3b","e2d6":"4e48","e2b2":"4e4b","e2a6":"4e5f","e294":"4e8b","e2e9":"4e8c","e30a":"4e8e","e292":"4e94","e298":"4e9b","e2a2":"4ee3","e2f0":"4f46","e30e":"4f4d","e305":"4f53","e296":"4f5c","e2d3":"4f60","e2db":"4f7f","e29b":"516c","e2b0":"5176","e2ed":"51fa","e2eb":"5206","e2f1":"5229","e307":"5230","e2ce":"5236","e2e6":"524d","e2ea":"529b","e2a8":"52a0","e2a5":"5316","e2bd":"5341","e302":"539f","e2df":"53bb","e2c7":"53c8","e303":"53cd","e2ac":"53d1","e2f8":"53ea","e30b":"5404","e29c":"5408","e2d7":"540c","e2d8":"540e","e306":"5411","e2c5":"547d","e2b4":"56db","e2f9":"56e0","e2ca":"5730","e2ef":"5916","e2bc":"591a","e301":"5929","e29a":"597d","e2b7":"5b50","e2cc":"5b83","e2ee":"5b9a","e2ff":"5bb6","e2e8":"5c0f","e2d4":"5c31","e2d5":"5c55","e2a1":"5de5","e2a0":"5e73","e2fe":"5e74","e2c4":"5e76","e2c8":"5ea6","e2ae":"5efa","e304":"5f62","e291":"5f88","e2e2":"5f97","e2f2":"5fc3","e295":"6027","e2d9":"60c5","e2be":"60f3","e2c3":"610f","e30d":"6210","e2ba":"6216","e2fa":"6240","e29e":"628a","e2a7":"63d0","e2d2":"653f","e2ad":"6599","e2cd":"65b0","e2f3":"65b9"};
            var regex = new RegExp(properties(replacements).map(RegExp.escape).join("|"), "g");
            strUnicode = strUnicode.replace(regex, function($0) { return replacements[$0]; });
            
            // console.log(strUnicode)
            strUnicode = strUnicode.replace("u0","");
            str = tohanzi(strUnicode);
    
            bookreadercontent.innerText = str;
        }


    }
 
    // 3.x.x 过渡 4.x.x 版本
    function version_up_3_to_4(){
        var old_version = GM_getValue("black_list");
        if(!old_version){return};
        rwl_userData.data = unique(rwl_userData.data.concat(old_version.data));
        GM_setValue("rwl_userData",rwl_userData);
 
        GM_deleteValue("black_list");
        GM_deleteValue("rwl_userdata");
    }
})(); 