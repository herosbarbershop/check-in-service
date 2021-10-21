(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c,n=a(1),s=a.n(n),r=a(11),i=a.n(r),l=(a(21),a(2));function o(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function d(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}!function(e){e.DAILY_CHECKINS="_$dailyCheckIns",e.BARBERS="_$barbers",e.SERVICES="_$services",e.VIEW="_$view",e.CHECKIN_MANAGE_ACTION="_$checkInManageAction"}(c||(c={}));a(22);var b=a(0);function j(e){return Object(b.jsx)("div",{className:"container-fluid px-5",children:Object(b.jsxs)("table",{className:"table table-borderless mb-5 fade-in",children:[Object(b.jsx)("thead",{className:"navi-background-color text-light border-light",children:Object(b.jsxs)("tr",{className:"table-font border-bottom ",children:[Object(b.jsx)("th",{scope:"col",children:"Customer"}),Object(b.jsx)("th",{scope:"col",children:"Service"}),Object(b.jsx)("th",{scope:"col",children:"Appointment"}),Object(b.jsx)("th",{scope:"col",children:"Barber"})]})}),Object(b.jsx)("tbody",{children:e.checkInInfos.length?e.checkInInfos.map((function(e,t){return Object(b.jsxs)("tr",{className:"table-font border-bottom rounded table-row-color",children:[Object(b.jsx)("td",{children:e.customer}),Object(b.jsx)("td",{children:e.service}),Object(b.jsx)("td",{children:e.appointmentType}),Object(b.jsx)("td",{children:e.barber})]},t)})):Object(b.jsx)("tr",{className:"table-font border-bottom rounded table-row-color",children:Object(b.jsx)("td",{colSpan:5,children:"No check-ins are currently available."})})})]})})}var u,m,f=a(5);function h(){return O({weekday:"long",year:"numeric",month:"long",day:"numeric"})}function O(e,t){return new Intl.DateTimeFormat("en-US",e).format(null!==t&&void 0!==t?t:new Date)}function v(e){var t="card pointer mb-3 selection-card";return e.selected&&(t="".concat(t," finish-button")),Object(b.jsx)("div",{className:t,onClick:function(){return e.handleChanges(e.name)},children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("h5",{className:"card-title fs-5 fw-bold m-0",children:e.name})})})}function x(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],s=a[1],r=function(t){s(t),e.handleChanges(t)};return e.currentIndex!==e.index?null:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("h5",{className:"fs-2 mb-3 p-2 border-bottom border-2",children:e.title})}),Object(b.jsx)("div",{className:"row",children:e.options.map((function(e,t){return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(v,{name:e,selected:c===e,handleChanges:r})},t)}))})]})})}function p(e){var t=Object(n.useState)([""]),a=Object(l.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(0),j=Object(l.a)(i,2),m=j[0],O=j[1],v=Object(n.useState)((function(){var e,t;return null!==(e=null===(t=o(c.SERVICES))||void 0===t?void 0:t.filter((function(e){return e.active})).map((function(e){return"".concat(e.name," ($").concat(e.price,")")})))&&void 0!==e?e:[]})),p=Object(l.a)(v,1)[0],N=Object(n.useState)((function(){var e;return null!==(e=o(c.BARBERS))&&void 0!==e?e:[]})),g=Object(l.a)(N,1)[0],C=function(e){var t,a=Object(f.a)(s);("string"===typeof e&&e&&(a[m]=e),"object"===typeof e)&&(a[m]=null!==(t=e.target.value)&&void 0!==t?t:"");r(a)},I=["Name","Service","Appointment","Barber"],S=4===s.filter((function(e){return null===e||void 0===e?void 0:e.trim()})).length,y="mt-2 btn btn-lg fs-1 fw-bold w-50 mx-auto";return y="".concat(y,S?" finish-button":" selection-button"),0===p.length||0===g.length?Object(b.jsx)("div",{className:"container fade-in",children:Object(b.jsx)("div",{className:"card border-0 mx-auto my-5 text-center",children:Object(b.jsx)("div",{className:"card-body mb-3 px-0",children:Object(b.jsx)("h1",{className:"card-title fs-3 bg-danger p-3 text-light",children:"You have not added your services and barbers yet. Go to the Manage page and add them."})})})}):Object(b.jsx)("div",{className:"container fade-in",children:Object(b.jsxs)("div",{className:"card border-0 mx-auto my-5 text-center",children:[Object(b.jsxs)("div",{className:"card-body mb-3 px-0",children:[Object(b.jsx)("div",{className:"mb-3",children:s.filter((function(e){return e})).map((function(e,t){return Object(b.jsx)("span",{className:"badge rounded-pill fs-5 m-1 navi-background-color",children:"".concat(I[t],": ").concat(e)},t)}))}),0===m?Object(b.jsx)("input",{onChange:C,value:s[0],className:"check-in-input fs-2 text-center w-100 fade-in",type:"text",name:"search",placeholder:"Enter preferred name",autoFocus:!0,autoComplete:"off"}):null,Object(b.jsx)(x,{index:1,options:p,title:"What service are you getting?",currentIndex:m,handleChanges:C}),Object(b.jsx)(x,{index:2,options:["Walk-in","Booksy","Phone","Other"],title:"Select the appointment.",currentIndex:m,handleChanges:C}),Object(b.jsx)(x,{index:3,options:g.map((function(e){return"".concat(e.firstName," ").concat(e.lastName," (").concat(e.alias,")")})),title:"Who's your hero barber?",currentIndex:m,handleChanges:C})]}),Object(b.jsxs)("div",{className:"btn-group w-50 mx-auto",role:"group","aria-label":"Basic outlined example",children:[Object(b.jsxs)("button",{type:"button",disabled:m<1,onClick:function(){return O(m-1)},className:"selection-button btn btn-lg fs-1 fw-bold",children:[Object(b.jsx)("i",{className:"fa-solid fa-circle-left"})," Back"]}),Object(b.jsxs)("button",{type:"button",disabled:m>2,onClick:function(){return O(m+1)},className:"selection-button btn btn-lg fs-1 fw-bold",children:["Next ",Object(b.jsx)("i",{className:"fa-solid fa-circle-right"})]})]}),Object(b.jsxs)("button",{type:"button",disabled:!S,onClick:function(){var t,a=null!==(t=o(c.DAILY_CHECKINS))&&void 0!==t?t:[],n=h(),r=Object(l.a)(s,4),i=r[0],b=r[1],j=r[2],m=r[3],f={id:Date.now(),status:u.PENDING,customer:i.trim(),service:b,appointmentType:j,barber:m,payment:0},O=a.findIndex((function(e){return e.date===n}));if(O>-1)a[O].checkInInfos.push(f);else{var v={id:Date.now(),date:n,checkInInfos:[f]};a.push(v)}d(c.DAILY_CHECKINS,a),e.setIsCheckingIn(!1)},className:y,children:["Finish ",Object(b.jsx)("i",{className:"fa-solid fa-circle-plus"})]})]})})}!function(e){e.COMPLETED="Completed",e.PENDING="Pending"}(u||(u={})),function(e){e.CHECK_IN="checkin",e.MANAGE="manage"}(m||(m={}));var N=a(12),g=a.n(N),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backGroundColor:"red"}};function I(e){var t,a=Object(n.useState)(null!==(t=o(c.BARBERS))&&void 0!==t?t:[]),s=Object(l.a)(a,1)[0],r=Object(n.useState)(""),i=Object(l.a)(r,2),d=i[0],j=i[1],u=Object(n.useState)(!1),m=Object(l.a)(u,2),f=m[0],h=m[1],O=f?"text-danger fw-bold":"text-danger fw-bold invisible";return Object(b.jsx)("div",{className:"modal fade",id:"authenticateMode",children:Object(b.jsx)("div",{className:"modal-dialog",children:Object(b.jsxs)(g.a,{isOpen:e.isOpen,onRequestClose:function(){return e.setIsModalOpen(!1)},style:C,children:[Object(b.jsxs)("div",{className:"modal-header",children:[Object(b.jsxs)("h5",{className:"modal-title",children:[Object(b.jsx)("i",{className:"fa-solid fa-circle-info"})," Barber code is required to perform this action."]}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.setIsModalOpen(!1)},className:"btn-close","aria-label":"Close"})]}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsx)("input",{onChange:function(t){var a,c,n,r=null!==(a=null===(c=t.target.value)||void 0===c?void 0:c.trim().toUpperCase())&&void 0!==a?a:"",i=null===(n=s.find((function(e){return e.code===r})))||void 0===n?void 0:n.code;j(r),i?(j(""),h(!1),e.authorize()):h(!0)},value:d,className:"check-in-input fs-3 text-center w-100 header-border-bottom",type:"password",name:"search",placeholder:"Enter Code",autoFocus:!0,autoComplete:"off"}),Object(b.jsxs)("span",{className:O,children:[Object(b.jsx)("i",{className:"fa-solid fa-triangle-exclamation"}),"Barber code is not valid!"]})]}),Object(b.jsx)("div",{className:"modal-footer",children:Object(b.jsxs)("button",{type:"button",className:"btn btn-secondary",onClick:function(){return e.setIsModalOpen(!1)},children:[Object(b.jsx)("i",{className:"fa-solid fa-x"})," Close"]})})]})})})}g.a.setAppElement("#root");var S=a(3),y=a(4);function k(e){var t=function(t){return e.handleOnChange(Object(S.a)(Object(S.a)({},e.barber),{},Object(y.a)({},t.target.name,t.target.value)))};return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"mb-3 text-center",children:e.alert.show&&Object(b.jsxs)("div",{id:"barberHelp",className:"".concat(e.alert.color,' "form-text fw-bold fs-4"'),children:[Object(b.jsx)("i",{className:"fa-solid fa-circle-info"})," ",e.alert.message]})})})}),Object(b.jsx)("div",{className:"col-md-6 mx-auto",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"barberFirstName",className:"form-label fw-bold",children:"First Name"}),Object(b.jsx)("input",{onChange:t,name:"firstName",type:"text",className:"form-control",id:"barberFirstName","aria-describedby":"barberfnHelp",value:e.barber.firstName,placeholder:"Enter first name"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"barberLastName",className:"form-label fw-bold",children:"Last Name"}),Object(b.jsx)("input",{onChange:t,name:"lastName",type:"text",className:"form-control",id:"barberLastName","aria-describedby":"barberlnHelp",value:e.barber.lastName,placeholder:"Enter last name"})]}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("h5",{className:"fs-5",children:e.barber.alias?"Alias: ".concat(e.barber.alias):""})}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsxs)("button",{onClick:function(){return e.handleOnChange({firstName:"",lastName:""})},type:"button",className:"btn btn-secondary btn-small fw-bold",children:[Object(b.jsx)("i",{className:"fa-solid fa-xmark"})," Clear fields"]})}),Object(b.jsx)("button",{onClick:function(){return e.handleSubmit()},type:"submit",className:"btn selection-button w-100 fs-5 fw-bold",children:"Submit"})]})})]})}function w(e){return Object(b.jsx)("div",{className:"row",children:e.barbers.length>0?e.barbers.map((function(t,a){return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("div",{className:"card m-1",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title mx-1 navi-font-color",children:[t.firstName," ",t.lastName]}),Object(b.jsxs)("h6",{className:"card-subtitle mb-2 mx-1 text-muted navi-font-color",children:["Alias: ",t.alias]}),Object(b.jsx)("button",{onClick:function(){return function(t){var a,n=(null!==(a=o(c.BARBERS))&&void 0!==a?a:[]).find((function(e){return e.alias===t}));e.setBarber(n),e.setAlert({show:!1,message:""})}(t.alias)},type:"button",className:"btn btn-sm navi-background-color mx-1 w-100",children:"Update"})]})})},t.alias)})):Object(b.jsx)("div",{className:"fs-5",children:"No barber has been added. Click the Add Barber to add new barber information."})})}function E(){var e=Object(n.useState)((function(){return A()})),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)({firstName:"",lastName:""}),i=Object(l.a)(r,2),j=i[0],u=i[1],m=Object(n.useState)({show:!1,message:"",color:""}),h=Object(l.a)(m,2),O=h[0],v=h[1],x=Object(n.useState)(!1),p=Object(l.a)(x,2),N=p[0],g=p[1],C=Object(n.useState)(!1),I=Object(l.a)(C,2),y=I[0],E=I[1];function A(){var e;return null!==(e=o(c.BARBERS))&&void 0!==e?e:[]}return Object(b.jsxs)(b.Fragment,{children:[y&&Object(b.jsxs)("div",{className:"fw-bold fs-5 mb-2 text-info",children:[Object(b.jsx)("i",{className:"fa-solid fa-circle-info"})," Click the Add Barber button to view the edit form."]}),Object(b.jsxs)("button",{onClick:function(){y&&E(!1),g(!N)},className:"btn navi-background-color",type:"button","data-bs-toggle":"collapse","data-bs-target":"#AddBarbersComponent","aria-expanded":"false","aria-controls":"AddBarbersComponent",children:[Object(b.jsx)("i",{className:"fa-solid ".concat(N?"fa-xmark":"fa-plus")})," ",N?"Close Form":"Add Barber"]}),Object(b.jsx)("div",{className:"collapse",id:"AddBarbersComponent",children:Object(b.jsx)("div",{className:"card card-body",children:Object(b.jsx)(k,{setBarbers:s,handleOnChange:function(e){u(e)},handleSubmit:function(){var e=j.firstName,t=j.lastName;return e&&t?j.alias?function(){var e,t=null!==(e=o(c.BARBERS))&&void 0!==e?e:[],a=j.firstName,n=j.lastName,r=j.alias,i=t.map((function(e){return e.alias===r?Object(S.a)(Object(S.a)({},e),{},{firstName:a,lastName:n}):e}));d(c.BARBERS,i),v({show:!0,message:"Barber with name: ".concat(a," ").concat(n," (").concat(j.alias,") has been successfully updated."),color:"text-success"}),u({firstName:"",lastName:""}),s(i)}():void function(){var e,t=null!==(e=o(c.BARBERS))&&void 0!==e?e:[],a=j.firstName,n=j.lastName,r=t.length+1,i="HERO-".concat(r),l=[{firstName:a,lastName:n,alias:i,code:"HERO".concat(r)}].concat(Object(f.a)(t));d(c.BARBERS,l),v({show:!0,message:"".concat(a," ").concat(n," has been successfully added with alias ").concat(i,"."),color:"text-success"}),u({firstName:"",lastName:""}),s(A())}():v({show:!0,message:"First name and last name are required for barbers.",color:"text-danger"})},alert:O,barber:j})})}),Object(b.jsxs)("div",{className:"fs-4 navi-background-color p-2 my-2",children:[Object(b.jsx)("i",{className:"fa-solid fa-user"}),"  Barbers"]}),Object(b.jsx)(w,{barbers:a,setBarber:function(e){N||E(!0),u(e)},setAlert:v})]})}var A,B,D=a(8);function R(e){var t,a=Object(n.useState)(),s=Object(l.a)(a,2),r=s[0],i=s[1],j=Object(n.useState)(),m=Object(l.a)(j,2),f=m[0],h=m[1],O=Object(n.useState)(),v=Object(l.a)(O,2),x=v[0],p=v[1],N=Object(n.useState)((function(){var e;return null!==(e=o(c.BARBERS))&&void 0!==e?e:[]})),g=Object(l.a)(N,1)[0],C=Object(n.useState)((function(){var e,t;return null!==(e=null===(t=o(c.SERVICES))||void 0===t?void 0:t.filter((function(e){return e.active})).map((function(e){return"".concat(e.name," ($").concat(e.price,")")})))&&void 0!==e?e:[]})),I=Object(l.a)(C,1)[0];Object(n.useEffect)((function(){if(e.checkInInfo){var t,a=null!==(t=e.checkInInfo)&&void 0!==t?t:{},c=a.customer,n=a.service,s=a.status,r=a.barber,i=a.appointmentType;p({Customer:c,Service:n,Status:s,Barber:r,Appointment:i})}}),[e.checkInInfo]),Object(n.useEffect)((function(){x&&r&&f&&p(Object(S.a)(Object(S.a)({},x),Object(y.a)({},"".concat(r),f)))}),[f]);var k={Service:I,Appointment:["Walk-in","Booksy","Phone","Other"],Status:[u.COMPLETED,u.PENDING],Barber:g.map((function(e){return"".concat(e.firstName," ").concat(e.lastName," (").concat(e.alias,")")}))};return Object(b.jsxs)("div",{className:"mt-3 fade-in",children:[Object(b.jsx)("h1",{className:"fs-5",children:"Click on the category to show options."}),Object(b.jsx)("div",{className:"mb-3",children:Object.entries(null!==x&&void 0!==x?x:{}).filter((function(e){return Object(l.a)(e,1)[0]})).map((function(e){var t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(b.jsx)("button",{onClick:function(){return i(a)},type:"button",className:"m-1 badge rounded-pill fs-5 navi-background-color",children:"".concat(a,": ").concat(c)},a)}))}),r&&Object(b.jsxs)("div",{className:"mb-3 fade-in",children:[Object(b.jsx)("h5",{className:"fs-5",children:"Click to select new options"}),null===(t=k[r])||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("button",{type:"button",disabled:e===f,onClick:function(){return e!==f&&h(e)},className:"btn btn-sm navi-background-color mx-1",children:e},t)}))]}),Object(b.jsx)("div",{className:"mb-3",children:f&&Object(b.jsx)("button",{type:"button",onClick:function(){var t,a,n=Object(S.a)(Object(S.a)({},e.checkInInfo),{},{service:null===x||void 0===x?void 0:x.Service,status:null===x||void 0===x?void 0:x.Status,barber:null===x||void 0===x?void 0:x.Barber,appointmentType:null===x||void 0===x?void 0:x.Appointment}),s=null!==(t=o(c.DAILY_CHECKINS))&&void 0!==t?t:[],r=Object(D.a)(s);try{for(r.s();!(a=r.n()).done;){var i=a.value;i.checkInInfos=i.checkInInfos.map((function(e){return e.id===n.id?n:e}))}}catch(l){r.e(l)}finally{r.f()}d(c.DAILY_CHECKINS,s),e.setShouldRefresh(Date.now())},className:"btn btn-sm selection-button fs-5 fade-in",children:"Save Changes"})})]})}function T(e){var t,a,c=null!==(t=null===(a=e.dailyCheckIn)||void 0===a?void 0:a.checkInInfos)&&void 0!==t?t:[];return Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"table table-borderless mb-5 fade-in",children:[Object(b.jsx)("thead",{className:"navi-background-color text-light border-light",children:Object(b.jsxs)("tr",{className:"fs-5 border-bottom ",children:[Object(b.jsx)("th",{scope:"col",children:"Customer"}),Object(b.jsx)("th",{scope:"col",children:"Service"}),Object(b.jsx)("th",{scope:"col",children:"Appointment"}),Object(b.jsx)("th",{scope:"col",children:"Barber"}),Object(b.jsx)("th",{scope:"col",children:"Service Status"}),Object(b.jsx)("th",{scope:"col",children:"Edit"}),Object(b.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(b.jsx)("tbody",{children:c.length?c.map((function(t,a){return Object(b.jsxs)("tr",{className:"fw-bold border-bottom rounded table-row-color",children:[Object(b.jsx)("td",{children:t.customer}),Object(b.jsx)("td",{children:t.service}),Object(b.jsx)("td",{children:t.appointmentType}),Object(b.jsx)("td",{children:t.barber}),Object(b.jsx)("td",{children:t.status}),Object(b.jsx)("td",{onClick:function(){return e.handleManageAction({id:t.id,action:B.EDIT})},title:"Click to display edit view.",className:"fs-4 py-0 pointer",children:Object(b.jsx)("i",{className:"fa-solid fa-pen-to-square text-warning text-center"})}),Object(b.jsx)("td",{onClick:function(){return e.handleManageAction({id:t.id,action:B.DELETE})},title:"Click to delete.",className:"fs-4 py-0 pointer",children:Object(b.jsx)("i",{className:"fa-solid fa-trash-can text-danger text-center"})})]},a)})):Object(b.jsx)("tr",{className:"fw-bold border-bottom rounded table-row-color",children:Object(b.jsx)("td",{colSpan:8,children:"No check-in found for the selected date."})})})]})})}function _(e){var t=function(e){return e.toString().length<2?"0"+e:e},a=new Date,s="".concat(a.getFullYear(),"-").concat(t(a.getMonth()+1),"-").concat(t(a.getDate())),r=Object(n.useState)(s),i=Object(l.a)(r,2),j=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(l.a)(m,2),h=f[0],O=f[1],v=Object(n.useState)(),x=Object(l.a)(v,2)[1],p=Object(n.useState)(),N=Object(l.a)(p,2),g=N[0],C=N[1],S=Object(n.useState)(!1),y=Object(l.a)(S,2),k=y[0],w=y[1];Object(n.useEffect)((function(){C(void 0)}),[j]),Object(n.useEffect)((function(){g||O(!1)}),[g]);var E=function(e){return Date.parse(Intl.DateTimeFormat("en-US").format(new Date(e)))},A=function(){var e,t=function(){var e;return{dailyCheckIns:null!==(e=o(c.DAILY_CHECKINS))&&void 0!==e?e:[],manageActionPayload:o(c.CHECKIN_MANAGE_ACTION)}}(),a=t.dailyCheckIns,n=t.manageActionPayload,s=Object(D.a)(a);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.checkInInfos=r.checkInInfos.filter((function(e){return e.id!==(null===n||void 0===n?void 0:n.id)}))}}catch(i){s.e(i)}finally{s.f()}d(c.DAILY_CHECKINS,a)};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"my-2",children:[Object(b.jsx)("div",{className:"fs-4 fw-bold",children:"Select Check-in Date"}),Object(b.jsx)("div",{className:"text-left",children:Object(b.jsx)("input",{onChange:function(e){return u(e.target.value)},className:"m-2 fs-3 fw-bold border-1",type:"date",id:"start",name:"start-date",value:j,min:"2021-01-01",max:"2050-01-01"})})]}),h&&Object(b.jsx)(R,{checkInInfo:g,setShouldRefresh:x}),Object(b.jsx)("div",{className:"mt-4",children:Object(b.jsx)("div",{children:Object(b.jsx)(T,{dailyCheckIn:function(){var e,t=j.replace("-","/");return(null!==(e=o(c.DAILY_CHECKINS))&&void 0!==e?e:[]).find((function(e){return E(e.date)===E(t)}))}(),handleManageAction:function(e){d(c.CHECKIN_MANAGE_ACTION,e),e.action===B.EDIT&&(O(!0),C(function(){var e,t,a=null!==(e=o(c.DAILY_CHECKINS))&&void 0!==e?e:[],n=o(c.CHECKIN_MANAGE_ACTION),s=Object(D.a)(a);try{for(s.s();!(t=s.n()).done;){var r=t.value.checkInInfos.find((function(e){return e.id===(null===n||void 0===n?void 0:n.id)}));if(r)return r}}catch(i){s.e(i)}finally{s.f()}}())),e.action===B.DELETE&&w(!0)}})})}),Object(b.jsx)(I,{isOpen:k,setIsModalOpen:w,authorize:function(){A(),w(!1),x(new Date)}})]})}function F(e){return Object(b.jsx)("div",{className:"row fade-in px-3",children:e.reportData.map((function(e,t){return Object(b.jsxs)("div",{className:"border",children:[Object(b.jsx)("h5",{className:"fs-6 border-bottom my-2",children:e.title}),Object(b.jsxs)("table",{className:"table table-borderless",children:[Object(b.jsx)("thead",{className:"bg-secondary",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"py-0",scope:"col",children:"Report Item"}),Object(b.jsx)("th",{className:"py-0",scope:"col",children:"Count"})]})}),Object(b.jsx)("tbody",{children:e.reportItems.map((function(e,t){var a=e.item,c=e.total;return Object(b.jsxs)("tr",{className:"border-bottom rounded table-row-color",children:[Object(b.jsx)("td",{className:"py-0",children:a}),Object(b.jsx)("td",{className:"py-0 col-2 text-right",children:c})]},t)}))})]})]},t)}))})}function H(){var e,t,a=Object(n.useState)("Select Report View"),s=Object(l.a)(a,2),r=s[0],i=s[1],d=function(e,t){var a;return(null!==(a=o(c.DAILY_CHECKINS))&&void 0!==a?a:[]).reduce((function(e,t){return[].concat(Object(f.a)(e),Object(f.a)(t.checkInInfos))}),[]).filter((function(e){return e.status===u.COMPLETED})).reduce((function(a,c){var n=a.findIndex((function(t){return t.title===c[e]}));if(n>-1){var s=a[n].reportItems.findIndex((function(e){return e.item===c[t]}));s>-1?a[n].reportItems[s].total++:a[n].reportItems.push({item:c[t],total:1})}else a.push({title:c[e],reportItems:[{item:c[t],total:1}]});return a}),[])},j=(e={},Object(y.a)(e,A.barber,"By Barbers"),Object(y.a)(e,A.service,"By Services"),Object(y.a)(e,A.appointmentType,"By Appointment"),e);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"dropdown",children:[Object(b.jsx)("button",{className:"btn navi-background-color dropdown-toggle w-25 mb-2 fs-3",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:null!==(t=j[r])&&void 0!==t?t:r}),Object(b.jsxs)("ul",{className:"dropdown-menu w-25","aria-labelledby":"dropdownMenuButton1",children:[Object(b.jsx)("li",{children:Object(b.jsxs)("span",{onClick:function(){return i(A.barber)},className:"dropdown-item fw-bold",children:[Object(b.jsx)("i",{className:"fa-solid fa-user"})," Barbers"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{onClick:function(){return i(A.service)},className:"dropdown-item fw-bold",children:[Object(b.jsx)("i",{className:"fa-solid fa-scissors"})," Services"]})}),Object(b.jsx)("li",{children:Object(b.jsx)("span",{onClick:function(){return i(A.appointmentType)},className:"dropdown-item fw-bold",children:"Appointment"})})]})]}),Object(b.jsxs)(b.Fragment,{children:[r===A.barber&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fs-4 navi-background-color p-2 mb-2",children:[Object(b.jsx)("i",{className:"fa-solid fa-scissors"})," Services"]}),Object(b.jsx)(F,{reportData:d(A.barber,A.service)}),Object(b.jsx)("div",{className:"fs-4 navi-background-color p-2 my-2",children:"Appointment Types"}),Object(b.jsx)(F,{reportData:d(A.barber,A.appointmentType)})]}),r===A.service&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"fs-4 navi-background-color p-2 mb-2",children:[Object(b.jsx)("i",{className:"fa-solid fa-user"})," Barbers"]}),Object(b.jsx)(F,{reportData:d(A.service,A.barber)}),Object(b.jsx)("div",{className:"fs-4 navi-background-color p-2 my-2",children:"Appointment Types"}),Object(b.jsx)(F,{reportData:d(A.service,A.appointmentType)})]}),r===A.appointmentType&&Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"fs-4 navi-background-color p-2 mb-2",children:"Barbers"}),Object(b.jsx)(F,{reportData:d(A.appointmentType,A.barber)}),Object(b.jsx)("div",{className:"fs-4 navi-background-color p-2 my-2",children:"Services"}),Object(b.jsx)(F,{reportData:d(A.appointmentType,A.service)})]})]})]})}function M(e){var t=function(t){return e.handleOnChange(Object(S.a)(Object(S.a)({},e.service),{},Object(y.a)({},t.target.name,t.target.value)))};return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"mb-3 text-center",children:e.alert.show&&Object(b.jsxs)("div",{id:"serviceHelp",className:"".concat(e.alert.color,' "form-text fw-bold fs-4"'),children:[Object(b.jsx)("i",{className:"fa-solid fa-triangle-exclamation"})," ",e.alert.message]})})})}),Object(b.jsx)("div",{className:"col-md-6 mx-auto",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"service",className:"form-label fw-bold",children:"Service Name"}),Object(b.jsx)("input",{onChange:t,name:"name",type:"text",className:"form-control",id:"service","aria-describedby":"serviceHelp",value:e.service.name,placeholder:"Enter service name"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"price",className:"form-label fw-bold",children:"Price"}),Object(b.jsx)("input",{onChange:t,name:"price",type:"number",min:"0",className:"form-control",id:"price",value:e.service.price})]}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsxs)("h5",{className:"fs-6 fw-bold",children:["Status: ",e.service.active?"Active":"Not Active"]})}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("button",{onClick:function(){return t=!e.service.active,e.handleOnChange(Object(S.a)(Object(S.a)({},e.service),{},{active:t}));var t},type:"button",className:"btn btn-warning fw-bold",children:e.service.active?"Deactive Service":"Activate Service"})}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsxs)("button",{onClick:function(){return e.handleOnChange({id:0,name:"",price:0,active:!1})},type:"button",className:"btn btn-secondary btn-small fw-bold",children:[Object(b.jsx)("i",{className:"fa-solid fa-xmark"})," Clear fields"]})}),Object(b.jsx)("button",{onClick:function(){return e.handleSubmit()},type:"submit",className:"btn selection-button w-100 fs-5 fw-bold",children:"Submit"})]})})]})}function L(e){return Object(b.jsx)("div",{className:"row",children:e.services.map((function(t,a){return Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("div",{className:"card m-1",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title mx-1 navi-font-color",children:t.name}),Object(b.jsxs)("h6",{className:"card-subtitle mb-2 mx-1 text-muted navi-font-color",children:["Price: ","$".concat(t.price)]}),Object(b.jsxs)("h6",{className:"card-subtitle mb-2 mx-1 text-muted navi-font-color",children:["Status: ",t.active?"Active":"Not Active"]}),Object(b.jsx)("button",{onClick:function(){return function(t){var a,n=(null!==(a=o(c.SERVICES))&&void 0!==a?a:[]).find((function(e){return e.id===t}));e.setService(n),e.setAlert({show:!1,message:""})}(t.id)},type:"button",className:"btn btn-sm navi-background-color mx-1 w-100",children:"Update"})]})})},t.id)}))})}function K(e){var t=Object(n.useState)((function(){return function(){var e;return null!==(e=o(c.SERVICES))&&void 0!==e?e:[]}()})),a=Object(l.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)({id:0,name:"",price:0,active:!1}),j=Object(l.a)(i,2),u=j[0],m=j[1],h=Object(n.useState)({show:!1,message:"",color:""}),O=Object(l.a)(h,2),v=O[0],x=O[1],p=Object(n.useState)(!1),N=Object(l.a)(p,2),g=N[0],C=N[1],I=Object(n.useState)(!1),y=Object(l.a)(I,2),k=y[0],w=y[1],E=function(e){return parseFloat(parseFloat(e).toFixed(2))};return Object(b.jsxs)(b.Fragment,{children:[k&&Object(b.jsxs)("div",{className:"fw-bold fs-5 mb-2 text-info",children:[Object(b.jsx)("i",{className:"fa-solid fa-circle-info"})," Click the Add Service button to view the edit form."]}),Object(b.jsxs)("button",{onClick:function(){k&&w(!1),C(!g)},className:"btn navi-background-color",type:"button","data-bs-toggle":"collapse","data-bs-target":"#AddServicesComponent","aria-expanded":"false","aria-controls":"AddServicesComponent",children:[Object(b.jsx)("i",{className:"fa-solid ".concat(g?"fa-xmark":"fa-plus")})," ",g?"Close Form":"Add Service"]}),Object(b.jsx)("div",{className:"collapse",id:"AddServicesComponent",children:Object(b.jsx)("div",{className:"card card-body",children:Object(b.jsx)(M,{setServices:r,handleOnChange:function(e){m(e)},handleSubmit:function(){var e=u.name,t=u.price,a=u.active;return e&&t?u.id?function(e,t,a){var n,s=(null!==(n=o(c.SERVICES))&&void 0!==n?n:[]).map((function(c){return c.id===u.id?Object(S.a)(Object(S.a)({},c),{},{name:e,price:t,active:a}):c})),i=E(t);d(c.SERVICES,s),x({show:!0,message:"Service with name: ".concat(e," and price ").concat(i," has been successfully updated."),color:"text-success"}),m({id:0,name:"",price:0,active:!1}),r(s)}(e,t,a):void function(e,t,a){var n,s=null!==(n=o(c.SERVICES))&&void 0!==n?n:[];if(s.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))return x({show:!0,message:"A service with the same name already exist.",color:"text-danger"});var i=E(t),l=[{id:Date.now(),name:e,price:i,active:a}].concat(Object(f.a)(s));d(c.SERVICES,l),x({show:!0,message:"Service with name: ".concat(e," and price ").concat(i," has been successfully added."),color:"text-success"}),m({id:0,name:"",price:0,active:!1}),r(l)}(e,t,a):x({show:!0,message:"Name and price are required for service.",color:"text-danger"})},alert:v,service:u})})}),Object(b.jsxs)("div",{className:"fs-4 navi-background-color p-2 my-2",children:[Object(b.jsx)("i",{className:"fa-solid fa-scissors"})," Services"]}),Object(b.jsx)(L,{services:s,setService:function(e){g||w(!0),m(e)},setAlert:x})]})}function P(e){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("ul",{className:"nav nav-tabs shadow my-5",id:"myTab",role:"tablist",children:[Object(b.jsx)("li",{className:"nav-item",role:"presentation",children:Object(b.jsxs)("button",{className:"manage-tab nav-link fw-bold fs-5 active",id:"manageCheckIn-tab","data-bs-toggle":"tab","data-bs-target":"#manageCheckIn",type:"button",role:"tab","aria-controls":"manageCheckIn","aria-selected":"true",children:[Object(b.jsx)("i",{className:"fa-solid fa-calendar-check"})," Manage Check-in"]})}),Object(b.jsx)("li",{className:"nav-item",role:"presentation",children:Object(b.jsxs)("button",{className:"manage-tab nav-link fw-bold fs-5",id:"services-tab","data-bs-toggle":"tab","data-bs-target":"#services",type:"button",role:"tab","aria-controls":"services","aria-selected":"false",children:[Object(b.jsx)("i",{className:"fa-solid fa-scissors"})," Services"]})}),Object(b.jsx)("li",{className:"nav-item",role:"presentation",children:Object(b.jsxs)("button",{className:"manage-tab nav-link fw-bold fs-5",id:"barbers-tab","data-bs-toggle":"tab","data-bs-target":"#barbers",type:"button",role:"tab","aria-controls":"barbers","aria-selected":"false",children:[Object(b.jsx)("i",{className:"fa-solid fa-user-plus"})," Barbers"]})}),Object(b.jsx)("li",{className:"nav-item",role:"presentation",children:Object(b.jsxs)("button",{className:"manage-tab nav-link fw-bold fs-5",id:"reports-tab","data-bs-toggle":"tab","data-bs-target":"#reports",type:"button",role:"tab","aria-controls":"reports","aria-selected":"false",children:[Object(b.jsx)("i",{className:"fa-regular fa-calendar-lines"})," Reports"]})})]}),Object(b.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[Object(b.jsx)("div",{className:"tab-pane fade show active",id:"manageCheckIn",role:"tabpanel","aria-labelledby":"manageCheckIn-tab",children:Object(b.jsx)(_,{})}),Object(b.jsx)("div",{className:"tab-pane fade",id:"services",role:"tabpanel","aria-labelledby":"services-tab",children:Object(b.jsx)(K,{})}),Object(b.jsx)("div",{className:"tab-pane fade",id:"barbers",role:"tabpanel","aria-labelledby":"barbers-tab",children:Object(b.jsx)(E,{})}),Object(b.jsx)("div",{className:"tab-pane fade",id:"reports",role:"tabpanel","aria-labelledby":"reports-tab",children:Object(b.jsx)(H,{})})]})]})}!function(e){e.barber="barber",e.appointmentType="appointmentType",e.service="service"}(A||(A={})),function(e){e.EDIT="edit",e.DELETE="delete"}(B||(B={}));var G=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)((function(){return w()})),i=Object(l.a)(r,2),f=i[0],O=i[1],v=Object(n.useState)(E()),x=Object(l.a)(v,2),N=x[0],g=x[1],C=Object(n.useState)(!1),S=Object(l.a)(C,2),y=S[0],k=S[1];function w(){var e,t,a;return null!==(t=null===(a=(null!==(e=o(c.DAILY_CHECKINS))&&void 0!==e?e:[]).find((function(e){return e.date===h()})))||void 0===a?void 0:a.checkInInfos.filter((function(e){return e.status===u.PENDING})))&&void 0!==t?t:[]}function E(){var e;return null!==(e=o(c.VIEW))&&void 0!==e?e:m.CHECK_IN}Object(n.useEffect)((function(){O(w())}),[a,N]);var A=function(e){d(c.VIEW,e),g(E())},B="Check-in",D=Object(b.jsx)("i",{className:"fa-solid fa-calendar-check"});a&&(B="Cancel Check-in",D=Object(b.jsx)("i",{className:"fa-solid fa-solid fa-x"}));var R=function(){A(m.MANAGE),k(!1)};return Object(b.jsxs)("div",{className:"App mb-5",children:[Object(b.jsx)("nav",{className:"navbar navbar-dark navi-background-color nav-border-bottom",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("span",{className:"navbar-brand mb-0 fs-4 fw-bold border rounded-3 px-2 border-3 text-danger",children:"Hero's Barbershop"}),N===m.CHECK_IN?Object(b.jsxs)("span",{className:"navbar-brand mb-0 h1 btn mr-auto border-bottom border-3",onClick:function(){o(c.BARBERS)?k(!0):R()},children:[Object(b.jsx)("i",{className:"fa-solid fa-pen-to-square"})," Manage"]}):Object(b.jsxs)("span",{className:"navbar-brand mb-0 h1 btn mr-auto border-bottom border-3",onClick:function(){return A(m.CHECK_IN)},children:[Object(b.jsx)("i",{className:"fa-solid fa-calendar-check"})," Check-in"]})]})}),N===m.CHECK_IN&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"App-header header-border-bottom mb-3",children:Object(b.jsxs)("button",{onClick:function(){return s(!a)},className:"btn btn-lg navi-background-color text-light py-3 px-5 fs-1 fw-bold fade-in",children:[D," ",B]})}),Object(b.jsxs)("div",{children:[a&&Object(b.jsx)(p,{setIsCheckingIn:s}),!a&&Object(b.jsx)(j,{checkInInfos:f})]})]}),N===m.MANAGE&&Object(b.jsx)(P,{}),Object(b.jsx)(I,{isOpen:y,setIsModalOpen:k,authorize:R})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),V()}},[[35,1,2]]]);
//# sourceMappingURL=main.2f58013a.chunk.js.map