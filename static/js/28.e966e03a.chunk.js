(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[28],{457:function(n,e,t){"use strict";t.r(e);var r,i=t(52),a=t(524),o=t(770),l=t(8),s=t(76),c=t(1),d=l.default.div(r||(r=Object(i.a)(["\n  margin-top: 20px;\n"])));e.default=function(){var n=Object(s.a)().t;return Object(c.jsx)(a.a,{title:n("MyProfilePage.EditData"),children:Object(c.jsx)(d,{children:Object(c.jsx)(o.MyProfileForm,{})})})}},524:function(n,e,t){"use strict";var r,i,a,o,l,s,c,d=t(52),u=t(177),p=t(70),m=t(66),h=t(0),f=t(8),x=t(125),b=t(13),g=t(63),v=t(14),j=t(31),y=t(58),O=t(124),w=t(1),_=f.default.div(r||(r=Object(d.a)(["\n  padding: ",";\n  background: ",";\n  border-radius: ","px;\n"])),y.isMobile?"20px":"40px",(function(n){var e=n.theme;return"dark"===e.mode?e.dm__cardBackgroundColor:e.cardBackgroundColor}),(function(n){return n.theme.cardRadius})),C=function(n){var e=n.title,t=n.icon,r=n.children;return Object(w.jsxs)(_,{children:[Object(w.jsx)(O.IconTitle,{title:e,icon:t,as:"h2",level:4}),r]})},M=t(176),P=t(76),k=f.default.div(i||(i=Object(d.a)(["\n  transition: max-height 0.5s ease-in-out;\n  max-height: 5000px;\n  ",";\n\n  .collapse-header {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    align-items: start;\n    gap: 6px;\n    cursor: pointer;\n\n    &__heading {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        color: ",";\n    }\n\n    &__icon {\n      color: ",";\n        opacity: 0.6;\n        width: 12px;\n        margin-top: 3.5px;\n        transition: rotate 0.2s ease-in-out;\n        rotate: ",";\n\n        &:hover {\n            svg {\n                opacity: 1;\n            }\n        }\n    }\n"])),(function(n){return n.isOpen?"":"max-height: 1.2em; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"}),(function(n){var e=n.theme;return"dark"===e.mode?e.dm__textColor:e.textColor}),(function(n){var e=n.theme;return"dark"===e.mode?e.dm__textColor:e.textColor}),(function(n){return n.isOpen?"180deg":"0"})),N=function(n){var e=n.headerTitle,t=n.headerClassName,r=n.initialValue,i=n.children,a=Object(h.useState)(null!==r&&void 0!==r&&r),o=Object(p.a)(a,2),l=o[0],s=o[1];return Object(w.jsxs)(k,{isOpen:l,children:[Object(w.jsxs)("div",{className:"collapse-header ".concat(null!==t&&void 0!==t?t:""),onClick:function(){return s((function(n){return!n}))},onKeyUp:function(n){return"Enter"===n.code&&s((function(n){return!n}))},role:"button",tabIndex:0,children:[Object(w.jsx)("span",{className:"collapse-header__heading",children:e}),Object(w.jsx)("svg",{className:"arrows collapse-header__icon",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",fill:"currentColor"})})]}),i]})},z=Object(f.default)("aside")(a||(a=Object(d.a)(["\n  ","\n  transform: ",";\n  background: ",";\n  .user-main-sidebar {\n    margin-bottom: ",";\n    .avatar-wrapper {\n      margin-bottom: ",";\n      display: flex;\n      justify-content: flex-start;\n      align-items: ",";\n      flex-direction: ",";\n    }\n    .name {\n      margin: ",";\n    }\n    .navigation {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      row-gap: 15px;\n      margin-bottom: 50px;\n      a {\n        text-decoration: none;\n        &:hover {\n          p {\n            color: ",";\n          }\n        }\n        &.selected {\n          p {\n            color: ",';\n          }\n        }\n      }\n    }\n    .logout-wrapper {\n      position: relative;\n      &:before {\n        position: absolute;\n        content: "";\n        left: 0;\n        top: -16px;\n        height: 1px;\n        width: 24px;\n        background: ',";\n      }\n      button {\n        appearance: none;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        p {\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .progress-container {\n    display: flex;\n    flex-direction: ",";\n    flex-wrap: wrap;\n    justify-content: ",";\n    align-items: ",";\n  }\n"])),y.isMobile&&"\n    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    transition: all 0.25s;\n    z-index: 1000;\n    overflow: scroll;\n    ",(function(n){return n.opened&&y.isMobile?"translate(0, 0%)":!n.opened&&y.isMobile?"translate(0, 91%)":"translate(0, 0)"}),(function(n){var e=n.theme;return"dark"===e.mode?e.dm__background:e.background}),y.isMobile?"70px":"22px",y.isMobile?"30px":"21px",y.isMobile?"center":"flex-start",y.isMobile?"row":"column",y.isMobile?"0 0 0 21px":"16px 0 0 0",(function(n){return n.theme.primaryColor}),(function(n){return n.theme.primaryColor}),(function(n){var e=n.theme;return"dark"===e.mode?e.gray5:e.gray1}),(function(n){return n.theme.primaryColor}),y.isMobile?"row":"column",y.isMobile?"space-between":"flex-start",y.isMobile?"center":"flex-start"),T=f.default.div(o||(o=Object(d.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n    margin-right: ",";\n  }\n  .number {\n    color: ",";\n  }\n  .label {\n    margin-left: ",";\n    margin-top: 10px;\n    position: relative;\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 700;\n    max-width: ",';\n  }\n\n  .list-box {\n    padding: 0;\n    list-style: none;\n    width: 100%;\n    grid-column: 1/3;\n    font-family: "Mulish", sans-serif;\n  }\n\n  .list-box-item {\n    font-size: 14px;\n\n    :not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    &__time {\n      color: ',";\n      opacity: 0.6;\n      margin: 0;\n      display: flex;\n      align-items: center;\n\n      &:first-of-type {\n        margin-top: 8px;\n      }\n\n      svg {\n        width: 12px;\n        height: auto;\n        fill: ",";\n        opacity: 0.6;\n      }\n    }\n\n    &__value {\n      font-size: 12px;\n      line-height: 1.5;\n      margin-left: 4px;\n    }\n  }\n"])),y.isMobile?0:"14px",y.isMobile?"10px":0,(function(n){return n.theme.primaryColor}),y.isMobile?0:"11px",y.isMobile?"80px":"unset",(function(n){var e=n.theme;return"dark"===e.mode?e.dm__textColor:e.textColor}),(function(n){var e=n.theme;return"dark"===e.mode?e.dm__textColor:e.textColor})),S=Object(f.default)("div")(l||(l=Object(d.a)(['\n  padding: 17px 15px;\n  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  &:after {\n    content: "";\n    display: ',";\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(-45deg);\n    width: 12px;\n    height: 12px;\n    border-left: 2px solid\n      ",";\n    border-bottom: 2px solid\n      ",";\n  }\n  .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n  }\n"])),(function(n){return n.opened?"block":"none"}),(function(n){var e=n.theme;return"dark"===e.mode?e.gray5:e.gray1}),(function(n){var e=n.theme;return"dark"===e.mode?e.gray5:e.gray1})),E=function(){var n,e,t,r,i,a,o,l,s,c=Object(h.useState)(!1),d=Object(p.a)(c,2),u=d[0],O=d[1],_=Object(h.useContext)(m.EscolaLMSContext),k=_.user,E=_.logout,A=_.certificates,B=_.progress,F=_.fetchProgress,R=Object(P.a)().t,D=Object(f.useTheme)(),I=Object(v.g)(),L=function(n){if(!n)return"-";var e=n,t=Math.trunc(n/3600);t>=1&&(e-=3600*t);var r=Math.trunc(n/60);return r>=1&&(e-=60*r),"\n        ".concat(t>=1?t+"h ":"").concat(r>=1?r+"min ":"").concat(e>=1?e+"s":"","\n    ")};Object(h.useEffect)((function(){F()}),[]);var U=Object(h.useMemo)((function(){return(B.value||[]).filter((function(n){return n.finish_date}))}),[B]),V=[{key:"COURSES",title:R("MyProfilePage.MyCourses"),url:"/user/my-profile"},{key:"CONSULTATIONS",title:R("MyProfilePage.MyConsultations"),url:"/user/my-consultations"},{key:"EVENTS",title:R("MyProfilePage.MyStationaryEvents"),url:"/user/my-stationary-events"},{key:"ORDERS",title:R("MyProfilePage.OrdersHistory"),url:"/user/my-orders"},{key:"NOTIFICATIONS",title:R("MyProfilePage.Notifications"),url:"/user/my-notifications"},{key:"EDIT",title:R("MyProfilePage.EditData"),url:"/user/my-data"}];return Object(w.jsxs)(z,{opened:u,children:[y.isMobile&&Object(w.jsx)(S,{opened:u,onClick:function(){return O(!u)},children:Object(w.jsxs)("div",{className:"content-wrapper",children:[null!==(n=k.value)&&void 0!==n&&n.avatar?Object(w.jsx)(x.Avatar,{size:"extraSmall",src:null===(e=k.value)||void 0===e?void 0:e.avatar,alt:""}):Object(w.jsx)(M.d,{mode:"dark"===D.mode?"light":"dark"}),Object(w.jsx)(b.Text,{children:Object(w.jsxs)("strong",{children:[null===(t=k.value)||void 0===t?void 0:t.first_name," ",null===(r=k.value)||void 0===r?void 0:r.last_name]})})]})}),Object(w.jsx)("div",{className:"user-main-sidebar",children:Object(w.jsxs)(C,{title:R("MyProfilePage.YourAccount"),icon:Object(w.jsx)(M.s,{}),children:[Object(w.jsxs)("div",{className:"avatar-wrapper",children:[null!==(i=k.value)&&void 0!==i&&i.avatar?Object(w.jsx)(x.Avatar,{size:"small",src:null===(a=k.value)||void 0===a?void 0:a.avatar,alt:""}):Object(w.jsx)(M.d,{mode:"dark"===D.mode?"light":"dark"}),Object(w.jsxs)(g.Title,{className:"name",level:4,as:"h3",children:[null===(o=k.value)||void 0===o?void 0:o.first_name," ",null===(l=k.value)||void 0===l?void 0:l.last_name]})]}),Object(w.jsx)("nav",{className:"navigation",children:V.map((function(n){return Object(w.jsx)(j.d,{activeClassName:"selected",to:n.url,children:Object(w.jsx)(b.Text,{size:"14",children:n.title})},n.key)}))}),Object(w.jsx)("div",{className:"logout-wrapper",children:Object(w.jsx)("button",{onClick:function(){return E().then((function(){return I.push("/")}))},children:Object(w.jsx)(b.Text,{children:R("MyProfilePage.Logout")})})})]})}),Object(w.jsx)("div",{className:"user-progress sidebar",children:Object(w.jsx)(C,{title:R("MyProfilePage.MyProgress"),icon:Object(w.jsx)(M.o,{}),children:Object(w.jsxs)("div",{className:"progress-container",children:[Object(w.jsxs)(T,{children:[Object(w.jsx)(g.Title,{className:"number",level:1,children:U.length}),Object(w.jsx)(b.Text,{className:"label",children:R("MyProfilePage.FinishedCourses")}),Object(w.jsx)("ul",{className:"list-box",children:U.map((function(n,e){return Object(w.jsx)("li",{className:"list-box-item",children:Object(w.jsxs)(N,{initialValue:0===e,headerTitle:n.course.title,headerClassName:"list-box-item__title",children:[n.start_date&&n.finish_date&&Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})}),Object(w.jsxs)("span",{className:"list-box-item__value",children:[new Date(n.start_date).toLocaleDateString()," - ",new Date(n.finish_date).toLocaleDateString()]})]}),Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z"})}),Object(w.jsx)("span",{className:"list-box-item__value",children:L(n.total_spent_time)})]})]})})}))})]}),Object(w.jsxs)(T,{children:[Object(w.jsx)(g.Title,{className:"number",level:1,children:null===(s=A.list)||void 0===s?void 0:s.data.length}),Object(w.jsx)(b.Text,{className:"label",children:R("MyProfilePage.TotalCertificates")})]})]})})})]})},A=f.default.div(s||(s=Object(d.a)(["\n  position: relative;\n  z-index: 0;\n  padding: ",";\n  background: ",";\n  border-radius: ",";\n  @media (max-width: 991px) {\n    padding: 60px 20px 20px 20px;\n    margin-bottom: 20px;\n  }\n\n  .actions {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n"])),(function(n){return n.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}),(function(n){var e=n.theme;return"dark"===e.mode?e.dm__cardBackgroundColor:e.cardBackgroundColor}),(function(n){return n.theme.cardRadius})),B=function(n){var e=n.title,t=n.withTabs,r=n.actions;return Object(w.jsxs)(A,{withTabs:t,children:[Object(w.jsx)(g.Title,{level:1,children:e}),r&&Object(w.jsx)("div",{className:"actions",children:r})]})},F=t(59),R=t(122),D=f.default.section(c||(c=Object(d.a)(["\n  .courses-wrapper {\n    margin-top: -70px;\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin-left: 40px;\n    }\n  }\n"])));e.a=function(n){var e=n.children,t=n.title,r=n.withTabs,i=n.actions,a=Object(h.useContext)(m.EscolaLMSContext).user,o=Object(v.g)();return Object(h.useEffect)((function(){a.loading||a.value||o.push("/login")}),[]),Object(w.jsx)(u.a,{metaTitle:t,children:Object(w.jsx)(D,{children:Object(w.jsx)(R.a,{children:Object(w.jsxs)(F.Row,{children:[Object(w.jsxs)(F.Col,{lg:9,children:[Object(w.jsx)(B,{title:t,withTabs:r,actions:i}),e]}),Object(w.jsx)(F.Col,{lg:3,children:Object(w.jsx)(E,{})})]})})})})}},770:function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__assign||function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},i.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),l=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&a(e,n,t);return o(e,n),e};Object.defineProperty(e,"__esModule",{value:!0}),e.MyProfileForm=void 0;var s,c,d,u=t(1),p=t(127),m=t(0),h=t(30),f=t(66),x=t(59),b=t(771),g=l(t(8)),v=t(24),j=g.default.div(s||(s=r(["\n  text-align: center;\n  h2,\n  h3,\n  h4 {\n    font-size: ",";\n    text-align: center;\n  }\n  p {\n    margin: 15px 0;\n  }\n  .upload {\n    padding-top: ",";\n  }\n"],["\n  text-align: center;\n  h2,\n  h3,\n  h4 {\n    font-size: ",";\n    text-align: center;\n  }\n  p {\n    margin: 15px 0;\n  }\n  .upload {\n    padding-top: ",";\n  }\n"])),(function(n){return n.mobile?"18px":"28px"}),(function(n){return n.mobile?"15px":"30px"})),y=g.default.div(c||(c=r(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  .lms-checkbox {\n    margin: 20px 0;\n  }\n  .lsm-input {\n    margin: 30px 0;\n    &.has-error,\n    &.has-helper {\n      margin-bottom: -15px;\n    }\n  }\n  button {\n    margin-top: 10px;\n  }\n  p {\n    margin: 15px 0;\n  }\n  p,\n  a {\n    font-size: 14px;\n  }\n  h2,\n  h3,\n  h4 {\n    font-size: ",";\n  }\n  form {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n"],["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  .lms-checkbox {\n    margin: 20px 0;\n  }\n  .lsm-input {\n    margin: 30px 0;\n    &.has-error,\n    &.has-helper {\n      margin-bottom: -15px;\n    }\n  }\n  button {\n    margin-top: 10px;\n  }\n  p {\n    margin: 15px 0;\n  }\n  p,\n  a {\n    font-size: 14px;\n  }\n  h2,\n  h3,\n  h4 {\n    font-size: ",";\n  }\n  form {\n    width: 100%;\n    margin-bottom: 15px;\n  }\n"])),(function(n){return n.mobile?"18px":"28px"}));e.MyProfileForm=function(n){var e=n.onSuccess,t=n.onError,r=n.mobile,a=void 0!==r&&r,o=n.className,l=void 0===o?"":o,s=(0,m.useState)({first_name:"",last_name:"",email:"",phone:""}),c=s[0],d=s[1],g=(0,h.useTranslation)().t,O=(0,m.useContext)(f.EscolaLMSContext),w=O.updateProfile,_=O.fields,C=O.fetchFields,M=O.user,P=O.updateAvatar,k=O.fetchProfile,N=M.loading;(0,m.useEffect)((function(){k(),C({class_type:"App\\Models\\User"})}),[]),(0,m.useEffect)((function(){!M.loading&&M.value&&d((function(n){return Object.assign({},n,i({},M.value))}))}),[M]),(0,m.useEffect)((function(){var n=_&&_.list||[];d((function(e){return i(i({},e),n.filter((function(n){return!(n.name in e)})).reduce((function(n,e){var t;return i(i({},n),((t={})[e.name]="boolean"!==e.type&&e.default,t))}),{}))}))}),[_]);var z=(0,m.useCallback)((function(n){var e;return!!((null===n||void 0===n?void 0:n.rules)&&(null===n||void 0===n?void 0:n.rules.length)>0&&(null===(e=n.rules)||void 0===e?void 0:e.find((function(n){return"required"===n}))))}),[_]),T=(0,m.useCallback)((function(n){n.target.files&&n.target.files[0]&&P(n.target.files[0])}),[P]);return(0,u.jsxs)(x.Container,{children:[(0,u.jsx)(x.Row,{children:(0,u.jsx)(x.Col,i({sm:12},{children:(0,u.jsxs)(j,i({className:"wellms-component ".concat(l),mobile:a},{children:[(0,u.jsx)(v.Title,i({level:3,as:"h2"},{children:g("MyProfileForm.Heading")})),(0,u.jsx)(v.Text,i({level:3},{children:g("MyProfileForm.Subtitle")}))]}))}))}),(0,u.jsxs)(x.Row,{children:[(0,u.jsx)(x.Col,i({sm:a?12:2,className:"upload-column"},{children:(0,u.jsx)(j,i({className:"wellms-component",mobile:a},{children:(0,u.jsx)(b.Upload,{path:c.path_avatar,url:c.avatar,accept:"image/*",onChange:T})}))})),(0,u.jsx)(x.Col,i({sm:a?12:8},{children:(0,u.jsx)(y,i({className:"wellms-component",mobile:a},{children:(0,u.jsx)(p.Formik,i({enableReinitialize:!0,initialValues:c,validate:function(n){var e={};return n.first_name||(e.first_name=g("Required")),n.last_name||(e.last_name=g("Required")),n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)||(e.email=g("Wrong email")):e.email=g("Required"),n.phone&&!/\d{9}$/i.test(n.phone)&&(e.phone=g("Wrong phone number")),_.list&&_.list.map((function(t){z(t)&&(n[t.name]||(e[t.name]=g("Required")))})),e},onSubmit:function(n,r){var a=r.setSubmitting,o=r.resetForm,l=r.setErrors;w(i({},n)).then((function(){e&&e()})).catch((function(n){o(),l(i({error:n.data.message},n.data.errors)),t&&t(n)})).finally((function(){a(!1),k()}))}},{children:function(n){var e=n.values,t=n.errors,r=n.touched,a=n.handleChange,o=n.handleBlur,l=n.handleSubmit,s=n.isSubmitting;return(0,u.jsxs)("form",i({onSubmit:l},{children:[t&&t.error&&(0,u.jsx)(v.Text,i({type:"danger"},{children:t.error})),(0,u.jsx)(v.Input,{label:g("First name"),type:"text",name:"first_name",onChange:a,onBlur:o,value:e.first_name,error:r.first_name&&t.first_name,required:!0}),(0,u.jsx)(v.Input,{label:g("Last name"),type:"text",name:"last_name",onChange:a,onBlur:o,value:e.last_name,error:r.last_name&&t.last_name,required:!0}),(0,u.jsx)(v.Input,{label:g("Email"),className:"form-control grey",type:"email",name:"email",onChange:a,onBlur:o,value:e.email,error:r.email&&t.email,required:!0}),(0,u.jsx)(v.Input,{label:g("Phone"),type:"text",name:"phone",onChange:a,onBlur:o,value:e.phone,error:r.phone&&t.phone}),_&&Array.isArray(_.list)&&_.list.filter((function(n){return"varchar"===n.type||"text"===n.type})).map((function(n,i){return"varchar"===n.type?(0,u.jsx)(v.Input,{required:z(n),label:g("AdditionalFields.".concat(n.name)),type:"text",name:n.name,onChange:a,onBlur:o,value:String(e[n.name])||"",error:t[n.name]&&r[n.name]},"".concat(n).concat(i)):(0,u.jsx)(v.TextArea,{rows:10,required:z(n),label:g("AdditionalFields.".concat(n.name)),name:n.name,onChange:a,onBlur:o,value:String(e[n.name])||"",error:t[n.name]&&r[n.name]},"".concat(n).concat(i))})),_&&_.list&&_.list.filter((function(n){return"boolean"===n.type})).map((function(n,t){return(0,u.jsx)(v.Checkbox,{checked:!!e[n.name],label:g("AdditionalFields.".concat(n.name)),id:n.name+Date.now(),name:n.name,onChange:a,onBlur:o,required:z(n)},"".concat(n.id).concat(t))})),(0,u.jsx)(v.Button,i({mode:"secondary",type:"submit",loading:s||N,block:!0},{children:g("MyProfileForm.Update")}))]}))}}))}))})),(0,u.jsx)(x.Col,i({sm:a?12:2},{children:" "}))]})]})},e.default=(0,g.withTheme)((0,g.default)(e.MyProfileForm)(d||(d=r([""],[""]))))},771:function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},i=this&&this.__assign||function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},i.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t);var i=Object.getOwnPropertyDescriptor(e,t);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,r,i)}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),l=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&a(e,n,t);return o(e,n),e},s=this&&this.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]])}return t};Object.defineProperty(e,"__esModule",{value:!0}),e.Upload=void 0;var c,d,u=t(1),p=t(0),m=l(t(8)),h=t(24),f=t(30),x=t(11),b=t(11),g=999,v=(0,m.default)("div")(c||(c=r(["\n  width: 100%;\n  text-align: center;\n  position: relative;\n  > a {\n    margin-top: 0.5em;\n  }\n  > input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ",';\n    opacity: 0.001;\n  }\n\n  .wrapper {\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    :after {\n      content: "";\n      padding-top: 100%;\n      display: block;\n    }\n\n    .border,\n    img,\n    input {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    img {\n      display: block;\n      object-fit: cover;\n      z-index: ',";\n    }\n    img,\n    svg {\n      transition: transform 0.5s ease-out;\n    }\n    .border {\n      overflow: hidden;\n      border-width: 1px;\n      opacity: 1;\n      border: ",";\n      border-radius: ","px;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n\n      > svg {\n        position: relative;\n        z-index: ",";\n      }\n    }\n  }\n\n  &:hover {\n    .wrapper .border > svg {\n      transform: scale(1.5);\n      z-index: ",";\n    }\n    img {\n      transform: scale(1.1);\n    }\n    a:after {\n      transform: scaleX(0);\n      transform-origin: bottom left;\n    }\n  }\n"],["\n  width: 100%;\n  text-align: center;\n  position: relative;\n  > a {\n    margin-top: 0.5em;\n  }\n  > input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ",';\n    opacity: 0.001;\n  }\n\n  .wrapper {\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    :after {\n      content: "";\n      padding-top: 100%;\n      display: block;\n    }\n\n    .border,\n    img,\n    input {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n    img {\n      display: block;\n      object-fit: cover;\n      z-index: ',";\n    }\n    img,\n    svg {\n      transition: transform 0.5s ease-out;\n    }\n    .border {\n      overflow: hidden;\n      border-width: 1px;\n      opacity: 1;\n      border: ",";\n      border-radius: ","px;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      justify-content: center;\n      align-items: center;\n      align-content: center;\n\n      > svg {\n        position: relative;\n        z-index: ",";\n      }\n    }\n  }\n\n  &:hover {\n    .wrapper .border > svg {\n      transform: scale(1.5);\n      z-index: ",";\n    }\n    img {\n      transform: scale(1.1);\n    }\n    a:after {\n      transform: scaleX(0);\n      transform-origin: bottom left;\n    }\n  }\n"])),g,998,(function(n){var e=n.theme;return"1px solid ".concat((0,x.getStylesBasedOnTheme)(e.mode,e.gray1,e.gray3))}),(function(n){return n.theme.cardRadius}),997,998),j=function(){return(0,u.jsx)("svg",i({width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,u.jsx)("path",{d:"M20 10.636V17.636C20 17.9012 19.8946 18.1556 19.7071 18.3431C19.5196 18.5306 19.2652 18.636 19 18.636H1C0.734784 18.636 0.48043 18.5306 0.292893 18.3431C0.105357 18.1556 0 17.9012 0 17.636V10.636C0 10.3708 0.105357 10.1164 0.292893 9.92888C0.48043 9.74134 0.734784 9.63599 1 9.63599C1.26522 9.63599 1.51957 9.74134 1.70711 9.92888C1.89464 10.1164 2 10.3708 2 10.636V16.636H18V10.636C18 10.3708 18.1054 10.1164 18.2929 9.92888C18.4804 9.74134 18.7348 9.63599 19 9.63599C19.2652 9.63599 19.5196 9.74134 19.7071 9.92888C19.8946 10.1164 20 10.3708 20 10.636V10.636ZM10 0.635986C9.73478 0.635986 9.48043 0.741343 9.29289 0.928879C9.10536 1.11642 9 1.37077 9 1.63599V5.63599H5C4.73478 5.63599 4.48043 5.74134 4.29289 5.92888C4.10536 6.11642 4 6.37077 4 6.63599C4 6.9012 4.10536 7.15556 4.29289 7.34309C4.48043 7.53063 4.73478 7.63599 5 7.63599H9V11.636C9 11.9012 9.10536 12.1556 9.29289 12.3431C9.48043 12.5306 9.73478 12.636 10 12.636C10.2652 12.636 10.5196 12.5306 10.7071 12.3431C10.8946 12.1556 11 11.9012 11 11.636V7.63599H15C15.2652 7.63599 15.5196 7.53063 15.7071 7.34309C15.8946 7.15556 16 6.9012 16 6.63599C16 6.37077 15.8946 6.11642 15.7071 5.92888C15.5196 5.74134 15.2652 5.63599 15 5.63599H11V1.63599C11 1.37077 10.8946 1.11642 10.7071 0.928879C10.5196 0.741343 10.2652 0.635986 10 0.635986V0.635986Z",fill:"#4A4A4A"})}))};e.Upload=function(n){var e=(0,f.useTranslation)().t,t=n.onChange,r=n.url,a=n.loading,o=n.buttonTitle,l=void 0===o?e("Upload.button"):o,c=n.className,d=void 0===c?"":c,m=s(n,["onChange","url","loading","buttonTitle","className"]),x=(0,p.useState)(r),g=x[0],y=x[1];(0,p.useEffect)((function(){y(r)}),[r]);var O=(0,p.useCallback)((function(n){if(n.target.files&&n.target.files[0]){var e=n.target.files[0],r=new FileReader;r.readAsDataURL(e),r.onload=function(){var n;return y(null===(n=r.result)||void 0===n?void 0:n.toString())},r.onerror=function(n){return console.log("reading error",n)}}t&&t(n)}),[]),w=l?(0,b.getUniqueId)("upload"):null;return(0,u.jsxs)(v,i({className:"wellms-component upload ".concat(d)},{children:[(0,u.jsx)("input",i({type:"file"},m,{onChange:O},w?{"aria-labelledby":w}:{"aria-label":e("Upload.button")})),(0,u.jsx)("div",i({className:"wrapper"},{children:(0,u.jsxs)("div",i({className:"border"},{children:[a&&(0,u.jsx)(h.Spin,{}),g&&(0,u.jsx)("img",{src:g,alt:"Upload preview"}),(0,u.jsx)(j,{})]}))})),l&&(0,u.jsx)(h.Link,i({underline:!0,id:w},{children:l}))]}))},e.default=(0,m.withTheme)((0,m.default)(e.Upload)(d||(d=r([""],[""]))))}}]);
//# sourceMappingURL=28.e966e03a.chunk.js.map