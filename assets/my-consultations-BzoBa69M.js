import{r as i,h as P,f as x,j as e,T as m,k as _,s as g,q as c,v as A,ah as v,X as M,aQ as b,g as N,A as w,aB as y,aR as L,aS as S,p as U,aT as R,I as k}from"./index-Blo-PJs7.js";import{P as B}from"./index-UkG7utAr.js";import{T as F}from"./Tabs-QCP9RYPA.js";import{a as $}from"./ResponsiveImage-Dt4SFaY6.js";import{C as G}from"./index-BRHuAp1f.js";import{a as T,e as E,f as O}from"./date-Dq-o8tMk.js";import{D as p,a as C}from"./index-DWbqbLxr.js";import{P as W,C as q,a as K}from"./index-DOfvB393.js";import{C as I}from"./index-DbWAbFNo.js";import{u as z}from"./useRoles-BNlyGwIL.js";import"./app-B2E7767C.js";const H=({type:t})=>{var d;const{userConsultations:s,fetchUserConsultations:o}=i.useContext(P.EscolaLMSContext),{t:n}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[t,o]),e.jsx(W,{children:s.loading?e.jsx(I,{}):r.length===0?e.jsx(m.Text,{style:{paddingLeft:_?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(q,{consultation:a})},a.id))})})},h=i.memo(H),X=c.div`
  .course-section {
    margin-top: 0px;
  }

  .course-card-buttons-group {
    margin: 0;
    width: 100%;

    button {
      width: 100%;
      margin: 0;
    }
  }

  p {
    font-family: ${({theme:t})=>t.font};
  }
`,J=({product:t})=>t?e.jsx(A,{to:`/consultations/${t.id}`,children:t.poster_path?e.jsx($,{path:t.poster_path,alt:t.name,srcSizes:[300,600,900]}):e.jsx(G,{})}):null,Q=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 65px;

  .text {
    margin: 0;
    font-size: 14px;
  }
`,V=({consultation:t})=>{const{first_name:s,last_name:o,email:n,phone:r}=t.user;return e.jsxs(Q,{children:[e.jsxs(m.Text,{className:"text",children:[s," ",o]}),e.jsx(m.Text,{className:"text",children:n}),e.jsx(m.Text,{className:"text",children:r})]})},Y=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 12px;
`,Z=({consultation:t})=>{const{t:s}=x(),o=t.is_ended,n=t.is_started,r=t.status==="reported",d=t.status==="approved",a=t.status==="not_reported",l=t.status==="reject";return e.jsxs(e.Fragment,{children:[o&&t.date&&e.jsx(p,{type:C.ENDED,date:T(t.date,E(`${t.duration}`))}),l&&e.jsx(p,{type:C.ENDED,date:T(t.date,E(`${t.duration}`))}),r&&!o&&e.jsx(p,{type:C.WAITING,date:t.date,info:s("ConsultationStatus.UnconfirmedInfo")}),d&&!o&&e.jsx(p,{type:C.ACCEPTED,date:t.date,info:n&&t.consultation_term_id?e.jsx(Y,{children:e.jsx(K,{consultationTermId:t.consultation_term_id})}):s("ConsultationStatus.AppointmentInfo",{date:O(t.date,"EEEE, dd LLLL yyyy, HH:mm")})}),a&&e.jsx(p,{type:C.DEFAULT})]})},tt=c.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({theme:t})=>t.primaryColor};
  border-radius: 2px;
  align-items: center;

  .icon-container {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    background-color: ${({theme:t})=>t.primaryColor};
  }

  .time {
    padding: 0.5rem;
    margin: 0 auto;
  }
`,et=({time:t})=>e.jsxs(tt,{children:[e.jsx("div",{className:"icon-container",children:e.jsx(v,{color:"#ffffff",width:"22px",height:"22px"})}),e.jsx(m.Text,{className:"time",children:t})]}),st=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`,ot=({consultation:t})=>e.jsxs(st,{children:[e.jsx(V,{consultation:t}),e.jsx(et,{time:t.duration}),e.jsx(Z,{consultation:t})]}),nt=c.div`
  display: flex;
  align-items: center;
  user-select: none;

  .status {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .name {
    padding: 0.5rem;
    font-family: ${({theme:t})=>t.font};
  }
`;var u=(t=>(t[t.ACCEPTED=0]="ACCEPTED",t[t.WAITING=1]="WAITING",t[t.ENDED=2]="ENDED",t[t.CANCELED=3]="CANCELED",t[t.DEFAULT=4]="DEFAULT",t))(u||{});const f=({status:t,name:s})=>{const o=M(),n=i.useMemo(()=>{switch(t){case 0:return"#198754";case 1:return"#FFC300";case 2:case 3:return"#D22B2B";default:return o.primaryColor}},[o.primaryColor,t]);return e.jsxs(nt,{children:[e.jsx("div",{className:"status",style:{backgroundColor:n}}),e.jsx("div",{className:"name",children:s})]})};var rt=b();const at=N(rt),it=({consultation:t})=>{const{approveConsultationTerm:s,rejectConsultationTerm:o}=i.useContext(w.EscolaLMSContext),{t:n}=x(),{consultation_term_id:r}=t,d=i.useMemo(()=>[{id:1,content:e.jsx(y,{icon:e.jsx(L,{}),text:n("Confirm"),onClick:()=>s(r)})},{id:2,content:e.jsx(y,{icon:e.jsx(S,{}),text:n("Cancel"),onClick:()=>o(r)})}],[s,r,o,n]);return e.jsx(at,{menuItems:d,child:e.jsx(U.Button,{mode:"icon",children:e.jsx(R,{})})})},dt=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button > svg {
    width: 24px;
    height: 25px;
  }
`,lt=({consultation:t})=>{const{status:s,is_ended:o}=t,{t:n}=x(),r=s==="reported",d=s==="approved";return s==="reject"?e.jsx(f,{status:u.CANCELED,name:n("ConsultationStatus.Canceled")}):o?e.jsx(f,{status:u.ENDED,name:n("ConsultationStatus.Ended")}):r?e.jsxs(dt,{children:[e.jsx(f,{status:u.WAITING,name:n("ConsultationStatus.Unconfirmed")}),e.jsx(it,{consultation:t})]}):d?e.jsx(f,{status:u.ACCEPTED,name:n("ConsultationStatus.Appointment")}):e.jsx(f,{status:u.DEFAULT,name:s})},ct=t=>{var o;const{consultation:s}=t;return e.jsx(X,{children:e.jsx(k,{id:s.consultation_term_id,image:e.jsx(J,{product:s.related_product}),title:e.jsx(lt,{consultation:s}),subtitle:e.jsx("p",{children:(o=s.related_product)==null?void 0:o.name}),footer:e.jsx(ot,{consultation:s})})})},ut=({type:t})=>{var d;const{tutorConsultations:s,fetchTutorConsultations:o}=i.useContext(P.EscolaLMSContext),{t:n}=x(),r=i.useMemo(()=>{var a;return((a=s.list)==null?void 0:a.data.filter(l=>t===j.STARTED||t===j.UPCOMING?l.in_coming||l.is_started:l.is_ended))||[]},[t,(d=s.list)==null?void 0:d.data]);return i.useEffect(()=>{o()},[o]),e.jsx(e.Fragment,{children:s.loading?e.jsx(I,{}):r.length===0?e.jsx(m.Text,{style:{paddingLeft:_?20:40},children:n("MyProfilePage.OrdersEmpty")}):e.jsx(g.Row,{style:{gap:"30px 0"},children:r.map(a=>e.jsx(g.Col,{xs:12,md:6,lg:4,children:e.jsx(ct,{consultation:a})},a.consultation_term_id))})})},D=i.memo(ut);var j=(t=>(t.UPCOMING="in_coming",t.PAST="is_ended",t.STARTED="is_started",t))(j||{});const Dt=()=>{const{t}=x(),{isTutor:s}=z(),o=i.useMemo(()=>({tabs:s?[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(D,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(D,{type:"is_ended"})},{label:t("MyProfilePage.BoughtUpcoming"),key:3,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.BoughtArchived"),key:4,component:e.jsx(h,{type:"is_ended"})}]:[{label:t("MyProfilePage.Upcoming"),key:1,component:e.jsx(h,{type:"in_coming"})},{label:t("MyProfilePage.Archived"),key:2,component:e.jsx(h,{type:"is_ended"})}],defaultActiveKey:1}),[s,t]);return e.jsx(B,{title:t("MyProfilePage.MyConsultations"),withTabs:!0,children:e.jsx(F.Tabs,{tabs:o.tabs,defaultActiveKey:o.defaultActiveKey})})};export{j as ConsultationStatus,Dt as default};