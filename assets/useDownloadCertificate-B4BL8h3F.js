import{r as n,D as i}from"./index-Cei2V9tG.js";const f=()=>{const[c,o]=n.useState(-1),{generateCertificate:r}=n.useContext(i.EscolaLMSContext);return{loadingId:c,downloadCertificate:async(a,s)=>{o(a);try{const t=await r(a);if(t){const e=document.createElement("a");document.body.appendChild(e),e.setAttribute("href",URL.createObjectURL(new Blob([t]))),e.setAttribute("download",`${s||"Certificate"}.pdf`),e.style.display="",e.click(),document.body.removeChild(e)}}catch(t){console.log(t)}finally{o(-1)}}}};export{f as u};