(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[5326],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44826:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],u={id:"jumpers",title:"Jumpers"},p=void 0,l={unversionedId:"developer_guides/jumpers",id:"developer_guides/jumpers",isDocsHomePage:!1,title:"Jumpers",description:"Jumpers are a very small devices which are used to jump the electrical current from one pin to",source:"@site/docs/developer_guides/jumpers.md",sourceDirName:"developer_guides",slug:"/developer_guides/jumpers",permalink:"/developer_guides/jumpers",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/developer_guides/jumpers.md",tags:[],version:"current",frontMatter:{id:"jumpers",title:"Jumpers"},sidebar:"sidebar",previous:{title:"Upgrade/Replace Your Raspberry Pi Computer",permalink:"/developer_guides/upgrading-your-raspberry-pi"},next:{title:"Installing a Camera on Your AutoPi",permalink:"/developer_guides/installing-a-camera-on-your-autopi"}},c=[{value:"How Jumpers Help",id:"how-jumpers-help",children:[]},{value:"Using a Jumper",id:"using-a-jumper",children:[]}],s={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jumpers are a very small devices which are used to jump the electrical current from one pin to\nanother. In this guide, we will talk about jumpers. More specifically, we'll talk about what they\nare used for and how you can use one for your device."),(0,a.kt)("h2",{id:"how-jumpers-help"},"How Jumpers Help"),(0,a.kt)("p",null,"With a jumper you can force the AutoPi to maintain the 5V supply on all the time. This effectively\nmeans that the Raspberry Pi wont be able to go to sleep or hibernation, because you disable the\nSmart Power Manager (SPM) chip."),(0,a.kt)("p",null,"The jumper will come in handy when you debug or develop new core features, where you want to change\nthe functionality of the SPM. For normal use it shouldn\u2019t be necessary."),(0,a.kt)("h2",{id:"using-a-jumper"},"Using a Jumper"),(0,a.kt)("p",null,"To use a jumper, you will need to open up your AutoPi device. On the inside of the device, you'll\nsee two boards connected to each other. One of them being the Raspberry Pi and the other - the\nAutoPi board. On the AutoPi board, you should be able to see two pins on one of the four corners,\nnext to which is written 'FORCE 5V'."),(0,a.kt)("p",null,"To see how you can attach a jumper to your specific device view the following pages for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hardware/legacy_devices/autopi_dongle/gen-2-intro/#jumper"},"Generation 2 devices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/hardware/legacy_devices/autopi_dongle_gen3/gen-3-intro/#jumper"},"Generation 3 devices"))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In case you have any questions, don't hesitate to contact us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@autopi.io"},"support@autopi.io"),"."))))}d.isMDXComponent=!0}}]);