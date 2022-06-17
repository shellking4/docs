"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4193],{9613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),k=s(n),p=o,m=k["".concat(u,".").concat(p)]||k[p]||c[p]||i;return n?r.createElement(m,a(a({ref:e},d),{},{components:n})):r.createElement(m,a({ref:e},d))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6412:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],l={},u="verifyIdToken",s={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",title:"verifyIdToken",description:"fun verifyIdToken(idToken String, issuer JsonWebKeySet)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"decodeIdToken",permalink:"/zh-cn/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token"},next:{title:"Android",permalink:"/zh-cn/sdk/Kotlin/android/"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Throws",id:"throws",level:2}],k={toc:c};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verifyidtoken"},"verifyIdToken"),(0,i.kt)("p",null,"fun verifyIdToken(idToken: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", issuer: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", jwks: JsonWebKeySet)"),(0,i.kt)("p",null,"\u6821\u9a8c ID \u4ee4\u724c"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idToken"),(0,i.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u6821\u9a8c\u7684\u7eaf\u5b57\u7b26\u4e32\u8868\u793a\u7684 ID \u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5 ID \u4ee4\u724c\u76f8\u5173\u7684\u5ba2\u6237\u7aef ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"issuer"),(0,i.kt)("td",{parentName:"tr",align:null},"ID \u4ee4\u724c\u7684\u9881\u53d1\u8005")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwks"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8eab\u4efd\u9a8c\u8bc1\u670d\u52a1\u63d0\u4f9b\u65b9\u63d0\u4f9b\u7684 JSON Web Key Set")))),(0,i.kt)("h2",{id:"throws"},"Throws"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.jose4j.jwt.consumer.InvalidJwtException")))))}p.isMDXComponent=!0}}]);