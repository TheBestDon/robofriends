(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),i=n(12),s=n(7),l=n(19),u=n(20),h=(n(30),n(9)),d={searchField:""},b={isLoading:!1,robots:[],error:""},f=n(1),p=n(2),m=n(4),g=n(3),E=n(5),v=function(e){e.id;var t=e.name,n=e.username,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("h3",null,n),o.a.createElement("p",null,r)))},O=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e){var t=e.id,n=e.name,r=e.username,a=e.email;return o.a.createElement(v,{key:t,id:t,name:n,username:r,email:a})}))},w=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={count:0},n.updateCount=function(){n.setState(function(e,t){return{count:e.count+1}})},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.PureComponent),y=function(e){function t(){var e,n;Object(f.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"OOOOps. This not good"):this.props.children}}]),t}(r.Component),j=function(e){function t(){return Object(f.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",{className:"f1"},"Robofriends")}}]),t}(r.Component),R=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},t)},S=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",placeholder:"Search robots",name:"search",id:"search_box",className:"pa3 ba b--green bg-lightest-blue",onChange:t,"aria-label":"search box"}))},C=(n(31),n(32),function(e){function t(){return Object(f.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isLoading,c=(e.error,r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return a?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"tc"},o.a.createElement(j,null),o.a.createElement(w,{color:"red"}),o.a.createElement(S,{searchChange:n}),o.a.createElement(R,null,o.a.createElement(y,null,o.a.createElement(O,{robots:c}))))}}]),t}(r.Component)),k=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isLoading:e.requestRobots.isLoading,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(C),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var T=Object(l.createLogger)(),A=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(h.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(h.a)({},e,{isLoading:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(h.a)({},e,{isLoading:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(h.a)({},e,{isLoading:!1,error:t.payload});default:return e}}}),N=Object(s.d)(A,Object(s.a)(u.a,T));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");L?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):_(t,e)})}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.89c44367.chunk.js.map