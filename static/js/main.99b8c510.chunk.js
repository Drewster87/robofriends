(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var i=n(3),l=n(4),s=n(6),h=n(5),u=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 mw-100"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(a,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=(n(14),n(15),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)}),b=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={searchfield:"",robots:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(d,{onSearchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.99b8c510.chunk.js.map