(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),c=n.n(l),o=(n(16),n(7)),r=n(2),u=n(3),s=n(5),h=n(4),d=n(6),b=n(1),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleClickDelete=function(){var e=n.props;(0,e.deleteItem)(e.index)},n.handleClickDelete=n.handleClickDelete.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.content;return i.a.createElement("div",{onClick:this.handleClickDelete},e)}}]),t}(a.Component),p=(n(17),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.value;n.setState(function(){return{inputValue:t}})},n.handleButtonClick=function(){n.setState(function(e){return{list:[].concat(Object(o.a)(e.list),[e.inputValue]),inputValue:""}})},n.handleItemDelete=function(e){n.setState(function(t){var n=Object(o.a)(t.list);return n.splice(e,1),{list:n}})},n.state={inputValue:"",list:[]},n.handleButtonClick=n.handleButtonClick.bind(Object(b.a)(Object(b.a)(n))),n.handleItemDelete=n.handleItemDelete.bind(Object(b.a)(Object(b.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"getTodoItem",value:function(){var e=this;return this.state.list.map(function(t,n){return i.a.createElement("div",{key:n},i.a.createElement(m,{key:n,content:t,index:n,deleteItem:e.handleItemDelete}))})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"insertArea"},"\u8f93\u5165\u5185\u5bb9"),i.a.createElement("input",{id:"insertArea",className:"input",value:this.state.inputValue,onChange:this.handleInputChange}),i.a.createElement("button",{onClick:this.handleButtonClick},"\u63d0\u4ea4"),i.a.createElement("ul",null,this.getTodoItem()))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.0d3acd39.chunk.js.map