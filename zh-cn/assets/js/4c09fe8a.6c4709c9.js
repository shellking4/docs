"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5021],{9613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var o=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=o.createContext({}),s=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return o.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),g=r,k=u["".concat(d,".").concat(g)]||u[g]||c[g]||a;return n?o.createElement(k,i(i({ref:e},p),{},{components:n})):o.createElement(k,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2235:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(5443),r=n(3010),a=(n(9496),n(9613)),i=["components"],l={},d="LogtoAuthSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index",title:"LogtoAuthSession",description:"class LogtoAuthSession(val context LogtoConfig, val oidcConfig String, completion: Completion&lt;LogtoException, CodeTokenResponse&gt;)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-auth-session/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.android.auth.logto",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/"},next:{title:"LogtoWebViewAuthActivity",permalink:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.auth.logto/-logto-web-view-auth-activity/"}},p={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],u={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logtoauthsession"},"LogtoAuthSession"),(0,a.kt)("p",null,"class LogtoAuthSession(val context: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val logtoConfig: ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", val oidcConfig: OidcConfigResponse, val redirectUri: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", CodeTokenResponse",">",")"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LogtoAuthSession"),(0,a.kt)("td",{parentName:"tr",align:null},"fun LogtoAuthSession(context: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", logtoConfig: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"),", oidcConfig: OidcConfigResponse, redirectUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", CodeTokenResponse",">",")")))),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleCallbackUri"),(0,a.kt)("td",{parentName:"tr",align:null},"fun handleCallbackUri(callbackUri: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/net/Uri.html"},"Uri"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleUserCancel"),(0,a.kt)("td",{parentName:"tr",align:null},"fun handleUserCancel()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"fun start()")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"val context: ",(0,a.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logtoConfig"),(0,a.kt)("td",{parentName:"tr",align:null},"val logtoConfig: ",(0,a.kt)("a",{parentName:"td",href:"/zh-cn/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/"},"LogtoConfig"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oidcConfig"),(0,a.kt)("td",{parentName:"tr",align:null},"val oidcConfig: OidcConfigResponse")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,a.kt)("td",{parentName:"tr",align:null},"val redirectUri: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}g.isMDXComponent=!0}}]);