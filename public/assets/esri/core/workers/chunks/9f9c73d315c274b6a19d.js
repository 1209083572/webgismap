"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[772],{21980:(t,e,s)=>{s.d(e,{OW:()=>c,UX:()=>o,sR:()=>r}),s(6220),s(47620);var i=s(62088),n=s(28176);function r(t,e){return e?{...e,query:{...t??{},...e.query}}:{query:t}}function o(t){return"string"==typeof t?(0,n.as)(t):(0,i.ct)(t)}function c(t,e,s){const i={};for(const n in t){if("declaredClass"===n)continue;const r=t[n];if(null!=r&&"function"!=typeof r)if(Array.isArray(r))i[n]=r.map((t=>c({item:t},e,s).item));else if("object"==typeof r)if(r.toJSON){const t=r.toJSON(s?.[n]);i[n]=e?t:JSON.stringify(t)}else i[n]=e?r:JSON.stringify(r);else i[n]=r}return i}s(20572)},70772:(t,e,s)=>{s.r(e),s.d(e,{deleteForwardEdits:()=>o});var i=s(2600),n=s(20744),r=s(21980);async function o(t,e,s,o){if(!e)throw new n.c("post:missing-guid","guid for version is missing");const c=(0,r.UX)(t),u=s.toJSON(),f=(0,r.sR)(c.query,{query:(0,r.OW)({...u,f:"json"}),...o,method:"post"});e.startsWith("{")&&(e=e.slice(1,-1));const a=`${c.path}/versions/${e}/deleteForwardEdits`,{data:d}=await(0,i.c)(a,f);return d.success}}}]);