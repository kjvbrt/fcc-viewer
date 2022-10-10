"use strict";(self.webpackChunkFCCViewer=self.webpackChunkFCCViewer||[]).push([[153],{2153:(L,y,B)=>{B.r(y),B.d(y,{TEfficiencyPainter:()=>g});var o=B(8428),O=B(4010),C=B(8221),p=B(1397),M=B(3105),w=B(1050);const _=(0,o.BIT)(14),A=(0,o.BIT)(15),c=(0,o.BIT)(17),x=(0,o.BIT)(18),m=(T,t)=>T.fBeta_bin_params.length>t?T.fBeta_bin_params[t].first:T.fBeta_alpha,u=(T,t)=>T.fBeta_bin_params.length>t?T.fBeta_bin_params[t].second:T.fBeta_beta;class g extends O.tK{getEfficiency(t,a){let f=t.fTotalHistogram.fArray[a],n=t.fPassedHistogram.fArray[a];if(t.TestBit(_)){let l,h,e=t.TestBit(c)?m(t,a):t.fBeta_alpha,s=t.TestBit(c)?u(t,a):t.fBeta_beta;if(t.TestBit(x)){let E=f,H=t.fTotalHistogram.fSumw2?t.fTotalHistogram.fSumw2[a]:Math.abs(f),d=n;if(H<=0)return d/E;let P=E/H;l=d*P+e,h=(E-d)*P+s}else l=n+e,h=f-n+s;return t.TestBit(A)?((e,s)=>{if(e<=0||s<=0)return 0;if(e<=1||s<=1){if(e<s)return 0;if(e>s)return 1;if(e==s)return.5}return(e-1)/(e+s-2)})(l,h):((e,s)=>e<=0||s<=0?0:e/(e+s))(l,h)}return f?n/f:0}getEfficiencyErrorLow(t,a,i){let r=t.fTotalHistogram.fArray[a],f=t.fPassedHistogram.fArray[a],n=0,e=0;return t.TestBit(_)&&(n=t.TestBit(c)?m(t,a):t.fBeta_alpha,e=t.TestBit(c)?u(t,a):t.fBeta_beta),i-this.fBoundary(r,f,t.fConfLevel,!1,n,e)}getEfficiencyErrorUp(t,a,i){let r=t.fTotalHistogram.fArray[a],f=t.fPassedHistogram.fArray[a],n=0,e=0;return t.TestBit(_)&&(n=t.TestBit(c)?m(t,a):t.fBeta_alpha,e=t.TestBit(c)?u(t,a):t.fBeta_beta),this.fBoundary(r,f,t.fConfLevel,!0,n,e)-i}copyAttributes(t,a){["fLineColor","fLineStyle","fLineWidth","fFillColor","fFillStyle","fMarkerColor","fMarkerStyle","fMarkerSize"].forEach(i=>t[i]=a[i])}createGraph(){let t=(0,o.create)("TGraphAsymmErrors");return t.fName="eff_graph",t}createHisto(t){const r=(0,o.createHistogram)("TH2F",t.fTotalHistogram.fXaxis.fNbins,t.fTotalHistogram.fYaxis.fNbins);return Object.assign(r.fXaxis,t.fTotalHistogram.fXaxis),Object.assign(r.fYaxis,t.fTotalHistogram.fYaxis),r.fName="eff_histo",r}fillGraph(t,a){const i=this.getObject(),r=i.fTotalHistogram.fXaxis,f=r.fNbins,n=a.indexOf("e0")>=0;for(let e=0,s=0;e<f;++e){if(!n&&0===i.fTotalHistogram.getBinContent(e+1))continue;let l=this.getEfficiency(i,e+1);t.fX[s]=r.GetBinCenter(e+1),t.fY[s]=l,t.fEXlow[s]=r.GetBinCenter(e+1)-r.GetBinLowEdge(e+1),t.fEXhigh[s]=r.GetBinLowEdge(e+2)-r.GetBinCenter(e+1),t.fEYlow[s]=this.getEfficiencyErrorLow(i,e+1,l),t.fEYhigh[s]=this.getEfficiencyErrorUp(i,e+1,l),t.fNpoints=++s}t.fTitle=i.fTitle,this.copyAttributes(t,i)}fillHisto(t){const a=this.getObject(),i=t.fXaxis.fNbins,r=t.fYaxis.fNbins,f=(0,o.BIT)(9);for(let n=0;n<i+2;++n)for(let e=0;e<r+2;++e){let s=t.getBin(n,e),l=this.getEfficiency(a,s);t.fArray[s]=l}t.fTitle=a.fTitle,t.fBits=t.fBits|f,this.copyAttributes(t,a)}drawFunction(t){const a=this.getObject();return!a||!a.fFunctions||t>=a.fFunctions.arr.length?this:p.TF1Painter.draw(this.getDom(),a.fFunctions.arr[t],a.fFunctions.opt[t]).then(()=>this.drawFunction(t+1))}static draw(t,a,i){if(!a||!a.fTotalHistogram)return null;(!i||"string"!=typeof i)&&(i=""),i=i.toLowerCase();let r=0;if(0==a.fTotalHistogram._typename.indexOf("TH1"))r=1;else{if(0!=a.fTotalHistogram._typename.indexOf("TH2"))return null;r=2}let n,f=new g(t,a);if(f.ndim=r,f.fBoundary=(0,w.getTEfficiencyBoundaryFunc)(a.fStatisticOption,a.TestBit(_)),1==r){i||(i="ap"),i.indexOf("same")<0&&i.indexOf("a")<0&&(i+="a"),i.indexOf("p")<0&&(i+="p");let e=f.createGraph(a);f.fillGraph(e,i),n=C.TGraphPainter.draw(t,e,i)}else{i||(i="col");let e=f.createHisto(a);f.fillHisto(e,i),n=M.S.draw(t,e,i)}return n.then(()=>(f.addToPadPrimitives(),f.drawFunction(0)))}}}}]);