!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw o}}}}function o(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{EVqC:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("kt0X"),s=n("fXoL"),c=function(){var t={EntitiesOnly:0,Both:1,None:2};return t[t.EntitiesOnly]="EntitiesOnly",t[t.Both]="Both",t[t.None]="None",t}();function a(t){return function(e,n){var r={ids:o(n.ids),entities:Object.assign({},n.entities)},i=t(e,r);return i===c.Both?Object.assign({},n,r):i===c.EntitiesOnly?Object.assign(Object.assign({},n),{entities:r.entities}):n}}function u(t,e){var n=e(t);return Object(s.X)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",e.toString()),n}function l(t){function e(e,n){var r=u(e,t);return r in n.entities?c.None:(n.ids.push(r),n.entities[r]=e,c.Both)}function n(t,n){var r,o=!1,s=i(t);try{for(s.s();!(r=s.n()).done;){o=e(r.value,n)!==c.None||o}}catch(a){s.e(a)}finally{s.f()}return o?c.Both:c.None}function r(t,e){return e.ids=[],e.entities={},n(t,e),c.Both}function o(t,e){var n=(t instanceof Array?t:e.ids.filter((function(n){return t(e.entities[n])}))).filter((function(t){return t in e.entities})).map((function(t){return delete e.entities[t]})).length>0;return n&&(e.ids=e.ids.filter((function(t){return t in e.entities}))),n?c.Both:c.None}function s(e,n){var r={};return(e=e.filter((function(t){return t.id in n.entities}))).length>0?e.filter((function(e){return function(e,n,r){var i=Object.assign({},r.entities[n.id],n.changes),o=u(i,t),s=o!==n.id;return s&&(e[n.id]=o,delete r.entities[n.id]),r.entities[o]=i,s}(r,e,n)})).length>0?(n.ids=n.ids.map((function(t){return r[t]||t})),c.Both):c.EntitiesOnly:c.None}function l(e,r){var o,a=[],l=[],d=i(e);try{for(d.s();!(o=d.n()).done;){var f=o.value,b=u(f,t);b in r.entities?l.push({id:b,changes:f}):a.push(f)}}catch(p){d.e(p)}finally{d.f()}var h=s(l,r),m=n(a,r);switch(!0){case m===c.None&&h===c.None:return c.None;case m===c.Both||h===c.Both:return c.Both;default:return c.EntitiesOnly}}return{removeAll:function(t){return Object.assign({},t,{ids:[],entities:{}})},addOne:a(e),addMany:a(n),addAll:a(r),setAll:a(r),setOne:a((function(e,n){var r=u(e,t);return r in n.entities?(n.entities[r]=e,c.EntitiesOnly):(n.ids.push(r),n.entities[r]=e,c.Both)})),updateOne:a((function(t,e){return s([t],e)})),updateMany:a(s),upsertOne:a((function(t,e){return l([t],e)})),upsertMany:a(l),removeOne:a((function(t,e){return o([t],e)})),removeMany:a(o),map:a((function(t,e){return s(e.ids.reduce((function(n,r){var i=t(e.entities[r]);return i!==e.entities[r]&&n.push({id:r,changes:i}),n}),[]).filter((function(t){return t.id in e.entities})),e)}))}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({sortComparer:!1,selectId:function(t){return t.id}},t),n=e.selectId,o=e.sortComparer,s={getInitialState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({ids:[],entities:{}},t)}},d={getSelectors:function(t){var e=function(t){return t.ids},n=function(t){return t.entities},i=Object(r.q)(e,n,(function(t,e){return t.map((function(t){return e[t]}))})),o=Object(r.q)(e,(function(t){return t.length}));return t?{selectIds:Object(r.q)(t,e),selectEntities:Object(r.q)(t,n),selectAll:Object(r.q)(t,i),selectTotal:Object(r.q)(t,o)}:{selectIds:e,selectEntities:n,selectAll:i,selectTotal:o}}},f=o?function(t,e){var n=l(t);function r(t,e){return o([t],e)}function o(e,n){var r=e.filter((function(e){return!(u(e,t)in n.entities)}));return 0===r.length?c.None:(b(r,n),c.Both)}function s(t,e){return e.entities={},e.ids=[],o(t,e),c.Both}function d(e,n){var r=[],i=e.filter((function(e){return function(e,n,r){if(!(n.id in r.entities))return!1;var i=Object.assign({},r.entities[n.id],n.changes),o=u(i,t);return delete r.entities[n.id],e.push(i),o!==n.id}(r,e,n)})).length>0;if(0===r.length)return c.None;var o=n.ids,s=[];return n.ids=n.ids.filter((function(t,e){return t in n.entities||(s.push(e),!1)})),b(r,n),!i&&s.every((function(t){return n.ids[t]===o[t]}))?c.EntitiesOnly:c.Both}function f(e,n){var r,s=[],a=[],l=i(e);try{for(l.s();!(r=l.n()).done;){var f=r.value,b=u(f,t);b in n.entities?a.push({id:b,changes:f}):s.push(f)}}catch(p){l.e(p)}finally{l.f()}var h=d(a,n),m=o(s,n);switch(!0){case m===c.None&&h===c.None:return c.None;case m===c.Both||h===c.Both:return c.Both;default:return c.EntitiesOnly}}function b(n,r){n.sort(e);for(var i=[],o=0,s=0;o<n.length&&s<r.ids.length;){var c=n[o],a=u(c,t),l=r.ids[s];e(c,r.entities[l])<=0?(i.push(a),o++):(i.push(l),s++)}r.ids=i.concat(o<n.length?n.slice(o).map(t):r.ids.slice(s)),n.forEach((function(e,n){r.entities[t(e)]=e}))}return{removeOne:n.removeOne,removeMany:n.removeMany,removeAll:n.removeAll,addOne:a(r),updateOne:a((function(t,e){return d([t],e)})),upsertOne:a((function(t,e){return f([t],e)})),addAll:a(s),setAll:a(s),setOne:a((function(e,n){var i=u(e,t);return i in n.entities?(n.ids=n.ids.filter((function(t){return t!==i})),b([e],n),c.Both):r(e,n)})),addMany:a(o),updateMany:a(d),upsertMany:a(f),map:a((function(t,e){return d(e.ids.reduce((function(n,r){var i=t(e.entities[r]);return i!==e.entities[r]&&n.push({id:r,changes:i}),n}),[]),e)}))}}(n,o):l(n);return Object.assign(Object.assign(Object.assign({selectId:n,sortComparer:o},s),d),f)}},vfUp:function(e,o,s){"use strict";s.r(o),s.d(o,"CustomersModule",(function(){return at}));var c,a,u=s("ofXK"),l=s("PCNd"),d=s("kt0X"),f=Object(d.n)("[Customers] Initialize Store",Object(d.s)()),b=Object(d.n)("[Customers] Request Entities",Object(d.s)()),h=Object(d.n)("[Customers] Request Entity",Object(d.s)()),m=Object(d.n)("[Customers] Upsert Many",Object(d.s)()),p=Object(d.n)("[Customers] Set All",Object(d.s)()),v=Object(d.n)("[Customers] Add One",Object(d.s)()),y=Object(d.n)("[Customers] Set Error",Object(d.s)()),O=Object(d.n)("[Customers] Set Selected Id",Object(d.s)()),g=s("EVqC"),j=Object(g.a)(),q=Object(d.p)({ids:[],entities:{},selectedRequestId:null,apiError:null},Object(d.r)(p,(function(t,e){var n=e.entities;return j.setAll(n,t)})),Object(d.r)(m,(function(t,e){var n=e.entities;return j.upsertMany(n,t)})),Object(d.r)(v,(function(t,e){var n=e.entity;return j.addOne(n,t)})),Object(d.r)(y,(function(t,e){var n=e.error;return Object.assign(Object.assign({},t),{apiError:n})})),Object(d.r)(O,(function(t,e){var n=e.id;return Object.assign(Object.assign({},t),{selectedRequestId:n})}))),w=Object(d.o)("customers"),D=j.getSelectors(w).selectAll,S=(Object(d.q)(w,(function(t){return t.apiError})),D),C=(Object(d.q)(w,(function(t){return t})),Object(d.q)(w,(function(t){return t.selectedRequestId}))),E=Object(d.q)(S,C,(function(t,e){return t.find((function(t){return t.id===e}))})),I=s("snw9"),V=s("mrSG"),M=s("LRne"),k=s("lJxs"),A=s("5+tZ"),W=s("JIr8"),B=s("fXoL"),N=s("2Sd8"),F=((c=function t(e,n){var i=this;r(this,t),this.actions$=e,this.requestClient=n,this.initializeStore$=this.actions$.pipe(Object(I.e)(f),Object(k.a)((function(t){var e=t.date;return{fromDate:e,toDate:e.clone().endOf("month")}})),Object(A.a)((function(t){var e=t.fromDate,n=t.toDate;return i.requestClient.get({fromDate:e,toDate:n}).pipe(Object(k.a)((function(t){return m({entities:t.results})})),Object(W.a)((function(t){return Object(M.a)(y({error:t}))})))}))),this.requestEntities$=this.actions$.pipe(Object(I.e)(b),Object(k.a)((function(t){var e=t.date;return{fromDate:e,toDate:e.clone().endOf("month")}})),Object(A.a)((function(t){var e=t.fromDate,n=t.toDate;return i.requestClient.get({fromDate:e,toDate:n}).pipe(Object(k.a)((function(t){return p({entities:t.results})})),Object(W.a)((function(t){return Object(M.a)(y({error:t}))})))}))),this.requestEntity$=this.actions$.pipe(Object(I.e)(h),Object(A.a)((function(t){var e=t.id;return i.requestClient.detail(e).pipe(Object(A.a)((function(t){return[v({entity:t}),O({id:e})]})),Object(W.a)((function(t){return Object(M.a)(y({error:t}))})))})))}).\u0275fac=function(t){return new(t||c)(B.ac(I.a),B.ac(N.g))},c.\u0275prov=B.Mb({token:c,factory:c.\u0275fac}),Object(V.b)([Object(I.b)()],c.prototype,"initializeStore$",void 0),Object(V.b)([Object(I.b)()],c.prototype,"requestEntities$",void 0),Object(V.b)([Object(I.b)()],c.prototype,"requestEntity$",void 0),c),x=s("LjFu"),$=s("tyNb"),R=s("wd/R"),T=s("iadO"),L=s("FKr1"),_=s("3lmY"),G=s("6Z0Z"),Y=s("Ql4B"),H=s("vqYj"),X=((a=function(){function t(){r(this,t)}return n(t,[{key:"transform",value:function(t){return R.utc(t).format("DD MMMM YYYY")}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275pipe=B.Pb({name:"toMomentDateLong",type:a,pure:!0}),a),J=s("clZe");function P(t,e){if(1&t&&(B.Wb(0,"div",5),B.Wb(1,"div",6),B.Rb(2,"shared-company-avatar",7),B.Vb(),B.Wb(3,"div",8),B.Gc(4),B.jc(5,"toMomentDateLong"),B.Wb(6,"div",9),B.Gc(7),B.jc(8,"appointmentStatus"),B.Vb(),B.Vb(),B.Vb()),2&t){var n=e.ngIf,r=B.ic(2);B.oc("@fadeIn",r.animationState),B.Db(2),B.oc("address",n.address)("logo",n.avatar)("name",n.name),B.Db(2),B.Ic(" ",B.kc(5,6,r.request.scheduledDate)," "),B.Db(3),B.Ic(" ",B.kc(8,8,r.request.status)," ")}}function Q(t,e){if(1&t&&(B.Ub(0),B.Wb(1,"div",15),B.Wb(2,"b"),B.Gc(3),B.Vb(),B.Wb(4,"p",16),B.Gc(5),B.Vb(),B.Vb(),B.Wb(6,"div",17),B.Wb(7,"h6"),B.Gc(8),B.Vb(),B.Vb(),B.Tb()),2&t){var n=e.$implicit;B.Db(3),B.Hc(n.service.name),B.Db(2),B.Jc(" ",n.start.format("DD/MM/YYYY - HH:mm")," (duration: ",n.service.duration,") "),B.Db(3),B.Hc(n.service.price)}}function U(t,e){if(1&t&&(B.Wb(0,"div",10),B.Rb(1,"img",11),B.Wb(2,"div",12),B.Wb(3,"div",13),B.Wb(4,"h4"),B.Gc(5),B.Vb(),B.Vb(),B.Ec(6,Q,9,4,"ng-container",14),B.Vb(),B.Vb()),2&t){var n=e.$implicit;B.Db(1),B.pc("src",n.employee.photoUrl,B.zc),B.Db(4),B.Hc(n.employee.name),B.Db(1),B.oc("ngForOf",n.appointments)}}function K(t,e){if(1&t&&(B.Wb(0,"div"),B.Ec(1,P,9,10,"div",1),B.Wb(2,"p"),B.Gc(3),B.Vb(),B.Wb(4,"h2",2),B.Gc(5,"Summary"),B.Vb(),B.Wb(6,"div"),B.Ec(7,U,7,3,"div",3),B.Vb(),B.Wb(8,"div",4),B.Gc(9),B.jc(10,"currency"),B.Vb(),B.Vb()),2&t){var n=B.ic();B.Db(1),B.oc("ngIf",n.request.owner),B.Db(2),B.Ic(" ",n.request.owner.config.postBookMessage," "),B.Db(1),B.oc("@fadeInDown",n.animationState),B.Db(2),B.oc("@staggeredFadeIn",n.attentionState),B.Db(1),B.oc("ngForOf",n.request.items),B.Db(1),B.oc("@fadeInDown",n.animationState),B.Db(1),B.Ic(" Total: ",B.lc(10,7,n.request.total,"EUR")," ")}}var z,Z=((z=function(){function t(e){r(this,t),this.ref=e,this.animationState=!1,this.attentionState=!1}return n(t,[{key:"animate",value:function(){var t=this;this.attentionState=!this.attentionState,this.animationState=!0,setTimeout((function(){t.animationState=!1,t.ref.detectChanges()}),800)}},{key:"request",set:function(t){this.animate(),this._request=t},get:function(){return this._request}}]),t}()).\u0275fac=function(t){return new(t||z)(B.Qb(B.h))},z.\u0275cmp=B.Kb({type:z,selectors:[["customers-request-card"]],inputs:{request:"request"},decls:1,vars:1,consts:[[4,"ngIf"],["class","row mb-4",4,"ngIf"],[1,"c-primary","mb-4"],["class","d-flex mb-4",4,"ngFor","ngForOf"],[1,"c-primary","text-right","h4"],[1,"row","mb-4"],[1,"col-8"],[3,"address","logo","name"],[1,"col-4","h4","text-right","font-weight-bold"],[1,"c-primary"],[1,"d-flex","mb-4"],[1,"company-circle-img-7",3,"src"],[1,"row","w-100","ml-2"],[1,"col-12"],[4,"ngFor","ngForOf"],[1,"col-9"],[1,"text-small"],[1,"col-3","text-right","c-primary"]],template:function(t,e){1&t&&B.Ec(0,K,11,10,"div",0),2&t&&B.oc("ngIf",e.request)},directives:[u.l,u.k,H.a],pipes:[u.d,X,J.a],styles:[""],data:{animation:[Object(G.d)(),Object(G.e)(),Y.c]}}),z);function tt(t,e){if(1&t){var n=B.Xb();B.Wb(0,"div"),B.Wb(1,"div",6),B.ec("click",(function(){B.yc(n);var t=e.$implicit;return B.ic().select.emit(t.id)})),B.Rb(2,"div",7),B.Wb(3,"b"),B.Gc(4),B.Vb(),B.Vb(),B.Vb()}if(2&t){var r=e.$implicit,i=e.index,o=B.ic();B.Db(2),B.Dc("background-color",o.getColor(i)),B.Db(2),B.Jc(" ",r.owner.name," - ",r.owner.address," ")}}var et,nt,rt,it,ot=((et=function(){function e(t){r(this,e),this.adapter=t,this.monthSelected=new B.o,this.select=new B.o,this.currentMonth=null,this._date=R.utc()}return n(e,[{key:"ngAfterViewInit",value:function(){this.currentMonth=this.calendar.monthView._monthLabel}},{key:"ngAfterViewChecked",value:function(){this.loadEvents(),this.paintCalendar()}},{key:"loadEvents",value:function(){if(this.calendar&&this.calendar.monthView&&this.currentMonth!==this.calendar.monthView._monthLabel){this.currentMonth=this.calendar.monthView._monthLabel;var t=this.adapter.getMonthNames("short").map((function(t){return t.toLowerCase()})).indexOf(this.currentMonth.toLowerCase()),e=+this.calendarHeader.periodButtonText.substring(this.currentMonth.length+1),n=this.adapter.createDate(e,t,1);this.monthSelected.emit(n)}}},{key:"paintCalendar",value:function(){var e,n=document.getElementsByClassName("special-date"),r=i(Array.from(n).entries());try{for(r.s();!(e=r.n()).done;){var o=t(e.value,2),s=o[0],c=o[1];if(1===c.children.length){var a=document.createElement("div");a.classList.add("under-bar"),a.style.backgroundColor=this.getColor(s),c.appendChild(a)}}}catch(u){r.e(u)}finally{r.f()}}},{key:"dateClass",value:function(){var t=this;return function(e){return t.requests.map((function(t){return t.scheduledDate})).some((function(t){return t===e.toISOString().substring(0,10)}))?"special-date":""}}},{key:"getColor",value:function(t){var e=["#0DB4B9","#F2A1A1","#E76D89","#E1621A","#E9422C","#FF0E48","#15D0C5","#FF4EED","#2C57F0","#9A2CF0","#0DB952"];return e[t%e.length]}},{key:"requests",set:function(t){this._requests=t,this.calendar&&this.calendar.updateTodaysDate()},get:function(){return this._requests}},{key:"date",get:function(){return this._date},set:function(t){this._date=t;var e=this.requests.find((function(e){return e.scheduledDate===t.toISOString().substring(0,10)}));e&&this.select.emit(e.id)}}]),e}()).\u0275fac=function(t){return new(t||et)(B.Qb(L.c))},et.\u0275cmp=B.Kb({type:et,selectors:[["customers-requests"]],viewQuery:function(t,e){var n;1&t&&(B.Mc(T.a,!0),B.Mc(T.b,!0)),2&t&&(B.uc(n=B.fc())&&(e.calendar=n.first),B.uc(n=B.fc())&&(e.calendarHeader=n.first))},inputs:{requests:"requests",selected:"selected"},outputs:{monthSelected:"monthSelected",select:"select"},decls:9,vars:4,consts:[[1,"row"],[1,"col-md-4","col-sm-12","mb-2"],[3,"dateClass","selected","selectedChange"],[4,"ngFor","ngForOf"],[1,"col-md-8","col-sm-12"],[3,"request"],[1,"d-flex","mb-2",3,"click"],[1,"calendar-bar"]],template:function(t,e){1&t&&(B.Wb(0,"div",0),B.Wb(1,"div",1),B.Wb(2,"app-kalendario-card"),B.Wb(3,"mat-calendar",2),B.ec("selectedChange",(function(t){return e.date=t})),B.Rb(4,"mat-calendar-header"),B.Vb(),B.Ec(5,tt,5,4,"div",3),B.Vb(),B.Vb(),B.Wb(6,"div",4),B.Wb(7,"app-kalendario-card"),B.Rb(8,"customers-request-card",5),B.Vb(),B.Vb(),B.Vb()),2&t&&(B.Db(3),B.oc("dateClass",e.dateClass())("selected",e.date),B.Db(2),B.oc("ngForOf",e.requests),B.Db(3),B.oc("request",e.selected))},directives:[_.a,T.a,T.b,u.k,Z],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:64px;bottom:0;left:0;right:0}.calendar-bar[_ngcontent-%COMP%]{border-radius:10px;width:4px;margin-right:.5rem}"]}),et),st=[{path:"requests",component:(nt=function(){function t(e,n){r(this,t),this.store=e,this.route=n}return n(t,[{key:"ngOnInit",value:function(){this.store.dispatch(f({date:R.utc().startOf("month")})),this.requests$=this.store.pipe(Object(d.t)(S)),this.selected$=this.store.pipe(Object(d.t)(E));var t=+this.route.snapshot.queryParamMap.get("id");t&&this.store.dispatch(h({id:t}))}},{key:"requestRequests",value:function(t){this.store.dispatch(b({date:t}))}},{key:"selectRequest",value:function(t){this.store.dispatch(O({id:t}))}}]),t}(),nt.\u0275fac=function(t){return new(t||nt)(B.Qb(d.h),B.Qb($.a))},nt.\u0275cmp=B.Kb({type:nt,selectors:[["app-requests-page"]],decls:4,vars:6,consts:[[1,"container","mt-4","mb-4"],[3,"requests","selected","monthSelected","select"]],template:function(t,e){1&t&&(B.Wb(0,"div",0),B.Wb(1,"customers-requests",1),B.ec("monthSelected",(function(t){return e.requestRequests(t)}))("select",(function(t){return e.selectRequest(t)})),B.jc(2,"async"),B.jc(3,"async"),B.Vb(),B.Vb()),2&t&&(B.Db(1),B.oc("requests",B.kc(2,2,e.requests$))("selected",B.kc(3,4,e.selected$)))},directives:[ot],pipes:[u.b],styles:[""],changeDetection:0}),nt),canActivate:[x.a]}],ct=((it=function t(){r(this,t)}).\u0275mod=B.Ob({type:it}),it.\u0275inj=B.Nb({factory:function(t){return new(t||it)},imports:[[$.f.forChild(st)],$.f]}),it),at=((rt=function t(){r(this,t)}).\u0275mod=B.Ob({type:rt}),rt.\u0275inj=B.Nb({factory:function(t){return new(t||rt)},imports:[[u.c,l.a,ct,d.j.forFeature("customers",q),I.c.forFeature([F])]]}),rt)}}])}();