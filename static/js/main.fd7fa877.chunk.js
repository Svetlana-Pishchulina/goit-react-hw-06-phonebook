(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={title:"Section_title__2IEG3",section:"Section_section___3wVR"}},16:function(e,t,n){e.exports={listItem:"ContactsListItem_listItem__1Mps9",button:"ContactsListItem_button__oOtsb"}},17:function(e,t,n){e.exports={label:"Filter_label__3VmJA",input:"Filter_input__3x_Ap"}},37:function(e,t){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(3),u=n(2),l=n(18),b=n(10),d=n(20),j=n(4),m=n(19),O=n.n(m),f=(n(37),{saveContactAction:Object(j.a)("saveConntact",(function(e,t){return{payload:{id:O.a.generate(),name:e,number:t}}})),deleteContactAction:Object(j.a)("deleteConntact"),updateFilterAction:Object(j.a)("updateFilter")}),p=Object(j.b)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(b.a)(c,f.saveContactAction,(function(e,t){return[].concat(Object(d.a)(e),[t.payload])})),Object(b.a)(c,f.deleteContactAction,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),c)),h=Object(j.b)("",Object(b.a)({},f.updateFilterAction,(function(e,t){return t.payload}))),x=Object(u.combineReducers)({contactsReduser:p,filterReducer:h}),_=Object(u.combineReducers)({contacts:x}),v=Object(u.createStore)(_,Object(l.composeWithDevTools)()),C=(n(38),n(15)),A=n.n(C),g=n(1),F=function(e){var t=e.title,n=e.children;return Object(g.jsxs)("div",{className:A.a.section,children:[Object(g.jsx)("h2",{className:A.a.title,children:t}),n]})},N=n(11),k=n(5),y=n.n(k),S=function(e){return e.contacts.contactsReduser},w=function(e){return e.contacts.filterReducer},I=function(e){var t=Object(a.useState)(""),n=Object(N.a)(t,2);return[n[0],n[1]]},R=function(){var e=I(),t=Object(N.a)(e,2),n=t[0],c=t[1],a=I(),r=Object(N.a)(a,2),i=r[0],o=r[1],u=Object(s.c)(S),l=Object(s.b)(),b=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":o(a);break;default:return}},d=function(){c(""),o("")};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:y.a.form,onSubmit:function(e){e.preventDefault(),u.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):(l(f.saveContactAction(n,i)),d())},children:[Object(g.jsxs)("label",{className:y.a.label,children:["Name",Object(g.jsx)("input",{className:y.a.input,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b})]}),Object(g.jsxs)("label",{className:y.a.label,children:["Nuber",Object(g.jsx)("input",{className:y.a.input,value:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b})]}),Object(g.jsx)("button",{type:"submit",children:"Add contact"})]})})},L=function(e){var t=e.children;return Object(g.jsx)("ul",{children:t})},z=n(16),D=n.n(z),J=function(){var e=Object(s.c)((function(e){var t=S(e),n=w(e);return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),t=Object(s.b)();return e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(g.jsxs)("li",{className:D.a.listItem,children:[c,":",a,Object(g.jsx)("button",{className:D.a.button,onClick:function(){return function(e){return t(f.deleteContactAction(e))}(n)},children:"Delete"})]},n)}))},M=n(17),B=n.n(M),E=function(){var e=Object(s.c)(w),t=Object(s.b)();return Object(g.jsxs)("label",{className:B.a.label,children:["Find contacts by name",Object(g.jsx)("input",{className:B.a.input,value:e,onChange:function(e){return t(f.updateFilterAction(e.target.value))}})]})};var P=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F,{title:"Phonebook",children:Object(g.jsx)(R,{})}),Object(g.jsxs)(F,{title:"Contacts",children:[Object(g.jsx)(E,{}),Object(g.jsx)(L,{children:Object(g.jsx)(J,{})})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(s.a,{store:v,children:Object(g.jsx)(P,{})})}),document.getElementById("root")),T()},5:function(e,t,n){e.exports={form:"Form_form__ms8YS",label:"Form_label__3LHKV",input:"Form_input__2WF5M"}}},[[40,1,2]]]);
//# sourceMappingURL=main.fd7fa877.chunk.js.map