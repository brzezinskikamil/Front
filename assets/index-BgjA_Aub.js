import{q as h,r as e,h as f,f as u,j as t,x,A as M}from"./index-Duhnd3NG.js";import{C as g}from"./index-CDaAQ3M0.js";const p=h.div`
  iframe {
    width: 100% !important;
    height: calc(100vh - 76px);
    border: none;
  }
`,y=({onClose:o,visible:c,webinarId:a})=>{const[s,l]=e.useState(null),[n,i]=e.useState(!1),{generateWebinarJitsy:d}=e.useContext(f.EscolaLMSContext),{t:m}=u();return e.useEffect(()=>{(async()=>{if(i(!0),a){const r=await d(a);r.success&&l(r.data),r.success||(M.error(`${m("WebinarPage.ErrorWhileGeneratingUrl")}`),o())}i(!1)})()},[a]),t.jsx(x.Modal,{onClose:o,visible:c,animation:"zoom",maskAnimation:"fade",destroyOnClose:!0,width:"100vw",height:"100vh",bodyStyle:{minHeight:"93vh"},children:t.jsxs(p,{children:[n&&t.jsx(g,{}),!n&&s&&t.jsx("iframe",{title:s.data.roomName,src:s.url})]})})};export{y as W};