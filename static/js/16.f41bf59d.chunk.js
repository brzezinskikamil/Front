(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[16],{617:function(e,t,n){"use strict";n.r(t);var i,c=n(12),s=n(74),o=n(1),r=n(35),a=n(269),l=n(89),d=n(383),u=n(661),j=n(20),b=n(82),h=n(267),m=n(678),x=n(707),p=n(681),g=n(237),O=n(34),f=n(189),v=n(83),w=n(30),y=n(55),C=n(669),T=n(3),k=function(){var e=Object(o.useState)(),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(!0),r=Object(c.a)(s,2),a=r[0],l=r[1],d=Object(o.useContext)(y.EscolaLMSContext).fetchCourses,u=Object(h.a)().t;return Object(o.useEffect)((function(){d({per_page:8,order_by:"created_at",order:"DESC"}).then((function(e){i(e.data||[])})).catch((function(){return l(!1)})).finally((function(){return l(!1)}))}),[d]),Object(T.jsxs)(v.Container,{children:[Object(T.jsx)(w.Title,{className:"slider-title",level:3,as:"h1",children:Object(T.jsx)("strong",{children:u("Homepage.CoursesSlider2Title")})}),a&&Object(T.jsx)(C.a,{}),!a&&n&&Object(T.jsx)(m.a,{courses:n})]})},S=j.default.div(i||(i=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: -120px;\n  @media (max-width: 1200px) {\n    margin-top: 0;\n  }\n  @media (max-width: 575px) {\n    margin-top: -30px;\n  }\n  .home-hero {\n    margin-bottom: 45px;\n    padding-top: 42px;\n    order: 1;\n    h1 {\n      margin-top: 0 !important;\n    }\n    @media (max-width: 768px) {\n      margin-bottom: 30px;\n      padding-top: 0;\n      h1 {\n        font-size: 26px;\n      }\n    }\n    button {\n      @media (max-width: 991px) {\n        width: 100%;\n      }\n    }\n  }\n\n  .home-best-courses {\n    margin: 40px 0;\n    order: 2;\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .home-newest-courses {\n    order: 1;\n    margin: 40px 0;\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .promoted-courses-wrapper {\n    order: 3;\n  }\n\n  .categories-section-wrapper {\n    order: 5;\n  }\n"])));t.default=function(){var e,t,n,i,s,j,v,w,y=Object(o.useState)(),_=Object(c.a)(y,2),N=_[0],B=_[1],M=Object(o.useState)(!0),F=Object(c.a)(M,2),I=F[0],R=F[1],z=Object(o.useContext)(r.EscolaLMSContext),H=z.categoryTree,E=z.fetchCategories,P=z.fetchCourses,A=z.settings,L=Object(O.g)(),D=Object(h.a)(),q=D.t,G=D.i18n;return Object(o.useEffect)((function(){P({per_page:8}).then((function(e){B(e.data)})).catch((function(){return R(!1)})).finally((function(){return R(!1)})),E()}),[]),Object(T.jsx)(a.a,{metaTitle:q("Home"),children:Object(T.jsxs)(S,{children:[Object(T.jsx)("section",{className:"home-hero",children:(null===(e=A.value)||void 0===e?void 0:e.homepage)&&(null===(t=A.value.homepage)||void 0===t?void 0:t.heroBannerText)&&(null===(n=A.value.homepage)||void 0===n?void 0:n.heroBannerImg)&&""!==(null===(i=A.value.homepage)||void 0===i?void 0:i.heroBannerImg)&&Object(T.jsx)(f.a,{children:Object(T.jsx)(d.Banner,{mobile:b.isMobile,title:Object(T.jsx)(g.MarkdownRenderer,{children:"<h1>".concat((null===(s=A.value.homepage)||void 0===s?void 0:s.heroBannerText[G.language])||"","</h1>")}),btnText:q("Homepage.HeroBtnText"),asset:Object(T.jsx)(u.ResponsiveImage,{path:(null===A||void 0===A||null===(j=A.value)||void 0===j||null===(v=j.homepage)||void 0===v?void 0:v.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:function(){return L.push("/courses")}})})}),Object(T.jsx)("section",{className:"home-newest-courses",children:Object(T.jsx)(k,{})}),Object(T.jsx)("section",{className:"home-best-courses",children:Object(T.jsxs)(f.a,{children:[Object(T.jsx)(l.Title,{className:"slider-title",level:3,as:"h1",children:Object(T.jsx)("strong",{children:q("Homepage.CoursesSlider1Title")})}),I&&Object(T.jsx)(C.a,{}),!I&&N&&Object(T.jsx)(m.a,{courses:N})]})}),Object(T.jsx)("div",{className:"promoted-courses-wrapper",children:Object(T.jsx)(x.a,{})}),H&&Object(T.jsx)("div",{className:"categories-section-wrapper",children:Object(T.jsx)(p.a,{categories:(null===(w=H.list)||void 0===w?void 0:w.filter((function(e){return!!e.icon})))||[]})})]})})}},661:function(e,t,n){"use strict";var i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=this&&this.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var c=Object.getOwnPropertyDescriptor(t,n);c&&!("get"in c?!t.__esModule:c.writable||c.configurable)||(c={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,c)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ResponsiveImage=void 0;var l,d,u=n(3),j=n(1),b=r(n(20)),h=a(n(366)),m=(0,b.default)("div")(l||(l=i(["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"],["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"])));t.ResponsiveImage=(0,j.forwardRef)((function(e,t){var n;return(0,u.jsx)(m,c({className:"wellms-component ".concat(null!==(n=e.className)&&void 0!==n?n:"")},{children:(0,u.jsx)(h.default,c({},e,{ref:t}))}))})),t.default=(0,b.withTheme)((0,b.default)(t.ResponsiveImage)(d||(d=i([""],[""]))))},662:function(e,t,n){"use strict";var i,c=n(74),s=n(20),o=n(663),r=n(3),a=s.default.div(i||(i=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var t=e.theme;return"light"===t.mode?t.gray4:t.gray2}));t.a=function(){return Object(r.jsx)(a,{children:Object(r.jsx)("img",{src:o.a,alt:""})})}},663:function(e,t,n){"use strict";t.a=n.p+"static/media/image.ece42557.svg"},664:function(e,t,n){"use strict";var i,c=n(19),s=n(12),o=n(74),r=n(1),a=n(20),l=n(272),d=n(3),u=Object(a.default)("div")(i||(i=Object(o.a)(["\n  align-self: end;\n  display: flex;\n  gap: 10px;\n  z-index: 200;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  .tags-menu-container {\n    position: relative;\n\n    .tags-menu {\n      position: absolute;\n      top: 0;\n      right: 0;\n      list-style: none;\n      padding-top: 12px;\n\n      li {\n        margin: 5px 0 5px 10px;\n        float: right;\n      }\n    }\n  }\n\n  .badge {\n    cursor: pointer;\n  }\n"])));t.a=function(e){var t,n=e.tags,i=e.onTagClick,o=Object(a.useTheme)(),j=Object(r.useState)(!1),b=Object(s.a)(j,2),h=b[0],m=b[1],x=Object(c.a)(n).splice(0,2),p=Object(c.a)(n).splice(2),g=Object(r.useRef)(null),O=Object(r.useCallback)((function(e,t){i&&i(t)}),[i]);return Object(d.jsxs)(u,{ref:g,isOpen:h,children:[x.map((function(e,t){return Object(d.jsx)(l.Badge,{className:"badge",color:o.primaryColor,onClick:function(t){return O(t,e.title)},children:e.title},t)})),p.length>0&&Object(d.jsxs)("div",{className:"tags-menu-container",onMouseLeave:function(){return m(!1)},children:[Object(d.jsx)(l.Badge,{className:"badge",color:o.primaryColor,onMouseOver:function(){return m(!0)},children:"+".concat(p.length)}),h&&Object(d.jsx)("ul",{className:"tags-menu",style:{width:(null===(t=g.current)||void 0===t?void 0:t.getBoundingClientRect().width)||"auto"},children:p.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)(l.Badge,{className:"badge",onClick:function(t){return O(t,e.title)},color:o.primaryColor,children:e.title},t)})}))})]})]})}},665:function(e,t,n){"use strict";var i,c=n(19),s=n(12),o=n(74),r=n(1),a=n(20),l=n(363),d=n(3),u=Object(a.default)("div")(i||(i=Object(o.a)(["\n  .more-icon {\n    border: 1px solid;\n    border-radius: 50%;\n    padding: 4px;\n    margin-left: 12px;\n    font-size: 0.75em;\n  }\n\n  .category-name {\n    cursor: pointer;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  .categories-menu-container {\n    position: relative;\n\n    .categories-menu {\n      position: absolute;\n      top: 0;\n      right: 0;\n      list-style: none;\n      background-color: #f2f2f2;\n      margin: 4px 0;\n\n      li {\n        margin: 4px 0;\n      }\n    }\n  }\n"])));t.a=function(e){var t,n=e.categories,i=e.onCategoryClick,o=Object(r.useState)(!1),a=Object(s.a)(o,2),j=a[0],b=a[1],h=Object(r.useRef)(null),m=n?Object(c.a)(n).splice(0,2):[],x=n?Object(c.a)(n).splice(2):[],p=Object(r.useCallback)((function(e){i&&i(e)}),[i]);return Object(d.jsxs)(u,{ref:h,isOpen:j,children:[Object(d.jsx)(l.BreadCrumbs,{hyphen:"/",items:null===m||void 0===m?void 0:m.map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"category-name",onClick:function(){return p(e.id)},"aria-hidden":!0,children:e.name},e.name+t),t===m.length-1&&x.length>0&&Object(d.jsx)("span",{className:"more-icon",onMouseOver:function(){return b(!0)},onFocus:function(){return b(!0)},"aria-hidden":!0,children:"+".concat(x.length)})]})}))}),x.length>0&&Object(d.jsx)("div",{className:"categories-menu-container",onMouseLeave:function(){return b(!1)},children:j&&Object(d.jsx)("ul",{className:"categories-menu",style:{width:(null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect().width)||"auto"},children:Object(d.jsx)(l.BreadCrumbs,{hyphen:"/",items:null===x||void 0===x?void 0:x.map((function(e){return Object(d.jsx)("li",{className:"category-name",onClick:function(){return p(e.id)},"aria-hidden":!0,children:e.name})}))})})})]})}},668:function(e,t,n){"use strict";var i,c=n(74),s=(n(1),n(20)),o=n(3),r=s.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])));t.a=function(e){var t=e.children;return Object(o.jsx)(r,{children:t})}},669:function(e,t,n){"use strict";var i,c=n(74),s=n(30),o=n(20),r=n(3),a=o.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"])));t.a=function(){var e=Object(o.useTheme)();return Object(r.jsx)(a,{children:Object(r.jsx)(s.Spin,{color:e.primaryColor})})}},678:function(e,t,n){"use strict";var i,c=n(5),s=n(12),o=n(74),r=n(1),a=n(20),l=n(33),d=n(365),u=n(364),j=n(73),b=n(271),h=n(34),m=n(48),x=n(82),p=n(267),g=n(268),O=n(662),f=n(661),v=n(668),w=n(83),y=n(30),C=n(664),T=n(665),k=n(3),S=a.default.div(i||(i=Object(o.a)(["\n  @media (max-width: 575px) {\n    margin-left: -59px;\n  }\n  .slick-slider {\n    @media (max-width: 575px) {\n      width: calc(100% + 15px);\n    }\n  }\n  .slick-dots {\n    top: -65px;\n    @media (max-width: 575px) {\n      top: -30px !important;\n      right: unset !important;\n      left: 60px !important;\n    }\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n    @media (max-width: 991px) {\n      padding-bottom: 20px;\n    }\n  }\n\n  .slick-slide {\n    height: inherit;\n\n    > div {\n      display: flex;\n      height: 100%;\n    }\n  }\n"]))),_={arrows:!1,infinite:!0,speed:500,draggable:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1201,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]};t.a=function(e){var t=e.courses,n=e.sliderSettings,i=void 0===n?_:n,o=Object(r.useState)(!0),N=Object(s.a)(o,1)[0],B=Object(h.g)(),M=Object(a.useTheme)(),F=Object(p.a)().t;return Object(k.jsx)(S,{children:t.length>=5||x.isMobile?Object(k.jsx)("div",{children:Object(k.jsx)(d.Slider,{settings:Object(c.a)(Object(c.a)({},i),{},{dots:N,onSwipe:function(){var e=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach((function(e){return e.removeAttribute("aria-modal")})),e.forEach((function(e){return e.setAttribute("aria-modal","true")}))},onInit:function(){document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach((function(e){return e.setAttribute("aria-modal","true")}))}}),dotsPosition:"top right",children:t&&t.map((function(e){return Object(k.jsx)(v.a,{children:Object(k.jsx)(u.CourseCard,{mobile:x.isMobile,id:e.id,image:Object(k.jsx)(m.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(k.jsx)(f.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(k.jsx)(O.a,{})}),tags:Object(k.jsx)(C.a,{tags:e.tags,onTagClick:function(e){return B.push("/courses/?tag=".concat(e))}}),subtitle:e.subtitle?Object(k.jsx)(l.Text,{size:"12",children:Object(k.jsx)(m.c,{style:{color:M.primaryColor},to:"/courses/".concat(e.id),children:Object(k.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(k.jsx)(m.c,{to:"/courses/".concat(e.id),className:"title",children:Object(k.jsx)(y.Title,{level:4,as:"h2",children:e.title})}),categories:Object(k.jsx)(T.a,{categories:e.categories,onCategoryClick:function(e){B.push("/courses/?categories[]=".concat(e))}}),actions:Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.Button,{mode:"secondary",onClick:function(){return B.push("/courses/".concat(e.id))},children:F("StartNow")})}),footer:Object(k.jsxs)(k.Fragment,{children:[e.users_count&&e.users_count>0?Object(k.jsx)(b.IconText,{icon:Object(k.jsx)(g.y,{}),text:"".concat(e.users_count," ").concat(F("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(k.jsx)(b.IconText,{icon:Object(k.jsx)(g.s,{}),text:"".concat(e.lessons_count," ").concat(F("Lessons"))}):""]})})},e.id)}))})}):Object(k.jsx)(w.Row,{style:{marginTop:"30px",rowGap:"60px"},children:t.map((function(e){return Object(k.jsx)(w.Col,{md:6,lg:3,children:Object(k.jsx)(v.a,{children:Object(k.jsx)(u.CourseCard,{mobile:x.isMobile,id:e.id,image:Object(k.jsx)(m.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(k.jsx)(f.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(k.jsx)(O.a,{})}),tags:Object(k.jsx)(C.a,{tags:e.tags,onTagClick:function(e){return B.push("/courses/?tag=".concat(e))}}),subtitle:e.subtitle?Object(k.jsx)(l.Text,{size:"12",children:Object(k.jsx)(m.c,{style:{color:M.primaryColor},to:"/courses/".concat(e.id),children:Object(k.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(k.jsx)(m.c,{to:"/courses/".concat(e.id),children:e.title}),categories:Object(k.jsx)(T.a,{categories:e.categories,onCategoryClick:function(e){B.push("/courses/?categories[]=".concat(e))}}),actions:Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.Button,{mode:"secondary",onClick:function(){return B.push("/courses/".concat(e.id))},children:F("StartNow")})}),footer:Object(k.jsxs)(k.Fragment,{children:[e.users_count&&e.users_count>0?Object(k.jsx)(b.IconText,{icon:Object(k.jsx)(g.y,{}),text:"".concat(e.users_count," ").concat(F("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(k.jsx)(b.IconText,{icon:Object(k.jsx)(g.s,{}),text:"".concat(e.lessons_count," ").concat(F("Lessons"))}):""]})})},e.id)},e.id)}))})})}},681:function(e,t,n){"use strict";var i,c=n(5),s=n(12),o=n(74),r=n(89),a=n(271),l=n(365),d=n(368),u=n(82),j=n(267),b=n(1),h=n(20),m=n(268),x=n(34),p=n(83),g=n(189),O=n(3),f=h.default.section(i||(i=Object(o.a)(["\n  overflow: hidden;\n  padding: 60px 0 0;\n  @media (max-width: 768px) {\n    padding: 30px 0;\n  }\n  h3 {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .slider-title {\n    @media (max-width: 575px) {\n      padding-right: 45%;\n    }\n  }\n  .categories-slider {\n    .slick-dots {\n      bottom: 40px;\n    }\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n  }\n  .slick-slide {\n    @media (max-width: 991px) {\n      display: flex !important;\n      justify-content: center;\n    }\n  }\n  .single-category-slide {\n    margin: 0 8px;\n\n    @media (max-width: 991px) {\n      margin: 0 auto;\n      min-width: 300px;\n    }\n  }\n  .category-card-icon {\n    img {\n      margin: 0 auto;\n      display: block;\n      max-height: 70px;\n    }\n  }\n"])));t.a=function(e){var t=e.categories,n=Object(b.useState)(!0),i=Object(s.a)(n,1)[0],o=Object(j.a)().t,h=Object(x.g)(),v=t.filter((function(e){return e.count&&e.count>0}));return Object(O.jsx)(f,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(r.Title,{level:3,children:Object(O.jsx)("strong",{children:o("Homepage.CategoriesTitle")})}),u.isMobile?Object(O.jsx)("div",{className:"categories-slider",children:Object(O.jsx)(l.Slider,{settings:Object(c.a)(Object(c.a)({},{arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerMode:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),{},{dots:i}),dotsPosition:"bottom",children:v.slice(-4).map((function(e){return Object(O.jsx)("div",{className:"single-category-slide",children:Object(O.jsx)(d.CategoryCard,{icon:Object(O.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:o("Homepage.CategoryBtnText"),subtitle:Object(O.jsx)(a.IconText,{icon:Object(O.jsx)(m.n,{}),text:"".concat(o("CoursesLength",{count:e.count}))}),onButtonClick:function(){return h.push("/courses/?categories[]=".concat(e.id))},variant:"gradient"})},e.id)}))})}):Object(O.jsx)(p.Row,{children:v.slice(-4).map((function(e){return Object(O.jsx)(p.Col,{md:3,children:Object(O.jsx)(d.CategoryCard,{icon:Object(O.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:o("Homepage.CategoryBtnText"),subtitle:Object(O.jsx)(a.IconText,{icon:Object(O.jsx)(m.n,{}),text:"".concat(o("CoursesLength",{count:e.count}))}),onButtonClick:function(){return h.push("/courses/?categories[]=".concat(e.id))},variant:"gradient"})},e.id)}))})]})})}},707:function(e,t,n){"use strict";var i,c=n(12),s=n(74),o=n(1),r=n(89),a=n(33),l=n(73),d=n(364),u=n(267),j=n(34),b=n(48),h=n(20),m=n(82),x=n(662),p=n(661),g=n(668),O=n(83),f=n(189),v=n(55),w=n(669),y=n(678),C=n(664),T=n(3),k=h.default.section(i||(i=Object(s.a)(['\n  margin: 40px 0;\n  @media (max-width: 768px) {\n    margin: 30px 0;\n  }\n  .container {\n    position: relative;\n    padding-top: 55px;\n    padding-bottom: 35px;\n    z-index: 1;\n    &:after {\n      position: absolute;\n      content: "";\n      width: ',";\n      height: 100%;\n      background: ",";\n      left: 50%;\n      transform: translate(-50%, 0);\n      top: 0;\n      z-index: -1;\n      opacity: ",";\n      border-radius: ",";\n\n      @media (max-width: 1200px) {\n        background: ",";\n      }\n    }\n  }\n  .header-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 55px;\n\n    button {\n      @media (max-width: 1200px) {\n        display: none;\n      }\n    }\n  }\n  .show-more-btn {\n    display: none;\n    @media (max-width: 1200px) {\n      display: block;\n      margin-top: 60px;\n    }\n  }\n  .course-section {\n    display: none;\n  }\n"])),m.isMobile?"100%":"calc(100% + 100px)",(function(e){var t=e.theme;return"orangeTheme"===t.theme&&"light"===t.mode?t.gray4:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}),(function(e){return"dark"===e.theme.mode?.1:1}),(function(e){return e.theme.radius}),(function(e){return"orangeTheme"===e.theme.theme?"linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)":"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}));t.a=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(!0),S=Object(c.a)(s,2),_=S[0],N=S[1],B=Object(o.useContext)(v.EscolaLMSContext).fetchCourses,M=Object(j.g)(),F=Object(h.useTheme)(),I=Object(u.a)().t,R="dark"===F.mode?F.white:F.black;return Object(o.useEffect)((function(){B({per_page:8}).then((function(e){i(e.data||[])})).catch((function(){return N(!1)})).finally((function(){return N(!1)}))}),[B]),Object(T.jsx)(k,{children:Object(T.jsxs)(f.a,{className:"container",children:[Object(T.jsxs)("div",{className:"header-wrapper",children:[Object(T.jsx)(r.Title,{level:3,as:"h1",children:I("Homepage.AwardedCoursesTitle")}),Object(T.jsx)(l.Button,{mode:"outline",onClick:function(){return M.push("/courses")},children:I("Homepage.AwardedCoursesBtnText")})]}),_&&Object(T.jsx)(w.a,{}),!_&&m.isMobile&&Object(T.jsx)(y.a,{courses:n}),!_&&!m.isMobile&&Object(T.jsx)(O.Row,{style:{rowGap:"60px"},children:n.map((function(e){return Object(T.jsx)(O.Col,{md:6,lg:3,children:Object(T.jsx)(g.a,{children:Object(T.jsx)(d.CourseCard,{mobile:m.isMobile,id:Number(e.id),tags:Object(T.jsx)(C.a,{tags:e.tags,onTagClick:function(e){return M.push("/courses/?tag=".concat(e))}}),image:Object(T.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(T.jsx)(p.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(T.jsx)(x.a,{})}),subtitle:Object(T.jsx)(a.Text,{size:"12",style:{lineHeight:1.2},children:Object(T.jsx)(b.c,{style:{color:R},to:"/courses/".concat(e.id),children:Object(T.jsx)("strong",{children:e.title})})})})})},e.id)}))}),Object(T.jsx)(l.Button,{className:"show-more-btn",onClick:function(){return M.push("/courses")},block:!0,mode:"outline",children:I("Homepage.AwardedCoursesBtnText")})]})})}}}]);
//# sourceMappingURL=16.f41bf59d.chunk.js.map