import{q as le,f as ce,r as m,j as h,M as ye,s as ue,cc as be,d as b,cd as xe,ce as ge,a5 as Pe,a7 as Te,D as K,a3 as we,cf as Ee,a6 as Ce,v as de,cg as Me,S as Oe,an as re,ch as Se,b as fe,E as Ie,i as Ne,ao as Ae,h as De,n as se,ci as ke}from"./index-Cei2V9tG.js";import{A as x,_ as ze,P as Be,a as oe,I as Le,O as Fe,H as He}from"./index-BdBaDIIz.js";import{U as $e}from"./Upload-DQPhAuc_.js";const Re=le.div`
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.17em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.9em;
  }
  .resources-container {
    padding: 24px 0;
    margin-top: 24px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${({theme:t})=>t.primaryColor};
  }
`,Ve=({value:t,onLoad:r,resources:e})=>{const{t:s}=ce(),a=e&&e.length>0;return m.useEffect(()=>{t&&r&&r()},[t,r]),h.jsxs(Re,{children:[t&&h.jsx(ye.MarkdownRenderer,{children:t}),a&&h.jsxs("div",{className:"resources-container",children:[h.jsx(ue.Text,{children:s("CoursePage.Resources")}),e.map(({name:n,url:y})=>h.jsx(be.Download,{href:y,fileName:n}))]})]})};var pe={},H={},U=b&&b.__assign||function(){return U=Object.assign||function(t){for(var r,e=1,s=arguments.length;e<s;e++){r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},U.apply(this,arguments)},ee=b&&b.__awaiter||function(t,r,e,s){function a(n){return n instanceof e?n:new e(function(y){y(n)})}return new(e||(e=Promise))(function(n,y){function u(_){try{i(s.next(_))}catch(T){y(T)}}function g(_){try{i(s.throw(_))}catch(T){y(T)}}function i(_){_.done?n(_.value):a(_.value).then(u,g)}i((s=s.apply(t,r||[])).next())})},te=b&&b.__generator||function(t,r){var e={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},s,a,n,y;return y={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function u(i){return function(_){return g([i,_])}}function g(i){if(s)throw new TypeError("Generator is already executing.");for(;e;)try{if(s=1,a&&(n=i[0]&2?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,a=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(n=e.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){e=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){e.label=i[1];break}if(i[0]===6&&e.label<n[1]){e.label=n[1],n=i;break}if(n&&e.label<n[2]){e.label=n[2],e.ops.push(i);break}n[2]&&e.ops.pop(),e.trys.pop();continue}i=r.call(t,e)}catch(_){i=[6,_],a=0}finally{s=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Ue=b&&b.__rest||function(t,r){var e={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&r.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)r.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(e[s[a]]=t[s[a]]);return e},qe=b&&b.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(H,"__esModule",{value:!0});H.removeProject=H.fetchProjects=H.addProject=void 0;var ne=qe(xe),ae=ge;function Ge(t,r,e,s){return ee(this,void 0,void 0,function(){var a;return te(this,function(n){return a=new FormData,Object.entries(e).forEach(function(y){var u=y[0],g=y[1];a.append(u,g)}),[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},data:a},s||{}))]})})}H.addProject=Ge;function Ze(t,r,e,s){var a=e.per_page,n=e.page,y=Ue(e,["per_page","page"]);return ee(this,void 0,void 0,function(){return te(this,function(u){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions"),U({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()},params:U({per_page:a??15,page:n??1},y)},s||{}))]})})}H.fetchProjects=Ze;function Qe(t,r,e,s){return ee(this,void 0,void 0,function(){return te(this,function(a){return[2,(0,ne.default)("".concat(t,"/api/topic-project-solutions/").concat(e),U({method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(r),"Current-timezone":(0,ae.currentTimezone)()}},s||{}))]})})}H.removeProject=Qe;(function(t){var r=b&&b.__makeTemplateObject||function(l,d){return Object.defineProperty?Object.defineProperty(l,"raw",{value:d}):l.raw=d,l},e=b&&b.__assign||function(){return e=Object.assign||function(l){for(var d,c=1,j=arguments.length;c<j;c++){d=arguments[c];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(l[p]=d[p])}return l},e.apply(this,arguments)},s=b&&b.__createBinding||(Object.create?function(l,d,c,j){j===void 0&&(j=c);var p=Object.getOwnPropertyDescriptor(d,c);(!p||("get"in p?!d.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return d[c]}}),Object.defineProperty(l,j,p)}:function(l,d,c,j){j===void 0&&(j=c),l[j]=d[c]}),a=b&&b.__setModuleDefault||(Object.create?function(l,d){Object.defineProperty(l,"default",{enumerable:!0,value:d})}:function(l,d){l.default=d}),n=b&&b.__importStar||function(l){if(l&&l.__esModule)return l;var d={};if(l!=null)for(var c in l)c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)&&s(d,l,c);return a(d,l),d},y=b&&b.__spreadArray||function(l,d,c){if(c||arguments.length===2)for(var j=0,p=d.length,P;j<p;j++)(P||!(j in d))&&(P||(P=Array.prototype.slice.call(d,0,j)),P[j]=d[j]);return l.concat(P||Array.prototype.slice.call(d))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectPlayer=void 0;var u=h,g=m,i=n(Pe),_=we,T=Ee,w=K,M=H,v=Ce,o=de,O=Me,C=Oe,q=ue,Z=Te(),W=$e,f=i.default.div(Q||(Q=r([`
  .project-player__upload-input {
    margin-bottom: 1em;
    .wrapper {
      .border img {
        display: none;
      }

      &::after {
        padding-top: 0;
        aspect-ratio: 16 / 3;
      }
    }
  }

  .project-player__projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    .project-card {
      width: 100%;
      max-width: 225px;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
`],[`
  .project-player__upload-input {
    margin-bottom: 1em;
    .wrapper {
      .border img {
        display: none;
      }

      &::after {
        padding-top: 0;
        aspect-ratio: 16 / 3;
      }
    }
  }

  .project-player__projects-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    .project-card {
      width: 100%;
      max-width: 225px;

      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }
`]))),X=function(){return(0,u.jsx)("svg",e({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:(0,u.jsx)("path",{d:"M5 2C5 0.89543 5.89543 0 7 0H13C14.1046 0 15 0.895431 15 2V4H16.9897C16.9959 3.99994 17.0021 3.99994 17.0083 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H17.9311L17.0638 18.1425C16.989 19.1891 16.1182 20 15.0689 20H4.93112C3.88184 20 3.01096 19.1891 2.9362 18.1425L2.06888 6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H2.99174C2.99795 3.99994 3.00414 3.99994 3.01032 4H5V2ZM7 4H13V2H7V4ZM4.07398 6L4.93112 18H15.0689L15.926 6H4.07398ZM8 8C8.55228 8 9 8.44772 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})}))},R=function(l){var d=l.projects,c=l.onDeleteSuccess,j=l.onDeleteError,p=l.className,P=(0,_.useTranslation)().t,E=(0,g.useContext)(w.EscolaLMSContext),A=E.token,S=E.apiUrl,k=(0,g.useState)([]),I=k[0],z=k[1],B=(0,g.useCallback)(function(N){return function(){if(!A)return console.warn("noToken");z(function(L){return y(y([],L,!0),[N],!1)}),(0,M.removeProject)(S,A,N).then(function(){return c==null?void 0:c()}).catch(function(){return j==null?void 0:j()}).finally(function(){return z(function(L){return L.filter(function(F){return F!==N})})})}},[A,S]);return(0,u.jsxs)("div",e({className:p},{children:[d.loading&&!d.data.length&&(0,u.jsx)(C.Spin,{}),d.data.map(function(N,L){var F=N.id,$=N.created_at;return(0,u.jsxs)(O.Card,e({className:"project-card"},{children:[(0,u.jsxs)("div",e({className:"project-card__details"},{children:[(0,u.jsxs)(q.Text,e({className:"project-card__title"},{children:[P("ProjectPlayer.ProjectFile")," ".concat(L+1)]})),(0,u.jsx)(q.Text,e({className:"project-card__date"},{children:(0,T.format)(new Date($),v.DATETIME_FORMAT)}))]})),(0,u.jsx)(o.Button,e({className:"project-card__delete-btn",mode:"icon",loading:I.includes(F),onClick:B(F)},{children:(0,u.jsx)(X,{})}))]}),F)})]}))},Y=function(l){var d=l.course_id,c=l.topic,j=l.onSuccess,p=l.onError,P=l.className,E=l.onProjectsChange,A=(0,g.useContext)(w.EscolaLMSContext),S=A.token,k=A.apiUrl,I=(0,g.useState)({data:[],loading:!1}),z=I[0],B=I[1],N=(0,g.useState)(!1),L=N[0],F=N[1];(0,g.useEffect)(function(){E&&E(z)},[z]);var $=(0,g.useCallback)(function(){if(!S)return console.error("noToken");B(function(D){return e(e({},D),{loading:!0})}),(0,M.fetchProjects)(k,S,{course_id:d,topic_id:c==null?void 0:c.id}).then(function(D){D.success&&B(function(G){return e(e({},G),{data:D.data})})}).catch(function(D){return console.warn(D)}).finally(function(){return B(function(D){return e(e({},D),{loading:!1})})})},[S,k,d,c==null?void 0:c.id]);(0,g.useEffect)(function(){$()},[$]);var _e=(0,g.useCallback)(function(D){var G;if(!(!(!((G=D.currentTarget.files)===null||G===void 0)&&G[0])||!S)){F(!0);var je={topic_id:(c==null?void 0:c.id)+"",file:D.currentTarget.files[0]};(0,M.addProject)(k,S,je).then(function(){$(),j==null||j()}).catch(function(){p==null||p()}).finally(function(){F(!1)})}},[k,S,c==null?void 0:c.id,$]);return(0,u.jsxs)(f,e({className:"wellms-component"+" ".concat(P),"data-testid":"project-player"},{children:[c.description&&(0,u.jsx)(Z.MarkdownRenderer,e({className:"project-player__description"},{children:c.description})),(0,u.jsx)(W.Upload,{className:"project-player__upload-input",name:"project_file",onChange:_e,disabled:L}),(0,u.jsx)(R,{className:"project-player__projects-list",projects:z,onDeleteSuccess:$})]}))};t.ProjectPlayer=Y,t.default=(0,i.withTheme)((0,i.default)(t.ProjectPlayer)(V||(V=r([""],[""]))));var Q,V})(pe);const We=le.div`
  > button {
    position: fixed;
    right: 5px;
    bottom: 5px;
    z-index: 9999;
    svg path {
      fill: white;
    }
  }
  iframe {
    border: none;
    display: block;
    width: 100%;
  }
  ${t=>t.fullview?re`
        iframe {
          position: fixed;
          top: 90px;
          left: 0;
          height: calc(100% - 90px - 80px);

          z-index: 9999;
        }
      `:re`
        display: flex;

        min-height: 80vh;
        max-height: 80vh;
        height: 100vh;
        iframe {
          height: 100%;
        }
      `}
`,Xe=({value:t})=>{const{apiUrl:r}=m.useContext(K.EscolaLMSContext),{t:e}=ce(),[s,a]=m.useState(!1);return h.jsx("div",{className:"scorm-wrapper",children:h.jsxs(We,{fullview:s,children:[h.jsxs(de.Button,{onClick:()=>a(!s),children:[" ",e("Scorm.Resize")," ",h.jsx(Se,{})]}),h.jsx("iframe",{title:t.title,src:`${r}/api/scorm/play/${t.uuid}`})]})})},me=t=>t.reduce((r,e)=>[...r,...me((e==null?void 0:e.lessons)??[]),e],[]),J=t=>t.reduce((r,e)=>[...r,...e.topics??[],...e.lessons?J(e.lessons):[]],[]),ve=(t,r,e=[])=>{const s=[...e],a=t.find(n=>{var y;return(y=n==null?void 0:n.lessons)==null?void 0:y.find(u=>(u==null?void 0:u.id)===(r==null?void 0:r.id))});return a?(s.unshift(a.id),ve(t,a,s)):s},ie=(t,r,e="prev")=>{const s=r.findIndex(n=>n.id===t);return new Map([["prev",r==null?void 0:r[s-1]],["next",r==null?void 0:r[s+1]]]).get(e)},he=fe.createContext({}),Ye=()=>m.useContext(he),Je=[x.TopicType.H5P,x.TopicType.Audio,x.TopicType.Video,x.TopicType.Project,x.TopicType.GiftQuiz,x.TopicType.Pdf],nt=({children:t})=>{var j;const{sendProgress:r,program:e,fetchProgram:s,courseProgressDetails:a,fetchCourseProgress:n}=m.useContext(K.EscolaLMSContext),[y,u]=m.useState(!1),[g,i]=m.useState(!1),{id:_,lessonID:T,topicID:w}=Ie(),M=Ne(),v=(j=a.byId)==null?void 0:j[_],o=m.useMemo(()=>e.value,[e.value]),O=m.useMemo(()=>me((o==null?void 0:o.lessons)??[]),[o==null?void 0:o.lessons]),C=m.useMemo(()=>J((o==null?void 0:o.lessons)??[]),[o==null?void 0:o.lessons]),q=m.useCallback(p=>O.find(P=>P.id===p),[O]),Z=m.useCallback(p=>C.find(P=>P.id===p),[C]),W=m.useMemo(()=>ie(Number(w),C),[C,w]),f=m.useMemo(()=>Z(Number(w)),[Z,w]),X=m.useMemo(()=>ie(Number(w),C,"next"),[C,w]),R=m.useMemo(()=>f&&q(f==null?void 0:f.lesson_id),[q,f]),Y=m.useCallback(p=>{(o==null?void 0:o.id)!==void 0&&(f==null?void 0:f.id)!==void 0&&(u(!1),r(o.id,[{topic_id:f.id,status:x.CourseProgressItemElementStatus.COMPLETE}]),p&&i(!0))},[r,o==null?void 0:o.id,f==null?void 0:f.id]),Q=m.useMemo(()=>((v==null?void 0:v.value)??[]).reduce((p,{status:P,topic_id:E})=>P===x.CourseProgressItemElementStatus.COMPLETE?[...p,E]:p,[]),[v]),V=m.useMemo(()=>{const p=((o==null?void 0:o.lessons)??[]).filter(I=>I.active_from===null||I.active_from&&Ae(new Date,new Date(I.active_from))),P=J(p),{incomplete:E,in_progress:A,complete:S}=P.reduce((I,z)=>{const B=((v==null?void 0:v.value)??[]).find(({topic_id:L})=>L===z.id);if(!B)return I;const N={[x.CourseProgressItemElementStatus.INCOMPLETE]:"incomplete",[x.CourseProgressItemElementStatus.COMPLETE]:"complete",[x.CourseProgressItemElementStatus.IN_PROGRESS]:"in_progress"};return{...I,[N[B.status]]:[...I[N[B.status]],z.id]}},{in_progress:[],incomplete:[],complete:[]});if(A.length)return[...A,...S];const k=E!=null&&E[0]?[E[0]]:[];return[...S,...k]},[o==null?void 0:o.lessons,v==null?void 0:v.value]),l=m.useMemo(()=>R?ve(O,R):[],[R,O]);m.useEffect(()=>{_&&s(Number(_))},[_,s]),m.useEffect(()=>{_&&n(Number(_))},[n,_]),m.useEffect(()=>{f!=null&&f.topicable_type&&u(Je.includes(f==null?void 0:f.topicable_type)&&!f.can_skip)},[f==null?void 0:f.can_skip,f==null?void 0:f.topicable_type]),m.useEffect(()=>{var p;if(!w||Number(w)!==(f==null?void 0:f.id)){const P=V.at(-1)??((p=C==null?void 0:C[0])==null?void 0:p.id),E=C.find(({id:A})=>A===P);E&&M.push(`/course/${_}/${E.lesson_id}/${P}`)}},[w,V,C,M,_,f==null?void 0:f.id]);const d=m.useMemo(()=>!!(v!=null&&v.value&&(v!=null&&v.value.every(({status:p})=>p===x.CourseProgressItemElementStatus.COMPLETE))),[v==null?void 0:v.value]),c=m.useMemo(()=>e.loading||(v==null?void 0:v.loading),[e.loading,v==null?void 0:v.loading]);return h.jsx(he.Provider,{value:{courseId:_,flatLessons:O,flatTopics:C,prevTopic:W,currentTopic:f,nextTopic:X,currentLesson:R,currentCourseProgram:o,isNextTopicButtonDisabled:y,setIsNextTopicButtonDisabled:u,completeCurrentTopic:Y,availableTopicsIds:V,finishedTopicsIds:Q,currentLessonParentsIds:l,isCourseFinished:d,isAnyDataLoading:c,showFinish:g},children:t})},at=({topic:t,preview:r=!1})=>{var v;const{courseId:e,nextTopic:s,setIsNextTopicButtonDisabled:a,showFinish:n}=Ye(),{topicPing:y,topicIsFinished:u,h5pProgress:g,fetchCourseProgress:i}=m.useContext(De.EscolaLMSContext),_=!!s,T=t==null?void 0:t.id,w=m.useCallback(o=>{var O;o!=null&&o.statement&&((O=g(String(e),Number(T),o==null?void 0:o.statement))==null||O.then(()=>{i(Number(e))}))},[g,e,T,i]);m.useEffect(()=>{const o=!!(T&&u(T));_&&o&&(a==null||a(!o&&!(t!=null&&t.can_skip)))},[a,T,t==null?void 0:t.can_skip,_,u]),m.useEffect(()=>{if(!r&&!n){const o=()=>T&&!u(T)&&y(T),O=setInterval(()=>{o()},5e3);return o(),()=>clearInterval(O)}},[y,T,u,r,n]);const M=m.useCallback(()=>a==null?void 0:a(!1),[a]);if(!t)return h.jsx(fe.Fragment,{});if(!((v=t.topicable)!=null&&v.value))return h.jsx("pre",{className:"error",children:"Error: topic.topicable?.value is missing"});if(t.topicable_type)switch(t.topicable_type){case x.TopicType.H5P:return h.jsx(He.H5Player,{onXAPI:o=>w==null?void 0:w(o),h5pObject:t.topicable.content,hideActionButtons:!0});case x.TopicType.OEmbed:return h.jsx(h.Fragment,{children:h.jsx(Fe.OEmbedPlayer,{url:t.topicable.value},t.id)});case x.TopicType.RichText:return h.jsx(Ve,{value:t.topicable.value,resources:t.resources});case x.TopicType.Video:return h.jsx(oe.AudioVideoPlayer,{mobile:se,url:t.topicable.url,light:!0,onTopicEnd:M});case x.TopicType.Image:return h.jsx(Le.ImagePlayer,{topic:t,onLoad:()=>{}});case x.TopicType.Audio:return h.jsx(oe.AudioVideoPlayer,{mobile:se,audio:!0,url:t.topicable.url,light:!0,onTopicEnd:M});case x.TopicType.Pdf:return h.jsx(Be.PdfPlayer,{url:t.topicable.url,pageConfig:{className:"course-pdf-player"},onTopicEnd:M});case x.TopicType.Scorm:return h.jsx(Xe,{value:{title:t.title,uuid:t.topicable.uuid}});case x.TopicType.GiftQuiz:return h.jsx(ze,{topic:t,onTopicEnd:M});case x.TopicType.Project:return h.jsx(pe.ProjectPlayer,{course_id:Number(e),topic:t,onSuccess:M,onProjectsChange:M});default:return h.jsx("pre",{children:t.topicable_type})}return h.jsx("pre",{children:"loading... (or error)"})};var rt=ke();export{rt as C,at as a,nt as b,Ye as u};