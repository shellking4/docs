"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[63204],{39741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(11527),i=n(17279),o=n(17843);n.p,n.p,n.p;const r={sidebar_position:10},c="\ud83c\udfab Custom token claims",a={id:"docs/recipes/custom-jwt/README",title:"\ud83c\udfab Custom token claims",description:"Introduction",source:"@site/docs/docs/recipes/custom-jwt/README.md",sourceDirName:"docs/recipes/custom-jwt",slug:"/docs/recipes/custom-jwt/",permalink:"/docs/recipes/custom-jwt/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/custom-jwt/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"\ud83d\udcbe File storage provider",permalink:"/docs/recipes/configure-storage-providers/"},next:{title:"\ud83d\uddc4\ufe0f Enable central cache",permalink:"/docs/recipes/enable-central-cache/"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Create a custom token claims script",id:"create-a-custom-token-claims-script",level:2},{value:"Implement the <code>getCustomJwtClaims</code> function",id:"implement-the-getcustomjwtclaims-function",level:2},{value:"Edit the script",id:"edit-the-script",level:3},{value:"Input parameters",id:"input-parameters",level:3},{value:"Fetch external data",id:"fetch-external-data",level:3},{value:"Test the script",id:"test-the-script",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-custom-token-claims",children:"\ud83c\udfab Custom token claims"}),"\n",(0,s.jsx)(o.Z,{cloud:!0,oss:{major:1,minor:16}}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Access tokens play a critical role in the authentication and authorization process, carrying the subject's identity information and permissions between the client applications and the Logto server."}),"\n",(0,s.jsx)(t.p,{children:"Token claims are the key-value pairs that provide information about an entity or the token itself. The claims may include user information, token expiration time, permissions, and other metadata that are relevant to the authentication and authorization process."}),"\n",(0,s.jsx)(t.p,{children:"There are two forms of access tokens in Logto:"}),"\n",(0,s.jsxs)(t.p,{children:["JSON Web Token (JWT) is a popular format that encodes claims in a way that is both secure and readable by clients. Common claims like ",(0,s.jsx)(t.code,{children:"sub"}),", ",(0,s.jsx)(t.code,{children:"iss"}),", ",(0,s.jsx)(t.code,{children:"aud"}),", ",(0,s.jsx)(t.code,{children:"exp"}),", ",(0,s.jsx)(t.code,{children:"iat"}),", and ",(0,s.jsx)(t.code,{children:"jti"})," are used in line with the OAuth 2.0 protocol (See ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"RFC7519"})," for more details). JWT tokens allow clients to directly access claims without needing an additional validation step. In Logto, access tokens are issued in JWT format when a client requests authorization for a specific resource or organization."]}),"\n",(0,s.jsxs)(t.p,{children:["On the other hand, opaque tokens are tokens that are not self-contained and require an additional validation step via the token introspection endpoint. Despite the non-transparent format, opaque tokens can also be used to carry claims securely between parties. Token claims are securely stored in the Logto server and accessed by the client applications via the token introspection endpoint. Access tokens are issued in opaque format when no specific resource or organization is included in the authorization request. These tokens are primarily used for accessing the OIDC ",(0,s.jsx)(t.code,{children:"userinfo"})," endpoint and other general purposes."]}),"\n",(0,s.jsx)(t.p,{children:"In many cases, standard claims are not enough to meet the specific needs of your applications, whether you're using JWT or opaque tokens. To address this, Logto provides the flexibility to customize the claims within access tokens. With this feature, you can include any additional information necessary for your business logic, all securely transmitted in the tokens and retrievable via introspection in the case of opaque tokens."}),"\n",(0,s.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,s.jsxs)(t.p,{children:["Logto allows you to insert custom claims into the ",(0,s.jsx)(t.code,{children:"access token"})," through a callback function ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"}),". You may provide your implementation of the ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," function to return an object of custom claims. The return value will be merged with the original token payload and signed to generate the final access token."]}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n  participant U as User or user agent\n  participant IdP as Logto (identity provider)\n  participant SP as Service Provider\n\n  autonumber\n  U ->> IdP: Auth request (with credentials)\n  activate IdP\n  IdP--\x3e>IdP: Validate credentials &<br/>generate raw access token payload\n  rect rgb(191, 223, 255)\n  note over IdP: Custom token claims\n  IdP->>IdP: Run custom token claims script (`getCustomJwtClaims`) &<br/>get extra token claims\n  end\n  IdP--\x3e>IdP: Merge raw access token payload and extra token claims\n  IdP--\x3e>IdP: Sign & encrypt payload to get access token\n  deactivate IdP\n  IdP--\x3e>U: Issue JWT-format access token\n  par Get service via API\n  U->>SP: service request (with JWT access token)\n  SP--\x3e>U: service response\n  end"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Logto build-in token claims can NOT be overridden or modified. Custom claims will be added to the token as additional claims. If any custom claims conflict with the built-in claims, those custom claims will be ignored."})}),"\n",(0,s.jsx)(t.h2,{id:"create-a-custom-token-claims-script",children:"Create a custom token claims script"}),"\n",(0,s.jsx)(t.p,{children:"To add custom claims to the access token, you need to provide a script that returns an object containing those claims. The script should be written as a javascript function that returns an object with the custom claims."}),"\n",(0,s.jsxs)(t.p,{children:["Visit the ",(0,s.jsx)(t.strong,{children:"Logto Console"})," and click on the ",(0,s.jsx)(t.strong,{children:"Custom JWT"})," navigation item in the left sidebar."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Custom JWT landing",src:n(59810).Z+"",width:"4320",height:"2700"})}),"\n",(0,s.jsx)(t.p,{children:"There are two different types of access tokens that you can customize the access token claims for:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User access token"}),": The access token issued for the end users. E.g. for Web applications or mobile applications."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Machine-to-Machine access token"}),": The access token issued for the services or applications. E.g. for machine-to-machine applications."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Different types of access tokens may have different token payload contexts. You may customize the token claims for each type of access token separately."}),"\n",(0,s.jsxs)(t.p,{children:["Pick any type of access token you want to customize the token claims for, and click on the ",(0,s.jsx)(t.strong,{children:"Add custom claims"})," button to create a new script."]}),"\n",(0,s.jsxs)(t.h2,{id:"implement-the-getcustomjwtclaims-function",children:["Implement the ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," function"]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"Custom JWT"})," details page, you may find the script editor to write your custom token claims script."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Custom JWT details",src:n(18343).Z+"",width:"3146",height:"1818"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-script",children:"Edit the script"}),"\n",(0,s.jsx)(t.p,{children:"Use the code editor on the left side to modify the script. A default function signature with an empty object return value is provided for you to start with. You may modify the function to return an object of your own custom claims."}),"\n",(0,s.jsx)(t.p,{children:"This editor uses the javascript language server to provide basic syntax highlighting, code completion, and error checking. The input parameter are well typed and documented in jsDoc style. You may use the IntelliSense of the editor to access the properties of the input object correctly. You may find the detailed parameter definitions on the right side of the page."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["This function will be exported as a module. Make sure remain the function name as ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," so the module can export the function correctly."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  return {};\n};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"input-parameters",children:"Input parameters"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," function takes an object as the input parameter. The input object contains the following properties:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"token"})}),"\n",(0,s.jsx)(t.p,{children:"The token payload object. This object contains original token claims and metadata that you may need to access in the script."}),"\n",(0,s.jsx)(t.p,{children:"You may find the detailed type definition of the token payload object and user data object on the right side of the page. The IntelliSense of the editor will also help you access these properties of the input object correctly."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"User access token payload object:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"jti"})}),(0,s.jsx)(t.td,{children:"The unique JWT id"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"aud"})}),(0,s.jsx)(t.td,{children:"The audience of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scope"})}),(0,s.jsx)(t.td,{children:"The scopes of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clientId"})}),(0,s.jsx)(t.td,{children:"The client id of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"accountId"})}),(0,s.jsx)(t.td,{children:"The user id of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"expiresWithSession"})}),(0,s.jsx)(t.td,{children:"Whether the token will expire with the session"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"grantId"})}),(0,s.jsx)(t.td,{children:"The current authentication grant id of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gty"})}),(0,s.jsx)(t.td,{children:"The grant type of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"kind"})}),(0,s.jsx)(t.td,{children:"The token kind"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"AccessToken"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Machine-to-machine access token payload object:"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"jti"})}),(0,s.jsx)(t.td,{children:"The unique JWT id"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"aud"})}),(0,s.jsx)(t.td,{children:"The audience of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scope"})}),(0,s.jsx)(t.td,{children:"The scopes of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"clientId"})}),(0,s.jsx)(t.td,{children:"The client id of the token"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"kind"})}),(0,s.jsx)(t.td,{children:"The token kind"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ClientCredentials"})})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"context"})," (Only available for user access token)"]}),"\n",(0,s.jsx)(t.p,{children:"The context object contains the user data and grant data that relevant to the current authorization process."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"User data object:"})}),"\n",(0,s.jsxs)(t.p,{children:["For user access token, Logto provides additional user data context for you to access. The user data object contains all the user profile data and organization membership data you may need to set up the custom claims. Please check ",(0,s.jsx)(t.a,{href:"/docs/references/users/",children:"Users"})," and ",(0,s.jsx)(t.a,{href:"/docs/recipes/organizations/",children:"Organizations"})," for more details."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Grant data object:"})}),"\n",(0,s.jsxs)(t.p,{children:["For user access token granted by impersonation token exchange, Logto provides additional grant data context for you to access. The grant data object contains the custom context from the subject token. Please check ",(0,s.jsx)(t.a,{href:"../impersonation/#customizing-jwt-claims",children:"Impersonation"})," for more details."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"environmentVariables"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.strong,{children:"Set environment variables"})," section on the right to set up the environment variables for your script. You may use these variables to store sensitive information or configuration data that you don't want to hardcode in the script. e.g. API keys, secrets, or URLs."]}),"\n",(0,s.jsxs)(t.p,{children:["All the environment variables you set here will be available in the script. Use the ",(0,s.jsx)(t.code,{children:"environmentVariables"})," object in the input parameter to access these variables."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"api"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"api"})," object provides a set of utility functions that you may use in your script for additional access control over the token issuing process. The ",(0,s.jsx)(t.code,{children:"api"})," object contains the following functions:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"api.denyAccess(message?: string): void\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"api.denyAccess"})," function allows you to deny the token issuing process with a custom message. You may use this function to enforce additional access validation over the token issuing process."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"fetch-external-data",children:"Fetch external data"}),"\n",(0,s.jsxs)(t.p,{children:["You may use the node built-in ",(0,s.jsx)(t.code,{children:"fetch"})," function to fetch external data in your script. The ",(0,s.jsx)(t.code,{children:"fetch"})," function is a promise-based function that allows you to make HTTP requests to external APIs."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const getCustomJwtClaims = async ({ environmentVariables }) => {\n  const response = await fetch('https://api.example.com/data', {\n    headers: {\n      Authorization: `Bearer ${environmentVariables.API_KEY}`,\n    },\n  });\n\n  const data = await response.json();\n\n  return {\n    data,\n  };\n};\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"Be aware, any external data fetching may introduce latency to the token issuing process. Make sure the external API is reliable and fast enough to meet your requirements. Additionally:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Handle the error and timeout properly in your script to avoid the token issuing process being blocked."}),"\n",(0,s.jsx)(t.li,{children:"Use proper authorization headers to protect your external API from unauthorized access."}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"test-the-script",children:"Test the script"}),"\n",(0,s.jsxs)(t.p,{children:["Make sure to test your script before saving it. Click on the ",(0,s.jsx)(t.code,{children:"Test context"})," tab on the right side of the page to modify the mock token payload and user data context for testing."]}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.code,{children:"Run test"})," on the right-top corner of the editor to run the script with the mock data. The output of the script will be displayed in the ",(0,s.jsx)(t.code,{children:"Test Result"})," drawer."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Test result",src:n(67760).Z+"",width:"2682",height:"1322"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The test result is the output of the ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"}),' function with the mock data you set ("extra token claims" got after completing the step 3 in ',(0,s.jsx)(t.a,{href:"#how-does-it-work",children:"the sequence diagram"}),"). The real token payload and user data context will be different when the script is executed in the token issuing process."]})}),"\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Create"})," button to save the script. The custom token claims script will be saved and applied to the access token issuing process."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},17843:(e,t,n)=>{n.d(t,{Z:()=>r});const s="availability_kRMk";var i=n(11527);const o=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,r=e=>{let{cloud:t,oss:n}=e;return(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${o(t)}`}),(0,i.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${o(n)}`})]})}},18343:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/custom-jwt-details-91883a075d4d545429a1f28d54844693.webp"},59810:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/custom-jwt-landing-98c725fa96b64187f593a16ca3487656.webp"},67760:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/test-result-d68866ebb16ca80543570aa86796c6b2.webp"},17279:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(50959);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);