(self.webpackChunkdocumentation_2=self.webpackChunkdocumentation_2||[]).push([[3554],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4730:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],p={id:"using-the-autopi-with-an-external-power-supply",title:"Using the AutoPi with an external power supply"},u=void 0,s={unversionedId:"guides/using-the-autopi-with-an-external-power-supply",id:"guides/using-the-autopi-with-an-external-power-supply",isDocsHomePage:!1,title:"Using the AutoPi with an external power supply",description:"The device you have is pre-configured to work directly in your car. When working it in a lab",source:"@site/docs/guides/using_the_autopi_with_an_external_power_supply.md",sourceDirName:"guides",slug:"/guides/using-the-autopi-with-an-external-power-supply",permalink:"/guides/using-the-autopi-with-an-external-power-supply",editUrl:"https://github.com/autopi-io/documentation/edit/master/docs/guides/using_the_autopi_with_an_external_power_supply.md",tags:[],version:"current",frontMatter:{id:"using-the-autopi-with-an-external-power-supply",title:"Using the AutoPi with an external power supply"},sidebar:"guidesSidebar",previous:{title:"Upgrade/Replace Your Rasbperry Pi Computer",permalink:"/guides/upgrading-your-raspberry-pi"}},l=[{value:"Discussion",id:"discussion",children:[]}],c={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The device you have is pre-configured to work directly in your car. When working it in a lab\nenvironment you may need to supply the AutoPi with a controlled power supply. There are a couple of\nthings you should be aware of, before connecting your device:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Always power your AutoPi from the OBD connector. Don't use the power inputs on the Raspberry Pi.\nThis makes some of the function on the AutoPi not function correctly and could potentially damage\nyour AutoPi device.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The AutoPi has several commands that can be run from the local terminal. Commands like\n",(0,i.kt)("a",{parentName:"p",href:"/core/commands/core-commands-power/#powerstatus"},(0,i.kt)("inlineCode",{parentName:"a"},"power.status"))," should be written out on the local terminal\nas you see them in our ",(0,i.kt)("a",{parentName:"p",href:"/core/commands/core-commands-intro"},"commands documentation"),". All terminal commands\ncan also be run when logged in via ",(0,i.kt)("a",{parentName:"p",href:"/guides/how-to-ssh-to-your-device"},"SSH"),". All you need to do\nis prepend the ",(0,i.kt)("inlineCode",{parentName:"p"},"autopi")," command, like ",(0,i.kt)("inlineCode",{parentName:"p"},"autopi power.status"),". This works for every AutoPi Core\ncommand.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The AutoPi auto powers down when voltage is below 12.2V. This is to prevent draining the vehicle\nbattery. Power it with at least 12.5V when in a lab.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There is a trigger (sleep timer) on the device, that will initiate if there is no communication\nto the car, more specifically, its CAN bus. You can see sleep timers by running the\n",(0,i.kt)("a",{parentName:"p",href:"/core/commands/core-commands-power/#powersleep-timer"},(0,i.kt)("inlineCode",{parentName:"a"},"power.sleep_timer"))," command and you can clear them\nby running ",(0,i.kt)("inlineCode",{parentName:"p"},"power.sleep_timer clear=*"),"."))),(0,i.kt)("p",null,"We recommend getting the OBD power cable from our shop, to ease the connection to any external\npower supply. You can get it ",(0,i.kt)("a",{parentName:"p",href:"https://shop.autopi.io/en/products/obd-ii-power-cable-10/"},"here"),"."),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"If you'd like to discuss this topic with us or other fellow community members, you can do so on\nour community page dedicated for this guide:\n",(0,i.kt)("a",{parentName:"p",href:"https://community.autopi.io/t/using-the-autopi-with-an-external-power-supply-lab/626"},"Using the AutoPi with an external power supply"),"."))}m.isMDXComponent=!0}}]);