define(["./when-229515d6","./Matrix2-46444433","./GeometryOffsetAttribute-4f901209","./Transforms-ab7258fe","./ComponentDatatype-692a36d3","./RuntimeError-608565a6","./GeometryAttribute-d3bef603","./GeometryAttributes-b253752a","./IndexDatatype-7c683b18","./PolygonPipeline-259e0bdf","./RectangleGeometryLibrary-f383a8ff","./combine-35b6d9cb","./WebGLConstants-f63312fc","./EllipsoidRhumbLine-9cd85d72"],(function(e,t,i,n,o,a,r,l,s,u,c,p,d,f){"use strict";const g=new n.BoundingSphere,h=new n.BoundingSphere,y=new t.Cartesian3,m=new t.Rectangle;function b(e,t){const i=e._ellipsoid,n=t.height,a=t.width,u=t.northCap,p=t.southCap;let d=n,f=2,g=0,h=4;u&&(f-=1,d-=1,g+=1,h-=2),p&&(f-=1,d-=1,g+=1,h-=2),g+=f*a+2*d-h;const m=new Float64Array(3*g);let b,_=0,E=0;const A=y;if(u)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,0,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;else for(b=0;b<a;b++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;for(b=a-1,E=1;E<n;E++)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;if(E=n-1,!p)for(b=a-2;b>=0;b--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;for(b=0,E=n-2;E>0;E--)c.RectangleGeometryLibrary.computePosition(t,i,!1,E,b,A),m[_++]=A.x,m[_++]=A.y,m[_++]=A.z;const G=m.length/3*2,R=s.IndexDatatype.createTypedArray(m.length/3,G);let P=0;for(let e=0;e<m.length/3-1;e++)R[P++]=e,R[P++]=e+1;R[P++]=m.length/3-1,R[P++]=0;const w=new r.Geometry({attributes:new l.GeometryAttributes,primitiveType:r.PrimitiveType.LINES});return w.attributes.position=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m}),w.indices=R,w}function _(i){const n=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).rectangle,a=e.defaultValue(i.granularity,o.CesiumMath.RADIANS_PER_DEGREE),r=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(i.rotation,0),s=e.defaultValue(i.height,0),u=e.defaultValue(i.extrudedHeight,s);this._rectangle=t.Rectangle.clone(n),this._granularity=a,this._ellipsoid=r,this._surfaceHeight=Math.max(s,u),this._rotation=l,this._extrudedHeight=Math.min(s,u),this._offsetAttribute=i.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}_.packedLength=t.Rectangle.packedLength+t.Ellipsoid.packedLength+5,_.pack=function(i,n,o){return o=e.defaultValue(o,0),t.Rectangle.pack(i._rectangle,n,o),o+=t.Rectangle.packedLength,t.Ellipsoid.pack(i._ellipsoid,n,o),o+=t.Ellipsoid.packedLength,n[o++]=i._granularity,n[o++]=i._surfaceHeight,n[o++]=i._rotation,n[o++]=i._extrudedHeight,n[o]=e.defaultValue(i._offsetAttribute,-1),n};const E=new t.Rectangle,A=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),G={rectangle:E,ellipsoid:A,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};_.unpack=function(i,n,o){n=e.defaultValue(n,0);const a=t.Rectangle.unpack(i,n,E);n+=t.Rectangle.packedLength;const r=t.Ellipsoid.unpack(i,n,A);n+=t.Ellipsoid.packedLength;const l=i[n++],s=i[n++],u=i[n++],c=i[n++],p=i[n];return e.defined(o)?(o._rectangle=t.Rectangle.clone(a,o._rectangle),o._ellipsoid=t.Ellipsoid.clone(r,o._ellipsoid),o._surfaceHeight=s,o._rotation=u,o._extrudedHeight=c,o._offsetAttribute=-1===p?void 0:p,o):(G.granularity=l,G.height=s,G.rotation=u,G.extrudedHeight=c,G.offsetAttribute=-1===p?void 0:p,new _(G))};const R=new t.Cartographic;return _.createGeometry=function(t){const a=t._rectangle,l=t._ellipsoid,p=c.RectangleGeometryLibrary.computeOptions(a,t._granularity,t._rotation,0,m,R);let d,f;if(o.CesiumMath.equalsEpsilon(a.north,a.south,o.CesiumMath.EPSILON10)||o.CesiumMath.equalsEpsilon(a.east,a.west,o.CesiumMath.EPSILON10))return;const y=t._surfaceHeight,_=t._extrudedHeight;let E;if(!o.CesiumMath.equalsEpsilon(y,_,0,o.CesiumMath.EPSILON2)){if(d=function(e,t){const i=e._surfaceHeight,n=e._extrudedHeight,o=e._ellipsoid,a=n,r=i,l=b(e,t),c=t.height,p=t.width,d=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,r,o,!1);let f=d.length;const g=new Float64Array(2*f);g.set(d);const h=u.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,a,o);g.set(h,f),l.attributes.position.values=g;const y=t.northCap,m=t.southCap;let _=4;y&&(_-=1),m&&(_-=1);const E=2*(g.length/3+_),A=s.IndexDatatype.createTypedArray(g.length/3,E);f=g.length/6;let G,R=0;for(let e=0;e<f-1;e++)A[R++]=e,A[R++]=e+1,A[R++]=e+f,A[R++]=e+f+1;if(A[R++]=f-1,A[R++]=0,A[R++]=f+f-1,A[R++]=f,A[R++]=0,A[R++]=f,y)G=c-1;else{const e=p-1;A[R++]=e,A[R++]=e+f,G=p+c-2}if(A[R++]=G,A[R++]=G+f,!m){const e=p+G-1;A[R++]=e,A[R]=e+f}return l.indices=A,l}(t,p),e.defined(t._offsetAttribute)){const e=d.attributes.position.values.length/3;let n=new Uint8Array(e);t._offsetAttribute===i.GeometryOffsetAttribute.TOP?n=i.arrayFill(n,1,0,e/2):(E=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,n=i.arrayFill(n,E)),d.attributes.applyOffset=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}const c=n.BoundingSphere.fromRectangle3D(a,l,y,h),m=n.BoundingSphere.fromRectangle3D(a,l,_,g);f=n.BoundingSphere.union(c,m)}else{if(d=b(t,p),d.attributes.position.values=u.PolygonPipeline.scaleToGeodeticHeight(d.attributes.position.values,y,l,!1),e.defined(t._offsetAttribute)){const e=d.attributes.position.values.length,n=new Uint8Array(e/3);E=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,i.arrayFill(n,E),d.attributes.applyOffset=new r.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}f=n.BoundingSphere.fromRectangle3D(a,l,y)}return new r.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:r.PrimitiveType.LINES,boundingSphere:f,offsetAttribute:t._offsetAttribute})},function(i,n){return e.defined(n)&&(i=_.unpack(i,n)),i._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),i._rectangle=t.Rectangle.clone(i._rectangle),_.createGeometry(i)}}));
