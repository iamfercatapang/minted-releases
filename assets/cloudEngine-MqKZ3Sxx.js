const nt=()=>{};var pe={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},st=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],o=t[n++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,o=a?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,p=i>>2,h=(i&3)<<4|o>>4;let g=(o&15)<<2|l>>6,f=l&63;c||(f=64,a||(g=64)),s.push(n[p],n[h],n[g],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):st(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||l==null||h==null)throw new rt;const g=i<<2|o>>4;if(s.push(g),l!==64){const f=o<<4&240|l>>2;if(s.push(f),h!==64){const b=l<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const it=function(t){const e=Pe(t);return Me.encodeByteArray(e,!0)},Le=function(t){return it(t).replace(/\./g,"")},at=function(t){try{return Me.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t){return ke(void 0,t)}function ke(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ot(n)||(t[n]=ke(t[n],e[n]));return t}function ot(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=()=>$e().__FIREBASE_DEFAULTS__,lt=()=>{if(typeof process>"u"||typeof pe>"u")return;const t=pe.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&at(t[1]);return e&&JSON.parse(e)},ut=()=>{try{return nt()||ct()||lt()||dt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xe=()=>{var t;return(t=ut())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function ft(){try{return typeof indexedDB=="object"}catch{return!1}}function pt(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="FirebaseError";class L extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mt,Object.setPrototypeOf(this,L.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?gt(i,s):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new L(r,o,s)}}function gt(t,e){try{let n=0,s="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){s+=t.substring(n);break}const i=t.indexOf("}",r+2);if(i===-1){s+=t.substring(n);break}const a=t.substring(r+2,i),o=e[a];s+=t.substring(n,r)+(o!=null?String(o):`<${a}?>`),n=i+1}return s}catch{return t}}function Z(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(me(i)&&me(a)){if(!Z(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function me(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){return t&&t._delegate?t._delegate:t}class x{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ht;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_t(e))try{this.getOrInitializeService({instanceIdentifier:D})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=D){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=D){return this.instances.has(e)}getOptions(e=D){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);s===o&&a.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yt(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=D){return this.component?this.component.multipleInstances?e:D:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yt(t){return t===D?void 0:t}function _t(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const Ot={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},wt=m.INFO,St={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Ct=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=St[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Be{constructor(e){this.name=e,this._logLevel=wt,this._logHandler=Ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ot[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const Rt=(t,e)=>e.some(n=>t instanceof n);let ge,Ee;function At(){return ge||(ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tt(){return Ee||(Ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ue=new WeakMap,ee=new WeakMap,Ge=new WeakMap,W=new WeakMap,ae=new WeakMap;function Dt(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(T(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ue.set(n,t)}).catch(()=>{}),ae.set(e,t),e}function Nt(t){if(ee.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ee.set(t,e)}let te={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ee.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ge.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vt(t){te=t(te)}function Pt(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(z(this),e,...n);return Ge.set(s,e.sort?e.sort():[e]),T(s)}:Tt().includes(t)?function(...e){return t.apply(z(this),e),T(Ue.get(this))}:function(...e){return T(t.apply(z(this),e))}}function Mt(t){return typeof t=="function"?Pt(t):(t instanceof IDBTransaction&&Nt(t),Rt(t,At())?new Proxy(t,te):t)}function T(t){if(t instanceof IDBRequest)return Dt(t);if(W.has(t))return W.get(t);const e=Mt(t);return e!==t&&(W.set(t,e),ae.set(e,t)),e}const z=t=>ae.get(t);function Lt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=T(a);return s&&a.addEventListener("upgradeneeded",c=>{s(T(a.result),c.oldVersion,c.newVersion,T(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const kt=["get","getKey","getAll","getAllKeys","count"],$t=["put","add","delete","clear"],q=new Map;function be(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(q.get(e))return q.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$t.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||kt.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return q.set(e,i),i}vt(t=>({...t,get:(e,n,s)=>be(e,n)||t.get(e,n,s),has:(e,n)=>!!be(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ft(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ft(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ne="@firebase/app",ye="0.16.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Be("@firebase/app"),Bt="@firebase/app-compat",Ut="@firebase/analytics-compat",Gt="@firebase/analytics",Vt="@firebase/app-check-compat",Ht="@firebase/app-check",jt="@firebase/auth",Wt="@firebase/auth-compat",zt="@firebase/crashlytics",qt="@firebase/database",Yt="@firebase/data-connect",Jt="@firebase/database-compat",Kt="@firebase/functions",Xt="@firebase/functions-compat",Qt="@firebase/installations",Zt="@firebase/installations-compat",en="@firebase/messaging",tn="@firebase/messaging-compat",nn="@firebase/performance",sn="@firebase/performance-compat",rn="@firebase/remote-config",an="@firebase/remote-config-compat",on="@firebase/storage",cn="@firebase/storage-compat",ln="@firebase/firestore",dn="@firebase/ai",un="@firebase/firestore-compat",hn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]",fn={[ne]:"fire-core",[Bt]:"fire-core-compat",[Gt]:"fire-analytics",[Ut]:"fire-analytics-compat",[Ht]:"fire-app-check",[Vt]:"fire-app-check-compat",[jt]:"fire-auth",[Wt]:"fire-auth-compat",[zt]:"fire-cls",[qt]:"fire-rtdb",[Yt]:"fire-data-connect",[Jt]:"fire-rtdb-compat",[Kt]:"fire-fn",[Xt]:"fire-fn-compat",[Qt]:"fire-iid",[Zt]:"fire-iid-compat",[en]:"fire-fcm",[tn]:"fire-fcm-compat",[nn]:"fire-perf",[sn]:"fire-perf-compat",[rn]:"fire-rc",[an]:"fire-rc-compat",[on]:"fire-gcs",[cn]:"fire-gcs-compat",[ln]:"fire-fst",[un]:"fire-fst-compat",[dn]:"fire-vertex","fire-js":"fire-js",[hn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=new Map,pn=new Map,re=new Map;function _e(t,e){try{t.container.addComponent(e)}catch(n){C.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function G(t){const e=t.name;if(re.has(e))return C.debug(`There were multiple attempts to register component ${e}.`),!1;re.set(e,t);for(const n of U.values())_e(n,t);for(const n of pn.values())_e(n,t);return!0}function mn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},S=new Fe("app","Firebase",En);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new x("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}function yn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:se,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw S.create("bad-app-name",{appName:String(r)});if(n||(n=xe()),!n)throw S.create("no-options");const i=U.get(r);if(i)if(Z(n,i.options)){if(Z(s,i.config))return i;throw S.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw S.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(n)});const a=new It(r);for(const c of re.values())a.addComponent(c);const o=new bn(n,s,a);return U.set(r,o),o}function _n(t=se){const e=U.get(t);if(!e&&t===se&&xe())return yn();if(!e)throw S.create("no-app",{appName:t});return e}function P(t,e,n){let s=fn[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),C.warn(a.join(" "));return}G(new x(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="firebase-heartbeat-database",On=1,F="firebase-heartbeat-store";let Y=null;function Ve(){return Y||(Y=Lt(In,On,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(F)}catch(n){console.warn(n)}}}}).catch(t=>{throw S.create("idb-open",{originalErrorMessage:t.message})})),Y}async function wn(t){try{const n=(await Ve()).transaction(F),s=await n.objectStore(F).get(He(t));return await n.done,s}catch(e){if(e instanceof L)C.warn(e.message);else{const n=S.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});C.warn(n.message)}}}async function Ie(t,e){try{const s=(await Ve()).transaction(F,"readwrite");await s.objectStore(F).put(e,He(t)),await s.done}catch(n){if(n instanceof L)C.warn(n.message);else{const s=S.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});C.warn(s.message)}}}function He(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1024,Cn=30;class Rn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tn(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oe();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Cn){const a=Dn(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){C.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oe(),{heartbeatsToSend:s,unsentEntries:r}=An(this._heartbeatsCache.heartbeats),i=Le(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return C.warn(n),""}}}function Oe(){return new Date().toISOString().substring(0,10)}function An(t,e=Sn){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),we(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),we(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ft()?pt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ie(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ie(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function we(t){return Le(JSON.stringify({version:2,heartbeats:t})).length}function Dn(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){G(new x("platform-logger",e=>new xt(e),"PRIVATE")),G(new x("heartbeat",e=>new Rn(e),"PRIVATE")),P(ne,ye,t),P(ne,ye,"esm2020"),P("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn("");var vn="firebase",Pn="13.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */P(vn,Pn,"app");var Se="@firebase/ai",ie="3.0.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M="AI",Mn="global",Ln="firebasevertexai.googleapis.com",V="v1beta",Ce=ie,kn="gl-js",$n="hybrid",xn=180*1e3,Fn="gemini-3.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends L{constructor(e,n,s){const r=M,i=`${r}/${e}`,a=`${r}: ${n} (${i})`;super(e,a),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,u),Object.setPrototypeOf(this,u.prototype),this.toString=()=>a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=["user","model","function","system"],je={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},y={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},I={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},A={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={AGENT_PLATFORM:"AGENT_PLATFORM",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.backendType=e}}class j extends We{constructor(){super(R.GOOGLE_AI)}_getModelPath(e,n){return`/${V}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${V}/projects/${e}/templates/${n}`}}class ze extends We{constructor(e){super(R.AGENT_PLATFORM),this.location=Mn,e&&(this.location=e)}_getModelPath(e,n){return`/${V}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${V}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(t instanceof j)return`${M}/googleai`;if(t instanceof ze)return`${M}/agentplatform/${t.location}`;throw new u(d.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function Un(t){const e=t.split("/");if(e[0]!==M)throw new u(d.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"agentplatform":const s=e[2];if(!s)throw new u(d.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new ze(s);case"googleai":return new j;default:throw new u(d.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new Be("@firebase/ai");var w;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(w||(w={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe={type:"text",languages:["en"]},J=[qe,{type:"image"}],K=[qe];class _{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:J,expectedOutputs:K}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=J),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=K)):this.onDeviceParams.createOptions={expectedInputs:J,expectedOutputs:K})}async isAvailable(e){var s;if(!this.mode)return E.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===I.ONLY_IN_CLOUD)return E.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===I.ONLY_ON_DEVICE){if(n===w.UNAVAILABLE)throw new u(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===w.DOWNLOADABLE||n===w.DOWNLOADING){E.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(r){throw new u(d.ERROR,r.message)}return!0}return!0}return n!==w.AVAILABLE?(E.debug(`On-device inference unavailable because availability is "${n}".`),!1):_.isOnDeviceRequest(e)?!0:(E.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(_.toLanguageModelMessage)),r=await n.prompt(s,this.onDeviceParams.promptOptions);return _.toResponse(r)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(_.toLanguageModelMessage)),r=n.promptStreaming(s,this.onDeviceParams.promptOptions);return _.toStreamResponse(r)}async countTokens(e){throw new u(d.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return E.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return E.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if("inlineData"in s&&s.inlineData&&_.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return E.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===w.DOWNLOADABLE||n===w.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=r=>{r.addEventListener("downloadprogress",i=>{e(i.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(_.toLanguageModelMessageContent));return{role:_.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if("text"in e&&typeof e.text=="string")return{type:"text",value:e.text};if("inlineData"in e&&e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new u(d.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new u(d.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(n.encode(`data: ${i}

`))}}))}}}_.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Gn(t,e,n){const r=(e||$e()).LanguageModel;if(r&&t)return new _(r,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s,r,i){this.app=e,this.backend=n,this.chromeAdapterFactory=i;const a=r==null?void 0:r.getImmediate({optional:!0}),o=s==null?void 0:s.getImmediate({optional:!0});this.auth=o||null,this.appCheck=a||null}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,{instanceIdentifier:e}){if(!e)throw new u(d.ERROR,"AIService instance identifier is undefined.");const n=Un(e),s=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Vn(s,n,r,i,Gn)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){var n,s,r,i,a,o,c;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((i=(r=t.app)==null?void 0:r.options)!=null&&i.projectId){if(!((o=(a=t.app)==null?void 0:a.options)!=null&&o.appId))throw new u(d.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new u(d.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new u(d.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,backend:t.backend};if(gn(t.app)&&t.app.settings.appCheckToken){const l=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:l})}else t.appCheck&&((c=t.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n){this._apiSettings=jn(e),this.model=$.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===R.GOOGLE_AI?$.normalizeGoogleAIModelName(e):$.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="Timeout has expired.",X="AbortError";class zn{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${Ln}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function qn(t){const e=[];return e.push(`${kn}/${Ce}`),e.push(`fire/${Ce}`),(t.params.apiSettings.inferenceMode===I.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===I.PREFER_IN_CLOUD)&&e.push($n),e.join(" ")}async function Yn(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",qn(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&E.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function oe(t,e){var l,p;const n=new zn(t);let s;const r=(l=t.singleRequestOptions)==null?void 0:l.signal,i=((p=t.singleRequestOptions)==null?void 0:p.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:xn,a=new AbortController,o=setTimeout(()=>{a.abort(new DOMException(Wn,X)),E.debug(`Aborting request to ${n} due to timeout (${i}ms)`)},i),c=AbortSignal.any(r?[r,a.signal]:[a.signal]);if(r&&r.aborted)throw clearTimeout(o),new DOMException(r.reason??"Aborted externally before fetch",X);try{const h={method:"POST",headers:await Yn(n),signal:c,body:e};if(s=await fetch(n.toString(),h),!s.ok){let g="",f;try{const b=await s.json();g=b.error.message,b.error.details&&(g+=` ${JSON.stringify(b.error.details)}`,f=b.error.details)}catch{}throw s.status===403&&f&&f.some(b=>b.reason==="SERVICE_DISABLED")&&f.some(b=>{var he,fe;return(fe=(he=b.links)==null?void 0:he[0])==null?void 0:fe.description.includes("Google developers console API activation")})?new u(d.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:f}):new u(d.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${g}`,{status:s.status,statusText:s.statusText,errorDetails:f})}}catch(h){let g=h;throw h.code!==d.FETCH_ERROR&&h.code!==d.API_NOT_ENABLED&&h instanceof Error&&h.name!==X&&(g=new u(d.ERROR,`Error fetching from ${n.toString()}: ${h.message}`),g.stack=h.stack),g}finally{clearTimeout(o)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&E.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Je(t.candidates[0]))throw new u(d.RESPONSE_ERROR,`Response error: ${N(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function O(t){return"type"in t&&t.type?t:t.text!==void 0?{...t,type:"text"}:t.inlineData!==void 0?{...t,type:"inlineData"}:t.functionCall!==void 0?{...t,type:"functionCall"}:t.functionResponse!==void 0?{...t,type:"functionResponse"}:t.fileData!==void 0?{...t,type:"fileData"}:t.executableCode!==void 0?{...t,type:"executableCode"}:t.codeExecutionResult!==void 0?{...t,type:"codeExecutionResult"}:t}function H(t,e=A.IN_CLOUD){var s;if(t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0),t.candidates)for(const r of t.candidates)(s=r.content)!=null&&s.parts&&(r.content.parts=r.content.parts.map(O));const n=Jn(t);return n.inferenceSource=e,n}function Jn(t){return t.text=()=>{if(B(t))return Ae(t,e=>!("thought"in e&&e.thought));if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Text not available. ${N(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(B(t)){const e=Ae(t,n=>!!("thought"in n&&n.thought));return e===""?void 0:e}else if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Thought summary not available. ${N(t)}`,{response:t})},t.inlineDataParts=()=>{if(B(t))return Kn(t);if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Data not available. ${N(t)}`,{response:t})},t.functionCalls=()=>{if(B(t))return Ye(t);if(t.promptFeedback)throw new u(d.RESPONSE_ERROR,`Function call not available. ${N(t)}`,{response:t})},t}function Ae(t,e){var s,r,i,a;const n=[];if((r=(s=t.candidates)==null?void 0:s[0].content)!=null&&r.parts)for(const o of(a=(i=t.candidates)==null?void 0:i[0].content)==null?void 0:a.parts){const c=O(o);c.type==="text"&&e(c)&&n.push(c.text)}return n.length>0?n.join(""):""}function Ye(t){var n,s,r,i;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(i=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:i.parts){const o=O(a);o.type==="functionCall"&&e.push(o.functionCall)}if(e.length>0)return e}function Kn(t){var n,s,r,i;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(i=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:i.parts){const o=O(a);o.type==="inlineData"&&e.push(o)}if(e.length>0)return e}const Xn=[y.RECITATION,y.SAFETY,y.BLOCKLIST,y.PROHIBITED_CONTENT,y.SPII,y.MALFORMED_FUNCTION_CALL,y.IMAGE_SAFETY,y.IMAGE_PROHIBITED_CONTENT,y.IMAGE_OTHER,y.NO_IMAGE,y.IMAGE_RECITATION,y.LANGUAGE,y.UNEXPECTED_TOOL_CALL,y.TOO_MANY_TOOL_CALLS,y.MISSING_THOUGHT_SIGNATURE,y.MALFORMED_RESPONSE];function Je(t){return!!t.finishReason&&Xn.some(e=>e===t.finishReason)}function N(t){var n,s,r;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((r=t.candidates)!=null&&r[0]){const i=t.candidates[0];Je(i)&&(e+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(e+=`: ${i.finishMessage}`))}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{type:"text",text:t}]};if(t.type==="text"||"text"in t&&typeof t.text=="string")return{role:"system",parts:[v(O(t))]};if(t.parts){const e=t.parts.map(n=>v(O(n)));return t.role?{...t,parts:e}:{role:"system",parts:e}}}}function k(t){let e=[];if(typeof t=="string")e=[{type:"text",text:t}];else for(const n of t)typeof n=="string"?e.push({type:"text",text:n}):e.push(v(O(n)));return Qn(e)}function Qn(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const r of t)r.type==="functionResponse"||"functionResponse"in r?s=!0:n=!0,e.parts.push(r);if(n&&s)throw new u(d.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new u(d.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function Q(t){let e;if(t.contents){const n=t;e={...n,contents:n.contents.map(s=>({...s,parts:s.parts?s.parts.map(O):[]}))}}else e={contents:[k(t)]};return t.systemInstruction&&(e.systemInstruction=ce(t.systemInstruction)),e}function Zn(t){return t.parts&&Array.isArray(t.parts)?{...t,parts:t.parts.map(le)}:t}function le(t){let e;if("type"in t){const{type:n,...s}=t;e=s}else e=t;return e.functionResponse&&(e={...e,functionResponse:Zn(e.functionResponse)}),e}function de(t){return t.parts?{...t,parts:t.parts.map(le)}:t}function Ke(t){return t==null||typeof t=="string"?t:"parts"in t&&Array.isArray(t.parts)?de(t):le(t)}function Xe(t){const e={...t};return e.contents&&(e.contents=e.contents.map(de)),e.systemInstruction&&(e.systemInstruction=Ke(e.systemInstruction)),e}function es(t){const e={...t};return e.contents&&(e.contents=e.contents.map(de)),e.systemInstruction&&(e.systemInstruction=Ke(e.systemInstruction)),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new u(d.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(E.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function ue(t){return{candidates:t.candidates?ns(t.candidates):void 0,prompt:t.promptFeedback?ss(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function ts(t,e){return{generateContentRequest:{model:e,...t}}}function ns(t){const e=[];let n;return e&&t.forEach(s=>{var a,o;let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>({...c,severity:c.severity??je.HARM_SEVERITY_UNSUPPORTED,probabilityScore:c.probabilityScore??0,severityScore:c.severityScore??0}))),(o=(a=s.content)==null?void 0:a.parts)!=null&&o.some(c=>"videoMetadata"in c&&c.videoMetadata))throw new u(d.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(i)}),e}function ss(t){const e=[];return t.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??je.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function rs(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=cs(s),[i,a]=r.tee(),{response:o,firstValue:c}=await is(a,e,n);return{stream:os(i,e,n),response:o,firstValue:c}}async function is(t,e,n){const[s,r]=t.tee(),i=s.getReader(),{value:a}=await i.read();return{firstValue:a,response:as(r,e,n)}}async function as(t,e,n){const s=[],r=t.getReader();for(;;){const{done:i,value:a}=await r.read();if(i){let o=ls(s);return e.backend.backendType===R.GOOGLE_AI&&(o=ue(o)),H(o,n)}s.push(a)}}async function*os(t,e,n){var r,i;const s=t.getReader();for(;;){const{value:a,done:o}=await s.read();if(o)break;let c;e.backend.backendType===R.GOOGLE_AI?c=H(ue(a),n):c=H(a,n);const l=(r=c.candidates)==null?void 0:r[0];!((i=l==null?void 0:l.content)!=null&&i.parts)&&!(l!=null&&l.finishReason)&&!(l!=null&&l.citationMetadata)&&!(l!=null&&l.urlContextMetadata)||(yield c)}}function cs(t){const e=t.getReader();return new ReadableStream({start(s){let r="";return i();function i(){return e.read().then(({value:a,done:o})=>{if(o){if(r.trim()){s.error(new u(d.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=a;let c=r.match(Te),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new u(d.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(l),r=r.substring(c[0].length),c=r.match(Te)}return i()})}}})}function ls(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const r of s.candidates){const i=r.index||0;n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:r.index}),n.candidates[i].citationMetadata=r.citationMetadata,n.candidates[i].finishReason=r.finishReason,n.candidates[i].finishMessage=r.finishMessage,n.candidates[i].safetyRatings=r.safetyRatings,n.candidates[i].groundingMetadata=r.groundingMetadata;const a=r.urlContextMetadata;if(typeof a=="object"&&a!==null&&Object.keys(a).length>0&&(n.candidates[i].urlContextMetadata=a),r.content){if(!r.content.parts)continue;n.candidates[i].content||(n.candidates[i].content={role:r.content.role||"user",parts:[]});for(const o of r.content.parts){if("text"in o&&o.text==="")continue;if(Object.keys(o).length===0)throw new u(d.INVALID_CONTENT,"Part should have at least one property, but there are none. This is likely caused by a malformed response from the backend.");const c=O({...o});Object.keys(c).length>0&&n.candidates[i].content.parts.push(c)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=[d.FETCH_ERROR,d.ERROR,d.API_NOT_ENABLED];async function Ze(t,e,n,s){if(!e)return{response:await s(),inferenceSource:A.IN_CLOUD};switch(e.mode){case I.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:A.ON_DEVICE};throw new u(d.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case I.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:A.IN_CLOUD};case I.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:A.IN_CLOUD}}catch(r){if(r instanceof u&&ds.includes(r.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:A.ON_DEVICE};throw r}case I.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:A.ON_DEVICE}:{response:await s(),inferenceSource:A.IN_CLOUD};default:throw new u(d.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e,n,s){return n=Xe(n),t.backend.backendType===R.GOOGLE_AI&&(n=Qe(n)),oe({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function et(t,e,n,s,r){const i=await Ze(n,s,()=>s.generateContentStream(n),()=>us(t,e,n,r));return rs(i.response,t,i.inferenceSource)}async function hs(t,e,n,s){return n=Xe(n),t.backend.backendType===R.GOOGLE_AI&&(n=Qe(n)),oe({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function tt(t,e,n,s,r){const i=await Ze(n,s,()=>s.generateContent(n),()=>hs(t,e,n,r)),a=await fs(i.response,t);return{response:H(a,i.inferenceSource)}}async function fs(t,e){const n=await t.json();return e.backend.backendType===R.GOOGLE_AI?ue(n):n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="SILENT_ERROR",Ne=10;class ps{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,v(this._history).map(e=>({...e,parts:e.parts?e.parts.map(O):[]}))}async _sendMessage(e,n){let s={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{var c,l,p;let i,a=0;const o=((c=this.requestOptions)==null?void 0:c.maxSequentialFunctionCalls)??Ne;do{let h;if(i){a++;const b=await this._callFunctionsAsNeeded(i);h=k(b)}else h=k(e);const g=this._formatRequest(h,[...r]);r.push(h);const f=await this._callGenerateContent(g,n);if(f)if(s=f,i=this._getCallableFunctionCalls(f.response),f.response.candidates&&f.response.candidates.length>0){const b={parts:((l=f.response.candidates)==null?void 0:l[0].content.parts)||[],role:((p=f.response.candidates)==null?void 0:p[0].content.role)||"model"};r.push(v(b))}else{const b=N(f.response);b&&E.warn(`sendMessage() was unsuccessful. ${b}. Inspect response object for details.`)}else i=void 0}while(i&&a<o);i&&a>=o&&E.warn(`Automatic function calling exceeded the limit of ${o} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],i=(async()=>{var p;let a,o=0;const c=((p=this.requestOptions)==null?void 0:p.maxSequentialFunctionCalls)??Ne;let l;do{let h;if(a){o++;const f=await this._callFunctionsAsNeeded(a);h=k(f)}else h=k(e);const g=this._formatRequest(h,[...s]);if(s.push(h),l=await this._callGenerateContentStream(g,n),a=this._getCallableFunctionCalls(l.firstValue),a&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const f={...l.firstValue.candidates[0].content};f.role||(f.role="model"),s.push(f)}}while(a&&o<c);return a&&o>=c&&E.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(a=>{throw new Error(De)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history=this._history.concat(s);const o={...a.candidates[0].content};o.role||(o.role="model"),this._history.push(v(o))}else{const o=N(a);o&&E.warn(`sendMessageStream() was unsuccessful. ${o}. Inspect response object for details.`)}}).catch(a=>{a.message!==De&&a.name!=="AbortError"&&E.error(a)}),i}_getCallableFunctionCalls(e){var r,i,a;const n=(i=(r=this.params)==null?void 0:r.tools)==null?void 0:i.find(o=>o.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=Ye(e);if(s){for(const o of s)if(!((a=n.functionDeclarations)==null?void 0:a.some(l=>l.name===o.name&&typeof l.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var i,a;const n=[],s=[],r=(a=(i=this.params)==null?void 0:i.tools)==null?void 0:a.find(o=>o.functionDeclarations);if(r&&r.functionDeclarations){for(const c of e){const l=r.functionDeclarations.find(p=>p.name===c.name);if(l!=null&&l.functionReference){const p=Promise.resolve(l.functionReference(c.args)).catch(h=>{const g=new u(d.ERROR,`Error in user-defined function "${l.name}": ${h.message}`);throw g.stack=h.stack,g});n.push({name:c.name,id:c.id,results:p}),s.push(p)}}await Promise.all(s);const o=[];for(const{name:c,id:l,results:p}of n){const h={name:c,response:await p};l&&(h.id=l),o.push({type:"functionResponse",functionResponse:h})}return o}else throw new u(d.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],gs={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},ve={user:["model"],function:["model"],model:["user","function"],system:[]};function Es(t){let e=null;for(const n of t){const{role:s,parts:r}=n;if(!e&&s!=="user")throw new u(d.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!Re.includes(s))throw new u(d.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Re)}`);if(!Array.isArray(r))throw new u(d.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new u(d.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const o of r){if(o.type)i[o.type]+=1;else for(const c of["text","inlineData","functionCall","functionResponse","fileData","executableCode","codeExecutionResult"])c in o&&(i[c]+=1);"thought"in o&&o.thought&&(i.thought+=1),"thoughtSignature"in o&&o.thoughtSignature&&(i.thoughtSignature+=1)}const a=gs[s];for(const o of ms)if(!a.includes(o)&&i[o]>0)throw new u(d.INVALID_CONTENT,`Content with role '${s}' can't contain '${o}' part`);if(e&&!ve[s].includes(e.role))throw new u(d.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(ve)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ps{constructor(e,n,s,r,i){var a;super(e,r,i),this.model=n,this.chromeAdapter=s,this.params=r,this.requestOptions=i,r!=null&&r.history&&(Es(r.history),this._history=v(r.history)),((a=this.params)==null?void 0:a.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:ce(this.params.systemInstruction)})}_formatRequest(e,n){var s,r,i,a,o;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(r=this.params)==null?void 0:r.generationConfig,tools:(i=this.params)==null?void 0:i.tools,toolConfig:(a=this.params)==null?void 0:a.toolConfig,systemInstruction:(o=this.params)==null?void 0:o.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return tt(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return et(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e,n,s){n=es(n);let r="";if(t.backend.backendType===R.GOOGLE_AI){const a=ts(n,e);r=JSON.stringify(a)}else r=JSON.stringify(n);return(await oe({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},r)).json()}async function _s(t,e,n,s,r){if((s==null?void 0:s.mode)===I.ONLY_ON_DEVICE)throw new u(d.UNSUPPORTED,"countTokens() is not supported for on-device models.");return ys(t,e,n,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends ${constructor(e,n,s,r){super(e,n.model),this.chromeAdapter=r,this.generationConfig=n.generationConfig||{},Os(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=ce(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===I.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===w.UNAVAILABLE){const s=new u(d.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===I.ONLY_ON_DEVICE)throw s;E.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=Q(e);return tt(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=Q(e),{stream:r,response:i}=await et(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:r,response:i}}startChat(e){return new bs(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=Q(e);return _s(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function Os(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new u(d.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new u(d.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new u(d.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t=_n(),e){t=Et(t);const n=mn(t,M),s=(e==null?void 0:e.backend)??new j,r={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},i=Bn(s),a=n.getImmediate({identifier:i});return a.options=r,a}const Ss=["mode","onDeviceParams","inCloudParams"];function Cs(t,e,n){var o;const s=e;let r;if(s.mode){for(const c of Object.keys(e))Ss.includes(c)||E.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${c}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=s.inCloudParams||{model:Fn}}else r=e;if(!r.model)throw new u(d.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=(o=t.chromeAdapterFactory)==null?void 0:o.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),a=new Is(t,r,n,i);return a._apiSettings.inferenceMode=s.mode,a}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(){G(new x(M,Hn,"PUBLIC").setMultipleInstances(!0)),P(Se,ie),P(Se,ie,"esm2020")}Rs();const As={},Ts=As,Ds=Ts.VITE_GEMINI_MODEL||"gemini-3.5-flash";async function Ns(){throw new Error("Gemini isn’t set up for this build of Minted yet.")}const vs=t=>({role:t.role,parts:[{type:"text",text:t.text}]}),Ps={kind:"cloud",async stream(t,e,n,s){const r=ws(await Ns(),{backend:new j}),i=Cs(r,{model:Ds,generationConfig:{temperature:.4,maxOutputTokens:1024}}),a=e[e.length-1],o=i.startChat({systemInstruction:t,history:e.slice(0,-1).map(vs)});let c="";try{const l=await o.sendMessageStream(a.text);for await(const p of l.stream){if(s.aborted)break;const h=p.text();h&&(c+=h,n(c))}}catch(l){if(s.aborted)return c;const p=l.message??"";throw/429|quota|exhausted/i.test(p)?new Error("Gemini is busy right now (free limit reached). Try again in a minute."):/api[ -_]?key|40[03]|permission|not enabled/i.test(p)?new Error("Gemini isn’t set up correctly for this build of Minted."):/network|fetch|offline/i.test(p)?new Error("Can’t reach Gemini. Check your connection."):new Error("Gemini couldn’t answer that. Try again.")}return c}};export{Ps as cloudEngine};
