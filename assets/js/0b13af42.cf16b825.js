"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99486],{92534:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=i(86070),o=i(76113);const r=i.p+"assets/images/api-resource-permissions-b4f0ace9f41ee89185eae761737919d3.webp",t=i.p+"assets/images/consent-permissions-d293ccdf983165b0ba97f438068837df.webp",a=i.p+"assets/images/organization-permissions-989a53603d79f367605a385e0c60ec74.webp",c=i.p+"assets/images/user-permissions-3a9953f1e4a8e0584bbbfbdeef0f52d0.webp",p={},d="Third-party application permissions management",l={id:"docs/recipes/logto-as-idp/permissions-management",title:"Third-party application permissions management",description:"Overview",source:"@site/docs/docs/recipes/logto-as-idp/permissions-management.mdx",sourceDirName:"docs/recipes/logto-as-idp",slug:"/docs/recipes/logto-as-idp/permissions-management",permalink:"/docs/recipes/logto-as-idp/permissions-management",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/logto-as-idp/permissions-management.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"configure-3rd-party-app-in-console",permalink:"/docs/recipes/logto-as-idp/configure-3rd-party-app-in-console"},next:{title:"\ud83d\udd10 Protected App",permalink:"/docs/recipes/protected-app/"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"Manage the permissions of your third-party applications",id:"manage-the-permissions-of-your-third-party-applications",level:2},{value:"User permissions (User profile scopes)",id:"user-permissions-user-profile-scopes",level:3},{value:"API resource permissions (API resource scopes)",id:"api-resource-permissions-api-resource-scopes",level:3},{value:"Organization permissions (Organization scopes)",id:"organization-permissions-organization-scopes",level:3},{value:"Consent page",id:"consent-page",level:3},{value:"User organization grant",id:"user-organization-grant",level:3}];function g(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"third-party-application-permissions-management",children:"Third-party application permissions management"}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"Third-party applications are applications that are not owned by Logto. They are usually owned by third-party service providers and are integrated with Logto as an identity provider (IdP) to authenticate users. For example, Slack, Zoom, and Notion are all third-party applications."}),"\n",(0,n.jsx)(s.p,{children:"It is important to ensure to grant the correct permissions to third-party applications when they are requesting access to your users' information. Logto allows you to manage the permissions of your third-party applications, including the user profile scopes, API resource scopes, and organization scopes."}),"\n",(0,n.jsx)(s.p,{children:"Unlike first-party applications,requesting a non-enabled scopes will result in an error. This is to ensure that your users' information is protected and only accessible by the third-party applications that you trust. Once the scopes are enabled, the third-party applications may request access to the enabled scopes. These scopes will be displayed on the consent page for your users to review and grant access to the third-party applications."}),"\n",(0,n.jsx)(s.h2,{id:"manage-the-permissions-of-your-third-party-applications",children:"Manage the permissions of your third-party applications"}),"\n",(0,n.jsxs)(s.p,{children:["Go to the ",(0,n.jsx)(s.strong,{children:"Application details"})," page and navigate to the ",(0,n.jsx)(s.strong,{children:"Permissions"})," tab and click on the ",(0,n.jsx)(s.strong,{children:"Add permissions"})," button to manage the permissions of your third-party applications."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"permissions tab",src:i(7913).A+"",width:"3092",height:"1906"})}),"\n",(0,n.jsx)(s.h3,{id:"user-permissions-user-profile-scopes",children:"User permissions (User profile scopes)"}),"\n",(0,n.jsx)(s.p,{children:"Those permissions are OIDC standard and Logto's essential user profile scopes used for accessing user claims. User claims will be returned in the ID token and userinfo endpoint accordingly."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:c,alt:"user permissions",width:700})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"profile"}),": OIDC standard scope, used for accessing user name and avatar."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"email"}),": OIDC standard scope, used for accessing user email."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"phone"}),": OIDC standard scope, used for accessing user phone number."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"custom_data"}),": Logto user profile scope, used for accessing ",(0,n.jsx)(s.a,{href:"/docs/references/users/custom-data",children:"user custom data"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"identity"}),": Logto user profile scope, used for accessing user linked ",(0,n.jsx)(s.a,{href:"/docs/references/users/social-identities",children:"social identities"})," information."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"role"}),": Logto user profile scope, used for accessing user ",(0,n.jsx)(s.a,{href:"/docs/recipes/rbac/",children:"role"})," information."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:["urn:logto:scope",":organizations"]}),": Logto user organization scope, used for accessing user organizations information. See ",(0,n.jsx)(s.a,{href:"/docs/recipes/organizations/",children:"organization"})," for more details."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsxs)(s.strong,{children:["urn:logto:scope",":organization_roles"]}),": Logto user organization scope, used for accessing user organization roles information."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Requesting a non-enabled user profile scope in the authorization request will result in an error."})}),"\n",(0,n.jsx)(s.h3,{id:"api-resource-permissions-api-resource-scopes",children:"API resource permissions (API resource scopes)"}),"\n",(0,n.jsxs)(s.p,{children:["Logto provides RBAC (Role-based access control) for API resources. API resources are the resources that are owned by your service and are protected by Logto. You may assign self-define API scopes to the third-party applications to access your API resources. Please refer to ",(0,n.jsx)(s.a,{href:"/docs/recipes/rbac/",children:"RBAC"})," and ",(0,n.jsx)(s.a,{href:"/docs/recipes/protect-your-api/",children:"protect your API"})," for more details."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:r,alt:"api resource permissions",width:700})}),"\n",(0,n.jsxs)(s.p,{children:["You may create and manage your API resource scopes under the ",(0,n.jsx)(s.strong,{children:"API resources"})," page in Logto console."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"API resource scopes that are not enabled to the third-party applications will be ignored when sending an authorization request. It won't be displayed on the user consent page and won't be granted by Logto."})}),"\n",(0,n.jsx)(s.h3,{id:"organization-permissions-organization-scopes",children:"Organization permissions (Organization scopes)"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/recipes/organizations/understand-how-it-works",children:"Organization permissions"})," are the scopes that defined exclusively for Logto organizations. They are used for accessing organization information and resources."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["In order to use Logto organization permissions, you need to enable the ",(0,n.jsxs)(s.strong,{children:["urn:logto:scope",":organizations"]})," user scope. Otherwise the organization permissions will be ignored when sending an authorization request."]})}),"\n",(0,n.jsx)("img",{src:a,alt:"organization permissions",width:700}),"\n",(0,n.jsxs)(s.p,{children:["You can define your own organization scopes under the organization template settings page. Please see ",(0,n.jsx)(s.a,{href:"/docs/recipes/organizations/configuration",children:"Configure organizations"})," for more details."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"Organization scopes that are not enabled to the third-party applications will be ignored when sending an authorization request. It won't be displayed on the user consent page and won't be granted by Logto."})}),"\n",(0,n.jsx)(s.h3,{id:"consent-page",children:"Consent page"}),"\n",(0,n.jsx)(s.p,{children:"Once all the permissions are enabled, the third-party applications may request access to the enabled permissions. These permissions will be displayed on the consent page for your users to review and grant access to the third-party applications."}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:t,alt:"consent permissions",width:500})}),"\n",(0,n.jsxs)(s.p,{children:["By clicking on the ",(0,n.jsx)(s.strong,{children:"Authorize"})," button, the user will grant access to the third-party applications to access those requested permissions."]}),"\n",(0,n.jsx)(s.h3,{id:"user-organization-grant",children:"User organization grant"}),"\n",(0,n.jsxs)(s.p,{children:["If the ",(0,n.jsxs)(s.strong,{children:["urn:logto:scope",":organizations"]})," user scope is enabled and requested by the third-party application, a organization selector will be displayed at the bottom of the consent page."]}),"\n",(0,n.jsx)(s.p,{children:"This allows your users to review and choose the organization they wish to grant access to. The third-party application will only receive access to the information and associated scopes of the selected organization."})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},7913:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/permission-settings-dcd3a168cada9477687e78d0c8ce81d8.webp"},76113:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>a});var n=i(30758);const o={},r=n.createContext(o);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);