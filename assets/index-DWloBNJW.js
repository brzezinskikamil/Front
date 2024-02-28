import{r,A as $,f as k,i as F,j as s,w as q,o as N,T as _,af as J,p as L,q as R,ah as Y,aT as Z,S as W,aU as ee,X as K,I as se,k as B,v as O,N as U,U as te,O as ne,h as oe,n as re,s as Q,l as ae,a3 as ie,d as M,D as le,F as ce,aV as de}from"./index-OGDo-hkl.js";import{T as ue}from"./Tabs-BOyu7aE2.js";import{C as me}from"./index-CkkSfJi5.js";import{R as pe}from"./ResponsiveImage-dgTLmURN.js";import{C as xe}from"./index-CeZDp3Rj.js";import{C as ge}from"./index-DeyRTtVF.js";import{R as he}from"./index-DW-uoyN8.js";import{b as fe,Q as je}from"./questionnaires-DRzqB2CM.js";import{P as ye}from"./index-BQ2WhXss.js";import{u as be}from"./useRoles-5UY_3__8.js";import{u as G}from"./useSearchParams-CwmX-KWF.js";import{P as Ce}from"./index-D-Ty7NYk.js";import"./base-C7euzKDi.js";const Pe=({courseData:e,visible:t,onClose:n})=>{const{sendProgress:a}=r.useContext($.EscolaLMSContext),{t:o}=k(),{push:l}=F(),p=r.useCallback(async()=>{await a(e.course.id,e.progress.map(({topic_id:b})=>({topic_id:b,status:0}))),l(`/course/${e.course.id}`)},[e.course.id,e.progress,a,l]);return s.jsx(q.Modal,{animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,visible:t,onClose:n,children:s.jsxs(s.Fragment,{children:[s.jsx(N.Title,{level:4,children:o("ResetProgressModal.Continue")}),s.jsxs(_.Text,{children:[" ",o("ResetProgressModal.RestartCourse")]}),s.jsxs(J,{$gap:16,children:[s.jsx(L.Button,{mode:"primary",onClick:p,children:o("ResetProgressModal.WantContinue")}),s.jsx(L.Button,{mode:"primary",onClick:n,children:o("ResetProgressModal.Cancel")})]})]})})},ve=R(Y)`
  gap: 6px;
  margin: 0;
  width: 100%;
`,we=({courseData:e,courseProgress:t})=>{const[n,a]=r.useState(void 0),[o,l]=r.useState(!1),{fetchQuestionnaires:p,fetchQuestionnaire:b}=r.useContext($.EscolaLMSContext),[m,j]=r.useState({show:!1,step:0,loading:!1}),{t:y}=k(),C={isDone:e.finish_date,isActive:e.start_date&&!e.finish_date,isNotStarted:!e.start_date&&!e.finish_date},x=r.useMemo(()=>e.deadline?new Date(e.deadline):null,[e.deadline]),d=x?x.getTime()<Date.now():!1,u=r.useMemo(()=>x?Z(x):null,[x]),[g,f]=r.useState([]),T=r.useCallback(()=>{if(a(void 0),j(h=>({...h,show:!1})),m.step<g.length-1){j(P=>({...P,step:P.step+1}));const h=setTimeout(()=>{j(P=>({...P,show:!0}))},500);return()=>clearTimeout(h)}},[g,m.step]);return r.useEffect(()=>{n&&fe({courseId:n,fetchQuestionnaire:b,fetchQuestionnaires:p,onSucces:h=>{f(h)},onFinish:()=>j(h=>({...h,loading:!1}))})},[n]),s.jsxs(ve,{children:[t===100&&s.jsxs(s.Fragment,{children:[s.jsx(L.Button,{mode:"secondary",onClick:()=>{a(e.course.id),j(h=>({...h,show:!0,loading:!0}))},children:m.loading?s.jsx(W.Spin,{}):y("MyProfilePage.RateCourse")}),!d&&C.isDone&&s.jsx(L.Button,{mode:"secondary",onClick:()=>l(!0),children:y("MyProfilePage.ResetCourseProgress")})]}),!!d&&u!==null&&u[0]<0&&s.jsxs(_.Text,{children:[y("MyProfilePage.AccessCourseExpired")," ",ee.format(u[0],u[1])]}),s.jsx(Pe,{courseData:e,visible:o,onClose:()=>l(!1)}),m.show&&n&&!m.loading&&(g.length?s.jsx(s.Fragment,{children:s.jsx(he,{course:je.COURSE,courseId:n,visible:m.show,onClose:T,questionnaire:g[m.step]})}):s.jsx(q.Modal,{onClose:T,visible:m.show,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:468,children:s.jsx(N.Title,{children:y("CourseProgram.CourseRated")})}))]})},z=({course:e})=>{const t=K(),n=F(),{t:a}=k();return s.jsx(xe,{children:s.jsx(se,{mobile:B,id:e.id,image:s.jsx(O,{to:`/course/${e.id}`,children:e.image_path?s.jsx(pe.ResponsiveImage,{path:e.image_path,alt:e.title,srcSizes:[300,600,900]}):s.jsx(me,{})}),subtitle:e.subtitle?s.jsx(_.Text,{children:s.jsx(O,{style:{color:t.primaryColor},to:`/course/${e.id}`,children:e.subtitle})}):void 0,title:s.jsx(O,{to:`/courses/${e.id}`,className:"title",children:s.jsx(N.Title,{level:4,as:"h2",children:e.title})}),categories:s.jsx(ge,{categories:e.categories,onCategoryClick:o=>{n.push(`/courses/?categories[]=${o}`)}}),actions:e.courseData&&s.jsx(we,{courseData:e.courseData,courseProgress:e.progress||0}),footer:s.jsxs(s.Fragment,{children:[e.users_count&&e.users_count>0&&s.jsx(U.IconText,{icon:s.jsx(te,{}),text:`${e.users_count} ${a("Students")}`})," ",e.lessons_count&&e.lessons_count>0&&s.jsx(U.IconText,{icon:s.jsx(ne,{}),text:`${e.lessons_count} ${a("Lessons")}`})]}),progress:e.progress&&e.progress!==100&&!isNaN(e.progress)?{currentProgress:e.progress,maxProgress:100}:void 0})})},_e=R.div`
  overflow: hidden;
  .course-wrapper {
    margin-bottom: 24px;
    a {
      text-decoration: none;
    }
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    overflow: scroll;
    column-gap: 15px;

    @media (max-width: 575px) {
      width: calc(100% + 15px);
      margin-right: -15px;
    }

    .single-slide {
      width: 272px;
      max-width: 272px;
      flex-shrink: 0;
    }
  }
`,Te=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5}; */
  padding: ${B?"80px 20px":"192px 20px"};
  width: calc(100% - 30px);
  margin: 0 auto;

  .small-text {
    font-size: 14px;
    margin-top: 20px;
  }
`,Me=R.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`,A=({filter:e=w.ALL})=>{var h,P;const{fetchMyAuthoredCourses:t,myAuthoredCourses:n,fetchPaginatedProgress:a,paginatedProgress:o}=r.useContext(oe.EscolaLMSContext),[l,p]=r.useState([]),b=F(),{t:m}=k(),{setQueryParam:j}=G(),{search:y}=re(),C=new URLSearchParams(y),x=C.get("page"),d=C.get("status"),u=r.useMemo(()=>{var i,c;return e===w.AUTHORED?(i=n.list)==null?void 0:i.meta:(c=o.list)==null?void 0:c.meta},[e,(h=n.list)==null?void 0:h.meta,(P=o.list)==null?void 0:P.meta]),g=r.useCallback(i=>{let c="";switch(i){case 1:case 5:break;case 2:c="started";break;case 3:c="planned";break;case 4:c="finished";break}return c},[]);r.useEffect(()=>{a({page:x?parseInt(x):1,per_page:6,status:g(Number(d))}),(e===w.ALL||e===w.AUTHORED)&&t()},[a,e,t,x,d,g]);const f=r.useMemo(()=>{var i;return(((i=o.list)==null?void 0:i.data)||[]).reduce((c,v)=>({...c,[v.course.id?v.course.id:-1]:Math.round((v.progress||[]).reduce((S,V)=>V.status===1?S+1:S,0)/v.progress.length*100)}),{})},[o]),T=r.useCallback(i=>i.map(c=>({...c.course,courseData:c,progress:f[c.course.id?c.course.id:-1]})),[f]);return r.useEffect(()=>{var i,c,v,S;e!==w.AUTHORED?p(T(((i=o.list)==null?void 0:i.data)||[])):e===w.AUTHORED?p(((c=n.list)==null?void 0:c.data)||[]):p([...T(((v=o.list)==null?void 0:v.data)||[]),...((S=n.list)==null?void 0:S.data)||[]])},[e,o,n,T]),s.jsx(_e,{children:B?s.jsx("div",{className:"slider-wrapper",children:l&&l.map(i=>s.jsx("div",{className:"single-slide",children:s.jsx(z,{course:i})},i.id))}):s.jsxs(s.Fragment,{children:[s.jsxs(Q.Row,{style:{gap:"28px 0"},children:[l.length===0&&!o.loading&&!n.loading&&s.jsxs(Te,{children:[s.jsx(N.Title,{level:3,children:m("MyProfilePage.EmptyCoursesTitle")}),s.jsx(_.Text,{className:"small-text",children:m("MyProfilePage.EmptyCoursesText")}),s.jsx(L.Button,{onClick:()=>b.push(ae.courses),mode:"secondary",children:m("MyProfilePage.EmptyCoursesBtnText")})]}),o.loading||n.loading?s.jsx(ie,{}):l.map(i=>s.jsx(Q.Col,{md:4,children:s.jsx(z,{course:i})},i.id))]}),s.jsx(Me,{children:s.jsx(Ce,{total:(u==null?void 0:u.total)||0,perPage:Number((u==null?void 0:u.per_page)||0),currentPage:Number((u==null?void 0:u.current_page)||1),onPage:i=>{j("page",`${i}`),window==null||window.scrollTo(0,0)}})})]})})};var D={},ke=M&&M.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},I=M&&M.__assign||function(){return I=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},I.apply(this,arguments)},Ne=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});var X=D.NoteAction=void 0,E=s,Re=Ne(le),Se=ce,Ae=(0,Re.default)("div")(H||(H=ke([`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`],[`
  border-left: 3px solid `,`;
  padding: 20px;
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: `,`px;
  background: `,`;
  > div:first-child {
    padding-right: 30px;
  }

  .subtitle {
    opacity: 0.8;
  }
`])),function(e){return e.color?e.color:"#F2C94C"},function(e){return e.theme.cardRadius},function(e){var t=e.theme;return(0,Se.getStylesBasedOnTheme)(t.mode,t.dm__cardBackgroundColor,t.cardBackgroundColor)}),Ee=function(e){var t=e.title,n=e.subtitle,a=e.color,o=e.actions,l=e.className,p=l===void 0?"":l;return(0,E.jsxs)(Ae,I({className:"wellms-component ".concat(p),color:a},{children:[(0,E.jsxs)("div",{children:[(0,E.jsx)("div",{children:t}),n&&(0,E.jsx)("div",I({className:"subtitle"},{children:n}))]}),(0,E.jsx)("div",{children:o})]}))};X=D.NoteAction=Ee;var H;const Le=R.section`
  .empty-certificates-message {
    padding: 34px 40px;
    background: ${({theme:e})=>e.mode==="dark"?e.gray1:e.gray5};
  }
  .buttons-container {
    display: flex;
    column-gap: 60px;
    align-items: center;
    justify-content: flex-end;

    .download-btn {
      appearance: none;
      outline: none;
      border: none;
      cursor: pointer;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 10px;
      color: ${({theme:e})=>e.mode==="dark"?e.white:e.gray1};
    }
  }
`,Ie=()=>{var m,j,y,C,x;const{generateCertificate:e,certificates:t,fetchCertificates:n}=r.useContext($.EscolaLMSContext),{t:a}=k(),o=K(),[l,p]=r.useState(-1);r.useEffect(()=>{n()},[n]);const b=r.useCallback(async(d,u)=>{p(d);try{const g=await e(d);if(g){const f=document.createElement("a");document.body.appendChild(f),f.setAttribute("href",URL.createObjectURL(new Blob([g]))),f.setAttribute("download",`${u||"Certificate"}.pdf`),f.style.display="",f.click(),document.body.removeChild(f),p(-1)}}catch(g){p(-1),console.log(g)}},[e]);return s.jsx(s.Fragment,{children:s.jsxs(Le,{children:[((m=t.list)==null?void 0:m.data.length)===0&&s.jsx(_.Text,{className:"empty-certificates-message",children:s.jsx("strong",{children:a("MyProfilePage.EmptyCertificates")})}),t&&((j=t==null?void 0:t.list)==null?void 0:j.data)&&((y=t.list)==null?void 0:y.data.length)>0&&((x=(C=t==null?void 0:t.list)==null?void 0:C.data)==null?void 0:x.filter(d=>d.title).map(d=>s.jsx(X,{color:o.primaryColor,title:s.jsx(N.Title,{level:4,as:"h3",children:d.title}),subtitle:s.jsx(_.Text,{noMargin:!0,size:"12",children:new Date(d.created_at).toLocaleDateString("pl-PL")}),actions:s.jsx("div",{className:"buttons-container",children:l===d.id?s.jsx(W.Spin,{color:o.primaryColor}):s.jsxs("button",{className:"download-btn",onClick:()=>b(d.id,d.title),children:[s.jsx(de,{})," ",s.jsx(_.Text,{children:"(.pdf)"})]})})})))]})})};var w=(e=>(e.IN_PROGRESS="inProgress",e.PLANNED="planned",e.FINISHED="finished",e.AUTHORED="authored",e.ALL="all",e))(w||{});const Oe=R.section`
  .courses-wrapper {
    min-height: fit-content;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
`,Ve=()=>{const{t:e}=k(),{isTutor:t}=be(),{query:n,setQueryParam:a}=G(),o={tabs:[{label:e("MyProfilePage.ALlCourses"),key:1,component:s.jsx(A,{filter:"all"})},{label:e("MyProfilePage.InProgress"),key:2,component:s.jsx(A,{filter:"inProgress"})},{label:e("MyProfilePage.Planned"),key:3,component:s.jsx(A,{filter:"planned"})},{label:e("MyProfilePage.Finished"),key:4,component:s.jsx(A,{filter:"finished"})},{label:e("MyProfilePage.Authored"),key:5,component:s.jsx(A,{filter:"authored"}),hidden:!t}],defaultActiveKey:Number(n.get("status")||1)};return s.jsx(ye,{title:e("MyProfilePage.MyCourses"),withTabs:!0,children:s.jsxs(Oe,{children:[s.jsx("div",{className:"courses-wrapper",children:s.jsx(ue.Tabs,{onClick:l=>{a("status",String(l)),a("page","1")},tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})}),s.jsxs("div",{className:"certificates-container",children:[s.jsx(N.Title,{level:2,children:e("MyProfilePage.MyCertificates")}),s.jsx(Ie,{})]})]})})};export{w as CourseStatus,Ve as default};