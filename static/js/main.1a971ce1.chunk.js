(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{41:function(e,a,t){e.exports=t(98)},46:function(e,a,t){},48:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),o=t.n(l),i=(t(46),t(4)),c=t(5),s=t(8),m=t(6),d=t(9),u=(t(47),t(48),t(30)),h=t.n(u),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={width:"0px",height:"0px"},t.updateWindowDimensions=function(){t.setState({width:"".concat(window.innerWidth,"px"),height:"".concat(window.innerHeight,"px")})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this.state,a=e.width,t=e.height;return console.log(a,t),r.a.createElement(h.a,Object.assign({},this.state,{params:{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.4,random:!0,anim:{enable:!0,speed:1.5,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},move:{enable:!0,speed:1.6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0},onclick:{enable:!1},resize:!0}},retina_detect:!0}}))}}]),a}(n.Component),g=t(100).a.Search,E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{placeholder:"Google Search",onSearch:function(e){return window.open("https://www.google.com/search?q=".concat(e),"_blank")},style:{position:"absolute",left:"35%",width:"30%",marginTop:"3.5%",textAlign:"center"},enterButton:!0,autoFocus:!0}))}}]),a}(n.Component),f={root:{fontFamily:"sans-serif",textAlign:"center",background:"#222",display:"flex",zIndex:"0",position:"absolute",width:"100vw",height:"100vh"}},b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).renderWelcomeMsg=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,a=e.getHours(),t=12,n=17;return a>=t&&a<=n?"afternoon":a>=n?"evening":"morning"},t.state={date:new Date,dayPortion:t.renderWelcomeMsg()},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"clockUpdate",value:function(){var e=this;setInterval((function(){e.setState({date:new Date,dayPortion:e.renderWelcomeMsg()})}),1e3)}},{key:"render",value:function(){var e=this.state.date;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:f.root},r.a.createElement(p,null)),r.a.createElement("div",{className:"welcomeHeader"},r.a.createElement("div",{className:"welcomeTime"},"Good ",this.state.dayPortion,", Matthias."),r.a.createElement("div",{className:"dateLabel"},e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})," - ",e.toDateString())),r.a.createElement("div",{className:"linksParentContainer"},r.a.createElement("div",{className:"work linkContainer"},r.a.createElement("div",{className:"groupHeader workHeader"},r.a.createElement("div",{className:"headerText orangeHeader"},"Work."),r.a.createElement("hr",{className:"orangeLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://keep.google.com/u/0/",target:"_blank",rel:"noopener noreferrer"},"Google Keep")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://classroom.google.com/u/1/",target:"_blank",rel:"noopener noreferrer"},"Google Classroom")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.mysdpbc.org/",target:"_blank",rel:"noopener noreferrer"},"School Portal")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://calendar.google.com/calendar/r",target:"_blank",rel:"noopener noreferrer"},"Calendar")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://my.ucf.edu/psp/IHPROD/EMPLOYEE/EMPL/h/?tab=DEFAULT&cmd=login",target:"_blank",rel:"noopener noreferrer"},"UCF Portal")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.outlook.com/knights.ucf.edu",target:"_blank",rel:"noopener noreferrer"},"UCF Email")))),r.a.createElement("div",{className:"collegeApps linkContainer"},r.a.createElement("div",{className:"groupHeader collegeAppsHeader"},r.a.createElement("div",{className:"headerText blueHeader"},"Games."),r.a.createElement("hr",{className:"blueLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"steam://rungameid/359550",target:"_blank",rel:"noopener noreferrer"},"Rainbow Six")),r.a.createElement("li",null,r.a.createElement("a",{href:"steam://rungameid/252950",target:"_blank",rel:"noopener noreferrer"},"Rocket League")),r.a.createElement("li",null,r.a.createElement("a",{href:"uplay://launch/4932/0",target:"_blank",rel:"noopener noreferrer"},"Division 2")))),r.a.createElement("div",{className:"messaging linkContainer"},r.a.createElement("div",{className:"groupHeader messagingHeader"},r.a.createElement("div",{className:"headerText greenHeader"},"Messaging."),r.a.createElement("hr",{className:"greenLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"discord://",target:"_blank",rel:"noopener noreferrer"},"Discord")),r.a.createElement("li",null,r.a.createElement("a",{href:"slack://",target:"_blank",rel:"noopener noreferrer"},"ForensX Slack")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://gmail.com/",target:"_blank",rel:"noopener noreferrer"},"Gmail")))),r.a.createElement("div",{className:"socialMedia linkContainer"},r.a.createElement("div",{className:"groupHeader socialMediaHeader"},r.a.createElement("div",{className:"headerText redHeader"},"Social Media."),r.a.createElement("hr",{className:"redLine"})),r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/",target:"_blank",rel:"noopener noreferrer"},"Reddit")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/news/",target:"_blank",rel:"noopener noreferrer"},"r/News")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/",target:"_blank",rel:"noopener noreferrer"},"Medium")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://youtube.com/",target:"_blank",rel:"noopener noreferrer"},"Youtube")))),r.a.createElement(E,null)),this.clockUpdate())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1a971ce1.chunk.js.map