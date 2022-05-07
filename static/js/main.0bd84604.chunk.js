(this["webpackJsonpdiscord-clone-yt"]=this["webpackJsonpdiscord-clone-yt"]||[]).push([[0],{64:function(e,a,n){e.exports=n(92)},69:function(e,a,n){},74:function(e,a,n){},75:function(e,a,n){},76:function(e,a,n){},78:function(e,a,n){},89:function(e,a,n){},90:function(e,a,n){},91:function(e,a,n){},92:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(18),r=n.n(l),s=(n(69),n(11)),i=(n(74),n(29)),o=(n(75),n(76),n(42)),m=n.n(o),u=n(46),d=n.n(u),h=n(47),E=n.n(h),p=n(48),f=n.n(p),v=n(49),b=n.n(v),_=n(50),g=n.n(_);var N=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader__left"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader__hash"},"#"),a)),c.a.createElement("div",{className:"chatHeader__right"},c.a.createElement(m.a,null),c.a.createElement(d.a,null),c.a.createElement(E.a,null),c.a.createElement("div",{className:"chatHeader__search"},c.a.createElement("input",{placeholder:"Search"}),c.a.createElement(f.a,null)),c.a.createElement(b.a,null),c.a.createElement(g.a,null)))},I=n(51),O=n.n(I),S=n(52),j=n.n(S),y=n(53),C=n.n(y),w=n(54),k=n.n(w),z=n(106);n(78);var H=function(e){var a=e.timestamp,n=e.user,t=e.message;return c.a.createElement("div",{className:"message"},c.a.createElement(z.a,{src:n.photo}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n.displayName,c.a.createElement("span",{className:"message__timestamp"},new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("p",null,t)))},D=n(21),B=Object(D.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),x=B.actions.setChannelInfo,A=function(e){return e.app.channelId},G=function(e){return e.app.channelName},J=B.reducer,R=Object(D.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),T=R.actions,L=T.login,M=T.logout,P=function(e){return e.user.user},U=R.reducer,V=n(23),W=n.n(V),F=W.a.initializeApp({apiKey:"AIzaSyCE35OEeTGBw6HsVkGl73xnCY989znJ4Ys",authDomain:"discord-clone-yt.firebaseapp.com",databaseURL:"https://discord-clone-yt.firebaseio.com",projectId:"discord-clone-yt",storageBucket:"discord-clone-yt.appspot.com",messagingSenderId:"1009639771910",appId:"1:1009639771910:web:ded4a3b3f26d44a4489887",measurementId:"G-HJ43RQR7D2"}).firestore(),Y=W.a.auth(),K=new W.a.auth.GoogleAuthProvider,Q=F;var $=function(){var e=Object(s.c)(P),a=Object(s.c)(A),n=Object(s.c)(G),l=Object(t.useState)(""),r=Object(i.a)(l,2),o=r[0],m=r[1],u=Object(t.useState)([]),d=Object(i.a)(u,2),h=d[0],E=d[1];return Object(t.useEffect)((function(){a&&Q.collection("channels").doc(a).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return E(e.docs.map((function(e){return e.data()})))}))}),[a]),c.a.createElement("div",{className:"chat"},c.a.createElement(N,{channelName:n}),c.a.createElement("div",{className:"chat__messages"},h.map((function(e){return c.a.createElement(H,{timestamp:e.timestamp,message:e.message,user:e.user})}))),c.a.createElement("div",{className:"chat__input"},c.a.createElement(O.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{value:o,disabled:!a,onChange:function(e){return m(e.target.value)},placeholder:"Message #".concat(n)}),c.a.createElement("button",{disabled:!a,className:"chat__inputButton",type:"submit",onClick:function(n){n.preventDefault(),Q.collection("channels").doc(a).collection("messages").add({timestamp:W.a.firestore.FieldValue.serverTimestamp(),message:o,user:e}),m("")}},"Send Message")),c.a.createElement("div",{className:"chat__inputIcons"},c.a.createElement(j.a,{fontSize:"large"}),c.a.createElement(C.a,{fontSize:"large"}),c.a.createElement(k.a,{fontSize:"large"}))))},q=(n(89),n(35)),X=n.n(q),Z=n(55),ee=n.n(Z);n(90);var ae=function(e){var a=e.id,n=e.channelName,t=Object(s.b)();return c.a.createElement("div",{className:"sidebarChannel",onClick:function(){return t(x({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarChannel__hash"},"#"),n))},ne=n(56),te=n.n(ne),ce=n(57),le=n.n(ce),re=n(58),se=n.n(re),ie=n(59),oe=n.n(ie),me=n(60),ue=n.n(me),de=n(61),he=n.n(de);var Ee=function(){var e=Object(s.c)(P),a=Object(t.useState)([]),n=Object(i.a)(a,2),l=n[0],r=n[1];return Object(t.useEffect)((function(){Q.collection("channels").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,channel:e.data()}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__top"},c.a.createElement("h3",null,"Clever Programmer"),c.a.createElement(X.a,null)),c.a.createElement("div",{className:"sidebar__channels"},c.a.createElement("div",{className:"sidebar__channelsHeader"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(X.a,null),c.a.createElement("h4",null,"Text Channels")),c.a.createElement(ee.a,{onClick:function(){var e=prompt("Enter a new channel name");e&&Q.collection("channels").add({channelName:e})},className:"sidebar__addChannel"})),c.a.createElement("div",{className:"sidebar__channelsList"},l.map((function(e){var a=e.id,n=e.channel;return c.a.createElement(ae,{key:a,id:a,channelName:n.channelName})})))),c.a.createElement("div",{className:"sidebar__voice"},c.a.createElement(te.a,{className:"sidebar__voiceIcon",fontSize:"large"}),c.a.createElement("div",{className:"sidebar__voiceInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Stream")),c.a.createElement("div",{className:"sidebar__voiceIcons"},c.a.createElement(le.a,null),c.a.createElement(se.a,null))),c.a.createElement("div",{className:"sidebar__profile"},c.a.createElement(z.a,{onClick:function(){return Y.signOut()},src:e.photo}),c.a.createElement("div",{className:"sidebar__profileInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar__profileIcons"},c.a.createElement(oe.a,null),c.a.createElement(ue.a,null),c.a.createElement(he.a,null))))},pe=n(105);n(91);var fe=function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png",alt:""})),c.a.createElement(pe.a,{onClick:function(){Y.signInWithPopup(K).catch((function(e){return alert(e.message)}))}},"Sign In"))};var ve=function(){var e=Object(s.b)(),a=Object(s.c)(P);return Object(t.useEffect)((function(){Y.onAuthStateChanged((function(a){e(a?L({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):M())}))}),[e]),c.a.createElement("div",{className:"app"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(Ee,null),c.a.createElement($,null)):c.a.createElement(fe,null))},be=Object(D.a)({reducer:{user:U,app:J}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:be},c.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.0bd84604.chunk.js.map