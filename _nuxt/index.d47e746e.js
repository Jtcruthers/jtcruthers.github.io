import{o as l,c as a,a as e,e as i,B as d,C as u,T as _,d as f,s as x,q as m,z as c,D as h,t as p}from"./entry.6510f07c.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";function w(s,t){return l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])}const g={};function y(s,t){return l(),i(_,{name:"fade",mode:"out-in"},{default:d(()=>[u(s.$slots,"default")]),_:3})}const b=v(g,[["render",y]]),B={class:"relative h-full w-full"},k={class:"flex justify-center items-center align-middle h-full w-full"},C={class:"w-2/3 sm:w-1/2 lg:w-5/12 xl:w-1/3 px-16 py-12 border-4 border-solid border-teal-400 rounded-lg text-xl sm:text-4xl lg:text-5xl text-center"},T={class:"absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"},z=e("div",{class:"h-96"},[e("p")],-1),M=f({__name:"index",setup(s){const t=["Justin","Molly","Ashe"];let n=x(0);const o=m(()=>{const r=n.value%t.length;return t[r]});return setInterval(()=>{n.value++},2e3),(r,D)=>(l(),a("div",B,[e("div",k,[e("div",C,[c(b,null,{default:d(()=>[(l(),a("h1",{key:o.value,class:"h-full w-full sm:text-4xl lg:text-5xl text-center"}," Hello "+p(o.value)+" :) ",1))]),_:1})])]),e("div",T,[c(h(w),{class:"h-12 w-12 md:h-16 md:w-16 text-teal-400 animate-bounce"})]),z]))}});export{M as default};