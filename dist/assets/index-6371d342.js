import{s as a,a as c,p}from"./store-74b8450a.js";import{d as o,u as _,o as n,c as d,a as i,w as u,b as t,_ as f}from"./index-28d703e3.js";const b=o({__name:"Abilities",props:{abilities:null},setup(l){const s=_();function r(e){"ctrlKey"in e.originalEvent&&e.originalEvent.ctrlKey?window.open(`/abilities/${e.data.id}`):s.push(`/abilities/${e.data.id}`)}return(e,w)=>(n(),d("div",null,[i(t(c),{value:l.abilities,dataKey:"id",sortField:"name",sortOrder:1,paginator:"",rows:20,rowsPerPageOptions:[20,50,1e3],filterDisplay:"menu",onRowSelect:r,selectionMode:"single",stripedRows:""},{default:u(()=>[i(t(a),{header:"Name",field:"name",sortable:"",filter:"",style:{width:"200px"}}),i(t(a),{header:"Description",field:"description",sortable:"",filter:"",style:{width:"200px"}}),i(t(a),{header:"Amount",field:"learnedBy.length",sortable:"",filter:"",style:{width:"200px"}})]),_:1},8,["value"])]))}});const m=f(b,[["__scopeId","data-v-8a6e119c"]]),y=o({__name:"index",setup(l){const s=p.abilities;return(r,e)=>(n(),d("div",null,[i(m,{abilities:t(s)},null,8,["abilities"])]))}});export{y as default};
