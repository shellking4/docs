"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46103],{10765:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(50959);var a=n(5341),i=n(91816),o=n(83604),r=n(80392),s=n(51662),l=n(57532),c=n(47228),d=n(35297),u=n(11527);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,r.C)(),{title:n,description:a,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var g=n(54542),p=n(88458);function f(){const e=(0,p.i)();return(0,u.jsx)(g.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var v=n(12058),x=n(46631);function b(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:i}=(0,r.C)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:h}=a,{hide_table_of_contents:g,toc_min_heading_level:p,toc_max_heading_level:f}=d;return(0,u.jsxs)(s.Z,{sidebar:t,toc:!g&&i.length>0?(0,u.jsx)(v.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:f}):void 0,children:[h&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(l.Z,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(r.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(f,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},12058:(e,t,n)=>{n.d(t,{Z:()=>c});n(50959);var a=n(5341),i=n(6479);const o={tableOfContents:"tableOfContents_Xaln",docItemContainer:"docItemContainer_wcTt"};var r=n(11527);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.Z,{...n,linkClassName:s,linkActiveClassName:l})})}},6479:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(50959),i=n(29473);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(77678),m=n(11527);function h(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,i.L)(),f=c??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:f,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[s,l,f,v])),(0,m.jsx)(g,{toc:x,className:n,linkClassName:s,...h})}},46631:(e,t,n)=>{n.d(t,{Z:()=>h});n(50959);var a=n(5341),i=n(47228),o=n(54542),r=n(11527);function s(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(83604),u=n(37545);function m(e){let{className:t}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},88458:(e,t,n)=>{n.d(t,{C:()=>d,i:()=>u});var a=n(28734),i=n(12922),o=n(58270);var r=n(80392);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,i.Z)(),{withBaseUrl:n}=(0,a.C)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:i,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,h=a.image??i.image,g=i.keywords??[],p=`${t.url}${o.permalink}`,f=m?s(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:u,datePublished:r,...f?{dateModified:f}:{},...l(o.authors),...c(h,n,d),...g?{keywords:g}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.C)(),{siteConfig:d}=(0,i.Z)(),{withBaseUrl:u}=(0,a.C)(),{date:m,title:h,description:g,frontMatter:p,lastUpdatedAt:f}=n,v=t.image??p.image,x=p.keywords??[],b=f?s(f):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:h,name:h,description:g,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,h),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},50029:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(17854),i=n(77678),o=n(80392),r=n(37545),s=n(5341),l=n(50959);const c="title_xvU1",d="listTitle_ozbw";var u=n(11527);const m=e=>{let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,o.C)(),{permalink:m,title:h}=n,g=a?"h1":"h2",p=window.location.pathname.startsWith("/blog"),f=(0,l.useCallback)((()=>{const e=new URL(a?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),t=new URLSearchParams(window.location.search);for(const[n,a]of t.entries())e.searchParams.append(n,a);return e.pathname.endsWith("/")||(e.pathname+="/"),e}),[a]);return(0,l.useEffect)((()=>{if(!p)return;for(const t of document.head.querySelectorAll("link"))["canonical","alternate"].includes(t.getAttribute("rel")??"")&&t.remove();const e=document.createElement("link");e.setAttribute("rel","canonical"),e.href=f().href,document.head.append(e)}),[f,p]),(0,u.jsxs)(u.Fragment,{children:[p&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Z,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,u.jsx)("a",{href:f().href,children:"Click here"})," to see this article in the new blog."]}),(0,u.jsx)("hr",{})]}),(0,u.jsx)(g,{className:(0,s.W)(c,!a&&d,t),itemProp:"headline",children:a?h:(0,u.jsx)(i.Z,{itemProp:"url",to:m,children:h})})]})},h=()=>(0,u.jsx)(a.Z,{children:()=>(0,u.jsx)(m,{})})}}]);