(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),d=a(13),p=(a(36),a(37),a(12)),f=a(28),h=a.n(f),b="http://localhost:8000/";b="/";var v=function(){return h.a.create({baseURL:b,headers:{authorization:localStorage.token}})},E=a(8),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).axios=v(),a.state={todos:[]},a.componentDidMount=function(){a.get_todos()},a._signout=function(e){e.preventDefault(),localStorage.removeItem("token"),a.props.history.push("/login/")},a.get_todos=function(){a.axios("todo/").then(function(e){a.setState(Object(p.a)({},a.state,{todos:e.data}))})},a._done=function(e,t,n){a.axios.post("completed/".concat(t,"/"),{completed:n}).then(function(e){a.get_todos()})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todos.map(function(t,a){return r.a.createElement("div",{key:a,className:"todo d-flex mt-2 align-items-center ".concat(t.completed?"done":"")},r.a.createElement("div",null,a+1),r.a.createElement("div",{className:"mx-4 flex-grow-1"},r.a.createElement("div",null,r.a.createElement(E.b,{to:"/view/".concat(t.id,"/")},t.task)),r.a.createElement("div",{className:"text-black-50"},t.description.slice(0,20))),r.a.createElement("div",{className:"btns"},t.completed?(n=t.id,r.a.createElement("button",{onClick:function(t){return e._done(t,n,!1)},className:"btn btn-sm btn-danger mr-2 mt-3"},r.a.createElement("i",{className:"fa fa-times"}))):function(t){return r.a.createElement("button",{onClick:function(a){return e._done(a,t,!0)},className:"btn btn-sm btn-success mr-2 mt-3"},r.a.createElement("i",{className:"fa fa-check"}))}(t.id)));var n});return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("h3",null,"Tasks Schedule:"),r.a.createElement("button",{onClick:this._signout,className:"btn btn-sm mb-4 mr-3 btn-danger"},r.a.createElement("i",{className:"fa fa-power-off"}))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"d-flex  justify-content-between align-items-center"},r.a.createElement("div",null,r.a.createElement("span",null,"Total tasks: "),this.state.todos.length),r.a.createElement("button",{onClick:function(){return e.props.history.push("/add/")},className:"btn btn-sm btn-warning"},r.a.createElement("span",null,"Add "),r.a.createElement("i",{className:"fa fa-plus"})))),r.a.createElement("div",{className:"mt-4"},t))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).axios=v(),a.state={},a.add_task=function(e){e.preventDefault(),console.log(a.date.value,a.time.value);var t={task:a.task.value,description:a.des.value,start:"".concat(a.date.value," ").concat(a.time.value)},n=a.id?"/todo/".concat(a.id,"/"):"/todo/";a.axios.post(n,t).then(function(e){a.props.history.push("/list/")})},a.componentDidMount=function(){if(a.id=a.props.match.params.id,!a.id){var e=(new Date).toISOString();return a.date.value=e.slice(0,10),void(a.time.value=e.slice(11,16))}a.axios.get("/todo/".concat(a.id,"/")).then(function(e){a.setState(Object(p.a)({},a.state,{id:e.data.id})),e=e.data,a.task.value=e.task,a.des.value=e.description,a.date.value=e.start.slice(0,10),a.time.value=e.start.slice(11,16)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn btn-sm mb-4 mr-3 btn-warning"},r.a.createElement("i",{className:"fa fa-arrow-left"})),r.a.createElement("h3",null,this.state.id?"Edit Task ".concat(this.state.id):"Add new Task"),r.a.createElement("form",{className:"mt-4"},r.a.createElement("input",{type:"text",ref:function(t){return e.task=t},placeholder:"Taskname",className:"mt-2 form-control text-center"}),r.a.createElement("textarea",{type:"text",rows:3,ref:function(t){return e.des=t},placeholder:"Description",className:"mt-2 form-control text-center"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"date",ref:function(t){return e.date=t},className:"mt-2 form-control text-center"})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"time",ref:function(t){return e.time=t},className:"mt-2 form-control text-center"}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:this.add_task,className:"btn btn-sm btn-warning mt-3"},"Submit"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).axios=v(),a.state={},a.componentDidMount=function(){a.id=a.props.match.params.id,a.axios.get("/todo/".concat(a.id)).then(function(e){a.setState(Object(p.a)({},a.state,e.data))})},a._delete=function(e){e.preventDefault(),a.axios.delete("/todo/".concat(a.id)).then(function(e){a.props.history.goBack()})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.start||"";return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn btn-sm mb-4 mr-3 btn-warning"},r.a.createElement("i",{className:"fa fa-arrow-left"})),r.a.createElement("h3",null,"Task ",this.state.id),r.a.createElement("div",{className:"mt-4"},r.a.createElement("div",{className:"font-weight-bold"},r.a.createElement("span",null,"Task: "),this.state.task),r.a.createElement("div",null,r.a.createElement("span",null,"Description: "),this.state.description),r.a.createElement("div",null,r.a.createElement("span",null,"Date: "),t.slice(0,10)),r.a.createElement("div",null,r.a.createElement("span",null,"Time: "),t.slice(11,16))),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("button",{onClick:function(){return e.props.history.push("/edit/".concat(e.id,"/"))},className:"btn btn-sm mr-3 btn-primary"},r.a.createElement("i",{className:"fa fa-pen"})," Edit"),r.a.createElement("button",{onClick:this._delete,className:"btn btn-sm btn-danger"},r.a.createElement("i",{className:"fa fa-trash"})," Delete")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).axios=v(),a.state={error:!1},a._login=function(e){e.preventDefault();var t={username:a.username.value,password:a.password.value};a.setState(Object(p.a)({},a.state,{error:!1})),a.axios.post("login/",t).then(function(e){var t=e.data.token;localStorage.token="token ".concat(t),a.props.history.push("/list/")}).catch(function(e){a.setState(Object(p.a)({},a.state,{error:!0}))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Login"),r.a.createElement("div",{className:"mt-4"},r.a.createElement("form",null,this.state.error?r.a.createElement("div",{className:"text-danger my-2"},"Invalid Credentials"):"",r.a.createElement("input",{type:"text",ref:function(t){return e.username=t},placeholder:"username",className:"mt-2 form-control text-center"}),r.a.createElement("input",{type:"password",ref:function(t){return e.password=t},placeholder:"password",className:"mt-2 form-control text-center"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:this._login,className:"btn btn-sm btn-warning mt-3"},"Login"))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",null,"New user? "),r.a.createElement(E.b,{to:"/signup/"},"Singup"))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).axios=v(),a._signup=function(e){e.preventDefault();var t={username:a.username.value,password:a.password.value,email:a.email.value};console.log(t),a.axios.post("signup/",t).then(function(e){console.log(e.data),a.props.history.push("/login/")})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Signup"),r.a.createElement("div",{className:"mt-4"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",ref:function(t){return e.username=t},placeholder:"username",className:"mt-2 form-control text-center"}),r.a.createElement("input",{type:"password",ref:function(t){return e.password=t},placeholder:"password",className:"mt-2 form-control text-center"}),r.a.createElement("input",{type:"email",ref:function(t){return e.email=t},placeholder:"email",className:"mt-2 form-control text-center"}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:this._signup,className:"btn btn-sm btn-warning mt-3"},"Login"))),r.a.createElement("div",{className:"mt-3"},r.a.createElement("span",null,"Already have an account? "),r.a.createElement(E.b,{to:"/login/"},"Login"))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){localStorage.token||a.props.history.push("/login/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),t}(n.Component),O=Object(d.e)(j),x=function(){return r.a.createElement(O,null,r.a.createElement(d.a,{path:"/view/:id",component:k}),r.a.createElement(d.a,{path:"/edit/:id",component:N}),r.a.createElement(d.a,{path:"/add/",component:N}),r.a.createElement(d.a,{path:"/list/",component:g}))},C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App shadow p-5"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/signup/",component:y}),r.a.createElement(d.a,{path:"/login/",component:w}),r.a.createElement(d.a,{path:"/",component:x})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.605f8092.chunk.js.map