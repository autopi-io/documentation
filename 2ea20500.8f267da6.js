(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),u=n,d=p["".concat(r,".").concat(u)]||p[u]||o[u]||l;return a?b.a.createElement(d,c(c({ref:t},O),{},{components:a})):b.a.createElement(d,c({ref:t},O))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var O=2;O<l;O++)r[O]=a[O];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(6),l=(a(0),a(133)),r={id:"cloud-config-power",title:"Power"},c={unversionedId:"cloud/configuration/cloud-config-power",id:"cloud/configuration/cloud-config-power",isDocsHomePage:!1,title:"Power",description:"Battery",source:"@site/docs/cloud/configuration/power.md",slug:"/cloud/configuration/cloud-config-power",permalink:"/cloud/configuration/cloud-config-power",version:"current",sidebar:"cloudSidebar",previous:{title:"Triggers",permalink:"/cloud/triggers/cloud-triggers"},next:{title:"Bluetooth",permalink:"/cloud/configuration/cloud-config-bluetooth"}},i=[{value:"Battery",id:"battery",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Modem",id:"modem",children:[]},{value:"Safety Cut-Out",id:"safety-cut-out",children:[]},{value:"Sleep Timer",id:"sleep-timer",children:[]},{value:"Wake Trigger",id:"wake-trigger",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"battery"},"Battery"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"READ INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How often should the battery voltage be read out and checked? Disabled if set to zero."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h4",{id:"critical-level"},"Critical Level"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the voltage threshold where the device should trigger the 'vehicle/battery/critical_level' event and then go into hibernation. To have any effect, this value must be greater than the safety cut-out voltage."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12.3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DURATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long should the specified voltage remain before triggering the 'vehicle/battery/critical_level' event."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"180"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h2",{id:"firmware"},"Firmware"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AUTO UPDATE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Automatic update of the firmware on the power management chip?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"modem"},"Modem"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"POWER SAVE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Put modem into lower power mode during sleep? When enabled it is no longer possible to wakup device on SMS."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"safety-cut-out"},"Safety Cut-Out"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies at what voltage the device will be forcibly powered off to prevent battery drain. It is never recommended to go below 12.1 volts, as it may damage the battery and shorten its life."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12.20"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DURATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time should the specified voltage remain before taking effect? It is important that this value is lower than any sleep timer period, otherwise the device can power down normally before this condition is met."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"240"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h2",{id:"sleep-timer"},"Sleep Timer"),Object(l.b)("h4",{id:"event-driven"},"Event Driven"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EVENT REGEX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"On which event(s) should this sleep timer be enabled?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"^vehicle/engine/stopped"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PERIOD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time after the event has triggered should the device go to sleep?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1800"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time should the device sleep before waking up again?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3600"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long delay before the actual shutdown takes effect?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"REASON"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Explanatory reason for sleeping."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"engine_stopped"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"inactivity-after-sleep"},"Inactivity After Sleep"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PERIOD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When waking up after sleep, how long time will the device stay awake before going to sleep again?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"300"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time should the device sleep before waking up again?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long delay before the actual shutdown takes effect?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h4",{id:"inactivity-fallback"},"Inactivity Fallback"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PERIOD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time should the device stay awake until it is powered down due to inactivity?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"300"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long time should the device sleep before waking up again?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DELAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long delay before the actual shutdown takes effect?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h4",{id:"suppress"},"Suppress"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EVENT REGEX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which event(s) should disable current sleep timers and prevent new ones from being enabled?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"^vehicle/engine/running"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SCHEDULE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies one or more time periods during which the device must be awake. Added sleep timers are adjusted accordingly to not sleep for the specified time periods. The format consists of a cron expression in UTC, then a pipe sign ("),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),") as separator and finally a duration in seconds. Example: 0 8 * * *"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7200"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str")))),Object(l.b)("h2",{id:"wake-trigger"},"Wake Trigger"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE CHANGE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How much should the voltage change for the device to power up on engine start? Be careful about changing this parameter too much, as it could prevent your dongle from powering on."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"+0.50"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE CHANGE DURATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long should the specified voltage change be observed before the device powers up on engine start?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ms")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE LEVEL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"At what voltage level should the device power on?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),">13.20"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"V")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VOLTAGE LEVEL DURATION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long should the specified voltage level be observed before the device powers on?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))))}j.isMDXComponent=!0}}]);