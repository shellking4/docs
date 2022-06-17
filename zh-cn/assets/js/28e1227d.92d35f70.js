"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3130],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,k=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?o.createElement(k,a(a({ref:t},u),{},{components:n})):o.createElement(k,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(5443),r=n(3010),c=(n(9496),n(9613)),a=["components"],i={},s=void 0,l={unversionedId:"sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",id:"sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",title:"LogtoCore.CodeTokenResponse",description:"\u7ed3\u6784\u4f53",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",permalink:"/zh-cn/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"JwtHeader",permalink:"/zh-cn/sdk/Swift/Logto/Structs/JwtHeader"},next:{title:"LogtoCore.OidcConfigResponse",permalink:"/zh-cn/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse"}},u={},p=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>accessToken</code>",id:"accesstoken",level:3},{value:"<code>refreshToken</code>",id:"refreshtoken",level:3},{value:"<code>idToken</code>",id:"idtoken",level:3},{value:"<code>scope</code>",id:"scope",level:3},{value:"<code>expiresIn</code>",id:"expiresin",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u7ed3\u6784\u4f53")),(0,c.kt)("h1",{id:"logtocorecodetokenresponse"},(0,c.kt)("inlineCode",{parentName:"h1"},"LogtoCore.CodeTokenResponse")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"struct CodeTokenResponse: Codable, Equatable\n")),(0,c.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,c.kt)("h3",{id:"accesstoken"},(0,c.kt)("inlineCode",{parentName:"h3"},"accessToken")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"public let accessToken: String\n")),(0,c.kt)("h3",{id:"refreshtoken"},(0,c.kt)("inlineCode",{parentName:"h3"},"refreshToken")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"public let refreshToken: String\n")),(0,c.kt)("h3",{id:"idtoken"},(0,c.kt)("inlineCode",{parentName:"h3"},"idToken")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"public let idToken: String\n")),(0,c.kt)("h3",{id:"scope"},(0,c.kt)("inlineCode",{parentName:"h3"},"scope")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"public let scope: String\n")),(0,c.kt)("h3",{id:"expiresin"},(0,c.kt)("inlineCode",{parentName:"h3"},"expiresIn")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-swift"},"public let expiresIn: Int64\n")))}f.isMDXComponent=!0}}]);