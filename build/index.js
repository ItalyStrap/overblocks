(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{8:function(e,t,n){}}]),function(e){function t(t){for(var r,a,c=t[0],l=t[1],u=t[2],p=0,b=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);b.length;)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([11,1]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e){e.exports=JSON.parse('{"name":"overblocks/container","category":"layout","attributes":{"tagName":{"type":"string","default":"div"},"maxWidth":{"type":"string"},"minHeight":{"type":"string"},"backgroundColor":{"type":"string"}},"supports":{"anchor":true,"align":["wide","full"],"color":{"gradients":true,"link":true},"spacing":{"padding":true,"margin":true}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}')},function(e,t){!function(){e.exports=this.wp.data}()},,function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"metadata",(function(){return b})),n.d(r,"name",(function(){return m})),n.d(r,"settings",(function(){return v}));var o=n(4),i=n(5),a=n.n(i),c=n(1),l=(n(8),n(0)),u=n(2),s=(n(9),n(7)),p=n(3);n(10);var b=n(6);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=b.name,v=d(d({},b),{},{title:Object(c.__)("Container","overblocks"),description:Object(c.__)("Combine blocks into a container.","overblocks"),icon:{background:"#fff",foreground:"#259ccb",src:function(){return Object(l.createElement)(u.SVG,{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Object(l.createElement)(u.Path,{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}))}},keywords:[Object(c.__)("container","overblocks"),Object(c.__)("wrapper","overblocks"),Object(c.__)("section"),Object(c.__)("box","overblocks")],supports:{anchor:!0,align:["wide","full"],color:{gradients:!0,link:!0},spacing:{padding:!0,margin:!0}},example:{attributes:{tagName:"section",style:{color:{text:"#000000",background:"#b5b5b5"}}},viewportWidth:400,innerBlocks:[{name:"core/paragraph",attributes:{
/* translators: example text. */
content:Object(c.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.")}}]},transforms:{from:[{type:"block",blocks:["core/group"],transform:function(e,t){return Object(o.createBlock)(m,e,t)}}],to:[{type:"block",blocks:[m],transform:function(e,t){return Object(o.createBlock)("core/group",e,t)}}]},edit:function(e){var t,n=e.className,r=e.attributes,o=e.setAttributes,i=e.clientId,b=r.tagName,f=r.maxWidth,d=(r.minHeight,Object(s.useSelect)((function(e){var t=(0,e("core/block-editor").getBlock)(i);return!(!t||!t.innerBlocks.length)}),[i])),m=b||"div",v={className:n,style:{maxWidth:Number.isFinite(f)?f+"%":f}};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(p.InspectorControls,null,Object(l.createElement)(u.PanelBody,{title:Object(c.__)("Element Type","overblocks")},Object(l.createElement)(u.SelectControl,{value:b,onChange:function(e){o({tagName:e})},options:[{label:"div",value:"div"},{label:"section",value:"section"},{label:"main",value:"main"},{label:"aside",value:"aside"},{label:"article",value:"article"},{label:"header",value:"header"},{label:"footer",value:"footer"},{label:"nav",value:"nav"}]})),Object(l.createElement)(u.PanelBody,{title:Object(c.__)("Dimension")},Object(l.createElement)(u.__experimentalUnitControl,{label:Object(c.__)("Max width"),labelPosition:"edge",__unstableInputWidth:"80px",value:f||"",onChange:(t="maxWidth",function(e){o(a()({},t,function(e){return 0>parseFloat(e)?"0":e}(e)))})}))),Object(l.createElement)(m,v,Object(l.createElement)(p.InnerBlocks,{renderAppender:d?void 0:function(){return Object(l.createElement)(p.InnerBlocks.ButtonBlockAppender,null)}})))},save:function(e){var t,n=e.className,r=e.attributes,o=r.tagName,i=r.maxWidth,a=o||"div";i&&(t={maxWidth:Number.isFinite(i)?i+"%":i});var c={className:n,style:t};return Object(l.createElement)(a,c,Object(l.createElement)(p.InnerBlocks.Content,null))}});[r].forEach((function(e){var t=e.name,n=e.settings;Object(o.registerBlockType)(t,n)}))}]);