import{E as e}from"./store-a910cdbb.js";import{d as s,o as r,c,j as f,t as l,N as m,b as A,p as E,g as x,f as _,A as v,_ as p,P as G,e as o}from"./index-e1d471cd.js";function R(t){return{[e.BUG]:"#AAC22A",[e.CANNOT_BREED]:"#333333",[e.CHAOS]:"#8A8A8A",[e.DITTO]:"#A664BF",[e.DRAGON]:"#7A42FF",[e.FAIRY]:"#FFC8F0",[e.FIELD]:"#E0C068",[e.FLYING]:"#B29AFA",[e.GENDERLESS]:"#0080C0",[e.PLANT]:"#82D25A",[e.HUMANOID]:"#D29682",[e.MINERAL]:"#7A6252",[e.MONSTER]:"#D25064",[e.WATER_A]:"#97B5FD",[e.WATER_B]:"#729AFA",[e.WATER_C]:"#5876BE"}[t]}const F=t=>(E("data-v-014f61ba"),t=t(),x(),t),I=F(()=>_("div",{class:v("monstericon-650 pixelart egg")},null,-1)),N=s({__name:"EggGroup",props:{eggGroup:null},setup(t){return(n,a)=>(r(),c("div",{class:"egg-group",style:m({"background-color":A(R)(t.eggGroup)})},[I,f(" "+l(t.eggGroup),1)],4))}});const T=p(N,[["__scopeId","data-v-014f61ba"]]),P={0:{femalePercent:0,text:"Only Male"},31:{femalePercent:.125,text:"87.5% Male"},63:{femalePercent:.25,text:"75% Male"},127:{femalePercent:.5,text:"50% Male"},191:{femalePercent:.75,text:"25% Male"},223:{femalePercent:.875,text:"12.5% Male"},254:{femalePercent:1,text:"Only Female"},255:{femalePercent:0,text:"Genderless"}};function C(t){return P[t]??{femalePercent:0,text:"N/A"}}const B={class:"pill"},D={class:"content"},b=s({__name:"GenderRatio",props:{genderRatio:null},setup(t){const n=t;G(i=>({"2f917e35":g.value,"72e168b6":u.value,"18d03b25":d.value}));const a=o(()=>C(n.genderRatio)),u=o(()=>`${a.value.femalePercent*100}%`),d=o(()=>a.value.femalePercent>0?"visible":"none"),g=o(()=>n.genderRatio!==255?"rgb(65, 135, 255)":"#333");return(i,y)=>(r(),c("div",B,[_("div",D,l(a.value.text),1)]))}});const O=p(b,[["__scopeId","data-v-1a612ae5"]]);export{T as E,O as G};