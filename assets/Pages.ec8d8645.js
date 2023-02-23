import{_ as C,u as S,w as k,a as I,r as x,b as L,d as T,e as A,o as n,f as s,g as o,h as a,F as u,i as _,j as c,t as d,p as H,k as $,c as B,l as N,m as V,S as R,n as E}from"./index.b5c09895.js";const F="/Vue-reflection/assets/animal-crossing-load.4c3081b0.png";const j=h=>(H("data-v-7597f952"),h=h(),$(),h),G=j(()=>o("option",{value:"",style:{position:"unset"}},"All",-1)),D={style:{position:"unset"}},z={style:{position:"unset"}},J={class:"card"},K=["src"],O=["onClick"],Q={class:"card"},W=["src"],X=["src"],Y=["onClick"],Z=["onClick"],ee={class:"card"},te=["src"],ae=["onClick"],ie={__name:"CardInfo",async setup(h){let l,m,i=S().name,w="https://acnhapi.com/v1a/"+i;const U=([l,m]=k(()=>fetch(w)),l=await l,m(),l);let p=([l,m]=k(()=>U.json()),l=await l,m(),l);I(()=>{let r=x(S().name),t=L({x:r});T(()=>t,()=>{let e=p[0];t.x==="villagers"?document.querySelector(".info").innerHTML='<img src="'+e.image_uri+'" alt="'+e.name["name-USen"]+` icon" style="width:100%">
        <h2 style="text-align: center;"> `+e.name["name-USen"]+`</h2>
        <p> Species: `+e.species+`</p>
        <p> Gender: `+e.gender+`</p>
        <p> Birthday: `+e.birthday+`</p>
        <p> Personality: `+e.personality+`</p>
        <p> Hobby: `+e.hobby+`</p>
        <p> Saying: `+e.saying+`</p>
        <p> Catch-phrase: `+e["catch-phrase"]+`</p>
        `:t.x==="fish"||t.x==="bugs"?document.querySelector(".info").innerHTML='<img src="'+e.image_uri+'" alt="'+e.name["name-USen"]+` icon" style="max-width:100%;">
        <h2 style="text-align: center;"> `+e.name["name-USen"]+`</h2>
        <p>Months available: </p>
        <p> North: `+e.availability["month-array-northern"].toString().replaceAll(",",", ")+`</p>
        <p> South: `+e.availability["month-array-southern"].toString().replaceAll(",",", ")+`</p>
        <p> Time: `+e.availability["time-array"].toString().replaceAll(",",", ")+`</p>
        <p> Location: `+e.availability.location+`</p>
        <p> Rarity: `+e.availability.rarity+`</p>
        <p> Price: `+e.price+` bells</p>
        <p> Catch-phrase: `+e["catch-phrase"]+`</p>
        `:t.x==="fossils"&&(document.querySelector(".info").innerHTML='<img src="'+e.image_uri+'" alt="'+e.name["name-USen"]+` icon" class="info-img" style="margin: 0 27%; width: 45%; height: 45%;">
        <h2 style="text-align: center;"> `+e.name["name-USen"]+`</h2>
        <p> Price: `+e.price+`</p>
        <p> Part of: `+e["part-of"]+`</p>
        <p> Museum quote: `+e["museum-phrase"]+`</p>
        `)},{immediate:!0})});let v=[];p.forEach(r=>{v.push(r.species)});let M=new Set(v),b=[];(i==="fish"||i==="bugs")&&p.forEach(r=>{b.push(r.availability.rarity)});let P=new Set(b);A(()=>document.querySelector(".info").style="display:none;");let y=x(""),g=r=>{let t=r;document.querySelector(".info").style="display:block;",i==="villagers"?document.querySelector(".info").innerHTML='<img src="'+t.image_uri+'" alt="'+t.name["name-USen"]+` icon" style="width:100%">
      <h2 style="text-align: center;"> `+t.name["name-USen"]+`</h2>
      <p> Species: `+t.species+`</p>
      <p> Gender: `+t.gender+`</p>
      <p> Birthday: `+t.birthday+`</p>
      <p> Personality: `+t.personality+`</p>
      <p> Hobby: `+t.hobby+`</p>
      <p> Saying: `+t.saying+`</p>
      <p> Catch-phrase: `+t["catch-phrase"]+`</p>
      `:i==="fish"||i==="bugs"?document.querySelector(".info").innerHTML='<img src="'+t.image_uri+'" alt="'+t.name["name-USen"]+` icon" style="max-width:100%;">
      <h2 style="text-align: center;"> `+t.name["name-USen"]+`</h2>
      <p>Months available: </p>
      <p> North: `+t.availability["month-array-northern"].toString().replaceAll(",",", ")+`</p>
      <p> South: `+t.availability["month-array-southern"].toString().replaceAll(",",", ")+`</p>
      <p> Time: `+t.availability["time-array"].toString().replaceAll(",",", ")+`</p>
      <p> Location: `+t.availability.location+`</p>
      <p> Rarity: `+t.availability.rarity+`</p>
      <p> Price: `+t.price+` bells</p>
      <p> Catch-phrase: `+t["catch-phrase"]+`</p>
      `:i==="fossils"&&(document.querySelector(".info").innerHTML='<img src="'+t.image_uri+'" alt="'+t.name["name-USen"]+` icon" class="info-img" style="margin: 0 27%; width: 45%; height: 45%;">
      <h2 style="text-align: center;"> `+t.name["name-USen"]+`</h2>
      <p> Price: `+t.price+`</p>
      <p> Part of: `+t["part-of"]+`</p>
      <p> Museum quote: `+t["museum-phrase"]+`</p>
      `)},q=r=>{y.value=r.target.value};return(r,t)=>(n(),s(u,null,[o("select",{class:"sort",onChange:t[0]||(t[0]=e=>a(q)(e))},[G,a(i)==="villagers"?(n(!0),s(u,{key:0},_(a(M),e=>(n(),s("option",D,d(e),1))),256)):c("",!0),a(i)==="fish"||a(i)==="bugs"?(n(!0),s(u,{key:1},_(a(P),e=>(n(),s("option",z,d(e),1))),256)):c("",!0)],32),a(i)==="villagers"?(n(!0),s(u,{key:0},_(a(p).filter(e=>e.species===a(y)),e=>(n(),s("div",J,[o("img",{src:e.icon_uri},null,8,K),o("h3",null,d(e.name["name-USen"]),1),o("button",{onClick:f=>a(g)(e)},"More info",8,O)]))),256)):c("",!0),a(y)===""?(n(!0),s(u,{key:1},_(a(p),e=>(n(),s("div",Q,[a(i)==="fish"||a(i)==="bugs"||a(i)==="villagers"?(n(),s("img",{key:0,src:e.icon_uri},null,8,W)):c("",!0),a(i)==="fossils"?(n(),s("img",{key:1,src:e.image_uri},null,8,X)):c("",!0),o("h3",null,d(e.name["name-USen"]),1),a(i)==="fish"||a(i)==="bugs"||a(i)==="villagers"?(n(),s("button",{key:2,onClick:f=>a(g)(e)},"More info",8,Y)):c("",!0),a(i)==="fossils"?(n(),s("button",{key:3,onClick:f=>a(g)(e)},"More info",8,Z)):c("",!0)]))),256)):c("",!0),a(i)==="fish"||a(i)==="bugs"?(n(!0),s(u,{key:2},_(a(p).filter(e=>e.availability.rarity===a(y)),e=>(n(),s("div",ee,[o("img",{src:e.icon_uri},null,8,te),o("h3",null,d(e.name["name-USen"]),1),o("button",{onClick:f=>a(g)(e)},"More info",8,ae)]))),256)):c("",!0)],64))}},ne=C(ie,[["__scopeId","data-v-7597f952"]]);const se={class:"card-container"},re={class:"cards"},oe=E('<div class="info-container" data-v-229b9f47><div class="info" data-v-229b9f47></div></div><div class="top" data-v-229b9f47><a href="#" data-v-229b9f47><img src="'+F+'" alt="To top of page" title="Click to go back to the top" data-v-229b9f47></a></div>',2),le={__name:"Pages",setup(h){return(l,m)=>(n(),s("div",se,[o("div",re,[(n(),B(R,null,{default:N(()=>[V(ne)]),_:1}))]),oe]))}},pe=C(le,[["__scopeId","data-v-229b9f47"]]);export{pe as P};
