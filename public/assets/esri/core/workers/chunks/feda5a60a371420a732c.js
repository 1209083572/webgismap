"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3089],{13452:(e,t,r)=>{r.d(t,{c:()=>y});var i=r(41948),s=r(3856),o=r(40504),n=r(94360),a=r(1580),l=(r(9456),r(66360),r(72052),r(9968)),d=r(12552),u=r(4736);let p=class extends((0,s.q)(o.am)){constructor(e){super(e),this.unit="milliseconds",this.value=0}toMilliseconds(){return(0,n.QJ)(this.value,this.unit,"milliseconds")}};(0,i._)([(0,l.G)(u.e,{nonNullable:!0})],p.prototype,"unit",void 0),(0,i._)([(0,a.qq)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),p=(0,i._)([(0,d.c)("esri.TimeInterval")],p);const y=p},58448:(e,t,r)=>{r.d(t,{c1:()=>n,gZ:()=>a});var i=r(53648),s=r(24296);const o=96;function n(e,t){const r=t||e.extent,i=e.width,n=(0,s.k8)(r?.spatialReference);return r&&i?r.width/i*n*s.Co*o:0}function a(e,t,r){return function(e,t){return 0===t||(0,i.gP)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,i.gP)(e,t)||e>t}(e,r)}},3089:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var i=r(41948),s=r(2600),o=r(25228),n=r(20744),a=r(79152),l=r(26496),d=r(10860),u=r(1580),p=r(53368),y=(r(72052),r(9456),r(33600)),c=r(12552),m=r(18996),h=r(71448),f=r(95247),v=r(58448),g=r(60544),q=r(81436),b=r(38724),_=r(50864),w=r(16660),S=r(25216),x=r(28584),I=r(66576),T=r(98768),E=r(26916),O=r(3116),L=r(49664),U=r(19560),N=r(21488),F=r(43780),D=r(44247);function j(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?function(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}(e,t.floorInfo.floorField):null}r(66360);var P=r(11856);const M={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let R=class extends F.c{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=j(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,P.I$)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(M[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=j(this.floors,t),i=(0,D._)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,i=t=>{t.visible&&(0===r||(0,v.gZ)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"dynamicLayers",null),(0,i._)([(0,u.qq)()],R.prototype,"floors",void 0),(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"hasDynamicLayers",null),(0,i._)([(0,u.qq)()],R.prototype,"layer",null),(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"layers",null),(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"layerDefs",null),(0,i._)([(0,u.qq)({type:Number})],R.prototype,"scale",void 0),(0,i._)([(0,u.qq)(N.WG)],R.prototype,"timeExtent",void 0),(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"version",null),(0,i._)([(0,u.qq)({readOnly:!0})],R.prototype,"visibleSublayers",null),R=(0,i._)([(0,c.c)("esri.layers.mixins.ExportImageParameters")],R);var J=r(80428),k=r(84632),A=r(98984),C=r(28484);let V=class extends((0,S.W)((0,U.u)((0,O.I)((0,L.s)((0,_.I)((0,w.u)((0,I.Y)((0,T.K)((0,l.U)((0,E.G)((0,b.C)((0,x.G)(q.c))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d.CE).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let o=!1;if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){const e=(0,h.CQ)(i.origin);if(e===h.sT.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,P.oR)(s,e,h.sT.SERVICE)}else if(e>h.sT.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,P.oR)(s,e.sublayers,(0,h.CQ)(e.origin))}}const n=[],a={writeSublayerStructure:o,...i};let l=o;s.forEach((e=>{const t=e.write({},a);n.push(t),l=l||"user"===e.originOf("visible")})),n.some((e=>Object.keys(e).length>1))&&(t.layers=n),l&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const o=new R({layer:this,floors:i?.floors,scale:(0,v.c1)({extent:e,width:t})*s}),n=o.toJSON();o.destroy();const a=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e?.spatialReference,d=(0,g.um)(l);n.dpi*=s;const u={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:d,imageSR:d,size:t+","+r,...n,...a,...u}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:o}=await this._fetchImage("blob",e,t,r,i);return(0,J.E)(s,o,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.c)(this.url,t),{extent:i,fullExtent:n,timeExtent:a}=r,l=i||n;return{fullExtent:l&&f.c.fromJSON(l),timeExtent:a&&o.c.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,a.A)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,A.o)(this,e)}async _fetchImage(e,t,r,i,o){const a={responseType:e,signal:o?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=a.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new n.c("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query});try{const{data:e}=await(0,s.c)(l,a);return{data:e,url:l}}catch(e){if((0,d.mA)(e))throw e;throw new n.c("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.c)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,u.qq)((0,C.SM)("dateFieldsTimeReference"))],V.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,u.qq)({type:Boolean})],V.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,u.qq)()],V.prototype,"dpi",void 0),(0,i._)([(0,u.qq)()],V.prototype,"gdbVersion",void 0),(0,i._)([(0,u.qq)()],V.prototype,"imageFormat",void 0),(0,i._)([(0,y.E)("imageFormat",["supportedImageFormatTypes"])],V.prototype,"readImageFormat",null),(0,i._)([(0,u.qq)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],V.prototype,"imageMaxHeight",void 0),(0,i._)([(0,u.qq)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],V.prototype,"imageMaxWidth",void 0),(0,i._)([(0,u.qq)()],V.prototype,"imageTransparency",void 0),(0,i._)([(0,u.qq)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,i._)([(0,u.qq)({json:{read:!1,write:!1}})],V.prototype,"labelsVisible",void 0),(0,i._)([(0,u.qq)({type:["ArcGISMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.qq)({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),(0,i._)([(0,u.qq)((0,C.SM)("preferredTimeReference"))],V.prototype,"preferredTimeZone",void 0),(0,i._)([(0,u.qq)()],V.prototype,"sourceJSON",void 0),(0,i._)([(0,u.qq)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"sublayers",void 0),(0,i._)([(0,m.G)("sublayers",{layers:{type:[k.c]},visibleLayers:{type:[p.Ab]}})],V.prototype,"writeSublayers",null),(0,i._)([(0,u.qq)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,i._)([(0,u.qq)({json:{read:!1},readOnly:!0,value:"map-image"})],V.prototype,"type",void 0),(0,i._)([(0,u.qq)(N.qW)],V.prototype,"url",void 0),V=(0,i._)([(0,c.c)("esri.layers.MapImageLayer")],V);const G=V},16660:(e,t,r)=>{r.d(t,{u:()=>l});var i=r(41948),s=r(66360),o=r(1580),n=(r(9456),r(72052),r(12552)),a=r(48212);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.K0)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.oR)(e,s.c.getLogger(this)))}};return(0,i._)([(0,o.qq)()],t.prototype,"title",null),(0,i._)([(0,o.qq)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.c)("esri.layers.mixins.ArcGISService")],t),t}},19560:(e,t,r)=>{r.d(t,{u:()=>y});var i=r(41948),s=r(25228),o=r(13452),n=r(1580),a=(r(9456),r(66360),r(72052),r(33600)),l=r(12552),d=r(564),u=r(99336),p=r(4736);const y=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=p.e.fromJSON(r.timeOffsetUnits);return i&&s?new o.c({value:i,unit:s}):null}set timeInfo(e){(0,d.Wc)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,n.qq)({type:s.c,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,n.qq)({type:o.c})],t.prototype,"timeOffset",void 0),(0,i._)([(0,a.E)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,n.qq)({value:null,type:u.c,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,n.qq)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,l.c)("esri.layers.mixins.TemporalLayer")],t),t}},99336:(e,t,r)=>{r.d(t,{c:()=>h});var i=r(41948),s=r(25228),o=r(13452),n=r(3856),a=r(40504),l=r(1580),d=(r(9456),r(66360),r(72052),r(33600)),u=r(12552),p=r(18996),y=r(28484);function c(e,t){return o.c.fromJSON({value:e,unit:t})}let m=class extends((0,n.q)(a.am)){constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new s.c({start:r,end:i})}writeFullTimeExtent(e,t){null!=e?.start&&null!=e.end?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?c(t.timeInterval,t.timeIntervalUnits):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?c(t.defaultTimeInterval,t.defaultTimeIntervalUnits):null}writeInterval(e,t){t.timeInterval=e?.toJSON().value??null,t.timeIntervalUnits=e?.toJSON().unit??null}};(0,i._)([(0,l.qq)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],m.prototype,"cumulative",void 0),(0,i._)([(0,l.qq)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],m.prototype,"endField",void 0),(0,i._)([(0,l.qq)({type:s.c,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"fullTimeExtent",void 0),(0,i._)([(0,d.E)("fullTimeExtent",["timeExtent"])],m.prototype,"readFullTimeExtent",null),(0,i._)([(0,p.G)("fullTimeExtent")],m.prototype,"writeFullTimeExtent",null),(0,i._)([(0,l.qq)({type:Boolean,json:{write:!0}})],m.prototype,"hasLiveData",void 0),(0,i._)([(0,l.qq)({type:o.c,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"interval",void 0),(0,i._)([(0,d.E)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],m.prototype,"readInterval",null),(0,i._)([(0,p.G)("interval")],m.prototype,"writeInterval",null),(0,i._)([(0,l.qq)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],m.prototype,"startField",void 0),(0,i._)([(0,l.qq)((0,y.SM)("timeReference",!0))],m.prototype,"timeZone",void 0),(0,i._)([(0,l.qq)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],m.prototype,"trackIdField",void 0),(0,i._)([(0,l.qq)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],m.prototype,"useTime",void 0),m=(0,i._)([(0,u.c)("esri.layers.support.TimeInfo")],m);const h=m},98984:(e,t,r)=>{r.d(t,{o:()=>o});var i=r(48212);const s=[];function o(e,t){if((0,i.Wq)(e.url??""))return!0;const{wkid:r}=t;for(const t of s){if((e.version??0)>=t[0])return!0;if("function"==typeof t[1]&&(t[1]=t[1]()),t[1].has(r))return!1}return!0}s.push([10.91,()=>{const e=new Set([9709,9716,9741,9761,9766]);for(let t=9712;t<=9713;t++)e.add(t);for(let t=9748;t<=9749;t++)e.add(t);for(let t=20904;t<=20932;t++)e.add(t);for(let t=21004;t<=21032;t++)e.add(t);for(let t=21207;t<=21264;t++)e.add(t);for(let t=21307;t<=21364;t++)e.add(t);for(let t=23301;t<=23333;t++)e.add(t);for(let t=102759;t<=102760;t++)e.add(t);for(let t=102934;t<=102955;t++)e.add(t);return e}]),s.push([10.9,()=>{const e=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let t=9356;t<=9360;t++)e.add(t);for(let t=9404;t<=9407;t++)e.add(t);for(let t=9476;t<=9482;t++)e.add(t);for(let t=9487;t<=9494;t++)e.add(t);for(let t=9697;t<=9699;t++)e.add(t);return e}]),s.push([10.81,()=>{const e=new Set([9265,9333,103598,103699]);for(let t=9248;t<=9254;t++)e.add(t);for(let t=9271;t<=9273;t++)e.add(t);for(let t=9284;t<=9285;t++)e.add(t);for(let t=21453;t<=21463;t++)e.add(t);return e}]),s.push([10.8,()=>{const e=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let t=8035;t<=8036;t++)e.add(t);for(let t=8455;t<=8456;t++)e.add(t);for(let t=8518;t<=8529;t++)e.add(t);for(let t=8533;t<=8536;t++)e.add(t);for(let t=8538;t<=8540;t++)e.add(t);for(let t=8677;t<=8679;t++)e.add(t);for(let t=8902;t<=8903;t++)e.add(t);for(let t=8907;t<=8910;t++)e.add(t);for(let t=8949;t<=8951;t++)e.add(t);for(let t=8972;t<=8987;t++)e.add(t);for(let t=9039;t<=9040;t++)e.add(t);for(let t=9068;t<=9069;t++)e.add(t);for(let t=9140;t<=9141;t++)e.add(t);for(let t=9148;t<=9150;t++)e.add(t);for(let t=9153;t<=9159;t++)e.add(t);for(let t=9205;t<=9218;t++)e.add(t);for(let t=9221;t<=9222;t++)e.add(t);for(let t=54098;t<=54101;t++)e.add(t);return e}]),s.push([10.71,()=>{const e=new Set([6316]);for(let t=8351;t<=8353;t++)e.add(t);for(let t=9294;t<=9297;t++)e.add(t);for(let t=22619;t<=22621;t++)e.add(t);for(let t=103586;t<=103594;t++)e.add(t);return e}]),s.push([10.7,()=>{const e=new Set([8387,8391,8427,8545,8682,8685,8818,31370,104022,104024,104975]);for(let t=8065;t<=8068;t++)e.add(t);for(let t=8082;t<=8083;t++)e.add(t);for(let t=8379;t<=8385;t++)e.add(t);for(let t=8836;t<=8840;t++)e.add(t);for(let t=8857;t<=8860;t++)e.add(t);for(let t=53035;t<=53037;t++)e.add(t);for(let t=54090;t<=54091;t++)e.add(t);for(let t=102498;t<=102499;t++)e.add(t);return e}]),s.push([10.61,()=>new Set([102497])]),s.push([10.6,()=>{const e=new Set([7803,7805,7887,8086,8232,8237,8240,8246,8249,8252,8255,9019,9391]);for(let t=7755;t<=7787;t++)e.add(t);for(let t=7791;t<=7795;t++)e.add(t);for(let t=7799;t<=7801;t++)e.add(t);for(let t=7825;t<=7831;t++)e.add(t);for(let t=7877;t<=7878;t++)e.add(t);for(let t=7882;t<=7883;t++)e.add(t);for(let t=7991;t<=7992;t++)e.add(t);for(let t=8042;t<=8043;t++)e.add(t);for(let t=8058;t<=8059;t++)e.add(t);for(let t=8311;t<=8348;t++)e.add(t);for(let t=9060;t<=9067;t++)e.add(t);for(let t=102562;t<=102568;t++)e.add(t);for(let t=102799;t<=102900;t++)e.add(t);return e}])},4736:(e,t,r)=>{r.d(t,{e:()=>i});const i=(0,r(14628).w)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})}}]);