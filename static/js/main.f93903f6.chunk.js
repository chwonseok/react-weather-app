(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{32:function(n,e,t){},53:function(n,e,t){"use strict";t.r(e);var i,a,o,s,c,r,d,p,l,u,x,j,b,h=t(1),g=t.n(h),v=t(22),f=t.n(v),O=(t(32),t(9)),m=t.n(O),w=t(23),y=t(11),z=t(2),k=t(24),C=t.n(k),S=t(3),W=t(0),F=S.a.img(i||(i=Object(z.a)(["\n  margin: 30px auto;\n  width: 150px;\n  height: 150px;\n"]))),M=S.a.h2(a||(a=Object(z.a)(["\n  margin: 10px auto;\n  font-size: 20px;\n  font-weight: 600;\n"]))),D=S.a.form(o||(o=Object(z.a)(["\n  display: flex;\n  margin: 20px auto;\n\n  border: 1px solid #035956;\n\n  & input {\n    outline: none;\n    border: 1px solid #035956;\n    border-right: none;\n\n    padding: 5px;\n\n    font-size: 18px;\n    font-weight: 500;\n  }\n\n  & button {\n    background: #fff;\n    color: #035956;\n\n    border: 1px solid #035956;\n    border-left: none;\n    padding: 5px;\n\n    font-size: 18px;\n    font-weight: 500;\n  }\n\n  & button:hover {\n    cursor: pointer;\n    background: #035956;\n    color: #fff;\n  }\n"])));function H(n){var e=n.setCity,t=n.fetchWeather;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(F,{src:"/icons/perfect-day.svg"}),Object(W.jsx)(M,{children:"Find Weather of Your City"}),Object(W.jsxs)(D,{onSubmit:t,children:[Object(W.jsx)("input",{onChange:function(n){return e(n.target.value)},type:"text",placeholder:"English Name of City"}),Object(W.jsx)("button",{type:"submit",children:"search"})]})]})}var P,E,J={Sunrise:"/icons/temp.svg",Sunset:"/icons/temp.svg",Humidity:"/icons/humidity.svg",Wind:"/icons/wind.svg",Pressure:"/icons/pressure.svg"},q={"01d":"/icons/sunny.svg","01n":"/icons/night.svg","02d":"/icons/day.svg","02n":"/icons/cloudy-night.svg","03d":"/icons/cloudy.svg","03n":"/icons/cloudy.svg","04d":"/icons/perfect-day.svg","04n":"/icons/cloudy-night.svg","09d":"/icons/rain.svg","09n":"/icons/rain-night.svg","10d":"/icons/rain.svg","10n":"/icons/rain-night.svg","11d":"/icons/storm.svg","11n":"/icons/storm.svg"},B=S.a.div(s||(s=Object(z.a)(["\n  width: 100%;\n  margin: 30px auto;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),I=S.a.span(c||(c=Object(z.a)(["\n  margin: 10px auto;\n  font-size: 20px;\n\n  & span {\n    font-size: 30px;\n  }\n"]))),N=S.a.img(r||(r=Object(z.a)(["\n  margin: 10px auto;\n  width: 100px;\n  height: 100px;\n"]))),R=S.a.p(d||(d=Object(z.a)(["\n  font-size: 30px;\n  font-weight: 600;\n"]))),Y=S.a.div(p||(p=Object(z.a)(["\n  width: 90%;\n  margin: 20px 25px 10px;\n\n  font-size: 15px;\n  font-weight: 600;\n"]))),A=S.a.div(l||(l=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),G=S.a.div(u||(u=Object(z.a)(["\n  display: flex;\n  margin: 5px 10px;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),K=S.a.img(x||(x=Object(z.a)(["\n  width: 35px;\n  height: 35px;\n"]))),L=S.a.p(j||(j=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 600;\n  margin: 15px;\n  & span {\n    font-size: 12px;\n    font-weight: 400;\n  }\n"]))),Q=S.a.button(b||(b=Object(z.a)(["\n  margin-top: 15px;\n\n  border: none;\n  color: #fff;\n  background: #035956;\n\n  font-size: 20px;\n  padding: 5px 15px;\n  border-radius: 5px;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"])));function T(n){var e=n.name,t=n.value;return Object(W.jsxs)(G,{children:[Object(W.jsx)(K,{src:J[e]}),Object(W.jsxs)(L,{children:[Object(W.jsx)("span",{children:e}),t]})]})}function U(n){var e,t,i,a,o,s,c,r,d=n.data,p=null===d||void 0===d||null===(e=d.weather[0])||void 0===e||null===(t=e.icon)||void 0===t?void 0:t.includes("d");return console.log(d),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(B,{children:[Object(W.jsxs)(I,{children:[Object(W.jsxs)("span",{children:["".concat(Math.floor((null===d||void 0===d||null===(i=d.main)||void 0===i?void 0:i.temp)-273),"\xb0C")," "]})," ",null===d||void 0===d?void 0:d.weather[0].description]}),Object(W.jsx)(N,{src:q[d.weather[0].icon]})]}),Object(W.jsxs)(R,{children:[null===d||void 0===d?void 0:d.name,", ",null===d||void 0===d||null===(a=d.sys)||void 0===a?void 0:a.country]}),Object(W.jsx)(Y,{children:"weather info"}),Object(W.jsxs)(A,{children:[Object(W.jsx)(T,{name:p?"Sunset":"Sunrise",value:(r=p?d.sys.sunset:d.sys.sunrise,"".concat(new Date(1e3*r).getHours()," : ").concat(new Date(1e3*r).getMinutes()))}),Object(W.jsx)(T,{name:"Humidity",value:null===d||void 0===d||null===(o=d.main)||void 0===o?void 0:o.humidity}),Object(W.jsx)(T,{name:"Wind",value:null===d||void 0===d||null===(s=d.wind)||void 0===s?void 0:s.speed}),Object(W.jsx)(T,{name:"Pressure",value:null===d||void 0===d||null===(c=d.main)||void 0===c?void 0:c.pressure})]}),Object(W.jsx)(Q,{type:"button",onClick:function(){return window.location.reload()},children:"Restart"})]})}var V=S.a.div(P||(P=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n\n  width: 375px; // for both PC and Mobile\n  background: #fff;\n  padding: 15px 5px;\n  border-radius: 5px;\n\n  box-shadow: 0 3px 5px 0 #777;\n"]))),X=S.a.div(E||(E=Object(z.a)(["\n  color: #000;\n\n  font-size: 35px;\n  font-weight: 700;\n"])));var Z=function(){var n=Object(h.useState)(""),e=Object(y.a)(n,2),t=e[0],i=e[1],a=Object(h.useState)(),o=Object(y.a)(a,2),s=o[0],c=o[1],r=function(){var n=Object(w.a)(m.a.mark((function n(e){var i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,C.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("01aedb80acda9babf7d17c8f70b8e5de"));case 3:i=n.sent,c(i.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(W.jsxs)(V,{children:[Object(W.jsx)(X,{children:"Weather Finder"}),s?Object(W.jsx)(U,{data:s}):Object(W.jsx)(H,{setCity:i,fetchWeather:r})]})};f.a.render(Object(W.jsx)(g.a.StrictMode,{children:Object(W.jsx)(Z,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.f93903f6.chunk.js.map