(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{140:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(6),a=(r(0),r(159)),i={id:"using-the-rpi3-adapter",title:"Using the RPi3 adapter"},c={unversionedId:"guides/using-the-rpi3-adapter",id:"guides/using-the-rpi3-adapter",isDocsHomePage:!1,title:"Using the RPi3 adapter",description:"Please note: The AutoPi always needs power through the OBD connector, to function properly. Powering the board through the micro usb power plug on the Raspberry Pi could damage your board. If you need to test the AutoPi in a lab environment, we encourage you to get the OBD power connector from the shop.",source:"@site/docs/guides/using_the_rpi3_adapter.md",slug:"/guides/using-the-rpi3-adapter",permalink:"/guides/using-the-rpi3-adapter",version:"current",sidebar:"guidesSidebar",previous:{title:"Using the GPIO and HDMI connector with the AutoPi Gen 2 casing",permalink:"/guides/using-the-gpio-and-hdmi-connector-with-the-autopi-gen-2-casing"}},s=[{value:"Discussion",id:"discussion",children:[]}],u={rightToc:s};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Please note:")," The AutoPi always needs power through the OBD connector, to function properly. Powering the board through the micro usb power plug on the Raspberry Pi could damage your board. If you need to test the AutoPi in a lab environment, we encourage you to get the OBD power connector from the shop."),Object(a.b)("p",null,"This is a step-by-step instructions on how to set-up your Raspberry Pi3 adapter. You will need the following tools to get started:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Your RPi3 adapter (with screws, spacers and nuts)"),Object(a.b)("li",{parentName:"ul"},"Screwdriver"),Object(a.b)("li",{parentName:"ul"},"Your Raspberry Pi 3 (isn't included in the kit)"),Object(a.b)("li",{parentName:"ul"},"Your AutoPi dongle")),Object(a.b)("p",null,"Here is what you need to do:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Remove the casing from your AutoPi (if you have a 4G or WiFi edition)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Remove the Raspberry Pi Zero from the AutoPi dongle, leaving only the black AutoPi base board.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Your RPi3 adapter comes with screws that you\u2019ll have to insert (from the bottom side, upwards) in four corners of your RPi3, once you do that, you can put the spacers down unto your screws. Be gentle with the screws since they are made of plastic. The following image illustrates how it should look:"))),Object(a.b)("p",null,Object(a.b)("img",{alt:"bottom_of_rpi3_with_screws",src:r(262).default})),Object(a.b)("p",null,"It is important that you insert your screws first, from the bottom so the spacers can be put on:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"spacers_showcased",src:r(263).default})),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Hereafter, insert 4 screws downward the four inner holes on your RPi3 adapter, and screw them closed with 4 nuts. ")),Object(a.b)("p",null,Object(a.b)("img",{alt:"adapter_board_bottom_view",src:r(264).default})),Object(a.b)("p",null,"Make sure the screws are faced downwards in the four inner holes. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"adapter_board_top_view",src:r(265).default})),Object(a.b)("p",null,"Put on the nuts and tighten the screws in place by rotating them clockwise."),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Then, push down your RPi3 adapter unto the RPi3 (where the left side black box will fit the headerpins on the RPi3).")),Object(a.b)("p",null,Object(a.b)("img",{alt:"adapter_board_and_rpi3_connected",src:r(266).default})),Object(a.b)("p",null,"This is what it should like once you have safely pushed the adapter down on the RPi3"),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After you have securely and safely attached the adapter to the RPi3, use 4 nuts to tighten the screws in place. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Hereafter, align your dongle correctly so the headpins of the adapter fits with the black box of the dongle and push them gently, but firmly unto each other. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Lastly, all you need to do is insert three screws in the three inner holes of the dongle, and be careful and gentle, too much pressure and screwing them too tightly can break the screw tops off. Once, you\u2019ve done that you are; ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"This step only applies if you have a 4G edition and you want to use the modem. To enable the modem you need to connect the AutoPi to the RPi3 using the flat Micro USB cable that came with your AutoPi. Insert the USB cable into the micro USB to USB adapter that came with your Raspberry Pi 3 Adapter. Then insert it into the RPi3. You can see how in this image (red circles):"))),Object(a.b)("p",null,Object(a.b)("img",{alt:"usb_connection_rpi3",src:r(267).default})),Object(a.b)("p",null,"If you have another micro USB to USB cable, you can also use that. Anyone will work. "),Object(a.b)("ol",{start:10},Object(a.b)("li",{parentName:"ol"},"To get your AutoPi (RPi3 edition) online in the AutoPi Cloud, it needs to be registred again. The reason for this is that your Dongle ID is generated from the Raspberry Pi. So now that you've upgradet you AutoPi to the RPi3, it's received a new ID. You can get this ID from the local terminal with this command:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"grains.get id\n")),Object(a.b)("p",null,"or from the SSH promt:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cat /etc/salt/minion_id\n")),Object(a.b)("p",null,"or from the web terminal"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cmd.run 'cat /etc/salt/minion_id'\n")),Object(a.b)("p",null,"This ID needs to be accepted by AutoPi. So you need to send the correct ID to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:support@autopi.io"}),"support@autopi.io"),", so that it can be accepted by our servers. "),Object(a.b)("ol",{start:11},Object(a.b)("li",{parentName:"ol"},"Finished and completely done :)")),Object(a.b)("p",null,"The final result should look something similar to this. "),Object(a.b)("p",null,Object(a.b)("img",{alt:"final_result_1",src:r(268).default})),Object(a.b)("p",null,Object(a.b)("img",{alt:"final_result_2",src:r(269).default})),Object(a.b)("p",null,Object(a.b)("img",{alt:"final_result_3",src:r(270).default})),Object(a.b)("h3",{id:"discussion"},"Discussion"),Object(a.b)("p",null,"If you'd like to discuss this topic with us or other fellow community memebers, you can do so on our community page dedicated for this guide:\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.autopi.io/t/using-the-rpi3-adapter/293"}),"Using the RPi3 Adapter")))}l.isMDXComponent=!0},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=o,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return r?n.a.createElement(h,c(c({ref:t},u),{},{components:r})):n.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},262:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/bottom_of_rpi3_with_screws-733933fdfd1427c86936841a6dec386f.jpg"},263:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/spacers_showcased-1dec8cfe7f532b7655e73f122126aa6d.jpg"},264:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/adapter_board_bottom_view-84c3cff5ed56b4504d1b1c55f15afe83.jpg"},265:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/adapter_board_top_view-e16e53b28083d7b2d04d1991963c7416.jpg"},266:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/adapter_board_and_rpi3_connected-fb04b2bd1851c4b0fd44fe9590cba570.jpg"},267:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/usb_connection_rpi3-414d6e982d40fc1c8fe86e7119e2e15d.jpg"},268:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/final_result_1-6b4a40ae5e5d471c5bbc4026d957df0b.jpg"},269:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/final_result_2-024baad0037efe80ac967a2e1e91ccb8.jpg"},270:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/final_result_3-649dba0b0a47169c28e0c53407c00107.jpg"}}]);