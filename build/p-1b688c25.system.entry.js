var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(t){o(t)}}function a(e){try{l(n["throw"](e))}catch(t){o(t)}}function l(e){e.done?i(e.value):r(e.value).then(s,a)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(a){s=[6,a];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-35e41f66.system.js"],(function(e){"use strict";var t,i,n,r;return{setters:[function(e){t=e.r;i=e.h;n=e.c;r=e.H}],execute:function(){var o;(function(e){e["Default"]="default";e["Warning"]="warning";e["Delete"]="delete"})(o||(o={}));var s='@charset "UTF-8";.counter-text{background:#e7eef1;color:#8ca0b3;-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:#2cc3d5;color:#f5f8f9}.counter-text--warning{background:#f9b42f;color:#f5f8f9}.counter-text--delete{background:#ff5a60;color:#f5f8f9}';var a=e("bds_counter_text",function(){function e(e){t(this,e);this.active=false;this.warning={max:20,min:2};this.delete={max:1,min:0}}e.prototype.getState=function(){var e=this.getActualLength();if(e>=this.warning.min&&e<=this.warning.max){return o.Warning}if(e<=this.delete.max){return o.Delete}return o.Default};e.prototype.getActualLength=function(){return this.max-this.length};e.prototype.render=function(){var e;var t=this.getState();var n=this.getActualLength();return i("div",{class:(e={"counter-text":true,"counter-text--active":this.active},e["counter-text--"+t]=true,e)},i("bds-typo",{variant:"fs-10"},n))};return e}());a.style=s;var l='@charset "UTF-8";:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 8px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid #2cc3d5;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid #2cc3d5;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ade7ee;box-shadow:0 0 0 2px #ade7ee}.input--state-primary .input__icon{color:#2cc3d5;background-color:#daf2f4}.input--state-primary .input__container__label{color:#8ca0b3}.input--state-primary .input__container__label--pressed{color:#2cc3d5}.input--state-primary .input__container__text{caret-color:#2cc3d5;color:#56616e}.input--state-danger{border:1px solid #ff5a60;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid #ff5a60;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid #ff5a60;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ff7b80;box-shadow:0 0 0 2px #ff7b80}.input--state-danger .input__icon{color:#ff5a60;background-color:#ffd6d7}.input--state-danger .input__container__label{color:#8ca0b3}.input--state-danger .input__container__label--pressed{color:#ff5a60}.input--state-danger .input__container__text{caret-color:#ff5a60;color:#56616e}.input--state-disabled{cursor:not-allowed;border:1px solid #dee8ec;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f5f8f9}.input--state-disabled:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #dee8ec;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #dee8ec;box-shadow:0 0 0 2px #dee8ec}.input--state-disabled .input__icon{color:#b9cbd3;background-color:#e7eef1}.input--state-disabled .input__container__label{color:#b9cbd3}.input--state-disabled .input__container__label--pressed{color:#b9cbd3}.input--state-disabled .input__container__text{caret-color:#b9cbd3;color:#b9cbd3}.input--label{padding:7px 8px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar-track{border-left:1px solid #e7eef1}.input__container__text::-webkit-scrollbar{width:12px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:20px;left:0px;position:absolute;bottom:-22px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px}.input__message--danger{color:#ff5a60}';var u=e("bds_input",function(){function e(e){var i=this;t(this,e);this.isPressed=false;this.isPassword=false;this.inputName="";this.type="text";this.label="";this.placeholder="";this.autoCapitalize="off";this.autoComplete="off";this.readonly=false;this.helperMessage="";this.errorMessage="";this.icon="";this.disabled=false;this.danger=false;this.value="";this.counterLength=false;this.counterLengthRule={};this.isSubmit=false;this.isTextarea=false;this.rows=1;this.cols=0;this.keyPressWrapper=function(e){switch(e.key){case"Enter":i.bdsSubmit.emit({event:e,value:i.value});if(i.isSubmit){i.value="";e.preventDefault()}break}};this.onInput=function(e){var t=e.target;if(t){i.value=t.value||""}i.bdsInput.emit(e)};this.onBlur=function(){i.isPressed=false;i.bdsOnBlur.emit()};this.onFocus=function(){i.isPressed=true;i.bdsFocus.emit()};this.onClickWrapper=function(){i.onFocus();if(i.nativeInput){i.nativeInput.focus()}};this.bdsChange=n(this,"bdsChange",7);this.bdsInput=n(this,"bdsInput",7);this.bdsOnBlur=n(this,"bdsOnBlur",7);this.bdsFocus=n(this,"bdsFocus",7);this.bdsSubmit=n(this,"bdsSubmit",7)}e.prototype.valueChanged=function(){this.bdsChange.emit({value:this.value})};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.onClickWrapper();return[2]}))}))};e.prototype.removeFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.onBlur();return[2]}))}))};e.prototype.getInputElement=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.nativeInput]}))}))};e.prototype.renderIcon=function(){return this.icon&&i("div",{class:{input__icon:true,"input__icon--large":!!this.label}},i("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))};e.prototype.renderLabel=function(){return this.label&&i("label",{class:{input__container__label:true,"input__container__label--pressed":this.isPressed&&!this.disabled}},i("bds-typo",{variant:"fs-12",bold:"bold"},this.label))};e.prototype.renderMessage=function(){var e=this.danger?"error":"info";var t=this.danger?this.errorMessage:this.helperMessage;var n=this.danger?"input__message input__message--danger":"input__message";if(this.danger&&this.errorMessage||!this.danger&&this.helperMessage){return i("div",{class:n},i("div",{class:"input__message__icon"},i("bds-icon",{size:"x-small",name:e,theme:"solid",color:"inherit"})),i("bds-typo",{variant:"fs-12"},t))}return undefined};e.prototype.render=function(){var e=this.isPressed&&!this.disabled;var t=this.isTextarea?"textarea":"input";return i(r,{"aria-disabled":this.disabled?"true":null},i("div",{class:{input:true,"input--state-primary":!this.danger,"input--state-danger":this.danger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":e},onClick:this.onClickWrapper,onKeyPress:this.keyPressWrapper},this.renderIcon(),i("div",{class:"input__container"},this.renderLabel(),i(t,{class:"input__container__text",rows:this.rows,cols:this.cols,autocapitalize:this.autoCapitalize,autocomplete:this.autoComplete,disabled:this.disabled,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,name:this.inputName,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.onInput,placeholder:this.placeholder,readOnly:this.readonly,type:this.type,value:this.value})),this.counterLength&&i("bds-counter-text",Object.assign({length:this.value.length,max:this.maxlength,active:e},this.counterLengthRule)),i("slot",{name:"input-right"}),this.renderMessage()))};Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:true,configurable:true});return e}());u.style=l}}}));