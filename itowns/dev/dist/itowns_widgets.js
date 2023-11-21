"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itowns_widgets",[],e):"object"==typeof exports?exports.itowns_widgets=e():t.itowns_widgets=e()}(self,(()=>(self.webpackChunkitowns=self.webpackChunkitowns||[]).push([[318],{81499:(t,e,n)=>{n.r(e),n.d(e,{C3DTilesStyle:()=>J,Minimap:()=>I,Navigation:()=>T,Scale:()=>N,Searchbar:()=>F,Widget:()=>m});var o=n(15671),i=n(43144),a=n(97326),r=n(79340),c=n(82963),l=n(61120),s=n(13092),u=n(86033),d=n(36873);var f=new WeakMap;const m=function(){function t(e){var n,i,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments.length>2?arguments[2]:void 0;(0,o.Z)(this,t),a={writable:!0,value:void 0},function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,i=f),i.set(n,a),this.parentElement=r.parentElement||e.domElement,this.position=r.position||c.position,["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right"].includes(this.position)||(console.warn("'position' optional parameter for 'Widget' constructor is not a valid option. "+"It will be set to '".concat(c.position,"'.")),this.position=c.position),this.domElement=document.createElement("div"),this.parentElement.appendChild(this.domElement),this.domElement.style.width="".concat(r.width||r.size||c.width,"px"),this.domElement.style.height="".concat(r.height||r.size||c.height,"px");var l=this.position.split("-");if(this.domElement.classList.add("".concat(l[0],"-widget")),l[1])this.domElement.classList.add("".concat(l[1],"-widget"));else switch(l[0]){case"top":case"bottom":this.domElement.style.left="calc(50% - ".concat(this.domElement.offsetWidth/2,"px)");break;case"left":case"right":this.domElement.style.top="calc(50% - ".concat(this.domElement.offsetHeight/2,"px)")}r.translate&&(this.domElement.style.transform="translate(".concat(r.translate.x||0,"px, ").concat(r.translate.y||0,"px)")),this.domElement.addEventListener("pointerdown",(function(t){t.stopPropagation()})),this.domElement.addEventListener("mousedown",(function(t){t.stopPropagation()}))}return(0,i.Z)(t,[{key:"show",value:function(){this.domElement.style.display=(0,u.Z)(this,f)}},{key:"hide",value:function(){(0,s.Z)(this,f,window.getComputedStyle(this.domElement).display),this.domElement.style.display="none"}}]),t}();function p(t,e){h(t,e),e.add(t)}function h(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function v(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var y={displayCompass:!0,display3DToggle:!0,displayZoomIn:!0,displayZoomOut:!0,animationDuration:500,position:"bottom-left",direction:"column"},g={id:"compass",content:"",info:"Rotate the camera to face North",parentId:"widgets"},w={id:"3d-button",content:"3D",info:"Tilt the camera"},E={id:"zoom-in-button",content:'<span class="widget-zoom-button-logo"></span>',info:"Zoom in",parentId:"zoom-button-bar"},b={id:"zoom-out-button",content:'<span id="zoom-out-logo" class="widget-zoom-button-logo"></span>',info:"Zoom out",parentId:"zoom-button-bar"},Z=new WeakMap,C=new WeakSet,x=new WeakSet;function L(t){return t.time=this.animationDuration,(0,u.Z)(this,Z).controls.lookAtCoordinate(t)}function S(t,e){return this.addButton(t.id,t.content,t.info,e,t.parentId)}const T=function(t){(0,r.Z)(m,t);var e,n,f=(e=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function m(t){var e,n,i,r,c,l,T,D,R=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,o.Z)(this,m),!t.isGlobeView)throw new Error("'Navigation' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");return["top","bottom","left","right"].includes(R.position)&&(console.warn("'position' optional parameter for 'Navigation' is not a valid option. "+"It will be set to '".concat(y.position,"'.")),R.position=y.position),c=f.call(this,t,R,y),p((0,a.Z)(c),x),p((0,a.Z)(c),C),D={writable:!0,value:void 0},h(l=(0,a.Z)(c),T=Z),T.set(l,D),(0,s.Z)((0,a.Z)(c),Z,t),c.direction=R.direction||y.direction,["column","row"].includes(c.direction)||(console.warn("'direction' optional parameter for 'Navigation' constructor is not a valid option. "+"It will be set to '".concat(y.direction,"'.")),c.direction=y.direction),c.animationDuration=void 0===R.animationDuration?y.animationDuration:R.animationDuration,c.domElement.id="widgets-navigation",c.domElement.classList.add("".concat(c.direction,"-widget")),(null!==(e=R.displayCompass)&&void 0!==e?e:y.displayCompass)&&(c.compass=v((0,a.Z)(c),x,S).call((0,a.Z)(c),g,(function(){v((0,a.Z)(c),C,L).call((0,a.Z)(c),{heading:0,tilt:89.5})})),t.addEventListener(d.b.CAMERA_MOVED,(function(t){c.compass.style.transform="rotate(".concat(-t.heading,"deg)")}))),(null!==(n=R.display3DToggle)&&void 0!==n?n:y.display3DToggle)&&(c.toggle3D=v((0,a.Z)(c),x,S).call((0,a.Z)(c),w,(function(){v((0,a.Z)(c),C,L).call((0,a.Z)(c),{tilt:(0,u.Z)((0,a.Z)(c),Z).controls.getTilt()<89?89.5:40})})),t.addEventListener(d.b.CAMERA_MOVED,(function(t){c.toggle3D.innerHTML=t.tilt<89?"2D":"3D"}))),(null!==(i=R.displayZoomIn)&&void 0!==i?i:y.displayZoomIn)&&(c.zoomIn=v((0,a.Z)(c),x,S).call((0,a.Z)(c),E,(function(){v((0,a.Z)(c),C,L).call((0,a.Z)(c),{zoom:Math.min(20,(0,u.Z)((0,a.Z)(c),Z).controls.getZoom()+1)})}))),(null!==(r=R.displayZoomOut)&&void 0!==r?r:y.displayZoomOut)&&(c.zoomOut=v((0,a.Z)(c),x,S).call((0,a.Z)(c),b,(function(){v((0,a.Z)(c),C,L).call((0,a.Z)(c),{zoom:Math.max(3,(0,u.Z)((0,a.Z)(c),Z).controls.getZoom()-1)})}))),c}return(0,i.Z)(m,[{key:"addButton",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=arguments.length>4?arguments[4]:void 0,r=document.getElementById(a);r||(r=this.addButtonBar(a));var c=document.createElement("button");return c.className="widget-button",c.id=t,c.innerHTML=n,c.title=o,c.onclick=i,r.appendChild(c),c.tabIndex=-1,window.addEventListener("pointerup",(function(){document.activeElement===c&&(0,u.Z)(e,Z).domElement.focus()})),c}},{key:"addButtonBar",value:function(t){var e=document.createElement("div");return e.className="widget-button-bar",t&&(e.id=t),this.domElement.appendChild(e),e}}]),m}(m);var D=n(60145),R=n(49469),M=n(48682),z=n(800);var A={minScale:2e-6,maxScale:2e-9,zoomRatio:1/30,width:150,height:150,position:"bottom-left"};const I=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,o.Z)(this,s),!t.isGlobeView)throw new Error("'Minimap' plugin only supports 'GlobeView'. Therefore, the 'view' parameter must be a 'GlobeView'.");if(!e.isColorLayer)throw new Error("'layer' parameter form 'Minimap' constructor should be a 'ColorLayer'.");if((n=a.call(this,t,i,A)).minScale=i.minScale||A.minScale,n.maxScale=i.maxScale||A.maxScale,n.zoomRatio=i.zoomRatio||A.zoomRatio,n.domElement.id="widgets-minimap",i.cursor){var r=document.createElement("div");r.id="cursor-wrapper",n.domElement.appendChild(r),"string"==typeof i.cursor?r.innerHTML=i.cursor:i.cursor instanceof HTMLElement&&r.appendChild(i.cursor)}n.view=new M.Z(n.domElement,e.source.extent,{camera:{type:z.P.ORTHOGRAPHIC},placement:e.source.extent,noControls:!0,maxSubdivisionLevel:t.tileLayer.maxSubdivisionLevel,disableFocusOnStart:!0}),n.view.addLayer(e),n.domElement.addEventListener("pointerdown",(function(t){t.preventDefault()}));var c=n.view.getScale(i.pitch),l=n.view.camera3D.zoom*n.maxScale/c,u=n.view.camera3D.zoom*n.minScale/c,d=new D.Z(t.referenceCrs),f=new D.Z(n.view.referenceCrs),m=t.controls.getCameraTargetPosition();return t.addFrameRequester(R.Ao.AFTER_RENDER,(function(){var e=t.camera3D.position.distanceTo(m),o=t.getScaleFromDistance(i.pitch,e);n.view.camera3D.zoom=n.zoomRatio*u*o/n.minScale,n.view.camera3D.zoom=Math.min(Math.max(n.view.camera3D.zoom,l),u),n.view.camera3D.updateProjectionMatrix(),d.setFromVector3(t.controls.getCameraTargetPosition()),d.as(n.view.referenceCrs,f),n.view.camera3D.position.x=f.x,n.view.camera3D.position.y=f.y,n.view.camera3D.updateMatrixWorld(!0),n.view.notifyChange(n.view.camera3D)})),n}return(0,i.Z)(s)}(m);var k=n(11925),O=n(91742),P=n(44450);var B={width:200,height:30,position:"bottom-left"};const N=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.Z)(this,s),(e=a.call(this,t,n,B)).domElement.id="widgets-scale",e.view=t,e.domElement.innerHTML="Scale",e.width=n.width||B.width,e.view.isGlobeView?(e.view.addEventListener(O.b.GLOBE_INITIALIZED,(function(){e.update()})),e.view.controls.addEventListener(k.Q.RANGE_CHANGED,(function(){e.update()}))):e.view.isPlanarView?(e.view.addEventListener(d.b.INITIALIZED,(function(){e.update()})),e.view.addEventListener(P.uZ.MOVED,(function(){e.update()}))):console.warn("The 'view' linked to scale widget is neither a 'GlobeView' nor a 'PlanarView'. The scale wont automatically update. You can implement its update automation using 'Scale.update' method."),e}return(0,i.Z)(s,[{key:"addEventListeners",value:function(){}},{key:"update",value:function(){var t=Math.round(this.view.getPixelsToMeters(this.width)),e=Math.pow(10,t.toString().length-1);t=Math.round(t/e)*e;var n=this.view.getMetersToPixels(t),o="m";t>=1e3&&(t/=1e3,o="km"),this.domElement.innerHTML="".concat(t," ").concat(o),this.domElement.style.width="".concat(n,"px")}}]),s}(m);var V=n(33347);var _={width:300,height:38,position:"top",maxSuggestionNumber:10,fontSize:16,placeholder:"Search location"};function G(t,e){var n;return t?(H(t),e>=t.length?e=0:e<0&&(e=t.length-1),null===(n=t[e])||void 0===n||n.classList.add("active"),e):e}function H(t){for(var e=0;e<t.length;e++)t[e].classList.remove("active")}function j(t){for(;t.children.length>1;)t.removeChild(t.lastChild)}var W=new WeakMap;const F=function(t){(0,r.Z)(f,t);var e,n,d=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function f(t,e){var n,i,r,c,l,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,o.Z)(this,f),i=d.call(this,t,m,_),r=(0,a.Z)(i),l={writable:!0,value:void 0},function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(r,c=W),c.set(r,l),!e||!e.url||!e.parser||"function"!=typeof e.parser)throw new Error("'geocodingOptions' parameter for 'Searchbar' constructor is not a valid option. Please refer to the documentation.");(0,s.Z)((0,a.Z)(i),W,null!==(n=e.onSelected)&&void 0!==n?n:function(){}),i.domElement.id="widgets-searchbar",i.domElement.style.height="auto";var p=document.createElement("form");p.setAttribute("autocomplete","off"),p.id="searchbar-autocompletion-form",i.domElement.appendChild(p);var h,v=document.createElement("input");v.setAttribute("type","text"),v.setAttribute("name","mySearch"),v.setAttribute("placeholder",m.placeholder||_.placeholder),v.style.height="".concat(m.height||m.size||_.height,"px"),v.style.fontSize="".concat(m.fontSize||_.fontSize,"px"),p.appendChild(v),v.addEventListener("input",(function(){var t=v.value;if(j(p),h=-1,!t)return!1;e.url.searchParams.set("text",t),V.Z.json(e.url).then((function(n){var o=e.parser(n),r=0;o.forEach((function(e,n){if(r!==Math.min(o.size,m.maxSuggestionNumber||_.maxSuggestionNumber)){var c=r;r++;var l=n.toUpperCase().indexOf(t.toUpperCase());if(l>-1){var s=document.createElement("div");s.style.minHeight=v.style.height,s.style.fontSize="".concat(m.fontSize||_.fontSize,"px");var d=n.slice(0,l),f=n.slice(l,l+t.length),y=n.slice(l+t.length,n.length);s.innerHTML="<p>".concat(d,"<strong>").concat(f,"</strong>").concat(y,"</p>"),s.setAttribute("location",n),p.appendChild(s),s.addEventListener("mouseover",(function(){H(p.children),h=c,s.classList.add("active")})),s.addEventListener("click",(function(){(0,u.Z)((0,a.Z)(i),W).call((0,a.Z)(i),e),v.value=s.getAttribute("location"),j(p)}))}}}))}))}));var y=(m.position||_.position).includes("top")?1:-1;return v.addEventListener("keydown",(function(e){e.stopPropagation();var n=p.getElementsByTagName("div");switch(e.code){case"Escape":j(p),v.value="",t.domElement.focus();break;case"ArrowDown":e.preventDefault(),h=G(n,h+y);break;case"ArrowUp":e.preventDefault(),h=G(n,h-y);break;case"Enter":e.preventDefault(),n[Math.max(h,0)]&&(n[Math.max(h,0)].click(),t.domElement.focus())}})),v.addEventListener("focus",(function(){p.classList.add("focus")})),v.addEventListener("blur",(function(){p.classList.remove("focus"),H(p.children)})),p.addEventListener("mouseleave",(function(){H(p.children),h=-1})),i}return(0,i.Z)(f)}(m);var U=n(70885),X=n(48891),q=n(24266);function Q(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw a}}}}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var $={width:200,position:"top-right"};const J=function(t){(0,r.Z)(s,t);var e,n,a=(e=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,l.Z)(e);if(n){var i=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function s(t,e){var n;(0,o.Z)(this,s),(n=a.call(this,t,e,$)).domElement.onclick=function(t){return t.stopImmediatePropagation()};var i=document.createElement("select");n.domElement.appendChild(i);var r=new Map,c=function(){var t,e=Q(r);try{for(e.s();!(t=e.n()).done;){var n=(0,U.Z)(t.value,2),o=n[0];n[1].hidden=o!==i.selectedOptions[0]}}catch(t){e.e(t)}finally{e.f()}};return i.onchange=c,t.getLayers().filter((function(t){return!0===t.isC3DTilesLayer})).forEach((function(e){var o=document.createElement("option");o.innerText=e.name,i.add(o);var a=document.createElement("div");n.domElement.appendChild(a),r.set(o,a),e.addEventListener(q.y.ON_TILE_CONTENT_LOADED,(function(){for(;a.firstChild;)a.firstChild.remove();var n,o=new Map,i=Q(e.tilesC3DTileFeatures);try{for(i.s();!(n=i.n()).done;){var r,c=Q((0,U.Z)(n.value,2)[1]);try{for(c.s();!(r=c.n()).done;){var l=(0,U.Z)(r.value,2)[1];for(var u in l.getInfo().batchTable){o.has(u)||o.set(u,[]);var d=l.getInfo().batchTable[u];o.get(u).includes(d)||o.get(u).push(d)}}}catch(t){c.e(t)}finally{c.f()}}}catch(t){i.e(t)}finally{i.f()}var f,m=new Map,p=new Map,h=function(n,o,i){var r=document.createElement("input");r.setAttribute("type","color"),a.appendChild(r),r.onchange=function(){var a=n();if(i.includes(a)){var c=r.value;m.set(a,(function(t){return t.getInfo().batchTable[o]==a?c:null})),e.updateStyle(),t.notifyChange()}};var c=document.createElement("input");return c.setAttribute("type","range"),c.min=0,c.max=1,c.step=.1,c.value=1,a.appendChild(c),c.onchange=function(){var a=n();if(i.includes(a)){var r=c.value;p.set(a,(function(t){return t.getInfo().batchTable[o]==a?r:null})),e.updateStyle(),t.notifyChange()}},{inputColor:r,opacityElement:c}},v=function(t,e){var n=document.createElement("label");n.innerText=t,a.appendChild(n);var o=document.createElement("select");a.appendChild(o),e.forEach((function(t){var e=document.createElement("option");e.value=t,e.text=t,o.add(e)})),h((function(){return o.selectedOptions[0].value}),t,e)},y=function(n,o){var i=document.createElement("label");i.innerText=n,a.appendChild(i);var r=document.createElement("input");r.setAttribute("type","text"),a.appendChild(r);var c=h((function(){return r.value}),n,o),l=c.inputColor,s=c.opacityElement;r.onchange=function(){if(o.includes(r.value)){var i=l.value,a=r.value;m.set(a,(function(t){return t.getInfo().batchTable[n]==a?i:null}));var c=s.value;p.set(a,(function(t){return t.getInfo().batchTable[n]==a?c:null})),e.updateStyle(),t.notifyChange()}}},g=Q(o);try{for(g.s();!(f=g.n()).done;){var w=(0,U.Z)(f.value,2),E=w[0],b=w[1];b.length<s.MAX_SELECT_VALUE?v(E,b):y(E,b)}}catch(t){g.e(t)}finally{g.f()}e.style=new X.ZP({fill:{color:function(t){var e,n=null,o=Q(m);try{for(o.s();!(e=o.n()).done;)n=(0,(0,U.Z)(e.value,2)[1])(t)||n}catch(t){o.e(t)}finally{o.f()}return n},opacity:function(t){var e,n=1,o=Q(p);try{for(o.s();!(e=o.n()).done;)n=(0,(0,U.Z)(e.value,2)[1])(t)||n}catch(t){o.e(t)}finally{o.f()}return n}}})}))})),c(),n}return(0,i.Z)(s,null,[{key:"MAX_SELECT_VALUE",get:function(){return 10}}]),s}(m)}},t=>(81499,t(t.s=81499))])));
//# sourceMappingURL=itowns_widgets.js.map