/* ドキュメントフォルダのnode_modulesから読み込み */
var Meuront = require("meuront");

var clickFunc = (event) => {
    alert(event.target.value);
}

var keyUpFunc = (event) => {
    alert(event.target.value);
}

var App = new Meuront({
    mountId: "app", /* ルートノードのID */
    elements: {
        tag: "div", attributes: {}, children: [
            {tag: "input", attributes: {type: "text", onKeyUp: (e) => keyUpFunc(e)}, children: []},
            {tag: "input", attributes: {type: "button", value: "押せ!", onClick: (e) => clickFunc(e)}, children: []},
            {tag: "span", attributes: {class: "message"}, children: [
               "hello"
            ]}
        ]
    },
}); 

