(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[17],{402:function(e,t,n){"use strict";n.r(t);var i,c=n(43),s=n(0),r=n(24),o=n(161),a=n(60),l=n(234),d=n(444),j=n(7),u=n(52),h=n(68),m=n(476),x=n(554),p=n(515),b=n(138),g=n(11),O=n(111),f=n(1),v=j.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: -120px;\n  @media (max-width: 1200px) {\n    margin-top: 0;\n  }\n  @media (max-width: 575px) {\n    margin-top: -30px;\n  }\n  .home-hero {\n    margin-bottom: 45px;\n    padding-top: 42px;\n    order: 1;\n    h1 {\n      margin-top: 0 !important;\n    }\n    @media (max-width: 768px) {\n      margin-bottom: 30px;\n      padding-top: 0;\n      h1 {\n        font-size: 26px;\n      }\n    }\n    button {\n      @media (max-width: 991px) {\n        width: 100%;\n      }\n    }\n  }\n\n  .home-best-courses {\n    margin: 40px 0;\n    order: ",";\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .home-newest-courses {\n    order: ",";\n    margin: 40px 0;\n    @media (max-width: 768px) {\n      margin: 30px 0;\n    }\n  }\n\n  .promoted-courses-wrapper {\n    order: ",";\n  }\n\n  .categories-section-wrapper {\n    order: 5;\n  }\n"])),(function(e){return"velvetTheme"===e.theme.theme?3:2}),(function(e){return"orangeTheme"===e.theme.theme?3:4}),(function(e){var t=e.theme;return"orangeTheme"===t.theme?4:"velvetTheme"===t.theme?2:3}));t.default=function(){var e,t,n,i,c,j,w,y,C=Object(s.useContext)(r.EscolaLMSContext),T=C.categoryTree,_=C.fetchCategories,k=C.courses,S=C.fetchCourses,N=C.settings,B=Object(g.g)(),F=Object(h.a)(),I=F.t,z=F.i18n;Object(s.useEffect)((function(){S({per_page:6}),_()}),[]);var H={arrows:!1,infinite:!0,speed:500,draggable:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1201,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]};return Object(f.jsx)(o.a,{metaTitle:I("Home"),children:Object(f.jsxs)(v,{children:[Object(f.jsx)("section",{className:"home-hero",children:(null===(e=N.value)||void 0===e?void 0:e.homepage)&&(null===(t=N.value.homepage)||void 0===t?void 0:t.heroBannerText)&&(null===(n=N.value.homepage)||void 0===n?void 0:n.heroBannerImg)&&""!==(null===(i=N.value.homepage)||void 0===i?void 0:i.heroBannerImg)&&Object(f.jsx)(O.a,{children:Object(f.jsx)(l.Banner,{mobile:u.isMobile,title:Object(f.jsx)(b.MarkdownRenderer,{children:"<h1>".concat((null===(c=N.value.homepage)||void 0===c?void 0:c.heroBannerText[z.language])||"","</h1>")}),btnText:I("Homepage.HeroBtnText"),asset:Object(f.jsx)(d.ResponsiveImage,{path:(null===N||void 0===N||null===(j=N.value)||void 0===j||null===(w=j.homepage)||void 0===w?void 0:w.heroBannerImg)||"",srcSizes:[500,750,1e3]}),handleBtn:function(){return B.push("/courses")}})})}),Object(f.jsx)("section",{className:"home-best-courses",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(a.Title,{className:"slider-title",level:3,as:"h1",children:Object(f.jsx)("strong",{children:I("Homepage.CoursesSlider1Title")})}),k&&k.list&&Object(f.jsx)(m.a,{courses:k.list.data,sliderSettings:H})]})}),Object(f.jsx)("section",{className:"home-newest-courses",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(a.Title,{className:"slider-title",level:3,as:"h1",children:Object(f.jsx)("strong",{children:I("Homepage.CoursesSlider2Title")})}),k&&k.list&&Object(f.jsx)(m.a,{courses:k.list.data,sliderSettings:H})]})}),k&&k.list&&k.list.data.length>=6&&Object(f.jsx)("div",{className:"promoted-courses-wrapper",children:Object(f.jsx)(x.a,{courses:k.list.data})}),T&&Object(f.jsx)("div",{className:"categories-section-wrapper",children:Object(f.jsx)(p.a,{categories:(null===(y=T.list)||void 0===y?void 0:y.filter((function(e){return!!e.icon})))||[]})})]})})}},444:function(e,t,n){"use strict";var i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},c=this&&this.__assign||function(){return c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},c.apply(this,arguments)},s=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var c=Object.getOwnPropertyDescriptor(t,n);c&&!("get"in c?!t.__esModule:c.writable||c.configurable)||(c={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,c)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&s(t,e,n);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ResponsiveImage=void 0;var l,d,j=n(1),u=o(n(7)),h=a(n(222)),m=(0,u.default)("div")(l||(l=i(["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"],["\n  &,\n  & > .escolalms-image,\n  & > .escolalms-image img {\n    width: 100%;\n    max-width: 100%;\n  }\n"])));t.ResponsiveImage=function(e){var t;return(0,j.jsx)(m,c({className:"wellms-component ".concat(null!==(t=e.className)&&void 0!==t?t:"")},{children:(0,j.jsx)(h.default,c({},e))}))},t.default=(0,u.withTheme)((0,u.default)(t.ResponsiveImage)(d||(d=i([""],[""]))))},448:function(e,t,n){"use strict";var i,c=n(43),s=n(7),r=n(450),o=n(1),a=s.default.div(i||(i=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid\n    ",";\n"])),(function(e){var t=e.theme;return"light"===t.mode?t.gray4:t.gray2}));t.a=function(){return Object(o.jsx)(a,{children:Object(o.jsx)("img",{src:r.a,alt:""})})}},450:function(e,t,n){"use strict";t.a=n.p+"static/media/image.ece42557.svg"},455:function(e,t,n){"use strict";var i,c=n(43),s=(n(0),n(7)),r=n(1),o=s.default.div(i||(i=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n\n  a {\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n"])));t.a=function(e){var t=e.children;return Object(r.jsx)(o,{children:t})}},476:function(e,t,n){"use strict";var i,c=n(6),s=n(83),r=n(43),o=n(0),a=n(7),l=n(15),d=n(223),j=n(221),u=n(164),h=n(49),m=n(163),x=n(220),p=n(11),b=n(25),g=n(52),O=n(68),f=n(160),v=n(448),w=n(444),y=n(455),C=n(53),T=n(18),_=n(1),k=a.default.div(i||(i=Object(r.a)(["\n  @media (max-width: 575px) {\n    margin-left: -59px;\n  }\n  .slick-slider {\n    @media (max-width: 575px) {\n      width: calc(100% + 15px);\n    }\n  }\n  .slick-dots {\n    top: -65px;\n    @media (max-width: 575px) {\n      top: -30px !important;\n      right: unset !important;\n      left: 60px !important;\n    }\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n    @media (max-width: 991px) {\n      padding-bottom: 20px;\n    }\n  }\n\n  .slick-slide {\n    height: inherit;\n\n    > div {\n      display: flex;\n      height: 100%;\n    }\n  }\n"])));t.a=function(e){var t=e.courses,n=e.sliderSettings,i=Object(o.useState)(!0),r=Object(s.a)(i,1)[0],S=Object(p.g)(),N=Object(a.useTheme)(),B=Object(O.a)().t;return Object(_.jsx)(k,{children:t.length>=5||g.isMobile?Object(_.jsx)("div",{children:Object(_.jsx)(d.Slider,{settings:Object(c.a)(Object(c.a)({},n),{},{dots:r,onSwipe:function(){var e=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach((function(e){return e.removeAttribute("aria-modal")})),e.forEach((function(e){return e.setAttribute("aria-modal","true")}))},onInit:function(){document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach((function(e){return e.setAttribute("aria-modal","true")}))}}),dotsPosition:"top right",children:t&&t.map((function(e){var t,n;return Object(_.jsx)(y.a,{children:Object(_.jsx)(j.CourseCard,{mobile:g.isMobile,id:e.id,image:Object(_.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(_.jsx)(w.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(_.jsx)(v.a,{})}),tags:Object(_.jsx)(_.Fragment,{children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(_.jsx)(u.Badge,{color:N.primaryColor,children:Object(_.jsx)(b.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),subtitle:e.subtitle?Object(_.jsx)(l.Text,{size:"12",children:Object(_.jsx)(b.c,{style:{color:N.primaryColor},to:"/courses/".concat(e.id),children:Object(_.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(_.jsx)(b.c,{to:"/courses/".concat(e.id),className:"title",children:Object(_.jsx)(T.Title,{level:4,as:"h2",children:e.title})}),categories:Object(_.jsx)(x.BreadCrumbs,{hyphen:"/",items:null===(n=e.categories)||void 0===n?void 0:n.map((function(e){return Object(_.jsx)(b.c,{to:"/courses/?category_id[]=".concat(e.id),children:e.name},e.id)}))}),actions:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(h.Button,{mode:"secondary",onClick:function(){return S.push("/courses/".concat(e.id))},children:B("Start now")})}),footer:Object(_.jsxs)(_.Fragment,{children:[e.users_count&&e.users_count>0?Object(_.jsx)(m.IconText,{icon:Object(_.jsx)(f.r,{}),text:"".concat(e.users_count," ").concat(B("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(_.jsx)(m.IconText,{icon:Object(_.jsx)(f.l,{}),text:"".concat(e.lessons_count," ").concat(B("Lessons"))}):""]})})},e.id)}))})}):Object(_.jsx)(C.Row,{style:{marginTop:"30px",rowGap:"60px"},children:t.map((function(e){var t,n;return Object(_.jsx)(C.Col,{md:6,lg:3,children:Object(_.jsx)(y.a,{children:Object(_.jsx)(j.CourseCard,{mobile:g.isMobile,id:e.id,image:Object(_.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.image_path?Object(_.jsx)(w.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):Object(_.jsx)(v.a,{})}),tags:Object(_.jsx)(_.Fragment,{children:null===(t=e.tags)||void 0===t?void 0:t.map((function(e,t){return Object(_.jsx)(u.Badge,{color:N.primaryColor,children:Object(_.jsx)(b.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),subtitle:e.subtitle?Object(_.jsx)(l.Text,{size:"12",children:Object(_.jsx)(b.c,{style:{color:N.primaryColor},to:"/courses/".concat(e.id),children:Object(_.jsx)("strong",{children:e.subtitle})})}):void 0,title:Object(_.jsx)(b.c,{to:"/courses/".concat(e.id),children:e.title}),categories:Object(_.jsx)(x.BreadCrumbs,{hyphen:"/",items:null===(n=e.categories)||void 0===n?void 0:n.map((function(e){return Object(_.jsx)(b.c,{to:"/courses/?category_id[]=".concat(e.id),children:e.name},e.id)}))}),actions:Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(h.Button,{mode:"secondary",onClick:function(){return S.push("/courses/".concat(e.id))},children:B("Start now")})}),footer:Object(_.jsxs)(_.Fragment,{children:[e.users_count&&e.users_count>0?Object(_.jsx)(m.IconText,{icon:Object(_.jsx)(f.r,{}),text:"".concat(e.users_count," ").concat(B("Students"))}):""," ",e.lessons_count&&e.lessons_count>0?Object(_.jsx)(m.IconText,{icon:Object(_.jsx)(f.l,{}),text:"".concat(e.lessons_count," ").concat(B("Lessons"))}):""]})})},e.id)},e.id)}))})})}},515:function(e,t,n){"use strict";var i,c=n(6),s=n(83),r=n(43),o=n(60),a=n(163),l=n(223),d=n(227),j=n(52),u=n(68),h=n(0),m=n(7),x=n(160),p=n(11),b=n(53),g=n(111),O=n(1),f=m.default.section(i||(i=Object(r.a)(["\n  overflow: hidden;\n  padding: 60px 0 0;\n  @media (max-width: 768px) {\n    padding: 30px 0;\n  }\n  h3 {\n    text-align: center;\n    margin-bottom: 30px;\n  }\n  .slider-title {\n    @media (max-width: 575px) {\n      padding-right: 45%;\n    }\n  }\n  .categories-slider {\n    .slick-dots {\n      bottom: 40px;\n    }\n  }\n  .slick-track {\n    display: flex;\n    gap: 0 20px;\n  }\n  .slick-slide {\n    @media (max-width: 991px) {\n      display: flex !important;\n      justify-content: center;\n    }\n  }\n  .single-category-slide {\n    margin: 0 8px;\n    .category-card-icon {\n      img {\n        margin: 0 auto;\n        display: block;\n      }\n    }\n    @media (max-width: 991px) {\n      margin: 0 auto;\n      min-width: 300px;\n    }\n  }\n"])));t.a=function(e){var t=e.categories,n=Object(h.useState)(!0),i=Object(s.a)(n,1)[0],r=Object(u.a)().t,m=Object(p.g)(),v=t.filter((function(e){return e.count&&e.count>0}));return Object(O.jsx)(f,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(o.Title,{level:3,children:Object(O.jsx)("strong",{children:r("Homepage.CategoriesTitle")})}),j.isMobile?Object(O.jsx)("div",{className:"categories-slider",children:Object(O.jsx)(l.Slider,{settings:Object(c.a)(Object(c.a)({},{arrows:!1,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,centerMode:!1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]}),{},{dots:i}),dotsPosition:"bottom",children:v.slice(-4).map((function(e){return Object(O.jsx)("div",{className:"single-category-slide",children:Object(O.jsx)(d.CategoryCard,{icon:Object(O.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:r("Homepage.CategoryBtnText"),subtitle:Object(O.jsx)(a.IconText,{icon:Object(O.jsx)(x.h,{}),text:"".concat(r("CoursesLength",{count:e.count}))}),onButtonClick:function(){return m.push("/courses/?category_id[]=".concat(e.id))},variant:"gradient"})},e.id)}))})}):Object(O.jsx)(b.Row,{children:v.slice(-4).map((function(e){return Object(O.jsx)(b.Col,{md:3,children:Object(O.jsx)(d.CategoryCard,{icon:Object(O.jsx)("img",{src:e.icon,alt:e.name}),title:e.name,buttonText:r("Homepage.CategoryBtnText"),subtitle:Object(O.jsx)(a.IconText,{icon:Object(O.jsx)(x.h,{}),text:"".concat(r("CoursesLength",{count:e.count}))}),onButtonClick:function(){return m.push("/courses/?category_id[]=".concat(e.id))},variant:"gradient"})},e.id)}))})]})})}},554:function(e,t,n){"use strict";var i,c=n(43),s=(n(0),n(60)),r=n(15),o=n(49),a=n(221),l=n(228),d=n(164),j=n(68),u=n(11),h=n(25),m=n(7),x=n(52),p=n(448),b=n(444),g=n(220),O=n(455),f=n(53),v=n.p+"static/media/placeholder-course.eeb91632.jpeg",w=n(111),y=n(1),C=m.default.section(i||(i=Object(c.a)(['\n  margin: 40px 0;\n  @media (max-width: 768px) {\n    margin: 30px 0;\n  }\n  .container {\n    position: relative;\n    padding-top: 55px;\n    padding-bottom: 35px;\n    z-index: 1;\n    &:after {\n      position: absolute;\n      content: "";\n      width: ',";\n      height: 100%;\n      background: ",";\n      left: 50%;\n      transform: translate(-50%, 0);\n      top: 0;\n      z-index: -1;\n      opacity: ",";\n      border-radius: ",";\n\n      @media (max-width: 1200px) {\n        background: ",";\n      }\n    }\n  }\n  .small-padding {\n    padding-left: 10px;\n    padding-right: 10px;\n\n    @media (max-width: 991px) {\n      padding-left: 15px;\n      padding-right: 15px;\n    }\n\n    &-wrapper {\n      padding-left: 10px;\n      padding-right: 10px;\n      @media (max-width: 991px) {\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n    }\n  }\n  .header-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 55px;\n\n    button {\n      @media (max-width: 1200px) {\n        display: none;\n      }\n    }\n  }\n  .main-col-1 {\n    @media (max-width: 1200px) {\n      order: 2;\n    }\n  }\n  .main-col-2 {\n    @media (max-width: 1200px) {\n      order: 1;\n    }\n  }\n  .main-col-3 {\n    @media (max-width: 1200px) {\n      order: 3;\n    }\n  }\n  .mobile-hide {\n    @media (max-width: 1200px) {\n      display: none;\n    }\n  }\n  .show-more-btn {\n    display: none;\n    @media (max-width: 1200px) {\n      display: block;\n    }\n  }\n  .course-wrapper {\n    background-color: ",";\n    padding: ",";\n    margin-bottom: 20px;\n    &--small {\n      .course-section {\n        margin-top: 0;\n      }\n    }\n    &--hidden-section {\n      .course-section {\n        display: none;\n      }\n    }\n    &--big {\n      padding: 0;\n    }\n    .lesson-container {\n      display: none;\n    }\n  }\n"])),x.isMobile?"100%":"calc(100% + 100px)",(function(e){var t=e.theme;return"orangeTheme"===t.theme&&"light"===t.mode?t.gray4:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}),(function(e){return"dark"===e.theme.mode?.1:1}),(function(e){return e.theme.radius}),(function(e){return"orangeTheme"===e.theme.theme?"linear-gradient(180deg, #F2F2F2 0%, rgba(242, 242, 242, 0) 100%)":"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"}),(function(e){var t=e.theme;return"orangeTheme"===t.theme&&"dark"===t.mode?t.dm__background:"orangeTheme"===t.theme&&"light"===t.mode?t.background:"transparent"}),(function(e){return"orangeTheme"===e.theme.theme?"12px 10px 1px 10px":0}));t.a=function(e){var t,n,i,c,x,T,_,k=e.courses,S=Object(u.g)(),N=Object(m.useTheme)(),B=Object(j.a)().t,F="dark"===N.mode?N.white:N.black;return Object(y.jsx)(C,{children:Object(y.jsxs)(w.a,{className:"container",children:[Object(y.jsxs)("div",{className:"header-wrapper",children:[Object(y.jsx)(s.Title,{level:3,as:"h1",children:B("Homepage.AwardedCoursesTitle")}),Object(y.jsx)(o.Button,{mode:"outline",onClick:function(){return S.push("/courses")},children:B("Homepage.AwardedCoursesBtnText")})]}),Object(y.jsxs)(f.Row,{children:[Object(y.jsx)(f.Col,{xl:4,className:"small-padding main-col-1",children:Object(y.jsxs)(f.Row,{justify:"end",children:[Object(y.jsx)(f.Col,{xs:6,className:"small-padding-wrapper",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[0].id),tags:Object(y.jsx)(y.Fragment,{children:null===(t=k[0].tags)||void 0===t?void 0:t.map((function(e,t){return Object(y.jsx)(d.Badge,{color:N.primaryColor,children:Object(y.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(y.jsx)(h.c,{to:"/courses/".concat(k[0].id),children:k[0].image_path?Object(y.jsx)(b.ResponsiveImage,{path:k[0].image_path,alt:k[0].title,srcSizes:[300,600,900]}):Object(y.jsx)(p.a,{})}),subtitle:Object(y.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(y.jsx)(h.c,{style:{color:F},to:"/courses/".concat(k[0].id),children:Object(y.jsx)("strong",{children:k[0].title})})})})})})}),Object(y.jsx)(f.Col,{xs:6,className:"small-padding-wrapper",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[1].id),tags:Object(y.jsx)(y.Fragment,{children:null===(n=k[1].tags)||void 0===n?void 0:n.map((function(e,t){return Object(y.jsx)(d.Badge,{color:N.primaryColor,children:Object(y.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(y.jsx)(h.c,{to:"/courses/".concat(k[1].id),children:k[1].image_path?Object(y.jsx)(b.ResponsiveImage,{path:k[1].image_path,alt:k[1].title,srcSizes:[300,600,900]}):Object(y.jsx)(p.a,{})}),subtitle:Object(y.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(y.jsx)(h.c,{style:{color:F},to:"/courses/".concat(k[1].id),children:Object(y.jsx)("strong",{children:k[1].title})})})})})})}),Object(y.jsx)(f.Col,{lg:9,className:"small-padding-wrapper mobile-hide",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--small",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[2].id),tags:Object(y.jsx)(y.Fragment,{children:null===(i=k[2].tags)||void 0===i?void 0:i.map((function(e,t){return Object(y.jsx)(d.Badge,{color:N.primaryColor,children:Object(y.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(y.jsx)(h.c,{to:"/courses/".concat(k[2].id),children:k[2].image_path?Object(y.jsx)(b.ResponsiveImage,{path:k[2].image_path,alt:k[2].title,srcSizes:[300,600,900]}):Object(y.jsx)(p.a,{})}),subtitle:Object(y.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(y.jsx)(h.c,{style:{color:F},to:"/courses/".concat(k[2].id),children:Object(y.jsx)("strong",{children:k[2].title})})})})})})})]})}),Object(y.jsx)(f.Col,{xl:5,className:"small-padding main-col-2",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--big",children:Object(y.jsx)(l.ImageBubble,{image:{src:k[5].image_url||v,alt:k[5].title||""},header:Object(y.jsx)("div",{style:{textAlign:"right"},children:null===(c=k[5].tags)||void 0===c?void 0:c.map((function(e){return Object(y.jsx)(h.c,{to:"/courses/tag=".concat(e.title),children:Object(y.jsx)(d.Badge,{children:e.title})},e.title)}))}),children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[5].id),title:Object(y.jsx)(h.c,{to:"/courses/".concat(k[5].id),className:"title",children:Object(y.jsx)(s.Title,{level:4,as:"h2",children:k[5].title})}),hideImage:!0,buttonText:B("HowItWorks"),onButtonClick:function(){return S.push("/courses/".concat(k[5].id))},subtitle:Object(y.jsx)(r.Text,{children:Object(y.jsx)("strong",{style:{fontSize:14,display:"inline-block",lineHeight:1.2},children:k[5].title})}),categories:Object(y.jsx)(g.BreadCrumbs,{hyphen:"/",items:(null===(x=k[5].categories)||void 0===x?void 0:x.map((function(e){return Object(y.jsx)(h.c,{style:{color:F},to:"/courses/?category_id[]=".concat(e.id),children:e.name},e.id)})))||[]}),onSecondaryButtonClick:function(){return S.push("/courses/".concat(k[5].id))}})})})})}),Object(y.jsx)(f.Col,{xl:3,className:"small-padding main-col-3",children:Object(y.jsxs)(f.Row,{children:[Object(y.jsx)(f.Col,{xs:6,xl:12,className:"small-padding-wrapper",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--small course-wrapper--hidden-section",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[5].id),tags:Object(y.jsx)(y.Fragment,{children:null===(T=k[5].tags)||void 0===T?void 0:T.map((function(e,t){return Object(y.jsx)(d.Badge,{color:N.primaryColor,children:Object(y.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(y.jsx)(h.c,{to:"/courses/".concat(k[5].id),children:k[5].image_path?Object(y.jsx)(b.ResponsiveImage,{path:k[5].image_path,alt:k[5].title,srcSizes:[300,600,900]}):Object(y.jsx)(p.a,{})}),subtitle:Object(y.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(y.jsx)(h.c,{style:{color:F},to:"/courses/".concat(k[5].id),children:Object(y.jsx)("strong",{children:k[5].title})})})})})})}),Object(y.jsx)(f.Col,{xs:6,xl:9,className:"small-padding-wrapper",children:Object(y.jsx)("div",{className:"course-wrapper course-wrapper--small course-wrapper--hidden-section",children:Object(y.jsx)(O.a,{children:Object(y.jsx)(a.CourseCard,{id:Number(k[4].id),tags:Object(y.jsx)(y.Fragment,{children:null===(_=k[4].tags)||void 0===_?void 0:_.map((function(e,t){return Object(y.jsx)(d.Badge,{color:N.primaryColor,children:Object(y.jsx)(h.c,{style:{color:N.white},to:"/courses/?tag=".concat(e.title),children:e.title})},t)}))}),image:Object(y.jsx)(h.c,{to:"/courses/".concat(k[4].id),children:k[4].image_path?Object(y.jsx)(b.ResponsiveImage,{path:k[4].image_path,alt:k[4].title,srcSizes:[300,600,900]}):Object(y.jsx)(p.a,{})}),subtitle:Object(y.jsx)(r.Text,{size:"12",style:{lineHeight:1.2},children:Object(y.jsx)(h.c,{style:{color:F},to:"/courses/".concat(k[4].id),children:Object(y.jsx)("strong",{children:k[4].title})})})})})})})]})})]}),Object(y.jsx)(o.Button,{className:"show-more-btn",onClick:function(){return S.push("/courses")},block:!0,mode:"outline",children:B("Homepage.AwardedCoursesBtnText")})]})})}}}]);
//# sourceMappingURL=17.525f8046.chunk.js.map