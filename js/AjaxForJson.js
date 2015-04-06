var AjaxForJson = function(){}
AjaxForJson.prototype = {
    // XMLHttpRequestオブジェクト生成
    createHttpRequest : function(){
        var xmlhttp;
        try{
            xmlhttp = new XMLHttpRequest();
        } catch (e) {
            try{
                xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return xmlhttp;
    },

    // ファイルにアクセスし受信内容を確認します
    sendRequest : function(method, url, data, callback){
        // XMLHttpRequestオブジェクト生成
        var xmlhttp = this.createHttpRequest();
    
        // 受信時に起動するイベント
        xmlhttp.onreadystatechange = function() { 
            // readyState値は4で受信完了
            if (xmlhttp.readyState == 4) { 
                //コールバック
                var json = eval('('+xmlhttp.responseText+')');
                callback(json);
            }
        }
        // open メソッド
        xmlhttp.open(method, url, false);
        // HTTPリクエストヘッダを設定
        //xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // send メソッド
        xmlhttp.send(data);
    }
}