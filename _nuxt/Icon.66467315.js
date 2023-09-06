import{$ as Qe,a0 as Ue,a1 as Ve,v as Ce,f as ke,A as se,a2 as Ke,y as Ge,x as A,H as Je,a3 as We,D as y,o as F,c as ie,h as ce,i as Xe,t as Ye,a4 as Ze}from"./entry.82f0fb9b.js";import{_ as et}from"./_plugin-vue_export-helper.c27b6911.js";const tt=Qe({prose:{copyButton:{iconCopy:"ph:copy",iconCopied:"ph:check"},headings:{icon:"ph:link"}}}),nt={},ot=Ue(tt,nt);function rt(){const e=Ce();return e._appConfig||(e._appConfig=Ve(ot)),e._appConfig}const je=Object.freeze({left:0,top:0,width:16,height:16}),Te=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...je,...Te});Object.freeze({...X,body:"",hidden:!1});({...je});const _e=Object.freeze({width:null,height:null}),Oe=Object.freeze({..._e,...Te});function st(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in _e?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const it=/[\s,]+/;function ct(e,t){t.split(it).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function lt(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const at=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ft=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function le(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(at);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=ft.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const ut=e=>e==="unset"||e==="undefined"||e==="none";function dt(e,t){const n={...X,...e},r={...Oe,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(b=>{const h=[],d=b.hFlip,S=b.vFlip;let w=b.rotate;d?S?w+=2:(h.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),h.push("scale(-1 1)"),o.top=o.left=0):S&&(h.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),h.push("scale(1 -1)"),o.top=o.left=0);let v;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:v=o.height/2+o.top,h.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:h.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,h.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}w%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),h.length&&(s='<g transform="'+h.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let f,u;i===null?(u=c===null?"1em":c==="auto"?a:c,f=le(u,l/a)):(f=i==="auto"?l:i,u=c===null?le(f,a/l):c==="auto"?a:c);const m={},p=(b,h)=>{ut(h)||(m[b]=h.toString())};return p("width",f),p("height",u),m.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:m,body:s}}const pt=/\sid="(\S+)"/g,ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let gt=0;function mt(e,t=ht){const n=[];let r;for(;r=pt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(gt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function yt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function bt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function wt(e){return"data:image/svg+xml,"+bt(e)}function vt(e){return'url("'+wt(e)+'")'}const ae={...Oe,inline:!1},xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},St={display:"inline-block"},Q={backgroundColor:"currentColor"},Pe={backgroundColor:"transparent"},fe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ue={webkitMask:Q,mask:Q,background:Pe};for(const e in ue){const t=ue[e];for(const n in fe)t[e+n]=fe[n]}const M={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";M[e+"-flip"]=t,M[e.slice(0,1)+"-flip"]=t,M[e+"Flip"]=t});function de(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const It=(e,t)=>{const n=st(ae,t),r={...xt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let h in t){const d=t[h];if(d!==void 0)switch(h){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[h]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&ct(n,d);break;case"color":s.color=d;break;case"rotate":typeof d=="string"?n[h]=lt(d):typeof d=="number"&&(n[h]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete r["aria-hidden"];break;default:{const S=M[h];S?(d===!0||d==="true"||d===1)&&(n[S]=!0):ae[h]===void 0&&(r[h]=d)}}}const l=dt(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let h=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),r.innerHTML=mt(l.body,d?()=>d+"ID"+h++:"iconifyVue"),se("svg",r)}const{body:f,width:u,height:m}=e,p=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),b=yt(f,{...a,width:u+"",height:m+""});return r.style={...s,"--svg":vt(b),width:de(a.width),height:de(a.height),...St,...p?Q:Pe,...c},se("span",r)},Ct=Object.create(null),kt=ke({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?Ct[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:It({...X,...n},e)}}),T=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!z(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!z(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!z(c,n)?null:c}return null},z=(e,t)=>e?!!((e.provider===""||e.provider.match(T))&&(t&&e.prefix===""||e.prefix.match(T))&&e.name.match(T)):!1,Ae=Object.freeze({left:0,top:0,width:16,height:16}),$=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...Ae,...$}),U=Object.freeze({...Y,body:"",hidden:!1});function jt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function pe(e,t){const n=jt(e,t);for(const r in U)r in $?r in e&&!(r in n)&&(n[r]=$[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Tt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function _t(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=pe(r[c]||o[c],s)}return i(t),n.forEach(i),pe(e,s)}function Fe(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Tt(e);for(const o in r){const s=r[o];s&&(t(o,_t(e,o,s)),n.push(o))}return n}const Ot={provider:"",aliases:{},not_found:{},...Ae};function B(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ee(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!B(e,Ot))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(T)||typeof s.body!="string"||!B(s,U))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(T)||typeof i!="string"||!n[i]&&!r[i]||!B(s,U))return null}return t}const he=Object.create(null);function Pt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=he[e]||(he[e]=Object.create(null));return n[t]||(n[t]=Pt(e,t))}function Z(e,t){return Ee(t)?Fe(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function At(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let _=!1;function Me(e){return typeof e=="boolean"&&(_=e),_}function Ft(e){const t=typeof e=="string"?D(e,!0,_):e;if(t){const n=C(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Et(e,t){const n=D(e,!0,_);if(!n)return!1;const r=C(n.provider,n.prefix);return At(r,n.name,t)}function Mt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),_&&!t&&!e.prefix){let o=!1;return Ee(e)&&(e.prefix="",Fe(e,(s,i)=>{i&&Et(s,i)&&(o=!0)})),o}const n=e.prefix;if(!z({provider:t,prefix:n,name:"a"}))return!1;const r=C(t,n);return!!Z(r,e)}const zt=Object.freeze({width:null,height:null}),Lt=Object.freeze({...zt,...$});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const V=Object.create(null);function $t(e,t){V[e]=t}function K(e){return V[e]||V[""]}function ee(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const te=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;j.length>0;)j.length===1||Math.random()>.5?L.push(j.shift()):L.push(j.pop());te[""]=ee({resources:["https://api.iconify.design"].concat(L)});function Dt(e,t){const n=ee(t);return n===null?!1:(te[e]=n,!0)}function ne(e){return te[e]}const Nt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ge=Nt();function Rt(e,t){const n=ne(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Bt(e){return e===404}const Ht=(e,t,n)=>{const r=[],o=Rt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function qt(e){if(typeof e=="string"){const t=ne(e);if(t)return t.path}return"/"}const Qt=(e,t,n)=>{if(!ge){n("abort",424);return}let r=qt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;ge(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Bt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Ut={prepare:Ht,send:Qt};function Vt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const u={provider:s,prefix:i,name:c};f.push(u)}),t}function ze(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Kt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||ze([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Gt=0;function Jt(e,t,n){const r=Gt++,o=ze.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Wt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?D(o,t,n):o;s&&r.push(s)}),r}var Xt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Yt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const x=Math.floor(Math.random()*g.length);i.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,u=null,m=[],p=[];typeof r=="function"&&p.push(r);function b(){u&&(clearTimeout(u),u=null)}function h(){l==="pending"&&(l="aborted"),b(),m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function d(g,x){x&&(p=[]),typeof g=="function"&&p.push(g)}function S(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:m.length,subscribe:d,abort:h}}function w(){l="failed",p.forEach(g=>{g(void 0,f)})}function v(){m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function qe(g,x,k){const P=x!=="success";switch(m=m.filter(I=>I!==g),l){case"pending":break;case"failed":if(P||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){f=k,w();return}if(P){f=k,m.length||(i.length?R():w());return}if(b(),v(),!e.random){const I=e.resources.indexOf(g.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",p.forEach(I=>{I(k)})}function R(){if(l!=="pending")return;b();const g=i.shift();if(g===void 0){if(m.length){u=setTimeout(()=>{b(),l==="pending"&&(v(),w())},e.timeout);return}w();return}const x={status:"pending",resource:g,callback:(k,P)=>{qe(x,k,P)}};m.push(x),a++,u=setTimeout(R,e.rotate),n(g,t,x.callback)}return setTimeout(R),S}function Le(e){const t={...Xt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=Yt(t,c,l,(u,m)=>{r(),a&&a(u,m)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function me(){}const H=Object.create(null);function Zt(e){if(!H[e]){const t=ne(e);if(!t)return;const n=Le(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function en(e,t,n){let r,o;if(typeof e=="string"){const s=K(e);if(!s)return n(void 0,424),me;o=s.send;const i=Zt(e);i&&(r=i.redundancy)}else{const s=ee(e);if(s){r=Le(s);const i=e.resources?e.resources[0]:"",c=K(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),me):r.query(t,o,n)().abort}const ye="iconify2",O="iconify",$e=O+"-count",be=O+"-version",De=36e5,tn=168;function G(e,t){try{return e.getItem(t)}catch{}}function oe(e,t,n){try{return e.setItem(t,n),!0}catch{}}function we(e,t){try{e.removeItem(t)}catch{}}function J(e,t){return oe(e,$e,t.toString())}function W(e){return parseInt(G(e,$e))||0}const N={local:!0,session:!0},Ne={local:new Set,session:new Set};let re=!1;function nn(e){re=e}let E=typeof window>"u"?{}:window;function Re(e){const t=e+"Storage";try{if(E&&E[t]&&typeof E[t].length=="number")return E[t]}catch{}N[e]=!1}function Be(e,t){const n=Re(e);if(!n)return;const r=G(n,be);if(r!==ye){if(r){const c=W(n);for(let l=0;l<c;l++)we(n,O+l.toString())}oe(n,be,ye),J(n,0);return}const o=Math.floor(Date.now()/De)-tn,s=c=>{const l=O+c.toString(),a=G(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}we(n,l)}};let i=W(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,J(n,i)):Ne[e].add(c))}function He(){if(!re){nn(!0);for(const e in N)Be(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=C(r,o);if(!Z(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function on(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in N)Be(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function rn(e,t){re||He();function n(r){let o;if(!N[r]||!(o=Re(r)))return;const s=Ne[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=W(o),!J(o,i+1))return;const c={cached:Math.floor(Date.now()/De),provider:e.provider,data:t};return oe(o,O+i.toString(),JSON.stringify(c))}t.lastModified&&!on(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ve(){}function sn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Kt(e)}))}function cn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=K(n)))return;s.prepare(n,r,o).forEach(c=>{en(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=Z(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),rn(e,l)}catch(a){console.error(a)}sn(e)})})}))}const ln=(e,t)=>{const n=Wt(e,!0,Me()),r=Vt(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ve)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(C(a,f));const u=o[a]||(o[a]=Object.create(null));u[f]||(u[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:u}=l,m=C(a,f),p=m.pendingIcons||(m.pendingIcons=new Set);p.has(u)||(p.add(u),o[a][f].push(u))}),s.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&cn(l,o[a][f])}),t?Jt(t,r,s):ve},an=e=>new Promise((t,n)=>{const r=typeof e=="string"?D(e,!0):e;if(!r){n(e);return}ln([r||e],o=>{if(o.length&&r){const s=Ft(r);if(s){t({...Y,...s});return}}n(e)})});({...Lt});const xe={backgroundColor:"currentColor"},fn={backgroundColor:"transparent"},Se={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ie={webkitMask:xe,mask:xe,background:fn};for(const e in Ie){const t=Ie[e];for(const n in Se)t[e+n]=Se[n]}const q={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";q[e+"-flip"]=t,q[e.slice(0,1)+"-flip"]=t,q[e+"Flip"]=t});Me(!0);$t("",Ut);if(typeof document<"u"&&typeof window<"u"){He();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Mt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Dt(n,o)||console.error(r)}catch{console.error(r)}}}}({...Y});const un=["width","height"],dn=ke({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let t,n;const r=e,o=Ce(),s=rt().nuxtIcon,i=Ke("icons",()=>({})),c=Ge(!1),l=A(()=>((s==null?void 0:s.aliases)||{})[r.name]||r.name),a=A(()=>{var p;return(p=i.value)==null?void 0:p[l.value]}),f=A(()=>o.vueApp.component(l.value)),u=A(()=>{const p=r.size||(s==null?void 0:s.size)||"1em";return String(Number(p))===p?`${p}px`:p});async function m(){var p;f.value||(p=i.value)!=null&&p[l.value]||(c.value=!0,i.value[l.value]=await an(l.value).catch(()=>{}),c.value=!1)}return Je(()=>l.value,m),!f.value&&([t,n]=We(()=>m()),t=await t,n()),(p,b)=>y(c)?(F(),ie("span",{key:0,class:"icon",width:y(u),height:y(u)},null,8,un)):y(a)?(F(),ce(y(kt),{key:1,icon:y(a),class:"icon",width:y(u),height:y(u)},null,8,["icon","width","height"])):y(f)?(F(),ce(Xe(y(f)),{key:2,class:"icon",width:y(u),height:y(u)},null,8,["width","height"])):(F(),ie("span",{key:3,class:"icon",style:Ze({fontSize:y(u),lineHeight:y(u),width:y(u),height:y(u)})},Ye(e.name),5))}});const pn=et(dn,[["__scopeId","data-v-9b03e4e9"]]),mn=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"}));export{mn as I,pn as _,rt as u};
