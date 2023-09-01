(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[19],{627:function(e,n,t){"use strict";t.r(n);var i,r,a,o=t(72),c=t(1),s=t(34),l=t(35),d=t(19),u=t(711),b=t(12),p=t(54),j=t(681),h=t(275),m=t(30),x=t(33),f=t(74),g=d.default.div(i||(i=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: ",";\n  padding: ",";\n  width: calc(100% - 30px);\n  margin: 0 auto;\n\n  .small-text {\n    font-size: 14px;\n    margin-top: 20px;\n  }\n"])),(function(e){var n=e.theme;return"dark"===n.mode?n.gray1:n.gray5}),f.isMobile?"80px 20px":"192px 20px"),v=t(3),O=function(){var e=Object(h.a)().t,n=Object(l.g)();return Object(v.jsxs)(g,{children:[Object(v.jsx)(m.Title,{level:3,children:e("MyProfilePage.EmptyEventTitle")}),Object(v.jsx)(x.Text,{className:"small-text",children:e("MyProfilePage.EmptyEventText")}),Object(v.jsx)(m.Button,{onClick:function(){return n.push("/events")},mode:"secondary",children:e("MyProfilePage.EmptyEventsBtnText")})]})},y=t(84),w=t(704),k=function(e){var n=e.filteredList,t=e.showMore,i=e.setShowMore,r=Object(h.a)().t;return Object(v.jsxs)(y.Row,{style:{gap:"28px 0"},children:[n.slice(0,6).map((function(e){return Object(v.jsx)(y.Col,{md:4,children:Object(v.jsx)(w.a,{event:e})},e.id)})),n.length>6&&!t&&Object(v.jsx)(y.Col,{sm:12,md:12,lg:12,style:{display:"flex",justifyContent:"center",marginTop:30},children:Object(v.jsx)(m.Button,{onClick:function(){return i(!0)},mode:"outline",children:r("MyProfilePage.ShowMore")})})]})},_=d.default.div(r||(r=Object(o.a)(["\n  overflow: hidden;\n  .course-wrapper {\n    margin-bottom: 24px;\n    a {\n      text-decoration: none;\n    }\n  }\n\n  .slider-wrapper {\n    width: 100%;\n    display: flex;\n    overflow: scroll;\n    column-gap: 15px;\n\n    @media (max-width: 575px) {\n      width: calc(100% + 15px);\n      margin-right: -15px;\n    }\n\n    .single-slide {\n      width: 272px;\n      max-width: 272px;\n      flex-shrink: 0;\n    }\n  }\n"]))),C=function(e){var n=e.filteredList,t=Object(h.a)().t,i=Object(l.g)(),r=Object(c.useCallback)((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(m.Button,{mode:"secondary",onClick:function(){return i.push("/event/".concat(e))},children:t("Show")})})}),[i,t]);return f.isMobile?Object(v.jsx)(_,{children:Object(v.jsx)("div",{className:"slider-wrapper",children:n&&n.map((function(e){return Object(v.jsx)("div",{className:"single-slide",children:Object(v.jsx)(w.a,{event:e,actions:r(e.id)},e.id)},e.id)}))})}):Object(v.jsx)(y.Row,{style:{gap:"28px 0"},children:n&&n.map((function(e){return Object(v.jsx)(y.Col,{md:4,children:Object(v.jsx)(w.a,{event:e,actions:r(e.id)})},e.id)}))})},M=function(e){var n=e.filter,t=Object(c.useState)(!1),i=Object(b.a)(t,2),r=i[0],a=i[1],o=Object(c.useState)([]),s=Object(b.a)(o,2),l=s[0],d=s[1],u=Object(c.useContext)(p.EscolaLMSContext).userStationaryEvents,h=u.list,m=Object(c.useMemo)((function(){return null===h||void 0===h?void 0:h.filter((function(e){return e.is_started}))}),[h]),x=Object(c.useMemo)((function(){return null===h||void 0===h?void 0:h.filter((function(e){return e.is_ended}))}),[h]),g=Object(c.useMemo)((function(){return null===h||void 0===h?void 0:h.filter((function(e){return e.in_coming}))}),[h]);return Object(c.useEffect)((function(){switch(n){case"all":default:d(h||[]);break;case"inProgress":d(m||[]);break;case"planned":d(g||[]);break;case"finished":d(x||[])}}),[g,n,x,h,m]),u.loading?Object(v.jsx)(j.a,{}):0===l.length?Object(v.jsx)(O,{}):!r&&l&&l.length>6&&!f.isMobile?Object(v.jsx)(k,{filteredList:l,showMore:r,setShowMore:a}):Object(v.jsx)(C,{filteredList:l})},P=t(688),N=d.default.section(a||(a=Object(o.a)(["\n  .events-wrapper {\n    margin-top: -70px;\n    @media (max-width: 991px) {\n      margin-top: 0;\n    }\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n      @media (max-width: 991px) {\n        margin: 0 0 40px 0;\n      }\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin: ",";\n    }\n  }\n"])),f.isMobile?"0 0 22px 20px":"0 0 22px 40px");n.default=function(){var e=Object(c.useContext)(s.EscolaLMSContext),n=e.user,t=e.fetchUserStationaryEvents,i=Object(l.g)(),r=Object(h.a)().t;Object(c.useEffect)((function(){n.loading||n.value?t():i.push("/login")}),[]);var a={tabs:[{label:r("MyProfilePage.ALlCourses"),key:1,component:Object(v.jsx)(M,{filter:"all"})},{label:r("MyProfilePage.InProgress"),key:2,component:Object(v.jsx)(M,{filter:"inProgress"})},{label:r("MyProfilePage.Planned"),key:3,component:Object(v.jsx)(M,{filter:"planned"})},{label:r("MyProfilePage.Finished"),key:4,component:Object(v.jsx)(M,{filter:"finished"})}],defaultActiveKey:1};return Object(v.jsx)(P.a,{title:r("MyProfilePage.MyStationaryEvents"),withTabs:!0,children:Object(v.jsx)(N,{children:Object(v.jsx)("div",{className:"events-wrapper",children:Object(v.jsx)(u.Tabs,{tabs:a.tabs,defaultActiveKey:a.defaultActiveKey})})})})}},674:function(e,n,t){"use strict";var i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t);var r=Object.getOwnPropertyDescriptor(n,t);r&&!("get"in r?!n.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,i,r)}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return o(n,e),n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.ResponsiveImage=void 0;var l,d,u=t(3),b=t(1),p=c(t(19)),j=s(t(366)),h=(0,p.default)("div")(l||(l=i(["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"],["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"])));n.ResponsiveImage=(0,b.forwardRef)((function(e,n){var t;return(0,u.jsx)(h,r({className:"wellms-component ".concat(null!==(t=e.className)&&void 0!==t?t:"")},{children:(0,u.jsx)(j.default,r({},e,{ref:n}))}))})),n.default=(0,p.withTheme)((0,p.default)(n.ResponsiveImage)(d||(d=i([""],[""]))))},676:function(e,n,t){"use strict";var i,r=t(72),a=t(19),o=t(680),c=t(3),s=a.default.div(i||(i=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var n=e.theme;return"light"===n.mode?n.gray4:n.gray2}));n.a=function(){return Object(c.jsx)(s,{children:Object(c.jsx)("img",{src:o.a,alt:""})})}},680:function(e,n,t){"use strict";n.a=t.p+"static/media/image.ece42557.svg"},681:function(e,n,t){"use strict";var i,r=t(72),a=t(30),o=t(19),c=t(3),s=o.default.div(i||(i=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"])));n.a=function(e){var n=e.width,t=e.height,i=Object(o.useTheme)();return Object(c.jsx)(s,{style:{width:n||"100%",height:t||"100%"},children:Object(c.jsx)(a.Spin,{color:i.primaryColor})})}},682:function(e,n,t){"use strict";var i,r=t(20),a=t(12),o=t(72),c=t(1),s=t(19),l=t(281),d=t(3),u=Object(s.default)("div")(i||(i=Object(o.a)(["\n  align-self: end;\n  display: flex;\n  gap: 10px;\n  z-index: 200;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  .tags-menu-container {\n    position: relative;\n\n    .tags-menu {\n      position: absolute;\n      display: flex;\n      flex-direction: column;\n      text-align: right;\n      gap: 10px;\n      top: 0%;\n      right: 0;\n      list-style: none;\n      padding-top: 12px;\n      height: 100px;\n      overflow-y: scroll;\n      background-color: ",";\n      max-width: 150px;\n      width: 100%;\n    }\n  }\n\n  .badge {\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.primaryColor}));n.a=function(e){var n=e.tags,t=e.onTagClick,i=Object(s.useTheme)(),o=Object(c.useState)(!1),b=Object(a.a)(o,2),p=b[0],j=b[1],h=Object(r.a)(n).splice(0,2),m=Object(r.a)(n).splice(2),x=Object(c.useRef)(null),f=Object(c.useCallback)((function(e,n){t&&t(n)}),[t]);return Object(d.jsxs)(u,{ref:x,children:[h.map((function(e,n){return Object(d.jsx)(l.Badge,{className:"badge",color:i.primaryColor,onClick:function(n){return f(n,e.title)},children:e.title},n)})),m.length>0&&Object(d.jsxs)("div",{className:"tags-menu-container",onMouseLeave:function(){return j(!1)},children:[Object(d.jsx)(l.Badge,{className:"badge",color:i.primaryColor,onMouseOver:function(){return j(!0)},children:"+".concat(m.length)}),p&&Object(d.jsx)("ul",{className:"tags-menu",children:m.map((function(e,n){return Object(d.jsx)("li",{children:Object(d.jsx)(l.Badge,{className:"badge",onClick:function(n){return f(n,e.title)},color:i.primaryColor,children:e.title},n)})}))})]})]})}},683:function(e,n,t){"use strict";var i,r=t(20),a=t(12),o=t(72),c=t(1),s=t(19),l=t(364),d=t(3),u=Object(s.default)("div")(i||(i=Object(o.a)(["\n  .more-icon {\n    border: 1px solid;\n    border-radius: 50%;\n    padding: 4px;\n    margin-left: 12px;\n    font-size: 0.75em;\n  }\n\n  .category-name {\n    cursor: pointer;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  .categories-menu-container {\n    position: relative;\n\n    .categories-menu {\n      position: absolute;\n      top: 0;\n      right: 0;\n      list-style: none;\n      background-color: #f2f2f2;\n      margin: 4px 0;\n\n      li {\n        margin: 4px 0;\n      }\n    }\n  }\n"])));n.a=function(e){var n,t=e.categories,i=e.onCategoryClick,o=Object(c.useState)(!1),s=Object(a.a)(o,2),b=s[0],p=s[1],j=Object(c.useRef)(null),h=t?Object(r.a)(t).splice(0,2):[],m=t?Object(r.a)(t).splice(2):[],x=Object(c.useCallback)((function(e){i&&i(e)}),[i]);return Object(d.jsxs)(u,{ref:j,isOpen:b,children:[Object(d.jsx)(l.BreadCrumbs,{hyphen:"/",items:null===h||void 0===h?void 0:h.map((function(e,n){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"category-name",onClick:function(){return x(e.id)},"aria-hidden":!0,children:e.name},e.name+n),n===h.length-1&&m.length>0&&Object(d.jsx)("span",{className:"more-icon",onMouseOver:function(){return p(!0)},onFocus:function(){return p(!0)},"aria-hidden":!0,children:"+".concat(m.length)})]})}))}),m.length>0&&Object(d.jsx)("div",{className:"categories-menu-container",onMouseLeave:function(){return p(!1)},children:b&&Object(d.jsx)("ul",{className:"categories-menu",style:{width:(null===(n=j.current)||void 0===n?void 0:n.getBoundingClientRect().width)||"auto"},children:Object(d.jsx)(l.BreadCrumbs,{hyphen:"/",items:null===m||void 0===m?void 0:m.map((function(e){return Object(d.jsx)("li",{className:"category-name",onClick:function(){return x(e.id)},"aria-hidden":!0,children:e.name})}))})})})]})}},688:function(e,n,t){"use strict";var i,r,a,o,c,s,l,d,u=t(72),b=t(277),p=t(12),j=t(54),h=t(1),m=t(19),x=t(33),f=t(92),g=t(35),v=t(47),O=t(74),y=t(194),w=t(3),k=m.default.div(i||(i=Object(u.a)(["\n  padding: ",";\n  background: ",";\n  border-radius: ","px;\n"])),O.isMobile?"20px":"40px",(function(e){var n=e.theme;return"dark"===n.mode?n.dm__cardBackgroundColor:n.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),_=function(e){var n=e.title,t=e.icon,i=e.children;return Object(w.jsxs)(k,{children:[Object(w.jsx)(y.IconTitle,{title:n,icon:t,as:"h2",level:4}),i]})},C=t(276),M=t(275),P=m.default.div(r||(r=Object(u.a)(["\n  transition: max-height 0.5s ease-in-out;\n  max-height: 5000px;\n  ",";\n\n  .collapse-header {\n    display: grid;\n    grid-auto-flow: column;\n    justify-content: space-between;\n    align-items: start;\n    gap: 6px;\n    cursor: pointer;\n\n    &__heading {\n        text-overflow: ellipsis;\n        overflow: hidden;\n        color: ",";\n    }\n\n    &__icon {\n      color: ",";\n        opacity: 0.6;\n        width: 12px;\n        margin-top: 3.5px;\n        transition: rotate 0.2s ease-in-out;\n        rotate: ",";\n\n        &:hover {\n            svg {\n                opacity: 1;\n            }\n        }\n    }\n"])),(function(e){return e.isOpen?"":"max-height: 1.2em; overflow: hidden; transition: max-height 1s cubic-bezier(0, 1, 0, 1);"}),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__textColor:n.textColor}),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__textColor:n.textColor}),(function(e){return e.isOpen?"180deg":"0"})),N=function(e){var n=e.headerTitle,t=e.headerClassName,i=e.initialValue,r=e.children,a=Object(h.useState)(null!==i&&void 0!==i&&i),o=Object(p.a)(a,2),c=o[0],s=o[1];return Object(w.jsxs)(P,{isOpen:c,children:[Object(w.jsxs)("div",{className:"collapse-header ".concat(null!==t&&void 0!==t?t:""),onClick:function(){return s((function(e){return!e}))},onKeyUp:function(e){return"Enter"===e.code&&s((function(e){return!e}))},role:"button",tabIndex:0,children:[Object(w.jsx)("span",{className:"collapse-header__heading",children:n}),Object(w.jsx)("svg",{className:"arrows collapse-header__icon",width:"14",height:"8",viewBox:"0 0 14 8",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",fill:"currentColor"})})]}),r]})},T=t(195),S=m.default.div(a||(a=Object(u.a)(["\n  margin-bottom: ",";\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  gap: 15px;\n\n  .avatar-upload-text {\n    margin: 0;\n    cursor: pointer;\n  }\n"])),O.isMobile?"0":"21px"),z=function(e){var n,t=e.size,i=Object(h.useContext)(j.EscolaLMSContext),r=i.updateAvatar,a=i.user,o=Object(h.useCallback)((function(e){var n,t,i=null===(n=e.target)||void 0===n||null===(t=n.files)||void 0===t?void 0:t[0];i&&r(i)}),[r]);return Object(w.jsxs)(S,{children:[Object(w.jsx)(T.Avatar,{size:t,src:null===(n=a.value)||void 0===n?void 0:n.avatar,alt:""}),Object(w.jsxs)("label",{htmlFor:"fileInput",children:[Object(w.jsx)(x.Text,{className:"avatar-upload-text",size:"12",children:"Dodaj nowe zdj\u0119cie"}),Object(w.jsx)("input",{type:"file",id:"fileInput",accept:"image/*",style:{display:"none"},onChange:o})]})]})},E=Object(m.default)("aside")(o||(o=Object(u.a)(["\n  ","\n  transform: ",";\n  background: ",";\n  .user-main-sidebar {\n    margin-bottom: ",";\n    .name {\n      margin: ",";\n    }\n    .navigation {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      row-gap: 15px;\n      margin-bottom: 50px;\n      a {\n        text-decoration: none;\n        &:hover {\n          p {\n            color: ",";\n          }\n        }\n        &.selected {\n          p {\n            color: ",';\n          }\n        }\n      }\n    }\n    .logout-wrapper {\n      position: relative;\n      &:before {\n        position: absolute;\n        content: "";\n        left: 0;\n        top: -16px;\n        height: 1px;\n        width: 24px;\n        background: ',";\n      }\n      button {\n        appearance: none;\n        outline: none;\n        border: none;\n        background: transparent;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        p {\n          &:hover {\n            color: ",";\n          }\n        }\n      }\n    }\n  }\n  .progress-container {\n    display: flex;\n    flex-direction: ",";\n    flex-wrap: wrap;\n    justify-content: ",";\n    align-items: ",";\n  }\n"])),O.isMobile&&"\n    box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    transition: all 0.25s;\n    z-index: 1000;\n    overflow: scroll;\n    ",(function(e){return e.opened&&O.isMobile?"translate(0, 0%)":!e.opened&&O.isMobile?"translate(0, 91%)":"translate(0, 0)"}),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__background:n.background}),O.isMobile?"70px":"22px",O.isMobile?"0 0 0 21px":"16px 0 0 0",(function(e){return e.theme.primaryColor}),(function(e){return e.theme.primaryColor}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1}),(function(e){return e.theme.primaryColor}),O.isMobile?"row":"column",O.isMobile?"space-between":"flex-start",O.isMobile?"center":"flex-start"),B=m.default.div(c||(c=Object(u.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n    margin-right: ",";\n  }\n  .number {\n    color: ",";\n  }\n  .label {\n    margin-left: ",";\n    margin-top: 10px;\n    position: relative;\n    font-size: 14px;\n    line-height: 1.2;\n    font-weight: 700;\n    max-width: ",';\n  }\n\n  .list-box {\n    padding: 0;\n    list-style: none;\n    width: 100%;\n    grid-column: 1/3;\n    font-family: "Mulish", sans-serif;\n  }\n\n  .list-box-item {\n    font-size: 14px;\n\n    :not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    &__time {\n      color: ',";\n      opacity: 0.6;\n      margin: 0;\n      display: flex;\n      align-items: center;\n\n      &:first-of-type {\n        margin-top: 8px;\n      }\n\n      svg {\n        width: 12px;\n        height: auto;\n        fill: ",";\n        opacity: 0.6;\n      }\n    }\n\n    &__value {\n      font-size: 12px;\n      line-height: 1.5;\n      margin-left: 4px;\n    }\n  }\n"])),O.isMobile?0:"14px",O.isMobile?"10px":0,(function(e){return e.theme.primaryColor}),O.isMobile?0:"11px",O.isMobile?"80px":"unset",(function(e){var n=e.theme;return"dark"===n.mode?n.dm__textColor:n.textColor}),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__textColor:n.textColor})),L=Object(m.default)("div")(s||(s=Object(u.a)(['\n  padding: 17px 15px;\n  box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1);\n  position: relative;\n  &:after {\n    content: "";\n    display: ',";\n    position: absolute;\n    right: 22px;\n    top: 50%;\n    transform: translate(0, -50%) rotate(-45deg);\n    width: 12px;\n    height: 12px;\n    border-left: 2px solid\n      ",";\n    border-bottom: 2px solid\n      ",";\n  }\n  .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    flex-direction: ",";\n  }\n"])),(function(e){return e.opened?"block":"none"}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1}),(function(e){var n=e.theme;return"dark"===n.mode?n.gray5:n.gray1}),O.isMobile?"column":"row"),R=function(){var e,n,t,i,r,a,o,c=Object(h.useState)(!1),s=Object(p.a)(c,2),l=s[0],d=s[1],u=Object(h.useContext)(j.EscolaLMSContext),b=u.user,y=u.logout,k=u.certificates,P=u.progress,T=u.fetchProgress,S=Object(M.a)().t,R=Object(m.useTheme)(),I=Object(g.g)(),D=function(e){if(!e)return"-";var n=e,t=Math.trunc(e/3600);t>=1&&(n-=3600*t);var i=Math.trunc(e/60);return i>=1&&(n-=60*i),"\n        ".concat(t>=1?t+"h ":"").concat(i>=1?i+"min ":"").concat(n>=1?n+"s":"","\n    ")};Object(h.useEffect)((function(){T()}),[]);var F=Object(h.useMemo)((function(){return(P.value||[]).filter((function(e){return e.finish_date}))}),[P]),A=[{key:"COURSES",title:S("MyProfilePage.MyCourses"),url:"/user/my-profile"},{key:"CONSULTATIONS",title:S("MyProfilePage.MyConsultations"),url:"/user/my-consultations"},{key:"EVENTS",title:S("MyProfilePage.MyStationaryEvents"),url:"/user/my-stationary-events"},{key:"TASKS",title:S("MyProfilePage.MyTasks"),url:"/user/my-tasks"},{key:"BOOKMARKS",title:S("MyProfilePage.MyBookmarks"),url:"/user/my-bookmarks"},{key:"ORDERS",title:S("MyProfilePage.OrdersHistory"),url:"/user/my-orders"},{key:"NOTIFICATIONS",title:S("MyProfilePage.Notifications"),url:"/user/my-notifications"},{key:"EDIT",title:S("MyProfilePage.EditData"),url:"/user/my-data"}];return Object(w.jsxs)(E,{opened:l,children:[O.isMobile&&Object(w.jsx)(L,{opened:l,onClick:function(){return d(!l)},children:Object(w.jsxs)("div",{className:"content-wrapper",children:[null!==(e=b.value)&&void 0!==e&&e.avatar?Object(w.jsx)(z,{size:"extraSmall"}):Object(w.jsx)(C.d,{mode:"dark"===R.mode?"light":"dark"}),Object(w.jsx)(x.Text,{children:Object(w.jsxs)("strong",{children:[null===(n=b.value)||void 0===n?void 0:n.first_name," ",null===(t=b.value)||void 0===t?void 0:t.last_name]})})]})}),Object(w.jsx)("div",{className:"user-main-sidebar",children:Object(w.jsxs)(_,{title:S("MyProfilePage.YourAccount"),icon:Object(w.jsx)(C.C,{}),children:[Object(w.jsxs)("div",{className:"avatar-wrapper",children:[null!==(i=b.value)&&void 0!==i&&i.avatar?Object(w.jsx)(z,{size:"small"}):Object(w.jsx)(C.d,{mode:"dark"===R.mode?"light":"dark"}),Object(w.jsxs)(f.Title,{className:"name",level:4,as:"h3",children:[null===(r=b.value)||void 0===r?void 0:r.first_name," ",null===(a=b.value)||void 0===a?void 0:a.last_name]})]}),Object(w.jsx)("nav",{className:"navigation",children:A.map((function(e){return Object(w.jsx)(v.d,{activeClassName:"selected",to:e.url,children:Object(w.jsx)(x.Text,{size:"14",children:e.title})},e.key)}))}),Object(w.jsx)("div",{className:"logout-wrapper",children:Object(w.jsx)("button",{onClick:function(){return y().then((function(){return I.push("/")}))},children:Object(w.jsx)(x.Text,{children:S("MyProfilePage.Logout")})})})]})}),Object(w.jsx)("div",{className:"user-progress sidebar",children:Object(w.jsx)(_,{title:S("MyProfilePage.MyProgress"),icon:Object(w.jsx)(C.y,{}),children:Object(w.jsxs)("div",{className:"progress-container",children:[Object(w.jsxs)(B,{children:[Object(w.jsx)(f.Title,{className:"number",level:1,children:F.length}),Object(w.jsx)(x.Text,{className:"label",children:S("MyProfilePage.FinishedCourses")}),Object(w.jsx)("ul",{className:"list-box",children:F.map((function(e,n){return Object(w.jsx)("li",{className:"list-box-item",children:Object(w.jsxs)(N,{initialValue:0===n,headerTitle:e.course.title,headerClassName:"list-box-item__title",children:[e.start_date&&e.finish_date&&Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"})}),Object(w.jsxs)("span",{className:"list-box-item__value",children:[new Date(e.start_date).toLocaleDateString()," - ",new Date(e.finish_date).toLocaleDateString()]})]}),Object(w.jsxs)("p",{className:"list-box-item__time",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M6 14h6v-6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6zm16 0c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328z"})}),Object(w.jsx)("span",{className:"list-box-item__value",children:D(e.total_spent_time)})]})]})})}))})]}),Object(w.jsxs)(B,{children:[Object(w.jsx)(f.Title,{className:"number",level:1,children:null===(o=k.list)||void 0===o?void 0:o.data.length}),Object(w.jsx)(x.Text,{className:"label",children:S("MyProfilePage.TotalCertificates")})]})]})})})]})},I=m.default.div(l||(l=Object(u.a)(["\n  position: relative;\n  z-index: 0;\n  padding: ",";\n  background: ",";\n  border-radius: ",";\n  @media (max-width: 991px) {\n    padding: 60px 20px 20px 20px;\n    margin-bottom: 20px;\n  }\n\n  .actions {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n"])),(function(e){return e.withTabs?"105px 40px 90px 40px":"165px 40px 30px 40px"}),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__cardBackgroundColor:n.cardBackgroundColor}),(function(e){return e.theme.cardRadius})),D=function(e){var n=e.title,t=e.withTabs,i=e.actions;return Object(w.jsxs)(I,{withTabs:t,children:[Object(w.jsx)(f.Title,{level:1,children:n}),i&&Object(w.jsx)("div",{className:"actions",children:i})]})},F=t(84),A=t(193),K=m.default.section(d||(d=Object(u.a)(["\n  .courses-wrapper {\n    margin-top: -70px;\n    .tabs-menu {\n      margin: 0 0 70px 40px;\n    }\n  }\n  .certificates-container {\n    margin-top: 70px;\n    h2 {\n      margin-left: 40px;\n    }\n  }\n"])));n.a=function(e){var n=e.children,t=e.title,i=e.withTabs,r=e.actions,a=Object(h.useContext)(j.EscolaLMSContext).user,o=Object(g.g)();return Object(h.useEffect)((function(){a.loading||a.value||o.push("/login")}),[]),Object(w.jsx)(b.a,{metaTitle:t,children:Object(w.jsx)(K,{children:Object(w.jsx)(A.a,{children:Object(w.jsxs)(F.Row,{children:[Object(w.jsxs)(F.Col,{lg:9,children:[Object(w.jsx)(D,{title:t,withTabs:i,actions:r}),n]}),Object(w.jsx)(F.Col,{lg:3,children:Object(w.jsx)(R,{})})]})})})})}},704:function(e,n,t){"use strict";var i=t(275),r=t(74),a=t(35),o=t(47),c=t(365),s=t(674),l=t.n(s),d=t(676),u=t(92),b=t.n(u),p=t(76),j=t.n(p),h=t(278),m=t.n(h),x=t(276),f=t(682),g=t(683),v=t(3);n.a=function(e){var n,t=e.event,s=e.actions,u=Object(a.g)(),p=Object(i.a)().t;return Object(v.jsx)(c.CourseCard,{id:t.id,mobile:r.isMobile,image:Object(v.jsx)(o.c,{to:"/event/".concat(t.id),"aria-label":t.name,children:t.image_path?Object(v.jsx)(l.a,{path:t.image_path,alt:t.name,srcSizes:[300,600,900]}):Object(v.jsx)(d.a,{})}),title:Object(v.jsx)(o.c,{to:"/event/".concat(t.id),className:"title",children:Object(v.jsx)(b.a,{level:4,as:"h2",children:t.name})}),categories:Object(v.jsx)(g.a,{categories:t.categories,onCategoryClick:function(e){u.push("/events/?categories[]=".concat(e))}}),tags:Object(v.jsx)(f.a,{tags:(null===(n=t.product)||void 0===n?void 0:n.tags)||[],onTagClick:function(e){return u.push("/events/?tag=".concat(e))}}),actions:null!==s&&void 0!==s?s:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j.a,{mode:"secondary",onClick:function(){return u.push("/event/".concat(t.id))},children:p("StartNow")})}),footer:Object(v.jsxs)(v.Fragment,{children:[t.users_count&&t.users_count>0?Object(v.jsx)(m.a,{icon:Object(v.jsx)(x.C,{}),text:"".concat(t.users_count," ").concat(p("Students"))}):""," ",!!t.place&&Object(v.jsx)(m.a,{icon:Object(v.jsx)(x.n,{}),text:"".concat(t.place)})]})})}},711:function(e,n,t){"use strict";var i=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e},r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t);var r=Object.getOwnPropertyDescriptor(n,t);r&&!("get"in r?!n.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,i,r)}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.Tabs=void 0;var s,l,d=t(3),u=c(t(1)),b=c(t(19)),p=t(49),j=t(28),h=t(28),m=(0,b.default)("div")(s||(s=i(["\n  .tabs-menu {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    &-inner {\n      display: flex;\n      border-bottom: 2px solid\n        ",";\n    }\n  }\n\n  .tab-menu-btn {\n    position: relative;\n    padding: 11px;\n    appearance: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 14px;\n    white-space: nowrap;\n    font-family: ",";\n    color: ",';\n\n    &.active {\n      font-weight: bold;\n\n      &:after {\n        content: "";\n        display: block;\n        position: absolute;\n        left: 0;\n        bottom: -2px;\n        width: 100%;\n        height: 2px;\n        background-color: currentColor;\n      }\n    }\n  }\n\n  .tabs-panel {\n    padding: 10px 0;\n  }\n'],["\n  .tabs-menu {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    &-inner {\n      display: flex;\n      border-bottom: 2px solid\n        ",";\n    }\n  }\n\n  .tab-menu-btn {\n    position: relative;\n    padding: 11px;\n    appearance: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 14px;\n    white-space: nowrap;\n    font-family: ",";\n    color: ",';\n\n    &.active {\n      font-weight: bold;\n\n      &:after {\n        content: "";\n        display: block;\n        position: absolute;\n        left: 0;\n        bottom: -2px;\n        width: 100%;\n        height: 2px;\n        background-color: currentColor;\n      }\n    }\n  }\n\n  .tabs-panel {\n    padding: 10px 0;\n  }\n'])),(function(e){var n=e.theme;return(0,j.getStylesBasedOnTheme)(n.mode,n.gray2,n.gray3)}),(function(e){var n=e.theme;return(0,p.getFontFromTheme)(n).fontFamily}),(function(e){var n=e.theme;return(0,j.getStylesBasedOnTheme)(n.mode,n.white,n.gray1)}));n.Tabs=function(e){var n=e.tabs,t=void 0===n?[]:n,i=e.defaultActiveKey,a=void 0===i?t[0].key:i,o=e.onClick,c=e.className,s=void 0===c?"":c,l=u.useState(a),b=l[0],p=l[1],j=t&&t.find((function(e){return e.key===b}));return(0,d.jsxs)(m,r({className:"wellms-component ".concat(s)},{children:[(0,d.jsx)("div",r({className:"tabs-menu"},{children:(0,d.jsx)("div",r({className:"tabs-menu-inner"},{children:t.map((function(e){return e.hidden?null:(0,d.jsx)("button",r({type:"button",className:"tab-menu-btn ".concat(b===e.key?"active":""),id:(0,h.getUniqueId)("tab-menu-".concat(e.key)),onClick:function(){p(e.key),o&&o(e.key)}},{children:e.label}),e.key)}))}))})),(0,d.jsx)("div",r({id:"tabpanel-".concat(b),className:"tabs-panel"},{children:(0,d.jsx)(u.Fragment,{children:j&&j.component})}))]}))},n.default=(0,b.withTheme)((0,b.default)(n.Tabs)(l||(l=i([""],[""]))))}}]);
//# sourceMappingURL=19.dee46443.chunk.js.map