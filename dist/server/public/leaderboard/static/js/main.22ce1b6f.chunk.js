(this.webpackJsonpleadreboard=this.webpackJsonpleadreboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(2),l=n.n(c),o=n(3),u=n(4),s=n(6),i=n(5),d=n(7),h=(n(13),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={scores:null},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/scores").then((function(e){return e.json()})).then((function(t){e.setState({scores:t})}))}},{key:"render",value:function(){if(null===this.state.scores)return a.a.createElement("h1",null," Preparing leaderboards... ");var e=this.state.scores.map((function(e){return a.a.createElement("div",{id:"leaderboard"},a.a.createElement("p",null,e.nickname+"         "+e.points))}));return a.a.createElement("div",null,a.a.createElement("h1",null,"Leaderboard"),a.a.createElement("div",null,e))}}]),t}(a.a.Component));var m=function(){return a.a.createElement(h,null)};l.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.22ce1b6f.chunk.js.map