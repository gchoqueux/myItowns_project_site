"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itowns_widgets",[],e):"object"==typeof exports?exports.itowns_widgets=e():t.itowns_widgets=e()}(self,(function(){return(self.webpackChunk_name_=self.webpackChunk_name_||[]).push([[318],{75462:(t,e,o)=>{o.r(e),o.d(e,{Minimap:()=>O,Navigation:()=>D,Scale:()=>W,Searchbar:()=>$});var n=o(15671),i=o(43144),a=o(97326),r=o(79340),c=o(82963),s=o(61120),l=o(13092),d=o(86033),u=o(41933);function m(t,e,o){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,o)}var p=new WeakMap,f=function(){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;(0,n.Z)(this,t),m(this,p,{writable:!0,value:void 0}),this.parentElement=o.parentElement||e.domElement,this.position=o.position||i.position,["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right"].includes(this.position)||(console.warn("'position' optional parameter for 'Widget' constructor is not a valid option. "+"It will be set to '".concat(i.position,"'.")),this.position=i.position),this.domElement=document.createElement("div"),this.parentElement.appendChild(this.domElement),this.domElement.style.width="".concat(o.width||o.size||i.width,"px"),this.domElement.style.height="".concat(o.height||o.size||i.height,"px");var a=this.position.split("-");if(this.domElement.classList.add("".concat(a[0],"-widget")),a[1])this.domElement.classList.add("".concat(a[1],"-widget"));else switch(a[0]){case"top":case"bottom":this.domElement.style.left="calc(50% - ".concat(this.domElement.offsetWidth/2,"px)");break;case"left":case"right":this.domElement.style.top="calc(50% - ".concat(this.domElement.offsetHeight/2,"px)")}o.translate&&(this.domElement.style.transform="translate(".concat(o.translate.x||0,"px, ").concat(o.translate.y||0,"px)")),this.domElement.addEventListener("pointerdown",(function(t){t.stopPropagation()})),this.domElement.addEventListener("mousedown",(function(t){t.stopPropagation()}))}return(0,i.Z)(t,[{key:"show",value:function(){this.domElement.style.display=(0,d.Z)(this,p)}},{key:"hide",value:function(){(0,l.Z)(this,p,window.getComputedStyle(this.domElement).display),this.domElement.style.display="none"}}]),t}();const h=f;function v(t,e){g(t,e),e.add(t)}function w(t,e,o){g(t,e),e.set(t,o)}function g(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function E(t,e,o){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return o}var y={displayCompass:!0,display3DToggle:!0,displayZoomIn:!0,displayZoomOut:!0,animationDuration:500,position:"bottom-left",direction:"column"},Z={id:"compass",content:"",info:"Rotate the camera to face North",parentId:"widgets"},b={id:"3d-button",content:"3D",info:"Tilt the camera"},x={id:"zoom-in-button",content:'<span class="widget-zoom-button-logo"></span>',info:"Zoom in",parentId:"zoom-button-bar"},L={id:"zoom-out-button",content:'<span id="zoom-out-logo" class="widget-zoom-button-logo"></span>',info:"Zoom out",parentId:"zoom-button-bar"},S=new WeakMap,z=new WeakSet,C=new WeakSet,R=function(t){(0,r.Z)(p,t);var e,o,m=(e=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,s.Z)(e);if(o){var i=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)});function p(t){var e,o,i,r,c,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,n.Z)(this,p),!t.isGlobeView)throw new Error("'Navigation' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");return["top","bottom","left","right"].includes(s.position)&&(console.warn("'position' optional parameter for 'Navigation' is not a valid option. "+"It will be set to '".concat(y.position,"'.")),s.position=y.position),c=m.call(this,t,s,y),v((0,a.Z)(c),C),v((0,a.Z)(c),z),w((0,a.Z)(c),S,{writable:!0,value:void 0}),(0,l.Z)((0,a.Z)(c),S,t),c.direction=s.direction||y.direction,["column","row"].includes(c.direction)||(console.warn("'direction' optional parameter for 'Navigation' constructor is not a valid option. "+"It will be set to '".concat(y.direction,"'.")),c.direction=y.direction),c.animationDuration=void 0===s.animationDuration?y.animationDuration:s.animationDuration,c.domElement.id="widgets-navigation",c.domElement.classList.add("".concat(c.direction,"-widget")),(null!==(e=s.displayCompass)&&void 0!==e?e:y.displayCompass)&&(c.compass=E((0,a.Z)(c),C,T).call((0,a.Z)(c),Z,(function(){E((0,a.Z)(c),z,M).call((0,a.Z)(c),{heading:0,tilt:89.5})})),t.addEventListener(u.b.CAMERA_MOVED,(function(t){c.compass.style.transform="rotate(".concat(-t.heading,"deg)")}))),(null!==(o=s.display3DToggle)&&void 0!==o?o:y.display3DToggle)&&(c.toggle3D=E((0,a.Z)(c),C,T).call((0,a.Z)(c),b,(function(){E((0,a.Z)(c),z,M).call((0,a.Z)(c),{tilt:(0,d.Z)((0,a.Z)(c),S).controls.getTilt()<89?89.5:40})})),t.addEventListener(u.b.CAMERA_MOVED,(function(t){c.toggle3D.innerHTML=t.tilt<89?"2D":"3D"}))),(null!==(i=s.displayZoomIn)&&void 0!==i?i:y.displayZoomIn)&&(c.zoomIn=E((0,a.Z)(c),C,T).call((0,a.Z)(c),x,(function(){E((0,a.Z)(c),z,M).call((0,a.Z)(c),{zoom:Math.min(20,(0,d.Z)((0,a.Z)(c),S).controls.getZoom()+1)})}))),(null!==(r=s.displayZoomOut)&&void 0!==r?r:y.displayZoomOut)&&(c.zoomOut=E((0,a.Z)(c),C,T).call((0,a.Z)(c),L,(function(){E((0,a.Z)(c),z,M).call((0,a.Z)(c),{zoom:Math.max(3,(0,d.Z)((0,a.Z)(c),S).controls.getZoom()-1)})}))),c}return(0,i.Z)(p,[{key:"addButton",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4?arguments[4]:void 0,r=document.getElementById(a);r||(r=this.addButtonBar(a));var c=document.createElement("button");return c.className="widget-button",c.id=t,c.innerHTML=o,c.title=n,c.onclick=i,r.appendChild(c),c.tabIndex=-1,window.addEventListener("pointerup",(function(){document.activeElement===c&&(0,d.Z)(e,S).domElement.focus()})),c}},{key:"addButtonBar",value:function(t){var e=document.createElement("div");return e.className="widget-button-bar",t&&(e.id=t),this.domElement.appendChild(e),e}}]),p}(h);function M(t){return t.time=this.animationDuration,(0,d.Z)(this,S).controls.lookAtCoordinate(t)}function T(t,e){return this.addButton(t.id,t.content,t.info,e,t.parentId)}const D=R;var k=o(60145),I=o(49469),A=o(48682),P=o(800);var B={minScale:2e-6,maxScale:2e-9,zoomRatio:1/30,width:150,height:150,position:"bottom-left"},N=function(t){(0,r.Z)(l,t);var e,o,a=(e=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,s.Z)(e);if(o){var i=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)});function l(t,e){var o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,n.Z)(this,l),!t.isGlobeView)throw new Error("'Minimap' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");if(!e.isColorLayer)throw new Error("'layer' parameter form 'Minimap' constructor should be a 'ColorLayer'.");if((o=a.call(this,t,i,B)).minScale=i.minScale||B.minScale,o.maxScale=i.maxScale||B.maxScale,o.zoomRatio=i.zoomRatio||B.zoomRatio,o.domElement.id="widgets-minimap",i.cursor){var r=document.createElement("div");r.id="cursor-wrapper",o.domElement.appendChild(r),"string"==typeof i.cursor?r.innerHTML=i.cursor:i.cursor instanceof HTMLElement&&r.appendChild(i.cursor)}o.view=new A.Z(o.domElement,e.source.extent,{camera:{type:P.P.ORTHOGRAPHIC},placement:e.source.extent,noControls:!0,maxSubdivisionLevel:t.tileLayer.maxSubdivisionLevel}),o.view.addLayer(e),t.domElement.focus(),o.domElement.addEventListener("pointerdown",(function(t){t.preventDefault()}));var c=o.view.camera.camera3D,s=o.view.getScale(i.pitch),d=c.zoom*o.maxScale/s,u=c.zoom*o.minScale/s,m=new k.Z(t.referenceCrs),p=new k.Z(o.view.referenceCrs),f=t.controls.getCameraTargetPosition();return t.addFrameRequester(I.Ao.AFTER_RENDER,(function(){var e=t.camera.camera3D.position.distanceTo(f),n=t.getScaleFromDistance(i.pitch,e);c.zoom=o.zoomRatio*u*n/o.minScale,c.zoom=Math.min(Math.max(c.zoom,d),u),c.updateProjectionMatrix(),m.setFromVector3(t.controls.getCameraTargetPosition()),m.as(o.view.referenceCrs,p),c.position.x=p.x,c.position.y=p.y,c.updateMatrixWorld(!0),o.view.notifyChange(c)})),o}return(0,i.Z)(l)}(h);const O=N;var V=o(11925),G=o(91742),H=o(44450);var _={width:200,height:30,position:"bottom-left"},j=function(t){(0,r.Z)(l,t);var e,o,a=(e=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,s.Z)(e);if(o){var i=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)});function l(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.Z)(this,l),(e=a.call(this,t,o,_)).domElement.id="widgets-scale",e.view=t,e.domElement.innerHTML="Scale",e.width=o.width||_.width,e.view.isGlobeView?(e.view.addEventListener(G.b.GLOBE_INITIALIZED,(function(){e.update()})),e.view.controls.addEventListener(V.Q.RANGE_CHANGED,(function(){e.update()}))):e.view.isPlanarView?(e.view.addEventListener(u.b.INITIALIZED,(function(){e.update()})),e.view.addEventListener(H.uZ.MOVED,(function(){e.update()}))):console.warn("The 'view' linked to scale widget is neither a 'GlobeView' nor a 'PlanarView'. The scale wont automatically update. You can implement its update automation using 'Scale.update' method."),e}return(0,i.Z)(l,[{key:"addEventListeners",value:function(){}},{key:"update",value:function(){var t=Math.round(this.view.getPixelsToMeters(this.width)),e=Math.pow(10,t.toString().length-1);t=Math.round(t/e)*e;var o=this.view.getMetersToPixels(t),n="m";t>=1e3&&(t/=1e3,n="km"),this.domElement.innerHTML="".concat(t," ").concat(n),this.domElement.style.width="".concat(o,"px")}}]),l}(h);const W=j;var F=o(33347);function U(t,e,o){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,o)}var q={width:300,height:38,position:"top",maxSuggestionNumber:10,fontSize:16,placeholder:"Search location"};function Q(t,e){var o;return t?(Y(t),e>=t.length?e=0:e<0&&(e=t.length-1),null===(o=t[e])||void 0===o||o.classList.add("active"),e):e}function Y(t){for(var e=0;e<t.length;e++)t[e].classList.remove("active")}function J(t){for(;t.children.length>1;)t.removeChild(t.lastChild)}var K=new WeakMap,X=function(t){(0,r.Z)(m,t);var e,o,u=(e=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=(0,s.Z)(e);if(o){var i=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return(0,c.Z)(this,t)});function m(t,e){var o,i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,n.Z)(this,m),i=u.call(this,t,r,q),U((0,a.Z)(i),K,{writable:!0,value:void 0}),!e||!e.url||!e.parser||"function"!=typeof e.parser)throw new Error("'geocodingOptions' parameter for 'Searchbar' constructor is not a valid option. Please refer to the documentation.");(0,l.Z)((0,a.Z)(i),K,null!==(o=e.onSelected)&&void 0!==o?o:function(){}),i.domElement.id="widgets-searchbar",i.domElement.style.height="auto";var c=document.createElement("form");c.setAttribute("autocomplete","off"),c.id="searchbar-autocompletion-form",i.domElement.appendChild(c);var s,p=document.createElement("input");p.setAttribute("type","text"),p.setAttribute("name","mySearch"),p.setAttribute("placeholder",r.placeholder||q.placeholder),p.style.height="".concat(r.height||r.size||q.height,"px"),p.style.fontSize="".concat(r.fontSize||q.fontSize,"px"),c.appendChild(p),p.addEventListener("input",(function(){var t=p.value;if(J(c),s=-1,!t)return!1;e.url.searchParams.set("text",t),F.Z.json(e.url).then((function(o){var n=e.parser(o),l=0;n.forEach((function(e,o){if(l!==Math.min(n.size,r.maxSuggestionNumber||q.maxSuggestionNumber)){var u=l;l++;var m=o.toUpperCase().indexOf(t.toUpperCase());if(m>-1){var f=document.createElement("div");f.style.minHeight=p.style.height,f.style.fontSize="".concat(r.fontSize||q.fontSize,"px");var h=o.slice(0,m),v=o.slice(m,m+t.length),w=o.slice(m+t.length,o.length);f.innerHTML="<p>".concat(h,"<strong>").concat(v,"</strong>").concat(w,"</p>"),f.setAttribute("location",o),c.appendChild(f),f.addEventListener("mouseover",(function(){Y(c.children),s=u,f.classList.add("active")})),f.addEventListener("click",(function(){(0,d.Z)((0,a.Z)(i),K).call((0,a.Z)(i),e),p.value=f.getAttribute("location"),J(c)}))}}}))}))}));var f=(r.position||q.position).includes("top")?1:-1;return p.addEventListener("keydown",(function(e){e.stopPropagation();var o=c.getElementsByTagName("div");switch(e.code){case"Escape":J(c),p.value="",t.domElement.focus();break;case"ArrowDown":e.preventDefault(),s=Q(o,s+f);break;case"ArrowUp":e.preventDefault(),s=Q(o,s-f);break;case"Enter":e.preventDefault(),o[Math.max(s,0)]&&(o[Math.max(s,0)].click(),t.domElement.focus())}})),p.addEventListener("focus",(function(){c.classList.add("focus")})),p.addEventListener("blur",(function(){c.classList.remove("focus"),Y(c.children)})),c.addEventListener("mouseleave",(function(){Y(c.children),s=-1})),i}return(0,i.Z)(m)}(h);const $=X}},t=>(75462,t(t.s=75462))])}));
//# sourceMappingURL=itowns_widgets.js.map