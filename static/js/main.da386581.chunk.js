(this["webpackJsonpsms-to-web-react-app"]=this["webpackJsonpsms-to-web-react-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(57)},34:function(e,t,a){},35:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),r=a.n(l),i=(a(34),a(9)),c=a(10),s=a(12),u=a(11),m=(a(35),a(18)),h=a.n(m),k=a(16),p=a(14),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"timeSince",value:function(e){var t=Math.floor((new Date).getTime()/1e3-e),a=Math.floor(t/31536e3);return a>1?a+"y ago":(a=Math.floor(t/2592e3))>1?a+"m ago":(a=Math.floor(t/86400))>=1?a+"Days ago":(a=Math.floor(t/3600))>=1?a+"Hours ago":(a=Math.floor(t/60))>1?a+"m ago":Math.floor(t)+"s ago"}},{key:"render",value:function(){return o.a.createElement(p.a,{bg:"light",className:"mb-2"},o.a.createElement(p.a.Body,null,o.a.createElement(p.a.Title,null," ",this.props.sms.phone),o.a.createElement(p.a.Text,null,this.props.sms.text),o.a.createElement(p.a.Footer,{className:"text-muted"},this.timeSince(this.props.sms.timeStamp))))}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.smsList.reverse().map((function(e){return o.a.createElement(d,{sms:e})}));return e||null}}]),a}(n.Component),g=a(8),v=a(15),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={smsList:[]},n}return Object(c.a)(a,[{key:"smsListReset",value:function(){this.setState({smsList:[]}),console.log("list reset")}},{key:"onTestButtonClick",value:function(e){var t=this;console.log(e),this.smsListReset(),h.a.get("http://localhost:5000/"+e+"api").then((function(e){t.setState({smsList:e.data})})).catch((function(e){console.log(e)}))}},{key:"onButtonClick",value:function(e){var t=this;this.smsListReset(),h.a.get("https://obscure-lowlands-72494.herokuapp.com/"+e+"api").then((function(e){t.setState({smsList:e.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(v.a,{bg:"dark",variant:"dark"},o.a.createElement(v.a.Brand,{href:"http://almudhan.com.sa/",target:"blank"},o.a.createElement("img",{alt:"Almudhan Group Logo",src:"http://almudhan.com.sa/images/logo.png?v=1",width:"40",height:"40",className:"d-inline-block"})," "," Almudhan Group")),o.a.createElement("main",{className:"App-body"},o.a.createElement(g.a,{value:"ali",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Ali New Code at **06"),o.a.createElement(g.a,{value:"hanady",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Hanady New Code at ***40 "),o.a.createElement(g.a,{disabled:!0,value:"hanan",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Hanan New Code at **** "),o.a.createElement(g.a,{value:"hisham",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Hisham New Code at ***88"),o.a.createElement(g.a,{value:"mofareh",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Mofareh New Code at ***40"),o.a.createElement(g.a,{value:"tahani",variant:"outline-dark",size:"lg",block:!0,onClick:function(t){return e.onButtonClick(t.target.value)}},"Check Tahani New Code at ***36"),o.a.createElement(f,{smsList:this.state.smsList})),o.a.createElement(v.a,{bg:"dark",className:"justify-content-center"},o.a.createElement("footer",{className:"App-footer"},o.a.createElement("p",null,"created by Hisham Aljahbli for Almudhan Group"),o.a.createElement("div",{id:"footer-nav"},o.a.createElement("a",{href:"https://www.linkedin.com/in/haljahbli-softwareeng",target:"blank"}," ",o.a.createElement(k.c,null)),o.a.createElement("a",{href:"https://github.com/hamjahb",target:"blank"},o.a.createElement(k.b,null)),o.a.createElement("a",{href:"mailto:h.aljahbli@gmail.com"},o.a.createElement(k.a,null))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.da386581.chunk.js.map