import{b as n}from"./store-a910cdbb.js";import{P as c}from"./PokemonList-8e49f48f.js";import{d as v,e as i,o as r,c as m,f as e,t,a as f,p as h,g as y,_ as k}from"./index-e1d471cd.js";import{b as d}from"./route-block-83d24a4e.js";import"./status-5af2ebee.js";import"./GenderRatio-9dda7515.js";const l=a=>(h("data-v-381eef59"),a=a(),y(),a),g=["href"],b={class:"gridform"},I=l(()=>e("div",null,"ID",-1)),P=l(()=>e("div",null,"Damage Type",-1)),x=l(()=>e("div",null,"Power",-1)),T=l(()=>e("div",null,"Accuracy",-1)),B=l(()=>e("div",null,"PP",-1)),D=l(()=>e("div",null,"Priority",-1)),S=l(()=>e("div",null,"Type",-1)),w=l(()=>e("div",null,"Target Type",-1)),L=l(()=>e("div",null,"True Damage",-1)),_=v({__name:"[id]",props:{id:null},setup(a){const u=a,o=i(()=>n.moves[parseInt(u.id)]),p=i(()=>o.value.learnedBy.map(s=>n.pokemon[s]));return(s,N)=>(r(),m("div",null,[e("h1",null,[e("a",{href:`https://pokemondb.net/move/${o.value.name.replace(" ","-")}`},t(o.value.name),9,g)]),e("div",b,[I,e("div",null,t(o.value.id),1),P,e("div",null,t(o.value.skill_damage_type),1),x,e("div",null,t(o.value.base_power),1),T,e("div",null,t(o.value.base_accuracy),1),B,e("div",null,t(o.value.base_pp),1),D,e("div",null,t(o.value.priority),1),S,e("div",null,t(o.value.type),1),w,e("div",null,t(o.value.target_type),1),L,e("div",null,t(o.value.true_damage),1)]),f(c,{pokemon:p.value,move:o.value},null,8,["pokemon","move"])]))}});typeof d=="function"&&d(_);const q=k(_,[["__scopeId","data-v-381eef59"]]);export{q as default};