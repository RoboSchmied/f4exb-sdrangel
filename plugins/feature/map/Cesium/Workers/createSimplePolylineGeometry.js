define(["./when-229515d6","./Matrix2-46444433","./ArcType-e1641d8d","./Transforms-ab7258fe","./Color-a2310132","./ComponentDatatype-692a36d3","./RuntimeError-608565a6","./GeometryAttribute-d3bef603","./GeometryAttributes-b253752a","./IndexDatatype-7c683b18","./PolylinePipeline-3b21ed18","./combine-35b6d9cb","./WebGLConstants-f63312fc","./EllipsoidGeodesic-94d72244","./EllipsoidRhumbLine-9cd85d72","./IntersectionTests-4cf437d5","./Plane-1f2a7880"],(function(e,o,t,l,r,n,i,a,s,c,p,d,y,f,u,h,C){"use strict";function T(e,o,t,l,n,i,a){const s=p.PolylinePipeline.numberOfPoints(e,o,n);let c;const d=t.red,y=t.green,f=t.blue,u=t.alpha,h=l.red,C=l.green,T=l.blue,g=l.alpha;if(r.Color.equals(t,l)){for(c=0;c<s;c++)i[a++]=r.Color.floatToByte(d),i[a++]=r.Color.floatToByte(y),i[a++]=r.Color.floatToByte(f),i[a++]=r.Color.floatToByte(u);return a}const m=(h-d)/s,b=(C-y)/s,P=(T-f)/s,_=(g-u)/s;let B=a;for(c=0;c<s;c++)i[B++]=r.Color.floatToByte(d+c*m),i[B++]=r.Color.floatToByte(y+c*b),i[B++]=r.Color.floatToByte(f+c*P),i[B++]=r.Color.floatToByte(u+c*_);return B}function g(l){const i=(l=e.defaultValue(l,e.defaultValue.EMPTY_OBJECT)).positions,a=l.colors,s=e.defaultValue(l.colorsPerVertex,!1);this._positions=i,this._colors=a,this._colorsPerVertex=s,this._arcType=e.defaultValue(l.arcType,t.ArcType.GEODESIC),this._granularity=e.defaultValue(l.granularity,n.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=e.defaultValue(l.ellipsoid,o.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";let c=1+i.length*o.Cartesian3.packedLength;c+=e.defined(a)?1+a.length*r.Color.packedLength:1,this.packedLength=c+o.Ellipsoid.packedLength+3}g.pack=function(t,l,n){let i;n=e.defaultValue(n,0);const a=t._positions;let s=a.length;for(l[n++]=s,i=0;i<s;++i,n+=o.Cartesian3.packedLength)o.Cartesian3.pack(a[i],l,n);const c=t._colors;for(s=e.defined(c)?c.length:0,l[n++]=s,i=0;i<s;++i,n+=r.Color.packedLength)r.Color.pack(c[i],l,n);return o.Ellipsoid.pack(t._ellipsoid,l,n),n+=o.Ellipsoid.packedLength,l[n++]=t._colorsPerVertex?1:0,l[n++]=t._arcType,l[n]=t._granularity,l},g.unpack=function(t,l,n){let i;l=e.defaultValue(l,0);let a=t[l++];const s=new Array(a);for(i=0;i<a;++i,l+=o.Cartesian3.packedLength)s[i]=o.Cartesian3.unpack(t,l);a=t[l++];const c=a>0?new Array(a):void 0;for(i=0;i<a;++i,l+=r.Color.packedLength)c[i]=r.Color.unpack(t,l);const p=o.Ellipsoid.unpack(t,l);l+=o.Ellipsoid.packedLength;const d=1===t[l++],y=t[l++],f=t[l];return e.defined(n)?(n._positions=s,n._colors=c,n._ellipsoid=p,n._colorsPerVertex=d,n._arcType=y,n._granularity=f,n):new g({positions:s,colors:c,ellipsoid:p,colorsPerVertex:d,arcType:y,granularity:f})};const m=new Array(2),b=new Array(2),P={positions:m,height:b,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return g.createGeometry=function(i){const d=i._positions,y=i._colors,f=i._colorsPerVertex,u=i._arcType,h=i._granularity,C=i._ellipsoid,g=n.CesiumMath.chordLength(h,C.maximumRadius),_=e.defined(y)&&!f;let B;const A=d.length;let E,k,G,w,D=0;if(u===t.ArcType.GEODESIC||u===t.ArcType.RHUMB){let o,l,i;u===t.ArcType.GEODESIC?(o=n.CesiumMath.chordLength(h,C.maximumRadius),l=p.PolylinePipeline.numberOfPoints,i=p.PolylinePipeline.generateArc):(o=h,l=p.PolylinePipeline.numberOfPointsRhumbLine,i=p.PolylinePipeline.generateRhumbArc);const a=p.PolylinePipeline.extractHeights(d,C),s=P;if(u===t.ArcType.GEODESIC?s.minDistance=g:s.granularity=h,s.ellipsoid=C,_){let t=0;for(B=0;B<A-1;B++)t+=l(d[B],d[B+1],o)+1;E=new Float64Array(3*t),G=new Uint8Array(4*t),s.positions=m,s.height=b;let n=0;for(B=0;B<A-1;++B){m[0]=d[B],m[1]=d[B+1],b[0]=a[B],b[1]=a[B+1];const o=i(s);if(e.defined(y)){const e=o.length/3;w=y[B];for(let o=0;o<e;++o)G[n++]=r.Color.floatToByte(w.red),G[n++]=r.Color.floatToByte(w.green),G[n++]=r.Color.floatToByte(w.blue),G[n++]=r.Color.floatToByte(w.alpha)}E.set(o,D),D+=o.length}}else if(s.positions=d,s.height=a,E=new Float64Array(i(s)),e.defined(y)){for(G=new Uint8Array(E.length/3*4),B=0;B<A-1;++B){D=T(d[B],d[B+1],y[B],y[B+1],g,G,D)}const e=y[A-1];G[D++]=r.Color.floatToByte(e.red),G[D++]=r.Color.floatToByte(e.green),G[D++]=r.Color.floatToByte(e.blue),G[D++]=r.Color.floatToByte(e.alpha)}}else{k=_?2*A-2:A,E=new Float64Array(3*k),G=e.defined(y)?new Uint8Array(4*k):void 0;let t=0,l=0;for(B=0;B<A;++B){const n=d[B];if(_&&B>0&&(o.Cartesian3.pack(n,E,t),t+=3,w=y[B-1],G[l++]=r.Color.floatToByte(w.red),G[l++]=r.Color.floatToByte(w.green),G[l++]=r.Color.floatToByte(w.blue),G[l++]=r.Color.floatToByte(w.alpha)),_&&B===A-1)break;o.Cartesian3.pack(n,E,t),t+=3,e.defined(y)&&(w=y[B],G[l++]=r.Color.floatToByte(w.red),G[l++]=r.Color.floatToByte(w.green),G[l++]=r.Color.floatToByte(w.blue),G[l++]=r.Color.floatToByte(w.alpha))}}const L=new s.GeometryAttributes;L.position=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:E}),e.defined(y)&&(L.color=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:G,normalize:!0})),k=E.length/3;const V=2*(k-1),x=c.IndexDatatype.createTypedArray(k,V);let S=0;for(B=0;B<k-1;++B)x[S++]=B,x[S++]=B+1;return new a.Geometry({attributes:L,indices:x,primitiveType:a.PrimitiveType.LINES,boundingSphere:l.BoundingSphere.fromPoints(d)})},function(t,l){return e.defined(l)&&(t=g.unpack(t,l)),t._ellipsoid=o.Ellipsoid.clone(t._ellipsoid),g.createGeometry(t)}}));
