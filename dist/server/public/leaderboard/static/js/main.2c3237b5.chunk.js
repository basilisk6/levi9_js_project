(this.webpackJsonpleadreboard=this.webpackJsonpleadreboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=n(3),s=n(4),u=n(6),i=n(5),d=n(7),h=(n(13),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={scores:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/scores").then((function(e){return e.json()})).then((function(t){e.setState({scores:t})}))}},{key:"render",value:function(){if(null===this.state.scores)return r.a.createElement("h1",null," Preparing leaderboards... ");var e=this.state.scores.map((function(e){return r.a.createElement("div",{id:"leaderboard"},r.a.createElement("span",{id:"text"},e.nickname," &nbsp &nbsp"),r.a.createElement("span",null,e.points))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Leaderboard"),r.a.createElement("div",null,e))}}]),t}(r.a.Component));var p=function(){return r.a.createElement(h,null)};l.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2c3237b5.chunk.js.map