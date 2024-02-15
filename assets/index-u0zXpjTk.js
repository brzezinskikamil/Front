import{f as b,j as n,q as l,m as e,O as m,r as x,h,s as u,Q as y}from"./index-Duhnd3NG.js";import{a as k}from"./Search-Dv2P6ije.js";const T=({onSubmit:a})=>{const{t}=b();return n.jsx(k,{placeholder:t("Filters.Search"),onSubmit:a})},j=l("div")`
  display: flex;

  .tags-list {
    display: flex;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    justify-content: flex-start;
    align-items: center;
    column-gap: 10px;
    padding-bottom: 5px;

    ::-webkit-scrollbar {
      height: 4px;
      width: 4px;
      border: 1px solid transparent;
    }
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background: rgba(255, 255, 255, 0.2);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background: #ffffff;
    }

    .tag {
      border-width: 2px;
      border-style: solid;
      margin-bottom: 0;
      padding: 10px 20px;
      line-height: 0.9;
      text-align: center;
      max-height: 50px;
      min-height: 50px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      justify-content: center;
      border-color: ${({theme:a})=>e?a.primaryColor:a.white};
      color: ${({theme:a})=>e?a.primaryColor:a.white};
    }
  }
  .clear-btn {
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    margin-left: 15px;
    cursor: pointer;
    &--desktop {
      display: ${e?"none":"block"};
    }
    ${e&&m`
      svg {
        path {
          fill: ${({theme:a})=>a.primaryColor};
        }
      }
    `}
  }
`,S=({filters:a,onReset:t})=>{var c,s,d;const{categoryTree:g}=x.useContext(h.EscolaLMSContext),i=!!((c=a==null?void 0:a.categories)!=null&&c.length)||!!(a!=null&&a.name)||!!((s=a==null?void 0:a.tags)!=null&&s.length),r=x.useCallback(o=>n.jsx(u.Text,{className:"tag",children:o}),[]);return n.jsxs(j,{children:[n.jsxs("div",{className:"tags-list",children:[!!(a!=null&&a.categories)&&((d=g.list)==null?void 0:d.filter(o=>{var p;return((p=a.categories)==null?void 0:p.indexOf(o.id))>-1}).map(o=>r(o.name))),!!(a!=null&&a.tags)&&(a==null?void 0:a.tags.map(o=>r(o))),!!(a!=null&&a.name)&&r(a.name)]}),i&&n.jsx("button",{type:"button",onClick:()=>{t()},className:"clear-btn clear-btn--desktop",children:n.jsx(y,{})})]})};export{S as F,T as S};