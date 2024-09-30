(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2552,8366,3406],{"./node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>LayoutGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children,id,inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender})),[key]);return(0,jsx_runtime.jsx)(LayoutGroupContext.p.Provider,{value:memoizedContext,children})}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./node_modules/sprintf-js/src/sprintf.js":(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var re={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(key){return function sprintf_format(parse_tree,argv){var arg,i,k,match,pad,pad_character,pad_length,is_positive,sign,cursor=1,tree_length=parse_tree.length,output="";for(i=0;i<tree_length;i++)if("string"==typeof parse_tree[i])output+=parse_tree[i];else if(Array.isArray(parse_tree[i])){if((match=parse_tree[i])[2])for(arg=argv[cursor],k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k]))throw new Error(sprintf('[sprintf] property "%s" does not exist',match[2][k]));arg=arg[match[2][k]]}else arg=match[1]?argv[match[1]]:argv[cursor++];if(re.not_type.test(match[8])&&re.not_primitive.test(match[8])&&arg instanceof Function&&(arg=arg()),re.numeric_arg.test(match[8])&&"number"!=typeof arg&&isNaN(arg))throw new TypeError(sprintf("[sprintf] expecting number but found %T",arg));switch(re.number.test(match[8])&&(is_positive=arg>=0),match[8]){case"b":arg=parseInt(arg,10).toString(2);break;case"c":arg=String.fromCharCode(parseInt(arg,10));break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?parseFloat(arg).toExponential(match[7]):parseFloat(arg).toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?String(Number(arg.toPrecision(match[7]))):parseFloat(arg);break;case"o":arg=(parseInt(arg,10)>>>0).toString(8);break;case"s":arg=String(arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"t":arg=String(!!arg),arg=match[7]?arg.substring(0,match[7]):arg;break;case"T":arg=Object.prototype.toString.call(arg).slice(8,-1).toLowerCase(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=parseInt(arg,10)>>>0;break;case"v":arg=arg.valueOf(),arg=match[7]?arg.substring(0,match[7]):arg;break;case"x":arg=(parseInt(arg,10)>>>0).toString(16);break;case"X":arg=(parseInt(arg,10)>>>0).toString(16).toUpperCase()}re.json.test(match[8])?output+=arg:(!re.number.test(match[8])||is_positive&&!match[3]?sign="":(sign=is_positive?"+":"-",arg=arg.toString().replace(re.sign,"")),pad_character=match[4]?"0"===match[4]?"0":match[4].charAt(1):" ",pad_length=match[6]-(sign+arg).length,pad=match[6]&&pad_length>0?pad_character.repeat(pad_length):"",output+=match[5]?sign+arg+pad:"0"===pad_character?sign+pad+arg:pad+sign+arg)}return output}(function sprintf_parse(fmt){if(sprintf_cache[fmt])return sprintf_cache[fmt];var match,_fmt=fmt,parse_tree=[],arg_names=0;for(;_fmt;){if(null!==(match=re.text.exec(_fmt)))parse_tree.push(match[0]);else if(null!==(match=re.modulo.exec(_fmt)))parse_tree.push("%");else{if(null===(match=re.placeholder.exec(_fmt)))throw new SyntaxError("[sprintf] unexpected placeholder");if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if(null===(field_match=re.key.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(field_list.push(field_match[1]);""!==(replacement_field=replacement_field.substring(field_match[0].length));)if(null!==(field_match=re.key_access.exec(replacement_field)))field_list.push(field_match[1]);else{if(null===(field_match=re.index_access.exec(replacement_field)))throw new SyntaxError("[sprintf] failed to parse named argument key");field_list.push(field_match[1])}match[2]=field_list}else arg_names|=2;if(3===arg_names)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");parse_tree.push(match)}_fmt=_fmt.substring(match[0].length)}return sprintf_cache[fmt]=parse_tree}(key),arguments)}function vsprintf(fmt,argv){return sprintf.apply(null,[fmt].concat(argv||[]))}var sprintf_cache=Object.create(null);exports.sprintf=sprintf,exports.vsprintf=vsprintf,"undefined"!=typeof window&&(window.sprintf=sprintf,window.vsprintf=vsprintf,void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return{sprintf,vsprintf}}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()},"./node_modules/tannin/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var PRECEDENCE,OPENERS,TERMINATORS,PATTERN;__webpack_require__.d(__webpack_exports__,{Z:()=>Tannin}),PRECEDENCE={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},OPENERS=["(","?"],TERMINATORS={")":["("],":":["?","?:"]},PATTERN=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var OPERATORS={"!":function(a){return!a},"*":function(a,b){return a*b},"/":function(a,b){return a/b},"%":function(a,b){return a%b},"+":function(a,b){return a+b},"-":function(a,b){return a-b},"<":function(a,b){return a<b},"<=":function(a,b){return a<=b},">":function(a,b){return a>b},">=":function(a,b){return a>=b},"==":function(a,b){return a===b},"!=":function(a,b){return a!==b},"&&":function(a,b){return a&&b},"||":function(a,b){return a||b},"?:":function(a,b,c){if(a)throw b;return c}};function compile(expression){var terms=function postfix(expression){for(var match,operator,term,element,terms=[],stack=[];match=expression.match(PATTERN);){for(operator=match[0],(term=expression.substr(0,match.index).trim())&&terms.push(term);element=stack.pop();){if(TERMINATORS[operator]){if(TERMINATORS[operator][0]===element){operator=TERMINATORS[operator][1]||operator;break}}else if(OPENERS.indexOf(element)>=0||PRECEDENCE[element]<PRECEDENCE[operator]){stack.push(element);break}terms.push(element)}TERMINATORS[operator]||stack.push(operator),expression=expression.substr(match.index+operator.length)}return(expression=expression.trim())&&terms.push(expression),terms.concat(stack.reverse())}(expression);return function(variables){return function evaluate(postfix,variables){var i,j,args,getOperatorResult,term,value,stack=[];for(i=0;i<postfix.length;i++){if(term=postfix[i],getOperatorResult=OPERATORS[term]){for(j=getOperatorResult.length,args=Array(j);j--;)args[j]=stack.pop();try{value=getOperatorResult.apply(null,args)}catch(earlyReturn){return earlyReturn}}else value=variables.hasOwnProperty(term)?variables[term]:+term;stack.push(value)}return stack[0]}(terms,variables)}}var DEFAULT_OPTIONS={contextDelimiter:"",onMissingKey:null};function Tannin(data,options){var key;for(key in this.data=data,this.pluralForms={},this.options={},DEFAULT_OPTIONS)this.options[key]=void 0!==options&&key in options?options[key]:DEFAULT_OPTIONS[key]}Tannin.prototype.getPluralForm=function(domain,n){var config,plural,pf,getPluralForm=this.pluralForms[domain];return getPluralForm||("function"!=typeof(pf=(config=this.data[domain][""])["Plural-Forms"]||config["plural-forms"]||config.plural_forms)&&(plural=function getPluralExpression(pf){var parts,i,part;for(parts=pf.split(";"),i=0;i<parts.length;i++)if(0===(part=parts[i].trim()).indexOf("plural="))return part.substr(7)}(config["Plural-Forms"]||config["plural-forms"]||config.plural_forms),pf=function pluralForms(expression){var evaluate=compile(expression);return function(n){return+evaluate({n})}}(plural)),getPluralForm=this.pluralForms[domain]=pf),getPluralForm(n)},Tannin.prototype.dcnpgettext=function(domain,context,singular,plural,n){var index,key,entry;return index=void 0===n?0:this.getPluralForm(domain,n),key=singular,context&&(key=context+this.options.contextDelimiter+singular),(entry=this.data[domain][key])&&entry[index]?entry[index]:(this.options.onMissingKey&&this.options.onMissingKey(singular,domain),0===index?singular:plural)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DYHFBFEH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useRadioStore});var UVQLZ7T5=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UVQLZ7T5.js"),_2GXGCHW6=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),D7EIQZAU=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D7EIQZAU.js"),EQQLU3CG=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/EQQLU3CG.js"),PBFD2E7P=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),_3YLGPPWQ=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/3YLGPPWQ.js");function createRadioStore(_a={}){var _a2,props=(0,_3YLGPPWQ.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,D7EIQZAU.t)((0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},props),{focusLoop:(0,PBFD2E7P.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)({},composite.getState()),{value:(0,PBFD2E7P.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,EQQLU3CG.MT)(initialState,composite,props.store);return(0,_3YLGPPWQ.EZ)((0,_3YLGPPWQ.ih)((0,_3YLGPPWQ.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,_2GXGCHW6.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,UVQLZ7T5.b)(store,update,props),(0,_2GXGCHW6.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/K7FXVWIT.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,x:()=>useRadio});var _SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3CCTMYB6.js"),_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/2GXGCHW6.js"),_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadio2(_a){var _b=_a,{store,name,value,checked}=_b,props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_2GXGCHW6_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves,activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange,onClick,onFocus}),props=(0,_3CCTMYB6_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store,clickOnEnter:!nativeRadio},props)),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.Nq)((0,_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props))})),Radio=(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.X$)((0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Radio2(props){const htmlProps=useRadio(props);return(0,_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)})))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hz:()=>useRadioProviderContext,Wh:()=>useRadioContext,o:()=>RadioScopedContextProvider});var _WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WENSINUV.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js").re)([_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_WENSINUV_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/SOKV3TSX.js"),_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/TW35PKTK.js"),_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/HKOOKEDE.js"),_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/Z32BISHQ.js"),_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/3YLGPPWQ.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/PBFD2E7P.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadioGroup2(_a){var _b=_a,{store}=_b,props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_Z32BISHQ_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_SOKV3TSX_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_TW35PKTK_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_3YLGPPWQ_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),RadioGroup=(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function RadioGroup2(props){const htmlProps=useRadioGroup(props);return(0,_chunks_HKOOKEDE_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))}}]);