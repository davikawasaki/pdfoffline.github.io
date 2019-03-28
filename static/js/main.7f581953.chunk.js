(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,t,a){e.exports=a(430)},430:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(32),o=a.n(i),r=a(24),s=a(193),c=a.n(s),d=a(52),m=a.n(d),u=a(53),g=a.n(u),p={palette:{primary:{light:m.a[300],main:m.a[500],dark:m.a[700]},secondary:{light:g.a[300],main:g.a[500],dark:g.a[700]}},typography:{useNextVariants:!0}},f=Object(r.createMuiTheme)(p),h=a(162),v=a(191),E=a.n(v),y=a(192),b=a.n(y),O=a(44),w=a.n(O),F=a(70),L=a(71),M=a(79),N=a(72),C=a(80),S=a(19),k=a.n(S),A=a(54),j=a.n(A),P=a(163),x=a.n(P),R=a(164),G=a.n(R),D=a(165),B=a.n(D),W=a(105),Z=a.n(W);function Q(){return Math.round(20*Math.random())-10}function U(){var e=50+Q(),t=50+Q();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var T=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(M.a)(this,Object(N.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleCloseAfterUpload=function(){a.setState({open:!1,loading:!1,modalQuery:"idle",msg:{err:null,success:null},respMsg:null}),a.filesClearAndRemoveAll()},a.handleLoadingProgress=function(){a.setState({loading:!0,modalQuery:"progress"})},a.handleResponseProgress=function(e,t){a.setState({loading:!1,modalQuery:e,respMsg:t})},a.handleIdleProgress=function(){a.setState({loading:!1,modalQuery:"idle"})},a.state={open:!!e.isOpen&&e.isOpen,loading:e.isLoading,modalQuery:"idle",msg:e.msg,respMsg:null},a.filesClearAndRemoveAll=e.clearModalStatus,a}return Object(C.a)(t,e),Object(L.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.hasOwnProperty("isOpen")&&e.hasOwnProperty("isLoading")&&e.hasOwnProperty("msg")&&(e.isOpen&&this.handleOpen(),e.isLoading?this.handleLoadingProgress():null!=e.msg.err?this.handleResponseProgress("error",e.msg.err):null!=e.msg.success&&this.handleResponseProgress("success",e.msg.success))}},{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement(G.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},l.a.createElement("div",{style:U(),className:e.paper},"progress"!==this.state.modalQuery?l.a.createElement(k.a,{container:!0,spacing:32,justify:"center"},l.a.createElement(k.a,{item:!0},l.a.createElement(w.a,null,this.state.respMsg)),l.a.createElement(k.a,{item:!0},l.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleCloseAfterUpload},"New merge"))):l.a.createElement("div",null,l.a.createElement(Z.a,{in:"progress"===this.state.modalQuery,style:{transitionDelay:"progress"===this.state.modalQuery?"800ms":"0ms"},unmountOnExit:!0},l.a.createElement(B.a,null)),l.a.createElement(w.a,null,"Merging...")),l.a.createElement(I,null))))}}]),t}(l.a.Component),I=Object(r.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none",textAlign:"center"}}})(T),z=I,_=a(46);var K={mergeBetweenPDF:function(e){var t={pdfFile:null,pdfNotMergedList:[]};if(e.length>0){(new FileReader).onload=function(e){console.log(e.target.result)};var a=_.a.create(),n=_.a.create(),l=[],i=[],o=[];return e.forEach(function(e){l.push(fetch(URL.createObjectURL(e)).then(function(e){return e.arrayBuffer()}))}),Promise.all(l).then(function(l){for(var r=0;r<l.length;r++)try{n=_.a.load(new Uint8Array(l[r])),o=n.getPages(),n=_.a.create(),o.forEach(function(e){n.addPage(e)}),o.forEach(function(e){a.addPage(e)})}catch(s){console.log(s),i.push(e[r].name)}return t.pdfFile=_.b.saveToBytes(a),t.pdfNotMergedList=i,t}).catch(function(e){return console.log(e),t.pdfFile=null,t.pdfNotMergedList=i,t})}}},J=a(190),V=function(e){function t(){var e,a;Object(F.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(M.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(l)))).state={files:[],hasFiles:!1,modalOpen:!1,modalLoading:!1,modalMsg:{err:null,success:null}},a.onFilesChange=function(e){a.setState({files:e,hasFiles:e.length>0},function(){})},a.onFilesError=function(e,t){console.log("[LOG] Error code "+e.code+": "+e.message)},a.filesRemoveOne=function(e){a.refs.files.removeFile(e)},a.filesClearAndRemoveAll=function(){a.setState({modalOpen:!1,modalLoading:!1,modalMsg:{err:null,success:null}},function(){a.filesRemoveAll()})},a.filesRemoveAll=function(){a.setState({files:[],hasFiles:!1},function(){a.refs.files.removeFiles()})},a.startMerge=function(){var e;a.setState({files:a.state.files,hasFiles:!1,modalOpen:!0,modalLoading:!0},function(){console.log("[LOG] Starting merge...")}),K.mergeBetweenPDF(a.state.files).then(function(t){if(t&&t.hasOwnProperty("pdfFile")){if(t.pdfFile){if(t.pdfNotMergedList.length!==a.state.files.length){var n="output_merge_"+(new Date).toISOString().replace(":","_").replace("T","_").replace("Z","")+".pdf";Object(J.saveSync)(t.pdfFile,n)}t.pdfNotMergedList.length>0?(e=t.pdfNotMergedList.length>0&&t.pdfNotMergedList.length===a.state.files.length?"No merge PDF output could be done. Following files have problem and need to be merged manually: "+t.pdfNotMergedList.join(", "):"Following files have problem and need to be merged manually: "+t.pdfNotMergedList.join(", "),console.log("[LOG] "+e),a.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:e,success:null}},function(){console.log("[LOG] Modal closed.")})):(e="Merge totally successfull and downloaded!",console.log("[LOG] "+e),a.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:null,success:e}},function(){console.log("[LOG] Closed modal")}))}}else e="Internal error at merging! Send this error to the developer in charge.",console.log(e),a.setState({modalOpen:!0,modalLoading:!1,modalMsg:{err:e,success:null}},function(){console.log("[LOG] Closed modal")})}).catch(function(e){console.log("[LOG] "+e)}).finally(function(){return a.filesRemoveAll()})},a}return Object(C.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return l.a.createElement("div",{className:"files"},l.a.createElement(k.a,{container:!0,spacing:32,justify:"center"},l.a.createElement(k.a,{item:!0,className:t.dropFilesGridZone},l.a.createElement(x.a,{ref:"files",className:t.dropFilesZone,onChange:this.onFilesChange,onError:this.onFilesError,accepts:[".pdf"],multiple:!0,maxFiles:1e3,maxFileSize:1e7,minFileSize:0,clickable:!0},l.a.createElement("div",{className:t.dropFilesZoneDiv},"Drop files here or click to upload")))),l.a.createElement(k.a,{container:!0,spacing:32,justify:"center"},this.state.files.length>0?l.a.createElement(k.a,{item:!0,className:t.dropFilesGridZone},l.a.createElement("div",{className:"files-list"},l.a.createElement("ul",null,this.state.files.map(function(t){return l.a.createElement("li",{className:"files-list-item",key:t.id},l.a.createElement("div",{className:"files-list-item-content"},l.a.createElement("div",{className:"files-list-item-content-item files-list-item-content-item-1"},t.name),l.a.createElement("div",{className:"files-list-item-content-item files-list-item-content-item-2"},t.sizeReadable)),l.a.createElement("div",{id:t.id,className:"files-list-item-remove",onClick:e.filesRemoveOne.bind(e,t)}))})))):l.a.createElement(k.a,{item:!0,className:t.dropFilesWarningGridZone},l.a.createElement("div",{className:"files-list"},"No files selected!"))),l.a.createElement(k.a,{container:!0,spacing:16,justify:"center"},l.a.createElement(k.a,{item:!0},l.a.createElement(j.a,{variant:"contained",color:"primary",disabled:!this.state.hasFiles,onClick:this.startMerge},"Start merge")),l.a.createElement(k.a,{item:!0},l.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:this.filesClearAndRemoveAll},"Clear selection"))),l.a.createElement(z,{isOpen:this.state.modalOpen,isLoading:this.state.modalLoading,msg:this.state.modalMsg,clearModalStatus:this.filesClearAndRemoveAll}))}}]),t}(n.Component),$=Object(r.withStyles)(function(e){return{dropFilesGridZone:{width:"70%"},dropFilesZone:{padding:"2em",border:"2px dashed rgba(0, 0, 0, .1)",color:"rgba(0, 0, 0, .4)",width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box",textAlign:"center"},dropFilesZoneDiv:{width:"100%"},dropFilesWarningGridZone:{width:"70%",textAlign:"center",color:"red",fontWeight:"bold"}}},{name:"MuiFilesDragDrop"})(V),q=Object(r.withStyles)(function(e){return{appBar:{position:"relative"},icon:{marginRight:2*e.spacing.unit},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(h.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(function(e){var t=e.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{position:"static",className:t.appBar},l.a.createElement(b.a,null,l.a.createElement(w.a,{variant:"h6",color:"inherit",noWrap:!0},"KAWASAKI APP"))),l.a.createElement("main",null,l.a.createElement("div",{className:t.heroUnit},l.a.createElement("div",{className:t.heroContent},l.a.createElement(w.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Merge your PDFs"),l.a.createElement("div",{className:t.heroButtons},l.a.createElement($,null))))))}),H=function(){return l.a.createElement(r.MuiThemeProvider,{theme:f},l.a.createElement(c.a,null),l.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[194,1,2]]]);
//# sourceMappingURL=main.7f581953.chunk.js.map