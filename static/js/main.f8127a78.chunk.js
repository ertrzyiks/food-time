(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(154)},127:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(127),a(19)),l=a(30),m=a(36),u=a(68),s=a(46),d=a(111),f=a(23),p=a.n(f),b=a(203),E=a(193),g=a(43),v=a.n(g),h=a(114),y=a(194),O=a(195),j=a(185),w=a(157),k=a(183),x=a(196),N=a(181),I=a(204),S=a(182),C=Object(N.a)(function(e){return{error:{backgroundColor:e.palette.error.dark}}}),_=function(e){var t=e.message,a=Object(n.useState)(!0),c=Object(i.a)(a,2),o=c[0],l=c[1],m=C();if(!t)return null;function u(e,t){"clickaway"!==t&&l(!1)}return t.networkError&&t.networkError.result&&t.networkError.result.errors&&t.networkError.result.errors.length>0&&(t=t.networkError.result.errors[0].message.slice(0,100)),r.a.createElement(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,onClose:u,open:o},r.a.createElement(S.a,{className:m.error,message:t.toString(),onClose:u}))},D=a(187),$=a(186),T=a(184),z=a(188),F=a(97),R=a.n(F),A=a(80),M=a.n(A),B=a(79),L=a.n(B),W=a(59),q=a(94),H=a(95);function G(e){return Object(W.a)(new Date(e),"HH:mm")}function P(e,t){var a=Object(q.a)(e,t),n=Object(H.a)(e,t)%60;return n<10&&(n="0".concat(n)),"".concat(a,":").concat(n,"h")}var Q=a(67);var J=Object(N.a)(function(e){return{item:{opacity:.3},root:{backgroundColor:e.palette.background.paper},subheader:{backgroundColor:"#f0f2fa",color:e.palette.common.black,textAlign:"left"},subheader_total:{float:"right"}}}),U=Object(N.a)({icon_wrapper:{display:"flex",flexDirection:"column",fontSize:12,marginRight:5},bottle_icon:{color:"#24a0ff"},icon_container:{display:"flex"},small_icon:{fontSize:"1rem"}}),K=function(e){var t=e.time,a=e.key,c=Object(n.useState)(0),o=Object(i.a)(c,2),l=o[0],m=o[1];!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)(function(){a.current=e},[e]),Object(n.useEffect)(function(){if(null!==t){var e=setInterval(function(){a.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){m(l+1)},15e3);var u=Date.now(),s=J(),d=new Date(1e3*t);return r.a.createElement(w.a,{key:a,className:s.item},r.a.createElement(k.a,{primary:"Next at ".concat(G(d)),secondary:d>u&&P(d,u)}))},V=function(e){var t,a=e.type,n=e.extra_food,c=U();switch(a){case"breast":t=r.a.createElement(L.a,null);break;case"bottle":t=r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{className:c.bottle_icon})," ",n,"ml");break;case"mixed":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.icon_container},r.a.createElement(L.a,{className:c.small_icon}),r.a.createElement(M.a,{className:[c.bottle_icon,c.small_icon].join(" ")})),r.a.createElement("span",null,n,"ml"))}return r.a.createElement(T.a,null,r.a.createElement("div",{className:c.icon_wrapper},t))},X=function(e){var t=e.groupedEntries,a=Date.now(),n=J();return r.a.createElement(j.a,{disablePadding:!0,className:n.root},Object.entries(t).map(function(e){var t=Object(i.a)(e,2),c=t[0],o=t[1];return r.a.createElement(Q.CSSTransitionGroup,{key:c,transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},r.a.createElement($.a,{className:n.subheader},Object(W.a)(parseInt(c,10),"d MMM, yyyy"),r.a.createElement("span",{className:n.subheader_total},"(total ",function(e){return e.filter(function(e){return!e.isSuggested}).length}(o),")")),o.map(function(e){var t=e.id,n=e.time,c=e.extra_food,o=e.type,i=e.meantime;return e.isSuggested?r.a.createElement(K,{key:t,time:n}):r.a.createElement(w.a,{key:t},r.a.createElement(V,{type:o,extra_food:c}),r.a.createElement(k.a,{secondary:i},G(1e3*n)),r.a.createElement(D.a,null,a-1e3*n<864e5&&r.a.createElement(z.a,{edge:"end","aria-label":"Comments",component:l.b,to:"/edit/".concat(t)},r.a.createElement(R.a,null))))}))}))},Y=a(98),Z=a.n(Y),ee=a(55),te=Object(N.a)(function(e){return{info:{backgroundColor:e.palette.primary.main},error:{backgroundColor:e.palette.error.dark},messageBox:{marginBottom:20},message:{display:"flex",alignItems:"center"},icon:{marginRight:e.spacing(1)}}}),ae=function(e){var t=te(),a=e.variant,n=e.children;return r.a.createElement(S.a,{className:[t[a],t.messageBox].join(" "),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(Z.a,{className:t.icon}),n)})},ne=function(e){var t=e.lastFeedingTime,a=e.nextFeedingTime;return r.a.createElement(ae,{variant:Date.now()>a?"error":"info"},"It's been\xa0",r.a.createElement(ee.a,{variant:"subtitle1",component:"span"},P(new Date,new Date(t))),"\xa0since last feeding")},re=a(189),ce=a(190),oe=a(191),ie=a(201),le=a(192),me=a(200),ue=r.a.createContext(null),se=function(e){return{pattern:e,path:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return m.f.apply(void 0,[e].concat(a))}}},de=se("/"),fe=se("/select"),pe=se("/space/:id"),be=se("/edit/:id"),Ee=Object(N.a)({appBar:{backgroundColor:"#3e4451"},avatar:{margin:15,width:40,height:40,marginLeft:"auto"},toolbar:{height:70,paddingLeft:15}}),ge=function(e){var t=e.toolbarIcon,a=e.children,c=Ee(),o=Object(n.useContext)(ue),m=r.a.useState(null),u=Object(i.a)(m,2),s=u[0],d=u[1];function f(){d(null)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{className:c.appBar},r.a.createElement(ce.a,{disableGutters:!0,className:c.toolbar},t,r.a.createElement(ee.a,{variant:"h5"},"Food time"),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{alt:"Profile picture",src:o.imageUrl,"aria-controls":"user-menu","aria-haspopup":"true",className:c.avatar,onClick:function(e){d(e.currentTarget)}}),r.a.createElement(ie.a,{id:"user-menu",anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},getContentAnchorEl:null,keepMounted:!0,open:Boolean(s),onClose:f},r.a.createElement(le.a,{component:l.b,to:fe.path(),onClick:f},"Spaces"))))),r.a.createElement(ce.a,{className:c.toolbar}),r.a.createElement(me.a,{my:2},a))},ve=a(104),he=a(52),ye=a(24);function Oe(){var e=Object(ye.a)(["\n  query getEntries($spaceId: String!) {\n    entries(spaceId: $spaceId) {\n      id\n      time\n      extra_food\n      spaceId\n      type  \n    }\n  }\n"]);return Oe=function(){return e},e}var je=p()(Oe());function we(){var e=Object(ye.a)(["\n  query getEntry($id: String!) {\n    entry(id: $id) {\n      id\n      time\n      extra_food\n      spaceId\n      type \n    }\n  }\n"]);return we=function(){return e},e}var ke=p()(we());function xe(){var e=Object(ye.a)(["\n  mutation CreateEntry($spaceId: String!, $time: Int!) {\n    createEntry(spaceId: $spaceId, time: $time) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return xe=function(){return e},e}var Ne=p()(xe());function Ie(){var e=Object(ye.a)(["\n  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int) {\n    updateEntry(id: $id, time: $time, extra_food: $extra_food) {\n      id\n      time\n      extra_food\n      type  \n    }\n  }\n"]);return Ie=function(){return e},e}var Se=p()(Ie());function Ce(){var e=Object(ye.a)(["\n  mutation RemoveEntry($id: String!) {\n    removeEntry(id: $id) {\n      message\n      removedId\n    }\n  }\n"]);return Ce=function(){return e},e}var _e=p()(Ce());function De(){var e=Object(ye.a)(["\n  query getSpaces {\n    spaces {\n      id\n      display_name\n    }\n  }\n"]);return De=function(){return e},e}var $e=p()(De());function Te(){var e=Object(ye.a)(["\n  mutation CreateSpace($name: String!) {\n    createSpace(name: $name) {\n      id\n      display_name\n    }\n  }\n"]);return Te=function(){return e},e}var ze=p()(Te()),Fe=Object(N.a)(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2},listWrapper:{marginTop:e.spacing(2)}}});var Re=function(e){var t=e.match,a=Fe(),n=t.params.id,c=Object(b.a)(je,{variables:{spaceId:n}}),o=c.loading,l=c.data,m=c.error,u=!o&&!m,f=Object(E.a)(Ne,{refetchQueries:["getEntries"]}),p=Object(i.a)(f,2),g=p[0],N=p[1],I=N.loading,S=N.error,C=u&&l.entries.slice().sort(function(e,t){return t.time-e.time}),D=u&&C.reverse().reduce(function(e,t){if(e.length>0){var a=e[e.length-1];return[].concat(Object(d.a)(e),[Object(s.a)({},t,{meantime:P(new Date(1e3*t.time),new Date(1e3*a.time))})])}return[Object(s.a)({},t,{meantime:null})]},[]).reverse();if(D.length>0){var $=D[0],T=new Date(1e3*$.time),z=T.getHours(),F=z>=21||z<3?210:150;D.unshift({id:"future",time:Math.round(Object(he.a)(T,F)/1e3),extra_food:0,meantime:null,isSuggested:!0})}var R=D&&D.reduce(function(e,t){var a=Object(ve.a)(new Date(1e3*t.time)).getTime();return e[a]=e[a]||[],e[a].push(t),e},{});return r.a.createElement(ge,null,(m||S)&&r.a.createElement(_,{message:m||S}),r.a.createElement(y.a,{className:a.listWrapper,maxWidth:"sm"},r.a.createElement(O.a,{variant:"extended",color:"primary","aria-label":"delete",className:a.fab,onClick:function(){return g({variables:{time:Math.round(Date.now()/1e3),spaceId:n}})},disabled:I},r.a.createElement(v.a,null),"New feeding"),!o&&l&&l.entries.length>0&&r.a.createElement(ne,{lastFeedingTime:1e3*D[1].time,nextFeedingTime:1e3*D[0].time}),!o&&!m&&r.a.createElement(h.a,null,!o&&l&&l.entries.length>0&&r.a.createElement(X,{groupedEntries:R}),!o&&l&&0===l.entries.length&&r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{primary:"Click the button to start measuring intervals"})))),o&&r.a.createElement(x.a,null)))},Ae=Object(N.a)(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}}});var Me=function(){var e=Ae(),t=Object(b.a)($e),a=t.loading,n=t.data,c=(t.error,Object(E.a)(ze,{variables:{name:"New space"},refetchQueries:["getSpaces"]})),o=Object(i.a)(c,2),m=o[0],u=o[1],s=u.loading;return u.error,r.a.createElement(ge,null,r.a.createElement(y.a,{maxWidth:"sm"},r.a.createElement(O.a,{variant:"extended",color:"primary","aria-label":"New space",className:e.fab,onClick:m,disabled:s},r.a.createElement(v.a,null),"New space"),a&&r.a.createElement(x.a,null),!a&&r.a.createElement(h.a,null,r.a.createElement(j.a,{disablePadding:!0},r.a.createElement(Q.CSSTransitionGroup,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},n.spaces.map(function(e){return r.a.createElement(w.a,{key:e.id,divider:!0,button:!0,component:l.b,to:pe.path({id:e.id})},r.a.createElement(k.a,null,e.display_name))}))))))},Be=a(105),Le=Object(N.a)({root:{position:"relative",minHeight:40},loader:{position:"absolute",backgroundColor:"white",top:-3,bottom:-5,left:0,right:0,zIndex:1}}),We=function(e){var t=e.onLogin,a=Le(),c=function(e){t(e)},o=Object(n.useState)(!0),l=Object(i.a)(o,2),m=l[0],u=l[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){u(!1)},1500);return function(){return clearTimeout(e)}}),r.a.createElement(ge,null,r.a.createElement("div",{className:a.root},m&&r.a.createElement("div",{className:a.loader},r.a.createElement(x.a,null)),r.a.createElement(Be.GoogleLogin,{clientId:"299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com",buttonText:"Login",onSuccess:c,onFailure:c,isSignedIn:!0,cookiePolicy:"single_host_origin"})))},qe=a(109),He=a(108),Ge=a(72),Pe=a(71),Qe=a(107),Je=a(197),Ue=a(206),Ke=a(198),Ve=a(73),Xe=a.n(Ve),Ye=a(106),Ze=a.n(Ye),et=a(205);function tt(e){var t=null,a=!1;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a?t=function(){return e.apply(void 0,r)}:function e(n){a=!0,n().then(function(){if(a=!1,null!=t){var n=t;t=null,e(n)}})}(function(){return e.apply(void 0,r)})}}var at=Object(N.a)(function(e){return Object(et.a)({root:{padding:e.spacing(3,5)}})});var nt=function(e){var t=e.match.params.id,a=Object(b.a)(ke,{variables:{id:t}}),c=a.loading,o=a.data,d=o&&o.entry.spaceId,f=Object(E.a)(_e,{variables:{id:t},update:function(e,t){var a=t.data.removeEntry,n=null;try{n=e.readQuery({query:je,variables:{spaceId:d}})}catch(r){}n&&e.writeQuery({query:je,variables:{spaceId:d},data:{entries:n.entries.filter(function(e){return e.id!==a.removedId})}})}}),p=Object(i.a)(f,2),g=p[0],j=p[1].data,w=Object(n.useState)(null),k=Object(i.a)(w,2),N=k[0],I=k[1],S=Object(n.useState)(null),C=Object(i.a)(S,2),_=C[0],D=C[1],$=Object(u.b)(),T=Object(n.useCallback)(tt(function(e){return $.mutate({mutation:Se,variables:Object(s.a)({id:t},e)})}),[$,t]);null!==N||c||I(new Date(1e3*o.entry.time)),null!==_||c||D(o.entry.extra_food);var F=function(e){I(e),T({time:Math.round(e.getTime()/1e3)})},R=at();if(j)return r.a.createElement(m.a,{to:pe.path({id:d})});var A,M=r.a.createElement(z.a,{edge:"start",color:"inherit",component:function(e){return r.a.createElement(l.b,Object.assign({},e,{to:pe.path({id:d})}))}},r.a.createElement(Ze.a,null));return r.a.createElement(ge,{toolbarIcon:M},r.a.createElement("header",{className:"App-header"},!c&&r.a.createElement(ee.a,{variant:"h5"},G(N)," ",(A=N,Object(W.a)(new Date(A),"d MMM, yyyy")))),r.a.createElement(y.a,{maxWidth:"sm"},c?r.a.createElement(x.a,null):r.a.createElement(Je.a,{container:!0,spacing:2,direction:"row",justify:"center"},r.a.createElement(Je.a,{item:!0,xs:12,md:4},r.a.createElement(h.a,{className:R.root},r.a.createElement(ee.a,{paragraph:!0},"Day"),r.a.createElement(O.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return F(Object(Pe.a)(N,1))}},r.a.createElement(v.a,null)),r.a.createElement(O.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return F(Object(Qe.a)(N,1))}},r.a.createElement(Xe.a,null)))),r.a.createElement(Je.a,{item:!0,xs:12,md:4},r.a.createElement(h.a,{className:R.root},r.a.createElement(ee.a,{paragraph:!0},"Hours"),r.a.createElement(O.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return F(Object(Ge.a)(N,1))}},r.a.createElement(v.a,null)),r.a.createElement(O.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return F(Object(He.a)(N,1))}},r.a.createElement(Xe.a,null)))),r.a.createElement(Je.a,{item:!0,xs:12,md:4},r.a.createElement(h.a,{className:R.root},r.a.createElement(ee.a,{paragraph:!0},"Minutes"),r.a.createElement(O.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return F(Object(he.a)(N,5))}},r.a.createElement(v.a,null)),r.a.createElement(O.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return F(Object(qe.a)(N,5))}},r.a.createElement(Xe.a,null)))),r.a.createElement(Je.a,{item:!0,xs:12,md:12},r.a.createElement(h.a,{className:R.root},r.a.createElement(ee.a,{paragraph:!0},"Extra food - ",_,"ml"),r.a.createElement(Ue.a,{defaultValue:_,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:5,min:0,max:150,onChange:function(e,t){return function(e){D(e),T({extra_food:e})}(t)}}))),r.a.createElement(Je.a,{item:!0,xs:12,md:12},r.a.createElement(h.a,{className:R.root},r.a.createElement(ee.a,{paragraph:!0},"Danger zone"),r.a.createElement(Ke.a,{variant:"contained",color:"secondary",onClick:g},"Delete"))))))},rt=a(199),ct=Object(N.a)(function(e){return Object(et.a)({root:{padding:e.spacing(5,2)}})}),ot=function(){var e=ct();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},"ERROR 404"),r.a.createElement(y.a,{className:e.root,maxWidth:"sm"},r.a.createElement(ee.a,{variant:"h5",paragraph:!0},"NOT FOUND"),r.a.createElement(ee.a,{variant:"body"},"Go back to the ",r.a.createElement(rt.a,{to:"/",component:l.b},"homepage"))))},it=a(51),lt=a(113),mt=a(112),ut=a(110);function st(e){var t=Object(lt.a)({uri:"https://papi.ertrzyiks.me/food-time"}),a=Object(ut.a)(function(t,a){var n=a.headers;return{headers:Object(s.a)({},n,{authorization:"Bearer ".concat(e())})}});return new it.a({cache:new mt.a({cacheRedirects:{Query:{entry:function(e,t,a){return(0,a.getCacheKey)({__typename:"Entry",id:t.id})}}}}),link:a.concat(t)})}a(153);var dt=function(e){var t=e.match,a=e.write,r=e.children,c=t.params.id;return Object(n.useEffect)(function(){a(c)},[a,c]),r};var ft=function(e){var t=e.storage,a=t.read,c=t.write,o=a("food-time-space-id"),s=Object(n.useState)(null),d=Object(i.a)(s,2),f=d[0],p=d[1];return Object(n.useEffect)(function(){var e=setInterval(function(){if(f)return f.reloadAuthResponse().then(function(e){c("food-time-token-id",e.id_token)})},3e5);return function(){return clearInterval(e)}},[c,f]),r.a.createElement(ue.Provider,{value:f&&f.profileObj},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(m.d,null,f?r.a.createElement(u.a,{client:st(function(){return a("food-time-token-id")})},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:fe.pattern,render:function(e){return r.a.createElement(Me,e)}}),r.a.createElement(m.b,{path:pe.pattern,render:function(e){return r.a.createElement(dt,{write:function(e){return c("food-time-space-id",e)},match:e.match},r.a.createElement(Re,Object.assign({},e,{profile:f.profileObj})))}}),r.a.createElement(m.b,{path:be.pattern,render:function(e){return r.a.createElement(nt,e)}}),r.a.createElement(m.b,{exact:!0,path:de.pattern},o?r.a.createElement(m.a,{to:pe.path({id:o})}):r.a.createElement(m.a,{to:fe.path()})))):r.a.createElement(m.b,{path:de.pattern,render:function(e){return r.a.createElement(We,Object.assign({},e,{onLogin:function(e){c("food-time-token-id",e.tokenId),p(e)}}))}}),r.a.createElement(m.b,{component:ot})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ft,{storage:{read:function(e){return JSON.parse(window.localStorage.getItem(e))},write:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))}}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,1,2]]]);
//# sourceMappingURL=main.f8127a78.chunk.js.map