(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n(78)},55:function(e,t,n){},71:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(55),n(28)),i=n(43),u=n(103),m=n(25),s=n(113),f=n(111),d=n(112),E=n(106),p=n(107),w=n(108),h=n(109),v=n(110),g=n(42),b=n.n(g),y=n(105),O=n(104),k=n(39),j=n(40),S=n.n(j);n(71);function C(e,t){switch(t.type){case"tick":var n=Date.now(),a=e.length>0?n-e[0].now:null;return[{id:e.length>0?e[0].id+1:1,elapsedTime:a,now:n}].concat(Object(i.a)(e)).slice(0,20);case"delete":return e.filter(function(e){return e.id!==t.id});default:throw new Error}}function A(e){var t=e.text,n=e.last,c=Object(a.useState)(0),l=Object(o.a)(c,2),i=l[0],u=l[1];return function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e},[e]),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){u(i+1)},3e4),n?r.a.createElement("span",null,t,": ",function(e){var t=e/1e3/60;return t<1?"< 1min":"".concat(Math.round(t)," min")}(Date.now()-n.now)):null}var I=function(e){var t=e.initialState,n=Object(a.useReducer)(C,t),c=Object(o.a)(n,2),l=c[0],i=c[1],g=Object(a.useState)(null),j=Object(o.a)(g,2),I=j[0],N=j[1];return Object(a.useEffect)(function(){window.localStorage.setItem("items",JSON.stringify(l))},[l]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m.a,{variant:"h5",component:"p"},r.a.createElement(A,{text:"Since last event",last:l[0]})),r.a.createElement(u.a,{variant:"contained",size:"large",color:"primary",onClick:function(){return i({type:"tick"})}},"Now")),r.a.createElement(O.a,{maxWidth:"sm"},r.a.createElement(y.a,null,l.length>0&&r.a.createElement(E.a,null,r.a.createElement(k.AnimateGroup,null,l.map(function(e){var t,n=e.now,a=e.elapsedTime,c=e.id;return r.a.createElement(p.a,{key:c},r.a.createElement(w.a,{primary:(t=n,S()(new Date(t),"HH:mm"))}),a&&a<36e5&&r.a.createElement(h.a,null,r.a.createElement(v.a,{edge:"end","aria-label":"Comments",onClick:function(){return N(c)}},r.a.createElement(b.a,null))))}))),0===l.length&&r.a.createElement(E.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,{primary:"Click the button to start measuring intervals"}))))),r.a.createElement(s.a,{open:Boolean(I),onClose:function(){return N(null)}},r.a.createElement(f.a,{id:"alert-dialog-title"},"Are you sure to remove this item?"),r.a.createElement(d.a,null,r.a.createElement(u.a,{onClick:function(){i({type:"delete",id:I}),N(null)},color:"secondary",autoFocus:!0},"Delete"),r.a.createElement(u.a,{onClick:function(){return N(null)},color:"primary"},"Keep it"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,{initialState:function(){try{return Array.from(JSON.parse(window.localStorage.getItem("items")))}catch(e){return[]}}()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.776bd1d3.chunk.js.map