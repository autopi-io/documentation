(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{108:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return i}));var n=a(2),b=a(6),l=(a(0),a(159)),r={id:"cloud-config-cloud-storage",title:"Cloud Storage"},c={unversionedId:"cloud/configuration/cloud-config-cloud-storage",id:"cloud/configuration/cloud-config-cloud-storage",isDocsHomePage:!1,title:"Cloud Storage",description:"| Name | Description | Type | Default | Unit |",source:"@site/docs/cloud/configuration/cloud_storage.md",slug:"/cloud/configuration/cloud-config-cloud-storage",permalink:"/cloud/configuration/cloud-config-cloud-storage",version:"current",sidebar:"cloudSidebar",previous:{title:"Bluetooth",permalink:"/cloud/configuration/cloud-config-bluetooth"},next:{title:"Docker",permalink:"/cloud/configuration/cloud-config-docker"}},O=[{value:"Https",id:"https",children:[]},{value:"Jsonl Returner",id:"jsonl-returner",children:[]},{value:"Jsonl Shipper",id:"jsonl-shipper",children:[]}],j={rightToc:O};function i(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DEFAULT RETURNER"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Which cloud returner should be used as default? Only change this value if you know what you are doing."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloud"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"https"},"Https"),Object(l.b)("h4",{id:"cache"},"Cache"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MAX BATCH SIZE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum amount of entries to include in an upload batch."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MAX RETRY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum retry attempts before transferring batch to fail queue. Retry and fail queues are disabled if set to zero, meaning that pending will block until success."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FAIL TTL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How many days of retention before a fail queue is deleted?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"d")))),Object(l.b)("h4",{id:"endpoint"},"Endpoint"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The endpoint URL of the API where data is pushed to."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://api.autopi.io/logbook/storage"}),"https://api.autopi.io/logbook/storage")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AUTH TOKEN"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The authentication token used in HTTP header when pushing data to the API."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"upload"},"Upload"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How often should cached data be uploaded to the cloud endpoint?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SPLAY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum amount of time in seconds between consecutive uploads of batches. The actual delay is a randomly generated value between zero and the splay value. In error scenarios, the delay is increased by an incrementing factor."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TIMEOUT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How long to wait for server to respond?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"60"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EVENT REGEX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In addition to repeated interval, upload data to cloud when event(s) occur."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"^system/power/(sleep","|","hibernate","|","reboot)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h2",{id:"jsonl-returner"},"Jsonl Returner"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FILENAME FORMAT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How should the JSONL files be named?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{now:%y%m%d%H%M%S}_{pid}.jsonl"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DIRECTORY"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In which directory should the JSONL files be stored?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"/opt/autopi/data"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FILE MODE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In which mode should new files be opened?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"async-file-writer"},"Async File Writer"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FLUSH THRESHOLD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size limit for when the internal buffer should be written to disk."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5242880"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FLUSH TIMEOUT"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time limit for when the internal buffer should be written to disk."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BUFFER SIZE"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size of the internal buffer."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"52428800"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BUFFER HIGH WATERMARK"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size for buffer highwater mark warning."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"b")))),Object(l.b)("h4",{id:"file-rotation"},"File Rotation"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SIZE THRESHOLD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Size limit for when to rorate to a new file."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"524288000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"b")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CRON EXPRESSION"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cron expression for when to rotate to a new file."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0 0 * * *"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time interval for when to rorate to a new file."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h2",{id:"jsonl-shipper"},"Jsonl Shipper"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENABLED"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable service for shipping JSONL files to cloud?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"False"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"cleanup"},"Cleanup"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTERVAL"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How often should cleanup of harvested JSONL files be performed?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3600"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OLDER THAN"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The minimum age before fully harvested JSONL files are removed."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3600"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"s")))),Object(l.b)("h4",{id:"input"},"Input"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PATHS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Where to crawl for JSONL files?"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"['/opt/autopi/data/*.jsonl']"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))),Object(l.b)("h4",{id:"output"},"Output"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HOSTS"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kafka broker addresses from where to fetch the cluster metadata. The cluster metadata contain the actual Kafka brokers messages are published to."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"['localhost:9093']"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USERNAME"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The username for connecting to Kafka."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PASSWORD"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The password for connecting to Kafka."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"str"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")))))}i.isMDXComponent=!0},159:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var n=a(0),b=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var j=b.a.createContext({}),i=function(t){var e=b.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=i(t.components);return b.a.createElement(j.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},o=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=i(a),o=n,d=p["".concat(r,".").concat(o)]||p[o]||u[o]||l;return a?b.a.createElement(d,c(c({ref:e},j),{},{components:a})):b.a.createElement(d,c({ref:e},j))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=o;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var j=2;j<l;j++)r[j]=a[j];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);