import{b as a}from"./store-74b8450a.js";import{P as c}from"./PokemonList-d854cca0.js";import{d,e as n,o as m,c as u,f as o,t as s,a as f,_ as k}from"./index-28d703e3.js";import{b as p}from"./route-block-83d24a4e.js";import"./status-483db4de.js";import"./GenderRatio-6b9ba30a.js";const v=["href"],i=d({__name:"[id]",props:{id:null},setup(l){const r=l,e=n(()=>a.abilities[parseInt(r.id)]),_=n(()=>e.value.learnedBy.map(t=>a.pokemon[t]));return(t,b)=>(m(),u("div",null,[o("h1",null,[o("a",{href:`https://pokemondb.net/ability/${e.value.name.replace(" ","-")}`},s(e.value.name),9,v)]),o("div",null,s(e.value.description),1),f(c,{pokemon:_.value},null,8,["pokemon"])]))}});typeof p=="function"&&p(i);const L=k(i,[["__scopeId","data-v-9ebe0fdf"]]);export{L as default};
