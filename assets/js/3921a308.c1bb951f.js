"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[57216],{88859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(86070),s=i(15658);const r={sidebar_position:2,sidebar_label:"End-user SSO experience"},o="End-user SSO experience",d={id:"docs/recipes/single-sign-on/end-user-sso-experience",title:"End-user SSO experience",description:"Logto offers an integrated Single Sign-On (SSO) experience, seamlessly aligning with your existing sign-in configurations.",source:"@site/docs/docs/recipes/single-sign-on/end-user-sso-experience.md",sourceDirName:"docs/recipes/single-sign-on",slug:"/docs/recipes/single-sign-on/end-user-sso-experience",permalink:"/docs/recipes/single-sign-on/end-user-sso-experience",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/single-sign-on/end-user-sso-experience.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"End-user SSO experience"},sidebar:"docsSidebar",previous:{title:"Okta",permalink:"/docs/recipes/single-sign-on/configure-sso/okta"},next:{title:"\ud83d\udc64 User profiles",permalink:"/docs/recipes/user-profile/"}},a={},c=[{value:"Initiating SSO",id:"initiating-sso",level:2},{value:"Redirecting to the identity provider",id:"redirecting-to-the-identity-provider",level:2},{value:"First-time SSO use",id:"first-time-sso-use",level:2},{value:"Multi-Factor Authentication (MFA) and SSO",id:"multi-factor-authentication-mfa-and-sso",level:2},{value:"Deleting an enterprise connector",id:"deleting-an-enterprise-connector",level:2}];function l(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"end-user-sso-experience",children:"End-user SSO experience"})}),"\n",(0,t.jsx)(n.p,{children:"Logto offers an integrated Single Sign-On (SSO) experience, seamlessly aligning with your existing sign-in configurations."}),"\n",(0,t.jsx)(n.h2,{id:"initiating-sso",children:"Initiating SSO"}),"\n",(0,t.jsx)(n.p,{children:"SSO is activated when users attempt to sign in using an enterprise email domain configured for SSO. This process bypasses standard verification methods like passwords."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Methods to Trigger SSO:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SSO button"}),": On the sign-in or sign-up page, users can click \u201cUse Single Sign-On\u201d. They are then prompted to enter their enterprise email. Email domain detection redirects users to their enterprise identity provider."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Universal email sign-in"}),": If a user enters an enterprise email with an SSO-enabled email domain during a standard sign-in process, the \u201cSign in\u201d button automatically changes to \u201cSingle Sign-On\u201d. This premise is that the Email sign-in method is enabled in your service."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Initiating SSO flows.webp",src:i(82664).A+"",width:"3864",height:"2020"})}),"\n",(0,t.jsx)(n.h2,{id:"redirecting-to-the-identity-provider",children:"Redirecting to the identity provider"}),"\n",(0,t.jsx)(n.p,{children:"When users use Single Sign-On, where they go next depends on how your enterprise email domains are set up in Logto:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Single connector"}),": If a user's email domain is linked to only one enterprise connector, they'll go straight to the identity provider connected to that connector. There's no need for them to choose anything."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multiple connectors"}),": If a user's email domain is linked to more than one connector, they get to pick which identity provider they want to use from the options available to them."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"first-time-sso-use",children:"First-time SSO use"}),"\n",(0,t.jsx)(n.p,{children:"Logto syncs primary email addresses from the identity provider, accommodating both new and existing users:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"For new users"}),": If someone is signing in for the first time using their work email address, Logto automatically sets up a new account for them. This means they don't have to go through the usual account creation process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"For existing users"}),": If the work email address used for SSO is already connected to an account in Logto, the system will recognize this and link the SSO sign-in to the existing account. This way, there's no need to create a new account or user ID - everything stays under the existing account."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: the situation could be different when SAML attribute mapping is not correctly configured or user email is not provided by the identity provider."}),"\n",(0,t.jsx)(n.h2,{id:"multi-factor-authentication-mfa-and-sso",children:"Multi-Factor Authentication (MFA) and SSO"}),"\n",(0,t.jsx)(n.p,{children:"By default, MFA is bypassed for users signing in via Enterprise SSO. Clients always set MFA in the enterprise identity provider for their employees."}),"\n",(0,t.jsx)(n.h2,{id:"deleting-an-enterprise-connector",children:"Deleting an enterprise connector"}),"\n",(0,t.jsx)(n.p,{children:"When you remove a connector from Logto:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User accounts remain"}),": The user accounts themselves are not deleted. Only their connection to the enterprise identity provider is cut off."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Next time users sign in"}),": The next time these users try to sign in, they'll be asked to use a different way to log in. This could be the standard sign-in method you've set up in Logto, like signing in with an email and a password. If users haven't set a password previously, they will be guided to create one at this stage."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},82664:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/initiating-sso-flows-8f8ae411b75d3333ffd5244543a7bdec.webp"},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(30758);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);