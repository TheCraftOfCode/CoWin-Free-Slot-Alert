(this.webpackJsonpvaccine=this.webpackJsonpvaccine||[]).push([[0],{22:function(e,t,n){},4:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(15),i=n.n(a),r=(n(22),n(6)),o=n.n(r),l=n(16),d=n(3),j=n(17),u=n.n(j),h=(n(4),n(0));var b=function(e){return Object(h.jsxs)("form",{className:"search",children:[Object(h.jsx)("input",{type:"number",placeholder:"Enter Pin Code",onChange:e.handlePin,value:e.pin}),e.isSearching?Object(h.jsx)("button",{type:"submit",children:"Stop Searching"}):Object(h.jsx)("button",{type:"submit",onClick:e.handleClick,children:"Search Free Slots"})]})};var p=function(e){return Object(h.jsxs)("div",{className:"hospital",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Hospital: \u2002"}),e.each.name]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Date:\u2002"}),e.each.date]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Age:\u2002"}),e.each.age,"+"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Dose 1:\u2002"}),e.each.dose1," slots"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"Dose 2:\u2002"}),e.each.dose2," slots"]})]})},O=n.p+"static/media/beep.d8d253fb.mp3";var v=function(e){var t=[],n=Object(c.useState)(),s=Object(d.a)(n,2),a=s[0],i=s[1],r=new Audio(O);return r.volume=.05,Object(c.useEffect)((function(){t=[];for(var n=0;n<e.centers.length;n++)for(var c=0;c<e.centers[n].sessions.length;c++)e.centers[n].sessions[c].available_capacity>0&&t.push({name:e.centers[n].name,date:e.centers[n].sessions[c].date,age:e.centers[n].sessions[c].min_age_limit,dose1:e.centers[n].sessions[c].available_capacity_dose1,dose2:e.centers[n].sessions[c].available_capacity_dose2});t&&(i(t.map((function(e){return Object(h.jsx)(p,{each:e})}))),r.play())}),[e.centers]),Object(h.jsx)("div",{className:"slot",children:a||null})};var x=function(){Object(c.useEffect)((function(){var e=new Date;f("".concat(e.getDate(),"-").concat(e.getMonth()<9?0:null).concat(e.getMonth()+1,"-").concat(e.getFullYear()))}),[]);var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(),i=Object(d.a)(a,2),r=i[0],j=i[1],p=Object(c.useState)(),O=Object(d.a)(p,2),x=O[0],f=O[1],g=Object(c.useState)(!1),m=Object(d.a)(g,2),S=m[0],w=m[1],y=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),w(!0);case 2:return e.next=5,u.a.get("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?","pincode=").concat(n,"&date=").concat(x));case 5:if(c=e.sent,j(c.data.centers),0===c.data.centers.length){e.next=12;break}return w(!1),e.abrupt("return");case 12:return e.next=14,y(1e4);case 14:e.next=2;break;case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{handlePin:function(e){s(e.target.value)},handleClick:k,pin:n,isSearching:S}),Object(h.jsx)("div",{children:"How to use this ?"}),Object(h.jsx)("div",{children:"Enter your pincode, hit search and carry on with your work. The app will keep seaching and when it finds a slot, it will alert you with a beep"}),Object(h.jsx)("br",{}),r?r.length>0?Object(h.jsx)(v,{centers:r}):Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("div",{class:"loader"}),Object(h.jsx)("h1",{children:"No Slots Yet... Searching"})]}):null]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.7bce56c2.chunk.js.map