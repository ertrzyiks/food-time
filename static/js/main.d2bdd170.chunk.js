(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";(function(e){var n=a(0),r=a.n(n);t.a=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,c=r.a.useRef();r.a.useEffect(function(){c.current=a},[a]),r.a.useEffect(function(){if(n&&n.addEventListener){var e=function(e){return c.current(e)};return n.addEventListener(t,e),function(){n.removeEventListener(t,e)}}},[t,n])}}).call(this,a(57))},127:function(e,t,a){e.exports=a(159)},132:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(132),a(18)),l=a(31),m=a(36),u=a(69),s=a(46),d=a(116),f=a(213),p=a(201),b=a(44),E=a.n(b),g=a(119),v=a(202),h=a(203),y=a(193),O=a(161),j=a(191),k=a(204),w=a(189),x=a(214),N=a(190),I=Object(w.a)(function(e){return{error:{backgroundColor:e.palette.error.dark}}}),S=function(e){var t=e.message,a=Object(n.useState)(!0),c=Object(o.a)(a,2),i=c[0],l=c[1],m=I();if(!t)return null;function u(e,t){"clickaway"!==t&&l(!1)}return t.networkError&&t.networkError.result&&t.networkError.result.errors&&t.networkError.result.errors.length>0&&(t=t.networkError.result.errors[0].message.slice(0,100)),r.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,onClose:u,open:i},r.a.createElement(N.a,{className:m.error,message:t.toString(),onClose:u}))},C=a(195),_=a(194),D=a(192),$=a(196),T=a(100),z=a.n(T),F=a(82),R=a.n(F),L=a(81),A=a.n(L),B=a(60),M=a(98),W=a(65);function q(e){return Object(B.a)(new Date(e),"HH:mm")}function H(e,t){var a=Object(M.a)(e,t),n=Object(W.a)(e,t)%60;return a<1?"".concat(n,"min"):"".concat(a,"h ").concat(n,"min")}var G=a(66);function P(e,t){var a=Object(n.useRef)();Object(n.useEffect)(function(){a.current=e},[e]),Object(n.useEffect)(function(){if(null!==t){var e=setInterval(function(){a.current()},t);return function(){return clearInterval(e)}}},[t])}var Q=Object(w.a)(function(e){return{item:{opacity:.3},root:{backgroundColor:e.palette.background.paper},subheader:{backgroundColor:"#f0f2fa",color:e.palette.common.black,textAlign:"left"},subheader_total:{float:"right"}}}),J=Object(w.a)({icon_wrapper:{display:"flex",flexDirection:"column",fontSize:12,marginRight:5},bottle_icon:{color:"#24a0ff"},icon_container:{display:"flex"},small_icon:{fontSize:"1rem"}}),U=function(e){var t=e.time,a=e.key,c=Object(n.useState)(0),i=Object(o.a)(c,2),l=i[0],m=i[1];P(function(){m(l+1)},15e3);var u=Date.now(),s=Q(),d=new Date(1e3*t);return r.a.createElement(O.a,{key:a,className:s.item},r.a.createElement(j.a,{primary:"Next at ".concat(q(d)),secondary:d>u&&H(d,u)}))},K=function(e){var t,a=e.type,n=e.extra_food,c=J();switch(a){case"breast":t=r.a.createElement(A.a,null);break;case"bottle":t=r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:c.bottle_icon})," ",n,"ml");break;case"mixed":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.icon_container},r.a.createElement(A.a,{className:c.small_icon}),r.a.createElement(R.a,{className:[c.bottle_icon,c.small_icon].join(" ")})),r.a.createElement("span",null,n,"ml"))}return r.a.createElement(D.a,null,r.a.createElement("div",{className:c.icon_wrapper},t))},V=function(e){var t=e.groupedEntries,a=Date.now(),n=Q();return r.a.createElement(y.a,{disablePadding:!0,className:n.root},Object.entries(t).map(function(e){var t=Object(o.a)(e,2),c=t[0],i=t[1];return r.a.createElement(G.CSSTransitionGroup,{key:c,transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},r.a.createElement(_.a,{className:n.subheader},Object(B.a)(parseInt(c,10),"d MMM, yyyy"),r.a.createElement("span",{className:n.subheader_total},"(total ",function(e){return e.filter(function(e){return!e.isSuggested}).length}(i),")")),i.map(function(e){var t=e.id,n=e.time,c=e.extra_food,i=e.type,o=e.meantime;return e.isSuggested?r.a.createElement(U,{key:t,time:n}):r.a.createElement(O.a,{key:t},r.a.createElement(K,{type:i,extra_food:c}),r.a.createElement(j.a,{secondary:o},q(1e3*n)),r.a.createElement(C.a,null,a-1e3*n<864e5&&r.a.createElement($.a,{edge:"end","aria-label":"Comments",component:l.b,to:"/edit/".concat(t)},r.a.createElement(z.a,null))))}))}))},X=a(101),Y=a.n(X),Z=a(102),ee=a.n(Z),te=a(48),ae=Object(w.a)(function(e){return{info:{backgroundColor:e.palette.primary.main},error:{backgroundColor:e.palette.error.dark},messageBox:{marginBottom:20,position:"sticky",top:70,zIndex:10},message:{display:"flex",alignItems:"center"},icon:{marginRight:e.spacing(1)}}}),ne=function(e){var t=ae(),a=e.variant,n=e.children;return r.a.createElement(N.a,{className:[t[a],t.messageBox].join(" "),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},"info"===a?r.a.createElement(Y.a,{className:t.icon}):r.a.createElement(ee.a,{className:t.icon}),n)})},re=function(e){var t=e.lastFeedingTime,a=e.nextFeedingTime,c=Object(n.useState)(0),i=Object(o.a)(c,2),l=i[0],m=i[1];P(function(){m(l+1)},3e4);var u=Object(W.a)(new Date,new Date(t))>5?r.a.createElement(r.a.Fragment,null,"It's been\xa0",r.a.createElement(te.a,{variant:"subtitle1",component:"span"},H(new Date,new Date(t))),"\xa0since last feeding "):r.a.createElement(r.a.Fragment,null,"Feeding in progress");return r.a.createElement(ne,{class:"mui-fixed",variant:Date.now()>a?"error":"info"},u)},ce=a(197),ie=a(198),oe=a(199),le=a(210),me=a(200),ue=a(209),se=r.a.createContext(null),de=function(e){return{pattern:e,path:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return m.f.apply(void 0,[e].concat(a))}}},fe=de("/"),pe=de("/select"),be=de("/space/:id"),Ee=de("/edit/:id"),ge=Object(w.a)({appBar:{backgroundColor:"#3e4451"},avatar:{margin:15,width:40,height:40,marginLeft:"auto"},toolbar:{height:70,paddingLeft:15}}),ve=function(e){var t=e.toolbarIcon,a=e.children,c=ge(),i=Object(n.useContext)(se),m=r.a.useState(null),u=Object(o.a)(m,2),s=u[0],d=u[1];function f(){d(null)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{className:c.appBar},r.a.createElement(ie.a,{disableGutters:!0,className:c.toolbar},t,r.a.createElement(te.a,{variant:"h5"},"Food time"),i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{alt:"Profile picture",src:i.imageUrl,"aria-controls":"user-menu","aria-haspopup":"true",className:c.avatar,onClick:function(e){d(e.currentTarget)}}),r.a.createElement(le.a,{id:"user-menu",anchorEl:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},getContentAnchorEl:null,keepMounted:!0,open:Boolean(s),onClose:f},r.a.createElement(me.a,{component:l.b,to:pe.path(),onClick:f},"Spaces"))))),r.a.createElement(ie.a,{className:c.toolbar}),r.a.createElement(ue.a,{my:2},a))},he=a(109),ye=a(53),Oe=a(23),je=a(24),ke=a.n(je);function we(){var e=Object(Oe.a)(["\n  query getEntries($spaceId: String!) {\n    entries(spaceId: $spaceId) {\n      id\n      time\n      extra_food\n      spaceId\n      type  \n      vitamin\n    }\n  }\n"]);return we=function(){return e},e}var xe=ke()(we());function Ne(){var e=Object(Oe.a)(["\n  query getEntry($id: String!) {\n    entry(id: $id) {\n      id\n      time\n      extra_food\n      spaceId\n      type \n      vitamin\n    }\n  }\n"]);return Ne=function(){return e},e}var Ie=ke()(Ne());function Se(){var e=Object(Oe.a)(["\n  mutation CreateEntry($spaceId: String!, $time: Int!) {\n    createEntry(spaceId: $spaceId, time: $time) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return Se=function(){return e},e}var Ce=ke()(Se());function _e(){var e=Object(Oe.a)(["\n  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int, $type: String, $vitamin: Boolean) {\n    updateEntry(id: $id, time: $time, extra_food: $extra_food, type: $type, vitamin: $vitamin) {\n      id\n      time\n      extra_food\n      type  \n      vitamin\n    }\n  }\n"]);return _e=function(){return e},e}var De=ke()(_e());function $e(){var e=Object(Oe.a)(["\n  mutation RemoveEntry($id: String!) {\n    removeEntry(id: $id) {\n      message\n      removedId\n    }\n  }\n"]);return $e=function(){return e},e}var Te=ke()($e());function ze(){var e=Object(Oe.a)(["\n  query getSpaces {\n    spaces {\n      id\n      display_name\n    }\n  }\n"]);return ze=function(){return e},e}var Fe=ke()(ze());function Re(){var e=Object(Oe.a)(["\n  mutation CreateSpace($name: String!) {\n    createSpace(name: $name) {\n      id\n      display_name\n    }\n  }\n"]);return Re=function(){return e},e}var Le=ke()(Re()),Ae=a(103),Be=Object(w.a)(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2},listWrapper:{marginTop:e.spacing(2)}}});var Me=function(e){var t=e.match,a=Be(),n=t.params.id,c=Object(f.a)(xe,{variables:{spaceId:n}}),i=c.loading,l=c.data,m=c.error,u=c.refetch,b=!i&&!m,w=r.a.useCallback(function(){console.log(document.hidden),!1===document.hidden&&u()},[u]);Object(Ae.a)("visibilitychange",w,document);var x=Object(p.a)(Ce,{refetchQueries:["getEntries"]}),N=Object(o.a)(x,2),I=N[0],C=N[1],_=C.loading,D=C.error,$=b&&l.entries.slice().reverse().reduce(function(e,t){if(e.length>0){var a=e[e.length-1];return[].concat(Object(d.a)(e),[Object(s.a)({},t,{meantime:H(new Date(1e3*t.time),new Date(1e3*a.time))})])}return[Object(s.a)({},t,{meantime:null})]},[]).reverse();if($.length>0){var T=$[0],z=new Date(1e3*T.time),F=z.getHours(),R=F>=21||F<3?210:150;$.unshift({id:"future",time:Math.round(Object(ye.a)(z,R)/1e3),extra_food:0,meantime:null,isSuggested:!0})}var L=$&&$.reduce(function(e,t){var a=Object(he.a)(new Date(1e3*t.time)).getTime();return e[a]=e[a]||[],e[a].push(t),e},{});return r.a.createElement(ve,null,(m||D)&&r.a.createElement(S,{message:m||D}),r.a.createElement(v.a,{className:a.listWrapper,maxWidth:"sm"},r.a.createElement(h.a,{variant:"extended",color:"primary","aria-label":"delete",className:a.fab,onClick:function(){return I({variables:{time:Math.round(Date.now()/1e3),spaceId:n}})},disabled:_},r.a.createElement(E.a,null),"New feeding"),!i&&l&&l.entries.length>0&&r.a.createElement(re,{lastFeedingTime:1e3*$[1].time,nextFeedingTime:1e3*$[0].time}),!i&&!m&&r.a.createElement(g.a,null,!i&&l&&l.entries.length>0&&r.a.createElement(V,{groupedEntries:L}),!i&&l&&0===l.entries.length&&r.a.createElement(y.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,{primary:"Click the button to start measuring intervals"})))),i&&r.a.createElement(k.a,null)))},We=Object(w.a)(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2}}});var qe=function(){var e=We(),t=Object(f.a)(Fe),a=t.loading,n=t.data,c=(t.error,Object(p.a)(Le,{variables:{name:"New space"},refetchQueries:["getSpaces"]})),i=Object(o.a)(c,2),m=i[0],u=i[1],s=u.loading;return u.error,r.a.createElement(ve,null,r.a.createElement(v.a,{maxWidth:"sm"},r.a.createElement(h.a,{variant:"extended",color:"primary","aria-label":"New space",className:e.fab,onClick:m,disabled:s},r.a.createElement(E.a,null),"New space"),a&&r.a.createElement(k.a,null),!a&&r.a.createElement(g.a,null,r.a.createElement(y.a,{disablePadding:!0},r.a.createElement(G.CSSTransitionGroup,{transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},n.spaces.map(function(e){return r.a.createElement(O.a,{key:e.id,divider:!0,button:!0,component:l.b,to:be.path({id:e.id})},r.a.createElement(j.a,null,e.display_name))}))))))},He=a(110),Ge=Object(w.a)({root:{position:"relative",minHeight:40},loader:{position:"absolute",backgroundColor:"white",top:-3,bottom:-5,left:0,right:0,zIndex:1}}),Pe=function(e){var t=e.onLogin,a=Ge(),c=function(e){t(e)},i=Object(n.useState)(!0),l=Object(o.a)(i,2),m=l[0],u=l[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){u(!1)},1500);return function(){return clearTimeout(e)}}),r.a.createElement(ve,null,r.a.createElement("div",{className:a.root},m&&r.a.createElement("div",{className:a.loader},r.a.createElement(k.a,null)),r.a.createElement(He.GoogleLogin,{clientId:"299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com",buttonText:"Login",onSuccess:c,onFailure:c,isSignedIn:!0,cookiePolicy:"single_host_origin"})))},Qe=a(114),Je=a(113),Ue=a(73),Ke=a(72),Ve=a(112),Xe=a(205),Ye=a(215),Ze=a(207),et=a(74),tt=a.n(et),at=a(111),nt=a.n(at),rt=a(206),ct=a(211),it=a(216);function ot(e){var t=null,a=!1;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a?t=function(){return e.apply(void 0,r)}:function e(n){a=!0,n().then(function(){if(a=!1,null!=t){var n=t;t=null,e(n)}})}(function(){return e.apply(void 0,r)})}}var lt=Object(w.a)(function(e){return Object(it.a)({root:{padding:e.spacing(3,5)}})}),mt=function(e,t,a){var n=null;try{n=e.readQuery({query:xe,variables:{spaceId:t}})}catch(r){}n&&e.writeQuery({query:xe,variables:{spaceId:t},data:{entries:a(n.entries)}})};var ut=function(e){var t=e.match.params.id,a=Object(f.a)(Ie,{variables:{id:t}}),c=a.loading,i=a.data,d=i&&i.entry.spaceId,b=Object(p.a)(Te,{variables:{id:t},update:function(e,t){var a=t.data.removeEntry;mt(e,d,function(e){return e.filter(function(e){return e.id!==a.removedId})})}}),y=Object(o.a)(b,2),O=y[0],j=y[1].data,w=Object(n.useState)(null),x=Object(o.a)(w,2),N=x[0],I=x[1],S=Object(n.useState)(null),C=Object(o.a)(S,2),_=C[0],D=C[1],T=Object(n.useState)(null),z=Object(o.a)(T,2),F=z[0],R=z[1],L=Object(u.b)(),A=Object(n.useCallback)(ot(function(e){return L.mutate({mutation:De,variables:Object(s.a)({id:t},e),update:function(e){mt(e,d,function(e){return e.sort(function(e,t){return t.time-e.time})})}})}),[L,t]);null!==N||c||I(new Date(1e3*i.entry.time)),null!==_||c||D(i.entry.extra_food),null!==F||c||R("bottle"===i.entry.type);var M=function(e){I(e),A({time:Math.round(e.getTime()/1e3)})},W=function(e,t){return 0===e?"breast":t?"bottle":"mixed"},H=lt();if(j)return r.a.createElement(m.a,{to:be.path({id:d})});var G,P=d&&r.a.createElement($.a,{edge:"start",color:"inherit",component:function(e){return r.a.createElement(l.b,Object.assign({},e,{to:be.path({id:d})}))}},r.a.createElement(nt.a,null));return r.a.createElement(ve,{toolbarIcon:P},r.a.createElement("header",{className:"App-header"},!c&&r.a.createElement(te.a,{variant:"h5"},q(N)," ",(G=N,Object(B.a)(new Date(G),"d MMM, yyyy")))),r.a.createElement(v.a,{maxWidth:"sm"},c?r.a.createElement(k.a,null):r.a.createElement(Xe.a,{container:!0,spacing:2,direction:"row",justify:"center"},r.a.createElement(Xe.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:H.root},r.a.createElement(te.a,{paragraph:!0},"Day"),r.a.createElement(h.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return M(Object(Ke.a)(N,1))}},r.a.createElement(E.a,null)),r.a.createElement(h.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return M(Object(Ve.a)(N,1))}},r.a.createElement(tt.a,null)))),r.a.createElement(Xe.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:H.root},r.a.createElement(te.a,{paragraph:!0},"Hours"),r.a.createElement(h.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return M(Object(Ue.a)(N,1))}},r.a.createElement(E.a,null)),r.a.createElement(h.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return M(Object(Je.a)(N,1))}},r.a.createElement(tt.a,null)))),r.a.createElement(Xe.a,{item:!0,xs:12,md:4},r.a.createElement(g.a,{className:H.root},r.a.createElement(te.a,{paragraph:!0},"Minutes"),r.a.createElement(h.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return M(Object(ye.a)(N,5))}},r.a.createElement(E.a,null)),r.a.createElement(h.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return M(Object(Qe.a)(N,5))}},r.a.createElement(tt.a,null)))),r.a.createElement(Xe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{className:H.root},r.a.createElement(te.a,{paragraph:!0},"Extra food - ",_,"ml"),r.a.createElement(Ye.a,{defaultValue:_,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:5,min:0,max:150,onChange:function(e,t){return function(e){D(e),R(!0),A({extra_food:e,type:W(e,!0)})}(t)}}))),r.a.createElement(Xe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{className:H.root},r.a.createElement(rt.a,{control:r.a.createElement(ct.a,{checked:F,onChange:function(e){var t=e.target.checked;R(t);var a=W(_,t);A({type:a})},color:"primary"}),label:"Bottle only"}))),r.a.createElement(Xe.a,{item:!0,xs:12,md:12},r.a.createElement(g.a,{className:H.root},r.a.createElement(te.a,{paragraph:!0},"Danger zone"),r.a.createElement(Ze.a,{variant:"contained",color:"secondary",onClick:O},"Delete"))))))},st=a(208),dt=Object(w.a)(function(e){return Object(it.a)({root:{padding:e.spacing(5,2)}})}),ft=function(){var e=dt();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},"ERROR 404"),r.a.createElement(v.a,{className:e.root,maxWidth:"sm"},r.a.createElement(te.a,{variant:"h5",paragraph:!0},"NOT FOUND"),r.a.createElement(te.a,{variant:"body"},"Go back to the ",r.a.createElement(st.a,{to:"/",component:l.b},"homepage"))))},pt=a(52),bt=a(118),Et=a(117),gt=a(115);function vt(e){var t=Object(bt.a)({uri:"https://papi.ertrzyiks.me/food-time"}),a=Object(gt.a)(function(t,a){var n=a.headers;return{headers:Object(s.a)({},n,{authorization:"Bearer ".concat(e())})}});return new pt.a({cache:new Et.a({cacheRedirects:{Query:{entry:function(e,t,a){return(0,a.getCacheKey)({__typename:"Entry",id:t.id})}}}}),link:a.concat(t)})}a(158);var ht=function(e){var t=e.match,a=e.write,r=e.children,c=t.params.id;return Object(n.useEffect)(function(){a(c)},[a,c]),r};var yt=function(e){var t=e.storage,a=t.read,c=t.write,i=a("food-time-space-id"),s=Object(n.useState)(null),d=Object(o.a)(s,2),f=d[0],p=d[1];return Object(n.useEffect)(function(){var e=setInterval(function(){if(f)return f.reloadAuthResponse().then(function(e){c("food-time-token-id",e.id_token)})},3e5);return function(){return clearInterval(e)}},[c,f]),r.a.createElement(se.Provider,{value:f&&f.profileObj},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(m.d,null,f?r.a.createElement(u.a,{client:vt(function(){return a("food-time-token-id")})},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:pe.pattern,render:function(e){return r.a.createElement(qe,e)}}),r.a.createElement(m.b,{path:be.pattern,render:function(e){return r.a.createElement(ht,{write:function(e){return c("food-time-space-id",e)},match:e.match},r.a.createElement(Me,Object.assign({},e,{profile:f.profileObj})))}}),r.a.createElement(m.b,{path:Ee.pattern,render:function(e){return r.a.createElement(ut,e)}}),r.a.createElement(m.b,{exact:!0,path:fe.pattern},i?r.a.createElement(m.a,{to:be.path({id:i})}):r.a.createElement(m.a,{to:pe.path()})))):r.a.createElement(m.b,{path:fe.pattern,render:function(e){return r.a.createElement(Pe,Object.assign({},e,{onLogin:function(e){c("food-time-token-id",e.tokenId),p(e)}}))}}),r.a.createElement(m.b,{component:ft})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(yt,{storage:{read:function(e){return JSON.parse(window.localStorage.getItem(e))},write:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))}}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,1,2]]]);
//# sourceMappingURL=main.d2bdd170.chunk.js.map