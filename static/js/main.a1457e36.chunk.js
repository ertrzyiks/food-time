(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,a,t){e.exports=t(150)},124:function(e,a,t){},150:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),i=t.n(c),l=(t(124),t(22)),o=t(55),m=t(111),u=t(29),s=t(30),d=t.n(s),f=t(206),E=t(197),b=t(198),p=t(152),g=t(199),v=t(192),y=t(190),O=t(191),h=t(200),j=(t(84),t(207)),w=t(189),k=t(187),x=Object(k.a)(function(e){return{error:{backgroundColor:e.palette.error.dark}}}),S=function(e){var a=e.message,t=Object(n.useState)(!0),c=Object(l.a)(t,2),i=c[0],o=c[1],m=x();if(!a)return null;function u(e,a){"clickaway"!==a&&o(!1)}return r.a.createElement(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,onClose:u,open:i},r.a.createElement(w.a,{className:m.error,message:a.toString(),onClose:u}))},I=t(195),N=t(193),C=t(194),D=t(196),$=t(101),_=t.n($),z=t(99),A=t.n(z),M=t(54),R=t(39),F=t(96),T=t(97);function H(e){return Object(M.a)(new Date(e),"HH:mm")}function W(e,a){var t=Object(F.a)(e,a),n=Object(T.a)(e,a)%60;return n<10&&(n="0".concat(n)),"".concat(t,":").concat(n,"h")}var q=t(98);var J=Object(k.a)(function(e){return{item:{opacity:.3},root:{backgroundColor:e.palette.background.paper},subheader:{backgroundColor:"#ead3d3",textAlign:"left"},subheader_total:{float:"right"},icon:{flexDirection:"column",fontSize:12}}}),Q=function(e){var a=e.time,t=e.key,c=Object(n.useState)(0),i=Object(l.a)(c,2),o=i[0],m=i[1];!function(e,a){var t=Object(n.useRef)();Object(n.useEffect)(function(){t.current=e},[e]),Object(n.useEffect)(function(){if(null!==a){var e=setInterval(function(){t.current()},a);return function(){return clearInterval(e)}}},[a])}(function(){m(o+1)},15e3);var u=Date.now(),s=J(),d=new Date(1e3*a);return r.a.createElement(y.a,{key:t,className:s.item},r.a.createElement(O.a,{primary:"Next at ".concat(H(d)),secondary:d>u&&W(d,u)}))},B=function(e){var a=e.groupedEntries,t=Date.now(),n=J();return r.a.createElement(v.a,{disablePadding:!0,className:n.root},Object.entries(a).map(function(e){var a=Object(l.a)(e,2),c=a[0],i=a[1];return r.a.createElement(q.CSSTransitionGroup,{key:c,transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},r.a.createElement(N.a,{className:n.subheader},Object(M.a)(parseInt(c,10),"d MMM, yyyy"),r.a.createElement("span",{className:n.subheader_total},"(total ",function(e){return e.filter(function(e){return!e.isSuggested}).length}(i),")")),i.map(function(e){var a=e.id,c=e.time,i=e.extra_food,l=e.meantime;return e.isSuggested?r.a.createElement(Q,{key:a,time:c}):r.a.createElement(y.a,{key:a},r.a.createElement(C.a,{className:n.icon},i>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null)," ",i,"ml")),r.a.createElement(O.a,{secondary:l},H(1e3*c)),r.a.createElement(I.a,null,t-1e3*c<864e5&&r.a.createElement(D.a,{edge:"end","aria-label":"Comments",component:R.b,to:"/edit/".concat(a)},r.a.createElement(_.a,null))))}))}))},G=t(107),L=t(45);function P(){var e=Object(u.a)(["\n  query getEntries($spaceId: String!) {\n    entries(spaceId: $spaceId) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return P=function(){return e},e}var U=d()(P());function K(){var e=Object(u.a)(["\n  query getEntry($id: String!) {\n    entry(id: $id) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return K=function(){return e},e}var V=d()(K());function X(){var e=Object(u.a)(["\n  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int) {\n    updateEntry(id: $id, time: $time, extra_food: $extra_food) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return X=function(){return e},e}var Y=d()(X());function Z(){var e=Object(u.a)(["\n  mutation RemoveEntry($id: String!) {\n    removeEntry(id: $id) {\n      message\n      removedId\n    }\n  }\n"]);return Z=function(){return e},e}var ee=d()(Z());function ae(){var e=Object(u.a)(["\n  mutation CreateEntry($spaceId: String!, $time: Int!) {\n    createEntry(spaceId: $spaceId, time: $time) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return ae=function(){return e},e}var te=d()(ae());var ne=function(e){var a=e.spaceId,t=Object(f.a)(U,{variables:{spaceId:a}}),n=t.loading,c=t.data,i=t.error,u=!n&&!i,s=Object(E.a)(te,{refetchQueries:["getEntries"]}),d=Object(l.a)(s,2),j=d[0],w=d[1],k=w.loading,x=w.error,I=u&&c.entries.slice().sort(function(e,a){return a.time-e.time}),N=u&&I.reverse().reduce(function(e,a){if(e.length>0){var t=e[e.length-1];return[].concat(Object(m.a)(e),[Object(o.a)({},a,{meantime:W(new Date(1e3*a.time),new Date(1e3*t.time))})])}return[Object(o.a)({},a,{meantime:null})]},[]).reverse();if(N.length>0){var C=N[0],D=new Date(1e3*C.time),$=D.getHours(),_=$>=21||$<3?240:210;N.unshift({id:"future",time:Math.round(Object(L.a)(D,_)/1e3),extra_food:0,meantime:null,isSuggested:!0})}var z=N&&N.reduce(function(e,a){var t=Object(G.a)(new Date(1e3*a.time)).getTime();return e[t]=e[t]||[],e[t].push(a),e},{});return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},(i||x)&&r.a.createElement(S,{message:i||x}),r.a.createElement(b.a,{variant:"contained",size:"large",color:"primary",onClick:function(){return j({variables:{time:Math.round(Date.now()/1e3),spaceId:a}})},disabled:k},"Now")),r.a.createElement(g.a,{maxWidth:"sm"},!n&&!i&&r.a.createElement(p.a,null,!n&&c&&c.entries.length>0&&r.a.createElement(B,{groupedEntries:z}),!n&&c&&0===c.entries.length&&r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(O.a,{primary:"Click the button to start measuring intervals"})))),n&&r.a.createElement(h.a,null)))},re=t(204),ce=t(201);var ie=function(e){var a=e.onSelect,t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"}),r.a.createElement("form",{onSubmit:function(){return a(i)}},r.a.createElement(ce.a,{container:!0,spacing:5,direction:"column"},r.a.createElement(ce.a,{item:!0},r.a.createElement(re.a,{label:"Space name",value:i,onChange:function(e){return o(e.target.value)},margin:"normal"})),r.a.createElement(ce.a,{item:!0},r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary"},"Proceed")))))},le=t(110),oe=t(109),me=t(70),ue=t(69),se=t(108),de=t(38),fe=t(49),Ee=t(202),be=t(209),pe=t(66),ge=t(71),ve=t.n(ge),ye=t(72),Oe=t.n(ye),he=t(208);function je(e){var a=null,t=!1;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];t?a=function(){return e.apply(void 0,r)}:function e(n){t=!0,n().then(function(){if(t=!1,null!=a){var n=a;a=null,e(n)}})}(function(){return e.apply(void 0,r)})}}var we=Object(k.a)(function(e){return Object(he.a)({root:{padding:e.spacing(3,5)}})});var ke=function(e){var a=e.spaceId,t=e.match.params.id,c=Object(f.a)(V,{variables:{id:t}}),i=c.loading,m=c.data,u=Object(E.a)(ee,{variables:{id:t},update:function(e,t){var n=t.data.removeEntry,r=null;try{r=e.readQuery({query:U,variables:{spaceId:a}})}catch(c){}r&&e.writeQuery({query:U,variables:{spaceId:a},data:{entries:r.entries.filter(function(e){return e.id!==n.removedId})}})}}),s=Object(l.a)(u,2),d=s[0],v=s[1].data,y=Object(n.useState)(null),O=Object(l.a)(y,2),j=O[0],w=O[1],k=Object(n.useState)(null),x=Object(l.a)(k,2),S=x[0],I=x[1],N=Object(pe.b)(),C=Object(n.useCallback)(je(function(e){return N.mutate({mutation:Y,variables:Object(o.a)({id:t},e)})}),[N,t]);null!==j||i||w(new Date(1e3*m.entry.time)),null!==S||i||I(m.entry.extra_food);var D,$=function(e){w(e),C({time:Math.round(e.getTime()/1e3)})},_=we();return v?r.a.createElement(de.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},!i&&r.a.createElement(fe.a,null,H(j)," ",(D=j,Object(M.a)(new Date(D),"d MMM, yyyy")))),r.a.createElement(g.a,{maxWidth:"sm"},i?r.a.createElement(h.a,null):r.a.createElement(ce.a,{container:!0,spacing:2,direction:"row",justify:"center"},r.a.createElement(ce.a,{item:!0,xs:12,md:4},r.a.createElement(p.a,{className:_.root},r.a.createElement(fe.a,{paragraph:!0},"Day"),r.a.createElement(Ee.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return $(Object(ue.a)(j,1))}},r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return $(Object(se.a)(j,1))}},r.a.createElement(Oe.a,null)))),r.a.createElement(ce.a,{item:!0,xs:12,md:4},r.a.createElement(p.a,{className:_.root},r.a.createElement(fe.a,{paragraph:!0},"Hours"),r.a.createElement(Ee.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return $(Object(me.a)(j,1))}},r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return $(Object(oe.a)(j,1))}},r.a.createElement(Oe.a,null)))),r.a.createElement(ce.a,{item:!0,xs:12,md:4},r.a.createElement(p.a,{className:_.root},r.a.createElement(fe.a,{paragraph:!0},"Minutes"),r.a.createElement(Ee.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return $(Object(L.a)(j,5))}},r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return $(Object(le.a)(j,5))}},r.a.createElement(Oe.a,null)))),r.a.createElement(ce.a,{item:!0,xs:12,md:12},r.a.createElement(p.a,{className:_.root},r.a.createElement(fe.a,{paragraph:!0},"Extra food - ",S,"ml"),r.a.createElement(be.a,{defaultValue:S,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:5,min:0,max:150,onChange:function(e,a){return function(e){I(e),C({extra_food:e})}(a)}}))),r.a.createElement(ce.a,{item:!0,xs:12,md:12},r.a.createElement(p.a,{className:_.root},r.a.createElement(fe.a,{paragraph:!0},"Danger zone"),r.a.createElement(b.a,{variant:"contained",color:"secondary",onClick:d},"Delete"))))))},xe=t(203),Se=Object(k.a)(function(e){return Object(he.a)({root:{padding:e.spacing(5,2)}})}),Ie=function(){var e=Se();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},"ERROR 404"),r.a.createElement(g.a,{className:e.root,maxWidth:"sm"},r.a.createElement(fe.a,{variant:"h5",paragraph:!0},"NOT FOUND"),r.a.createElement(fe.a,{variant:"body"},"Go back to the ",r.a.createElement(xe.a,{to:"/",component:R.b},"homepage"))))};var Ne=function(e){var a=e.storage,t=a.read,c=a.write,i=Object(n.useState)(t("food-time-space-id")),o=Object(l.a)(i,2),m=o[0],u=o[1];return Object(n.useEffect)(function(){c("food-time-space-id",m)},[m,c]),r.a.createElement("div",{className:"App"},r.a.createElement(R.a,null,r.a.createElement(de.d,null,m?r.a.createElement(r.a.Fragment,null,r.a.createElement(de.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ne,{spaceId:m})}}),r.a.createElement(de.b,{path:"/edit/:id",render:function(e){return r.a.createElement(ke,Object.assign({},e,{spaceId:m}))}})):r.a.createElement(de.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(ie,Object.assign({},e,{onSelect:function(e){return u(e)}}))}}),r.a.createElement(de.b,{component:Ie}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=t(44),De=t(113),$e=t(112),_e=new Ce.a({cache:new $e.a({cacheRedirects:{Query:{entry:function(e,a,t){return(0,t.getCacheKey)({__typename:"Entry",id:a.id})}}}}),link:Object(De.a)({uri:"https://papi.ertrzyiks.me/food-time"})});i.a.render(r.a.createElement(pe.a,{client:_e},r.a.createElement(Ne,{storage:{read:function(e){return JSON.parse(window.localStorage.getItem(e))},write:function(e,a){return window.localStorage.setItem(e,JSON.stringify(a))}}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,a,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.a1457e36.chunk.js.map