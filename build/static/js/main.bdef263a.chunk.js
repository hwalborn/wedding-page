(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),c=a.n(l),r=a(135),i=a(142),s=a(13),u=a(14),d=a(17),m=a(15),h=a(16),b=a(140),p=a(54),f=a.n(p),E=a(136),v=a(137),g=a(138),j=function(){return o.a.createElement("div",null,o.a.createElement(E.a,{className:"header"},o.a.createElement(v.a,{md:12},o.a.createElement(g.a,{id:"header-title",to:"/"},"Holt & Sara"))))},k=(a(71),a(56)),y="AIzaSyDp3E9ot4dN7F-h8r_Ic6YCAv0P3EQ-eS4",C="AIzaSyBckhciDqrEdUf_2foVDT3S0xaDdUpk848",O=function(e,t){return new Promise(function(a,n){fetch("https://sheets.googleapis.com/v4/spreadsheets/14OsbtSgGtA911j16Y_QjX6P_etYEJ4sahge0iQn8mcw/values:batchGet?key=".concat(y,"&ranges=").concat(e,"&majorDimension=ROWS")).then(function(e){e.json().then(function(e){var n={};void 0===t||null===t?e.valueRanges[0].values.forEach(function(e){n[e[0]]=[e[1],e[2]]}):n=t(e),a(n)})})})},N=(a(77),function(e){var t=e.title,a=e.desc;return o.a.createElement(v.a,{className:"about-container",md:{span:8,offset:2}},o.a.createElement("div",{className:"inner-about-container"},o.a.createElement("div",{className:"about-title-container"},o.a.createElement("h5",{className:"about-title"},t)),o.a.createElement("div",{className:"about-description-container"},o.a.createElement("p",{className:"about-description",dangerouslySetInnerHTML:{__html:a}}))))}),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={sheetLoaded:!1,aboutValues:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.sheetLoaded)O("sheet1").then(function(t){e.setState({sheetLoaded:!0,aboutValues:t})})}},{key:"render",value:function(){var e,t=this,n=(this.state.sheetLoaded&&Object.keys(this.state.aboutValues).map(function(e,a){return o.a.createElement(N,{key:a,title:t.state.aboutValues[e][1],desc:t.state.aboutValues[e][0]})}),(e=a(80)).keys().map(e).map(function(e,t){var a=e.split("/")[e.split("/").length-1].split(".")[0];return o.a.createElement("div",null,o.a.createElement("img",{src:e,key:t}),o.a.createElement("p",{className:"legend"},a))}));return o.a.createElement("div",null,o.a.createElement(E.a,null,o.a.createElement(v.a,{md:4},o.a.createElement("ul",null,o.a.createElement("li",{className:"link-item"},o.a.createElement(g.a,{"data-aos":"fade-right",to:"/aboutTheCouple",id:"drop-link"},"About the Couple")),o.a.createElement("li",{className:"link-item"},o.a.createElement(g.a,{"data-aos":"fade-right",to:"/bethlehem",id:"drop-link"},"About Bethlehem")),o.a.createElement("li",{className:"link-item"},o.a.createElement(g.a,{"data-aos":"fade-right",to:"/registry",id:"drop-link"},"Registry")))),o.a.createElement(v.a,{md:8},o.a.createElement(k.Carousel,{infiniteLoop:!0,autoPlay:!0},n))))}}]),t}(o.a.Component),w=a(19),V=a(57),L=a.n(V),D=(a(104),function(e){var t=e.text,a=e.handleClick;return o.a.createElement("div",{style:{color:"white",background:"grey",padding:"5px 3px",display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"10%"},onClick:a},t)}),I=a(141),S=a(143),A=function(e){var t=e.modalInfo,a=e.showModal,n=e.handleClose;return o.a.createElement("div",null,o.a.createElement(I.a,{show:a,onHide:n,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(I.a.Header,{closeButton:!0},o.a.createElement(I.a.Title,null,t.title)),o.a.createElement(I.a.Body,null,t.description),o.a.createElement(I.a.Footer,null,o.a.createElement(S.a,{variant:"secondary",onClick:n},"Close"))))},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).stateDataCallback=function(e){var t={};return e.valueRanges[0].values.forEach(function(e){t[e[2]]=[e[0],e[1],e[3]]}),t},a.handleClick=function(e){var t=e.target.innerText,n=a.state.aboutValues[t];a.setState({showModal:!0,modalInfo:{title:t,description:n[2]}})},a.handleClose=function(){a.setState({showModal:!1,modalInfo:{}})},a.mapsDefaultInfo={center:{lat:40.6259,lng:-75.3705},zoom:13},a.state={sheetLoaded:!1,aboutValues:{},showModal:!1,modalInfo:{}},a.handleClick=a.handleClick.bind(Object(w.a)(Object(w.a)(a))),a.handleClose=a.handleClose.bind(Object(w.a)(Object(w.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.sheetLoaded)O("sheet5",this.stateDataCallback).then(function(t){e.setState({sheetLoaded:!0,aboutValues:t})})}},{key:"render",value:function(){var e=this,t=this.state.sheetLoaded?Object.keys(this.state.aboutValues).map(function(t,a){return o.a.createElement(D,{key:a,lat:e.state.aboutValues[t][0],lng:e.state.aboutValues[t][1],text:t,handleClick:e.handleClick})}):null;return o.a.createElement("div",{id:"about-bethlehem"},o.a.createElement("div",{id:"map-container"},o.a.createElement(L.a,{defaultCenter:this.mapsDefaultInfo.center,defaultZoom:this.mapsDefaultInfo.zoom,bootstrapURLKeys:{key:C}},t),o.a.createElement(A,{modalInfo:this.state.modalInfo,showModal:this.state.showModal,handleClose:this.handleClose})))}}]),t}(o.a.Component),T=a(139),_=(a(128),a(30)),W=a.n(_),H=a(29),P=a.n(H),R=function(e){var t=e.title,a=e.desc,n=e.fade,l=e.width,c=e.anchorPlacement,r=c||null;return o.a.createElement(v.a,{"data-aos":n,className:"about-container",md:l,"data-aos-anchor-placement":r},o.a.createElement("div",{className:"inner-about-container"},o.a.createElement("div",{className:"about-title-container"},o.a.createElement("h5",{className:"about-title"},t)),o.a.createElement("div",{className:"about-description-container"},o.a.createElement("p",{className:"about-description",dangerouslySetInnerHTML:{__html:a}}))))},z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={sheetLoaded:!1,aboutValues:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.sheetLoaded)O("sheet1").then(function(t){e.setState({sheetLoaded:!0,aboutValues:t})})}},{key:"render",value:function(){return o.a.createElement("div",{id:"about-the-couple"},this.state.sheetLoaded?o.a.createElement(T.a,{id:"about-couple-container"},o.a.createElement(E.a,{id:"couple-about"},o.a.createElement(R,{title:this.state.aboutValues.AboutCouple[1],desc:this.state.aboutValues.AboutCouple[0],fade:"zoom-out-up",width:12})),o.a.createElement(E.a,{className:"about-container"},o.a.createElement(R,{title:this.state.aboutValues.AboutSara[1],desc:this.state.aboutValues.AboutSara[0],fade:"fade-right",width:6,anchorPlacement:"bottom-bottom"}),o.a.createElement(v.a,{className:"about-container","data-aos":"fade-left",md:6,"data-aos-anchor-placement":"bottom-bottom"},o.a.createElement("img",{className:"about-image",src:W.a}))),o.a.createElement(E.a,{id:"bottom-row",className:"about-container"},o.a.createElement(v.a,{className:"about-container","data-aos":"fade-right",md:6,"data-aos-anchor-placement":"bottom-bottom"},o.a.createElement("img",{className:"about-image",src:P.a})),o.a.createElement(R,{title:this.state.aboutValues.AboutHolt[1],desc:this.state.aboutValues.AboutHolt[0],fade:"fade-left",width:6,anchorPlacement:"bottom-bottom"}))):null)}}]),t}(o.a.Component),B=function(){return o.a.createElement("div",null,o.a.createElement("h5",null,"Registry coming soon"))},U=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){f.a.init({duration:2e3})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null),o.a.createElement("div",null,o.a.createElement(r.a,{exact:!0,path:"/",component:x}),o.a.createElement(r.a,{exact:!0,path:"/bethlehem",component:M}),o.a.createElement(r.a,{exact:!0,path:"/aboutTheCouple",component:z}),o.a.createElement(r.a,{exact:!0,path:"/registry",component:B})))}}]),t}(n.Component),F=Object(b.a)(U);a(131);c.a.render(o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(r.a,{exact:!0,path:"/",component:F}),o.a.createElement(r.a,{exact:!0,path:"/bethlehem",component:F}),o.a.createElement(r.a,{exact:!0,path:"/aboutTheCouple",component:F}),o.a.createElement(r.a,{exact:!0,path:"/registry",component:F}))),document.getElementById("root"))},29:function(e,t,a){e.exports=a.p+"static/media/holt.8a0ce390.jpeg"},30:function(e,t,a){e.exports=a.p+"static/media/sara.17cd371d.jpg"},63:function(e,t,a){e.exports=a(134)},77:function(e,t,a){},80:function(e,t,a){var n={"./Little Deer Isle.jpg":81,"./We're engaged.jpg":82,"./Whale Watching.jpg":83,"./World Trade Center.jpg":84,"./holt.jpeg":29,"./sara.jpg":30};function o(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=l,e.exports=o,o.id=80},81:function(e,t,a){e.exports=a.p+"static/media/Little Deer Isle.b1694ef7.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/We're engaged.d19fb1b4.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/Whale Watching.9e8f2e4c.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/World Trade Center.264d7163.jpg"}},[[63,2,1]]]);
//# sourceMappingURL=main.bdef263a.chunk.js.map