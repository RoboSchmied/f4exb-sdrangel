define(["exports","./Transforms-ab7258fe","./Matrix2-46444433","./RuntimeError-608565a6","./ComponentDatatype-692a36d3","./when-229515d6","./GeometryAttribute-d3bef603","./GeometryAttributes-b253752a","./Plane-1f2a7880","./VertexFormat-7272aabd"],(function(t,e,a,n,i,r,o,s,f,u){"use strict";function l(t){this.planes=r.defaultValue(t,[])}const h=[new a.Cartesian3,new a.Cartesian3,new a.Cartesian3];a.Cartesian3.clone(a.Cartesian3.UNIT_X,h[0]),a.Cartesian3.clone(a.Cartesian3.UNIT_Y,h[1]),a.Cartesian3.clone(a.Cartesian3.UNIT_Z,h[2]);const c=new a.Cartesian3,p=new a.Cartesian3,d=new f.Plane(new a.Cartesian3(1,0,0),0);function m(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new l,this._orthographicMatrix=new a.Matrix4}function C(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=a.Matrix4.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}l.fromBoundingSphere=function(t,e){r.defined(e)||(e=new l);const n=h.length,i=e.planes;i.length=2*n;const o=t.center,s=t.radius;let f=0;for(let t=0;t<n;++t){const e=h[t];let n=i[f],u=i[f+1];r.defined(n)||(n=i[f]=new a.Cartesian4),r.defined(u)||(u=i[f+1]=new a.Cartesian4),a.Cartesian3.multiplyByScalar(e,-s,c),a.Cartesian3.add(o,c,c),n.x=e.x,n.y=e.y,n.z=e.z,n.w=-a.Cartesian3.dot(e,c),a.Cartesian3.multiplyByScalar(e,s,c),a.Cartesian3.add(o,c,c),u.x=-e.x,u.y=-e.y,u.z=-e.z,u.w=-a.Cartesian3.dot(a.Cartesian3.negate(e,p),c),f+=2}return e},l.prototype.computeVisibility=function(t){const a=this.planes;let n=!1;for(let i=0,r=a.length;i<r;++i){const r=t.intersectPlane(f.Plane.fromCartesian4(a[i],d));if(r===e.Intersect.OUTSIDE)return e.Intersect.OUTSIDE;r===e.Intersect.INTERSECTING&&(n=!0)}return n?e.Intersect.INTERSECTING:e.Intersect.INSIDE},l.prototype.computeVisibilityWithPlaneMask=function(t,a){if(a===l.MASK_OUTSIDE||a===l.MASK_INSIDE)return a;let n=l.MASK_INSIDE;const i=this.planes;for(let r=0,o=i.length;r<o;++r){const o=r<31?1<<r:0;if(r<31&&0==(a&o))continue;const s=t.intersectPlane(f.Plane.fromCartesian4(i[r],d));if(s===e.Intersect.OUTSIDE)return l.MASK_OUTSIDE;s===e.Intersect.INTERSECTING&&(n|=o)}return n},l.MASK_OUTSIDE=4294967295,l.MASK_INSIDE=0,l.MASK_INDETERMINATE=2147483647,Object.defineProperties(m.prototype,{projectionMatrix:{get:function(){return C(this),this._orthographicMatrix}}});const _=new a.Cartesian3,y=new a.Cartesian3,g=new a.Cartesian3,w=new a.Cartesian3;function x(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new m,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far}function v(t){const e=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;const a=1/t.aspectRatio;e.right=.5*t.width,e.left=-e.right,e.top=a*e.right,e.bottom=-e.top,e.near=t.near,e.far=t.far}}function M(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new l,this._perspectiveMatrix=new a.Matrix4,this._infinitePerspective=new a.Matrix4}function b(t){const e=t.top,n=t.bottom,i=t.right,r=t.left,o=t.near,s=t.far;e===t._top&&n===t._bottom&&r===t._left&&i===t._right&&o===t._near&&s===t._far||(t._left=r,t._right=i,t._top=e,t._bottom=n,t._near=o,t._far=s,t._perspectiveMatrix=a.Matrix4.computePerspectiveOffCenter(r,i,n,e,o,s,t._perspectiveMatrix),t._infinitePerspective=a.Matrix4.computeInfinitePerspectiveOffCenter(r,i,n,e,o,t._infinitePerspective))}m.prototype.computeCullingVolume=function(t,e,n){const i=this._cullingVolume.planes,o=this.top,s=this.bottom,f=this.right,u=this.left,l=this.near,h=this.far,c=a.Cartesian3.cross(e,n,_);a.Cartesian3.normalize(c,c);const p=y;a.Cartesian3.multiplyByScalar(e,l,p),a.Cartesian3.add(t,p,p);const d=g;a.Cartesian3.multiplyByScalar(c,u,d),a.Cartesian3.add(p,d,d);let m=i[0];return r.defined(m)||(m=i[0]=new a.Cartesian4),m.x=c.x,m.y=c.y,m.z=c.z,m.w=-a.Cartesian3.dot(c,d),a.Cartesian3.multiplyByScalar(c,f,d),a.Cartesian3.add(p,d,d),m=i[1],r.defined(m)||(m=i[1]=new a.Cartesian4),m.x=-c.x,m.y=-c.y,m.z=-c.z,m.w=-a.Cartesian3.dot(a.Cartesian3.negate(c,w),d),a.Cartesian3.multiplyByScalar(n,s,d),a.Cartesian3.add(p,d,d),m=i[2],r.defined(m)||(m=i[2]=new a.Cartesian4),m.x=n.x,m.y=n.y,m.z=n.z,m.w=-a.Cartesian3.dot(n,d),a.Cartesian3.multiplyByScalar(n,o,d),a.Cartesian3.add(p,d,d),m=i[3],r.defined(m)||(m=i[3]=new a.Cartesian4),m.x=-n.x,m.y=-n.y,m.z=-n.z,m.w=-a.Cartesian3.dot(a.Cartesian3.negate(n,w),d),m=i[4],r.defined(m)||(m=i[4]=new a.Cartesian4),m.x=e.x,m.y=e.y,m.z=e.z,m.w=-a.Cartesian3.dot(e,p),a.Cartesian3.multiplyByScalar(e,h,d),a.Cartesian3.add(t,d,d),m=i[5],r.defined(m)||(m=i[5]=new a.Cartesian4),m.x=-e.x,m.y=-e.y,m.z=-e.z,m.w=-a.Cartesian3.dot(a.Cartesian3.negate(e,w),d),this._cullingVolume},m.prototype.getPixelDimensions=function(t,e,a,n,i){C(this);const r=n*(this.right-this.left)/t,o=n*(this.top-this.bottom)/e;return i.x=r,i.y=o,i},m.prototype.clone=function(t){return r.defined(t)||(t=new m),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},m.prototype.equals=function(t){return r.defined(t)&&t instanceof m&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},m.prototype.equalsEpsilon=function(t,e,a){return t===this||r.defined(t)&&t instanceof m&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},x.packedLength=4,x.pack=function(t,e,a){return a=r.defaultValue(a,0),e[a++]=t.width,e[a++]=t.aspectRatio,e[a++]=t.near,e[a]=t.far,e},x.unpack=function(t,e,a){return e=r.defaultValue(e,0),r.defined(a)||(a=new x),a.width=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e],a},Object.defineProperties(x.prototype,{projectionMatrix:{get:function(){return v(this),this._offCenterFrustum.projectionMatrix}}}),x.prototype.computeCullingVolume=function(t,e,a){return v(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},x.prototype.getPixelDimensions=function(t,e,a,n,i){return v(this),this._offCenterFrustum.getPixelDimensions(t,e,a,n,i)},x.prototype.clone=function(t){return r.defined(t)||(t=new x),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},x.prototype.equals=function(t){return!!(r.defined(t)&&t instanceof x)&&(v(this),v(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},x.prototype.equalsEpsilon=function(t,e,a){return!!(r.defined(t)&&t instanceof x)&&(v(this),v(t),i.CesiumMath.equalsEpsilon(this.width,t.width,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},Object.defineProperties(M.prototype,{projectionMatrix:{get:function(){return b(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return b(this),this._infinitePerspective}}});const F=new a.Cartesian3,V=new a.Cartesian3,E=new a.Cartesian3,O=new a.Cartesian3;function P(t){t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new M,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=r.defaultValue(t.near,1),this._near=this.near,this.far=r.defaultValue(t.far,5e8),this._far=this.far,this.xOffset=r.defaultValue(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=r.defaultValue(t.yOffset,0),this._yOffset=this.yOffset}function z(t){const e=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset)}M.prototype.computeCullingVolume=function(t,e,n){const i=this._cullingVolume.planes,o=this.top,s=this.bottom,f=this.right,u=this.left,l=this.near,h=this.far,c=a.Cartesian3.cross(e,n,F),p=V;a.Cartesian3.multiplyByScalar(e,l,p),a.Cartesian3.add(t,p,p);const d=E;a.Cartesian3.multiplyByScalar(e,h,d),a.Cartesian3.add(t,d,d);const m=O;a.Cartesian3.multiplyByScalar(c,u,m),a.Cartesian3.add(p,m,m),a.Cartesian3.subtract(m,t,m),a.Cartesian3.normalize(m,m),a.Cartesian3.cross(m,n,m),a.Cartesian3.normalize(m,m);let C=i[0];return r.defined(C)||(C=i[0]=new a.Cartesian4),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,t),a.Cartesian3.multiplyByScalar(c,f,m),a.Cartesian3.add(p,m,m),a.Cartesian3.subtract(m,t,m),a.Cartesian3.cross(n,m,m),a.Cartesian3.normalize(m,m),C=i[1],r.defined(C)||(C=i[1]=new a.Cartesian4),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,t),a.Cartesian3.multiplyByScalar(n,s,m),a.Cartesian3.add(p,m,m),a.Cartesian3.subtract(m,t,m),a.Cartesian3.cross(c,m,m),a.Cartesian3.normalize(m,m),C=i[2],r.defined(C)||(C=i[2]=new a.Cartesian4),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,t),a.Cartesian3.multiplyByScalar(n,o,m),a.Cartesian3.add(p,m,m),a.Cartesian3.subtract(m,t,m),a.Cartesian3.cross(m,c,m),a.Cartesian3.normalize(m,m),C=i[3],r.defined(C)||(C=i[3]=new a.Cartesian4),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,t),C=i[4],r.defined(C)||(C=i[4]=new a.Cartesian4),C.x=e.x,C.y=e.y,C.z=e.z,C.w=-a.Cartesian3.dot(e,p),a.Cartesian3.negate(e,m),C=i[5],r.defined(C)||(C=i[5]=new a.Cartesian4),C.x=m.x,C.y=m.y,C.z=m.z,C.w=-a.Cartesian3.dot(m,d),this._cullingVolume},M.prototype.getPixelDimensions=function(t,e,a,n,i){b(this);const r=1/this.near;let o=this.top*r;const s=2*n*a*o/e;o=this.right*r;const f=2*n*a*o/t;return i.x=f,i.y=s,i},M.prototype.clone=function(t){return r.defined(t)||(t=new M),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},M.prototype.equals=function(t){return r.defined(t)&&t instanceof M&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},M.prototype.equalsEpsilon=function(t,e,a){return t===this||r.defined(t)&&t instanceof M&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},P.packedLength=6,P.pack=function(t,e,a){return a=r.defaultValue(a,0),e[a++]=t.fov,e[a++]=t.aspectRatio,e[a++]=t.near,e[a++]=t.far,e[a++]=t.xOffset,e[a]=t.yOffset,e},P.unpack=function(t,e,a){return e=r.defaultValue(e,0),r.defined(a)||(a=new P),a.fov=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e++],a.xOffset=t[e++],a.yOffset=t[e],a},Object.defineProperties(P.prototype,{projectionMatrix:{get:function(){return z(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return z(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return z(this),this._fovy}},sseDenominator:{get:function(){return z(this),this._sseDenominator}}}),P.prototype.computeCullingVolume=function(t,e,a){return z(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},P.prototype.getPixelDimensions=function(t,e,a,n,i){return z(this),this._offCenterFrustum.getPixelDimensions(t,e,a,n,i)},P.prototype.clone=function(t){return r.defined(t)||(t=new P),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},P.prototype.equals=function(t){return!!(r.defined(t)&&t instanceof P)&&(z(this),z(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},P.prototype.equalsEpsilon=function(t,e,a){return!!(r.defined(t)&&t instanceof P)&&(z(this),z(t),i.CesiumMath.equalsEpsilon(this.fov,t.fov,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))};function R(t){const n=t.frustum,i=t.orientation,o=t.origin,s=r.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT),f=r.defaultValue(t._drawNearPlane,!0);let l,h;n instanceof P?(l=0,h=P.packedLength):n instanceof x&&(l=1,h=x.packedLength),this._frustumType=l,this._frustum=n.clone(),this._origin=a.Cartesian3.clone(o),this._orientation=e.Quaternion.clone(i),this._drawNearPlane=f,this._vertexFormat=s,this._workerName="createFrustumGeometry",this.packedLength=2+h+a.Cartesian3.packedLength+e.Quaternion.packedLength+u.VertexFormat.packedLength}R.pack=function(t,n,i){i=r.defaultValue(i,0);const o=t._frustumType,s=t._frustum;return n[i++]=o,0===o?(P.pack(s,n,i),i+=P.packedLength):(x.pack(s,n,i),i+=x.packedLength),a.Cartesian3.pack(t._origin,n,i),i+=a.Cartesian3.packedLength,e.Quaternion.pack(t._orientation,n,i),i+=e.Quaternion.packedLength,u.VertexFormat.pack(t._vertexFormat,n,i),n[i+=u.VertexFormat.packedLength]=t._drawNearPlane?1:0,n};const S=new P,T=new x,k=new e.Quaternion,A=new a.Cartesian3,D=new u.VertexFormat;function I(t,e,a,n,i,o,s,f){const u=t/3*2;for(let i=0;i<4;++i)r.defined(e)&&(e[t]=o.x,e[t+1]=o.y,e[t+2]=o.z),r.defined(a)&&(a[t]=s.x,a[t+1]=s.y,a[t+2]=s.z),r.defined(n)&&(n[t]=f.x,n[t+1]=f.y,n[t+2]=f.z),t+=3;i[u]=0,i[u+1]=0,i[u+2]=1,i[u+3]=0,i[u+4]=1,i[u+5]=1,i[u+6]=0,i[u+7]=1}R.unpack=function(t,n,i){n=r.defaultValue(n,0);const o=t[n++];let s;0===o?(s=P.unpack(t,n,S),n+=P.packedLength):(s=x.unpack(t,n,T),n+=x.packedLength);const f=a.Cartesian3.unpack(t,n,A);n+=a.Cartesian3.packedLength;const l=e.Quaternion.unpack(t,n,k);n+=e.Quaternion.packedLength;const h=u.VertexFormat.unpack(t,n,D),c=1===t[n+=u.VertexFormat.packedLength];if(!r.defined(i))return new R({frustum:s,origin:f,orientation:l,vertexFormat:h,_drawNearPlane:c});const p=o===i._frustumType?i._frustum:void 0;return i._frustum=s.clone(p),i._frustumType=o,i._origin=a.Cartesian3.clone(f,i._origin),i._orientation=e.Quaternion.clone(l,i._orientation),i._vertexFormat=u.VertexFormat.clone(h,i._vertexFormat),i._drawNearPlane=c,i};const q=new a.Matrix3,B=new a.Matrix4,L=new a.Matrix4,N=new a.Cartesian3,G=new a.Cartesian3,j=new a.Cartesian3,U=new a.Cartesian3,Q=new a.Cartesian3,K=new a.Cartesian3,Y=new Array(3),J=new Array(4);J[0]=new a.Cartesian4(-1,-1,1,1),J[1]=new a.Cartesian4(1,-1,1,1),J[2]=new a.Cartesian4(1,1,1,1),J[3]=new a.Cartesian4(-1,1,1,1);const W=new Array(4);for(let t=0;t<4;++t)W[t]=new a.Cartesian4;R._computeNearFarPlanes=function(t,e,n,i,o,s,f,u){const l=a.Matrix3.fromQuaternion(e,q);let h=r.defaultValue(s,N),c=r.defaultValue(f,G),p=r.defaultValue(u,j);h=a.Matrix3.getColumn(l,0,h),c=a.Matrix3.getColumn(l,1,c),p=a.Matrix3.getColumn(l,2,p),a.Cartesian3.normalize(h,h),a.Cartesian3.normalize(c,c),a.Cartesian3.normalize(p,p),a.Cartesian3.negate(h,h);const d=a.Matrix4.computeView(t,p,c,h,B);let m,C;if(0===n){const t=i.projectionMatrix,e=a.Matrix4.multiply(t,d,L);C=a.Matrix4.inverse(e,L)}else m=a.Matrix4.inverseTransformation(d,L);r.defined(C)?(Y[0]=i.near,Y[1]=i.far):(Y[0]=0,Y[1]=i.near,Y[2]=i.far);for(let e=0;e<2;++e)for(let n=0;n<4;++n){let s=a.Cartesian4.clone(J[n],W[n]);if(r.defined(C)){s=a.Matrix4.multiplyByVector(C,s,s);const n=1/s.w;a.Cartesian3.multiplyByScalar(s,n,s),a.Cartesian3.subtract(s,t,s),a.Cartesian3.normalize(s,s);const i=a.Cartesian3.dot(p,s);a.Cartesian3.multiplyByScalar(s,Y[e]/i,s),a.Cartesian3.add(s,t,s)}else{r.defined(i._offCenterFrustum)&&(i=i._offCenterFrustum);const t=Y[e],n=Y[e+1];s.x=.5*(s.x*(i.right-i.left)+i.left+i.right),s.y=.5*(s.y*(i.top-i.bottom)+i.bottom+i.top),s.z=.5*(s.z*(t-n)-t-n),s.w=1,a.Matrix4.multiplyByVector(m,s,s)}o[12*e+3*n]=s.x,o[12*e+3*n+1]=s.y,o[12*e+3*n+2]=s.z}},R.createGeometry=function(t){const n=t._frustumType,f=t._frustum,u=t._origin,l=t._orientation,h=t._drawNearPlane,c=t._vertexFormat,p=h?6:5;let d=new Float64Array(72);R._computeNearFarPlanes(u,l,n,f,d);let m=24;d[m]=d[12],d[m+1]=d[13],d[m+2]=d[14],d[m+3]=d[0],d[m+4]=d[1],d[m+5]=d[2],d[m+6]=d[9],d[m+7]=d[10],d[m+8]=d[11],d[m+9]=d[21],d[m+10]=d[22],d[m+11]=d[23],m+=12,d[m]=d[15],d[m+1]=d[16],d[m+2]=d[17],d[m+3]=d[3],d[m+4]=d[4],d[m+5]=d[5],d[m+6]=d[0],d[m+7]=d[1],d[m+8]=d[2],d[m+9]=d[12],d[m+10]=d[13],d[m+11]=d[14],m+=12,d[m]=d[3],d[m+1]=d[4],d[m+2]=d[5],d[m+3]=d[15],d[m+4]=d[16],d[m+5]=d[17],d[m+6]=d[18],d[m+7]=d[19],d[m+8]=d[20],d[m+9]=d[6],d[m+10]=d[7],d[m+11]=d[8],m+=12,d[m]=d[6],d[m+1]=d[7],d[m+2]=d[8],d[m+3]=d[18],d[m+4]=d[19],d[m+5]=d[20],d[m+6]=d[21],d[m+7]=d[22],d[m+8]=d[23],d[m+9]=d[9],d[m+10]=d[10],d[m+11]=d[11],h||(d=d.subarray(12));const C=new s.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})});if(r.defined(c.normal)||r.defined(c.tangent)||r.defined(c.bitangent)||r.defined(c.st)){const t=r.defined(c.normal)?new Float32Array(12*p):void 0,e=r.defined(c.tangent)?new Float32Array(12*p):void 0,n=r.defined(c.bitangent)?new Float32Array(12*p):void 0,s=r.defined(c.st)?new Float32Array(8*p):void 0,f=N,u=G,l=j,d=a.Cartesian3.negate(f,U),_=a.Cartesian3.negate(u,Q),y=a.Cartesian3.negate(l,K);m=0,h&&(I(m,t,e,n,s,y,f,u),m+=12),I(m,t,e,n,s,l,d,u),m+=12,I(m,t,e,n,s,d,y,u),m+=12,I(m,t,e,n,s,_,y,d),m+=12,I(m,t,e,n,s,f,l,u),m+=12,I(m,t,e,n,s,u,l,d),r.defined(t)&&(C.normal=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})),r.defined(e)&&(C.tangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})),r.defined(n)&&(C.bitangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:n})),r.defined(s)&&(C.st=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:s}))}const _=new Uint16Array(6*p);for(let t=0;t<p;++t){const e=6*t,a=4*t;_[e]=a,_[e+1]=a+1,_[e+2]=a+2,_[e+3]=a,_[e+4]=a+2,_[e+5]=a+3}return new o.Geometry({attributes:C,indices:_,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:e.BoundingSphere.fromVertices(d)})},t.FrustumGeometry=R,t.OrthographicFrustum=x,t.PerspectiveFrustum=P}));
