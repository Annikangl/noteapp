(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"3d90":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",class:{dark:t.darkMode}},[s("div",{staticClass:"wrapper-content"},[s("todoHeader",{class:{dark:t.darkMode},on:{switchTheme:function(e){return t.switchTheme(e)}}}),s("addTask",{on:{addTask:function(e){return t.addTask(e)}}}),s("tasks",{attrs:{tasks:t.tasks}})],1)])},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"header__inner"},[s("h1",{staticClass:"header__title"},[t._v(t._s(t.title)+" ")]),s("div",{staticClass:"header__app__mode"},[s("label",{staticClass:"dark__mode-label",attrs:{for:"dark__mode"}},[t._v(t._s(t.themeSwitcher))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.themeSwitcher,expression:"themeSwitcher"}],attrs:{type:"checkbox",id:"dark__mode-checkbox","true-value":t.on,"false-value":t.off},domProps:{checked:Array.isArray(t.themeSwitcher)?t._i(t.themeSwitcher,null)>-1:t._q(t.themeSwitcher,t.on)},on:{change:[function(e){var s=t.themeSwitcher,a=e.target,r=a.checked?t.on:t.off;if(Array.isArray(s)){var i=null,n=t._i(s,i);a.checked?n<0&&(t.themeSwitcher=s.concat([i])):n>-1&&(t.themeSwitcher=s.slice(0,n).concat(s.slice(n+1)))}else t.themeSwitcher=r},function(e){return t.switchTheme()}]}})])])])])},o=[],c={name:"Header",props:{},data:function(){return{title:"My TODO",themeSwitcher:"Dark",on:"Light",off:"Dark"}},methods:{switchTheme:function(){this.$emit("switchTheme",this.themeSwitcher)}}},l=c,d=s("2877"),u=Object(d["a"])(l,n,o,!1,null,null,null),p=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"newtask"},[s("button",{staticClass:"btn add__task",on:{click:function(e){t.modal.show=!t.modal.show}}},[t._v("Добавить задачу")]),s("Modal",{directives:[{name:"show",rawName:"v-show",value:t.modal.show,expression:"modal.show"}],attrs:{title:"Новая задача"},on:{close:function(e){t.modal.show=!1}}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"container newtask__wrapper"},[s("div",{staticClass:"form-group"},[t.message?s("div",{staticClass:"msg-error"},[t._v(t._s(t.message))]):t._e(),s("label",{staticClass:"task__title-lb",attrs:{for:"task-title"}},[t._v("Название")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],class:{"input-danger":t.hasError},attrs:{type:"text",id:"task-title",placeholder:"Введите название задачи"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.priority,expression:"priority"}],staticClass:"task-priority",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.priority=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Приоритет")]),s("option",{staticClass:"normal"},[t._v("Стандартный")]),s("option",{staticClass:"hight"},[t._v("Важно")]),s("option",{staticClass:"very=hight"},[t._v("Очень важно")])])]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"task__text-lb",attrs:{for:"task-text"}},[t._v("Описание")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descr,expression:"descr"}],attrs:{id:"task-text",placeholder:"Описание задачи"},domProps:{value:t.descr},on:{input:function(e){e.target.composing||(t.descr=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("button",{staticClass:"add__task",attrs:{type:"button"},on:{click:function(e){return t.addTask()}}},[t._v(" Добавить ")])])])])])],1)},m=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"modal__wrapper",on:{click:function(e){return t.$emit("close")}}},[s("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"modal__header"},[s("span",{staticClass:"modal-title"},[t._v(t._s(t.title)+" ")]),s("span",{staticClass:"task__remove_btn",on:{click:function(e){return t.$emit("close")}}})]),s("div",{staticClass:"modal__body"},[t._t("body")],2)])])])},v=[],_={name:"Modal",props:{title:{type:String,required:!0}},data:function(){return{}},mounted:function(){var t=this;document.body.addEventListener("keyup",(function(e){27===e.keyCode&&t.$emit("close")}))}},k=_,g=(s("5c86"),Object(d["a"])(k,f,v,!1,null,"1c460a17",null)),w=g.exports,y={name:"AddTask",components:{Modal:w},props:{},data:function(){return{modal:{show:!1},message:null,hasError:!1,title:"",descr:"",priority:"",note:[]}},methods:{addTask:function(){if(""==this.title)return this.message="Поле обязательно",void(this.hasError=!0);this.$emit("addTask",{title:this.title,descr:this.descr,date:new Date(Date.now()).toLocaleString(),priority:this.priority}),this.message=null,this.title="",this.priority="",this.descr="",this.modal.show=!1}}},b=y,C=Object(d["a"])(b,h,m,!1,null,null,null),S=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"tasks"},[a("div",{staticClass:"container"},[a("div",{staticClass:"tasks__filters"},[a("search",{on:{search:function(e){t.search=e}}}),a("div",{staticClass:"column__filter"},[a("img",{staticClass:"column__img",class:{active:t.isActive},attrs:{src:s("f53d"),alt:"row"},on:{click:function(e){t.isActive=!0}}})]),a("div",{staticClass:"grid__filter"},[a("img",{staticClass:"grid__img",class:{active:!t.isActive},attrs:{src:s("bdda"),alt:"grid"},on:{click:function(e){t.isActive=!1}}})])],1),t.tasks.length?a("div",{staticClass:"tasks-wrapper"},t._l(t.tasksFilter,(function(e,s){return a("div",{key:s,staticClass:"task",class:{grid:!t.isActive}},[a("div",{staticClass:"task__header",class:{hight:"Важно"==e.priority,veryHight:"Очень важно"==e.priority}},[a("div",{staticClass:"task__created__date"},[t._v(t._s(e.date))]),a("div",{staticClass:"task__actions"},[a("button",{staticClass:"task__edit_btn",attrs:{type:"button"}}),a("button",{staticClass:"task__remove_btn",attrs:{type:"button"},on:{click:function(e){return t.removeTask(s)}}})])]),a("div",{staticClass:"task__content"},[a("div",{staticClass:"content__title"},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"content__text"},[t._v(" "+t._s(e.descr)+" ")])])])})),0):a("div",{staticClass:"notif"},[a("p",{staticClass:"notif-empty"},[t._v("Заметок нет")]),a("img",{staticClass:"notif-empty__img",attrs:{src:s("666c"),alt:"sad"}})])])])},O=[],T=(s("4de4"),s("c975"),s("a434"),s("ac1f"),s("841c"),s("498a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search__filter"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",id:"task-search",placeholder:"Поиск"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])}),M=[],j={data:function(){return{search:""}},watch:{search:function(t){this.$emit("search",t)}}},A=j,N=Object(d["a"])(A,T,M,!1,null,null,null),$=N.exports,P={components:{search:$},props:{tasks:{type:Array}},data:function(){return{isActive:!0,search:""}},computed:{tasksFilter:function(){var t=this.tasks,e=this.search;return e?(e=e.trim().toLowerCase(),t=t.filter((function(t){if(-1!==t.title.toLowerCase().indexOf(e))return t})),t):t}},methods:{removeTask:function(t){this.tasks.splice(t,1);var e=JSON.parse(localStorage.tasks);e.splice(t,1),localStorage.setItem("tasks",JSON.stringify(e))}}},E=P,J=Object(d["a"])(E,x,O,!1,null,null,null),I=J.exports,L={name:"App",components:{todoHeader:p,addTask:S,tasks:I},data:function(){return{tasks:JSON.parse(localStorage.getItem("tasks"))?JSON.parse(localStorage.getItem("tasks")):[],darkMode:!1}},methods:{addTask:function(t){var e=this.tasks;e.push(t),localStorage.setItem("tasks",JSON.stringify(e))},switchTheme:function(t){this.darkMode="Light"==t}},watch:{darkMode:function(){localStorage.setItem("darkMode",JSON.stringify(this.darkMode))}},created:function(){this.darkMode=JSON.parse(localStorage.getItem("darkMode"))}},D=L,H=Object(d["a"])(D,r,i,!1,null,null,null),q=H.exports;s("c1c3");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(q)}}).$mount("#app")},"5c86":function(t,e,s){"use strict";s("3d90")},"666c":function(t,e,s){t.exports=s.p+"assets/img/sad_emj.5e24b90b.png"},bdda:function(t,e,s){t.exports=s.p+"assets/img/grid.3e7115ff.svg"},c1c3:function(t,e,s){},f53d:function(t,e,s){t.exports=s.p+"assets/img/row.509666e2.svg"}});