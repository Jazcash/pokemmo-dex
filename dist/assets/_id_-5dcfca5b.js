import{T as n,d as z,u as q,R as X,m as Z,k as V,b as H}from"./store-74b8450a.js";import{T as R}from"./status-483db4de.js";import{M as J}from"./Moves-bb28349a.js";import{E as D,G as Q}from"./GenderRatio-6b9ba30a.js";import{L as ee}from"./Locations-2efc9af4.js";import{d as N,e as w,o,c as d,f as r,F as _,I,t as p,N as te,_ as L,a as m,A as G,q as v,U as K,D as h,y as ne,B as S,z as B,l as f,k as y,E as k,G as ae,x as se,j as F,w as A,b as E,p as ie,g as re}from"./index-28d703e3.js";import{b as $}from"./route-block-83d24a4e.js";const oe={class:"stats"},le=N({__name:"BaseStats",props:{stats:null},setup(a){const e=a,t=w(()=>[{label:"HP",value:e.stats.hp,max:125},{label:"Attack",value:e.stats.attack,max:125},{label:"Defense",value:e.stats.defense,max:125},{label:"Sp. Attack",value:e.stats.sp_attack,max:125},{label:"Sp. Defense",value:e.stats.sp_defense,max:125},{label:"Speed",value:e.stats.speed,max:125},{label:"Total",value:e.stats.total,max:600}]);function s(l){return`hsl(${l*100}, 50%, 50%)`}return(l,i)=>(o(),d("div",oe,[r("table",null,[(o(!0),d(_,null,I(t.value,b=>(o(),d("tr",null,[r("td",null,p(b.label),1),r("td",null,p(b.value),1),r("td",null,[r("div",{class:"bar",style:te(`width: ${b.value/b.max*120}px; background-color: ${s(b.value/b.max)}`)},null,4)])]))),256))])]))}});const ce=L(le,[["__scopeId","data-v-3859bb12"]]),de={[n.BUG]:{resistantTo:[n.FIGHTING,n.GRASS,n.GROUND],weakTo:[n.FIRE,n.FLYING,n.ROCK],immuneTo:[]},[n.DARK]:{resistantTo:[n.DARK,n.GHOST],weakTo:[n.BUG,n.FIGHTING],immuneTo:[n.PSYCHIC]},[n.DRAGON]:{resistantTo:[n.ELECTRIC,n.FIRE,n.GRASS,n.WATER],weakTo:[n.DRAGON,n.ICE],immuneTo:[]},[n.ELECTRIC]:{resistantTo:[n.ELECTRIC,n.FLYING,n.STEEL],weakTo:[n.GROUND],immuneTo:[]},[n.FIGHTING]:{resistantTo:[n.BUG,n.DARK,n.ROCK],weakTo:[n.FLYING,n.PSYCHIC],immuneTo:[]},[n.FIRE]:{resistantTo:[n.BUG,n.FIRE,n.GRASS,n.ICE,n.STEEL],weakTo:[n.GROUND,n.ROCK,n.WATER],immuneTo:[]},[n.FLYING]:{resistantTo:[n.BUG,n.FIGHTING,n.GRASS],weakTo:[n.ELECTRIC,n.ICE,n.ROCK],immuneTo:[n.GROUND]},[n.GHOST]:{resistantTo:[n.BUG,n.POISON],weakTo:[n.DARK,n.GHOST],immuneTo:[n.FIGHTING,n.NORMAL]},[n.GRASS]:{resistantTo:[n.ELECTRIC,n.GRASS,n.GROUND,n.WATER],weakTo:[n.BUG,n.FIRE,n.FLYING,n.ICE,n.POISON],immuneTo:[]},[n.GROUND]:{resistantTo:[n.POISON,n.ROCK],weakTo:[n.GRASS,n.ICE,n.WATER],immuneTo:[n.ELECTRIC]},[n.ICE]:{resistantTo:[n.ICE],weakTo:[n.FIGHTING,n.FIRE,n.ROCK,n.STEEL],immuneTo:[]},[n.NORMAL]:{resistantTo:[],weakTo:[n.FIGHTING],immuneTo:[n.GHOST]},[n.POISON]:{resistantTo:[n.BUG,n.FIGHTING,n.GRASS,n.POISON],weakTo:[n.GROUND,n.PSYCHIC],immuneTo:[]},[n.PSYCHIC]:{resistantTo:[n.FIGHTING,n.PSYCHIC],weakTo:[n.BUG,n.DARK,n.GHOST],immuneTo:[]},[n.ROCK]:{resistantTo:[n.FIRE,n.FLYING,n.NORMAL,n.POISON],weakTo:[n.FIGHTING,n.GRASS,n.GROUND,n.STEEL,n.WATER],immuneTo:[]},[n.STEEL]:{resistantTo:[n.BUG,n.DARK,n.DRAGON,n.FLYING,n.GHOST,n.GRASS,n.ICE,n.NORMAL,n.PSYCHIC,n.ROCK,n.STEEL],weakTo:[n.FIGHTING,n.FIRE,n.GROUND],immuneTo:[n.POISON]},[n.WATER]:{resistantTo:[n.FIRE,n.ICE,n.STEEL,n.WATER],weakTo:[n.ELECTRIC,n.GRASS],immuneTo:[]}};function ue(a,e){const t={};for(const s in n)t[s]=U(s,a)*(a!==e?U(s,e):1);return t}function U(a,e){const t=de[e];return t.resistantTo.includes(a)?.5:t.weakTo.includes(a)?2:t.immuneTo.includes(a)?0:1}const pe={class:"type-effectiveness"},ve=N({__name:"TypeEffectiveness",props:{type:null},setup(a){const e=a,t=w(()=>ue(e.type[0],e.type[1]));return(s,l)=>(o(),d("div",pe,[(o(!0),d(_,null,I(t.value,(i,b)=>(o(),d(_,null,[m(R,{type:b},null,8,["type"]),r("div",{class:G(`effectiveness multiplier-${i*100}`)},"x"+p(i),3)],64))),256))]))}});const fe=L(ve,[["__scopeId","data-v-a1f17679"]]);var Y={name:"ChevronLeftIcon",extends:z},he=r("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1),be=[he];function ge(a,e,t,s,l,i){return o(),d("svg",v({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.pti()),be,16)}Y.render=ge;var me=`
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
}

.p-tabview-header-action {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}

.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabview-header-action:focus {
    z-index: 1;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
`,Te={root:function(e){var t=e.props;return["p-tabview p-component",{"p-tabview-scrollable":t.scrollable}]},navContainer:"p-tabview-nav-container",previousButton:"p-tabview-nav-prev p-tabview-nav-btn p-link",navContent:"p-tabview-nav-content",nav:"p-tabview-nav",tab:{header:function(e){var t=e.instance,s=e.tab,l=e.index;return["p-tabview-header",t.getTabProp(s,"headerClass"),{"p-highlight":t.d_activeIndex===l,"p-disabled":t.getTabProp(s,"disabled")}]},headerAction:"p-tabview-nav-link p-tabview-header-action",headerTitle:"p-tabview-title",content:function(e){var t=e.instance,s=e.tab;return["p-tabview-panel",t.getTabProp(s,"contentClass")]}},inkbar:"p-tabview-ink-bar",nextButton:"p-tabview-nav-next p-tabview-nav-btn p-link",panelContainer:"p-tabview-panels"},_e=q(me,{name:"tabview",manual:!0}),ye=_e.load,Ie={name:"BaseTabView",extends:V,props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},previousButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},prevIcon:{type:String,default:void 0},nextIcon:{type:String,default:void 0}},css:{classes:Te,loadStyle:ye},provide:function(){return{$parentInstance:this}}},j={name:"TabView",extends:Ie,emits:["update:activeIndex","tab-change","tab-click"],data:function(){return{id:this.$attrs.id,d_activeIndex:this.activeIndex,isPrevButtonDisabled:!0,isNextButtonDisabled:!1}},watch:{"$attrs.id":function(e){this.id=e||K()},activeIndex:function(e){this.d_activeIndex=e,this.scrollInView({index:e})}},mounted:function(){this.id=this.id||K(),this.updateInkBar(),this.scrollable&&this.updateButtonState()},updated:function(){this.updateInkBar()},methods:{isTabPanel:function(e){return e.type.name==="TabPanel"},isTabActive:function(e){return this.d_activeIndex===e},getTabProp:function(e,t){return e.props?e.props[t]:void 0},getKey:function(e,t){return this.getTabProp(e,"header")||t},getTabHeaderActionId:function(e){return"".concat(this.id,"_").concat(e,"_header_action")},getTabContentId:function(e){return"".concat(this.id,"_").concat(e,"_content")},getTabPT:function(e,t,s){var l=this.tabs.length,i={props:e.props,parent:{props:this.$props,state:this.$data},context:{index:s,count:l,first:s===0,last:s===l-1,active:this.isTabActive(s)}};return v(this.ptm("tab.".concat(t),{tab:i}),this.ptm("tabpanel.".concat(t),{tabpanel:i}),this.ptm("tabpanel.".concat(t),i),this.ptmo(this.getTabProp(e,"pt"),t,i))},onScroll:function(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=h.getWidth(e),s=e.scrollLeft-t;e.scrollLeft=s<=0?0:s},onNextButtonClick:function(){var e=this.$refs.content,t=h.getWidth(e)-this.getVisibleButtonWidths(),s=e.scrollLeft+t,l=e.scrollWidth-t;e.scrollLeft=s>=l?l:s},onTabClick:function(e,t,s){this.changeActiveIndex(e,t,s),this.$emit("tab-click",{originalEvent:e,index:s})},onTabKeyDown:function(e,t,s){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onTabEnterKey(e,t,s);break}},onTabArrowRightKey:function(e){var t=this.findNextHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabHomeKey(e),e.preventDefault()},onTabArrowLeftKey:function(e){var t=this.findPrevHeaderAction(e.target.parentElement);t?this.changeFocusedTab(e,t):this.onTabEndKey(e),e.preventDefault()},onTabHomeKey:function(e){var t=this.findFirstHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onTabEndKey:function(e){var t=this.findLastHeaderAction();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView({index:this.$refs.nav.children.length-2}),e.preventDefault()},onPageUpKey:function(e){this.scrollInView({index:0}),e.preventDefault()},onTabEnterKey:function(e,t,s){this.changeActiveIndex(e,t,s),e.preventDefault()},findNextHeaderAction:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=t?e:e.nextElementSibling;return s?h.getAttribute(s,"data-p-disabled")||h.getAttribute(s,"data-pc-section")==="inkbar"?this.findNextHeaderAction(s):h.findSingle(s,'[data-pc-section="headeraction"]'):null},findPrevHeaderAction:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=t?e:e.previousElementSibling;return s?h.getAttribute(s,"data-p-disabled")||h.getAttribute(s,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(s):h.findSingle(s,'[data-pc-section="headeraction"]'):null},findFirstHeaderAction:function(){return this.findNextHeaderAction(this.$refs.nav.firstElementChild,!0)},findLastHeaderAction:function(){return this.findPrevHeaderAction(this.$refs.nav.lastElementChild,!0)},changeActiveIndex:function(e,t,s){!this.getTabProp(t,"disabled")&&this.d_activeIndex!==s&&(this.d_activeIndex=s,this.$emit("update:activeIndex",s),this.$emit("tab-change",{originalEvent:e,index:s}),this.scrollInView({index:s}))},changeFocusedTab:function(e,t){if(t&&(h.focus(t),this.scrollInView({element:t}),this.selectOnFocus)){var s=parseInt(t.parentElement.dataset.index,10),l=this.tabs[s];this.changeActiveIndex(e,l,s)}},scrollInView:function(e){var t=e.element,s=e.index,l=s===void 0?-1:s,i=t||this.$refs.nav.children[l];i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest"})},updateInkBar:function(){var e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=h.getWidth(e)+"px",this.$refs.inkbar.style.left=h.getOffset(e).left-h.getOffset(this.$refs.nav).left+"px"},updateButtonState:function(){var e=this.$refs.content,t=e.scrollLeft,s=e.scrollWidth,l=h.getWidth(e);this.isPrevButtonDisabled=t===0,this.isNextButtonDisabled=parseInt(t)===s-l},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevBtn,s=e.nextBtn;return[t,s].reduce(function(l,i){return i?l+h.getWidth(i):l},0)}},computed:{tabs:function(){var e=this;return this.$slots.default().reduce(function(t,s){return e.isTabPanel(s)?t.push(s):s.children&&s.children instanceof Array&&s.children.forEach(function(l){e.isTabPanel(l)&&t.push(l)}),t},[])},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},directives:{ripple:X},components:{ChevronLeftIcon:Y,ChevronRightIcon:Z}};function C(a){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(a)}function W(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),t.push.apply(t,s)}return t}function g(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?W(Object(t),!0).forEach(function(s){we(a,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(t,s))})}return a}function we(a,e,t){return e=Ce(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Ce(a){var e=Se(a,"string");return C(e)==="symbol"?e:String(e)}function Se(a,e){if(C(a)!=="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var s=t.call(a,e||"default");if(C(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var ke=["tabindex","aria-label"],Ae=["data-p-highlight","data-p-disabled","data-pc-index","data-p-active"],Pe=["id","tabindex","aria-disabled","aria-selected","aria-controls","onClick","onKeydown"],xe=["tabindex","aria-label"],Ee=["id","aria-labelledby","data-pc-index","data-p-active"];function Re(a,e,t,s,l,i){var b=ne("ripple");return o(),d("div",v({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"tabview"}),[r("div",v({class:a.cx("navContainer")},a.ptm("navContainer")),[a.scrollable&&!l.isPrevButtonDisabled?S((o(),d("button",v({key:0,ref:"prevBtn",type:"button",class:a.cx("previousButton"),tabindex:a.tabindex,"aria-label":i.prevButtonAriaLabel,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},g(g({},a.previousButtonProps),a.ptm("previousButton")),{"data-pc-group-section":"navbutton"}),[B(a.$slots,"previcon",{},function(){return[(o(),y(k(a.prevIcon?"span":"ChevronLeftIcon"),v({"aria-hidden":"true",class:a.prevIcon},a.ptm("previousIcon")),null,16,["class"]))]})],16,ke)),[[b]]):f("",!0),r("div",v({ref:"content",class:a.cx("navContent"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},a.ptm("navContent")),[r("ul",v({ref:"nav",class:a.cx("nav"),role:"tablist"},a.ptm("nav")),[(o(!0),d(_,null,I(i.tabs,function(u,c){return o(),d("li",v({key:i.getKey(u,c),style:i.getTabProp(u,"headerStyle"),class:a.cx("tab.header",{tab:u,index:c}),role:"presentation"},g(g(g({},i.getTabProp(u,"headerProps")),i.getTabPT(u,"root",c)),i.getTabPT(u,"header",c)),{"data-pc-name":"tabpanel","data-p-highlight":l.d_activeIndex===c,"data-p-disabled":i.getTabProp(u,"disabled"),"data-pc-index":c,"data-p-active":l.d_activeIndex===c}),[S((o(),d("a",v({id:i.getTabHeaderActionId(c),class:a.cx("tab.headerAction"),tabindex:i.getTabProp(u,"disabled")||!i.isTabActive(c)?-1:a.tabindex,role:"tab","aria-disabled":i.getTabProp(u,"disabled"),"aria-selected":i.isTabActive(c),"aria-controls":i.getTabContentId(c),onClick:function(x){return i.onTabClick(x,u,c)},onKeydown:function(x){return i.onTabKeyDown(x,u,c)}},g(g({},i.getTabProp(u,"headerActionProps")),i.getTabPT(u,"headerAction",c))),[u.props&&u.props.header?(o(),d("span",v({key:0,class:a.cx("tab.headerTitle")},i.getTabPT(u,"headerTitle",c)),p(u.props.header),17)):f("",!0),u.children&&u.children.header?(o(),y(k(u.children.header),{key:1})):f("",!0)],16,Pe)),[[b]])],16,Ae)}),128)),r("li",v({ref:"inkbar",class:a.cx("inkbar"),role:"presentation","aria-hidden":"true"},a.ptm("inkbar")),null,16)],16)],16),a.scrollable&&!l.isNextButtonDisabled?S((o(),d("button",v({key:1,ref:"nextBtn",type:"button",class:a.cx("nextButton"),tabindex:a.tabindex,"aria-label":i.nextButtonAriaLabel,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},g(g({},a.nextButtonProps),a.ptm("nextButton")),{"data-pc-group-section":"navbutton"}),[B(a.$slots,"nexticon",{},function(){return[(o(),y(k(a.nextIcon?"span":"ChevronRightIcon"),v({"aria-hidden":"true",class:a.nextIcon},a.ptm("nextIcon")),null,16,["class"]))]})],16,xe)),[[b]]):f("",!0)],16),r("div",v({class:a.cx("panelContainer")},a.ptm("panelContainer")),[(o(!0),d(_,null,I(i.tabs,function(u,c){return o(),d(_,{key:i.getKey(u,c)},[!a.lazy||i.isTabActive(c)?S((o(),d("div",v({key:0,id:i.getTabContentId(c),style:i.getTabProp(u,"contentStyle"),class:a.cx("tab.content",{tab:u}),role:"tabpanel","aria-labelledby":i.getTabHeaderActionId(c)},g(g(g({},i.getTabProp(u,"contentProps")),i.getTabPT(u,"root",c)),i.getTabPT(u,"content",c)),{"data-pc-name":"tabpanel","data-pc-index":c,"data-p-active":l.d_activeIndex===c}),[(o(),y(k(u)))],16,Ee)),[[ae,a.lazy?!0:i.isTabActive(c)]]):f("",!0)],64)}),128))],16)],16)}j.render=Re;var Ge={name:"BaseTabPanel",extends:V,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean}},O={name:"TabPanel",extends:Ge};function Be(a,e,t,s,l,i){return B(a.$slots,"default")}O.render=Be;const T=a=>(ie("data-v-c79d6272"),a=a(),re(),a),Oe={key:0,class:"flex-col flex-grow gap-lg padding-lg"},Ne={class:"flex-row gap-lg"},Le={class:"battlesprite"},He={class:"type"},De={class:"flex-col fullwidth gap-sm"},Ke={class:"flex-row flex-space-between"},Fe=["href"],$e={class:"flex-row flex-space-between gap-lg"},Ue={class:"gridform"},We=T(()=>r("div",{class:"label"},"Tier",-1)),Ve={class:"value"},Ye=T(()=>r("div",{class:"label"},"Egg Group",-1)),je={class:"flex-row gap-sm"},Me=T(()=>r("div",{class:"label"},"Gender Ratio",-1)),ze=T(()=>r("div",{class:"label"},"Held Items",-1)),qe={class:"value items flex-row"},Xe={class:"gridform",style:{"row-gap":"5px"}},Ze=T(()=>r("div",{class:"label"},"Weight",-1)),Je={class:"value"},Qe=T(()=>r("div",{class:"label"},"Yields",-1)),et={class:"value flex-row gap-md"},tt={key:0},nt={key:1},at={key:2},st={key:3},it={key:4},rt={key:5},ot=T(()=>r("div",{class:"label"},"Catch Rate",-1)),lt={class:"value"},ct=T(()=>r("div",{class:"label"},"Levelling Rate",-1)),dt={class:"value"},ut={class:"flex-col gap-md"},pt=T(()=>r("h2",null,"Abilities",-1)),vt={key:0},ft={key:0},ht={class:"flex-row gap-lg flex-space-between"},bt={class:"flex-col gap-md"},gt=T(()=>r("h2",null,"Stats",-1)),mt={class:"flex-col gap-md"},Tt=T(()=>r("h2",null,"Type Defenses",-1)),M=N({__name:"[id]",props:{id:null},setup(a){const e=a,t=w(()=>H.pokemon[parseInt(e.id)]),s=w(()=>t.value.moves.map(i=>({...H.moves[i.id],...i}))),l=w(()=>t.value.exp_type.toLocaleLowerCase().split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" "));return(i,b)=>{const u=se("router-link");return t.value?(o(),d("div",Oe,[r("div",Ne,[r("div",Le,[r("div",{class:G(`battlesprite-${t.value.id}-front-n pixelart img`)},null,2),r("div",He,[m(R,{type:t.value.types[0]},null,8,["type"]),t.value.types[1]&&t.value.types[1]!==t.value.types[0]?(o(),y(R,{key:0,type:t.value.types[1]},null,8,["type"])):f("",!0)])]),r("div",De,[r("h1",Ke,[r("a",{href:`https://pokemondb.net/pokedex/${t.value.name}`},p(t.value.name),9,Fe),r("span",null,"#"+p(String(t.value.id).padStart(3,"0")),1)]),r("div",$e,[r("div",Ue,[We,r("div",Ve,p(t.value.tier),1),Ye,r("div",je,[m(D,{eggGroup:t.value.egg_groups[0]},null,8,["eggGroup"]),t.value.egg_groups[1]?(o(),y(D,{key:0,eggGroup:t.value.egg_groups[1]},null,8,["eggGroup"])):f("",!0)]),Me,r("div",null,[m(Q,{genderRatio:t.value.gender_ratio},null,8,["genderRatio"])]),ze,r("div",qe,[t.value.held_items.length?(o(!0),d(_,{key:0},I(t.value.held_items,c=>(o(),d("div",{class:G(`itemicon-${c.id}`)},null,2))),256)):(o(),d(_,{key:1},[F(" None ")],64))])]),r("div",Xe,[Ze,r("div",Je,p(t.value.weight/10)+"kg",1),Qe,r("div",et,[r("span",null,p(t.value.yields.exp)+" EXP ",1),t.value.yields.ev_hp?(o(),d("span",tt,p(t.value.yields.ev_hp)+" HP ",1)):f("",!0),t.value.yields.ev_attack?(o(),d("span",nt,p(t.value.yields.ev_attack)+" Atk ",1)):f("",!0),t.value.yields.ev_defense?(o(),d("span",at,p(t.value.yields.ev_defense)+" Def ",1)):f("",!0),t.value.yields.ev_sp_attack?(o(),d("span",st,p(t.value.yields.ev_sp_attack)+" SpA ",1)):f("",!0),t.value.yields.ev_sp_defense?(o(),d("span",it,p(t.value.yields.ev_sp_defense)+" SpD ",1)):f("",!0),t.value.yields.ev_speed?(o(),d("span",rt,p(t.value.yields.ev_speed)+" Spe ",1)):f("",!0)]),ot,r("div",lt,p(t.value.catchRate),1),ct,r("div",dt,p(l.value),1)])])])]),r("div",ut,[pt,(o(!0),d(_,null,I(t.value.abilities,(c,P)=>(o(),d(_,null,[c.description?(o(),d("div",vt,[r("h3",null,[m(u,{to:`/abilities/${c.id}`},{default:A(()=>[F(p(c.name),1)]),_:2},1032,["to"]),P===2?(o(),d("span",ft," (Hidden Ability)")):f("",!0)]),r("p",null,p(c.description),1)])):f("",!0)],64))),256))]),r("div",ht,[r("div",bt,[gt,m(ce,{stats:t.value.stats},null,8,["stats"])]),r("div",mt,[Tt,m(fe,{type:t.value.types},null,8,["type"])])]),m(E(j),null,{default:A(()=>[m(E(O),{header:"Moves"},{default:A(()=>[m(J,{moves:s.value},null,8,["moves"])]),_:1}),m(E(O),{header:"Locations"},{default:A(()=>[m(ee,{locations:t.value.locations},null,8,["locations"])]),_:1})]),_:1})])):f("",!0)}}});typeof $=="function"&&$(M);const At=L(M,[["__scopeId","data-v-c79d6272"]]);export{At as default};