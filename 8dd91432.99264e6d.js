(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),r=(a(0),a(166)),i={id:"fleet-templates",title:"Templates"},c={unversionedId:"cloud/fleet/fleet-templates",id:"cloud/fleet/fleet-templates",isDocsHomePage:!1,title:"Templates",description:"The template functionality makes it possible for a user to manage the configuration of a range of devices by setting up a template with the required functionality, and then applying that to a number of devices.",source:"@site/docs/cloud/fleet/templates.md",slug:"/cloud/fleet/fleet-templates",permalink:"/cloud/fleet/fleet-templates",version:"current",sidebar:"cloudSidebar",previous:{title:"Remote wake up",permalink:"/cloud/fleet/fleet-wakeup"},next:{title:"Jobs",permalink:"/cloud/cloud-jobs"}},l=[{value:"Features",id:"features",children:[{value:"Advanced configuration",id:"advanced-configuration",children:[]},{value:"Modules (custom code)",id:"modules-custom-code",children:[]},{value:"Services",id:"services",children:[]},{value:"Triggers and Jobs",id:"triggers-and-jobs",children:[]},{value:"Loggers",id:"loggers",children:[]}]},{value:"Functionality",id:"functionality",children:[]}],s={rightToc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The template functionality makes it possible for a user to manage the configuration of a range of devices by setting up a template with the required functionality, and then applying that to a number of devices."),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("p",null,"A template can contain the following configurations."),Object(r.b)("h3",{id:"advanced-configuration"},"Advanced configuration"),Object(r.b)("p",null,"Most ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud/configuration/cloud-config-intro"}),"advanced configuration settings")," are available to be specified for a template. Options that aren't available for templates have been removed because they are too specific for each device and it doesn't make sense to set in a template."),Object(r.b)("p",null,"The table shows the settings currently associated to the template, and clicking the edit button will open the settings UI, with all available settings."),Object(r.b)("h3",{id:"modules-custom-code"},"Modules (custom code)"),Object(r.b)("p",null,"Modules are created the same way for templates as they are for normal devices; chose a type depending on what you need the module for, and when creating a custom module of type service, it will automatically create a custom service for you and associate that to the same template."),Object(r.b)("h3",{id:"services"},"Services"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/create-service-workers"}),"Read more here"),"."),Object(r.b)("h4",{id:"creating-custom-services"},"Creating custom services"),Object(r.b)("p",null,"Creating a custom service does not not autocreate a custom module as of now, so if you want to create a custom service, you should instead go create a custom module of the type service, then a service will be automatically created."),Object(r.b)("h4",{id:"overriding-default-services"},"Overriding default services"),Object(r.b)("p",null,"To override a default engine, like the obd_manager from a template, you can simply create a new service which has the same name as the default service."),Object(r.b)("h3",{id:"triggers-and-jobs"},"Triggers and Jobs"),Object(r.b)("p",null,"Triggers and Jobs are created the same way for templates as they are for normal devices."),Object(r.b)("p",null,"More info about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud/cloud-jobs"}),"Jobs")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/cloud/cloud-triggers"}),"Triggers")),Object(r.b)("h3",{id:"loggers"},"Loggers"),Object(r.b)("p",null,"Loggers are created the same way for templates as they are for normal devices. You will of course need to have the PIDs or CAN Messages and CAN Signals beforehand, just like when creating loggers for a device."),Object(r.b)("h2",{id:"functionality"},"Functionality"),Object(r.b)("p",null,"To use the templates, the common usage is the following."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a template with a descriptive name."),Object(r.b)("li",{parentName:"ol"},"Make some changes to the template - change configuration, add loggers, custom code, etc."),Object(r.b)("li",{parentName:"ol"},'Add some devices to the template by clicking the devices tab and then "Add Device(s)", find one or more devices to add, and click save.'),Object(r.b)("li",{parentName:"ol"},'Now to actually apply any of the changes to the devices, you should click "apply" on the template to apply the template to all associated devices, or to apply it one by one, click apply on each device.')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'To ensure reproducible behavior, please make sure to keep the configuration on each device as "clean" as possible, as that will make it easier to manage, and try to keep manual changes to devices with a template applied, as few as possible to avoid any colissions between the changes made manual and the changes from the template.'))))}d.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);