import{q as d,i as p,f as m,j as s,o as h,p as x,l as j}from"./index-Blo-PJs7.js";import{S as C,C as S}from"./index-3c5NpFMV.js";import{u as f,C as g}from"./CourseCard-1IILcvP7.js";import{S as v}from"./swiper-react-Cl7FVjDz.js";const y=d.div`
  position: relative;
`,A=({titleText:t,params:a,isSlider:i=!0,ctaButton:l,slidesPerView:e=4})=>{const{courses:r,loading:o}=f(a),n=p(),{t:u}=m();return s.jsxs(y,{children:[s.jsxs("div",{className:"header-wrapper",children:[s.jsx(h.Title,{className:"slider-title",level:1,as:"h2",children:s.jsx("strong",{children:t})}),l&&s.jsx(x.Button,{mode:"outline",onClick:()=>n.push(j.courses),children:u("Homepage.AwardedCoursesBtnText")})]}),o&&s.jsx(C,{slidesPerView:e,children:Array.from({length:6}).map((T,c)=>s.jsx(v,{children:s.jsx(g,{})},c))}),!o&&r&&s.jsx(S,{courses:r.data,isSlider:i,slidesPerView:e})]})};export{A as D};