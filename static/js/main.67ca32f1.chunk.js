(this["webpackJsonphappy-student"]=this["webpackJsonphappy-student"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),u=(n(19),n(20),n(2)),l=n(3),i=n.n(l);var s=function(){var e=Object(a.useState)("goo"),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("goop"),l=Object(u.a)(r,2),s=l[0],m=l[1],p=Object(a.useState)(""),f=Object(u.a)(p,2),h=f[0],E=f[1];return c.a.createElement("div",{className:"form-container"},c.a.createElement("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),i.a.post("http://54.169.208.124:9000/api/gettoken",{username:n,password:s}).then((function(e){E(e.data.data.token)})).catch((function(e){console.log(e),E("")}))}},"UserName :",c.a.createElement("input",{type:"text",value:n,onChange:function(e){return o(e.target.value)}}),"Password :",c.a.createElement("input",{type:"text",value:s,onChange:function(e){return m(e.target.value)}}),c.a.createElement("button",{name:"submitButton",type:"submit"},"Submit"),c.a.createElement("button",{onClick:function(){i.a.post("http://54.169.208.124:9000/api/getall",{token:h}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"getAll")),c.a.createElement("h1",null,h))};var m=function(){return c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",null,"Testing"))};var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null),c.a.createElement(s,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.67ca32f1.chunk.js.map