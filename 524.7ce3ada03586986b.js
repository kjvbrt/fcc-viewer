"use strict";(self.webpackChunkFCCViewer=self.webpackChunkFCCViewer||[]).push([[524],{8524:(L,Y,y)=>{y.r(Y),y.d(Y,{TGraph2DPainter:()=>Z});var w=y(8428),D=y(7983),k=y(2944),j=y(4010),F=y(7861),A=y(6982),v=y(8802);class Z extends j.tK{decodeOptions(l,t){let e=new k.pc(l);this.options||(this.options={});let i=this.options;i.Color=e.check("COL"),i.Line=e.check("LINE"),i.Error=e.check("ERR")&&(this.matchObjectType("TGraph2DErrors")||this.matchObjectType("TGraph2DAsymmErrors")),i.Circles=e.check("P0"),i.Markers=e.check("P"),!i.Markers&&!i.Error&&!i.Circles&&!i.Line&&(1==t.fMarkerSize&&1==t.fMarkerStyle?i.Circles=!0:i.Markers=!0),i.Markers||(i.Color=!1),this.storeDrawOpt(l)}createHistogram(){let l=this.getObject(),t=this.matchObjectType("TGraph2DAsymmErrors"),e=l.fX[0],i=e,f=l.fY[0],g=f,h=l.fZ[0],m=h;for(let n=0;n<l.fNpoints;++n){let o=l.fX[n],x=l.fY[n],r=l.fZ[n];this.options.Error?(e=Math.min(e,o-(t?l.fEXlow[n]:l.fEX[n])),i=Math.max(i,o+(t?l.fEXhigh[n]:l.fEX[n])),f=Math.min(f,x-(t?l.fEYlow[n]:l.fEY[n])),g=Math.max(g,x+(t?l.fEYhigh[n]:l.fEY[n])),h=Math.min(h,r-(t?l.fEZlow[n]:l.fEZ[n])),m=Math.max(m,r+(t?l.fEZhigh[n]:l.fEZ[n]))):(e=Math.min(e,o),i=Math.max(i,o),f=Math.min(f,x),g=Math.max(g,x),h=Math.min(h,r),m=Math.max(m,r))}e>=i&&(i=e+1),f>=g&&(g=f+1),h>=m&&(m=h+1);let c=.02*(i-e),T=.02*(g-f),_=.02*(m-h),E=e-c,d=i+c,p=f-T,z=g+T,C=h-_,u=m+_;E<0&&e>=0&&(E=.98*e),d>0&&i<=0&&(d=0),p<0&&f>=0&&(p=.98*f),z>0&&g<=0&&(z=0),C<0&&h>=0&&(C=.98*h),u>0&&m<=0&&(u=0);let O=this.getObject();-1111!=O.fMinimum&&(C=O.fMinimum),-1111!=O.fMaximum&&(u=O.fMaximum);let s=(0,w.createHistogram)("TH2I",10,10);s.fName=O.fName+"_h",s.fTitle=O.fTitle,s.fXaxis.fXmin=E,s.fXaxis.fXmax=d,s.fYaxis.fXmin=p,s.fYaxis.fXmax=z,s.fZaxis.fXmin=C,s.fZaxis.fXmax=u,s.fMinimum=C,s.fMaximum=u;let P=(0,w.BIT)(9);return s.fBits=s.fBits|P,s}graph2DTooltip(l){if(!Number.isInteger(l.index))return console.error(`intersect.index not provided, three.js version ${D.UZH}`),null;let t=Math.floor(l.index/this.nvertex);if(t<0||t>=this.index.length)return null;let e=c=>c*c;t=this.index[t];let i=this.painter,f=this.graph,g=i.grx(f.fX[t]),h=i.gry(f.fY[t]),m=i.grz(f.fZ[t]);if(this.check_next&&t+1<f.fX.length){let c=l.point,T=i.grx(f.fX[t+1]),_=i.gry(f.fY[t+1]),E=i.grz(f.fZ[t+1]);e(c.x-T)+e(c.y-_)+e(c.z-E)<e(c.x-g)+e(c.y-h)+e(c.z-m)&&(g=T,h=_,m=E,t++)}return{x1:g-this.scale0,x2:g+this.scale0,y1:h-this.scale0,y2:h+this.scale0,z1:m-this.scale0,z2:m+this.scale0,color:this.tip_color,lines:[this.tip_name,"pnt: "+t,"x: "+i.axisAsText("x",f.fX[t]),"y: "+i.axisAsText("y",f.fY[t]),"z: "+i.axisAsText("z",f.fZ[t])]}}redraw(){let l=this.getMainPainter(),t=this.getFramePainter(),e=this.getObject(),i=1;if(!(e&&l&&t&&t.mode3d))return Promise.resolve(this);let f=(_,E)=>{let d=0;for(let p=0;p<e.fNpoints;++p)e.fX[p]<t.scale_xmin||e.fX[p]>t.scale_xmax||e.fY[p]<t.scale_ymin||e.fY[p]>t.scale_ymax||e.fZ[p]<_||e.fZ[p]>=E||++d;return d};if(w.settings.OptimizeDraw>0&&!t.webgl){let _=f(t.scale_zmin,t.scale_zmax),E=5e4;_>E&&(i=Math.floor(_/E),i<=2&&(i=2))}let g=new F.M(e),h=null,m=[t.scale_zmin,t.scale_zmax],c=t.size_x3d/100*g.getFullSize(),T=[];this.options.Circles&&(c=.06*t.size_x3d),t.usesvg&&(c*=.3),this.options.Color&&(m=l.getContourLevels(),h=l.getHistPalette());for(let _=0;_<m.length-1;++_){let E=Math.max(m[_],t.scale_zmin),d=Math.min(m[_+1],t.scale_zmax);if(E>=d)continue;let p=Math.floor(f(E,d)/i),z=null,C=0,u=new Int32Array(p),O=0,s=null,P=!1,n=null,o=0,x=0;(this.options.Markers||this.options.Circles)&&(z=new v.B_(p,t.webgl,c/3)),this.options.Error&&(s=new Float32Array(6*p*3),P=this.matchObjectType("TGraph2DAsymmErrors")),this.options.Line&&(n=new Float32Array(6*(p-1)));for(let r=0;r<e.fNpoints;++r){if(e.fX[r]<t.scale_xmin||e.fX[r]>t.scale_xmax||e.fY[r]<t.scale_ymin||e.fY[r]>t.scale_ymax||e.fZ[r]<E||e.fZ[r]>=d||i>1&&(C=(C+1)%i,0!==C))continue;u[O++]=r;let M=t.grx(e.fX[r]),a=t.gry(e.fY[r]),X=t.grz(e.fZ[r]);z&&z.addPoint(M,a,X),s&&(s[o]=t.grx(e.fX[r]-(P?e.fEXlow[r]:e.fEX[r])),s[o+1]=a,s[o+2]=X,s[o+3]=t.grx(e.fX[r]+(P?e.fEXhigh[r]:e.fEX[r])),s[o+4]=a,s[o+5]=X,o+=6,s[o]=M,s[o+1]=t.gry(e.fY[r]-(P?e.fEYlow[r]:e.fEY[r])),s[o+2]=X,s[o+3]=M,s[o+4]=t.gry(e.fY[r]+(P?e.fEYhigh[r]:e.fEY[r])),s[o+5]=X,o+=6,s[o]=M,s[o+1]=a,s[o+2]=t.grz(e.fZ[r]-(P?e.fEZlow[r]:e.fEZ[r])),s[o+3]=M,s[o+4]=a,s[o+5]=t.grz(e.fZ[r]+(P?e.fEZhigh[r]:e.fEZ[r])),o+=6),n&&(x>=6&&(n[x]=n[x-3],n[x+1]=n[x-2],n[x+2]=n[x-1],x+=3),n[x]=M,n[x+1]=a,n[x+2]=X,x+=3)}if(n&&x>3&&n.length==x){let r=this.getColor(e.fLineColor),M=new D.nls({color:new D.Ilk(r),linewidth:e.fLineWidth}),a=(0,v.Qy)(n,M);t.toplevel.add(a),a.graph=e,a.index=u,a.painter=t,a.scale0=.7*c,a.tip_name=this.getObjectHint(),a.tip_color=3===e.fMarkerColor?16711680:65280,a.nvertex=2,a.check_next=!0,a.tooltip=this.graph2DTooltip}if(s){let r=this.getColor(e.fLineColor),M=new D.nls({color:new D.Ilk(r),linewidth:e.fLineWidth}),a=(0,v.Qy)(s,M);t.toplevel.add(a),a.graph=e,a.index=u,a.painter=t,a.scale0=.7*c,a.tip_name=this.getObjectHint(),a.tip_color=3===e.fMarkerColor?16711680:65280,a.nvertex=6,a.tooltip=this.graph2DTooltip}if(z){let r="blue";this.options.Circles||(r=h?h.calcColor(_,m.length):this.getColor(e.fMarkerColor));let M=z.createPoints({color:r,style:this.options.Circles?4:e.fMarkerStyle}).then(a=>{a.graph=e,a.painter=t,a.tip_color=3===e.fMarkerColor?16711680:65280,a.scale0=.3*c,a.index=u,a.tip_name=this.getObjectHint(),a.tooltip=this.graph2DTooltip,t.toplevel.add(a)});T.push(M)}}return Promise.all(T).then(()=>(t.render3D(100),this))}static draw(l,t,e){let i=new Z(l,t);i.decodeOptions(e,t);let f=Promise.resolve(!0);return i.getMainPainter()||(t.fHistogram||(t.fHistogram=i.createHistogram()),f=A.TH2Painter.draw(l,t.fHistogram,"lego;axis"),i.ownhisto=!0),f.then(()=>(i.addToPadPrimitives(),i.redraw()))}}}}]);