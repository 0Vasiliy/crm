const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-3ZW57U_R.js","assets/residents-C7caUmEp.js","assets/Home-sQt0nnH6.css","assets/Buildings-BpkqLZP3.js","assets/Buildings-snqe3Jt0.css","assets/BuildingDetails-B3oS7zFN.js","assets/BuildingDetails-CxCj3js_.css","assets/Apartments-DStyNZm-.js","assets/Apartments-EJY8dQ3o.css","assets/Residents-cVgDFant.js","assets/Residents-B057-Hea.css","assets/Utilities-DIDr4qy7.js","assets/Utilities-euJl0y0j.css","assets/Tickets-shTHrUG3.js","assets/Tickets-CbwzEnZs.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},$r=[],Jt=()=>{},Z_=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),pt=Object.assign,lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ey=Object.prototype.hasOwnProperty,Re=(t,e)=>ey.call(t,e),oe=Array.isArray,Hr=t=>di(t)==="[object Map]",Zo=t=>di(t)==="[object Set]",fh=t=>di(t)==="[object Date]",pe=t=>typeof t=="function",qe=t=>typeof t=="string",Ht=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Dd=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),Vd=Object.prototype.toString,di=t=>Vd.call(t),ty=t=>di(t).slice(8,-1),Nd=t=>di(t)==="[object Object]",cc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ny=/-(\w)/g,Ft=ea(t=>t.replace(ny,(e,n)=>n?n.toUpperCase():"")),ry=/\B([A-Z])/g,Sr=ea(t=>t.replace(ry,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ka=ea(t=>t?`on${ta(t)}`:""),Hn=(t,e)=>!Object.is(t,e),so=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Eo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dh;const na=()=>dh||(dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?ay(r):uc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||De(t))return t}const sy=/;(?![^(]*\))/g,iy=/:([^]+)/,oy=/\/\*[^]*?\*\//g;function ay(t){const e={};return t.replace(oy,"").split(sy).forEach(n=>{if(n){const r=n.split(iy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vr(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=vr(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cy=oc(ly);function Md(t){return!!t||t===""}function uy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ra(t[r],e[r]);return n}function ra(t,e){if(t===e)return!0;let n=fh(t),r=fh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ht(t),r=Ht(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?uy(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ra(t[o],e[o]))return!1}}return String(t)===String(e)}function hy(t,e){return t.findIndex(n=>ra(n,e))}const Ld=t=>!!(t&&t.__v_isRef===!0),xt=t=>qe(t)?t:t==null?"":oe(t)||De(t)&&(t.toString===Vd||!pe(t.toString))?Ld(t)?xt(t.value):JSON.stringify(t,Fd,2):String(t),Fd=(t,e)=>Ld(e)?Fd(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[za(r,i)+" =>"]=s,n),{})}:Zo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>za(n))}:Ht(e)?za(e):De(e)&&!oe(e)&&!Nd(e)?String(e):e,za=(t,e="")=>{var n;return Ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Ud{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Bd(t){return new Ud(t)}function jd(){return yt}function fy(t,e=!1){yt&&yt.cleanups.push(t)}let Oe;const Ga=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ph(this),Wd(this);const e=Oe,n=jt;Oe=this,jt=!0;try{return this.fn()}finally{Kd(this),Oe=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dc(e);this.deps=this.depsTail=void 0,ph(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let Hd=0,Fs,Us;function qd(t,e=!1){if(t.flags|=8,e){t.next=Us,Us=t;return}t.next=Fs,Fs=t}function hc(){Hd++}function fc(){if(--Hd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Wd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),dc(r),dy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Js))return;t.globalVersion=Js;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!yl(t)){t.flags&=-3;return}const n=Oe,r=jt;Oe=t,jt=!0;try{Wd(t);const s=t.fn(t._value);(e.version===0||Hn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,jt=r,Kd(t),t.flags&=-3}}function dc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)dc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function dy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const Gd=[];function tr(){Gd.push(jt),jt=!1}function nr(){const t=Gd.pop();jt=t===void 0?!0:t}function ph(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Js=0;class py{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!jt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new py(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Js++,this.notify(e)}notify(e){hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fc()}}}function Qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,gr=Symbol(""),vl=Symbol(""),Ys=Symbol("");function ht(t,e,n){if(jt&&Oe){let r=To.get(t);r||To.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pc),s.map=r,s.key=n),s.track()}}function cn(t,e,n,r,s,i){const o=To.get(t);if(!o){Js++;return}const l=c=>{c&&c.trigger()};if(hc(),e==="clear")o.forEach(l);else{const c=oe(t),h=c&&cc(n);if(c&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ys||!Ht(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Ys)),e){case"add":c?h&&l(o.get("length")):(l(o.get(gr)),Hr(t)&&l(o.get(vl)));break;case"delete":c||(l(o.get(gr)),Hr(t)&&l(o.get(vl)));break;case"set":Hr(t)&&l(o.get(gr));break}}fc()}function gy(t,e){const n=To.get(t);return n&&n.get(e)}function Nr(t){const e=Ie(t);return e===t?e:(ht(e,"iterate",Ys),Lt(t)?e:e.map(ft))}function sa(t){return ht(t=Ie(t),"iterate",Ys),t}const my={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,ft)},concat(...t){return Nr(this).concat(...t.map(e=>oe(e)?Nr(e):e))},entries(){return Qa(this,"entries",t=>(t[1]=ft(t[1]),t))},every(t,e){return on(this,"every",t,e,void 0,arguments)},filter(t,e){return on(this,"filter",t,e,n=>n.map(ft),arguments)},find(t,e){return on(this,"find",t,e,ft,arguments)},findIndex(t,e){return on(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return on(this,"findLast",t,e,ft,arguments)},findLastIndex(t,e){return on(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return on(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return on(this,"map",t,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...t){return Cs(this,"push",t)},reduce(t,...e){return gh(this,"reduce",t,e)},reduceRight(t,...e){return gh(this,"reduceRight",t,e)},shift(){return Cs(this,"shift")},some(t,e){return on(this,"some",t,e,void 0,arguments)},splice(...t){return Cs(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return Cs(this,"unshift",t)},values(){return Qa(this,"values",ft)}};function Qa(t,e,n){const r=sa(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const _y=Array.prototype;function on(t,e,n,r,s,i){const o=sa(t),l=o!==t&&!Lt(t),c=o[e];if(c!==_y[e]){const p=c.apply(t,i);return l?ft(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,ft(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,r);return l&&s?s(f):f}function gh(t,e,n,r){const s=sa(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ft(l),c,t)}),s[e](i,...r)}function Ja(t,e,n){const r=Ie(t);ht(r,"iterate",Ys);const s=r[e](...n);return(s===-1||s===!1)&&_c(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Cs(t,e,n=[]){tr(),hc();const r=Ie(t)[e].apply(t,n);return fc(),nr(),r}const yy=oc("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ht));function vy(t){Ht(t)||(t=String(t));const e=Ie(this);return ht(e,"has",t),e.hasOwnProperty(t)}class Yd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cy:tp:i?ep:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let c;if(o&&(c=my[n]))return c;if(n==="hasOwnProperty")return vy}const l=Reflect.get(e,n,je(e)?e:r);return(Ht(n)?Jd.has(n):yy(n))||(s||ht(e,"get",n),i)?l:je(l)?o&&cc(n)?l:l.value:De(l)?s?rp(l):pi(l):l}}class Xd extends Yd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Er(i);if(!Lt(r)&&!Er(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&je(i)&&!je(r))return c?!1:(i.value=r,!0)}const o=oe(e)&&cc(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,je(e)?e:s);return e===Ie(s)&&(o?Hn(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ht(n)||!Jd.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",oe(e)?"length":gr),Reflect.ownKeys(e)}}class Ey extends Yd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ty=new Xd,wy=new Ey,Iy=new Xd(!0);const El=t=>t,Gi=t=>Reflect.getPrototypeOf(t);function Ay(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Hr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),f=n?El:e?Tl:ft;return!e&&ht(i,"iterate",c?vl:gr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function by(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);t||(Hn(s,l)&&ht(o,"get",s),ht(o,"get",l));const{has:c}=Gi(o),h=e?El:t?Tl:ft;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ie(s),"iterate",gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ie(i),l=Ie(s);return t||(Hn(s,l)&&ht(o,"has",s),ht(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ie(l),h=e?El:t?Tl:ft;return!t&&ht(c,"iterate",gr),l.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return pt(n,t?{add:Qi("add"),set:Qi("set"),delete:Qi("delete"),clear:Qi("clear")}:{add(s){!e&&!Lt(s)&&!Er(s)&&(s=Ie(s));const i=Ie(this);return Gi(i).has.call(i,s)||(i.add(s),cn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Er(i)&&(i=Ie(i));const o=Ie(this),{has:l,get:c}=Gi(o);let h=l.call(o,s);h||(s=Ie(s),h=l.call(o,s));const f=c.call(o,s);return o.set(s,i),h?Hn(i,f)&&cn(o,"set",s,i):cn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:l}=Gi(i);let c=o.call(i,s);c||(s=Ie(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&cn(i,"delete",s,void 0),h},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ay(s,t,e)}),n}function gc(t,e){const n=by(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Ry={get:gc(!1,!1)},Sy={get:gc(!1,!0)},Py={get:gc(!0,!1)};const Zd=new WeakMap,ep=new WeakMap,tp=new WeakMap,Cy=new WeakMap;function ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oy(t){return t.__v_skip||!Object.isExtensible(t)?0:ky(ty(t))}function pi(t){return Er(t)?t:mc(t,!1,Ty,Ry,Zd)}function np(t){return mc(t,!1,Iy,Sy,ep)}function rp(t){return mc(t,!0,wy,Py,tp)}function mc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Oy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function qn(t){return Er(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function _c(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function yc(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&xd(t,"__v_skip",!0),t}const ft=t=>De(t)?pi(t):t,Tl=t=>De(t)?rp(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Ge(t){return sp(t,!1)}function Dy(t){return sp(t,!0)}function sp(t,e){return je(t)?t:new Vy(t,e)}class Vy{constructor(e,n){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||Er(e);e=r?e:Ie(e),Hn(e,n)&&(this._rawValue=e,this._value=r?e:ft(e),this.dep.trigger())}}function Wn(t){return je(t)?t.value:t}const Ny={get:(t,e,n)=>e==="__v_raw"?t:Wn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ip(t){return qn(t)?t:new Proxy(t,Ny)}function xy(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Ly(t,n);return e}class My{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return gy(Ie(this._object),this._key)}}function Ly(t,e,n){const r=t[e];return je(r)?r:new My(t,e,n)}class Fy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return qd(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uy(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Fy(r,s,n)}const Ji={},wo=new WeakMap;let hr;function By(t,e=!1,n=hr){if(n){let r=wo.get(n);r||wo.set(n,r=[]),r.push(t)}}function jy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=H=>s?H:Lt(H)||s===!1||s===0?un(H,1):un(H);let f,p,g,_,S=!1,k=!1;if(je(t)?(p=()=>t.value,S=Lt(t)):qn(t)?(p=()=>h(t),S=!0):oe(t)?(k=!0,S=t.some(H=>qn(H)||Lt(H)),p=()=>t.map(H=>{if(je(H))return H.value;if(qn(H))return h(H);if(pe(H))return c?c(H,2):H()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){tr();try{g()}finally{nr()}}const H=hr;hr=f;try{return c?c(t,3,[_]):t(_)}finally{hr=H}}:p=Jt,e&&s){const H=p,W=s===!0?1/0:s;p=()=>un(H(),W)}const O=jd(),B=()=>{f.stop(),O&&O.active&&lc(O.effects,f)};if(i&&e){const H=e;e=(...W)=>{H(...W),B()}}let j=k?new Array(t.length).fill(Ji):Ji;const F=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const W=f.run();if(s||S||(k?W.some((q,T)=>Hn(q,j[T])):Hn(W,j))){g&&g();const q=hr;hr=f;try{const T=[W,j===Ji?void 0:k&&j[0]===Ji?[]:j,_];c?c(e,3,T):e(...T),j=W}finally{hr=q}}}else f.run()};return l&&l(F),f=new $d(p),f.scheduler=o?()=>o(F,!1):F,_=H=>By(H,!1,f),g=f.onStop=()=>{const H=wo.get(f);if(H){if(c)c(H,4);else for(const W of H)W();wo.delete(f)}},e?r?F(!0):j=f.run():o?o(F.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function un(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))un(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)un(t[r],e,n);else if(Zo(t)||Hr(t))t.forEach(r=>{un(r,e,n)});else if(Nd(t)){for(const r in t)un(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&un(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gi(t,e,n,r){try{return r?t(...r):t()}catch(s){ia(s,e,n)}}function tn(t,e,n,r){if(pe(t)){const s=gi(t,e,n,r);return s&&Dd(s)&&s.catch(i=>{ia(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function ia(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){tr(),gi(i,null,10,[t,c,h]),nr();return}}$y(t,n,s,r,o)}function $y(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let Gt=-1;const qr=[];let On=null,Mr=0;const op=Promise.resolve();let Io=null;function mi(t){const e=Io||op;return t?e.then(this?t.bind(this):t):e}function Hy(t){let e=Gt+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=Xs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vc(t){if(!(t.flags&1)){const e=Xs(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=Xs(n)?vt.push(t):vt.splice(Hy(e),0,t),t.flags|=1,ap()}}function ap(){Io||(Io=op.then(cp))}function qy(t){oe(t)?qr.push(...t):On&&t.id===-1?On.splice(Mr+1,0,t):t.flags&1||(qr.push(t),t.flags|=1),ap()}function mh(t,e,n=Gt+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function lp(t){if(qr.length){const e=[...new Set(qr)].sort((n,r)=>Xs(n)-Xs(r));if(qr.length=0,On){On.push(...e);return}for(On=e,Mr=0;Mr<On.length;Mr++){const n=On[Mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}On=null,Mr=0}}const Xs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cp(t){try{for(Gt=0;Gt<vt.length;Gt++){const e=vt[Gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gt<vt.length;Gt++){const e=vt[Gt];e&&(e.flags&=-2)}Gt=-1,vt.length=0,lp(),Io=null,(vt.length||qr.length)&&cp()}}let We=null,up=null;function Ao(t){const e=We;return We=t,up=t&&t.type.__scopeId||null,e}function Dn(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=Ao(e);let o;try{o=t(...s)}finally{Ao(i),r._d&&Sh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _h(t,e){if(We===null)return t;const n=ca(We),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ce]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&un(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(tr(),tn(c,n,8,[t.el,l,t,e]),nr())}}const Wy=Symbol("_vte"),Ky=t=>t.__isTeleport;function Ec(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ec(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function hp(t,e){return pe(t)?pt({name:t.name},e,{setup:t}):t}function fp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bo(t,e,n,r,s=!1){if(oe(t)){t.forEach((S,k)=>bo(S,e&&(oe(e)?e[k]:e),n,r,s));return}if(Wr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&bo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ca(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,g=Ie(p),_=p===Ce?()=>!1:S=>Re(g,S);if(h!=null&&h!==c&&(qe(h)?(f[h]=null,_(h)&&(p[h]=null)):je(h)&&(h.value=null)),pe(c))gi(c,l,12,[o,f]);else{const S=qe(c),k=je(c);if(S||k){const O=()=>{if(t.f){const B=S?_(c)?p[c]:f[c]:c.value;s?oe(B)&&lc(B,i):oe(B)?B.includes(i)||B.push(i):S?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else S?(f[c]=o,_(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(f[t.k]=o))};o?(O.id=-1,St(O,n)):O()}}}na().requestIdleCallback;na().cancelIdleCallback;const Wr=t=>!!t.type.__asyncLoader,dp=t=>t.type.__isKeepAlive;function pp(t,e){mp(t,"a",e)}function gp(t,e){mp(t,"da",e)}function mp(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(oa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dp(s.parent.vnode)&&zy(r,e,n,s),s=s.parent}}function zy(t,e,n,r){const s=oa(e,t,r,!0);yp(()=>{lc(r[e],s)},n)}function oa(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{tr();const l=_i(n),c=tn(e,n,t,o);return l(),nr(),c});return r?s.unshift(i):s.push(i),i}}const vn=t=>(e,n=Qe)=>{(!ti||t==="sp")&&oa(t,(...r)=>e(...r),n)},Gy=vn("bm"),Tc=vn("m"),Qy=vn("bu"),Jy=vn("u"),_p=vn("bum"),yp=vn("um"),Yy=vn("sp"),Xy=vn("rtg"),Zy=vn("rtc");function ev(t,e=Qe){oa("ec",t,e)}const tv="components";function vp(t,e){return rv(tv,t,!0,e)||t}const nv=Symbol.for("v-ndc");function rv(t,e,n=!0,r=!1){const s=We||Qe;if(s){const i=s.type;{const l=Gv(i,!1);if(l&&(l===e||l===Ft(e)||l===ta(Ft(e))))return i}const o=yh(s[t]||i[t],e)||yh(s.appContext[t],e);return!o&&r?i:o}}function yh(t,e){return t&&(t[e]||t[Ft(e)]||t[ta(Ft(e))])}function Ya(t,e,n,r){let s;const i=n,o=oe(t);if(o||qe(t)){const l=o&&qn(t);let c=!1;l&&(c=!Lt(t),t=sa(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?ft(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function sv(t,e,n={},r,s){if(We.ce||We.parent&&Wr(We.parent)&&We.parent.ce)return Mt(),So(Et,null,[Le("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Mt();const o=i&&Ep(i(n)),l=n.key||o&&o.key,c=So(Et,{key:(l&&!Ht(l)?l:`_${e}`)+""},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Ep(t){return t.some(e=>ei(e)?!(e.type===Yn||e.type===Et&&!Ep(e.children)):!0)?t:null}const wl=t=>t?Bp(t)?ca(t):wl(t.parent):null,Bs=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wl(t.parent),$root:t=>wl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wp(t),$forceUpdate:t=>t.f||(t.f=()=>{vc(t.update)}),$nextTick:t=>t.n||(t.n=mi.bind(t.proxy)),$watch:t=>Sv.bind(t)}),Xa=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),iv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xa(r,e))return o[e]=1,r[e];if(s!==Ce&&Re(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return o[e]=3,i[e];if(n!==Ce&&Re(n,e))return o[e]=4,n[e];Il&&(o[e]=0)}}const f=Bs[e];let p,g;if(f)return e==="$attrs"&&ht(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xa(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ce&&Re(t,o)||Xa(e,o)||(l=i[0])&&Re(l,o)||Re(r,o)||Re(Bs,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function ov(t){const e=wp(t),n=t.proxy,r=t.ctx;Il=!1,e.beforeCreate&&Eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:S,activated:k,deactivated:O,beforeDestroy:B,beforeUnmount:j,destroyed:F,unmounted:H,render:W,renderTracked:q,renderTriggered:T,errorCaptured:y,serverPrefetch:v,expose:A,inheritAttrs:b,components:R,directives:w,filters:Je}=e;if(h&&av(h,r,null),o)for(const le in o){const me=o[le];pe(me)&&(r[le]=me.bind(n))}if(s){const le=s.call(n,n);De(le)&&(t.data=pi(le))}if(Il=!0,i)for(const le in i){const me=i[le],bt=pe(me)?me.bind(n,n):pe(me.get)?me.get.bind(n,n):Jt,Ut=!pe(me)&&pe(me.set)?me.set.bind(n):Jt,Dt=tt({get:bt,set:Ut});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:xe=>Dt.value=xe})}if(l)for(const le in l)Tp(l[le],r,n,le);if(c){const le=pe(c)?c.call(n):c;Reflect.ownKeys(le).forEach(me=>{io(me,le[me])})}f&&Eh(f,t,"c");function ke(le,me){oe(me)?me.forEach(bt=>le(bt.bind(n))):me&&le(me.bind(n))}if(ke(Gy,p),ke(Tc,g),ke(Qy,_),ke(Jy,S),ke(pp,k),ke(gp,O),ke(ev,y),ke(Zy,q),ke(Xy,T),ke(_p,j),ke(yp,H),ke(Yy,v),oe(A))if(A.length){const le=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(le,me,{get:()=>n[me],set:bt=>n[me]=bt})})}else t.exposed||(t.exposed={});W&&t.render===Jt&&(t.render=W),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),w&&(t.directives=w),v&&fp(t)}function av(t,e,n=Jt){oe(t)&&(t=Al(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=kt(s.from||r,s.default,!0):i=kt(s.from||r):i=kt(s),je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eh(t,e,n){tn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tp(t,e,n,r){let s=r.includes(".")?xp(n,r):()=>n[r];if(qe(t)){const i=e[t];pe(i)&&Kr(s,i)}else if(pe(t))Kr(s,t.bind(n));else if(De(t))if(oe(t))t.forEach(i=>Tp(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Kr(s,i,t)}}function wp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ro(c,h,o,!0)),Ro(c,e,o)),De(e)&&i.set(e,c),c}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=lv[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const lv={data:Th,props:wh,emits:wh,methods:Vs,computed:Vs,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Vs,directives:Vs,watch:uv,provide:Th,inject:cv};function Th(t,e){return e?t?function(){return pt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function cv(t,e){return Vs(Al(t),Al(e))}function Al(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?pt(Object.create(null),t,e):e}function wh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:pt(Object.create(null),vh(t),vh(e??{})):e}function uv(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function Ip(){return{app:null,config:{isNativeTag:Z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hv=0;function fv(t,e){return function(r,s=null){pe(r)||(r=pt({},r)),s!=null&&!De(s)&&(s=null);const i=Ip(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:hv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bc,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(h,...p)):pe(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||Le(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,h._container=f,f.__vue_app__=h,ca(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=mr;mr=h;try{return f()}finally{mr=p}}};return h}}let mr=null;function io(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Qe||We;if(r||mr){const s=mr?mr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function dv(){return!!(Qe||We||mr)}const Ap={},bp=()=>Object.create(Ap),Rp=t=>Object.getPrototypeOf(t)===Ap;function pv(t,e,n,r=!1){const s={},i=bp();t.propsDefaults=Object.create(null),Sp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ie(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(aa(t.emitsOptions,g))continue;const _=e[g];if(c)if(Re(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const S=Ft(g);s[S]=bl(c,l,S,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Sp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=Sr(p))===p||!Re(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=bl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&cn(t.attrs,"set","")}function Sp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ls(c))continue;const h=e[c];let f;s&&Re(s,f=Ft(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:aa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ie(n),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=bl(s,c,p,h[p],t,!Re(h,p))}}return o}function bl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Re(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=_i(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}const mv=new WeakMap;function Pp(t,e,n=!1){const r=n?mv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const f=p=>{c=!0;const[g,_]=Pp(p,e,!0);pt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return De(t)&&r.set(t,$r),$r;if(oe(i))for(let f=0;f<i.length;f++){const p=Ft(i[f]);Ih(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Ft(f);if(Ih(p)){const g=i[f],_=o[p]=oe(g)||pe(g)?{type:g}:pt({},g),S=_.type;let k=!1,O=!0;if(oe(S))for(let B=0;B<S.length;++B){const j=S[B],F=pe(j)&&j.name;if(F==="Boolean"){k=!0;break}else F==="String"&&(O=!1)}else k=pe(S)&&S.name==="Boolean";_[0]=k,_[1]=O,(k||Re(_,"default"))&&l.push(p)}}const h=[o,l];return De(t)&&r.set(t,h),h}function Ih(t){return t[0]!=="$"&&!Ls(t)}const Cp=t=>t[0]==="_"||t==="$stable",wc=t=>oe(t)?t.map(Qt):[Qt(t)],_v=(t,e,n)=>{if(e._n)return e;const r=Dn((...s)=>wc(e(...s)),n);return r._c=!1,r},kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cp(s))continue;const i=t[s];if(pe(i))e[s]=_v(s,i,r);else if(i!=null){const o=wc(i);e[s]=()=>o}}},Op=(t,e)=>{const n=wc(e);t.slots.default=()=>n},Dp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},yv=(t,e,n)=>{const r=t.slots=bp();if(t.vnode.shapeFlag&32){const s=e._;s?(Dp(r,e,n),n&&xd(r,"_",s,!0)):kp(e,r)}else e&&Op(t,e)},vv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Dp(s,e,n):(i=!e.$stable,kp(e,s)),o=e}else e&&(Op(t,e),o={default:1});if(i)for(const l in s)!Cp(l)&&o[l]==null&&delete s[l]},St=Nv;function Ev(t){return Tv(t)}function Tv(t,e){const n=na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Jt,insertStaticContent:S}=t,k=(E,I,P,N=null,M=null,x=null,Q=void 0,z=null,K=!!I.dynamicChildren)=>{if(E===I)return;E&&!ks(E,I)&&(N=V(E),xe(E,M,x,!0),E=null),I.patchFlag===-2&&(K=!1,I.dynamicChildren=null);const{type:$,ref:se,shapeFlag:Y}=I;switch($){case la:O(E,I,P,N);break;case Yn:B(E,I,P,N);break;case oo:E==null&&j(I,P,N,Q);break;case Et:R(E,I,P,N,M,x,Q,z,K);break;default:Y&1?W(E,I,P,N,M,x,Q,z,K):Y&6?w(E,I,P,N,M,x,Q,z,K):(Y&64||Y&128)&&$.process(E,I,P,N,M,x,Q,z,K,ee)}se!=null&&M&&bo(se,E&&E.ref,x,I||E,!I)},O=(E,I,P,N)=>{if(E==null)r(I.el=l(I.children),P,N);else{const M=I.el=E.el;I.children!==E.children&&h(M,I.children)}},B=(E,I,P,N)=>{E==null?r(I.el=c(I.children||""),P,N):I.el=E.el},j=(E,I,P,N)=>{[E.el,E.anchor]=S(E.children,I,P,N,E.el,E.anchor)},F=({el:E,anchor:I},P,N)=>{let M;for(;E&&E!==I;)M=g(E),r(E,P,N),E=M;r(I,P,N)},H=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=g(E),s(E),E=P;s(I)},W=(E,I,P,N,M,x,Q,z,K)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),E==null?q(I,P,N,M,x,Q,z,K):v(E,I,M,x,Q,z,K)},q=(E,I,P,N,M,x,Q,z)=>{let K,$;const{props:se,shapeFlag:Y,transition:ne,dirs:ae}=E;if(K=E.el=o(E.type,x,se&&se.is,se),Y&8?f(K,E.children):Y&16&&y(E.children,K,null,N,M,Za(E,x),Q,z),ae&&lr(E,null,N,"created"),T(K,E,E.scopeId,Q,N),se){for(const ge in se)ge!=="value"&&!Ls(ge)&&i(K,ge,null,se[ge],x,N);"value"in se&&i(K,"value",null,se.value,x),($=se.onVnodeBeforeMount)&&zt($,N,E)}ae&&lr(E,null,N,"beforeMount");const ie=wv(M,ne);ie&&ne.beforeEnter(K),r(K,I,P),(($=se&&se.onVnodeMounted)||ie||ae)&&St(()=>{$&&zt($,N,E),ie&&ne.enter(K),ae&&lr(E,null,N,"mounted")},M)},T=(E,I,P,N,M)=>{if(P&&_(E,P),N)for(let x=0;x<N.length;x++)_(E,N[x]);if(M){let x=M.subTree;if(I===x||Lp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const Q=M.vnode;T(E,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},y=(E,I,P,N,M,x,Q,z,K=0)=>{for(let $=K;$<E.length;$++){const se=E[$]=z?Vn(E[$]):Qt(E[$]);k(null,se,I,P,N,M,x,Q,z)}},v=(E,I,P,N,M,x,Q)=>{const z=I.el=E.el;let{patchFlag:K,dynamicChildren:$,dirs:se}=I;K|=E.patchFlag&16;const Y=E.props||Ce,ne=I.props||Ce;let ae;if(P&&cr(P,!1),(ae=ne.onVnodeBeforeUpdate)&&zt(ae,P,I,E),se&&lr(I,E,P,"beforeUpdate"),P&&cr(P,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&f(z,""),$?A(E.dynamicChildren,$,z,P,N,Za(I,M),x):Q||me(E,I,z,null,P,N,Za(I,M),x,!1),K>0){if(K&16)b(z,Y,ne,P,M);else if(K&2&&Y.class!==ne.class&&i(z,"class",null,ne.class,M),K&4&&i(z,"style",Y.style,ne.style,M),K&8){const ie=I.dynamicProps;for(let ge=0;ge<ie.length;ge++){const ve=ie[ge],it=Y[ve],Ye=ne[ve];(Ye!==it||ve==="value")&&i(z,ve,it,Ye,M,P)}}K&1&&E.children!==I.children&&f(z,I.children)}else!Q&&$==null&&b(z,Y,ne,P,M);((ae=ne.onVnodeUpdated)||se)&&St(()=>{ae&&zt(ae,P,I,E),se&&lr(I,E,P,"updated")},N)},A=(E,I,P,N,M,x,Q)=>{for(let z=0;z<I.length;z++){const K=E[z],$=I[z],se=K.el&&(K.type===Et||!ks(K,$)||K.shapeFlag&70)?p(K.el):P;k(K,$,se,null,N,M,x,Q,!0)}},b=(E,I,P,N,M)=>{if(I!==P){if(I!==Ce)for(const x in I)!Ls(x)&&!(x in P)&&i(E,x,I[x],null,M,N);for(const x in P){if(Ls(x))continue;const Q=P[x],z=I[x];Q!==z&&x!=="value"&&i(E,x,z,Q,M,N)}"value"in P&&i(E,"value",I.value,P.value,M)}},R=(E,I,P,N,M,x,Q,z,K)=>{const $=I.el=E?E.el:l(""),se=I.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:ae}=I;ae&&(z=z?z.concat(ae):ae),E==null?(r($,P,N),r(se,P,N),y(I.children||[],P,se,M,x,Q,z,K)):Y>0&&Y&64&&ne&&E.dynamicChildren?(A(E.dynamicChildren,ne,P,M,x,Q,z),(I.key!=null||M&&I===M.subTree)&&Vp(E,I,!0)):me(E,I,P,se,M,x,Q,z,K)},w=(E,I,P,N,M,x,Q,z,K)=>{I.slotScopeIds=z,E==null?I.shapeFlag&512?M.ctx.activate(I,P,N,Q,K):Je(I,P,N,M,x,Q,K):wt(E,I,K)},Je=(E,I,P,N,M,x,Q)=>{const z=E.component=$v(E,N,M);if(dp(E)&&(z.ctx.renderer=ee),qv(z,!1,Q),z.asyncDep){if(M&&M.registerDep(z,ke,Q),!E.el){const K=z.subTree=Le(Yn);B(null,K,I,P)}}else ke(z,E,I,P,M,x,Q)},wt=(E,I,P)=>{const N=I.component=E.component;if(Dv(E,I,P))if(N.asyncDep&&!N.asyncResolved){le(N,I,P);return}else N.next=I,N.update();else I.el=E.el,N.vnode=I},ke=(E,I,P,N,M,x,Q)=>{const z=()=>{if(E.isMounted){let{next:Y,bu:ne,u:ae,parent:ie,vnode:ge}=E;{const ot=Np(E);if(ot){Y&&(Y.el=ge.el,le(E,Y,Q)),ot.asyncDep.then(()=>{E.isUnmounted||z()});return}}let ve=Y,it;cr(E,!1),Y?(Y.el=ge.el,le(E,Y,Q)):Y=ge,ne&&so(ne),(it=Y.props&&Y.props.onVnodeBeforeUpdate)&&zt(it,ie,Y,ge),cr(E,!0);const Ye=bh(E),Vt=E.subTree;E.subTree=Ye,k(Vt,Ye,p(Vt.el),V(Vt),E,M,x),Y.el=Ye.el,ve===null&&Vv(E,Ye.el),ae&&St(ae,M),(it=Y.props&&Y.props.onVnodeUpdated)&&St(()=>zt(it,ie,Y,ge),M)}else{let Y;const{el:ne,props:ae}=I,{bm:ie,m:ge,parent:ve,root:it,type:Ye}=E,Vt=Wr(I);cr(E,!1),ie&&so(ie),!Vt&&(Y=ae&&ae.onVnodeBeforeMount)&&zt(Y,ve,I),cr(E,!0);{it.ce&&it.ce._injectChildStyle(Ye);const ot=E.subTree=bh(E);k(null,ot,P,N,E,M,x),I.el=ot.el}if(ge&&St(ge,M),!Vt&&(Y=ae&&ae.onVnodeMounted)){const ot=I;St(()=>zt(Y,ve,ot),M)}(I.shapeFlag&256||ve&&Wr(ve.vnode)&&ve.vnode.shapeFlag&256)&&E.a&&St(E.a,M),E.isMounted=!0,I=P=N=null}};E.scope.on();const K=E.effect=new $d(z);E.scope.off();const $=E.update=K.run.bind(K),se=E.job=K.runIfDirty.bind(K);se.i=E,se.id=E.uid,K.scheduler=()=>vc(se),cr(E,!0),$()},le=(E,I,P)=>{I.component=E;const N=E.vnode.props;E.vnode=I,E.next=null,gv(E,I.props,N,P),vv(E,I.children,P),tr(),mh(E),nr()},me=(E,I,P,N,M,x,Q,z,K=!1)=>{const $=E&&E.children,se=E?E.shapeFlag:0,Y=I.children,{patchFlag:ne,shapeFlag:ae}=I;if(ne>0){if(ne&128){Ut($,Y,P,N,M,x,Q,z,K);return}else if(ne&256){bt($,Y,P,N,M,x,Q,z,K);return}}ae&8?(se&16&&It($,M,x),Y!==$&&f(P,Y)):se&16?ae&16?Ut($,Y,P,N,M,x,Q,z,K):It($,M,x,!0):(se&8&&f(P,""),ae&16&&y(Y,P,N,M,x,Q,z,K))},bt=(E,I,P,N,M,x,Q,z,K)=>{E=E||$r,I=I||$r;const $=E.length,se=I.length,Y=Math.min($,se);let ne;for(ne=0;ne<Y;ne++){const ae=I[ne]=K?Vn(I[ne]):Qt(I[ne]);k(E[ne],ae,P,null,M,x,Q,z,K)}$>se?It(E,M,x,!0,!1,Y):y(I,P,N,M,x,Q,z,K,Y)},Ut=(E,I,P,N,M,x,Q,z,K)=>{let $=0;const se=I.length;let Y=E.length-1,ne=se-1;for(;$<=Y&&$<=ne;){const ae=E[$],ie=I[$]=K?Vn(I[$]):Qt(I[$]);if(ks(ae,ie))k(ae,ie,P,null,M,x,Q,z,K);else break;$++}for(;$<=Y&&$<=ne;){const ae=E[Y],ie=I[ne]=K?Vn(I[ne]):Qt(I[ne]);if(ks(ae,ie))k(ae,ie,P,null,M,x,Q,z,K);else break;Y--,ne--}if($>Y){if($<=ne){const ae=ne+1,ie=ae<se?I[ae].el:N;for(;$<=ne;)k(null,I[$]=K?Vn(I[$]):Qt(I[$]),P,ie,M,x,Q,z,K),$++}}else if($>ne)for(;$<=Y;)xe(E[$],M,x,!0),$++;else{const ae=$,ie=$,ge=new Map;for($=ie;$<=ne;$++){const Xe=I[$]=K?Vn(I[$]):Qt(I[$]);Xe.key!=null&&ge.set(Xe.key,$)}let ve,it=0;const Ye=ne-ie+1;let Vt=!1,ot=0;const wn=new Array(Ye);for($=0;$<Ye;$++)wn[$]=0;for($=ae;$<=Y;$++){const Xe=E[$];if(it>=Ye){xe(Xe,M,x,!0);continue}let Nt;if(Xe.key!=null)Nt=ge.get(Xe.key);else for(ve=ie;ve<=ne;ve++)if(wn[ve-ie]===0&&ks(Xe,I[ve])){Nt=ve;break}Nt===void 0?xe(Xe,M,x,!0):(wn[Nt-ie]=$+1,Nt>=ot?ot=Nt:Vt=!0,k(Xe,I[Nt],P,null,M,x,Q,z,K),it++)}const ms=Vt?Iv(wn):$r;for(ve=ms.length-1,$=Ye-1;$>=0;$--){const Xe=ie+$,Nt=I[Xe],Di=Xe+1<se?I[Xe+1].el:N;wn[$]===0?k(null,Nt,P,Di,M,x,Q,z,K):Vt&&(ve<0||$!==ms[ve]?Dt(Nt,P,Di,2):ve--)}}},Dt=(E,I,P,N,M=null)=>{const{el:x,type:Q,transition:z,children:K,shapeFlag:$}=E;if($&6){Dt(E.component.subTree,I,P,N);return}if($&128){E.suspense.move(I,P,N);return}if($&64){Q.move(E,I,P,ee);return}if(Q===Et){r(x,I,P);for(let Y=0;Y<K.length;Y++)Dt(K[Y],I,P,N);r(E.anchor,I,P);return}if(Q===oo){F(E,I,P);return}if(N!==2&&$&1&&z)if(N===0)z.beforeEnter(x),r(x,I,P),St(()=>z.enter(x),M);else{const{leave:Y,delayLeave:ne,afterLeave:ae}=z,ie=()=>r(x,I,P),ge=()=>{Y(x,()=>{ie(),ae&&ae()})};ne?ne(x,ie,ge):ge()}else r(x,I,P)},xe=(E,I,P,N=!1,M=!1)=>{const{type:x,props:Q,ref:z,children:K,dynamicChildren:$,shapeFlag:se,patchFlag:Y,dirs:ne,cacheIndex:ae}=E;if(Y===-2&&(M=!1),z!=null&&bo(z,null,P,E,!0),ae!=null&&(I.renderCache[ae]=void 0),se&256){I.ctx.deactivate(E);return}const ie=se&1&&ne,ge=!Wr(E);let ve;if(ge&&(ve=Q&&Q.onVnodeBeforeUnmount)&&zt(ve,I,E),se&6)Kt(E.component,P,N);else{if(se&128){E.suspense.unmount(P,N);return}ie&&lr(E,null,I,"beforeUnmount"),se&64?E.type.remove(E,I,P,ee,N):$&&!$.hasOnce&&(x!==Et||Y>0&&Y&64)?It($,I,P,!1,!0):(x===Et&&Y&384||!M&&se&16)&&It(K,I,P),N&&Me(E)}(ge&&(ve=Q&&Q.onVnodeUnmounted)||ie)&&St(()=>{ve&&zt(ve,I,E),ie&&lr(E,null,I,"unmounted")},P)},Me=E=>{const{type:I,el:P,anchor:N,transition:M}=E;if(I===Et){Tn(P,N);return}if(I===oo){H(E);return}const x=()=>{s(P),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:z}=M,K=()=>Q(P,x);z?z(E.el,x,K):K()}else x()},Tn=(E,I)=>{let P;for(;E!==I;)P=g(E),s(E),E=P;s(I)},Kt=(E,I,P)=>{const{bum:N,scope:M,job:x,subTree:Q,um:z,m:K,a:$}=E;Ah(K),Ah($),N&&so(N),M.stop(),x&&(x.flags|=8,xe(Q,E,I,P)),z&&St(z,I),St(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},It=(E,I,P,N=!1,M=!1,x=0)=>{for(let Q=x;Q<E.length;Q++)xe(E[Q],I,P,N,M)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=g(E.anchor||E.el),P=I&&I[Wy];return P?g(P):I};let X=!1;const J=(E,I,P)=>{E==null?I._vnode&&xe(I._vnode,null,null,!0):k(I._vnode||null,E,I,null,null,null,P),I._vnode=E,X||(X=!0,mh(),lp(),X=!1)},ee={p:k,um:xe,m:Dt,r:Me,mt:Je,mc:y,pc:me,pbc:A,n:V,o:t};return{render:J,hydrate:void 0,createApp:fv(J)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Vn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Vp(o,l)),l.type===la&&(l.el=o.el)}}function Iv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Np(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Np(e)}function Ah(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Av=Symbol.for("v-scx"),bv=()=>kt(Av);function Rv(t,e){return Ic(t,null,e)}function Kr(t,e,n){return Ic(t,e,n)}function Ic(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,l=pt({},n),c=e&&r||!e&&i!=="post";let h;if(ti){if(i==="sync"){const _=bv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Jt,_.resume=Jt,_.pause=Jt,_}}const f=Qe;l.call=(_,S,k)=>tn(_,f,S,k);let p=!1;i==="post"?l.scheduler=_=>{St(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,S)=>{S?_():vc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=jy(t,e,l);return ti&&(h?h.push(g):c&&g()),g}function Sv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?xp(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=_i(this),l=Ic(s,i.bind(r),n);return o(),l}function xp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Pv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${Sr(e)}Modifiers`];function Cv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&Pv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>qe(f)?f.trim():f)),o.number&&(s=n.map(Eo)));let l,c=r[l=Ka(e)]||r[l=Ka(Ft(e))];!c&&i&&(c=r[l=Ka(Sr(e))]),c&&tn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(h,t,6,s)}}function Mp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=h=>{const f=Mp(h,e,!0);f&&(l=!0,pt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>o[c]=null):pt(o,i),De(t)&&r.set(t,o),o)}function aa(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Sr(e))||Re(t,e))}function bh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:S,inheritAttrs:k}=t,O=Ao(t);let B,j;try{if(n.shapeFlag&4){const H=s||r,W=H;B=Qt(h.call(W,H,f,p,_,g,S)),j=l}else{const H=e;B=Qt(H.length>1?H(p,{attrs:l,slots:o,emit:c}):H(p,null)),j=e.props?l:kv(l)}}catch(H){js.length=0,ia(H,t,1),B=Le(Yn)}let F=B;if(j&&k!==!1){const H=Object.keys(j),{shapeFlag:W}=F;H.length&&W&7&&(i&&H.some(ac)&&(j=Ov(j,i)),F=Xr(F,j,!1,!0))}return n.dirs&&(F=Xr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Ec(F,n.transition),B=F,Ao(O),B}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},Ov=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Dv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rh(r,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!aa(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rh(r,o,h):!0:!!o;return!1}function Rh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lp=t=>t.__isSuspense;function Nv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):qy(t)}const Et=Symbol.for("v-fgt"),la=Symbol.for("v-txt"),Yn=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),js=[];let Pt=null;function Mt(t=!1){js.push(Pt=t?null:[])}function xv(){js.pop(),Pt=js[js.length-1]||null}let Zs=1;function Sh(t,e=!1){Zs+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function Fp(t){return t.dynamicChildren=Zs>0?Pt||$r:null,xv(),Zs>0&&Pt&&Pt.push(t),t}function Pn(t,e,n,r,s,i){return Fp(ce(t,e,n,r,s,i,!0))}function So(t,e,n,r,s){return Fp(Le(t,e,n,r,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const Up=({key:t})=>t??null,ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||je(t)||pe(t)?{i:We,r:t,k:e,f:!!n}:t:null);function ce(t,e=null,n=null,r=0,s=null,i=t===Et?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Up(e),ref:e&&ao(e),scopeId:up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return l?(Ac(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Zs>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Le=Mv;function Mv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nv)&&(t=Yn),ei(t)){const l=Xr(t,e,!0);return n&&Ac(l,n),Zs>0&&!i&&Pt&&(l.shapeFlag&6?Pt[Pt.indexOf(t)]=l:Pt.push(l)),l.patchFlag=-2,l}if(Qv(t)&&(t=t.__vccOpts),e){e=Lv(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=vr(l)),De(c)&&(_c(c)&&!oe(c)&&(c=pt({},c)),e.style=uc(c))}const o=qe(t)?1:Lp(t)?128:Ky(t)?64:De(t)?4:pe(t)?2:0;return ce(t,e,n,r,s,o,i,!0)}function Lv(t){return t?_c(t)||Rp(t)?pt({},t):t:null}function Xr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Uv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Up(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(ao(e)):[i,ao(e)]:ao(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xr(t.ssContent),ssFallback:t.ssFallback&&Xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ec(f,c.clone(f)),f}function Cn(t=" ",e=0){return Le(la,null,t,e)}function UP(t,e){const n=Le(oo,null,t);return n.staticCount=e,n}function Fv(t="",e=!1){return e?(Mt(),So(Yn,null,t)):Le(Yn,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Le(Yn):oe(t)?Le(Et,null,t.slice()):ei(t)?Vn(t):Le(la,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xr(t)}function Ac(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ac(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rp(e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[Cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vr([e.class,r.class]));else if(s==="style")e.style=uc([e.style,r.style]);else if(Xo(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){tn(t,e,7,[n,r])}const Bv=Ip();let jv=0;function $v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bv,i={uid:jv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pp(r,s),emitsOptions:Mp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cv.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const Hv=()=>Qe||We;let Po,Rl;{const t=na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>Qe=n),Rl=e("__VUE_SSR_SETTERS__",n=>ti=n)}const _i=t=>{const e=Qe;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},Ph=()=>{Qe&&Qe.scope.off(),Po(null)};function Bp(t){return t.vnode.shapeFlag&4}let ti=!1;function qv(t,e=!1,n=!1){e&&Rl(e);const{props:r,children:s}=t.vnode,i=Bp(t);pv(t,r,i,e),yv(t,s,n);const o=i?Wv(t,e):void 0;return e&&Rl(!1),o}function Wv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iv);const{setup:r}=n;if(r){tr();const s=t.setupContext=r.length>1?zv(t):null,i=_i(t),o=gi(r,t,0,[t.props,s]),l=Dd(o);if(nr(),i(),(l||t.sp)&&!Wr(t)&&fp(t),l){if(o.then(Ph,Ph),e)return o.then(c=>{Ch(t,c)}).catch(c=>{ia(c,t,0)});t.asyncDep=o}else Ch(t,o)}else jp(t)}function Ch(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=ip(e)),jp(t)}function jp(t,e,n){const r=t.type;t.render||(t.render=r.render||Jt);{const s=_i(t);tr();try{ov(t)}finally{nr(),s()}}}const Kv={get(t,e){return ht(t,"get",""),t[e]}};function zv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kv),slots:t.slots,emit:t.emit,expose:e}}function ca(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ip(yc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function Gv(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function Qv(t){return pe(t)&&"__vccOpts"in t}const tt=(t,e)=>Uy(t,e,ti);function $p(t,e,n){const r=arguments.length;return r===2?De(e)&&!oe(e)?ei(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),Le(t,e,n))}const bc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sl;const kh=typeof window<"u"&&window.trustedTypes;if(kh)try{Sl=kh.createPolicy("vue",{createHTML:t=>t})}catch{}const Hp=Sl?t=>Sl.createHTML(t):t=>t,Jv="http://www.w3.org/2000/svg",Yv="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,Oh=ln&&ln.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ln.createElementNS(Jv,t):e==="mathml"?ln.createElementNS(Yv,t):n?ln.createElement(t,{is:n}):ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oh.innerHTML=Hp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Oh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zv=Symbol("_vtc");function eE(t,e,n){const r=t[Zv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dh=Symbol("_vod"),tE=Symbol("_vsh"),nE=Symbol(""),rE=/(^|;)\s*display\s*:/;function sE(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&lo(r,l,"")}else for(const o in e)n[o]==null&&lo(r,o,"");for(const o in n)o==="display"&&(i=!0),lo(r,o,n[o])}else if(s){if(e!==n){const o=r[nE];o&&(n+=";"+o),r.cssText=n,i=rE.test(n)}}else e&&t.removeAttribute("style");Dh in t&&(t[Dh]=i?r.display:"",t[tE]&&(r.display="none"))}const Vh=/\s*!important$/;function lo(t,e,n){if(oe(n))n.forEach(r=>lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iE(t,e);Vh.test(n)?t.setProperty(Sr(r),n.replace(Vh,""),"important"):t[r]=n}}const Nh=["Webkit","Moz","ms"],el={};function iE(t,e){const n=el[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return el[e]=r;r=ta(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in t)return el[e]=i}return e}const xh="http://www.w3.org/1999/xlink";function Mh(t,e,n,r,s,i=cy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xh,e.slice(6,e.length)):t.setAttributeNS(xh,e,n):n==null||i&&!Md(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ht(n)?String(n):n)}function Lh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Md(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function dr(t,e,n,r){t.addEventListener(e,n,r)}function oE(t,e,n,r){t.removeEventListener(e,n,r)}const Fh=Symbol("_vei");function aE(t,e,n,r,s=null){const i=t[Fh]||(t[Fh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=lE(e);if(r){const h=i[e]=hE(r,s);dr(t,l,h,c)}else o&&(oE(t,l,o,c),i[e]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function lE(t){let e;if(Uh.test(t)){e={};let r;for(;r=t.match(Uh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let tl=0;const cE=Promise.resolve(),uE=()=>tl||(cE.then(()=>tl=0),tl=Date.now());function hE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(fE(r,n.value),e,5,[r])};return n.value=t,n.attached=uE(),n}function fE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?eE(t,r,o):e==="style"?sE(t,n,r):Xo(e)?ac(e)||aE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pE(t,e,r,o))?(Lh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Lh(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mh(t,e,r,o))};function pE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bh(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bh(e)&&qe(n)?!1:e in t}const Co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>so(e,n):e};function gE(t){t.target.composing=!0}function jh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign"),BP={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zr]=Co(s);const i=r||s.props&&s.props.type==="number";dr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Eo(l)),t[zr](l)}),n&&dr(t,"change",()=>{t.value=t.value.trim()}),e||(dr(t,"compositionstart",gE),dr(t,"compositionend",jh),dr(t,"change",jh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[zr]=Co(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Eo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},$h={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Zo(e);dr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Eo(ko(o)):ko(o));t[zr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,mi(()=>{t._assigning=!1})}),t[zr]=Co(r)},mounted(t,{value:e}){Hh(t,e)},beforeUpdate(t,e,n){t[zr]=Co(n)},updated(t,{value:e}){t._assigning||Hh(t,e)}};function Hh(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!Zo(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ko(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=hy(e,l)>-1}else o.selected=e.has(l);else if(ra(ko(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ko(t){return"_value"in t?t._value:t.value}const mE=["ctrl","shift","alt","meta"],_E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mE.some(n=>t[`${n}Key`]&&!e.includes(n))},yE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=_E[e[o]];if(l&&l(s,e))return}return t(s,...i)})},vE=pt({patchProp:dE},Xv);let qh;function EE(){return qh||(qh=Ev(vE))}const TE=(...t)=>{const e=EE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=IE(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,wE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function IE(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qp;const ua=t=>qp=t,Wp=Symbol();function Pl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var $s;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($s||($s={}));function AE(){const t=Bd(!0),e=t.run(()=>Ge({}));let n=[],r=[];const s=yc({install(i){ua(s),s._a=i,i.provide(Wp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Kp=()=>{};function Wh(t,e,n,r=Kp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&jd()&&fy(s),s}function xr(t,...e){t.slice().forEach(n=>{n(...e)})}const bE=t=>t(),Kh=Symbol(),nl=Symbol();function Cl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Pl(s)&&Pl(r)&&t.hasOwnProperty(n)&&!je(r)&&!qn(r)?t[n]=Cl(s,r):t[n]=r}return t}const RE=Symbol();function SE(t){return!Pl(t)||!t.hasOwnProperty(RE)}const{assign:kn}=Object;function PE(t){return!!(je(t)&&t.effect)}function CE(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const f=xy(n.state.value[t]);return kn(f,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=yc(tt(()=>{ua(n);const _=n._s.get(t);return o[g].call(_,_)})),p),{}))}return c=zp(t,h,e,n,r,!0),c}function zp(t,e,n={},r,s,i){let o;const l=kn({actions:{}},n),c={deep:!0};let h,f,p=[],g=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Ge({});let k;function O(y){let v;h=f=!1,typeof y=="function"?(y(r.state.value[t]),v={type:$s.patchFunction,storeId:t,events:_}):(Cl(r.state.value[t],y),v={type:$s.patchObject,payload:y,storeId:t,events:_});const A=k=Symbol();mi().then(()=>{k===A&&(h=!0)}),f=!0,xr(p,v,r.state.value[t])}const B=i?function(){const{state:v}=n,A=v?v():{};this.$patch(b=>{kn(b,A)})}:Kp;function j(){o.stop(),p=[],g=[],r._s.delete(t)}const F=(y,v="")=>{if(Kh in y)return y[nl]=v,y;const A=function(){ua(r);const b=Array.from(arguments),R=[],w=[];function Je(le){R.push(le)}function wt(le){w.push(le)}xr(g,{args:b,name:A[nl],store:W,after:Je,onError:wt});let ke;try{ke=y.apply(this&&this.$id===t?this:W,b)}catch(le){throw xr(w,le),le}return ke instanceof Promise?ke.then(le=>(xr(R,le),le)).catch(le=>(xr(w,le),Promise.reject(le))):(xr(R,ke),ke)};return A[Kh]=!0,A[nl]=v,A},H={_p:r,$id:t,$onAction:Wh.bind(null,g),$patch:O,$reset:B,$subscribe(y,v={}){const A=Wh(p,y,v.detached,()=>b()),b=o.run(()=>Kr(()=>r.state.value[t],R=>{(v.flush==="sync"?f:h)&&y({storeId:t,type:$s.direct,events:_},R)},kn({},c,v)));return A},$dispose:j},W=pi(H);r._s.set(t,W);const T=(r._a&&r._a.runWithContext||bE)(()=>r._e.run(()=>(o=Bd()).run(()=>e({action:F}))));for(const y in T){const v=T[y];if(je(v)&&!PE(v)||qn(v))i||(S&&SE(v)&&(je(v)?v.value=S[y]:Cl(v,S[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const A=F(v,y);T[y]=A,l.actions[y]=v}}return kn(W,T),kn(Ie(W),T),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:y=>{O(v=>{kn(v,y)})}}),r._p.forEach(y=>{kn(W,o.run(()=>y({store:W,app:r._a,pinia:r,options:l})))}),S&&i&&n.hydrate&&n.hydrate(W.$state,S),h=!0,f=!0,W}/*! #__NO_SIDE_EFFECTS__ */function Gp(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const h=dv();return l=l||(h?kt(Wp,null):null),l&&ua(l),l=qp,l._s.has(r)||(i?zp(r,e,s,l):CE(r,s,l)),l._s.get(r)}return o.$id=r,o}var zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new OE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DE=function(t){const e=Qp(t);return Jp.encodeByteArray(e,!0)},Oo=function(t){return DE(t).replace(/\./g,"")},Yp=function(t){try{return Jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=()=>VE().__FIREBASE_DEFAULTS__,xE=()=>{if(typeof process>"u"||typeof zh>"u")return;const t=zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ME=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yp(t[1]);return e&&JSON.parse(e)},ha=()=>{try{return NE()||xE()||ME()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xp=t=>{var e,n;return(n=(e=ha())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LE=t=>{const e=Xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zp=()=>{var t;return(t=ha())===null||t===void 0?void 0:t.config},eg=t=>{var e;return(e=ha())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oo(JSON.stringify(n)),Oo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function jE(){var t;const e=(t=ha())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $E(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WE(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KE(){return!jE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QE,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?JE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new En(s,l,r)}}function JE(t,e){return t.replace(YE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gh(i)&&Gh(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZE(t,e){const n=new eT(t,e);return n.subscribe.bind(n)}class eT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rl),s.error===void 0&&(s.error=rl),s.complete===void 0&&(s.complete=rl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(t){return t===fr?void 0:t}function sT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const oT={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},aT=ye.INFO,lT={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},cT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=aT,this._logHandler=cT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const uT=(t,e)=>e.some(n=>t instanceof n);let Qh,Jh;function hT(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fT(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tg=new WeakMap,kl=new WeakMap,ng=new WeakMap,sl=new WeakMap,Sc=new WeakMap;function dT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tg.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function pT(t){if(kl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kl.set(t,e)}let Ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ng.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gT(t){Ol=t(Ol)}function mT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(il(this),e,...n);return ng.set(r,e.sort?e.sort():[e]),Kn(r)}:fT().includes(t)?function(...e){return t.apply(il(this),e),Kn(tg.get(this))}:function(...e){return Kn(t.apply(il(this),e))}}function _T(t){return typeof t=="function"?mT(t):(t instanceof IDBTransaction&&pT(t),uT(t,hT())?new Proxy(t,Ol):t)}function Kn(t){if(t instanceof IDBRequest)return dT(t);if(sl.has(t))return sl.get(t);const e=_T(t);return e!==t&&(sl.set(t,e),Sc.set(e,t)),e}const il=t=>Sc.get(t);function yT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const vT=["get","getKey","getAll","getAllKeys","count"],ET=["put","add","delete","clear"],ol=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ET.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ol.set(e,i),i}gT(t=>({...t,get:(e,n,r)=>Yh(e,n)||t.get(e,n,r),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",Xh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Rc("@firebase/app"),IT="@firebase/app-compat",AT="@firebase/analytics-compat",bT="@firebase/analytics",RT="@firebase/app-check-compat",ST="@firebase/app-check",PT="@firebase/auth",CT="@firebase/auth-compat",kT="@firebase/database",OT="@firebase/data-connect",DT="@firebase/database-compat",VT="@firebase/functions",NT="@firebase/functions-compat",xT="@firebase/installations",MT="@firebase/installations-compat",LT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",BT="@firebase/performance-compat",jT="@firebase/remote-config",$T="@firebase/remote-config-compat",HT="@firebase/storage",qT="@firebase/storage-compat",WT="@firebase/firestore",KT="@firebase/vertexai-preview",zT="@firebase/firestore-compat",GT="firebase",QT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="[DEFAULT]",JT={[Dl]:"fire-core",[IT]:"fire-core-compat",[bT]:"fire-analytics",[AT]:"fire-analytics-compat",[ST]:"fire-app-check",[RT]:"fire-app-check-compat",[PT]:"fire-auth",[CT]:"fire-auth-compat",[kT]:"fire-rtdb",[OT]:"fire-data-connect",[DT]:"fire-rtdb-compat",[VT]:"fire-fn",[NT]:"fire-fn-compat",[xT]:"fire-iid",[MT]:"fire-iid-compat",[LT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[BT]:"fire-perf-compat",[jT]:"fire-rc",[$T]:"fire-rc-compat",[HT]:"fire-gcs",[qT]:"fire-gcs-compat",[WT]:"fire-fst",[zT]:"fire-fst-compat",[KT]:"fire-vertex","fire-js":"fire-js",[GT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,YT=new Map,Nl=new Map;function Zh(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Nl.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of Vo.values())Zh(n,t);for(const n of YT.values())Zh(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new yi("app","Firebase",XT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=QT;function rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Zp()),!n)throw zn.create("no-options");const i=Vo.get(s);if(i){if(Do(n,i.options)&&Do(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new iT(s);for(const c of Nl.values())o.addComponent(c);const l=new ZT(n,r,o);return Vo.set(s,l),l}function sg(t=Vl){const e=Vo.get(t);if(!e&&t===Vl&&Zp())return rg();if(!e)throw zn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let s=(r=JT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}Zr(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firebase-heartbeat-database",tw=1,ni="firebase-heartbeat-store";let al=null;function ig(){return al||(al=yT(ew,tw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),al}async function nw(t){try{const n=(await ig()).transaction(ni),r=await n.objectStore(ni).get(og(t));return await n.done,r}catch(e){if(e instanceof En)pn.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function ef(t,e){try{const r=(await ig()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,og(t)),await r.done}catch(n){if(n instanceof En)pn.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function og(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=1024,sw=30*24*60*60*1e3;class iw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=sw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tf(),{heartbeatsToSend:r,unsentEntries:s}=ow(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pn.warn(n),""}}}function tf(){return new Date().toISOString().substring(0,10)}function ow(t,e=rw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nf(t){return Oo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){Zr(new Tr("platform-logger",e=>new TT(e),"PRIVATE")),Zr(new Tr("heartbeat",e=>new iw(e),"PRIVATE")),Gn(Dl,Xh,t),Gn(Dl,Xh,"esm2017"),Gn("fire-js","")}lw("");var cw="firebase",uw="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(cw,uw,"app");var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,ag;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(A,b,R){for(var w=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)w[Je-2]=arguments[Je];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,v){v||(v=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)A[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],b=T.g[2];var R=T.g[3],w=y+(R^v&(b^R))+A[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=R+(b^y&(v^b))+A[1]+3905402710&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(v^R&(y^v))+A[2]+606105819&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(y^b&(R^y))+A[3]+3250441966&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(R^v&(b^R))+A[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=R+(b^y&(v^b))+A[5]+1200080426&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(v^R&(y^v))+A[6]+2821735955&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(y^b&(R^y))+A[7]+4249261313&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(R^v&(b^R))+A[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=R+(b^y&(v^b))+A[9]+2336552879&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(v^R&(y^v))+A[10]+4294925233&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(y^b&(R^y))+A[11]+2304563134&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(R^v&(b^R))+A[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=R+(b^y&(v^b))+A[13]+4254626195&4294967295,R=y+(w<<12&4294967295|w>>>20),w=b+(v^R&(y^v))+A[14]+2792965006&4294967295,b=R+(w<<17&4294967295|w>>>15),w=v+(y^b&(R^y))+A[15]+1236535329&4294967295,v=b+(w<<22&4294967295|w>>>10),w=y+(b^R&(v^b))+A[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(y^v))+A[6]+3225465664&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(R^y))+A[11]+643717713&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^y&(b^R))+A[0]+3921069994&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(v^b))+A[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(y^v))+A[10]+38016083&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(R^y))+A[15]+3634488961&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^y&(b^R))+A[4]+3889429448&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(v^b))+A[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(y^v))+A[14]+3275163606&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(R^y))+A[3]+4107603335&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^y&(b^R))+A[8]+1163531501&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(b^R&(v^b))+A[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=R+(v^b&(y^v))+A[2]+4243563512&4294967295,R=y+(w<<9&4294967295|w>>>23),w=b+(y^v&(R^y))+A[7]+1735328473&4294967295,b=R+(w<<14&4294967295|w>>>18),w=v+(R^y&(b^R))+A[12]+2368359562&4294967295,v=b+(w<<20&4294967295|w>>>12),w=y+(v^b^R)+A[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=R+(y^v^b)+A[8]+2272392833&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^v)+A[11]+1839030562&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^y)+A[14]+4259657740&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^R)+A[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=R+(y^v^b)+A[4]+1272893353&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^v)+A[7]+4139469664&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^y)+A[10]+3200236656&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^R)+A[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=R+(y^v^b)+A[0]+3936430074&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^v)+A[3]+3572445317&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^y)+A[6]+76029189&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(v^b^R)+A[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=R+(y^v^b)+A[12]+3873151461&4294967295,R=y+(w<<11&4294967295|w>>>21),w=b+(R^y^v)+A[15]+530742520&4294967295,b=R+(w<<16&4294967295|w>>>16),w=v+(b^R^y)+A[2]+3299628645&4294967295,v=b+(w<<23&4294967295|w>>>9),w=y+(b^(v|~R))+A[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=R+(v^(y|~b))+A[7]+1126891415&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~v))+A[14]+2878612391&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~y))+A[5]+4237533241&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~R))+A[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=R+(v^(y|~b))+A[3]+2399980690&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~v))+A[10]+4293915773&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~y))+A[1]+2240044497&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~R))+A[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=R+(v^(y|~b))+A[15]+4264355552&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~v))+A[6]+2734768916&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~y))+A[13]+1309151649&4294967295,v=b+(w<<21&4294967295|w>>>11),w=y+(b^(v|~R))+A[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=R+(v^(y|~b))+A[11]+3174756917&4294967295,R=y+(w<<10&4294967295|w>>>22),w=b+(y^(R|~v))+A[2]+718787259&4294967295,b=R+(w<<15&4294967295|w>>>17),w=v+(R^(b|~y))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,A=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=v;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<y;)if(A[b++]=T.charCodeAt(R++),b==this.blockSize){s(this,A),b=0;break}}else for(;R<y;)if(A[b++]=T[R++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var A=0;32>A;A+=8)T[v++]=this.g[y]>>>A&255;return T};function i(T,y){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;for(var v=[],A=!0,b=T.length-1;0<=b;b--){var R=T[b]|0;A&&R==y||(v[b]=R,A=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return O(h(-T));for(var y=[],v=1,A=0;T>=v;A++)y[A]=T/v|0,v*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return O(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),A=p,b=0;b<T.length;b+=8){var R=Math.min(8,T.length-b),w=parseInt(T.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),A=A.j(R).add(h(w))):(A=A.j(v),A=A.add(h(w)))}return A}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var A=this.i(v);T+=(0<=A?A:4294967296+A)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(k(this))return"-"+O(this).toString(T);for(var y=h(Math.pow(T,6)),v=this,A="";;){var b=H(v,y).g;v=B(v,b.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=b,S(v))return R+A;for(;6>R.length;)R="0"+R;A=R+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=B(this,T),k(T)?-1:S(T)?0:1};function O(T){for(var y=T.g.length,v=[],A=0;A<y;A++)v[A]=~T.g[A];return new o(v,~T.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0,b=0;b<=y;b++){var R=A+(this.i(b)&65535)+(T.i(b)&65535),w=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);A=w>>>16,R&=65535,w&=65535,v[b]=w<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(T,y){return T.add(O(y))}t.j=function(T){if(S(this)||S(T))return p;if(k(this))return k(T)?O(this).j(O(T)):O(O(this).j(T));if(k(T))return O(this.j(O(T)));if(0>this.l(_)&&0>T.l(_))return h(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],A=0;A<2*y;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<T.g.length;b++){var R=this.i(A)>>>16,w=this.i(A)&65535,Je=T.i(b)>>>16,wt=T.i(b)&65535;v[2*A+2*b]+=w*wt,j(v,2*A+2*b),v[2*A+2*b+1]+=R*wt,j(v,2*A+2*b+1),v[2*A+2*b+1]+=w*Je,j(v,2*A+2*b+1),v[2*A+2*b+2]+=R*Je,j(v,2*A+2*b+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new o(v,0)};function j(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function F(T,y){this.g=T,this.h=y}function H(T,y){if(S(y))throw Error("division by zero");if(S(T))return new F(p,p);if(k(T))return y=H(O(T),y),new F(O(y.g),O(y.h));if(k(y))return y=H(T,O(y)),new F(O(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=y;0>=A.l(T);)v=W(v),A=W(A);var b=q(v,1),R=q(A,1);for(A=q(A,2),v=q(v,2);!S(A);){var w=R.add(A);0>=w.l(T)&&(b=b.add(v),R=w),A=q(A,1),v=q(v,1)}return y=B(T,b.j(y)),new F(b,y)}for(b=p;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),R=h(v),w=R.j(y);k(w)||0<w.l(T);)v-=A,R=h(v),w=R.j(y);S(R)&&(R=g),b=b.add(R),T=B(T,w)}return new F(b,T)}t.A=function(T){return H(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)&T.i(A);return new o(v,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)|T.i(A);return new o(v,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)^T.i(A);return new o(v,this.h^T.h)};function W(T){for(var y=T.g.length+1,v=[],A=0;A<y;A++)v[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(v,T.h)}function q(T,y){var v=y>>5;y%=32;for(var A=T.g.length-v,b=[],R=0;R<A;R++)b[R]=0<y?T.i(R+v)>>>y|T.i(R+v+1)<<32-y:T.i(R+v);return new o(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ag=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_r=o}).apply(typeof rf<"u"?rf:typeof self<"u"?self:typeof window<"u"?window:{});var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lg,Ns,cg,co,xl,ug,hg,fg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yi=="object"&&Yi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var D=d++;return{value:u(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,D){for(var G=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)G[Pe-2]=arguments[Pe];return u.prototype[C].apply(m,G)}}function k(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function O(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,D=m.length||0;a.length=C+D;for(let G=0;G<D;G++)a[C+G]=m[G]}else a.push(m)}}class B{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var W=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function q(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function T(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){l.setTimeout(()=>{throw a},0)}function w(){var a=bt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Je{constructor(){this.h=this.g=null}add(u,d){const m=wt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var wt=new B(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,bt=new Je,Ut=()=>{const a=l.Promise.resolve(void 0);le=()=>{a.then(Dt)}};var Dt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){R(d)}var u=wt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}me=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function Kt(a,u){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(W){e:{try{H(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:It[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Kt.aa.h.call(this)}}S(Kt,Me);var It={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,u,d,m,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var G=I(a,u,m,C);return-1<G?(u=a[G],d||(u.fa=!1)):(u=new J(u,this.src,D,!!m,C),u.fa=d,a.push(u)),u};function E(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),D;(D=0<=C)&&Array.prototype.splice.call(m,C,1),D&&(ee(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function I(a,u,d,m){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==m)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function M(a,u,d,m,C){if(Array.isArray(u)){for(var D=0;D<u.length;D++)M(a,u[D],d,m,C);return null}return d=ae(d),a&&a[V]?a.K(u,d,h(m)?!!m.capture:!1,C):x(a,u,d,!1,m,C)}function x(a,u,d,m,C,D){if(!u)throw Error("Invalid event type");var G=h(C)?!!C.capture:!!C,Pe=Y(a);if(Pe||(a[P]=Pe=new Te(a)),d=Pe.add(u,d,m,G,D),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Tn||(C=G),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent($(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function a(d){return u.call(a.src,a.listener,d)}const u=se;return a}function z(a,u,d,m,C){if(Array.isArray(u))for(var D=0;D<u.length;D++)z(a,u[D],d,m,C);else m=h(m)?!!m.capture:!!m,d=ae(d),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],d=I(D,d,m,C),-1<d&&(ee(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,d,m,C)),(d=-1<a?u[a]:null)&&K(d))}function K(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])E(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent($(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Y(u))?(E(d,a),d.h==0&&(d.src=null,u[P]=null)):ee(a)}}}function $(a){return a in N?N[a]:N[a]="on"+a}function se(a,u){if(a.da)a=!0;else{u=new Kt(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&K(a),a=d.call(m,u)}return a}function Y(a){return a=a[P],a instanceof Te?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function ie(){xe.call(this),this.i=new Te(this),this.M=this,this.F=null}S(ie,xe),ie.prototype[V]=!0,ie.prototype.removeEventListener=function(a,u,d,m){z(this,a,u,d,m)};function ge(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Me(u,a);else if(u instanceof Me)u.target=u.target||a;else{var C=u;u=new Me(m,a),A(u,C)}if(C=!0,d)for(var D=d.length-1;0<=D;D--){var G=u.g=d[D];C=ve(G,m,!0,u)&&C}if(G=u.g=a,C=ve(G,m,!0,u)&&C,C=ve(G,m,!1,u)&&C,d)for(D=0;D<d.length;D++)G=u.g=d[D],C=ve(G,m,!1,u)&&C}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ee(d[m]);delete a.g[u],a.h--}}this.F=null},ie.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ie.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function ve(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,D=0;D<u.length;++D){var G=u[D];if(G&&!G.da&&G.capture==d){var Pe=G.listener,Ze=G.ha||G.src;G.fa&&E(a.i,G),C=Pe.call(Ze,m)!==!1&&C}}return C&&!m.defaultPrevented}function it(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Ye(a){a.g=it(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Vt extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(a){xe.call(this),this.h=a,this.g={}}S(ot,xe);var wn=[];function ms(a){q(a.g,function(u,d){this.g.hasOwnProperty(d)&&K(u)},a),a.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ms(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Nt=l.JSON.parse,Di=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Oa(){}Oa.prototype.h=null;function Tu(a){return a.h||(a.h=a.i())}function wu(){}var _s={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){Me.call(this,"d")}S(Da,Me);function Va(){Me.call(this,"c")}S(Va,Me);var sr={},Iu=null;function Vi(){return Iu=Iu||new ie}sr.La="serverreachability";function Au(a){Me.call(this,sr.La,a)}S(Au,Me);function ys(a){const u=Vi();ge(u,new Au(u))}sr.STAT_EVENT="statevent";function bu(a,u){Me.call(this,sr.STAT_EVENT,a),this.stat=u}S(bu,Me);function mt(a){const u=Vi();ge(u,new bu(u,a))}sr.Ma="timingevent";function Ru(a,u){Me.call(this,sr.Ma,a),this.size=u}S(Ru,Me);function vs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Es(){this.g=!0}Es.prototype.xa=function(){this.g=!1};function k_(a,u,d,m,C,D){a.info(function(){if(a.g)if(D)for(var G="",Pe=D.split("&"),Ze=0;Ze<Pe.length;Ze++){var we=Pe[Ze].split("=");if(1<we.length){var at=we[0];we=we[1];var lt=at.split("_");G=2<=lt.length&&lt[1]=="type"?G+(at+"="+we+"&"):G+(at+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+G})}function O_(a,u,d,m,C,D,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+D+" "+G})}function kr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+V_(a,d)+(m?" "+m:"")})}function D_(a,u){a.info(function(){return"TIMEOUT: "+u})}Es.prototype.info=function(){};function V_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return Xe(d)}catch{return u}}var Ni={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Na;function xi(){}S(xi,Oa),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},Na=new xi;function In(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Cu={},xa={};function Ma(a,u,d){a.L=1,a.v=Ui(rn(u)),a.m=d,a.P=!0,ku(a,null)}function ku(a,u){a.F=Date.now(),Mi(a),a.A=rn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),qu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Pu,a.g=lh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Vt(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(wn[0]=C.toString()),C=wn);for(var D=0;D<C.length;D++){var G=M(d,C[D],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ys(),k_(a.i,a.u,a.A,a.l,a.R,a.m)}In.prototype.ca=function(a){a=a.target;const u=this.M;u&&sn(a)==3?u.j():this.Y(a)},In.prototype.Y=function(a){try{if(a==this.g)e:{const lt=sn(this.g);var u=this.g.Ba();const Vr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Yu(this.g)))){this.J||lt!=4||u==7||(u==8||0>=Vr?ys(3):ys(2)),La(this);var d=this.g.Z();this.X=d;t:if(Ou(this)){var m=Yu(this.g);a="";var C=m.length,D=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Ts(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(D&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,O_(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ze=this.g;if((Pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Pe)){var we=Pe;break t}}we=null}if(d=we)kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,d);else{this.o=!1,this.s=3,mt(12),ir(this),Ts(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<G.length;)if(Bt=N_(this,G),Bt==xa){lt==4&&(this.s=4,mt(14),d=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Cu){this.s=4,mt(15),kr(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else kr(this.i,this.l,Bt,null),Fa(this,Bt);if(Ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||G.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)kr(this.i,this.l,G,"[Invalid Chunked Response]"),ir(this),Ts(this);else if(0<G.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),qa(at),at.M=!0,mt(11))}}else kr(this.i,this.l,G,null),Fa(this,G);lt==4&&ir(this),this.o&&!this.J&&(lt==4?sh(this.j,this):(this.o=!1,Mi(this)))}else Y_(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),ir(this),Ts(this)}}}catch{}finally{}};function Ou(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function N_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?xa:(d=Number(u.substring(d,m)),isNaN(d)?Cu:(m+=1,m+d>u.length?xa:(u=u.slice(m,m+d),a.C=m+d,u)))}In.prototype.cancel=function(){this.J=!0,ir(this)};function Mi(a){a.S=Date.now()+a.I,Du(a,a.I)}function Du(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vs(g(a.ba,a),u)}function La(a){a.B&&(l.clearTimeout(a.B),a.B=null)}In.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(D_(this.i,this.A),this.L!=2&&(ys(),mt(17)),ir(this),this.s=2,Ts(this)):Du(this,this.S-a)};function Ts(a){a.j.G==0||a.J||sh(a.j,a)}function ir(a){La(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,ms(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Fa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ua(d.h,a))){if(!a.K&&Ua(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wi(d),Hi(d);else break e;Ha(d),mt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=vs(g(d.Za,d),6e3));if(1>=xu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ar(d,11)}else if((a.K||d.g==a)&&Wi(d),!j(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let we=C[u];if(d.T=we[0],we=we[1],d.G==2)if(we[0]=="c"){d.K=we[1],d.ia=we[2];const at=we[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const lt=we[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Vr=we[5];Vr!=null&&typeof Vr=="number"&&0<Vr&&(m=1.5*Vr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=a.g;if(Bt){const zi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var D=m.h;D.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ba(D,D.h),D.h=null))}if(m.D){const Wa=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wa&&(m.ya=Wa,Ve(m.I,m.D,Wa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var G=a;if(m.qa=ah(m,m.J?m.ia:null,m.W),G.K){Mu(m.h,G);var Pe=G,Ze=m.L;Ze&&(Pe.I=Ze),Pe.B&&(La(Pe),Mi(Pe)),m.g=G}else nh(m);0<d.i.length&&qi(d)}else we[0]!="stop"&&we[0]!="close"||ar(d,7);else d.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ar(d,7):$a(d):we[0]!="noop"&&d.l&&d.l.ta(we),d.v=0)}}ys(4)}catch{}}var x_=class{constructor(a,u){this.g=a,this.map=u}};function Vu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xu(a){return a.h?1:a.g?a.g.size:0}function Ua(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ba(a,u){a.g?a.g.add(u):a.h=u}function Mu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Vu.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return k(a.i)}function M_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function L_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Fu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=L_(a),m=M_(a),C=m.length,D=0;D<C;D++)u.call(void 0,m[D],d&&d[D],a)}var Uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var D=a[d].substring(0,m);C=a[d].substring(m+1)}else D=a[d];u(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof or){this.h=a.h,Li(this,a.j),this.o=a.o,this.g=a.g,Fi(this,a.s),this.l=a.l;var u=a.i,d=new As;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Bu(this,d),this.m=a.m}else a&&(u=String(a).match(Uu))?(this.h=!1,Li(this,u[1]||"",!0),this.o=ws(u[2]||""),this.g=ws(u[3]||"",!0),Fi(this,u[4]),this.l=ws(u[5]||"",!0),Bu(this,u[6]||"",!0),this.m=ws(u[7]||"")):(this.h=!1,this.i=new As(null,this.h))}or.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Is(u,ju,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Is(u,ju,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Is(d,d.charAt(0)=="/"?j_:B_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Is(d,H_)),a.join("")};function rn(a){return new or(a)}function Li(a,u,d){a.j=d?ws(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Fi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Bu(a,u,d){u instanceof As?(a.i=u,q_(a.i,a.h)):(d||(u=Is(u,$_)),a.i=new As(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function Ui(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ws(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,U_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function U_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ju=/[#\/\?@]/g,B_=/[#\?:]/g,j_=/[#\?]/g,$_=/[#\?@]/g,H_=/#/g;function As(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function An(a){a.g||(a.g=new Map,a.h=0,a.i&&F_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=As.prototype,t.add=function(a,u){An(this),this.i=null,a=Or(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function $u(a,u){An(a),u=Or(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Hu(a,u){return An(a),u=Or(a,u),a.g.has(u)}t.forEach=function(a,u){An(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){An(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let D=0;D<C.length;D++)d.push(u[m])}return d},t.V=function(a){An(this);let u=[];if(typeof a=="string")Hu(this,a)&&(u=u.concat(this.g.get(Or(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return An(this),this.i=null,a=Or(this,a),Hu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function qu(a,u,d){$u(a,u),0<d.length&&(a.i=null,a.g.set(Or(a,u),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const D=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var C=D;G[m]!==""&&(C+="="+encodeURIComponent(String(G[m]))),a.push(C)}}return this.i=a.join("&")};function Or(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function q_(a,u){u&&!a.j&&(An(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&($u(this,m),qu(this,C,d))},a)),a.j=u}function W_(a,u){const d=new Es;if(l.Image){const m=new Image;m.onload=_(bn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(bn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(bn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(bn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function K_(a,u){const d=new Es,m=new AbortController,C=setTimeout(()=>{m.abort(),bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?bn(d,"TestPingServer: ok",!0,u):bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),bn(d,"TestPingServer: error",!1,u)})}function bn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function z_(){this.g=new Di}function G_(a,u,d){const m=d||"";try{Fu(a,function(C,D){let G=C;h(C)&&(G=Xe(C)),u.push(m+D+"="+encodeURIComponent(G))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function Bi(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Bi,Oa),Bi.prototype.g=function(){return new ji(this.l,this.j)},Bi.prototype.i=function(a){return function(){return a}}({});function ji(a,u){ie.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ji,ie),t=ji.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?bs(this):Rs(this),this.readyState==3&&Wu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Qa=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Rs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ku(a){let u="";return q(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function ja(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Ku(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function Ue(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ue,ie);var Q_=/^https?$/i,J_=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Na.g(),this.v=this.o?Tu(this.o):Tu(Na),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){zu(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(J_,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of d)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ju(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){zu(this,D)}};function zu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Gu(a),$i(a)}function Gu(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qu(this):this.bb())},t.bb=function(){Qu(this)};function Qu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||sn(a)!=4||a.Z()!=2)){if(a.u&&sn(a)==4)it(a.Ea,0,a);else if(ge(a,"readystatechange"),sn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=G===0){var C=String(a.D).match(Uu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Q_.test(C?C.toLowerCase():"")}d=m}if(d)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<sn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Gu(a)}}finally{$i(a)}}}}function $i(a,u){if(a.g){Ju(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ge(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ju(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Nt(u)}};function Yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Y_(a){const u={};a=(a.g&&2<=sn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[C]||[];u[C]=D,D.push(d)}T(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Xu(a){this.Aa=0,this.i=[],this.j=new Es,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,a),this.cb=Ss("retryDelaySeedMs",1e4,a),this.Wa=Ss("forwardChannelMaxRetries",2,a),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vu(a&&a.concurrentRequestLimit),this.Da=new z_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Xu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){mt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ah(this,null,this.W),qi(this)};function $a(a){if(Zu(a),a.G==3){var u=a.U++,d=rn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Ps(a,d),u=new In(a,a.j,u),u.L=2,u.v=Ui(rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=lh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Mi(u)}oh(a)}function Hi(a){a.g&&(qa(a),a.g.cancel(),a.g=null)}function Zu(a){Hi(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function qi(a){if(!Nu(a.h)&&!a.s){a.s=!0;var u=a.Ga;le||Ut(),me||(le(),me=!0),bt.add(u,a),a.B=0}}function X_(a,u){return xu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vs(g(a.Ga,a,u),ih(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new In(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=th(this,C,u),d=rn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ps(this,d),D&&(this.O?u="headers="+encodeURIComponent(String(Ku(D)))+"&"+u:this.m&&ja(d,this.m,D)),Ba(this.h,C),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),C.T=!0,Ma(C,d,null)):Ma(C,d,u),this.G=2}}else this.G==3&&(a?eh(this,a):this.i.length==0||Nu(this.h)||eh(this))};function eh(a,u){var d;u?d=u.l:d=a.U++;const m=rn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Ps(a,m),a.m&&a.o&&ja(m,a.m,a.o),d=new In(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=th(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ba(a.h,d),Ma(d,m,u)}function Ps(a,u){a.H&&q(a.H,function(d,m){Ve(u,m,d)}),a.l&&Fu({},function(d,m){Ve(u,m,d)})}function th(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const G=["count="+d];D==-1?0<d?(D=C[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Pe=!0;for(let Ze=0;Ze<d;Ze++){let we=C[Ze].g;const at=C[Ze].map;if(we-=D,0>we)D=Math.max(0,C[Ze].g-100),Pe=!1;else try{G_(at,G,"req"+we+"_")}catch{m&&m(at)}}if(Pe){m=G.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function nh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;le||Ut(),me||(le(),me=!0),bt.add(u,a),a.v=0}}function Ha(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vs(g(a.Fa,a),ih(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Hi(this),rh(this))};function qa(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rh(a){a.g=new In(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=rn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Ps(a,u),a.m&&a.o&&ja(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ui(rn(u)),d.m=null,d.P=!0,ku(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Hi(this),Ha(this),mt(19))};function Wi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sh(a,u){var d=null;if(a.g==u){Wi(a),qa(a),a.g=null;var m=2}else if(Ua(a.h,u))d=u.D,Mu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=Vi(),ge(m,new Ru(m,d)),qi(a)}else nh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&X_(a,u)||m==2&&Ha(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:ar(a,5);break;case 4:ar(a,10);break;case 3:ar(a,6);break;default:ar(a,2)}}}function ih(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function ar(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new or(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Li(m,"https"),Ui(m),C?W_(m.toString(),d):K_(m.toString(),d)}else mt(2);a.G=0,a.l&&a.l.sa(u),oh(a),Zu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function oh(a){if(a.G=0,a.ka=[],a.l){const u=Lu(a.h);(u.length!=0||a.i.length!=0)&&(O(a.ka,u),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function ah(a,u,d){var m=d instanceof or?rn(d):new or(d);if(m.g!="")u&&(m.g=u+"."+m.g),Fi(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var D=new or(null);m&&Li(D,m),u&&(D.g=u),C&&Fi(D,C),d&&(D.l=d),m=D}return d=a.D,u=a.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",a.la),Ps(a,m),m}function lh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new Bi({eb:d})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ki(){}Ki.prototype.g=function(a,u){return new Rt(a,u)};function Rt(a,u){ie.call(this),this.g=new Xu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Dr(this)}S(Rt,ie),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){$a(this.g)},Rt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Xe(a),a=d);u.i.push(new x_(u.Ya++,a)),u.G==3&&qi(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,Rt.aa.N.call(this)};function uh(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(uh,Da);function hh(){Va.call(this),this.status=1}S(hh,Va);function Dr(a){this.g=a}S(Dr,ch),Dr.prototype.ua=function(){ge(this.g,"a")},Dr.prototype.ta=function(a){ge(this.g,new uh(a))},Dr.prototype.sa=function(a){ge(this.g,new hh)},Dr.prototype.ra=function(){ge(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,fg=function(){return new Ki},hg=function(){return Vi()},ug=sr,xl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,co=Ni,Su.COMPLETE="complete",cg=Su,wu.EventType=_s,_s.OPEN="a",_s.CLOSE="b",_s.ERROR="c",_s.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ns=wu,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,lg=Ue}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});const sf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Rc("@firebase/firestore");function Os(){return wr.logLevel}function te(t,...e){if(wr.logLevel<=ye.DEBUG){const n=e.map(Cc);wr.debug(`Firestore (${hs}): ${t}`,...n)}}function gn(t,...e){if(wr.logLevel<=ye.ERROR){const n=e.map(Cc);wr.error(`Firestore (${hs}): ${t}`,...n)}}function es(t,...e){if(wr.logLevel<=ye.WARN){const n=e.map(Cc);wr.warn(`Firestore (${hs}): ${t}`,...n)}}function Cc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${hs}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Se(t,e){t||he()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class fw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dw{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new dg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new ut(e)}}class pw{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pw(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _w{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new mw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Ke(0,0))}static max(){return new fe(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends ri{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const vw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ri{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return vw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ne.fromString(e))}static fromName(e){return new re(Ne.fromString(e).popFirst(5))}static empty(){return new re(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ne(e.slice()))}}function Ew(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fe.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new Xn(s,re.empty(),e)}function Tw(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(fe.min(),re.empty(),-1)}static max(){return new Xn(fe.max(),re.empty(),-1)}}function ww(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Iw)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function bw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ti(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kc.oe=-1;function fa(t){return t==null}function No(t){return t===0&&1/t==-1/0}function Rw(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xi(this.root,e,this.comparator,!0)}}class Xi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new af(this.data.getIterator())}getIteratorFrom(e){return new af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new rt(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Sw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=Sw.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dc(t){const e=t.mapValue.fields.__previous_value__;return Oc(e)?Dc(e):e}function si(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={mapValue:{}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Oc(t)?4:kw(t)?9007199254740991:Cw(t)?10:11:he()}function nn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),l=Zn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),l=Be(i.doubleValue);return o===l?No(o)===No(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ts(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(of(o)!==of(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nn(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function oi(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function ns(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return lf(t.timestampValue,e.timestampValue);case 4:return lf(si(t),si(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ir(i),c=Ir(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=Ae(l[h],c[h]);if(f!==0)return f}return Ae(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ae(Be(i.latitude),Be(o.latitude));return l!==0?l:Ae(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cf(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=Ae(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:cf(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zi.mapValue&&o===Zi.mapValue)return 0;if(i===Zi.mapValue)return 1;if(o===Zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Ae(c[p],f[p]);if(g!==0)return g;const _=ns(l[c[p]],h[f[p]]);if(_!==0)return _}return Ae(c.length,f.length)}(t.mapValue,e.mapValue);default:throw he()}}function lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=Zn(t),r=Zn(e),s=Ae(n.seconds,r.seconds);return s!==0?s:Ae(n.nanos,r.nanos)}function cf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ns(n[s],r[s]);if(i)return i}return Ae(n.length,r.length)}function rs(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ml(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ml(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ll(t){return!!t&&"integerValue"in t}function Vc(t){return!!t&&"arrayValue"in t}function hf(t){return!!t&&"nullValue"in t}function ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uo(t){return!!t&&"mapValue"in t}function Cw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Hs(this.value))}}function _g(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new nt([n]);if(uo(r)){const i=_g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,fe.min(),fe.min(),fe.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,fe.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,fe.min(),fe.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,fe.min(),fe.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ow(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{}class He extends yg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Vw(e,n,r):n==="array-contains"?new Mw(e,r):n==="in"?new Lw(e,r):n==="not-in"?new Fw(e,r):n==="array-contains-any"?new Uw(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Nw(e,r):new xw(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ns(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends yg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qt(e,n)}matches(e){return vg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vg(t){return t.op==="and"}function Eg(t){return Dw(t)&&vg(t)}function Dw(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Fl(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+rs(t.value);if(Eg(t))return t.filters.map(e=>Fl(e)).join(",");{const e=t.filters.map(n=>Fl(n)).join(",");return`${t.op}(${e})`}}function Tg(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Tg(o,s.filters[l]),!0):!1}(t,e):void he()}function wg(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${rs(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(wg).join(" ,")+"}"}(t):"Filter"}class Vw extends He{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Nw extends He{constructor(e,n){super(e,"in",n),this.keys=Ig("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xw extends He{constructor(e,n){super(e,"not-in",n),this.keys=Ig("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ig(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class Mw extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vc(n)&&oi(n.arrayValue,this.value)}}class Lw extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class Fw extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class Uw extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function gf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Bw(t,e,n,r,s,i,o)}function Nc(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>rs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>rs(r)).join(",")),e.ue=n}return e.ue}function xc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ow(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function Ul(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jw(t,e,n,r,s,i,o,l){return new wi(t,e,n,r,s,i,o,l)}function Ag(t){return new wi(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bg(t){return t.collectionGroup!==null}function qs(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(nt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mo(i,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Mo(nt.keyField(),r))}return e.ce}function Yt(t){const e=de(t);return e.le||(e.le=$w(e,qs(t))),e.le}function $w(t,e){if(t.limitType==="F")return gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bl(t,e){const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jl(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function da(t,e){return xc(Yt(t),Yt(e))&&t.limitType===e.limitType}function Rg(t){return`${Nc(Yt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wg(s)).join(", ")}]`),fa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>rs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>rs(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function pa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=df(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,qs(r),s)||r.endAt&&!function(o,l,c){const h=df(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,qs(r),s))}(t,e)}function Hw(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sg(t){return(e,n)=>{let r=!1;for(const s of qs(t)){const i=qw(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qw(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ns(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Fe(re.comparator);function mn(){return Ww}const Pg=new Fe(re.comparator);function xs(...t){let e=Pg;for(const n of t)e=e.insert(n.key,n);return e}function Cg(t){let e=Pg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Ws()}function kg(){return Ws()}function Ws(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Kw=new Fe(re.comparator),zw=new rt(re.comparator);function _e(...t){let e=zw;for(const n of t)e=e.add(n);return e}const Gw=new rt(Ae);function Qw(){return Gw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Og(t){return{integerValue:""+t}}function Jw(t,e){return Rw(e)?Og(e):Mc(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this._=void 0}}function Yw(t,e,n){return t instanceof Lo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Oc(i)&&(i=Dc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ai?Vg(t,e):t instanceof li?Ng(t,e):function(s,i){const o=Dg(s,i),l=_f(o)+_f(s.Pe);return Ll(o)&&Ll(s.Pe)?Og(l):Mc(s.serializer,l)}(t,e)}function Xw(t,e,n){return t instanceof ai?Vg(t,e):t instanceof li?Ng(t,e):n}function Dg(t,e){return t instanceof Fo?function(r){return Ll(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Lo extends ga{}class ai extends ga{constructor(e){super(),this.elements=e}}function Vg(t,e){const n=xg(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class li extends ga{constructor(e){super(),this.elements=e}}function Ng(t,e){let n=xg(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Fo extends ga{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _f(t){return Be(t.integerValue||t.doubleValue)}function xg(t){return Vc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zw(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ai&&s instanceof ai||r instanceof li&&s instanceof li?ts(r.elements,s.elements,nn):r instanceof Fo&&s instanceof Fo?nn(r.Pe,s.Pe):r instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class eI{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ma{}function Mg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lc(t.key,$t.none()):new Ii(t.key,t.data,$t.none());{const n=t.data,r=At.empty();let s=new rt(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new rr(t.key,r,new Ct(s.toArray()),$t.none())}}function tI(t,e,n){t instanceof Ii?function(s,i,o){const l=s.value.clone(),c=vf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(s,i,o){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=vf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Lg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Ii?function(i,o,l,c){if(!ho(i.precondition,o))return l;const h=i.value.clone(),f=Ef(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(i,o,l,c){if(!ho(i.precondition,o))return l;const h=Ef(i.fieldTransforms,c,o),f=o.data;return f.setAll(Lg(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function nI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Dg(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function yf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ts(r,s,(i,o)=>Zw(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ii extends ma{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rr extends ma{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vf(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Xw(o,l,n[s]))}return r}function Ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Yw(i,o,e))}return r}class Lc extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rI extends ma{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&tI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=kg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Mg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&ts(this.mutations,e.mutations,(n,r)=>yf(n,r))&&ts(this.baseMutations,e.baseMutations,(n,r)=>yf(n,r))}}class Fc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return Kw}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Ee;function aI(t){switch(t){default:return he();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Fg(t){if(t===void 0)return gn("GRPC error has no .code"),L.UNKNOWN;switch(t){case $e.OK:return L.OK;case $e.CANCELLED:return L.CANCELLED;case $e.UNKNOWN:return L.UNKNOWN;case $e.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case $e.INTERNAL:return L.INTERNAL;case $e.UNAVAILABLE:return L.UNAVAILABLE;case $e.UNAUTHENTICATED:return L.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case $e.NOT_FOUND:return L.NOT_FOUND;case $e.ALREADY_EXISTS:return L.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return L.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case $e.ABORTED:return L.ABORTED;case $e.OUT_OF_RANGE:return L.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return L.UNIMPLEMENTED;case $e.DATA_LOSS:return L.DATA_LOSS;default:return he()}}(Ee=$e||($e={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=new _r([4294967295,4294967295],0);function Tf(t){const e=lI().encode(t),n=new ag;return n.update(e),new Uint8Array(n.digest())}function wf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _r([n,r],0),new _r([s,i],0)]}class Uc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_r.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(_r.fromNumber(r)));return s.compare(cI)===1&&(s=new _r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tf(e),[r,s]=wf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uc(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Tf(e),[r,s]=wf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _a(fe.min(),s,new Fe(Ae),mn(),_e())}}class Ai{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ai(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ug{constructor(e,n){this.targetId=e,this.me=n}}class Bg{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class If{constructor(){this.fe=0,this.ge=bf(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Ai(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=bf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uI{constructor(e){this.Le=e,this.Be=new Map,this.ke=mn(),this.qe=Af(),this.Qe=new Fe(Ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ul(i))if(r===0){const o=new re(i.path);this.Ue(n,o,dt.newNoDocument(o,fe.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ir(r).toUint8Array()}catch(c){if(c instanceof mg)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Uc(o,s,i)}catch(c){return es(c instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ul(l.target)){const c=new re(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,dt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _a(e,n,this.Qe,this.ke,r);return this.ke=mn(),this.qe=Af(),this.Qe=new Fe(Ae),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new If,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(Ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new If),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Af(){return new Fe(re.comparator)}function bf(){return new Fe(re.comparator)}const hI={asc:"ASCENDING",desc:"DESCENDING"},fI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dI={and:"AND",or:"OR"};class pI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||fa(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gI(t,e){return Uo(t,e.toTimestamp())}function Xt(t){return Se(!!t),fe.fromTimestamp(function(n){const r=Zn(n);return new Ke(r.seconds,r.nanos)}(t))}function Bc(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $g(t){const e=Ne.fromString(t);return Se(zg(e)),e}function ql(t,e){return Bc(t.databaseId,e.path)}function ll(t,e){const n=$g(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(qg(n))}function Hg(t,e){return Bc(t.databaseId,e)}function mI(t){const e=$g(t);return e.length===4?Ne.emptyPath():qg(e)}function Wl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qg(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function _I(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string"),st.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),st.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Fg(h.code);return new Z(f,h.message||"")}(o);n=new Bg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ll(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):fe.min(),l=new At({mapValue:{fields:r.document.fields}}),c=dt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new fo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ll(t,r.document),i=r.readTime?Xt(r.readTime):fe.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new fo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ll(t,r.document),i=r.removedTargetIds||[];n=new fo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new oI(s,i),l=r.targetId;n=new Ug(l,o)}}return n}function yI(t,e){let n;if(e instanceof Ii)n={update:Rf(t,e.key,e.value)};else if(e instanceof Lc)n={delete:ql(t,e.key)};else if(e instanceof rr)n={update:Rf(t,e.key,e.data),updateMask:SI(e.fieldMask)};else{if(!(e instanceof rI))return he();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function vI(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(fe.min())&&(o=Xt(i)),new eI(o,s.transformResults||[])}(n,e))):[]}function EI(t,e){return{documents:[Hg(t,e.path)]}}function TI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Hg(t,s);const i=function(h){if(h.length!==0)return Kg(qt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Fr(g.field),direction:AI(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$l(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function wI(t){let e=mI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Wg(p);return g instanceof qt&&Eg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Mo(Ur(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,fa(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new xo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new xo(_,g)}(n.endAt)),jw(e,s,o,i,l,"F",c,h)}function II(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ur(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>Wg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function AI(t){return hI[t]}function bI(t){return fI[t]}function RI(t){return dI[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return nt.fromServerFormat(t.fieldPath)}function Kg(t){return t instanceof He?function(n){if(n.op==="=="){if(ff(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(hf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ff(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(hf(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:bI(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>Kg(s));return r.length===1?r[0]:{compositeFilter:{op:RI(n.op),filters:r}}}(t):he()}function SI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,r,s,i=fe.min(),o=fe.min(),l=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.ct=e}}function CI(t){const e=wI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.un=new OI}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Xn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class OI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ss(0)}static kn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ks(r.mutation,s,Ct.empty(),Ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=mn();const o=Ws(),l=function(){return Ws()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ks(f.mutation,h,f.mutation.getFieldMask(),Ke.now())):o.set(h.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new VI(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ws();let s=new Fe((o,l)=>o-l),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||Ct.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||_e()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=kg();f.forEach(g=>{if(!i.has(g)){const _=Mg(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(pr());let l=-1,c=i;return o.next(h=>U.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_e())).next(f=>({batchId:l,changes:Cg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,g){return new wi(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=xs();return o.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Ks(f.mutation,h,Ct.empty(),Ke.now()),pa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:CI(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.overlays=new Fe(re.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=pr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iI(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.Tr=new rt(ze.Er),this.dr=new rt(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Ne([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Ne([])),r=new ze(n,e),s=new ze(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Ae(e.wr,n.wr)}static Ar(e,n){return Ae(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new rt(ze.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sI(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(Ae);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new ze(new re(i),0);let l=new rt(Ae);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.Mr=e,this.docs=function(){return new Fe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const o=n.path,l=new re(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ww(Tw(f),r)<=0||(s.has(f.key)||pa(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BI(this)}getSize(e){return U.resolve(this.size)}}class BI extends DI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.persistence=e,this.Nr=new fs(n=>Nc(n),xc),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jc,this.targetCount=0,this.kr=ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kc(0),this.Kr=!1,this.Kr=!0,this.$r=new LI,this.referenceDelegate=e(this),this.Ur=new jI(this),this.indexManager=new kI,this.remoteDocumentCache=function(s){return new UI(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new PI(n),this.Gr=new xI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new FI(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new HI(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class HI extends Aw{constructor(e){super(),this.currentSequenceNumber=e}}class $c{constructor(e){this.persistence=e,this.Jr=new jc,this.Yr=null}static Zr(e){return new $c(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=re.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return KE()?8:bw(gt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new qI;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Os()<=ye.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Os()<=ye.DEBUG&&te("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Os()<=ye.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):U.resolve())}Yi(e,n){if(mf(n))return U.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,jl(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return mf(n)||s.isEqual(fe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Os()<=ye.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.rs(e,o,n,Ew(s,-1)).next(l=>l))})}ts(e,n){let r=new rt(Sg(e));return n.forEach((s,i)=>{pa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Os()<=ye.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Xn.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Fe(Ae),this._s=new fs(i=>Nc(i),xc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zI(t,e,n,r){return new KI(t,e,n,r)}async function Gg(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function GI(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let _=U.resolve();return g.forEach(S=>{_=_.next(()=>f.getEntry(c,S)).next(k=>{const O=h.docVersions.get(S);Se(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_e();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Qg(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function QI(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(st.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,O,B){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(i,_))});let c=mn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(JI(i,o,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(fe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function JI(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function YI(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XI(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Kl(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ti(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Sf(t,e,n){const r=de(t);let s=fe.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const p=de(c),g=p._s.get(f);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Yt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:fe.min(),n?i:_e())).next(l=>(ZI(r,Hw(e),l),{documents:l,Ts:i})))}function ZI(t,e,n){let r=t.us.get(e)||fe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Pf{constructor(){this.activeTargetIds=Qw()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eA{constructor(){this.so=new Pf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;function cl(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class sA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=cl(),c=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(f=>(te("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw es("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=nA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=cl();return new Promise((o,l)=>{const c=new lg;c.setWithCredentials(!0),c.listenOnce(cg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case co.NO_ERROR:const f=c.getResponseJson();te(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case co.TIMEOUT:te(ct,`RPC '${e}' ${i} timed out`),l(new Z(L.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const p=c.getStatus();if(te(ct,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const S=function(O){const B=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN}(_.status);l(new Z(S,_.message))}else l(new Z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z(L.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{te(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(ct,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=cl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fg(),l=hg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");te(ct,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=o.createWebChannel(f,c);let g=!1,_=!1;const S=new rA({Io:O=>{_?te(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(te(ct,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(ct,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,B,j)=>{O.listen(B,F=>{try{j(F)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,Ns.EventType.OPEN,()=>{_||(te(ct,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),k(p,Ns.EventType.CLOSE,()=>{_||(_=!0,te(ct,`RPC '${e}' stream ${s} transport closed`),S.So())}),k(p,Ns.EventType.ERROR,O=>{_||(_=!0,es(ct,`RPC '${e}' stream ${s} transport errored:`,O),S.So(new Z(L.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ns.EventType.MESSAGE,O=>{var B;if(!_){const j=O.data[0];Se(!!j);const F=j,H=F.error||((B=F[0])===null||B===void 0?void 0:B.error);if(H){te(ct,`RPC '${e}' stream ${s} received error:`,H);const W=H.status;let q=function(v){const A=$e[v];if(A!==void 0)return Fg(A)}(W),T=H.message;q===void 0&&(q=L.INTERNAL,T="Unknown error status: "+W+" with message "+H.message),_=!0,S.So(new Z(q,T)),p.close()}else te(ct,`RPC '${e}' stream ${s} received:`,j),S.bo(j)}}),k(l,ug.STAT_EVENT,O=>{O.stat===xl.PROXY?te(ct,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===xl.NOPROXY&&te(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return new pI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Jg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iA extends Yg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_I(this.serializer,e),r=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Xt(o.readTime):fe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wl(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Ul(c)?{documents:EI(i,c)}:{query:TI(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jg(i,o.resumeToken);const h=$l(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(fe.min())>0){l.readTime=Uo(i,o.snapshotVersion.toTimestamp());const h=$l(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=II(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wl(this.serializer),n.removeTarget=e,this.a_(n)}}class oA extends Yg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vI(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yI(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Hl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Hl(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class lA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gn(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=de(c);h.L_.add(4),await bi(h),h.q_.set("Unknown"),h.L_.delete(4),await va(h)}(this))})}),this.q_=new lA(r,s)}}async function va(t){if(Cr(t))for(const e of t.B_)await e(!0)}async function bi(t){for(const e of t.B_)await e(!1)}function Xg(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),zc(n)?Kc(n):ds(n).r_()&&Wc(n,e))}function qc(t,e){const n=de(t),r=ds(n);n.N_.delete(e),r.r_()&&Zg(n,e),n.N_.size===0&&(r.r_()?r.o_():Cr(n)&&n.q_.set("Unknown"))}function Wc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).A_(e)}function Zg(t,e){t.Q_.xe(e),ds(t).R_(e)}function Kc(t){t.Q_=new uI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.q_.v_()}function zc(t){return Cr(t)&&!ds(t).n_()&&t.N_.size>0}function Cr(t){return de(t).L_.size===0}function em(t){t.Q_=void 0}async function uA(t){t.q_.set("Online")}async function hA(t){t.N_.forEach((e,n)=>{Wc(t,e)})}async function fA(t,e){em(t),zc(t)?(t.q_.M_(e),Kc(t)):t.q_.set("Unknown")}async function dA(t,e,n){if(t.q_.set("Online"),e instanceof Bg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(t,r)}else if(e instanceof fo?t.Q_.Ke(e):e instanceof Ug?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const r=await Qg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(st.EMPTY_BYTE_STRING,f.snapshotVersion)),Zg(i,c);const p=new jn(f.target,c,h,f.sequenceNumber);Wc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Bo(t,r)}}async function Bo(t,e,n){if(!Ti(e))throw e;t.L_.add(1),await bi(t),t.q_.set("Offline"),n||(n=()=>Qg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await va(t)})}function tm(t,e){return e().catch(n=>Bo(t,n,e))}async function Ea(t){const e=de(t),n=er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;pA(e);)try{const s=await YI(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,gA(e,s)}catch(s){await Bo(e,s)}nm(e)&&rm(e)}function pA(t){return Cr(t)&&t.O_.length<10}function gA(t,e){t.O_.push(e);const n=er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nm(t){return Cr(t)&&!er(t).n_()&&t.O_.length>0}function rm(t){er(t).start()}async function mA(t){er(t).p_()}async function _A(t){const e=er(t);for(const n of t.O_)e.m_(n.mutations)}async function yA(t,e,n){const r=t.O_.shift(),s=Fc.from(r,e,n);await tm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ea(t)}async function vA(t,e){e&&er(t).V_&&await async function(r,s){if(function(o){return aI(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();er(r).s_(),await tm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(t,e),nm(t)&&rm(t)}async function kf(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.L_.add(3),await bi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await va(n)}async function EA(t,e){const n=de(t);e?(n.L_.delete(2),await va(n)):e||(n.L_.add(2),await bi(n),n.q_.set("Unknown"))}function ds(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new iA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:uA.bind(null,t),Ro:hA.bind(null,t),mo:fA.bind(null,t),d_:dA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),zc(t)?Kc(t):t.q_.set("Unknown")):(await t.K_.stop(),em(t))})),t.K_}function er(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new oA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:mA.bind(null,t),mo:vA.bind(null,t),f_:_A.bind(null,t),g_:yA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ea(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Gc(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qc(t,e){if(gn("AsyncQueue",`${e}: ${t}`),Ti(t))return new Z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.W_=new Fe(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new is(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class wA{constructor(){this.queries=Df(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Df(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new Z(L.ABORTED,"Firestore shutting down"))}}function Df(){return new fs(t=>Rg(t),da)}async function IA(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new TA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Qc(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Jc(n)}async function AA(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bA(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Jc(n)}function RA(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Jc(t){t.Y_.forEach(e=>{e.next()})}var zl,Vf;(Vf=zl||(zl={})).ea="default",Vf.Cache="cache";class SA{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.key=e}}class im{constructor(e){this.key=e}}class PA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=Sg(e),this.Ra=new Gr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Of,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=pa(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),O=!0):this.ga(g,_)||(r.track({type:2,doc:_}),O=!0,(c&&this.Aa(_,c)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(c||h)&&(l=!0)),O&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,S){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return k(_)-k(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new is(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Of,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new im(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sm(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class CA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kA{constructor(e){this.key=e,this.va=!1}}class OA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fs(l=>Rg(l),da),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(re.comparator),this.Na=new Map,this.La=new jc,this.Ba={},this.ka=new Map,this.qa=ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DA(t,e,n=!0){const r=hm(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await om(r,e,n,!0),s}async function VA(t,e){const n=hm(t);await om(n,e,!0,!1)}async function om(t,e,n,r){const s=await XI(t.localStore,Yt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await NA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Xg(t.remoteStore,s),l}async function NA(t,e,n,r,s){t.Ka=(p,g,_)=>async function(k,O,B,j){let F=O.view.ma(B);F.ns&&(F=await Sf(k.localStore,O.query,!1).then(({documents:T})=>O.view.ma(T,F)));const H=j&&j.targetChanges.get(O.targetId),W=j&&j.targetMismatches.get(O.targetId)!=null,q=O.view.applyChanges(F,k.isPrimaryClient,H,W);return xf(k,O.targetId,q.wa),q.snapshot}(t,p,g,_);const i=await Sf(t.localStore,e,!0),o=new PA(e,i.Ts),l=o.ma(i.documents),c=Ai.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);xf(t,n,h.wa);const f=new CA(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function xA(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!da(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qc(r.remoteStore,s.targetId),Gl(r,s.targetId)}).catch(Ei)):(Gl(r,s.targetId),await Kl(r.localStore,s.targetId,!0))}async function MA(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qc(n.remoteStore,r.targetId))}async function LA(t,e,n){const r=qA(t);try{const s=await function(o,l){const c=de(o),h=Ke.now(),f=l.reduce((_,S)=>_.add(S.key),_e());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=mn(),k=_e();return c.cs.getEntries(_,f).next(O=>{S=O,S.forEach((B,j)=>{j.isValidDocument()||(k=k.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(O=>{p=O;const B=[];for(const j of l){const F=nI(j,p.get(j.key).overlayedDocument);F!=null&&B.push(new rr(j.key,F,_g(F.value.mapValue),$t.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,B,l)}).next(O=>{g=O;const B=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(_,O.batchId,B)})}).then(()=>({batchId:g.batchId,changes:Cg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new Fe(Ae)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ri(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=Qc(s,"Failed to persist write");n.reject(i)}}async function am(t,e){const n=de(t);try{const r=await QI(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Se(o.va):s.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await Ri(n,r,e)}catch(r){await Ei(r)}}function Nf(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=de(o);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Jc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FA(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Fe(re.comparator);o=o.insert(i,dt.newNoDocument(i,fe.min()));const l=_e().add(i),c=new _a(fe.min(),new Map,new Fe(Ae),o,l);await am(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Yc(r)}else await Kl(r.localStore,e,!1).then(()=>Gl(r,e,n)).catch(Ei)}async function UA(t,e){const n=de(t),r=e.batch.batchId;try{const s=await GI(n.localStore,e);cm(n,r,null),lm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ri(n,s)}catch(s){await Ei(s)}}async function BA(t,e,n){const r=de(t);try{const s=await function(o,l){const c=de(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Se(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);cm(r,e,n),lm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ri(r,s)}catch(s){await Ei(s)}}function lm(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function cm(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||um(t,r)})}function um(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(qc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yc(t))}function xf(t,e,n){for(const r of n)r instanceof sm?(t.La.addReference(r.key,e),jA(t,r)):r instanceof im?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||um(t,r.key)):he()}function jA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yc(t))}function Yc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Ne.fromString(e)),r=t.qa.next();t.Na.set(r,new kA(n)),t.Oa=t.Oa.insert(n,r),Xg(t.remoteStore,new jn(Yt(Ag(n.path)),r,"TargetPurposeLimboResolution",kc.oe))}}async function Ri(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Hc.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const f=de(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>U.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ti(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.os.get(g),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,k)}}}(r.localStore,i))}async function $A(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Gg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new Z(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ri(n,r.hs)}}function HA(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function hm(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FA.bind(null,e),e.Ca.d_=bA.bind(null,e.eventManager),e.Ca.$a=RA.bind(null,e.eventManager),e}function qA(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BA.bind(null,e),e}class jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zI(this.persistence,new WI,e.initialUser,this.serializer)}Ga(e){return new $I($c.Zr,this.serializer)}Wa(e){return new eA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jo.provider={build:()=>new jo};class Ql{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$A.bind(null,this.syncEngine),await EA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wA}()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=function(i){return new sA(i)}(e.databaseInfo);return function(i,o,l,c){return new aA(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new cA(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Nf(this.syncEngine,n,0),function(){return Cf.D()?new Cf:new tA}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,f){const p=new OA(s,i,o,l,c,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await bi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hl(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Gg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zA(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kf(e.remoteStore,s)),t._onlineComponents=e}async function zA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await hl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await hl(t,new jo)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await hl(t,new jo);return t._offlineComponents}async function fm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Mf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Mf(t,new Ql))),t._onlineComponents}function GA(t){return fm(t).then(e=>e.syncEngine)}async function QA(t){const e=await fm(t),n=e.eventManager;return n.onListen=DA.bind(null,e.syncEngine),n.onUnlisten=xA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=MA.bind(null,e.syncEngine),n}function JA(t,e,n={}){const r=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const f=new WA({next:g=>{f.Za(),o.enqueueAndForget(()=>AA(i,p)),g.fromCache&&c.source==="server"?h.reject(new Z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new SA(l,f,{includeMetadataChanges:!0,_a:!0});return IA(i,p)}(await QA(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e,n){if(!n)throw new Z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YA(t,e,n,r){if(e===!0&&r===!0)throw new Z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ff(t){if(!re.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uf(t){if(re.isDocumentKey(t))throw new Z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ta(t);throw new Z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hw;switch(r.type){case"firstParty":return new gw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Lf.get(n);r&&(te("ComponentProvider","Removing Datastore"),Lf.delete(n),r.terminate())}(this),Promise.resolve()}}function XA(t,e,n,r={}){var s;const i=(t=br(t,wa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ut.MOCK_USER;else{l=UE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ut(h)}t._authCredentials=new fw(new dg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Jn extends ps{constructor(e,n,r){super(e,n,Ag(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new re(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function $o(t,e,...n){if(t=Tt(t),pm("collection","path",e),t instanceof wa){const r=Ne.fromString(e,...n);return Uf(r),new Jn(t,null,r)}{if(!(t instanceof Ot||t instanceof Jn))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Uf(r),new Jn(t.firestore,null,r)}}function ci(t,e,...n){if(t=Tt(t),arguments.length===1&&(e=pg.newId()),pm("doc","path",e),t instanceof wa){const r=Ne.fromString(e,...n);return Ff(r),new Ot(t,null,new re(r))}{if(!(t instanceof Ot||t instanceof Jn))throw new Z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Ff(r),new Ot(t.firestore,t instanceof Jn?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jg(this,"async_queue_retry"),this.Vu=()=>{const r=ul();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ul();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ti(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Gc.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Si extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jf(e),this._firestoreClient=void 0,await e}}}function ZA(t,e){const n=typeof t=="object"?t:sg(),r=typeof t=="string"?t:"(default)",s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LE("firestore");i&&XA(s,...i)}return s}function gm(t){if(t._terminated)throw new Z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eb(t),t._firestoreClient}function eb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new Pw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,dm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new KA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(st.fromBase64String(e))}catch(n){throw new Z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=/^__.*__$/;class nb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ii(e,this.data,n,this.fieldTransforms)}}class mm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class tu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ho(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_m(this.Cu)&&tb.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}Qu(e,n,r,s=!1){return new tu({Cu:e,methodName:n,qu:r,path:nt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nu(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new rb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sb(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);ru("Data must be an object, but it was:",o,r);const l=ym(r,o);let c,h;if(i.merge)c=new Ct(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Jl(e,p,n);if(!o.contains(g))throw new Z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Em(f,g)||f.push(g)}c=new Ct(f),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new nb(new At(l),c,h)}class Aa extends Xc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Aa}}function ib(t,e,n,r){const s=t.Qu(1,e,n);ru("Data must be an object, but it was:",s,r);const i=[],o=At.empty();Pr(r,(c,h)=>{const f=su(e,c,n);h=Tt(h);const p=s.Nu(f);if(h instanceof Aa)i.push(f);else{const g=Pi(h,p);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ct(i);return new mm(o,l,s.fieldTransforms)}function ob(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Jl(e,r,n)],c=[s];if(i.length%2!=0)throw new Z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Jl(e,i[g])),c.push(i[g+1]);const h=[],f=At.empty();for(let g=l.length-1;g>=0;--g)if(!Em(h,l[g])){const _=l[g];let S=c[g];S=Tt(S);const k=o.Nu(_);if(S instanceof Aa)h.push(_);else{const O=Pi(S,k);O!=null&&(h.push(_),f.set(_,O))}}const p=new Ct(h);return new mm(f,p,o.fieldTransforms)}function ab(t,e,n,r=!1){return Pi(n,t.Qu(r?4:3,e))}function Pi(t,e){if(vm(t=Tt(t)))return ru("Unsupported field value:",e,t),ym(t,e);if(t instanceof Xc)return function(r,s){if(!_m(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Pi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ke.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Ke){const i=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Zc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:jg(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof eu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Mc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ta(r)}`)}(t,e)}function ym(t,e){const n={};return gg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=Pi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function vm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Zc||t instanceof os||t instanceof Ot||t instanceof Xc||t instanceof eu)}function ru(t,e,n){if(!vm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ta(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Jl(t,e,n){if((e=Tt(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return su(t,e);throw Ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const lb=new RegExp("[~\\*/\\[\\]]");function su(t,e,n){if(e.search(lb)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ia(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ho(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(L.INVALID_ARGUMENT,l+t+c)}function Em(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cb extends Tm{data(){return super.data()}}function iu(t,e){return typeof e=="string"?su(t,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class hb extends ou{}function fb(t,e,...n){let r=[];e instanceof ou&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof au).length,l=i.filter(c=>c instanceof ba).length;if(o>1||o>0&&l>0)throw new Z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ba extends hb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ba(e,n,r)}_apply(e){const n=this._parse(e);return wm(e._query,n),new ps(e.firestore,e.converter,Bl(e._query,n))}_parse(e){const n=nu(e.firestore);return function(i,o,l,c,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hf(p,f);const _=[];for(const S of p)_.push($f(c,i,S));g={arrayValue:{values:_}}}else g=$f(c,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hf(p,f),g=ab(l,o,p,f==="in"||f==="not-in");return He.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function db(t,e,n){const r=e,s=iu("where",t);return ba._create(s,r,n)}class au extends ou{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new au(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)wm(o,c),o=Bl(o,c)}(e._query,n),new ps(e.firestore,e.converter,Bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $f(t,e,n){if(typeof(n=Tt(n))=="string"){if(n==="")throw new Z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bg(e)&&n.indexOf("/")!==-1)throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!re.isDocumentKey(r))throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uf(t,new re(r))}if(n instanceof Ot)return uf(t,n._key);throw new Z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ta(n)}.`)}function Hf(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wm(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pb{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Be(o.doubleValue));return new eu(i)}convertGeoPoint(e){return new Zc(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Se(zg(r));const s=new ii(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mb extends Tm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class po extends mb{data(e={}){return super.data(e)}}class _b{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new to(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new po(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new to(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:yb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}class vb extends pb{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Im(t){t=br(t,ps);const e=br(t.firestore,Si),n=gm(e),r=new vb(e);return ub(t._query),JA(n,t._query).then(s=>new _b(e,r,t,s))}function Am(t,e,n,...r){t=br(t,Ot);const s=br(t.firestore,Si),i=nu(s);let o;return o=typeof(e=Tt(e))=="string"||e instanceof Ia?ob(i,"updateDoc",t._key,e,n,r):ib(i,"updateDoc",t._key,e),lu(s,[o.toMutation(t._key,$t.exists(!0))])}function bm(t){return lu(br(t.firestore,Si),[new Lc(t._key,$t.none())])}function Rm(t,e){const n=br(t.firestore,Si),r=ci(t),s=gb(t.converter,e);return lu(n,[sb(nu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function lu(t,e){return function(r,s){const i=new Qn;return r.asyncQueue.enqueueAndForget(async()=>LA(await GA(r),s,i)),i.promise}(gm(t),e)}(function(e,n=!0){(function(s){hs=s})(us),Zr(new Tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Si(new dw(r.getProvider("auth-internal")),new _w(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Gn(sf,"4.7.3",e),Gn(sf,"4.7.3","esm2017")})();function cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eb=Sm,Pm=new yi("auth","Firebase",Sm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Rc("@firebase/auth");function Tb(t,...e){qo.logLevel<=ye.WARN&&qo.warn(`Auth (${us}): ${t}`,...e)}function go(t,...e){qo.logLevel<=ye.ERROR&&qo.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw uu(t,...e)}function Zt(t,...e){return uu(t,...e)}function Cm(t,e,n){const r=Object.assign(Object.assign({},Eb()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return Cm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pm.create(t,...e)}function ue(t,e,...n){if(!t)throw uu(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function yn(t,e){t||hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wb(){return qf()==="http:"||qf()==="https:"}function qf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wb()||HE()||"connection"in navigator)?navigator.onLine:!0}function Ab(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=BE()||qE()}get(){return Ib()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Ci(3e4,6e4);function fu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,s={}){return Om(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return $E()||(h.referrerPolicy="no-referrer"),km.fetch()(Dm(t,t.config.apiHost,n,l),h)})}async function Om(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bb),e);try{const s=new Pb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw no(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw no(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw no(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cm(t,f,h);_n(t,f)}}catch(s){if(s instanceof En)throw s;_n(t,"network-request-failed",{message:String(s)})}}async function Sb(t,e,n,r,s={}){const i=await gs(t,e,n,r,s);return"mfaPendingCredential"in i&&_n(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hu(t.config,s):`${t.config.apiScheme}://${s}`}class Pb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),Rb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function no(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function Vm(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kb(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=du(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(fl(s.auth_time)),issuedAtTime:zs(fl(s.iat)),expirationTime:zs(fl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yp(n);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wf(t){const e=du(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&Ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ui(t,Vm(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nm(i.providerUserInfo):[],l=Nb(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Xl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Vb(t){const e=Tt(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nm(t){return t.map(e=>{var{providerId:n}=e,r=cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e){const n=await Om(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",km.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Mb(t,e){return gs(t,"POST","/v2/accounts:revokeToken",fu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qr;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Db(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kb(this,e)}reload(){return Vb(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await ui(this,Cb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:H,isAnonymous:W,providerData:q,stsTokenManager:T}=n;ue(F&&T,e,"internal-error");const y=Qr.fromJSON(this.name,T);ue(typeof F=="string",e,"internal-error"),Rn(p,e.name),Rn(g,e.name),ue(typeof H=="boolean",e,"internal-error"),ue(typeof W=="boolean",e,"internal-error"),Rn(_,e.name),Rn(S,e.name),Rn(k,e.name),Rn(O,e.name),Rn(B,e.name),Rn(j,e.name);const v=new fn({uid:F,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:W,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:B,lastLoginAt:j});return q&&Array.isArray(q)&&(v.providerData=q.map(A=>Object.assign({},A))),O&&(v._redirectEventId=O),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Qr;l.updateFromIdToken(r);const c=new fn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;function dn(t){yn(t instanceof Function,"Expected a class definition");let e=Kf.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xm.type="NONE";const zf=xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(dn(zf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(zf);const o=mo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=fn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jm(e))return"Blackberry";if($m(e))return"Webos";if(Lm(e))return"Safari";if((e.includes("chrome/")||Fm(e))&&!e.includes("edge/"))return"Chrome";if(Bm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mm(t=gt()){return/firefox\//i.test(t)}function Lm(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fm(t=gt()){return/crios\//i.test(t)}function Um(t=gt()){return/iemobile/i.test(t)}function Bm(t=gt()){return/android/i.test(t)}function jm(t=gt()){return/blackberry/i.test(t)}function $m(t=gt()){return/webos/i.test(t)}function pu(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lb(t=gt()){var e;return pu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fb(){return WE()&&document.documentMode===10}function Hm(t=gt()){return pu(t)||Bm(t)||$m(t)||jm(t)||/windows phone/i.test(t)||Um(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e=[]){let n;switch(t){case"Browser":n=Gf(gt());break;case"Worker":n=`${Gf(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e={}){return gs(t,"GET","/v2/passwordPolicy",fu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=6;class $b{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new Ub(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vm(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bn(this.app))return Promise.reject(yr(this));const n=e?Tt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bb(this),n=new $b(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gu(t){return Tt(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qb(t){mu=t}function Wb(t){return mu.loadJS(t)}function Kb(){return mu.gapiScript}function zb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return s;_n(s,"already-initialized")}return n.initialize({options:e})}function Qb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jb(t,e,n){const r=gu(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Wm(e),{host:o,port:l}=Yb(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Xb()}function Wm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yb(t){const e=Wm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jf(o)}}}function Jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return Sb(t,"POST","/v1/accounts:signInWithIdp",fu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class Rr extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ki{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ki{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ki{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=Yf(r);return new as({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Yf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends En{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ko(e,n,r,s)}}function Gm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,i,e,r):i})}async function e0(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e,n=!1){const{auth:r}=t;if(Bn(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await ui(t,Gm(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=du(i.idToken);ue(o,r,"internal-error");const{sub:l}=o;return ue(t.uid===l,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t,e,n=!1){if(Bn(t.app))return Promise.reject(yr(t));const r="signIn",s=await Gm(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function r0(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function s0(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}const zo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=1e3,o0=10;class Jm extends Qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Fb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,o0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jm.type="LOCAL";const a0=Jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym extends Qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ym.type="SESSION";const Xm=Ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ra(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await l0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ra.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=_u("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function u0(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function h0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d0(){return Zm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebaseLocalStorageDb",p0=1,Go="firebaseLocalStorage",t_="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function g0(){const t=indexedDB.deleteDatabase(e_);return new Oi(t).toPromise()}function Zl(){const t=indexedDB.open(e_,p0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:t_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await g0(),e(await Zl()))})})}async function Xf(t,e,n){const r=Sa(t,!0).put({[t_]:e,value:n});return new Oi(r).toPromise()}async function m0(t,e){const n=Sa(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Sa(t,!0).delete(e);return new Oi(n).toPromise()}const _0=800,y0=3;class n_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ra._getInstance(d0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h0(),!this.activeServiceWorker)return;this.sender=new c0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zl();return await Xf(e,zo,"1"),await Zf(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>m0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n_.type="LOCAL";const v0=n_;new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e){return e?dn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends Km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T0(t){return n0(t.auth,new yu(t),t.bypassAuthState)}function w0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),t0(n,new yu(t),t.bypassAuthState)}async function I0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),e0(n,new yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return w0;default:_n(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new Ci(2e3,1e4);class jr extends r_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A0.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="pendingRedirect",_o=new Map;class R0 extends r_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await S0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S0(t,e){const n=k0(e),r=C0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function P0(t,e){_o.set(t._key(),e)}function C0(t){return dn(t._redirectPersistence)}function k0(t){return mo(b0,t.config.apiKey,t.name)}async function O0(t,e,n=!1){if(Bn(t.app))return Promise.reject(yr(t));const r=gu(t),s=E0(r,e),o=await new R0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=10*60*1e3;class V0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!s_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=D0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function s_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L0=/^https?/;async function F0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x0(t);for(const n of e)try{if(U0(n))return}catch{}_n(t,"unauthorized-domain")}function U0(t){const e=Yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!L0.test(n))return!1;if(M0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Ci(3e4,6e4);function td(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function j0(t){return new Promise((e,n)=>{var r,s,i;function o(){td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{td(),n(Zt(t,"network-request-failed"))},timeout:B0.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const l=zb("iframefcb");return en()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Wb(`${Kb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw yo=null,e})}let yo=null;function $0(t){return yo=yo||j0(t),yo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Ci(5e3,15e3),q0="__/auth/iframe",W0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G0(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hu(e,W0):`https://${t.config.authDomain}/${q0}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=z0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vi(r).slice(1)}`}async function Q0(t){const e=await $0(t),n=en().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:G0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{i(o)},H0.get());function c(){en().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y0=500,X0=600,Z0="_blank",eR="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tR(t,e,n,r=Y0,s=X0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},J0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=gt().toLowerCase();n&&(l=Fm(h)?Z0:n),Mm(h)&&(e=e||eR,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(Lb(h)&&l!=="_self")return nR(e||"",l),new nd(null);const p=window.open(e||"",l,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function nR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="__/auth/handler",sR="emulator/auth/handler",iR=encodeURIComponent("fac");async function rd(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof zm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${iR}=${encodeURIComponent(c)}`:"";return`${oR(t)}?${vi(l).slice(1)}${h}`}function oR({config:t}){return t.emulator?hu(t,sR):`https://${t.authDomain}/${rR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xm,this._completeRedirectFn=O0,this._overrideRedirectResult=P0}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rd(e,n,r,Yl(),s);return tR(e,o,_u())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rd(e,n,r,Yl(),s);return u0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q0(e),r=new V0(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dl];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hm()||Lm()||pu()}}const lR=aR;var sd="@firebase/auth",id="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hR(t){Zr(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(t)},h=new Hb(r,s,i,c);return Qb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Tr("auth-internal",e=>{const n=gu(e.getProvider("auth").getImmediate());return(r=>new cR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(sd,id,uR(t)),Gn(sd,id,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=5*60,dR=eg("authIdTokenMaxAge")||fR;let od=null;const pR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dR)return;const s=n==null?void 0:n.token;od!==s&&(od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gR(t=sg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gb(t,{popupRedirectResolver:lR,persistence:[v0,a0,Xm]}),r=eg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pR(i.toString());s0(n,o,()=>o(n.currentUser)),r0(n,l=>o(l))}}const s=Xp("auth");return s&&Jb(n,`http://${s}`),n}function mR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hR("Browser");const _R={apiKey:"AIzaSyBjP3AEJNKVFp07ROomynZ_QzNYyzsug_4",authDomain:"vet-onlain.firebaseapp.com",databaseURL:"https://vet-onlain-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"vet-onlain",storageBucket:"vet-onlain.appspot.com",messagingSenderId:"140746709659",appId:"1:140746709659:web:2d91a30a8a23c86eb4043e"},i_=rg(_R),$n=ZA(i_);gR(i_);const yR=Gp("buildings",()=>{const t=Ge([]),e=Ge(!1),n=Ge(null);return{buildings:t,loading:e,error:n,fetchBuildings:async()=>{e.value=!0,n.value=null;try{const l=await Im($o($n,"buildings"));t.value=l.docs.map(c=>({id:c.id,...c.data()}))}catch(l){throw n.value=l.message,console.error("Error loading buildings:",l),l}finally{e.value=!1}},addBuilding:async l=>{try{const h={id:(await Rm($o($n,"buildings"),{...l,createdAt:new Date().toISOString()})).id,...l};return t.value.push(h),h}catch(c){throw n.value=c.message,console.error("Error adding building:",c),c}},updateBuilding:async(l,c)=>{try{const h=ci($n,"buildings",l);await Am(h,{...c,updatedAt:new Date().toISOString()});const f=t.value.findIndex(p=>p.id===l);f!==-1&&(t.value[f]={...t.value[f],...c})}catch(h){throw n.value=h.message,console.error("Error updating building:",h),h}},deleteBuilding:async l=>{try{await bm(ci($n,"buildings",l)),t.value=t.value.filter(c=>c.id!==l)}catch(c){throw n.value=c.message,console.error("Error deleting building:",c),c}}}}),vR=Gp("apartments",()=>{const t=Ge([]),e=Ge(!1),n=Ge(null);return{apartments:t,loading:e,error:n,fetchApartments:async(c=null)=>{e.value=!0,n.value=null;try{let h=$o($n,"apartments");c&&(h=fb(h,db("buildingId","==",c)));const f=await Im(h);t.value=f.docs.map(p=>({id:p.id,...p.data()}))}catch(h){throw n.value=h.message,console.error("Error loading apartments:",h),h}finally{e.value=!1}},addApartment:async c=>{try{const f={id:(await Rm($o($n,"apartments"),{...c,createdAt:new Date().toISOString()})).id,...c};return t.value.push(f),f}catch(h){throw n.value=h.message,console.error("Error adding apartment:",h),h}},updateApartment:async(c,h)=>{try{const f=ci($n,"apartments",c);await Am(f,{...h,updatedAt:new Date().toISOString()});const p=t.value.findIndex(g=>g.id===c);p!==-1&&(t.value[p]={...t.value[p],...h})}catch(f){throw n.value=f.message,console.error("Error updating apartment:",f),f}},deleteApartment:async c=>{try{await bm(ci($n,"apartments",c)),t.value=t.value.filter(h=>h.id!==c)}catch(h){throw n.value=h.message,console.error("Error deleting apartment:",h),h}},getApartmentsByBuilding:c=>t.value.filter(h=>h.buildingId===c)}}),o_=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ER={class:"modal-body"},TR={class:"filters"},wR=["value"],IR=["disabled"],AR=["value"],bR={class:"stats"},RR={class:"stat-card"},SR={class:"stat-card"},PR={class:"amount"},CR={class:"stat-card"},kR={class:"amount"},OR={class:"payment-history"},DR={class:"table-container"},VR={__name:"DebtDetailsModal",props:{show:Boolean},emits:["close"],setup(t,{emit:e}){const n=e,r=yR(),s=vR(),i=Ge(""),o=Ge(""),l=Ge([]),c=Ge([]),h=Ge([]),f=[{id:1,date:"2024-03-01",buildingId:"1",apartmentId:"1",amount:5e3,status:"paid"},{id:2,date:"2024-03-15",buildingId:"1",apartmentId:"2",amount:6e3,status:"pending"},{id:3,date:"2024-03-20",buildingId:"2",apartmentId:"3",amount:5500,status:"paid"},{id:4,date:"2024-03-25",buildingId:"2",apartmentId:"4",amount:7e3,status:"pending"}],p=tt(()=>i.value?c.value.filter(W=>W.buildingId===i.value):[]),g=tt(()=>{let W=h.value;return i.value&&(W=W.filter(q=>q.buildingId===i.value)),o.value&&(W=W.filter(q=>q.apartmentId===o.value)),W}),_=tt(()=>g.value.filter(W=>W.status==="pending").reduce((W,q)=>W+q.amount,0)),S=tt(()=>{const W=g.value.filter(q=>q.status==="paid");return W.length===0?0:W.reduce((q,T)=>q+T.amount,0)/W.length}),k=tt(()=>{const W=g.value.length,q=g.value.filter(T=>T.status==="paid").length;return W>0?Math.round(q/W*100):0}),O=()=>{n("close")},B=W=>new Date(W).toLocaleDateString("ru-RU"),j=W=>{const q=l.value.find(T=>T.id===W);return q?q.name:"Неизвестно"},F=W=>{const q=c.value.find(T=>T.id===W);return q?q.number:"Неизвестно"},H=()=>{o.value=""};return Tc(async()=>{try{await r.fetchBuildings(),await s.fetchApartments(),l.value=r.buildings,c.value=s.apartments,h.value=f}catch(W){console.error("Error loading data:",W)}}),(W,q)=>t.show?(Mt(),Pn("div",{key:0,class:"modal-overlay",onClick:O},[ce("div",{class:"modal-content",onClick:q[2]||(q[2]=yE(()=>{},["stop"]))},[ce("div",{class:"modal-header"},[q[4]||(q[4]=ce("h2",null,"Детальная информация о долгах",-1)),ce("button",{class:"close-button",onClick:O},q[3]||(q[3]=[ce("i",{class:"fas fa-times"},null,-1)]))]),ce("div",ER,[ce("div",TR,[_h(ce("select",{"onUpdate:modelValue":q[0]||(q[0]=T=>i.value=T),onChange:H},[q[5]||(q[5]=ce("option",{value:""},"Все дома",-1)),(Mt(!0),Pn(Et,null,Ya(l.value,T=>(Mt(),Pn("option",{key:T.id,value:T.id},xt(T.name),9,wR))),128))],544),[[$h,i.value]]),_h(ce("select",{"onUpdate:modelValue":q[1]||(q[1]=T=>o.value=T),disabled:!i.value},[q[6]||(q[6]=ce("option",{value:""},"Все квартиры",-1)),(Mt(!0),Pn(Et,null,Ya(p.value,T=>(Mt(),Pn("option",{key:T.id,value:T.id}," Кв. "+xt(T.number),9,AR))),128))],8,IR),[[$h,o.value]])]),ce("div",bR,[ce("div",RR,[q[7]||(q[7]=ce("h3",null,"Общая сумма долга",-1)),ce("p",{class:vr(["amount",{"has-debt":_.value>0}])},xt(_.value.toLocaleString("ru-RU"))+" ₽ ",3)]),ce("div",SR,[q[8]||(q[8]=ce("h3",null,"Средняя сумма платежа",-1)),ce("p",PR,xt(S.value.toLocaleString("ru-RU"))+" ₽",1)]),ce("div",CR,[q[9]||(q[9]=ce("h3",null,"Процент оплаты",-1)),ce("p",kR,xt(k.value)+"%",1)])]),ce("div",OR,[q[11]||(q[11]=ce("h3",null,"История платежей",-1)),ce("div",DR,[ce("table",null,[q[10]||(q[10]=ce("thead",null,[ce("tr",null,[ce("th",null,"Дата"),ce("th",null,"Дом"),ce("th",null,"Квартира"),ce("th",null,"Сумма"),ce("th",null,"Статус")])],-1)),ce("tbody",null,[(Mt(!0),Pn(Et,null,Ya(g.value,T=>(Mt(),Pn("tr",{key:T.id},[ce("td",null,xt(B(T.date)),1),ce("td",null,xt(j(T.buildingId)),1),ce("td",null,xt(F(T.apartmentId)),1),ce("td",null,xt(T.amount.toLocaleString("ru-RU"))+" ₽",1),ce("td",null,[ce("span",{class:vr(T.status==="paid"?"status-paid":"status-pending")},xt(T.status==="paid"?"Оплачено":"Ожидает оплаты"),3)])]))),128))])])])])])])])):Fv("",!0)}},NR=o_(VR,[["__scopeId","data-v-058455ff"]]),xR={class:"app-layout"},MR={class:"header"},LR={class:"nav"},FR={class:"main-content"},UR={__name:"MainLayout",setup(t){const e=Ge(15e3),n=Ge(!1),r=()=>{n.value=!0},s=()=>{n.value=!1};return Tc(()=>{}),(i,o)=>{const l=vp("router-link");return Mt(),Pn("div",xR,[ce("header",MR,[ce("nav",LR,[Le(l,{to:"/",class:"nav-link","active-class":"active"},{default:Dn(()=>o[0]||(o[0]=[Cn("Главная")])),_:1}),Le(l,{to:"/buildings",class:"nav-link","active-class":"active"},{default:Dn(()=>o[1]||(o[1]=[Cn("Дома")])),_:1}),Le(l,{to:"/apartments",class:"nav-link","active-class":"active"},{default:Dn(()=>o[2]||(o[2]=[Cn("Квартиры")])),_:1}),Le(l,{to:"/residents",class:"nav-link","active-class":"active"},{default:Dn(()=>o[3]||(o[3]=[Cn("Жильцы")])),_:1}),Le(l,{to:"/utilities",class:"nav-link","active-class":"active"},{default:Dn(()=>o[4]||(o[4]=[Cn("Коммунальные услуги")])),_:1}),Le(l,{to:"/tickets",class:"nav-link","active-class":"active"},{default:Dn(()=>o[5]||(o[5]=[Cn("Заявки")])),_:1})]),ce("div",{class:vr(["debt-info",{"has-debt":e.value>0}]),onClick:r},[ce("i",{class:vr(["fas",e.value>0?"fa-exclamation-circle":"fa-check-circle"])},null,2),Cn(" "+xt(e.value>0?`Общий долг: ${e.value.toLocaleString("ru-RU")} ₽`:"Все оплачено"),1)],2)]),ce("main",FR,[sv(i.$slots,"default",{},void 0)]),Le(NR,{show:n.value,onClose:s},null,8,["show"])])}}},BR=o_(UR,[["__scopeId","data-v-c91af6df"]]),jR={__name:"App",setup(t){return(e,n)=>{const r=vp("router-view");return Mt(),So(BR,null,{default:Dn(()=>[Le(r)]),_:1})}}},$R="modulepreload",HR=function(t){return"/"+t},ad={},ur=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=HR(c),c in ad)return;ad[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":$R,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function a_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&a_(t.default)}const be=Object.assign;function pl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const Gs=()=>{},Wt=Array.isArray,l_=/#/g,WR=/&/g,KR=/\//g,zR=/=/g,GR=/\?/g,c_=/\+/g,QR=/%5B/g,JR=/%5D/g,u_=/%5E/g,YR=/%60/g,h_=/%7B/g,XR=/%7C/g,f_=/%7D/g,ZR=/%20/g;function vu(t){return encodeURI(""+t).replace(XR,"|").replace(QR,"[").replace(JR,"]")}function eS(t){return vu(t).replace(h_,"{").replace(f_,"}").replace(u_,"^")}function ec(t){return vu(t).replace(c_,"%2B").replace(ZR,"+").replace(l_,"%23").replace(WR,"%26").replace(YR,"`").replace(h_,"{").replace(f_,"}").replace(u_,"^")}function tS(t){return ec(t).replace(zR,"%3D")}function nS(t){return vu(t).replace(l_,"%23").replace(GR,"%3F")}function rS(t){return t==null?"":nS(t).replace(KR,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sS=/\/$/,iS=t=>t.replace(sS,"");function gl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=cS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:hi(o)}}function oS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ld(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ls(e.matched[r],n.matched[s])&&d_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function d_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lS(t[n],e[n]))return!1;return!0}function lS(t,e){return Wt(t)?cd(t,e):Wt(e)?cd(e,t):t===e}function cd(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qs||(Qs={}));function uS(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iS(t)}const hS=/^[^#]+#/;function fS(t,e){return t.replace(hS,"#")+e}function dS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function pS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ud(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function gS(t,e){tc.set(t,e)}function mS(t){const e=tc.get(t);return tc.delete(t),e}let _S=()=>location.protocol+"//"+location.host;function p_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ld(c,"")}return ld(n,t)+r+s}function yS(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=p_(t,location),S=n.value,k=e.value;let O=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}O=k?g.position-k.position:0}else r(_);s.forEach(B=>{B(n.value,S,{delta:O,type:fi.pop,direction:O?O>0?Qs.forward:Qs.back:Qs.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(be({},g.state,{scroll:Pa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function hd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function vS(t){const{history:e,location:n}=window,r={value:p_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:_S()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(c,h){const f=be({},e.state,hd(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=be({},s.value,e.state,{forward:c,scroll:Pa()});i(f.current,f,!0);const p=be({},hd(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function ES(t){t=uS(t);const e=vS(t),n=yS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:fS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TS(t){return typeof t=="string"||t&&typeof t=="object"}function g_(t){return typeof t=="string"||typeof t=="symbol"}const m_=Symbol("");var fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fd||(fd={}));function cs(t,e){return be(new Error,{type:t,[m_]:!0},e)}function an(t,e){return t instanceof Error&&m_ in t&&(e==null||!!(t.type&e))}const dd="[^/]+?",wS={sensitive:!1,strict:!1,start:!0,end:!0},IS=/[.+*?^${}()[\]/\\]/g;function AS(t,e){const n=be({},wS,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(IS,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:k,optional:O,regexp:B}=g;i.push({name:S,repeatable:k,optional:O});const j=B||dd;if(j!==dd){_+=10;try{new RegExp(`(${j})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${S}" (${j}): `+H.message)}}let F=k?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(F=O&&h.length<2?`(?:/${F})`:"/"+F),O&&(F+="?"),s+=F,_+=20,O&&(_+=-8),k&&(_+=-20),j===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",S=i[g-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:O}=_,B=S in h?h[S]:"";if(Wt(B)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const j=Wt(B)?B.join("/"):B;if(!j)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=j}}return f||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function bS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function __(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pd(r))return 1;if(pd(s))return-1}return s.length-r.length}function pd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RS={type:0,value:""},SS=/[a-zA-Z0-9_]/;function PS(t){if(!t)return[[]];if(t==="/")return[[RS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:SS.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function CS(t,e,n){const r=AS(PS(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kS(t,e){const n=[],r=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const S=!_,k=md(p);k.aliasOf=_&&_.record;const O=yd(e,p),B=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const W of H)B.push(md(be({},k,{components:_?_.record.components:k.components,path:W,aliasOf:_?_.record:k})))}let j,F;for(const H of B){const{path:W}=H;if(g&&W[0]!=="/"){const q=g.record.path,T=q[q.length-1]==="/"?"":"/";H.path=g.record.path+(W&&T+W)}if(j=CS(H,g,O),_?_.alias.push(j):(F=F||j,F!==j&&F.alias.push(j),S&&p.name&&!_d(j)&&o(p.name)),y_(j)&&c(j),k.children){const q=k.children;for(let T=0;T<q.length;T++)i(q[T],j,_&&_.children[T])}_=_||j}return F?()=>{o(F)}:Gs}function o(p){if(g_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=VS(p,n);n.splice(g,0,p),p.record.name&&!_d(p)&&r.set(p.record.name,p)}function h(p,g){let _,S={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw cs(1,{location:p});O=_.record.name,S=be(gd(g.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&gd(p.params,_.keys.map(F=>F.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(F=>F.re.test(k)),_&&(S=_.parse(k),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find(F=>F.re.test(g.path)),!_)throw cs(1,{location:p,currentLocation:g});O=_.record.name,S=be({},g.params,p.params),k=_.stringify(S)}const B=[];let j=_;for(;j;)B.unshift(j.record),j=j.parent;return{name:O,path:k,params:S,matched:B,meta:DS(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function gd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:OS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function OS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function _d(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function DS(t){return t.reduce((e,n)=>be(e,n.meta),{})}function yd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function VS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;__(t,e[i])<0?r=i:n=i+1}const s=NS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function NS(t){let e=t;for(;e=e.parent;)if(y_(e)&&__(t,e)===0)return e}function y_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function xS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(c_," "),o=i.indexOf("="),l=hi(o<0?i:i.slice(0,o)),c=o<0?null:hi(i.slice(o+1));if(l in e){let h=e[l];Wt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function vd(t){let e="";for(let n in t){const r=t[n];if(n=tS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&ec(i)):[r&&ec(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function MS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const LS=Symbol(""),Ed=Symbol(""),Ca=Symbol(""),Eu=Symbol(""),nc=Symbol("");function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(cs(4,{from:n,to:e})):g instanceof Error?c(g):TS(g)?c(cs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ml(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(a_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Nn(f,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=qR(f)?f.default:f;o.mods[l]=f,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Nn(_,n,r,o,l,s)()}))}}return i}function Td(t){const e=kt(Ca),n=kt(Eu),r=tt(()=>{const c=Wn(t.to);return e.resolve(c)}),s=tt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ls.bind(null,f));if(g>-1)return g;const _=wd(c[h-2]);return h>1&&wd(f)===_&&p[p.length-1].path!==_?p.findIndex(ls.bind(null,c[h-2])):g}),i=tt(()=>s.value>-1&&$S(n.params,r.value.params)),o=tt(()=>s.value>-1&&s.value===n.matched.length-1&&d_(n.params,r.value.params));function l(c={}){if(jS(c)){const h=e[Wn(t.replace)?"replace":"push"](Wn(t.to)).catch(Gs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:tt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function FS(t){return t.length===1?t[0]:t}const US=hp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Td,setup(t,{slots:e}){const n=pi(Td(t)),{options:r}=kt(Ca),s=tt(()=>({[Id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&FS(e.default(n));return t.custom?i:$p("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BS=US;function jS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $S(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,HS=hp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(nc),s=tt(()=>t.route||r.value),i=kt(Ed,0),o=tt(()=>{let h=Wn(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=tt(()=>s.value.matched[o.value]);io(Ed,tt(()=>o.value+1)),io(LS,l),io(nc,s);const c=Ge();return Kr(()=>[c.value,l.value,t.name],([h,f,p],[g,_,S])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!ls(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return Ad(n.default,{Component:g,route:h});const _=p.props[f],S=_?_===!0?h.params:typeof _=="function"?_(h):_:null,O=$p(g,be({},S,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return Ad(n.default,{Component:O,route:h})||O}}});function Ad(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qS=HS;function WS(t){const e=kS(t.routes,t),n=t.parseQuery||xS,r=t.stringifyQuery||vd,s=t.history,i=Ds(),o=Ds(),l=Ds(),c=Dy(Sn);let h=Sn;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=pl.bind(null,V=>""+V),p=pl.bind(null,rS),g=pl.bind(null,hi);function _(V,X){let J,ee;return g_(V)?(J=e.getRecordMatcher(V),ee=X):ee=V,e.addRoute(ee,J)}function S(V){const X=e.getRecordMatcher(V);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function B(V,X){if(X=be({},X||c.value),typeof V=="string"){const P=gl(n,V,X.path),N=e.resolve({path:P.path},X),M=s.createHref(P.fullPath);return be(P,N,{params:g(N.params),hash:hi(P.hash),redirectedFrom:void 0,href:M})}let J;if(V.path!=null)J=be({},V,{path:gl(n,V.path,X.path).path});else{const P=be({},V.params);for(const N in P)P[N]==null&&delete P[N];J=be({},V,{params:p(P)}),X.params=p(X.params)}const ee=e.resolve(J,X),Te=V.hash||"";ee.params=f(g(ee.params));const E=oS(r,be({},V,{hash:eS(Te),path:ee.path})),I=s.createHref(E);return be({fullPath:E,hash:Te,query:r===vd?MS(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:I})}function j(V){return typeof V=="string"?gl(n,V,c.value.path):be({},V)}function F(V,X){if(h!==V)return cs(8,{from:X,to:V})}function H(V){return T(V)}function W(V){return H(be(j(V),{replace:!0}))}function q(V){const X=V.matched[V.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let ee=typeof J=="function"?J(V):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),be({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function T(V,X){const J=h=B(V),ee=c.value,Te=V.state,E=V.force,I=V.replace===!0,P=q(J);if(P)return T(be(j(P),{state:typeof P=="object"?be({},Te,P.state):Te,force:E,replace:I}),X||J);const N=J;N.redirectedFrom=X;let M;return!E&&aS(r,ee,J)&&(M=cs(16,{to:N,from:ee}),Dt(ee,ee,!0,!1)),(M?Promise.resolve(M):A(N,ee)).catch(x=>an(x)?an(x,2)?x:Ut(x):me(x,N,ee)).then(x=>{if(x){if(an(x,2))return T(be({replace:I},j(x.to),{state:typeof x.to=="object"?be({},Te,x.to.state):Te,force:E}),X||N)}else x=R(N,ee,!0,I,Te);return b(N,ee,x),x})}function y(V,X){const J=F(V,X);return J?Promise.reject(J):Promise.resolve()}function v(V){const X=Tn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(V):V()}function A(V,X){let J;const[ee,Te,E]=KS(V,X);J=ml(ee.reverse(),"beforeRouteLeave",V,X);for(const P of ee)P.leaveGuards.forEach(N=>{J.push(Nn(N,V,X))});const I=y.bind(null,V,X);return J.push(I),It(J).then(()=>{J=[];for(const P of i.list())J.push(Nn(P,V,X));return J.push(I),It(J)}).then(()=>{J=ml(Te,"beforeRouteUpdate",V,X);for(const P of Te)P.updateGuards.forEach(N=>{J.push(Nn(N,V,X))});return J.push(I),It(J)}).then(()=>{J=[];for(const P of E)if(P.beforeEnter)if(Wt(P.beforeEnter))for(const N of P.beforeEnter)J.push(Nn(N,V,X));else J.push(Nn(P.beforeEnter,V,X));return J.push(I),It(J)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),J=ml(E,"beforeRouteEnter",V,X,v),J.push(I),It(J))).then(()=>{J=[];for(const P of o.list())J.push(Nn(P,V,X));return J.push(I),It(J)}).catch(P=>an(P,8)?P:Promise.reject(P))}function b(V,X,J){l.list().forEach(ee=>v(()=>ee(V,X,J)))}function R(V,X,J,ee,Te){const E=F(V,X);if(E)return E;const I=X===Sn,P=Br?history.state:{};J&&(ee||I?s.replace(V.fullPath,be({scroll:I&&P&&P.scroll},Te)):s.push(V.fullPath,Te)),c.value=V,Dt(V,X,J,I),Ut()}let w;function Je(){w||(w=s.listen((V,X,J)=>{if(!Kt.listening)return;const ee=B(V),Te=q(ee);if(Te){T(be(Te,{replace:!0,force:!0}),ee).catch(Gs);return}h=ee;const E=c.value;Br&&gS(ud(E.fullPath,J.delta),Pa()),A(ee,E).catch(I=>an(I,12)?I:an(I,2)?(T(be(j(I.to),{force:!0}),ee).then(P=>{an(P,20)&&!J.delta&&J.type===fi.pop&&s.go(-1,!1)}).catch(Gs),Promise.reject()):(J.delta&&s.go(-J.delta,!1),me(I,ee,E))).then(I=>{I=I||R(ee,E,!1),I&&(J.delta&&!an(I,8)?s.go(-J.delta,!1):J.type===fi.pop&&an(I,20)&&s.go(-1,!1)),b(ee,E,I)}).catch(Gs)}))}let wt=Ds(),ke=Ds(),le;function me(V,X,J){Ut(V);const ee=ke.list();return ee.length?ee.forEach(Te=>Te(V,X,J)):console.error(V),Promise.reject(V)}function bt(){return le&&c.value!==Sn?Promise.resolve():new Promise((V,X)=>{wt.add([V,X])})}function Ut(V){return le||(le=!V,Je(),wt.list().forEach(([X,J])=>V?J(V):X()),wt.reset()),V}function Dt(V,X,J,ee){const{scrollBehavior:Te}=t;if(!Br||!Te)return Promise.resolve();const E=!J&&mS(ud(V.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return mi().then(()=>Te(V,X,E)).then(I=>I&&pS(I)).catch(I=>me(I,V,X))}const xe=V=>s.go(V);let Me;const Tn=new Set,Kt={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:B,options:t,push:H,replace:W,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ke.add,isReady:bt,install(V){const X=this;V.component("RouterLink",BS),V.component("RouterView",qS),V.config.globalProperties.$router=X,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(c)}),Br&&!Me&&c.value===Sn&&(Me=!0,H(s.location).catch(Te=>{}));const J={};for(const Te in Sn)Object.defineProperty(J,Te,{get:()=>c.value[Te],enumerable:!0});V.provide(Ca,X),V.provide(Eu,np(J)),V.provide(nc,c);const ee=V.unmount;Tn.add(V),V.unmount=function(){Tn.delete(V),Tn.size<1&&(h=Sn,w&&w(),w=null,c.value=Sn,Me=!1,le=!1),ee()}}};function It(V){return V.reduce((X,J)=>X.then(()=>v(J)),Promise.resolve())}return Kt}function KS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>ls(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>ls(h,c))||s.push(c))}return[n,r,s]}function qP(){return kt(Ca)}function WP(t){return kt(Eu)}const zS=[{path:"/",name:"Home",component:()=>ur(()=>import("./Home-3ZW57U_R.js"),__vite__mapDeps([0,1,2]))},{path:"/buildings",name:"Buildings",component:()=>ur(()=>import("./Buildings-BpkqLZP3.js"),__vite__mapDeps([3,4]))},{path:"/buildings/:id",name:"BuildingDetails",component:()=>ur(()=>import("./BuildingDetails-B3oS7zFN.js"),__vite__mapDeps([5,6]))},{path:"/apartments",name:"Apartments",component:()=>ur(()=>import("./Apartments-DStyNZm-.js"),__vite__mapDeps([7,1,8]))},{path:"/residents",name:"Residents",component:()=>ur(()=>import("./Residents-cVgDFant.js"),__vite__mapDeps([9,1,10]))},{path:"/utilities",name:"Utilities",component:()=>ur(()=>import("./Utilities-DIDr4qy7.js"),__vite__mapDeps([11,1,12]))},{path:"/tickets",name:"Tickets",component:()=>ur(()=>import("./Tickets-shTHrUG3.js"),__vite__mapDeps([13,1,14]))},{path:"/:pathMatch(.*)*",redirect:"/"}],v_=WS({history:ES("/crm/"),routes:zS,scrollBehavior(t,e,n){return n||{top:0}}}),GS=new Set(["title","titleTemplate","script","style","noscript"]),vo=new Set(["base","meta","link","style","script","noscript"]),QS=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),JS=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),E_=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),YS=typeof window<"u";function Qo(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function rc(t){if(t._h)return t._h;if(t._d)return Qo(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return Qo(e)}function XS(t,e){return t instanceof Promise?t.then(e):e(t)}function sc(t,e,n,r){const s=r||w_(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>sc(t,e,n,o));const i={tag:t,props:s};for(const o of E_){const l=i.props[o]!==void 0?i.props[o]:n[o];l!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||GS.has(i.tag))&&(i[o==="children"?"innerHTML":o]=l),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function ZS(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function T_(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=ZS(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,T_(t,e,n,s)));if(!e&&!E_.has(i)){const o=String(t[i]),l=i.startsWith("data-");o==="true"||o===""?t[i]=l?"true":!0:t[i]||(l&&o==="false"?t[i]="false":delete t[i])}}}function w_(t,e=!1){const n=T_(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const eP=10;function I_(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,I_(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function tP(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!QS.has(s))){if(Array.isArray(i)){for(const o of i)e.push(sc(s,o,t));continue}e.push(sc(s,i,t))}}if(e.length===0)return[];const r=[];return XS(I_(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<eP)+i,s)))}const bd=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Rd={base:-10,title:10},Sd={critical:-80,high:-10,low:20};function Jo(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in Rd&&(n=Rd[t.tag]),e&&e in Sd?n+Sd[e]:n}const nP=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],rP=["name","property","http-equiv"];function A_(t){const{props:e,tag:n}=t;if(JS.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of rP)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const xn="%separator";function sP(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const iP=new RegExp(`${xn}(?:\\s*${xn})*`,"g");function ro(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(xn);return t=t.replace(/%\w+(?:\.\w+)?/g,l=>{if(l===xn||!i.includes(l))return l;const c=sP(e,l.slice(1),r);return c!==void 0?c:l}).trim(),o&&(t.endsWith(xn)&&(t=t.slice(0,-xn.length)),t.startsWith(xn)&&(t=t.slice(xn.length)),t=t.replace(iP,n).trim()),t}function Pd(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function b_(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var p;const i=(await t.resolveTags()).map(g=>({tag:g,id:vo.has(g.tag)?rc(g):g.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const g=new Set;for(const _ of["body","head"]){const S=(p=n[_])==null?void 0:p.children;for(const k of S){const O=k.tagName.toLowerCase();if(!vo.has(O))continue;const B={tag:O,props:await w_(k.getAttributeNames().reduce((W,q)=>({...W,[q]:k.getAttribute(q)}),{})),innerHTML:k.innerHTML},j=A_(B);let F=j,H=1;for(;F&&g.has(F);)F=`${j}:${H++}`;F&&(B._d=F,g.add(F)),o.elMap[k.getAttribute("data-hid")||rc(B)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function l(g,_,S){const k=`${g}:${_}`;o.sideEffects[k]=S,delete o.pendingSideEffects[k]}function c({id:g,$el:_,tag:S}){const k=S.tag.endsWith("Attrs");if(o.elMap[g]=_,k||(S.textContent&&S.textContent!==_.textContent&&(_.textContent=S.textContent),S.innerHTML&&S.innerHTML!==_.innerHTML&&(_.innerHTML=S.innerHTML),l(g,"el",()=>{var O;(O=o.elMap[g])==null||O.remove(),delete o.elMap[g]})),S._eventHandlers)for(const O in S._eventHandlers)Object.prototype.hasOwnProperty.call(S._eventHandlers,O)&&_.getAttribute(`data-${O}`)!==""&&((S.tag==="bodyAttrs"?n.defaultView:_).addEventListener(O.substring(2),S._eventHandlers[O].bind(_)),_.setAttribute(`data-${O}`,""));for(const O in S.props){if(!Object.prototype.hasOwnProperty.call(S.props,O))continue;const B=S.props[O],j=`attr:${O}`;if(O==="class"){if(!B)continue;for(const F of B.split(" "))k&&l(g,`${j}:${F}`,()=>_.classList.remove(F)),!_.classList.contains(F)&&_.classList.add(F)}else if(O==="style"){if(!B)continue;for(const F of B.split(";")){const H=F.indexOf(":"),W=F.substring(0,H).trim(),q=F.substring(H+1).trim();l(g,`${j}:${W}`,()=>{_.style.removeProperty(W)}),_.style.setProperty(W,q)}}else _.getAttribute(O)!==B&&_.setAttribute(O,B===!0?"":String(B)),k&&l(g,j,()=>_.removeAttribute(O))}}const h=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const g of i){const{tag:_,shouldRender:S,id:k}=g;if(S){if(_.tag==="title"){n.title=_.textContent;continue}g.$el=g.$el||o.elMap[k],g.$el?c(g):vo.has(_.tag)&&h.push(g)}}for(const g of h){const _=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),c(g),f[_]=f[_]||n.createDocumentFragment(),f[_].appendChild(g.$el)}for(const g of i)await t.hooks.callHook("dom:renderTag",g,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const g in o.pendingSideEffects)o.pendingSideEffects[g]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function R_(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>b_(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function oP(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{R_(i,t)}}}}}function ic(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?ic(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const aP={run:t=>t()},lP=()=>aP,S_=typeof console.createTask<"u"?console.createTask:lP;function cP(t,e){const n=e.shift(),r=S_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function uP(t,e){const n=e.shift(),r=S_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function _l(t,e){for(const n of[...t])n(e)}class hP{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=ic(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=ic(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(cP,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(uP,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&_l(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&_l(this._after,s)}):(this._after&&s&&_l(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function fP(){return new hP}const dP=new Set(["templateParams","htmlAttrs","bodyAttrs"]),pP={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=A_(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||rc(r),i=e[s];if(i){let l=r==null?void 0:r.tagDuplicateStrategy;if(!l&&dP.has(r.tag)&&(l="merge"),l==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(Jo(r)>Jo(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&vo.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},gP=new Set(["script","link","bodyAttrs"]),mP=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!gP.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&bd.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Qo(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const l=o.slice(0,-5);bd.has(l)&&((i=(s=n._eventHandlers)==null?void 0:s[l])==null||i.call(e,new Event(l.substring(2))))}}}}),_P=new Set(["link","style","script","noscript"]),yP={hooks:{"tag:normalise":({tag:t})=>{t.key&&_P.has(t.tag)&&(t.props["data-hid"]=t._h=Qo(t.key))}}},vP={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},EP={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of nP){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(l=>l._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=Jo(n),i=Jo(r);return s<i?-1:s>i?1:n._p-r._p})}}},TP={meta:"content",link:"href",htmlAttrs:"lang"},wP=["innerHTML","textContent"],IP=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let l=0;l<n.length;l+=1)n[l].tag==="templateParams"&&(r=e.tags.splice(l,1)[0].props,l-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=ro(s.pageTitle||((o=n.find(l=>l.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const l of n){if(l.processTemplateParams===!1)continue;const c=TP[l.tag];if(c&&typeof l.props[c]=="string")l.props[c]=ro(l.props[c],s,i);else if(l.processTemplateParams||l.tag==="titleTemplate"||l.tag==="title")for(const h of wP)typeof l[h]=="string"&&(l[h]=ro(l[h],s,i,l.tag==="script"&&l.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=ro(n.textContent,t._templateParams,t._separator))}}}),AP={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=Pd(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=Pd(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},bP={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let P_;function RP(t={}){const e=SP(t);return e.use(oP()),P_=e}function Cd(t,e){return!t||t==="server"&&e||t==="client"&&!e}function SP(t={}){const e=fP();e.addHooks(t.hooks||{}),t.document=t.document||(YS?document:void 0);const n=!t.document,r=()=>{l.dirty=!0,e.callHook("entries:updated",l)};let s=0,i=[];const o=[],l={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const h=typeof c=="function"?c(l):c;(!h.key||!o.some(f=>f.key===h.key))&&(o.push(h),Cd(h.mode,n)&&e.addHooks(h.hooks||{}))},push(c,h){h==null||delete h.head;const f={_i:s++,input:c,...h};return Cd(f.mode,n)&&(i.push(f),r()),{dispose(){i=i.filter(p=>p._i!==f._i),r()},patch(p){for(const g of i)g._i===f._i&&(g.input=f.input=p);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const h of c.entries){const f=h.resolvedInput||h.input;if(h.resolvedInput=await(h.transform?h.transform(f):f),h.resolvedInput)for(const p of await tP(h)){const g={tag:p,entry:h,resolvedOptions:l.resolvedOptions};await e.callHook("tag:normalise",g),c.tags.push(g.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[pP,vP,mP,yP,EP,IP,AP,bP,...(t==null?void 0:t.plugins)||[]].forEach(c=>l.use(c)),l.hooks.callHook("init",l),l}function PP(){return P_}const CP=bc[0]==="3";function kP(t){return typeof t=="function"?t():Wn(t)}function Yo(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=kP(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>Yo(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Wn(e[r]);continue}n[r]=Yo(e[r])}return n}return e}const OP={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=Yo(e.input)}}},C_="usehead";function DP(t){return{install(n){CP&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(C_,t))}}.install}function VP(t={}){t.domDelayFn=t.domDelayFn||(n=>mi(()=>setTimeout(()=>n(),0)));const e=RP(t);return e.use(OP),e.install=DP(e),e}const kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Od="__unhead_injection_handler__";function NP(){return Od in kd?kd[Od]():kt(C_)||PP()}function xP(t,e={}){const n=e.head||NP();if(n)return n.ssr?n.push(t,e):MP(n,t,e)}function MP(t,e,n={}){const r=Ge(!1),s=Ge({});Rv(()=>{s.value=r.value?{}:Yo(e)});const i=t.push(s.value,n);return Kr(s,l=>{i.patch(l)}),Hv()&&(_p(()=>{i.dispose()}),gp(()=>{r.value=!0}),pp(()=>{r.value=!1})),i}function LP(t,e){const n=VP({}),r={unhead:n,install(s){bc.startsWith("3")&&(s.config.globalProperties.$head=n,s.provide("usehead",n))},use(s){n.use(s)},resolveTags(){return n.resolveTags()},headEntries(){return n.headEntries()},headTags(){return n.resolveTags()},push(s,i){return n.push(s,i)},addEntry(s,i){return n.push(s,i)},addHeadObjs(s,i){return n.push(s,i)},addReactiveEntry(s,i){const o=xP(s,i);return typeof o<"u"?o.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?b_(n,{document:s}):R_(n,{delayFn:o=>setTimeout(()=>o(),50),document:s})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=r.addHeadObjs,n.updateDOM=r.updateDOM,n.hooks.hook("dom:beforeRender",s=>{for(const i of r.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),r}const ka=TE(jR),FP=LP();v_.onError(t=>{console.error("Router error:",t)});ka.use(AE());ka.use(v_);ka.use(FP);ka.mount("#app");export{Rm as A,ci as B,Am as C,bm as D,Wn as E,Et as F,UP as G,o_ as _,yR as a,Pn as b,tt as c,ce as d,Le as e,Mt as f,Ge as g,Fv as h,Cn as i,_h as j,Ya as k,yE as l,$h as m,vr as n,Tc as o,WP as p,qP as q,vp as r,Gp as s,xt as t,vR as u,BP as v,Dn as w,Im as x,$o as y,$n as z};
