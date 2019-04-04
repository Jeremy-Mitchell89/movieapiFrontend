(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(32),a(6)),o=a(7),m=a(9),u=a(8),s=a(10),d=(a(33),a(58)),v=a(24),h=a(61),p=a(60),E=a(59),g=a(25),f=a(11),b=a.n(f),y=function(e){var t=Object(n.useState)({}),a=Object(g.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){b.a.get("https://api.themoviedb.org/3/movie/".concat(e.match.params.id,"?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US")).then(function(e){c(e.data)})},[]),r.a.createElement("div",{className:"movie-details-container"},console.log(l),r.a.createElement("h1",{className:"page-heading"},l.title),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l.poster_path),alt:"Poster"}),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,l.tagline)),r.a.createElement("label",null,"Release Date"),r.a.createElement("p",null,l.release_date),r.a.createElement("label",null,"Summary"),r.a.createElement("p",null,l.overview),r.a.createElement("p",null,r.a.createElement("b",null,"Rating:")," ",l.vote_average,"/10 (",l.vote_count," Votes)"),r.a.createElement("p",null,r.a.createElement("b",null,"Runtime:")," ",l.runtime," Minutes"),r.a.createElement("p",null)),r.a.createElement("div",{className:"details-link"},r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(l.imdb_id)},"imdb"),r.a.createElement("a",{href:"".concat(l.homepage)},"Visit Movie Homepage")),r.a.createElement("div",{className:"details-link"}))},O=a(57),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hover:!1},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movie,a=t.title,n=t.poster_path,l=t.release_date,c=t.id,i=t.vote_average;return r.a.createElement("div",{className:"movie-item",onMouseOver:function(t){e.setState({hover:!0})},onMouseLeave:function(t){e.setState({hover:!1})}},r.a.createElement("div",{className:this.state.hover?"movie-info":"movie-info-hidden"},r.a.createElement("div",{className:"movie-title "},a,r.a.createElement("div",null,"Release: ",l),r.a.createElement("div",null,"Rating: ",i,"/10"),r.a.createElement(O.a,{to:"/movie/".concat(c)},"View Movie Details")),r.a.createElement("div",null)),r.a.createElement("img",{className:"movie-img",src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"movie poster"}))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=72ee3d3825c6b00b953e0fd471e755f2").then(function(t){e.setState({data:t.data.results})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"page-heading"},"Trending Movies"),r.a.createElement("div",{className:"movie-carousel"},this.state.data.map(function(e,t){return r.a.createElement(j,{key:t,index:t,movie:e})})))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&page=1").then(function(t){return e.setState({data:t.data.results})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"page-heading"},"Now Playing"),r.a.createElement("div",{className:"movie-carousel"},this.state.data.map(function(e,t){return r.a.createElement(j,{key:t,index:t,movie:e})})))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&page=1&region=US").then(function(t){e.setState({data:t.data.results})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"page-heading"},"Coming Soon"),r.a.createElement("div",{className:"movie-carousel"},this.state.data.map(function(e,t){return r.a.createElement(j,{key:t,index:t,movie:e})})))}}]),t}(r.a.Component),S=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"navigation"},r.a.createElement("div",{className:"nav-segment"},r.a.createElement("h3",{id:"title"},"Flix!")),r.a.createElement("div",{className:"nav-segment"},r.a.createElement(O.a,{className:"nav-item",to:"/nowplaying"},"Now Playing"),r.a.createElement(O.a,{className:"nav-item",to:"/comingsoon"},"Coming Soon"),r.a.createElement(O.a,{className:"nav-item",to:"/trending"},"Trending"),r.a.createElement(O.a,{className:"nav-item",to:"/search"},"Search"))))},_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",data:{data:{results:[]}}},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.data.data.results.map(function(e){return r.a.createElement(j,{movie:e})});return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),b.a.get("https://api.themoviedb.org/3/search/movie?api_key=72ee3d3825c6b00b953e0fd471e755f2&language=en-US&query=".concat(e.state.search,"&page=1&include_adult=true&region=US")).then(function(t){console.log(t),e.setState({data:t})})}},r.a.createElement("input",{value:this.state.search,type:"text",placeholder:"Search Movie Title",onChange:function(t){e.setState({search:t.target.value})}}),r.a.createElement("button",{type:"submit"},"Search")),t)}}]),t}(r.a.Component),M=function(e){return r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return Object(v.a)({},e),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(k,{test:"test"}))}}),r.a.createElement(p.a,{path:"/movie/:id",render:function(e){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(y,e))}}),r.a.createElement(p.a,{path:"/nowplaying",render:function(e){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(k,null))}}),r.a.createElement(p.a,{path:"/comingsoon",render:function(e){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(N,null))}}),r.a.createElement(p.a,{path:"/trending",render:function(e){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(w,null))}}),r.a.createElement(p.a,{path:"/search",render:function(e){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(_,null))}}),r.a.createElement(E.a,{to:"/search",component:w}))},C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{id:"page"},r.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.deb78ed6.chunk.js.map