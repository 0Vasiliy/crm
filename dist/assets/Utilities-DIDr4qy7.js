import{s as tt,g as c,x as et,y as R,z as A,A as st,B as $,C as lt,D as nt,_ as ot,a as at,u as it,c as C,o as rt,b as a,d as e,h as N,i as D,j as p,v as V,m as b,F as y,k as U,t as v,l as L,E as ut,f as i,n as dt}from"./index-8UNGKWOL.js";import{u as vt}from"./residents-C7caUmEp.js";const mt=tt("utilities",()=>{const f=c([]),k=c(!1),m=c(null);return{utilities:f,loading:k,error:m,fetchUtilities:async()=>{k.value=!0,m.value=null;try{const n=await et(R(A,"utilities"));f.value=n.docs.map(o=>{const d=o.data();return{id:o.id,name:d.name||"",unit:d.unit||"",rate:d.rate||0,status:d.status||"active",createdAt:d.createdAt||new Date().toISOString()}}),console.log("Loaded utilities:",f.value)}catch(n){throw m.value=n.message,console.error("Error loading utilities:",n),n}finally{k.value=!1}},addUtility:async n=>{try{const o={name:n.name.trim(),unit:n.unit.trim(),rate:parseFloat(n.rate),status:n.status||"active",createdAt:new Date().toISOString()},g={id:(await st(R(A,"utilities"),o)).id,...o};return f.value.push(g),console.log("Added new utility:",g),g}catch(o){throw m.value=o.message,console.error("Error adding utility:",o),o}},updateUtility:async(n,o)=>{try{const d={name:o.name.trim(),unit:o.unit.trim(),rate:parseFloat(o.rate),status:o.status,updatedAt:new Date().toISOString()},g=$(A,"utilities",n);await lt(g,d);const u=f.value.findIndex(r=>r.id===n);u!==-1&&(f.value[u]={...f.value[u],...d}),console.log("Updated utility:",{id:n,...d})}catch(d){throw m.value=d.message,console.error("Error updating utility:",d),d}},deleteUtility:async n=>{try{await nt($(A,"utilities",n)),f.value=f.value.filter(o=>o.id!==n),console.log("Deleted utility:",n)}catch(o){throw m.value=o.message,console.error("Error deleting utility:",o),o}}}}),pt={class:"utilities"},ct={class:"header"},ft={class:"actions"},gt={class:"filters"},bt={class:"search-box"},yt={class:"filter-options"},Ut=["value"],It={key:0,class:"utilities-list"},wt={key:0,class:"no-results"},kt={key:1,class:"utilities-grid"},St={class:"utility-header"},Ct={class:"utility-info"},Dt={class:"utility-actions"},Vt=["onClick"],Ft=["onClick"],At={key:1,class:"loading"},qt={key:2,class:"modal"},xt={class:"modal-content"},Et={class:"modal-header"},Bt={class:"modal-body"},Mt={class:"form-group"},Rt={class:"form-group"},$t=["value"],Nt={class:"form-group"},Lt={class:"form-group"},_t={class:"form-group"},ht={class:"form-actions"},Tt={key:3,class:"modal"},Ot={class:"modal-content"},Yt={class:"modal-header"},zt={class:"modal-body"},jt={class:"form-group"},Pt=["value"],Qt={class:"form-group"},Gt=["value"],Ht={class:"form-group"},Jt=["value"],Kt={class:"form-group"},Wt={class:"period-select"},Xt=["value"],Zt=["value"],te={class:"services-list"},ee={class:"service-info"},se={class:"rate"},le={class:"service-input"},ne=["onUpdate:modelValue","placeholder"],oe={class:"form-actions"},ae={__name:"Utilities",setup(f){const k=at(),m=mt(),q=it(),x=vt(),w=c(!1),S=c(!1),n=c(null),o=c(""),d=c(""),g=c(""),u=c({name:"",unit:"",rate:"",status:"active"}),r=c({buildingId:"",apartmentId:"",residentId:"",period:{month:new Date().getMonth()+1,year:new Date().getFullYear()},services:[]}),_=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],h=Array.from({length:5},(l,t)=>new Date().getFullYear()-t),B=C(()=>m.utilities),T=C(()=>m.loading),F=C(()=>k.buildings),M=C(()=>B.value.filter(l=>{const t=l.name.toLowerCase().includes(o.value.toLowerCase()),s=!d.value||l.buildingId===d.value,I=!g.value||l.status===g.value;return t&&s&&I})),O=l=>{const t=F.value.find(s=>s.id===l);return t?t.name:"Неизвестное здание"},Y=l=>new Date(l).toLocaleDateString("ru-RU"),z=l=>{if(l==null)return"0.00";const t=typeof l=="string"?parseFloat(l):l;return isNaN(t)?"0.00":t.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})},j=C(()=>r.value.buildingId?q.apartments.filter(l=>l.buildingId===r.value.buildingId):[]),P=C(()=>r.value.apartmentId?x.residents.filter(l=>l.apartmentId===r.value.apartmentId):[]),Q=l=>{n.value=l,u.value={name:l.name,unit:l.unit,rate:l.rate,status:l.status},w.value=!0},G=async()=>{try{const l={name:u.value.name.trim(),unit:u.value.unit.trim(),rate:parseFloat(u.value.rate),status:u.value.status};n.value?await m.updateUtility(n.value.id,l):await m.addUtility(l),w.value=!1,Z()}catch(l){console.error("Error saving utility:",l),alert("Ошибка при сохранении услуги")}},H=async l=>{if(confirm("Вы уверены, что хотите удалить эту услугу?"))try{await m.deleteUtility(l)}catch(t){console.error("Error deleting utility:",t),alert("Ошибка при удалении услуги")}},J=()=>{S.value=!1,r.value={buildingId:"",apartmentId:"",residentId:"",period:{month:new Date().getMonth()+1,year:new Date().getFullYear()},services:[]}},K=()=>{r.value.apartmentId="",r.value.residentId=""},W=()=>{r.value.residentId=""},X=async()=>{try{console.log("Saving invoice:",r.value),J()}catch(l){console.error("Error saving invoice:",l),alert("Ошибка при сохранении счета: "+l.message)}},Z=()=>{u.value={name:"",unit:"",rate:"",status:"active"},n.value=null},E=()=>{};return rt(async()=>{try{console.log("Loading utilities..."),await m.fetchUtilities(),console.log("Utilities loaded:",m.utilities.value),await k.fetchBuildings(),await q.fetchApartments(),await x.fetchResidents()}catch(l){console.error("Error loading data:",l),alert("Ошибка при загрузке данных: "+l.message)}}),(l,t)=>(i(),a("div",pt,[e("div",ct,[t[21]||(t[21]=e("h1",null,"Коммунальные услуги",-1)),e("div",ft,[e("button",{class:"add-button",onClick:t[0]||(t[0]=s=>w.value=!0)},t[19]||(t[19]=[e("i",{class:"fas fa-plus"},null,-1),D(" Добавить услугу ")])),e("button",{class:"btn btn-success",onClick:t[1]||(t[1]=s=>S.value=!0)},t[20]||(t[20]=[e("i",{class:"fas fa-file-invoice"},null,-1),D(" Выставить счёт ")]))])]),e("div",gt,[e("div",bt,[t[22]||(t[22]=e("i",{class:"fas fa-search"},null,-1)),p(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.value=s),type:"text",placeholder:"Поиск по услугам...",onInput:E},null,544),[[V,o.value]])]),e("div",yt,[p(e("select",{"onUpdate:modelValue":t[3]||(t[3]=s=>d.value=s),onChange:E},[t[23]||(t[23]=e("option",{value:""},"Все дома",-1)),(i(!0),a(y,null,U(F.value,s=>(i(),a("option",{key:s.id,value:s.id},v(s.name),9,Ut))),128))],544),[[b,d.value]]),p(e("select",{"onUpdate:modelValue":t[4]||(t[4]=s=>g.value=s),onChange:E},t[24]||(t[24]=[e("option",{value:""},"Все статусы",-1),e("option",{value:"active"},"Активные",-1),e("option",{value:"inactive"},"Неактивные",-1)]),544),[[b,g.value]])])]),T.value?(i(),a("div",At,t[31]||(t[31]=[e("i",{class:"fas fa-spinner fa-spin"},null,-1),e("p",null,"Загрузка...",-1)]))):(i(),a("div",It,[M.value.length===0?(i(),a("div",wt,t[25]||(t[25]=[e("i",{class:"fas fa-search"},null,-1),e("p",null,"Ничего не найдено",-1)]))):(i(),a("div",kt,[(i(!0),a(y,null,U(M.value,s=>(i(),a("div",{key:s.id,class:"utility-card"},[e("div",St,[e("h3",null,v(s.name),1),e("span",{class:dt(["status-badge",s.status])},v(s.status==="active"?"Активна":"Неактивна"),3)]),e("div",Ct,[e("p",null,[t[26]||(t[26]=e("i",{class:"fas fa-building"},null,-1)),D(" "+v(O(s.buildingId)),1)]),e("p",null,[t[27]||(t[27]=e("i",{class:"fas fa-calendar"},null,-1)),D(" "+v(Y(s.startDate)),1)]),e("p",null,[t[28]||(t[28]=e("i",{class:"fas fa-money-bill"},null,-1)),D(" "+v(z(s.rate))+" ₽",1)])]),e("div",Dt,[e("button",{onClick:I=>Q(s),class:"edit-button"},t[29]||(t[29]=[e("i",{class:"fas fa-edit"},null,-1)]),8,Vt),e("button",{onClick:I=>H(s.id),class:"delete-button"},t[30]||(t[30]=[e("i",{class:"fas fa-trash"},null,-1)]),8,Ft)])]))),128))]))])),w.value?(i(),a("div",qt,[e("div",xt,[e("div",Et,[e("h2",null,v(n.value?"Редактировать услугу":"Добавить услугу"),1),e("button",{class:"close-button",onClick:t[5]||(t[5]=s=>w.value=!1)},t[32]||(t[32]=[e("i",{class:"fas fa-times"},null,-1)]))]),e("div",Bt,[e("form",{onSubmit:L(G,["prevent"])},[e("div",Mt,[t[33]||(t[33]=e("label",null,"Название услуги",-1)),p(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>u.value.name=s),type:"text",required:""},null,512),[[V,u.value.name]])]),e("div",Rt,[t[34]||(t[34]=e("label",null,"Дом",-1)),p(e("select",{"onUpdate:modelValue":t[7]||(t[7]=s=>u.value.buildingId=s),required:""},[(i(!0),a(y,null,U(F.value,s=>(i(),a("option",{key:s.id,value:s.id},v(s.name),9,$t))),128))],512),[[b,u.value.buildingId]])]),e("div",Nt,[t[35]||(t[35]=e("label",null,"Дата начала",-1)),p(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>u.value.startDate=s),type:"date",required:""},null,512),[[V,u.value.startDate]])]),e("div",Lt,[t[36]||(t[36]=e("label",null,"Тариф",-1)),p(e("input",{"onUpdate:modelValue":t[9]||(t[9]=s=>u.value.rate=s),type:"number",required:""},null,512),[[V,u.value.rate]])]),e("div",_t,[t[38]||(t[38]=e("label",null,"Статус",-1)),p(e("select",{"onUpdate:modelValue":t[10]||(t[10]=s=>u.value.status=s),required:""},t[37]||(t[37]=[e("option",{value:"active"},"Активна",-1),e("option",{value:"inactive"},"Неактивна",-1)]),512),[[b,u.value.status]])]),e("div",ht,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[11]||(t[11]=s=>w.value=!1)},"Отмена"),t[39]||(t[39]=e("button",{type:"submit",class:"btn btn-primary"},"Сохранить",-1))])],32)])])])):N("",!0),S.value?(i(),a("div",Tt,[e("div",Ot,[e("div",Yt,[t[41]||(t[41]=e("h2",null,"Выставить счёт",-1)),e("button",{class:"close-button",onClick:t[12]||(t[12]=s=>S.value=!1)},t[40]||(t[40]=[e("i",{class:"fas fa-times"},null,-1)]))]),e("div",zt,[e("form",{onSubmit:L(X,["prevent"])},[e("div",jt,[t[43]||(t[43]=e("label",null,"Дом",-1)),p(e("select",{"onUpdate:modelValue":t[13]||(t[13]=s=>r.value.buildingId=s),onChange:K,required:""},[t[42]||(t[42]=e("option",{value:""},"Выберите дом",-1)),(i(!0),a(y,null,U(F.value,s=>(i(),a("option",{key:s.id,value:s.id},v(s.name),9,Pt))),128))],544),[[b,r.value.buildingId]])]),e("div",Qt,[t[45]||(t[45]=e("label",null,"Квартира",-1)),p(e("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>r.value.apartmentId=s),onChange:W,required:""},[t[44]||(t[44]=e("option",{value:""},"Выберите квартиру",-1)),(i(!0),a(y,null,U(j.value,s=>(i(),a("option",{key:s.id,value:s.id}," Кв. "+v(s.number),9,Gt))),128))],544),[[b,r.value.apartmentId]])]),e("div",Ht,[t[47]||(t[47]=e("label",null,"Жилец",-1)),p(e("select",{"onUpdate:modelValue":t[15]||(t[15]=s=>r.value.residentId=s),required:""},[t[46]||(t[46]=e("option",{value:""},"Выберите жильца",-1)),(i(!0),a(y,null,U(P.value,s=>(i(),a("option",{key:s.id,value:s.id},v(s.firstName)+" "+v(s.lastName),9,Jt))),128))],512),[[b,r.value.residentId]])]),e("div",Kt,[t[48]||(t[48]=e("label",null,"Период",-1)),e("div",Wt,[p(e("select",{"onUpdate:modelValue":t[16]||(t[16]=s=>r.value.period.month=s),required:""},[(i(),a(y,null,U(_,(s,I)=>e("option",{key:I,value:I+1},v(s),9,Xt)),64))],512),[[b,r.value.period.month]]),p(e("select",{"onUpdate:modelValue":t[17]||(t[17]=s=>r.value.period.year=s),required:""},[(i(!0),a(y,null,U(ut(h),s=>(i(),a("option",{key:s,value:s},v(s),9,Zt))),128))],512),[[b,r.value.period.year]])])]),e("div",te,[t[49]||(t[49]=e("h3",null,"Услуги",-1)),(i(!0),a(y,null,U(B.value,s=>(i(),a("div",{key:s.id,class:"service-item"},[e("div",ee,[e("span",null,v(s.name),1),e("span",se,v(s.rate)+" ₽/"+v(s.unit),1)]),e("div",le,[p(e("input",{type:"number","onUpdate:modelValue":I=>r.value.services[s.id]=I,placeholder:`Количество ${s.unit}`,min:"0",step:"0.01"},null,8,ne),[[V,r.value.services[s.id]]])])]))),128))]),e("div",oe,[e("button",{type:"button",class:"btn btn-secondary",onClick:t[18]||(t[18]=s=>S.value=!1)},"Отмена"),t[50]||(t[50]=e("button",{type:"submit",class:"btn btn-primary"},"Выставить счёт",-1))])],32)])])])):N("",!0)]))}},ue=ot(ae,[["__scopeId","data-v-f6e5470a"]]);export{ue as default};
