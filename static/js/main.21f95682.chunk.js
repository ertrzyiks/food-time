(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports=a(146)},118:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=(a(118),a(20)),l=a(38),m=a(39),u=a(63),s=a(42),d=a(108),f=a(25),p=a(26),E=a.n(p),b=a(192),g=a(183),v=a(50),h=a.n(v),y=a(110),O=a(184),j=a(185),k=a(176),w=a(173),x=a(174),N=a(186),I=a(171),_=a(190),C=a(172),S=Object(I.a)(function(e){return{error:{backgroundColor:e.palette.error.dark}}}),D=function(e){var t=e.message,a=Object(n.useState)(!0),c=Object(i.a)(a,2),o=c[0],l=c[1],m=S();if(!t)return null;function u(e,t){"clickaway"!==t&&l(!1)}return t.networkError&&t.networkError.result&&t.networkError.result.errors&&t.networkError.result.errors.length>0&&(t=t.networkError.result.errors[0].message.slice(0,100)),r.a.createElement(_.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3,onClose:u,open:o},r.a.createElement(C.a,{className:m.error,message:t.toString(),onClose:u}))},$=a(178),z=a(177),T=a(175),F=a(179),R=a(93),A=a.n(R),M=a(74),B=a.n(M),L=a(73),W=a.n(L),q=a(54),H=a(89),G=a(90);function J(e){return Object(q.a)(new Date(e),"HH:mm")}function P(e,t){var a=Object(H.a)(e,t),n=Object(G.a)(e,t)%60;return n<10&&(n="0".concat(n)),"".concat(a,":").concat(n,"h")}var Q=a(91);var U=Object(I.a)(function(e){return{item:{opacity:.3},root:{backgroundColor:e.palette.background.paper},subheader:{backgroundColor:"#f0f2fa",color:e.palette.common.black,textAlign:"left"},subheader_total:{float:"right"}}}),K=Object(I.a)({icon_wrapper:{display:"flex",flexDirection:"column",fontSize:12,marginRight:5},bottle_icon:{color:"#24a0ff"},icon_container:{display:"flex"},small_icon:{fontSize:"1rem"}}),V=function(e){var t=e.time,a=e.key,c=Object(n.useState)(0),o=Object(i.a)(c,2),l=o[0],m=o[1];!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)(function(){a.current=e},[e]),Object(n.useEffect)(function(){if(null!==t){var e=setInterval(function(){a.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){m(l+1)},15e3);var u=Date.now(),s=U(),d=new Date(1e3*t);return r.a.createElement(w.a,{key:a,className:s.item},r.a.createElement(x.a,{primary:"Next at ".concat(J(d)),secondary:d>u&&P(d,u)}))},X=function(e){var t,a=e.type,n=e.extra_food,c=K();switch(a){case"breast":t=r.a.createElement(W.a,null);break;case"bottle":t=r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{className:c.bottle_icon})," ",n,"ml");break;case"mixed":t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.icon_container},r.a.createElement(W.a,{className:c.small_icon}),r.a.createElement(B.a,{className:[c.bottle_icon,c.small_icon].join(" ")})),r.a.createElement("span",null,n,"ml"))}return r.a.createElement(T.a,null,r.a.createElement("div",{className:c.icon_wrapper},t))},Y=function(e){var t=e.groupedEntries,a=Date.now(),n=U();return r.a.createElement(k.a,{disablePadding:!0,className:n.root},Object.entries(t).map(function(e){var t=Object(i.a)(e,2),c=t[0],o=t[1];return r.a.createElement(Q.CSSTransitionGroup,{key:c,transitionName:"example",transitionEnterTimeout:500,transitionLeaveTimeout:300},r.a.createElement(z.a,{className:n.subheader},Object(q.a)(parseInt(c,10),"d MMM, yyyy"),r.a.createElement("span",{className:n.subheader_total},"(total ",function(e){return e.filter(function(e){return!e.isSuggested}).length}(o),")")),o.map(function(e){var t=e.id,n=e.time,c=e.extra_food,o=e.type,i=e.meantime;return e.isSuggested?r.a.createElement(V,{key:t,time:n}):r.a.createElement(w.a,{key:t},r.a.createElement(X,{type:o,extra_food:c}),r.a.createElement(x.a,{secondary:i},J(1e3*n)),r.a.createElement($.a,null,a-1e3*n<864e5&&r.a.createElement(F.a,{edge:"end","aria-label":"Comments",component:l.b,to:"/edit/".concat(t)},r.a.createElement(A.a,null))))}))}))},Z=a(94),ee=a.n(Z),te=a(51),ae=Object(I.a)(function(e){return{info:{backgroundColor:e.palette.primary.main},error:{backgroundColor:e.palette.error.dark},messageBox:{marginBottom:20},message:{display:"flex",alignItems:"center"},icon:{marginRight:e.spacing(1)}}}),ne=function(e){var t=ae(),a=e.variant,n=e.children;return r.a.createElement(C.a,{className:[t[a],t.messageBox].join(" "),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(ee.a,{className:t.icon}),n)})},re=function(e){var t=e.lastFeedingTime,a=e.nextFeedingTime;return r.a.createElement(ne,{variant:Date.now()>a?"error":"info"},"It's been\xa0",r.a.createElement(te.a,{variant:"subtitle1",component:"span"},P(new Date,new Date(t))),"\xa0since last feeding")},ce=a(180),oe=a(181),ie=a(182),le=r.a.createContext(null),me=Object(I.a)({appBar:{backgroundColor:"#3e4451"},avatar:{margin:15,width:40,height:40,marginLeft:"auto"},toolbar:{height:70,paddingLeft:15}}),ue=function(e){var t=e.toolbarIcon,a=e.children,c=me(),o=Object(n.useContext)(le);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{className:c.appBar},r.a.createElement(oe.a,{disableGutters:!0,className:c.toolbar},t,r.a.createElement(te.a,{variant:"h5"},"Food time"),r.a.createElement(ie.a,{alt:"Profile picture",src:o.imageUrl,className:c.avatar}))),r.a.createElement(oe.a,{className:c.toolbar}),a)},se=a(100),de=a(47);function fe(){var e=Object(f.a)(["\n  query getEntries($spaceId: String!) {\n    entries(spaceId: $spaceId) {\n      id\n      time\n      extra_food\n      spaceId\n      type  \n    }\n  }\n"]);return fe=function(){return e},e}var pe=E()(fe());function Ee(){var e=Object(f.a)(["\n  query getEntry($id: String!) {\n    entry(id: $id) {\n      id\n      time\n      extra_food\n      spaceId\n      type \n    }\n  }\n"]);return Ee=function(){return e},e}var be=E()(Ee());function ge(){var e=Object(f.a)(["\n  mutation UpdateEntry($id: String!, $time: Int, $extra_food: Int) {\n    updateEntry(id: $id, time: $time, extra_food: $extra_food) {\n      id\n      time\n      extra_food\n      type  \n    }\n  }\n"]);return ge=function(){return e},e}var ve=E()(ge());function he(){var e=Object(f.a)(["\n  mutation RemoveEntry($id: String!) {\n    removeEntry(id: $id) {\n      message\n      removedId\n    }\n  }\n"]);return he=function(){return e},e}var ye=E()(he());function Oe(){var e=Object(f.a)(["\n  query getSpaces {\n    spaces {\n      id\n      display_name\n    }\n  }\n"]);return Oe=function(){return e},e}var je=E()(Oe());function ke(){var e=Object(f.a)(["\n  mutation CreateEntry($spaceId: String!, $time: Int!) {\n    createEntry(spaceId: $spaceId, time: $time) {\n      id\n      time\n      extra_food\n    }\n  }\n"]);return ke=function(){return e},e}var we=E()(ke()),xe=Object(I.a)(function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),zIndex:2},listWrapper:{marginTop:e.spacing(2)}}});var Ne=function(e){var t=e.match,a=(e.profile,xe()),n=t.params.id,c=Object(b.a)(pe,{variables:{spaceId:n}}),o=c.loading,l=c.data,m=c.error,u=!o&&!m,f=Object(g.a)(we,{refetchQueries:["getEntries"]}),p=Object(i.a)(f,2),E=p[0],v=p[1],I=v.loading,_=v.error,C=u&&l.entries.slice().sort(function(e,t){return t.time-e.time}),S=u&&C.reverse().reduce(function(e,t){if(e.length>0){var a=e[e.length-1];return[].concat(Object(d.a)(e),[Object(s.a)({},t,{meantime:P(new Date(1e3*t.time),new Date(1e3*a.time))})])}return[Object(s.a)({},t,{meantime:null})]},[]).reverse();if(S.length>0){var $=S[0],z=new Date(1e3*$.time),T=z.getHours(),F=T>=21||T<3?210:150;S.unshift({id:"future",time:Math.round(Object(de.a)(z,F)/1e3),extra_food:0,meantime:null,isSuggested:!0})}var R=S&&S.reduce(function(e,t){var a=Object(se.a)(new Date(1e3*t.time)).getTime();return e[a]=e[a]||[],e[a].push(t),e},{});return r.a.createElement(ue,null,(m||_)&&r.a.createElement(D,{message:m||_}),r.a.createElement(O.a,{className:a.listWrapper,maxWidth:"sm"},r.a.createElement(j.a,{variant:"extended",color:"primary","aria-label":"delete",className:a.fab,onClick:function(){return E({variables:{time:Math.round(Date.now()/1e3),spaceId:n}})},disabled:I},r.a.createElement(h.a,{className:a.extendedIcon}),"New feeding"),!o&&l&&l.entries.length>0&&r.a.createElement(re,{lastFeedingTime:1e3*S[1].time,nextFeedingTime:1e3*S[0].time}),!o&&!m&&r.a.createElement(y.a,null,!o&&l&&l.entries.length>0&&r.a.createElement(Y,{groupedEntries:R}),!o&&l&&0===l.entries.length&&r.a.createElement(k.a,null,r.a.createElement(w.a,null,r.a.createElement(x.a,{primary:"Click the button to start measuring intervals"})))),o&&r.a.createElement(N.a,null)))};var Ie=function(e){var t=e.history,a=Object(b.a)(je),n=a.loading,c=a.data;return a.error,r.a.createElement(O.a,{maxWidth:"sm"},n&&r.a.createElement(N.a,null),!n&&r.a.createElement(y.a,null,r.a.createElement(k.a,null,c.spaces.map(function(e){return r.a.createElement(w.a,{key:e.id,onClick:function(){return a=e.id,void t.push("/space/".concat(a));var a}},r.a.createElement(x.a,null,e.display_name))}))))},_e=a(101),Ce=Object(I.a)(function(e){return{root:{position:"relative",minHeight:40},loader:{position:"absolute",backgroundColor:"white",top:-3,bottom:-5,left:0,right:0,zIndex:1}}}),Se=function(e){var t=e.onLogin,a=Ce(),c=function(e){t(e)},o=Object(n.useState)(!0),l=Object(i.a)(o,2),m=l[0],u=l[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){u(!1)},1500);return function(){return clearTimeout(e)}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"}),r.a.createElement("div",{className:a.root},m&&r.a.createElement("div",{className:a.loader},r.a.createElement(N.a,null)),r.a.createElement(_e.GoogleLogin,{clientId:"299114443733-g59vv11262camtp97hiv99sjh0qr3b9i.apps.googleusercontent.com",buttonText:"Login",onSuccess:c,onFailure:c,isSignedIn:!0,cookiePolicy:"single_host_origin"})))},De=a(105),$e=a(104),ze=a(67),Te=a(66),Fe=a(103),Re=a(187),Ae=a(191),Me=a(188),Be=a(68),Le=a.n(Be),We=a(102),qe=a.n(We),He=a(193);function Ge(e){var t=null,a=!1;return function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a?t=function(){return e.apply(void 0,r)}:function e(n){a=!0,n().then(function(){if(a=!1,null!=t){var n=t;t=null,e(n)}})}(function(){return e.apply(void 0,r)})}}var Je=Object(I.a)(function(e){return Object(He.a)({root:{padding:e.spacing(3,5)}})});var Pe=function(e){var t=e.match.params.id,a=Object(b.a)(be,{variables:{id:t}}),c=a.loading,o=a.data,d=o&&o.entry.spaceId,f=Object(g.a)(ye,{variables:{id:t},update:function(e,t){var a=t.data.removeEntry,n=null;try{n=e.readQuery({query:pe,variables:{spaceId:d}})}catch(r){}n&&e.writeQuery({query:pe,variables:{spaceId:d},data:{entries:n.entries.filter(function(e){return e.id!==a.removedId})}})}}),p=Object(i.a)(f,2),E=p[0],v=p[1].data,k=Object(n.useState)(null),w=Object(i.a)(k,2),x=w[0],I=w[1],_=Object(n.useState)(null),C=Object(i.a)(_,2),S=C[0],D=C[1],$=Object(u.b)(),z=Object(n.useCallback)(Ge(function(e){return $.mutate({mutation:ve,variables:Object(s.a)({id:t},e)})}),[$,t]);null!==x||c||I(new Date(1e3*o.entry.time)),null!==S||c||D(o.entry.extra_food);var T=function(e){I(e),z({time:Math.round(e.getTime()/1e3)})},R=Je();if(v)return r.a.createElement(m.a,{to:"/space/".concat(d)});var A,M=r.a.createElement(F.a,{edge:"start",color:"inherit",component:function(e){return r.a.createElement(l.b,Object.assign({},e,{to:"/space/".concat(d)}))}},r.a.createElement(qe.a,null));return r.a.createElement(ue,{toolbarIcon:M},r.a.createElement("header",{className:"App-header"},!c&&r.a.createElement(te.a,{variant:"h5"},J(x)," ",(A=x,Object(q.a)(new Date(A),"d MMM, yyyy")))),r.a.createElement(O.a,{maxWidth:"sm"},c?r.a.createElement(N.a,null):r.a.createElement(Re.a,{container:!0,spacing:2,direction:"row",justify:"center"},r.a.createElement(Re.a,{item:!0,xs:12,md:4},r.a.createElement(y.a,{className:R.root},r.a.createElement(te.a,{paragraph:!0},"Day"),r.a.createElement(j.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return T(Object(Te.a)(x,1))}},r.a.createElement(h.a,null)),r.a.createElement(j.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return T(Object(Fe.a)(x,1))}},r.a.createElement(Le.a,null)))),r.a.createElement(Re.a,{item:!0,xs:12,md:4},r.a.createElement(y.a,{className:R.root},r.a.createElement(te.a,{paragraph:!0},"Hours"),r.a.createElement(j.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return T(Object(ze.a)(x,1))}},r.a.createElement(h.a,null)),r.a.createElement(j.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return T(Object($e.a)(x,1))}},r.a.createElement(Le.a,null)))),r.a.createElement(Re.a,{item:!0,xs:12,md:4},r.a.createElement(y.a,{className:R.root},r.a.createElement(te.a,{paragraph:!0},"Minutes"),r.a.createElement(j.a,{color:"primary","aria-label":"Add",size:"small",onClick:function(){return T(Object(de.a)(x,5))}},r.a.createElement(h.a,null)),r.a.createElement(j.a,{color:"primary","aria-label":"Remove",size:"small",onClick:function(){return T(Object(De.a)(x,5))}},r.a.createElement(Le.a,null)))),r.a.createElement(Re.a,{item:!0,xs:12,md:12},r.a.createElement(y.a,{className:R.root},r.a.createElement(te.a,{paragraph:!0},"Extra food - ",S,"ml"),r.a.createElement(Ae.a,{defaultValue:S,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:5,min:0,max:150,onChange:function(e,t){return function(e){D(e),z({extra_food:e})}(t)}}))),r.a.createElement(Re.a,{item:!0,xs:12,md:12},r.a.createElement(y.a,{className:R.root},r.a.createElement(te.a,{paragraph:!0},"Danger zone"),r.a.createElement(Me.a,{variant:"contained",color:"secondary",onClick:E},"Delete"))))))},Qe=a(189),Ue=Object(I.a)(function(e){return Object(He.a)({root:{padding:e.spacing(5,2)}})}),Ke=function(){var e=Ue();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"App-header"},"ERROR 404"),r.a.createElement(O.a,{className:e.root,maxWidth:"sm"},r.a.createElement(te.a,{variant:"h5",paragraph:!0},"NOT FOUND"),r.a.createElement(te.a,{variant:"body"},"Go back to the ",r.a.createElement(Qe.a,{to:"/",component:l.b},"homepage"))))},Ve=a(46),Xe=a(109),Ye=a(107),Ze=a(106);function et(e){var t=Object(Xe.a)({uri:"https://papi.ertrzyiks.me/food-time"}),a=Object(Ze.a)(function(t,a){var n=a.headers;return{headers:Object(s.a)({},n,{authorization:"Bearer ".concat(e())})}});return new Ve.a({cache:new Ye.a({cacheRedirects:{Query:{entry:function(e,t,a){return(0,a.getCacheKey)({__typename:"Entry",id:t.id})}}}}),link:a.concat(t)})}a(145);var tt=function(e){var t=e.match,a=e.write,r=e.children,c=t.params.id;return Object(n.useEffect)(function(){a(c)},[a,c]),r};var at=function(e){var t=e.storage,a=t.read,c=t.write,o=a("food-time-space-id"),s=Object(n.useState)(null),d=Object(i.a)(s,2),f=d[0],p=d[1];return Object(n.useEffect)(function(){var e=setInterval(function(){if(f)return f.reloadAuthResponse().then(function(e){c("food-time-token-id",e.id_token)})},3e5);return function(){return clearInterval(e)}},[c,f]),r.a.createElement(le.Provider,{value:f&&f.profileObj},r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(m.d,null,f?r.a.createElement(u.a,{client:et(function(){return a("food-time-token-id")})},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/select",render:function(e){return r.a.createElement(Ie,e)}}),r.a.createElement(m.b,{path:"/space/:id",render:function(e){return r.a.createElement(tt,{write:function(e){return c("food-time-space-id",e)},match:e.match},r.a.createElement(Ne,Object.assign({},e,{profile:f.profileObj})))}}),r.a.createElement(m.b,{path:"/edit/:id",render:function(e){return r.a.createElement(Pe,Object.assign({profile:f.profileObj},e))}}),r.a.createElement(m.b,{exact:!0,path:"/"},o?r.a.createElement(m.a,{to:"/space/".concat(o)}):r.a.createElement(m.a,{to:"/select"})))):r.a.createElement(m.b,{path:"/",render:function(e){return r.a.createElement(Se,Object.assign({},e,{onLogin:function(e){c("food-time-token-id",e.tokenId),p(e)}}))}}),r.a.createElement(m.b,{component:Ke})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(at,{storage:{read:function(e){return JSON.parse(window.localStorage.getItem(e))},write:function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))}}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.21f95682.chunk.js.map