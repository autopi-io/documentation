(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),m=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=m(t),d=a,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return t?c.a.createElement(O,l(l({ref:n},b),{},{components:t})):c.a.createElement(O,l({ref:n},b))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=t[b];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return m}));var a=t(2),c=t(6),r=(t(0),t(159)),i={id:"core-commands-acc",title:"Acc"},l={unversionedId:"core/commands/core-commands-acc",id:"core/commands/core-commands-acc",isDocsHomePage:!1,title:"Acc",description:"acc.connection",source:"@site/docs/core/commands/acc.md",slug:"/core/commands/core-commands-acc",permalink:"/core/commands/core-commands-acc",version:"current",sidebar:"coreSidebar",previous:{title:"Introduction",permalink:"/core/commands/core-commands-intro"},next:{title:"Audio",permalink:"/core/commands/core-commands-audio"}},o=[{value:"<code>acc.connection</code>",id:"accconnection",children:[]},{value:"<code>acc.context</code>",id:"acccontext",children:[]},{value:"<code>acc.dump</code>",id:"accdump",children:[]},{value:"<code>acc.help</code>",id:"acchelp",children:[]},{value:"<code>acc.manage</code>",id:"accmanage",children:[]},{value:"<code>acc.query</code>",id:"accquery",children:[]}],b={rightToc:o};function m(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"accconnection"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.connection")),Object(r.b)("p",null,"Manages current connection."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"close"))," (bool): Close MMA8X5X connection? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),". ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EXAMPLES")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.connection")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.connection close=True"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"acccontext"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.context")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"DEPRECATED"),"\nUse 'manage context' instead."))),Object(r.b)("p",null,"Gets current context."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"accdump"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.dump")),Object(r.b)("p",null,"Dumps raw XYZ readings to screen or file."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"duration"))," (int): How many seconds to record data? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"file"))," (str): Write data to a file with the given name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"range"))," (int): Maximum number of g-forces being measured. Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"8"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"rate"))," (float): How many Hz (samples per second)? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"50"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"decimals"))," (int): How many decimals to calculate? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"4"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"timestamp"))," (bool): Add timestamp to each sample? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"True"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"sound"))," (bool): Play sound when starting and stopping recording? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"True"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"interrupt_driven"))," (bool): Await hardware data ready signal before reading a sample? Default value is ",Object(r.b)("inlineCode",{parentName:"li"},"True"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"acchelp"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.help")),Object(r.b)("p",null,"Shows this help information."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"accmanage"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.manage")),Object(r.b)("p",null,"Runtime management of the underlying service instance."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SUPPORTED COMMANDS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"hook list|call <name> [argument]... [<key>=<value>]...")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"worker list|show|start|pause|resume|kill <name>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reactor list|show <name>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"run <key>=<value>..."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EXAMPLES")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage hook list")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage hook call query_handler xyz")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker list *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker show *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker start *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker pause *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker resume *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage worker kill *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage reactor list")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.manage reactor show *")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'acc.manage run handler="query" args="[\\"xyz\\"]" returner="cloud"'))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"accquery"},Object(r.b)("inlineCode",{parentName:"h2"},"acc.query")),Object(r.b)("p",null,"Queries a given accelerometer command."),Object(r.b)("p",null,"For additional help run: ",Object(r.b)("inlineCode",{parentName:"p"},"acc.query help")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"EXAMPLES")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query status")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query xyz")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query active value=False")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query range value=4")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query data_rate value=12.5")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acc.query offset x=0.1 y=-0.1 z=0"))))}m.isMDXComponent=!0}}]);