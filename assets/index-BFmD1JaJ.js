import{i as c,n as l,f as u,b as d,l as r,j as s,L as p,C as m,s as a,z as x,k as h}from"./index-Blo-PJs7.js";import{R as j}from"./ResetPasswordForm-JDhFQowr.js";const S=()=>{const{push:t}=c(),{search:e}=l(),i=e&&e.split("&")[0].split("=")[1],o=e&&e.split("&")[1].split("=")[1],{t:n}=u();return d.useEffect(()=>{!o&&t(r.home)},[]),s.jsx(p,{children:s.jsx("div",{className:"profile-authentication-area",children:s.jsx(m,{children:s.jsx(a.Row,{justify:"center",children:s.jsx(a.Col,{md:12,lg:12,children:s.jsx(j.ResetPasswordForm,{onSecondStepSuccess:()=>{t(r.login),x.success(n("LoginPage.ForgotSuccessStep2"))},secondStep:!0,mobile:h,return_url:"#/reset-password",token:o,email:i})})})})})})};export{S as default};