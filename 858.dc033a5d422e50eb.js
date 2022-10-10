"use strict";(self.webpackChunkFCCViewer=self.webpackChunkFCCViewer||[]).push([[858],{7858:(G,F,_)=>{_.r(F),_.d(F,{RPalettePainter:()=>$,drawBox:()=>Z,drawLine:()=>V,drawMarker:()=>I,drawText:()=>W});var w=_(8428),p=_(8681),k=_(628),j=_(4339),H=_(7527),B=_(7137);function W(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fPos,e),n=this.v7EvalFont("text",{size:12,color:"black",align:22});return this.createG(l?"main_layer":!!e&&"upper_layer"),this.startTextDrawing(n,"font"),this.drawText({x:t.x,y:t.y,text:c.fText,latex:1}),this.finishTextDrawing()}function V(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP1,e),n=a.getCoordinate(c.fP2,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttLine(),this.draw_g.append("svg:path").attr("d",`M${t.x},${t.y}L${n.x},${n.y}`).call(this.lineatt.func)}function Z(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP1,e),n=a.getCoordinate(c.fP2,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttLine("border_"),this.createv7AttFill(),this.draw_g.append("svg:path").attr("d",`M${t.x},${t.y}H${n.x}V${n.y}H${t.x}Z`).call(this.lineatt.func).call(this.fillatt.func)}function I(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttMarker();let n=this.markeratt.create(t.x,t.y);n&&this.draw_g.append("svg:path").attr("d",n).call(this.markeratt.func)}class $ extends k.p{getHistPalette(){let a=this.getObject(),e=a?a.fPalette:null;return e&&!e.getColor&&(0,w.addMethods)(e,"ROOT::Experimental::RPalette"),e}drawPalette(a){let e=this.getHistPalette(),l=e.getContour(),t=this.getFramePainter();if(!l)return console.log("no contour - no palette");if(!t)return console.log("no frame painter - no palette");let A,C,o,h,n=e.full_min,E=e.full_max,R=l[0],D=l[l.length-1],f=t.getFrameRect(),M=this.getPadPainter().getPadWidth(),O=this.getPadPainter().getPadHeight(),S=this.v7EvalAttr("visible",!0),s=this.v7EvalAttr("vertical",!0);if(a){o=a.width,h=a.height;let i={};s?(this.v7AttrChange(i,"margin",(a.x-f.x-f.width)/M),this.v7AttrChange(i,"width",o/M)):(this.v7AttrChange(i,"margin",(a.y-f.y-f.height)/M),this.v7AttrChange(i,"width",h/O)),this.v7SendAttrChanges(i,!1)}else{if(s){let i=this.v7EvalLength("margin",M,.02);A=Math.round(f.x+f.width+i),o=this.v7EvalLength("width",M,.05),C=f.y,h=f.height}else{let i=this.v7EvalLength("margin",O,.02);A=f.x,o=f.width,C=Math.round(f.y+f.height+i),h=this.v7EvalLength("width",O,.05)}this.draw_g.attr("transform",`translate(${A},${C})`)}let P=this.draw_g.select(".colbtns");if(P.empty()?P=this.draw_g.append("svg:g").attr("class","colbtns"):P.selectAll("*").remove(),!S)return;P.append("svg:path").attr("d",`M0,0H${o}V${h}H0Z`).style("stroke","black").style("fill","none"),(void 0===n||void 0===E)&&(n=R,E=D),s?t.z_handle.configureAxis("zaxis",n,E,R,D,!0,[h,0],-h,{reverse:!1}):t.z_handle.configureAxis("zaxis",n,E,R,D,!1,[0,o],o,{reverse:!1});for(let i=0;i<l.length-1;++i){let m=Math.round(t.z_handle.gr(l[i])),u=Math.round(t.z_handle.gr(l[i+1])),g=e.getContourColor((l[i]+l[i+1])/2),x=P.append("svg:path").attr("d",s?`M0,${u}H${o}V${m}H0Z`:`M${m},0V${h}H${u}V0Z`).style("fill",g).style("stroke",g).property("fill0",g).property("fill1",(0,p.B8)(g).darker(.5).toString());this.isTooltipAllowed()&&x.on("mouseover",function(){(0,p.Ys)(this).transition().duration(100).style("fill",(0,p.Ys)(this).property("fill1"))}).on("mouseout",function(){(0,p.Ys)(this).transition().duration(100).style("fill",(0,p.Ys)(this).property("fill0"))}).append("svg:title").text(l[i].toFixed(2)+" - "+l[i+1].toFixed(2)),w.settings.Zooming&&x.on("dblclick",()=>t.unzoom("z"))}t.z_handle.maxTickSize=Math.round(.3*o);let L=t.z_handle.drawAxis(this.draw_g,s?`translate(${o},${h})`:`translate(0,${h})`,s?-1:1);return(0,w.isBatchMode)()||a?L:L.then(()=>{if(w.settings.ContextMenu&&this.draw_g.on("contextmenu",r=>{r.stopPropagation(),r.preventDefault(),(0,B.Z)(r,this).then(d=>{d.add("header:Palette"),d.addchk(s,"Vertical",z=>{this.v7SetAttr("vertical",z),this.redrawPad()}),t.z_handle.fillAxisContextMenu(d,"z"),d.show()})}),(0,j.uI)(this,{x:A,y:C,width:o,height:h,minwidth:20,minheight:20,no_change_x:!s,no_change_y:s,redraw:r=>this.drawPalette(r)}),!w.settings.Zooming)return;let g,x,b,v,i=!1,m=0,u=0;const K=r=>{if(!i)return;if(r.preventDefault(),v=(0,p.cx)(r,this.draw_g.node()),b)return t.z_handle.processLabelsMove("move",v);u=s?Math.min(Math.max(v[1],0),h):Math.min(Math.max(v[0],0),o);let d=Math.abs(u-m);!x&&d>1&&(g.style("display",null),x=!0),s?g.attr("y",Math.min(m,u)).attr("height",d):g.attr("x",Math.min(m,u)).attr("width",d)},U=r=>{if(i)if(r.preventDefault(),(0,p.Ys)(window).on("mousemove.colzoomRect",null).on("mouseup.colzoomRect",null),g.remove(),g=null,i=!1,b)t.z_handle.processLabelsMove("stop",v);else{let d=t.z_handle.func,z=d.invert(m),y=d.invert(u);this.getFramePainter().zoom("z",Math.min(z,y),Math.max(z,y))}},Y=r=>{i||(i=!0,r.preventDefault(),r.stopPropagation(),v=(0,p.cx)(r,this.draw_g.node()),m=u=v[s?1:0],x=!1,b=!1,g=P.append("svg:rect").attr("class","zoom").attr("id","colzoomRect").style("display","none"),s?g.attr("x",0).attr("width",o).attr("y",m).attr("height",1):g.attr("x",m).attr("width",1).attr("y",0).attr("height",h),(0,p.Ys)(window).on("mousemove.colzoomRect",K).on("mouseup.colzoomRect",U,!0),setTimeout(()=>{!x&&i&&(b=t.z_handle.processLabelsMove("start",v))},500))},T=()=>{this.draw_g.selectAll(".axis_zoom, .axis_labels").on("mousedown",Y).on("dblclick",()=>t.unzoom("z")),w.settings.ZoomWheel&&this.draw_g.on("wheel",r=>{r.stopPropagation(),r.preventDefault();let d=(0,p.cx)(r,this.draw_g.node()),y=t.z_handle.analyzeWheelEvent(r,s?1-d[1]/h:d[0]/o);y.changed&&t.zoom("z",y.min,y.max)})};t.z_handle.setAfterDrawHandler(T),T()})}static draw(a,e,l){let t=new $(a,e,l,"palette");return(0,H.ensureRCanvas)(t,!1).then(()=>(t.createG(),t))}}}}]);