import{s as f,Z as v,f as g,M as d,x as l,a2 as h,K as _,A as r,_ as y}from"./entry.82f0fb9b.js";import{q as C,w as m,h as c,e as w,s as P,j as $,a as N,u as j}from"./query.a61a9ff4.js";import{u as T}from"./preview.398098db.js";const x=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${c(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${c(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.c8857f69.js"),["./client-db.c8857f69.js","./entry.82f0fb9b.js","./entry.44646621.css","./query.a61a9ff4.js","./preview.398098db.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await j(`content-navigation-${c(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(y,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),p=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):p(a)}}),L=D;export{L as default};
