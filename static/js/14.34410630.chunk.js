(this["webpackJsonpescolalms-demo"]=this["webpackJsonpescolalms-demo"]||[]).push([[14],{468:function(e,n,t){"use strict";t.r(n);var o=t(70),i=t(0),c=t.n(i),r=t(14),s=t(31),a=t(76),l=t(25),u=t(516),d=t(177),b=t(6),p=t(621),j=t(599),v=t(554),m=t(150),f=t(59),O=t(1),h=function(e){var n,t=e.program,o=Object(v.a)(t,"/courses/preview/"),r=o.topic,s=o.lesson,l=o.onNextTopicPreview,u=o.getNextPrevTopic,d=Object(a.a)().t;return Object(i.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[null===r||void 0===r?void 0:r.id,null===s||void 0===s?void 0:s.id]),Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)("div",{className:"course-program course-program-page",children:Object(O.jsx)("div",{className:"course-program-container",children:Object(O.jsxs)("div",{className:"course-program-wrapper course-program-wrapper-preview",children:[Object(O.jsxs)("div",{className:"course-program-player",children:[Object(O.jsxs)("div",{className:"course-program-player-content",children:[Object(O.jsx)("h2",{children:null===r||void 0===r?void 0:r.title}),r&&r.introduction&&Object(O.jsx)(f.Col,{sm:12,md:12,lg:12,children:Object(O.jsx)("div",{className:"container-md",children:Object(O.jsx)(m.MarkdownRenderer,{children:r.introduction})})}),Object(O.jsx)("div",{className:"course-program-player-content__wrapper",style:Object(b.a)({},(null===r||void 0===r||null===(n=r.json)||void 0===n?void 0:n.wrapperStyle)||{}),children:Object(O.jsx)(p.a,{preview:!0,lessonId:Number(null===s||void 0===s?void 0:s.id),topicId:Number(null===r||void 0===r?void 0:r.id),isThereAnotherTopic:!!u(Number(null===r||void 0===r?void 0:r.id))})})]}),Object(O.jsxs)(f.Row,{children:[s&&s.summary&&Object(O.jsx)(f.Col,{sm:12,md:12,lg:12,children:Object(O.jsx)("div",{className:"course-program-summary",children:Object(O.jsx)(m.MarkdownRenderer,{children:s.summary})})}),r&&r.summary&&Object(O.jsx)(f.Col,{sm:12,md:12,lg:12,children:Object(O.jsx)("div",{className:"course-program-summary",children:Object(O.jsx)(m.MarkdownRenderer,{children:r.summary})})})]}),Object(O.jsx)("div",{className:"course-program-player-next",children:Object(O.jsxs)("button",{className:"default-btn default-btn-equal",onClick:function(){return l()},children:[Object(O.jsxs)("div",{className:"course-program-player-next-button__wrapper",children:[d("Next Topic")," >"]}),Object(O.jsx)("span",{})]})})]}),Object(O.jsx)(j.a,{course:t,lessonId:Number(null===s||void 0===s?void 0:s.id),topicId:Number(null===r||void 0===r?void 0:r.id)})]})})})})},x=t(122),g=function(e){var n,t,r=e.program,s=null===r||void 0===r||null===(n=r.scorm)||void 0===n||null===(t=n.scos)||void 0===t?void 0:t.find((function(e){return void 0!==e.entry_url})),a=null===s||void 0===s?void 0:s.uuid,u=Object(i.useRef)(null),d=Object(i.useState)(0),b=Object(o.a)(d,2),p=b[0],j=b[1],v=Object(i.useContext)(l.EscolaLMSContext).apiUrl;return Object(i.useEffect)((function(){var e,n,t,o;u.current&&j((null===(e=u.current)||void 0===e||null===(n=e.contentWindow)||void 0===n||null===(t=n.document)||void 0===t||null===(o=t.body)||void 0===o?void 0:o.scrollHeight)||0)}),[u]),s||a?Object(O.jsx)(c.a.Fragment,{children:Object(O.jsx)("div",{className:"container-fluid course-program",children:Object(O.jsx)("div",{className:"course-program-player scorm",style:{height:"".concat(610+p,"px")},children:Object(O.jsx)("iframe",{title:"scorm-player",ref:u,src:"".concat(v,"/api/scorm/play/").concat(a),scrolling:"no"})})})}):Object(O.jsx)(c.a.Fragment,{})};n.default=function(){var e,n,t=Object(a.a)().t,o=Object(r.i)().id,c=Object(i.useContext)(l.EscolaLMSContext),b=c.program,p=c.fetchProgram;return Object(i.useEffect)((function(){o&&p(Number(o))}),[o,p]),b.loading?Object(O.jsx)(u.a,{}):b.error?Object(O.jsx)(x.a,{children:Object(O.jsxs)("div",{className:"alert alert-danger",role:"alert",children:[Object(O.jsx)("h4",{className:"alert-heading",children:t("Error")}),Object(O.jsxs)("p",{children:[" ",b.error.message||b.error.error]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{className:"mb-0",children:[t("CoursePage.Preview.SeeOther"),Object(O.jsx)(s.c,{to:"/courses",children:t("Courses")}),"."]})]})}):b.value&&null!==b&&void 0!==b&&null!==(e=b.value)&&void 0!==e&&null!==(n=e.scorm)&&void 0!==n&&n.id?Object(O.jsx)(d.a,{children:Object(O.jsx)(g,{program:b.value})}):b.value&&b.value.lessons&&b.value.lessons.length?Object(O.jsxs)(d.a,{children:[Object(O.jsx)(h,{program:b.value}),";"]}):Object(O.jsx)(u.a,{})}},516:function(e,n,t){"use strict";var o,i=t(52),c=t(0),r=t(179),s=t(8),a=t(1),l=s.default.div(o||(o=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__background:n.background}));n.a=function(){var e=Object(s.useTheme)();return Object(c.useEffect)((function(){return document.body.style.overflow="hidden",function(){document.body.style.overflow="inherit"}}),[]),Object(a.jsx)(l,{children:Object(a.jsx)(r.Spin,{color:e.primaryColor})})}},554:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t(70),i=t(66),c=t(0),r=t(14);function s(e){var n,t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/course/",a=Object(c.useContext)(i.EscolaLMSContext),l=a.sendProgress,u=a.getNextPrevTopic,d=a.progress,b=Object(c.useState)(!1),p=Object(o.a)(b,2),j=p[0],v=p[1],m=Object(r.i)(),f=m.lessonID,O=m.topicID,h=Object(r.g)().push,x=f||e.lessons[0].id,g=O||(e&&e.lessons&&e.lessons[0]&&e.lessons[0].topics&&(null===e||void 0===e||null===(n=e.lessons[0])||void 0===n||null===(t=n.topics[0])||void 0===t?void 0:t.id)||0),y=Object(c.useMemo)((function(){return e.lessons.find((function(e){return e.id===Number(x)}))}),[e,x]),N=Object(c.useMemo)((function(){return y&&y.topics&&y.topics.find((function(e){return e.id===Number(g)}))}),[y,g]),w=Object(c.useCallback)((function(){e.id&&l(e.id,[{topic_id:Number(g),status:1}]).then((function(){var n=u(Number(g));n&&h("".concat(s).concat(e.id,"/").concat(n.lesson_id,"/").concat(n.id),null)}))}),[g,e,h,u,l,s]),T=Object(c.useCallback)((function(){e.id&&l(e.id,[{topic_id:Number(g),status:1}]).then((function(){var n=u(Number(g),!1);n&&h("".concat(s).concat(e.id,"/").concat(n.lesson_id,"/").concat(n.id),null)}))}),[g,e,h,u,l,s]),C=Object(c.useCallback)((function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u(Number(g),n);t&&h("".concat(s).concat(e.id,"/").concat(null===t||void 0===t?void 0:t.lesson_id,"/").concat(null===t||void 0===t?void 0:t.id))}),[x,g,e,e.id,h,s]);return{topic:N,lesson:y,onNextTopic:w,onPrevTopic:T,getNextPrevTopic:u,isNextTopicButtonDisabled:j,disableNextTopicButton:v,onNextTopicPreview:C,sendProgress:l,progress:d}}},564:function(e,n){},567:function(e,n,t){"use strict";var o,i,c,r=t(70),s=t(52),a=t(0),l=t(48),u=t(66),d=t(8),b=t(76),p=t(176),j=t(1),v=d.default.div(o||(o=Object(s.a)(["\n  > button {\n    position: fixed;\n    right: 5px;\n    bottom: 5px;\n    z-index: 9999;\n    svg path {\n      fill: white;\n    }\n  }\n  iframe {\n    border: none;\n    display: block;\n    width: 100%;\n  }\n  ","\n"])),(function(e){return e.fullview?Object(d.css)(i||(i=Object(s.a)(["\n        iframe {\n          position: fixed;\n          top: 90px;\n          left: 0;\n          height: calc(100% - 90px - 80px);\n\n          z-index: 9999;\n        }\n      "]))):Object(d.css)(c||(c=Object(s.a)(["\n        display: flex;\n\n        min-height: 80vh;\n        max-height: 80vh;\n        height: 100vh;\n        iframe {\n          height: 100%;\n        }\n      "])))}));n.a=function(e){var n=e.value,t=Object(a.useContext)(u.EscolaLMSContext).apiUrl,o=Object(b.a)().t,i=Object(a.useState)(!1),c=Object(r.a)(i,2),s=c[0],d=c[1];return Object(j.jsx)("div",{className:"scorm-wrapper",children:Object(j.jsxs)(v,{fullview:s,children:[Object(j.jsxs)(l.Button,{onClick:function(){return d(!s)},children:[" ",o("Scorm.Resize")," ",Object(j.jsx)(p.p,{})]}),Object(j.jsx)("iframe",{title:n.title,src:"".concat(t,"/api/scorm/play/").concat(n.uuid)})]})})}},589:function(e,n){},590:function(e,n){},591:function(e,n){},592:function(e,n){},593:function(e,n){},599:function(e,n,t){"use strict";var o,i,c=t(70),r=t(52),s=t(0),a=t.n(s),l=t(151),u=t(66),d=t(14),b=t(58),p=t(8),j=t(554),v=t(24),m=t(89),f=t(1),O=p.default.aside(o||(o=Object(r.a)(["\n  padding-bottom: 100px;\n  .show-agenda-btn {\n    width: 100%;\n  }\n  .agenda-wrapper {\n    ","\n  }\n"])),b.isMobile&&Object(p.css)(i||(i=Object(r.a)(["\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      transform: translate(100%, 0);\n      transition: transform 0.25s;\n      overflow: scroll;\n      padding: 40px 0 55px;\n      z-index: 10;\n      background-color: ",";\n\n      &--visible {\n        transform: translate(0, 0);\n      }\n\n      .hide-agenda-btn {\n        display: block;\n        margin: 0 15px 0 auto;\n      }\n    "])),(function(e){var n=e.theme;return"dark"===n.mode?n.dm__background:n.background})));n.a=function(e){var n=e.course,t=(e.lessonId,e.topicId),o=Object(j.a)(n),i=o.disableNextTopicButton,r=o.sendProgress,p=o.progress,h=Object(s.useContext)(u.EscolaLMSContext).courseProgressDetails,x=Object(d.g)(),g=Object(s.useState)(!1),y=Object(c.a)(g,2),N=y[0],w=y[1],T=((null===n||void 0===n?void 0:n.lessons)||[]).filter((function(e){var n;return e&&e.topics&&(null===e||void 0===e||null===(n=e.topics)||void 0===n?void 0:n.length)>0})),C=Object(s.useContext)(u.EscolaLMSContext).topicIsFinished,k=n.lessons.map((function(e){return e.topics})),P=[].concat.apply([],k),_=Object(s.useCallback)((function(){i&&i(!1),null!==n&&void 0!==n&&n.id&&r(null===n||void 0===n?void 0:n.id,[{topic_id:Number(t),status:1}])}),[T,t,i,r]),I=Object(s.useMemo)((function(){var e,t=n.id;return h&&h.byId&&h.byId[Number(t)]&&h.byId[Number(t)].value?h.byId[Number(t)].value:p&&p.value&&(null===(e=p.value.find((function(e){return e.course.id===Number(t)})))||void 0===e?void 0:e.progress)}),[p,n]),M=P.filter((function(e){return C(e.id)||(null===I||void 0===I?void 0:I.some((function(n){return n.topic_id===e.id&&1===n.status})))})).map((function(e){return e.id}));return n||T?Object(f.jsxs)(O,{children:[b.isMobile&&Object(f.jsx)(v.Button,{mode:"outline",className:"show-agenda-btn",onClick:function(){return w(!0)},children:Object(m.t)("CourseProgram.ShowAgenda")}),Object(f.jsxs)("div",{className:"".concat(N?"agenda-wrapper agenda-wrapper--visible":"agenda-wrapper"),children:[b.isMobile&&Object(f.jsx)(v.Button,{className:"hide-agenda-btn",mode:"secondary",onClick:function(){return w(!1)},children:"\u2715"}),Object(f.jsx)(l.CourseAgenda,{onNextTopicClick:function(){var e;n.lessons.forEach((function(n,o,i){n.topics&&n.topics.forEach((function(c,r){c.id===t&&(e=n.topics&&n.topics[r+1]?n.topics[r+1]&&n.topics[r+1]:i[o+1]?i[o+1].topics&&i[o+1].topics[0]:i[0].topics&&i[0].topics[0])}))})),e&&(x.push("/course/".concat(n.id,"/").concat(e.lesson_id,"/").concat(e.id)),w(!1))},mobile:b.isMobile,lessons:n.lessons,currentTopicId:t,finishedTopicIds:M,onMarkFinished:function(){return _()},onTopicClick:function(e){x.push("/course/".concat(n.id,"/").concat(e.lesson_id,"/").concat(e.id)),w(!1)}})]})]}):Object(f.jsx)(a.a.Fragment,{})}},621:function(e,n,t){"use strict";var o,i=t(52),c=t(0),r=t.n(c),s=t(25),a=t(126),l=t(6),u=t(150),d=t(109),b=t(1),p=["small","regular","bigger","big"],j=function(e){var n=e.value,t=e.onLoad,o=e.fontSize;return Object(c.useEffect)((function(){n&&t&&t()}),[n,t]),Object(b.jsx)("div",{className:"center-image-richtext typebase size-".concat(p[o]),children:n&&Object(b.jsx)(u.MarkdownRenderer,{components:{a:function(e){return Object(b.jsx)(d.Link,Object(l.a)(Object(l.a)({},e),{},{underline:!0}))}},children:n})})},v=t(553),m=t(594),f=t(587),O=t(585),h=t(595),x=t(588),g=t(58),y=t(567),N=t(8),w=t(598),T=t.n(w),C=Object(N.default)(x.PdfPlayer)(o||(o=Object(i.a)(["\n  .course-pdf-player {\n    .react-pdf__Page__svg,\n    svg {\n      width: 100% !important;\n      height: auto !important;\n    }\n  }\n"])));n.a=function(e){var n,t=e.lessonId,o=e.topicId,i=e.preview,l=void 0!==i&&i,u=e.disableNextTopicButton,d=e.customNoCompletedEventsIds,p=void 0===d?["http://h5p.org/libraries/H5P.GuessTheAnswer-1.5"]:d,x=e.isThereAnotherTopic,N=void 0===x||x,w=Object(c.useContext)(s.EscolaLMSContext),k=w.program,P=w.topicPing,_=w.topicIsFinished,I=w.fontSize,M=w.sendProgress,E=w.h5pProgress,S=Object(c.useMemo)((function(){var e,n,i,c;return null===(e=k.value)||void 0===e||null===(n=e.lessons)||void 0===n||null===(i=n.find((function(e){return e.id===t})))||void 0===i||null===(c=i.topics)||void 0===c?void 0:c.find((function(e){return e.id===o}))}),[k,t,o]),F=Object(c.useCallback)((function(){var e,n;null!==k&&void 0!==k&&null!==(e=k.value)&&void 0!==e&&e.id&&M(null===k||void 0===k||null===(n=k.value)||void 0===n?void 0:n.id,[{topic_id:Number(o),status:1}])}),[k,o,M]),z=Object(c.useCallback)((function(e){var n,t,i;(N&&u&&u(!Boolean(null===e||void 0===e||null===(n=e.statement)||void 0===n||null===(t=n.verb)||void 0===t?void 0:t.id)),null!==e&&void 0!==e&&e.statement)&&E(String(null===k||void 0===k||null===(i=k.value)||void 0===i?void 0:i.id),Number(o),null===e||void 0===e?void 0:e.statement)}),[k,o,E,u,p]);if(Object(c.useEffect)((function(){var e=(null===S||void 0===S?void 0:S.id)&&_(S.id);N&&u&&e&&u(!e&&!Boolean(null===S||void 0===S?void 0:S.can_skip))}),[u,S,N,_]),Object(c.useEffect)((function(){if(!l){var e=function(){return o&&!_(o)&&P(o)},n=setInterval((function(){e()}),5e3);return e(),function(){return clearInterval(n)}}}),[P,l,o,_]),!S)return Object(b.jsx)(r.a.Fragment,{});if(null===(n=S.topicable)||void 0===n||!n.value)return Object(b.jsx)("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(S.topicable_type)switch(S.topicable_type){case a.TopicType.H5P:return Object(b.jsx)(h.H5Player,{onXAPI:function(e){return z(e)},h5pObject:S.topicable.content});case a.TopicType.OEmbed:return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O.OEmbedPlayer,{url:S.topicable.value},o)});case a.TopicType.RichText:return Object(b.jsx)(j,{value:S.topicable.value,fontSize:I});case a.TopicType.Video:return Object(b.jsx)(f.AudioVideoPlayer,{mobile:g.isMobile,url:S.topicable.url,light:!0,onFinish:function(){return F()}});case a.TopicType.Image:return Object(b.jsx)(m.ImagePlayer,{topic:S,onLoad:function(){return F()}});case a.TopicType.Audio:return Object(b.jsx)(f.AudioVideoPlayer,{mobile:g.isMobile,audio:!0,url:S.topicable.value,light:!0,onFinish:function(){return F()}});case a.TopicType.Pdf:return Object(b.jsx)(C,{url:S.topicable.url,pageConfig:{renderMode:"svg",className:"course-pdf-player"}});case a.TopicType.Scorm:return Object(b.jsx)(y.a,{value:{title:S.title,uuid:S.topicable.uuid}});case v.API.TopicType.GiftQuiz:return Object(b.jsx)(T.a,{topic:S});default:return Object(b.jsx)("pre",{children:S.topicable_type})}return Object(b.jsx)("pre",{children:"loading... (or error)"})}}}]);
//# sourceMappingURL=14.34410630.chunk.js.map