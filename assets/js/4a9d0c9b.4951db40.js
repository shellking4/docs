"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5042],{9613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(n),p=o,m=c["".concat(s,".").concat(p)]||c[p]||k[p]||i;return n?r.createElement(m,a(a({ref:e},d),{},{components:n})):r.createElement(m,a({ref:e},d))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4101:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],l={},s="verifyIdToken",u={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",title:"verifyIdToken",description:"fun verifyIdToken(idToken String, issuer JsonWebKeySet)",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/verify-id-token.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"decodeIdToken",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-token-utils/decode-id-token"},next:{title:"Android",permalink:"/sdk/Kotlin/android/"}},d={},k=[{value:"Parameters",id:"parameters",level:2},{value:"Throws",id:"throws",level:2}],c={toc:k};function p(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verifyidtoken"},"verifyIdToken"),(0,i.kt)("p",null,"fun verifyIdToken(idToken: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", issuer: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", jwks: JsonWebKeySet)"),(0,i.kt)("p",null,"Verify ID token"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"idToken"),(0,i.kt)("td",{parentName:"tr",align:null},"The raw string ID token to be verified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"The client ID related to this ID token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"issuer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID token issuer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jwks"),(0,i.kt)("td",{parentName:"tr",align:null},"The JSON Web Key Set issued by the Idp")))),(0,i.kt)("h2",{id:"throws"},"Throws"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Exception"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"org.jose4j.jwt.consumer.InvalidJwtException")))))}p.isMDXComponent=!0}}]);