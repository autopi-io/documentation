(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(129)),o={id:"cloud-trips",title:"Trips"},c={unversionedId:"cloud/trips/cloud-trips",id:"cloud/trips/cloud-trips",isDocsHomePage:!1,title:"Trips",description:"Trips are automatically detected based on the events sent from the device, by default the engine events are used.",source:"@site/docs/cloud/trips/_index.md",slug:"/cloud/trips/cloud-trips",permalink:"/documentation/docs/cloud/trips/cloud-trips",version:"current",sidebar:"cloudSidebar",previous:{title:"Triggers",permalink:"/documentation/docs/cloud/triggers/cloud-triggers"},next:{title:"Introduction",permalink:"/documentation/docs/cloud/configuration/cloud-config"}},l=[{value:"Trip generation",id:"trip-generation",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Trips are automatically detected based on the events sent from the device, by default the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/documentation/docs/cloud/events/cloud-events-vehicle#engine-events"}),"engine events")," are used. "),Object(a.b)("p",null,"It is fully customizeable what events trigger a new trip to be created and it can be changed in the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/documentation/docs/cloud/configuration/cloud-config-trip#event"}),"advanced settings"),"."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You can check the events page on my.autopi.io to see all events logged from your device. When troubleshooting it is one of the first places to check if you are unsure why something happened. By looking at the events you can usually get a really good idea about why the device did something."))),Object(a.b)("h2",{id:"trip-generation"},"Trip generation"),Object(a.b)("p",null,"When the server receives the start|stop trip events it will do the following."),Object(a.b)("h4",{id:"on-start-trip-event-default-vehicleenginerunning"},"On start trip event (default: ",Object(a.b)("inlineCode",{parentName:"h4"},"vehicle/engine/running"),")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If closed trip exists, the end time will be checked:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If older than N minutes (default: 10), a new trip will be created, with the start_time set to the timestamp of the event."),Object(a.b)("li",{parentName:"ul"},"If not older than N minutes, it will not create a new trip."))),Object(a.b)("li",{parentName:"ul"},"OR: If open trip exists, the start time will be checked:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If older than N minutes, a new trip will be created."),Object(a.b)("li",{parentName:"ul"},"If not older than N minutes, it will ignore the event, and just keep using the trip from before.")))),Object(a.b)("h4",{id:"on-stop-trip-event-default-vehicleenginenot_runningvehicleenginestopped"},"On stop trip event (default: ",Object(a.b)("inlineCode",{parentName:"h4"},"vehicle/engine/not_running"),"|",Object(a.b)("inlineCode",{parentName:"h4"},"vehicle/engine/stopped"),")"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check if a trip is currently in progress using the timestamp of the event.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"If it can find one, it will close it."),Object(a.b)("li",{parentName:"ul"},"If it can't find one, the event will be ignored.")))),Object(a.b)("p",null,"This means that a typical trip generation lifecycle can look like this"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Trip is created"),Object(a.b)("li",{parentName:"ol"},"Data is logged"),Object(a.b)("li",{parentName:"ol"},"Trip is closed"),Object(a.b)("li",{parentName:"ol"},"Trip is reopened if new event is within 10 minutes of the last trip close event."),Object(a.b)("li",{parentName:"ol"},"More data is logged"),Object(a.b)("li",{parentName:"ol"},"Trip is closed")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"For EV's it's possible to set up new events so that the trip generation works as expected.\nSee more here: ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://community.autopi.io/t/guide-how-to-setup-power-cycle-for-an-electric-vehicle/1668"}),"Setup power cycle for an electric vehicle")))))}p.isMDXComponent=!0}}]);