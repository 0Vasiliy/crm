import{s as u,g as d,x as v,y as c,z as n,A as f,C as h,B as i,D as R}from"./index-8UNGKWOL.js";const D=u("residents",()=>{const t=d([]),o=d(!1),a=d(null);return{residents:t,loading:o,error:a,fetchResidents:async()=>{o.value=!0;try{const s=await v(c(n,"residents"));t.value=s.docs.map(e=>({id:e.id,...e.data()})),a.value=null}catch(s){a.value=s.message,console.error("Error fetching residents:",s)}finally{o.value=!1}},addResident:async s=>{try{const r={id:(await f(c(n,"residents"),s)).id,...s};return t.value.push(r),r}catch(e){throw a.value=e.message,console.error("Error adding resident:",e),e}},updateResident:async(s,e)=>{try{await h(i(n,"residents",s),e);const r=t.value.findIndex(l=>l.id===s);r!==-1&&(t.value[r]={...t.value[r],...e})}catch(r){throw a.value=r.message,console.error("Error updating resident:",r),r}},removeResident:async s=>{try{await R(i(n,"residents",s)),t.value=t.value.filter(e=>e.id!==s)}catch(e){throw a.value=e.message,console.error("Error removing resident:",e),e}}}});export{D as u};
