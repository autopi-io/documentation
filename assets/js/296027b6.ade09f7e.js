(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[7331],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20681:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o=["components"],i={id:"led-and-button",title:"LED and Button States"},d=void 0,u={unversionedId:"hardware/autopi_tmu_cm4/led-and-button",id:"hardware/autopi_tmu_cm4/led-and-button",isDocsHomePage:!1,title:"LED and Button States",description:"The AutoPi TMU CM4 comes with an advanced smart power management (SPM) system, which will handle the lifecycle of the device. The status of SPM can be seen from the LEDs on the side of the device and can changed from software or from the Button also located on the side:",source:"@site/docs/hardware/autopi_tmu_cm4/led_and_button.mdx",sourceDirName:"hardware/autopi_tmu_cm4",slug:"/hardware/autopi_tmu_cm4/led-and-button",permalink:"/hardware/autopi_tmu_cm4/led-and-button",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/hardware/autopi_tmu_cm4/led_and_button.mdx",tags:[],version:"current",frontMatter:{id:"led-and-button",title:"LED and Button States"},sidebar:"sidebar",previous:{title:"Install Heatsink",permalink:"/hardware/autopi_tmu_cm4/installing-heatsink"},next:{title:"Mounting Holes",permalink:"/hardware/autopi_tmu_cm4/mounting_holes"}},p=[{value:"Button",id:"button",children:[]},{value:"Status LEDs",id:"status-leds",children:[{value:"Blue LED",id:"blue-led",children:[]},{value:"Green LED",id:"green-led",children:[]}]}],s={toc:p};function m(t){var e=t.components,i=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The AutoPi TMU CM4 comes with an advanced smart power management (SPM) system, which will handle the lifecycle of the device. The status of SPM can be seen from the LEDs on the side of the device and can changed from software or from the Button also located on the side:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LED and Button location",src:n(62466).Z})),(0,l.kt)("p",null,"The following state diagram explains this lifecycle. The LED is the Blue LED on the side of the device."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LED and Button states",src:n(85432).Z})),(0,l.kt)("h2",{id:"button"},"Button"),(0,l.kt)("p",null,"With the button it is possible to control the state of the device:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Long press (>3s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be initated from any state."),(0,l.kt)("td",{parentName:"tr",align:null},"SPM will go into ",(0,l.kt)("strong",{parentName:"td"},"USER SETUP")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Click"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ON")," State"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM will go into ",(0,l.kt)("strong",{parentName:"td"},"SHUTDOWN")," state and thereby either into hibernate or sleep.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Click"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"USER SETUP")," State"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM will go into ",(0,l.kt)("strong",{parentName:"td"},"HIBERNATING")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Click"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"SLEEPING")," State"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM will go into ",(0,l.kt)("strong",{parentName:"td"},"BOOTING")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Click"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"HIBERNATING")," State"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM will go into ",(0,l.kt)("strong",{parentName:"td"},"BOOTING")," state.")))),(0,l.kt)("h2",{id:"status-leds"},"Status LEDs"),(0,l.kt)("h3",{id:"blue-led"},"Blue LED"),(0,l.kt)("p",null,"The blue LED indicates the current state of the ",(0,l.kt)("a",{parentName:"p",href:"/core/power_management/core-power-low"},"low-level ")," SPM system."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"LED State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Turned off"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"OFF")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Constantly dimmed"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"HIBERNATING")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fading in"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"BOOTING")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fading out"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"SHUTTING DOWN")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Constantly bright"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"ON")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Breathing slow"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"SLEEP")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flashing medium (once a second)"),(0,l.kt)("td",{parentName:"tr",align:null},"SPM is in ",(0,l.kt)("strong",{parentName:"td"},"USER SETUP")," state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flashing rapidly"),(0,l.kt)("td",{parentName:"tr",align:null},"eMMC is begin flashed")))),(0,l.kt)("h3",{id:"green-led"},"Green LED"),(0,l.kt)("p",null,"The green LED indicates the current state of the ",(0,l.kt)("a",{parentName:"p",href:"/core/power_management/core-power-high"},"high-level")," system."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"LED State"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Turned off"),(0,l.kt)("td",{parentName:"tr",align:null},"Not running or in the process of booting up.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flashing brightly"),(0,l.kt)("td",{parentName:"tr",align:null},"Up and running but NOT (yet) connected to the cloud.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Constantly bright"),(0,l.kt)("td",{parentName:"tr",align:null},"Up and running and connected to the cloud.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flashing rapidly"),(0,l.kt)("td",{parentName:"tr",align:null},"AutoPi Core software upgrade in progress")))))}m.isMDXComponent=!0},62466:function(t,e,n){"use strict";e.Z=n.p+"assets/images/led_button_location-717637c061957cd7526d2dcc151669af.png"},85432:function(t,e,n){"use strict";e.Z=n.p+"assets/images/led_button_states-5a04feb65f6de52c84d45ddecd29856d.png"}}]);