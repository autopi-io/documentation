(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var i=n(2),l=n(6),r=(n(0),n(129)),a={id:"core-cmd-minionutil",title:"Minionutil"},o={unversionedId:"core/commands/core-cmd-minionutil",id:"core/commands/core-cmd-minionutil",isDocsHomePage:!1,title:"Minionutil",description:"minionutil.change_master",source:"@site/docs/core/commands/minionutil.md",slug:"/core/commands/core-cmd-minionutil",permalink:"/documentation/docs/core/commands/core-cmd-minionutil",version:"current",sidebar:"coreSidebar",previous:{title:"Log",permalink:"/documentation/docs/core/commands/core-cmd-log"},next:{title:"Obd",permalink:"/documentation/docs/core/commands/core-cmd-obd"}},b=[{value:"<code>minionutil.change_master</code>",id:"minionutilchange_master",children:[]},{value:"<code>minionutil.help</code>",id:"minionutilhelp",children:[]},{value:"<code>minionutil.last_errors</code>",id:"minionutillast_errors",children:[]},{value:"<code>minionutil.last_logs</code>",id:"minionutillast_logs",children:[]},{value:"<code>minionutil.last_startup</code>",id:"minionutillast_startup",children:[]},{value:"<code>minionutil.log_files</code>",id:"minionutillog_files",children:[]},{value:"<code>minionutil.master_status</code>",id:"minionutilmaster_status",children:[]},{value:"<code>minionutil.request_restart</code>",id:"minionutilrequest_restart",children:[]},{value:"<code>minionutil.restart</code>",id:"minionutilrestart",children:[]},{value:"<code>minionutil.run_job</code>",id:"minionutilrun_job",children:[]},{value:"<code>minionutil.status_schedule</code>",id:"minionutilstatus_schedule",children:[]},{value:"<code>minionutil.trigger_event</code>",id:"minionutiltrigger_event",children:[]},{value:"<code>minionutil.update_release</code>",id:"minionutilupdate_release",children:[]}],c={rightToc:b};function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"minionutilchange_master"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.change_master")),Object(r.b)("p",null,"Change to different master host."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"host"))," (str): Hostname of the new master to change to.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"confirm"))," (bool): Acknowledge the execution of this command. Default is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilhelp"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.help")),Object(r.b)("p",null,"Shows this help information."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutillast_errors"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.last_errors")),Object(r.b)("p",null,"Get last errors from minion log."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"file"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"minion"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"until"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"$"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"level"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"error"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"count"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"before"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"after"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"limit"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"100"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutillast_logs"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.last_logs")),Object(r.b)("p",null,"Get last log lines from minion log."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"file"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"minion"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"until"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"$"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"match"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},".*"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"count"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"before"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"after"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"limit"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"100"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutillast_startup"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.last_startup")),Object(r.b)("p",null,"Get log lines for last startup sequence."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"file"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"minion"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"until"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"$"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"match"))," (str): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"Setting up the Salt Minion"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"limit"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"100"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutillog_files"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.log_files")),Object(r.b)("p",null,"List all minion log files."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilmaster_status"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.master_status")),Object(r.b)("p",null,"Get status of connection to master.\nImplementation originates from the ",Object(r.b)("inlineCode",{parentName:"p"},"status.master")," command but without the logic to trigger events."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilrequest_restart"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.request_restart")),Object(r.b)("p",null,"Request for a future restart of the minion service."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"pending"))," (bool): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"True"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"immediately"))," (bool): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"delay"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"expiration"))," (int): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"reason"))," (str): Reason code that tells why we decided to restart. Default is ",Object(r.b)("inlineCode",{parentName:"li"},"unknown"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilrestart"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.restart")),Object(r.b)("p",null,"Restart the minion service immediately."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"reason"))," (str): Reason code that tells why we decided to restart. Default is ",Object(r.b)("inlineCode",{parentName:"li"},"unknown"),".")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilrun_job"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.run_job")),Object(r.b)("p",null,"Run a job by passing it to the minion process.\nThis function makes it possible to run states and also get pillar data from external processes (engines etc.)."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilstatus_schedule"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.status_schedule")),Object(r.b)("p",null,"Dedicated to be called from schedule and trigger minion status events."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutiltrigger_event"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.trigger_event")),Object(r.b)("p",null,"Triggers an event on the minion event bus."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"minionutilupdate_release"},Object(r.b)("inlineCode",{parentName:"h2"},"minionutil.update_release")),Object(r.b)("p",null,"Update a minion to newest release by running a highstate if not already up-to-date."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"force"))," (bool): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"dry_run"))," (bool): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"only_retry"))," (bool): Default is ",Object(r.b)("inlineCode",{parentName:"li"},"False"),".")))}m.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var i=n(0),l=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),m=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=m(n),p=i,O=u["".concat(a,".").concat(p)]||u[p]||s[p]||r;return n?l.a.createElement(O,o(o({ref:t},c),{},{components:n})):l.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);