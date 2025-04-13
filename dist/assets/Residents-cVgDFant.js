import{_ as z,a as G,u as H,g as r,c as f,o as J,b as n,d as l,h as U,i as v,j as i,v as m,m as R,F as N,k,t as u,l as K,f as o}from"./index-8UNGKWOL.js";import{u as W}from"./residents-C7caUmEp.js";const X={class:"residents"},Y={class:"header"},Z={class:"filters"},_={class:"search-box"},h={class:"filter-options"},ee=["value"],te=["value"],le={key:0,class:"residents-list"},se={key:0,class:"no-results"},ae={key:1,class:"residents-grid"},ne={class:"resident-info"},oe={key:0},ue={key:1},ie={class:"resident-actions"},de=["onClick"],re=["onClick"],ve={key:1,class:"loading"},me={key:2,class:"modal"},pe={class:"modal-content"},fe={class:"form-group"},ge={class:"form-group"},be={class:"form-group"},Ie={class:"form-group"},ye={class:"form-group"},De=["value"],Ne={class:"form-group"},ke=["value"],Ce={class:"form-group"},Re={class:"form-group"},Ve={class:"form-actions"},Ue={__name:"Residents",setup(we){const g=W(),w=G(),A=H(),S=r(!1),b=r(!1),I=r(null),C=r(""),p=r(""),y=r(""),a=r({firstName:"",lastName:"",phone:"",email:"",buildingId:"",apartmentId:"",moveInDate:"",moveOutDate:""}),V=f(()=>w.buildings),d=f(()=>A.apartments),q=f(()=>g.residents),x=f(()=>a.value.buildingId?d.value.filter(s=>s.buildingId===a.value.buildingId&&s.status==="active"):[]),c=f(()=>p.value?d.value.filter(s=>s.buildingId===p.value):d.value),O=f(()=>{let s=q.value;if(C.value){const e=C.value.toLowerCase();s=s.filter(t=>t.firstName.toLowerCase().includes(e)||t.lastName.toLowerCase().includes(e)||t.phone.includes(e))}if(y.value)s=s.filter(e=>e.apartmentId===y.value);else if(p.value){const e=d.value.filter(t=>t.buildingId===p.value).map(t=>t.id);s=s.filter(t=>e.includes(t.apartmentId))}return s}),E=s=>{const e=d.value.find(D=>D.id===s);if(!e)return"Неизвестно";const t=V.value.find(D=>D.id===e.buildingId);return t?t.name:"Неизвестно"},L=s=>{const e=d.value.find(t=>t.id===s);return e?e.number:"Неизвестно"},B=s=>s?new Date(s).toLocaleDateString("ru-RU"):"",M=()=>{y.value=""},F=()=>{},$=()=>{a.value.apartmentId=""},T=s=>{I.value=s,a.value={firstName:s.firstName,lastName:s.lastName,phone:s.phone,email:s.email||"",buildingId:j(s.apartmentId),apartmentId:s.apartmentId,moveInDate:s.moveInDate,moveOutDate:s.moveOutDate||""},b.value=!0},j=s=>{const e=d.value.find(t=>t.id===s);return e?e.buildingId:""},P=async()=>{try{const s={firstName:a.value.firstName,lastName:a.value.lastName,phone:a.value.phone,email:a.value.email,apartmentId:a.value.apartmentId,moveInDate:a.value.moveInDate,moveOutDate:a.value.moveOutDate||null};I.value?await g.updateResident(I.value.id,s):await g.addResident(s),b.value=!1,I.value=null,a.value={firstName:"",lastName:"",phone:"",email:"",buildingId:"",apartmentId:"",moveInDate:"",moveOutDate:""}}catch(s){console.error("Error saving resident:",s),alert("Ошибка при сохранении жильца: "+s.message)}},Q=async s=>{if(confirm("Вы уверены, что хотите удалить этого жильца?"))try{await g.removeResident(s)}catch(e){console.error("Error deleting resident:",e),alert("Ошибка при удалении жильца: "+e.message)}};return J(async()=>{try{await Promise.all([w.fetchBuildings(),A.fetchApartments(),g.fetchResidents()])}catch(s){console.error("Error loading data:",s),alert("Ошибка при загрузке данных: "+s.message)}}),(s,e)=>(o(),n("div",X,[l("div",Y,[e[15]||(e[15]=l("h1",null,"Жильцы",-1)),l("button",{class:"add-button",onClick:e[0]||(e[0]=t=>b.value=!0)},e[14]||(e[14]=[l("i",{class:"fas fa-plus"},null,-1),v(" Добавить жильца ")]))]),l("div",Z,[l("div",_,[e[16]||(e[16]=l("i",{class:"fas fa-search"},null,-1)),i(l("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>C.value=t),type:"text",placeholder:"Поиск по жильцам...",onInput:e[2]||(e[2]=(...t)=>s.filterResidents&&s.filterResidents(...t))},null,544),[[m,C.value]])]),l("div",h,[i(l("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),onChange:M},[e[17]||(e[17]=l("option",{value:""},"Все дома",-1)),(o(!0),n(N,null,k(V.value,t=>(o(),n("option",{key:t.id,value:t.id},u(t.name),9,ee))),128))],544),[[R,p.value]]),i(l("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>y.value=t),onChange:F},[e[18]||(e[18]=l("option",{value:""},"Все квартиры",-1)),(o(!0),n(N,null,k(c.value,t=>(o(),n("option",{key:t.id,value:t.id}," Квартира "+u(t.number),9,te))),128))],544),[[R,y.value]])])]),S.value?(o(),n("div",ve,e[28]||(e[28]=[l("i",{class:"fas fa-spinner fa-spin"},null,-1),l("p",null,"Загрузка...",-1)]))):(o(),n("div",le,[O.value.length===0?(o(),n("div",se,e[19]||(e[19]=[l("i",{class:"fas fa-search"},null,-1),l("p",null,"Ничего не найдено",-1)]))):(o(),n("div",ae,[(o(!0),n(N,null,k(O.value,t=>(o(),n("div",{key:t.id,class:"resident-card"},[l("div",ne,[l("h3",null,u(t.firstName)+" "+u(t.lastName),1),l("p",null,[e[20]||(e[20]=l("i",{class:"fas fa-phone"},null,-1)),v(" "+u(t.phone),1)]),t.email?(o(),n("p",oe,[e[21]||(e[21]=l("i",{class:"fas fa-envelope"},null,-1)),v(" "+u(t.email),1)])):U("",!0),l("p",null,[e[22]||(e[22]=l("i",{class:"fas fa-building"},null,-1)),v(" "+u(E(t.apartmentId)),1)]),l("p",null,[e[23]||(e[23]=l("i",{class:"fas fa-door-open"},null,-1)),v(" Квартира "+u(L(t.apartmentId)),1)]),l("p",null,[e[24]||(e[24]=l("i",{class:"fas fa-calendar-alt"},null,-1)),v(" Заселение: "+u(B(t.moveInDate)),1)]),t.moveOutDate?(o(),n("p",ue,[e[25]||(e[25]=l("i",{class:"fas fa-calendar-times"},null,-1)),v(" Выселение: "+u(B(t.moveOutDate)),1)])):U("",!0)]),l("div",ie,[l("button",{onClick:D=>T(t),class:"edit-button"},e[26]||(e[26]=[l("i",{class:"fas fa-edit"},null,-1)]),8,de),l("button",{onClick:D=>Q(t.id),class:"delete-button"},e[27]||(e[27]=[l("i",{class:"fas fa-trash"},null,-1)]),8,re)])]))),128))]))])),b.value?(o(),n("div",me,[l("div",pe,[l("h2",null,u(I.value?"Редактировать жильца":"Добавить жильца"),1),l("form",{onSubmit:K(P,["prevent"])},[l("div",fe,[e[29]||(e[29]=l("label",null,"Имя",-1)),i(l("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.firstName=t),type:"text",required:""},null,512),[[m,a.value.firstName]])]),l("div",ge,[e[30]||(e[30]=l("label",null,"Фамилия",-1)),i(l("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.lastName=t),type:"text",required:""},null,512),[[m,a.value.lastName]])]),l("div",be,[e[31]||(e[31]=l("label",null,"Телефон",-1)),i(l("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.phone=t),type:"tel",required:""},null,512),[[m,a.value.phone]])]),l("div",Ie,[e[32]||(e[32]=l("label",null,"Email",-1)),i(l("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>a.value.email=t),type:"email"},null,512),[[m,a.value.email]])]),l("div",ye,[e[34]||(e[34]=l("label",null,"Дом",-1)),i(l("select",{"onUpdate:modelValue":e[9]||(e[9]=t=>a.value.buildingId=t),onChange:$,required:""},[e[33]||(e[33]=l("option",{value:""},"Выберите дом",-1)),(o(!0),n(N,null,k(V.value,t=>(o(),n("option",{key:t.id,value:t.id},u(t.name),9,De))),128))],544),[[R,a.value.buildingId]])]),l("div",Ne,[e[36]||(e[36]=l("label",null,"Квартира",-1)),i(l("select",{"onUpdate:modelValue":e[10]||(e[10]=t=>a.value.apartmentId=t),required:""},[e[35]||(e[35]=l("option",{value:""},"Выберите квартиру",-1)),(o(!0),n(N,null,k(x.value,t=>(o(),n("option",{key:t.id,value:t.id}," Квартира "+u(t.number),9,ke))),128))],512),[[R,a.value.apartmentId]])]),l("div",Ce,[e[37]||(e[37]=l("label",null,"Дата заселения",-1)),i(l("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>a.value.moveInDate=t),type:"date",required:""},null,512),[[m,a.value.moveInDate]])]),l("div",Re,[e[38]||(e[38]=l("label",null,"Дата выселения",-1)),i(l("input",{"onUpdate:modelValue":e[12]||(e[12]=t=>a.value.moveOutDate=t),type:"date"},null,512),[[m,a.value.moveOutDate]])]),l("div",Ve,[l("button",{type:"button",onClick:e[13]||(e[13]=t=>b.value=!1)},"Отмена"),e[39]||(e[39]=l("button",{type:"submit"},"Сохранить",-1))])],32)])])):U("",!0)]))}},Be=z(Ue,[["__scopeId","data-v-cd0c2c5c"]]);export{Be as default};
