import{u as m}from"./residents-B_YpIIFo.js";import{_,u as g,a as b,c as o,o as h,b as S,d as s,t as n,e,w as d,r as C,f as k}from"./index-CADAJg8v.js";const B={class:"home"},w={class:"stats-grid"},x={class:"stat-card"},y={class:"stat-info"},A={class:"stat-value"},E={class:"stat-card"},H={class:"stat-info"},N={class:"stat-value"},R={class:"stat-card"},V={class:"stat-info"},q={class:"stat-value"},D={class:"stat-card"},I={class:"stat-info"},M={class:"stat-value"},O={class:"quick-actions"},P={class:"actions-grid"},j={__name:"Home",setup(z){const r=m(),l=g(),u=b(),c=o(()=>u.buildings.length),f=o(()=>l.apartments.length),p=o(()=>r.residents.length),v=o(()=>l.apartments.filter(a=>!a.isOccupied).length);return h(async()=>{try{await Promise.all([r.fetchResidents(),l.fetchApartments(),u.fetchBuildings()])}catch(a){console.error("Error loading data:",a)}}),(a,t)=>{const i=C("router-link");return k(),S("div",B,[t[12]||(t[12]=s("div",{class:"welcome-section"},[s("h1",null,"Добро пожаловать в систему управления жильцами"),s("p",{class:"subtitle"},"Удобный инструмент для управления информацией о жильцах и квартирах")],-1)),s("div",w,[s("div",x,[t[1]||(t[1]=s("div",{class:"stat-icon"},[s("i",{class:"fas fa-building"})],-1)),s("div",y,[t[0]||(t[0]=s("h3",null,"Дома",-1)),s("p",A,n(c.value),1)])]),s("div",E,[t[3]||(t[3]=s("div",{class:"stat-icon"},[s("i",{class:"fas fa-home"})],-1)),s("div",H,[t[2]||(t[2]=s("h3",null,"Квартиры",-1)),s("p",N,n(f.value),1)])]),s("div",R,[t[5]||(t[5]=s("div",{class:"stat-icon"},[s("i",{class:"fas fa-users"})],-1)),s("div",V,[t[4]||(t[4]=s("h3",null,"Жильцы",-1)),s("p",q,n(p.value),1)])]),s("div",D,[t[7]||(t[7]=s("div",{class:"stat-icon"},[s("i",{class:"fas fa-bed"})],-1)),s("div",I,[t[6]||(t[6]=s("h3",null,"Свободные квартиры",-1)),s("p",M,n(v.value),1)])])]),s("div",O,[t[11]||(t[11]=s("h2",null,"Быстрые действия",-1)),s("div",P,[e(i,{to:"/residents",class:"action-card"},{default:d(()=>t[8]||(t[8]=[s("i",{class:"fas fa-user-plus"},null,-1),s("span",null,"Добавить жильца",-1)])),_:1}),e(i,{to:"/apartments",class:"action-card"},{default:d(()=>t[9]||(t[9]=[s("i",{class:"fas fa-home"},null,-1),s("span",null,"Управление квартирами",-1)])),_:1}),e(i,{to:"/buildings",class:"action-card"},{default:d(()=>t[10]||(t[10]=[s("i",{class:"fas fa-building"},null,-1),s("span",null,"Управление домами",-1)])),_:1})])])])}}},J=_(j,[["__scopeId","data-v-b3003134"]]);export{J as default};
