import{b as J,G as Q,r as o,h as L,j as e,A as m,f as h,v as A,l as v,T as p,q as E,s as x,an as S,k as C,ao as b,ap as Y,aq as Z,ar as ee,i as te,a0 as q,o as u,p as j,K as N,as as se,at as ie,W as ae,aa as re,ab as ne,ag as oe,au as le,X as de,av as ce,al as xe,L as me,C as pe}from"./index-Blo-PJs7.js";import{P as ue}from"./index-B83h2WWx.js";import{B as he}from"./index-Dwln5hYY.js";import{a as K}from"./ResponsiveImage-Dt4SFaY6.js";import{f as ge}from"./date-Dq-o8tMk.js";import{P as z}from"./PricingCard-BgpddvsZ.js";import{f as W}from"./index-UKkASopu.js";import{P as je}from"./index-DlFxAeba.js";import{D as Ee}from"./index-BqtOd3gJ.js";import{C as _}from"./index-DdWhG39_.js";import{E as w}from"./index-Cl_uGrJI.js";import"./app-B2E7767C.js";import"./index-BRHuAp1f.js";import"./index-GAs-JLO3.js";import"./index-Cp2AHIQh.js";const ve=J.createContext({}),Ce=({children:t})=>{const{id:s}=Q(),{fetchStationaryEvent:i}=o.useContext(L.EscolaLMSContext);return o.useEffect(()=>{s&&i(Number(s))},[i,s]),e.jsx(ve.Provider,{value:{},children:t})},fe=()=>{const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext),{t:s}=h();return t.value?e.jsx(he,{items:[e.jsx(A,{to:v.home,children:s("Home")}),e.jsx(A,{to:v.events,children:s("Menu.Events")}),e.jsx(p.Text,{size:"12",children:t.value.name})]}):null},be=E.div`
  .event-main-info {
    .image-wrapper {
      @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 35px;

        img {
          display: block;
          margin: 0 auto;
        }
      }
    }
    .labels-row {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      column-gap: 20px;
      margin: 35px 0;
      @media (max-width: 991px) {
        margin: 35px 0 0;
      }
      @media (max-width: 374px) {
        flex-direction: column;
        row-gap: 16px;
      }
      &--bottom {
        column-gap: 45px;
        margin-top: 120px;
        margin-bottom: 0;
        flex-wrap: wrap;
        @media (max-width: 991px) {
          column-gap: 0;
          margin-top: 55px;
        }
        @media (max-width: 374px) {
          flex-direction: row;
        }
        .single-label {
          @media (max-width: 991px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
`,Te=()=>{const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext),{t:s}=h();return t.value?e.jsx(be,{children:e.jsxs("section",{className:"event-main-info with-border",children:[e.jsxs(x.Row,{children:[e.jsxs(x.Col,{lg:7,children:[e.jsx(S,{mobile:C,level:2,children:t.value.name}),e.jsxs("div",{className:"labels-row",children:[e.jsx("div",{className:"single-label",children:e.jsx(b,{mobile:C,title:"90%",icon:e.jsx(Y,{}),children:s("CoursePage.Recommends")})}),e.jsx("div",{className:"single-label",children:e.jsx(b,{mobile:C,title:s("CoursePage.Guarantee"),icon:e.jsx(Z,{}),children:s("CoursePage.Satisfaction")})}),e.jsx("div",{className:"single-label",children:e.jsx(b,{mobile:C,title:"5.0",icon:e.jsx(ee,{}),children:s("CoursePage.AvarageRating")})})]})]}),e.jsx(x.Col,{lg:4,children:t.value.image_path&&e.jsx("div",{className:"image-wrapper",children:e.jsx(K,{path:t.value.image_path,srcSizes:[790*.5,790,2*790]})})})]}),e.jsxs("div",{className:"labels-row labels-row--bottom",children:[t.value.categories&&t.value.categories.length>0&&e.jsx("div",{className:"single-label",children:e.jsx(b,{title:s("CoursePage.CourseCategory"),variant:"label",children:t.value.categories[0].name})}),t.value.started_at&&e.jsx("div",{className:"single-label",children:e.jsx(b,{title:s("CoursePage.StartDate"),variant:"label",children:t.value.started_at?ge(t.value.started_at):"---"})})]})]})}):null};var l=(t=>(t[t.FINISHED=0]="FINISHED",t[t.IN_CART=1]="IN_CART",t[t.USER_BOUGHT_AND_EVENT_FINISHED=2]="USER_BOUGHT_AND_EVENT_FINISHED",t[t.USER_BOUGHT=3]="USER_BOUGHT",t[t.USER_LOGGED_AND_PRODUCT_AVAILABLE=4]="USER_LOGGED_AND_PRODUCT_AVAILABLE",t[t.PRODUCT_UNAVAILABLE=5]="PRODUCT_UNAVAILABLE",t[t.DEFAULT=6]="DEFAULT",t))(l||{});const _e=({event:t})=>{var D,P,I,U,R,k,G,O,H,$,M;const[s,i]=o.useState(l.DEFAULT),{cart:n,addToCart:a,user:r}=o.useContext(L.EscolaLMSContext),{t:d}=h(),{push:g}=te(),y=o.useMemo(()=>{var c;return(c=n==null?void 0:n.value)==null?void 0:c.items.some(T=>{var f;return Number(T.product_id)===Number((f=t.product)==null?void 0:f.id)})},[(D=t.product)==null?void 0:D.id,n]);return o.useEffect(()=>{var c,T,f,B,F,V;q(new Date(t.finished_at||""))?i(l.FINISHED):y?i(l.IN_CART):(c=r.value)!=null&&c.id&&((T=t.product)!=null&&T.owned)&&q(new Date(t.finished_at||""))?i(l.USER_BOUGHT_AND_EVENT_FINISHED):(f=r.value)!=null&&f.id&&((B=t.product)!=null&&B.owned)?i(l.USER_BOUGHT):(F=r.value)!=null&&F.id&&t.product&&t.product.buyable?i(l.USER_LOGGED_AND_PRODUCT_AVAILABLE):!t.product||(V=r.value)!=null&&V.id&&!t.product.buyable?i(l.PRODUCT_UNAVAILABLE):i(l.DEFAULT)},[y,t,(P=r.value)==null?void 0:P.id]),C?e.jsxs(z.PricingCard,{mobile:!0,children:[e.jsx(u.Title,{level:5,as:"h5",children:t.name}),e.jsxs("div",{className:"pricing-card-footer",children:[e.jsxs("div",{children:[((G=t.product)==null?void 0:G.price_old)&&e.jsx("div",{className:"pricing-card-discount",children:e.jsxs(u.Title,{level:5,as:"h5",children:[W((O=t.product)==null?void 0:O.price_old,(H=t.product)==null?void 0:H.tax_rate)," ","zł"]})}),e.jsxs(u.Title,{level:4,as:"h4",children:[W(($=t.product)==null?void 0:$.price,(M=t.product)==null?void 0:M.tax_rate)," zł"]})]}),e.jsx("div",{children:y?e.jsx(j.Button,{block:!0,mode:"secondary",onClick:()=>g(v.cart),children:d("EventPage.GoToCheckout")}):r.value&&t.product?e.jsx(j.Button,{block:!0,mode:"secondary",onClick:()=>{var c;return a(Number((c=t.product)==null?void 0:c.id)).then(()=>g(v.cart))},children:d("Buy now")}):t.product?e.jsx(j.Button,{onClick:()=>g(`/login?referrer=/event/${t.id}`),block:!0,mode:"secondary",children:d("Login to buy")}):e.jsx(p.Text,{children:d("EventPage.UnavailableEvent")})})]})]}):e.jsxs(z.PricingCard,{children:[e.jsx(u.Title,{level:4,as:"h2",children:t.name}),e.jsx(je,{price:(I=t.product)==null?void 0:I.price,oldPrice:(U=t.product)==null?void 0:U.price_old,taxRate:(R=t.product)==null?void 0:R.tax_rate}),s===l.FINISHED&&e.jsx(p.Text,{children:d("EventPage.IsFinished")}),s===l.IN_CART&&e.jsx(j.Button,{mode:"secondary",onClick:()=>g(v.cart),children:d("EventPage.GoToCheckout")}),s===l.USER_BOUGHT_AND_EVENT_FINISHED&&e.jsx(j.Button,{onClick:()=>g(`/event/${t.id}`),mode:"secondary",children:d("Show")}),s===l.USER_BOUGHT&&e.jsx(p.Text,{children:d("EventPage.NotStarted")}),s===l.USER_LOGGED_AND_PRODUCT_AVAILABLE&&e.jsx(j.Button,{loading:n.loading,mode:"secondary",onClick:()=>{var c;return a(Number((c=t.product)==null?void 0:c.id)).then(()=>g(v.cart))},children:d("Buy now")}),s===l.PRODUCT_UNAVAILABLE&&e.jsx(p.Text,{children:d("EventPage.UnavailableEvent")}),s===l.DEFAULT&&e.jsx(j.Button,{onClick:()=>g(`/login?referrer=/event/${t.id}`),mode:"secondary",children:d("Buy now")}),e.jsxs(p.Text,{size:"12",children:[" ",d("EventPage.30Days")]}),e.jsxs("div",{className:"pricing-card-features",children:[t.place&&e.jsx(N.IconText,{icon:e.jsx(se,{}),text:`${t.place}`}),((k=t.product)==null?void 0:k.duration)&&e.jsx(N.IconText,{icon:e.jsx(ie,{}),text:`${d("Duration")}: ${t.product.duration}`}),t.users_count?e.jsx(N.IconText,{icon:e.jsx(ae,{}),text:`${d("Students")}: ${t.users_count}`}):""]})]})},we=()=>{const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext);return t.value?e.jsx(Ee,{children:e.jsx(_e,{event:t.value})}):null},Se=E.div`
  .event-tutor {
    .ranking-row {
      display: none !important;
    }
  }
`,ye=()=>{var n,a;const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext),{t:s}=h(),i=(a=(n=t.value)==null?void 0:n.product)==null?void 0:a.authors;return i!=null&&i.length?e.jsx(Se,{children:i.map(r=>e.jsx("section",{className:"event-tutor with-border padding-right",children:e.jsx(A,{to:`/tutors/${r.id}`,children:e.jsx(re,{mobile:C,avatar:{alt:`${r.first_name} ${r.last_name}`,src:`${ne}/api/images/img?path=${r.path_avatar}`||""},rating:{ratingValue:4.1},title:e.jsx(u.Title,{as:"h3",level:4,className:"title",children:s("CoursePage.Teacher")}),fullName:`${r.first_name} ${r.last_name}`,coursesInfo:"8 Curses",description:r.bio})})}))}):null},Ne=E.div`
  .event-companies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .companies-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 70px;
      .single-company {
        max-height: 85px;
        max-width: 65px;
      }
      @media (max-width: 768px) {
        column-gap: 0;
        justify-content: space-between;
        width: 100%;
      }
    }

    p {
      max-width: 220px;
      margin-right: 50px;
    }
  }
`,Ae=()=>{const{settings:t}=o.useContext(m.EscolaLMSContext),{t:s}=h();return e.jsx(Ne,{children:e.jsxs("section",{className:"event-companies",children:[e.jsx(p.Text,{children:e.jsx("strong",{children:s("CoursePage.CompaniesTitle")})}),e.jsx("div",{className:"companies-row",children:t&&t.value.courseLogos&&Object.values(t.value.courseLogos).map((i,n)=>{var a;return e.jsx("div",{className:"single-company",children:e.jsx(K,{path:((a=t==null?void 0:t.value)==null?void 0:a.courseLogos[`logo${n+1}`])||"",srcSizes:[100,200,300]})},n)})})]})})},Le=()=>{var n;const{stationaryEvent:t}=o.useContext(L.EscolaLMSContext),{t:s}=h(),i=(n=t.value)==null?void 0:n.description;return i?e.jsx(e.Fragment,{children:i&&oe(i)!==""&&e.jsxs("section",{className:"course-description-short with-border",children:[e.jsx(u.Title,{level:4,children:s("CoursePage.CourseDescriptionTitle")}),e.jsx(le,{children:i})]})}):null},De=E.div`
  section {
    margin-bottom: 45px;
    &.with-border {
      padding-bottom: 45px;
      border-bottom: 1px solid
        ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
    }
    &.padding-right {
      padding-right: 150px;
      @media (max-width: 991px) {
        padding-right: 70px;
      }
      @media (max-width: 768px) {
        padding-right: 0;
      }
    }
  }
`,Pe=E("div")`
  h4,
  h5 {
    margin-bottom: 15px;
  }
`,Ie=()=>{var a;const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext),s=(a=t.value)==null?void 0:a.agenda,i=de(),{t:n}=h();return s?e.jsx("section",{className:"with-border",children:e.jsxs(Pe,{children:[e.jsx(S,{level:4,children:n("Agenda")}),s.map(r=>e.jsx(ce,{color:i.primaryColor,description:e.jsxs(e.Fragment,{children:[e.jsx(S,{level:4,children:r.title}),e.jsx(S,{level:5,children:r.subtitle}),e.jsx(p.Text,{children:r.description})]}),time:e.jsx(e.Fragment,{children:r.hour})}))]})}):null},Ue=()=>{const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext);return t.loading||!t.value?e.jsx(ue,{}):e.jsx(De,{children:e.jsxs(x.Row,{children:[e.jsxs(x.Col,{md:12,lg:9,children:[e.jsx(fe,{}),e.jsx(Te,{}),e.jsx(Ae,{}),e.jsx(ye,{}),e.jsx(Le,{}),e.jsx(Ie,{})]}),e.jsx(x.Col,{md:12,lg:3,children:e.jsx(we,{})})]})})},Re=E.div`
  .event-related-events {
    background-color: ${({theme:t})=>t.mode==="dark"?t.gray1:t.gray5};
    padding: 60px 0 90px;
    .slick-dots {
      top: -65px;
      right: 80px;
      @media (max-width: 575px) {
        right: 0;
      }
    }
    .content-container {
      position: relative;
      overflow: hidden;
      &:first-of-type {
        margin-bottom: 60px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
      h4 {
        @media (max-width: 575px) {
          padding-right: 50%;
        }
      }
      .slider-wrapper {
        a {
          text-decoration: none !important;
        }
        @media (max-width: 575px) {
          margin-left: -50px;

          .image-section,
          img {
            max-height: 180px;
          }
        }
      }
    }
  }
`,ke=E.div`
  @media (max-width: 575px) {
    margin-left: -59px;
  }
  .slick-slider {
    @media (max-width: 575px) {
      width: calc(100% + 15px);
    }
  }
  .slick-dots {
    top: -65px;
    @media (max-width: 575px) {
      top: -30px !important;
      right: unset !important;
      left: 60px !important;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }

  .slick-slide {
    height: inherit;

    > div {
      display: flex;
      height: 100%;
    }
  }
`,Ge={arrows:!1,infinite:!0,speed:500,draggable:!1,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1201,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{draggable:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,slidesToScroll:1}}]},X=({nodes:t,sliderSettings:s=Ge})=>{const[i]=o.useState(!0);return e.jsx(ke,{children:e.jsx("div",{children:e.jsx(xe.Slider,{settings:{...s,dots:i,onSwipe:()=>{const n=document.querySelectorAll('.slick-slide[aria-hidden="true"]');document.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach(r=>r.removeAttribute("aria-modal")),n.forEach(r=>r.setAttribute("aria-modal","true"))},onInit:()=>{document.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach(a=>a.setAttribute("aria-modal","true"))}},dotsPosition:"top right",children:t})})})},Oe=()=>{var n;const{stationaryEvents:t}=o.useContext(m.EscolaLMSContext),{t:s}=h(),i=(n=t.list)==null?void 0:n.data;return e.jsx(Re,{children:e.jsx("section",{className:"event-related-events",children:e.jsxs(x.Container,{children:[e.jsxs("div",{className:"content-container",children:[e.jsx(u.Title,{level:4,as:"h2",children:s("CoursePage.RelatedCoursesTitle")}),i&&i.length>4?e.jsx(X,{nodes:i.map(a=>e.jsx(_,{children:e.jsx(w,{event:a})},a.id))}):e.jsx(x.Row,{style:{marginTop:"30px",rowGap:"60px"},children:i==null?void 0:i.map(a=>e.jsx(x.Col,{md:6,lg:3,children:e.jsx(_,{children:e.jsx(w,{event:a})})},a.id))})]}),e.jsxs("div",{className:"content-container",children:[e.jsx(u.Title,{level:4,as:"h2",children:s("CoursePage.InterestTitle")}),i&&i.length>4?e.jsx(X,{nodes:i.map(a=>e.jsx(_,{children:e.jsx(w,{event:a})},a.id))}):e.jsx(x.Row,{style:{marginTop:"30px",rowGap:"60px"},children:i==null?void 0:i.map(a=>e.jsx(x.Col,{md:6,lg:3,children:e.jsx(_,{children:e.jsx(w,{event:a})})},a.id))})]})]})})})},et=()=>{var s;const{stationaryEvent:t}=o.useContext(m.EscolaLMSContext);return e.jsx(me,{metaTitle:(s=t.value)==null?void 0:s.name,children:e.jsxs(Ce,{children:[e.jsx(pe,{children:e.jsx(Ue,{})}),e.jsx(Oe,{})]})})};export{et as default};