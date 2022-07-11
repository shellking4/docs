"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5399],{9613:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||s;return a?r.createElement(g,i(i({ref:t},l),{},{components:a})):r.createElement(g,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3656:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=a(5443),n=a(3010),s=(a(9496),a(9613)),i=["components"],o={sidebar_label:"\u4f7f\u7528\u7ba1\u7406 API",sidebar_position:2},p="\u4f7f\u7528\u7ba1\u7406 API \u7ba1\u7406\u7528\u6237",d={unversionedId:"docs/recipes/manage-users/management-api",id:"docs/recipes/manage-users/management-api",title:"\u4f7f\u7528\u7ba1\u7406 API \u7ba1\u7406\u7528\u6237",description:"\u300c\u7ba1\u7406 API\u300d\u662f\u4e00\u4e2a API \u96c6\u5408\uff0c\u7528\u4e8e\u7ba1\u7406 Logto \u6570\u636e\uff0c\u5305\u62ec\u7528\u6237\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/manage-users/management-api.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/management-api",permalink:"/zh-cn/docs/recipes/manage-users/management-api",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/manage-users/management-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u4f7f\u7528\u7ba1\u7406 API",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"\u4f7f\u7528\u7ba1\u7406\u63a7\u5236\u53f0",permalink:"/zh-cn/docs/recipes/manage-users/admin-console"},next:{title:"\u4f60\u4e0d\u518d\u9700\u8981\u7528\u6237\uff08user\uff09\u6570\u636e\u8868",permalink:"/zh-cn/docs/recipes/manage-users/you-dont-need-a-user-table"}},l={},c=[],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4f7f\u7528\u7ba1\u7406-api-\u7ba1\u7406\u7528\u6237"},"\u4f7f\u7528\u7ba1\u7406 API \u7ba1\u7406\u7528\u6237"),(0,s.kt)("p",null,"\u300c",(0,s.kt)("a",{parentName:"p",href:"../../../docs/references/core/#%E7%AE%A1%E7%90%86-api"},"\u7ba1\u7406 API"),"\u300d\u662f\u4e00\u4e2a API \u96c6\u5408\uff0c\u7528\u4e8e\u7ba1\u7406 Logto \u6570\u636e\uff0c\u5305\u62ec\u7528\u6237\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u8c03\u7528\u7ba1\u7406 API \u65f6\u5fc5\u987b\u8fdb\u884c ",(0,s.kt)("a",{parentName:"p",href:"../../../docs/references/core/#%E8%AE%A4%E8%AF%81authentication"},"\u8ba4\u8bc1\uff08Authentication\uff09"),"\u3002"))),(0,s.kt)("p",null,"\u4e0e\u7528\u6237\u76f8\u5173\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nAPI \u90fd\u6302\u8f7d\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/users"),"\uff0c\u9664\u4e86\u7528\u6237\u6d3b\u52a8\uff0c\u5373\u7528\u6237\u65e5\u5fd7 ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/logs?userId=:userId"),"\u3002"),(0,s.kt)("p",null,"\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u53ef\u4ee5\u505a\u4ec0\u4e48\uff0c\u300c\u7ba1\u7406 API\u300d\u4e5f\u53ef\u4ee5\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"\u7ba1\u7406\u63a7\u5236\u53f0 - \u7528\u6237\u7ba1\u7406"),(0,s.kt)("th",{parentName:"tr",align:"left"},"\u7ba1\u7406 API"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E5%88%97%E5%87%BA%E5%92%8C%E6%90%9C%E7%B4%A2%E7%94%A8%E6%88%B7"},"\u5217\u51fa\u548c\u641c\u7d22\u7528\u6237")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users/get",target:"_blank"}," ",(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/users")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E6%9F%A5%E7%9C%8B%E5%92%8C%E6%9B%B4%E6%96%B0%E7%94%A8%E6%88%B7%E8%B5%84%E6%96%99"},"\u67e5\u770b\u7528\u6237\u8d44\u6599")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/get",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E6%9F%A5%E7%9C%8B%E7%94%A8%E6%88%B7%E6%B4%BB%E5%8A%A8"},"\u67e5\u770b\u7528\u6237\u6d3b\u52a8")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Logs/paths/~1api~1logs/get",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/logs?userId=:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7"},"\u6dfb\u52a0\u7528\u6237")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users/post",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"POST /api/users")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E6%9F%A5%E7%9C%8B%E5%92%8C%E6%9B%B4%E6%96%B0%E7%94%A8%E6%88%B7%E8%B5%84%E6%96%99"},"\u66f4\u65b0\u7528\u6237\u8d44\u6599")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/patch",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"PATCH /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E9%87%8D%E7%BD%AE%E7%94%A8%E6%88%B7%E5%AF%86%E7%A0%81"},"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"PATCH /api/users/:userId/password")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E5%88%A0%E9%99%A4%E7%94%A8%E6%88%B7"},"\u5220\u9664\u7528\u6237")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/delete",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"DELETE /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"../../../docs/recipes/manage-users/admin-console#%E6%9F%A5%E7%9C%8B%E5%92%8C%E6%9B%B4%E6%96%B0%E7%94%A8%E6%88%B7%E8%B5%84%E6%96%99"},"\u5220\u9664\u793e\u4ea4\u8fde\u63a5")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"DELETE /api/users/:userId/identities/:target")))))),(0,s.kt)("p",null,"\u67e5\u770b ",(0,s.kt)("a",{href:"/api/#tag/Users",target:"_blank"},"API \u53c2\u8003")," \u4ee5\u4e86\u89e3\u66f4\u591a."))}u.isMDXComponent=!0}}]);