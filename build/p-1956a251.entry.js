import{r as e,h as r}from"./p-8699d455.js";const a=class{constructor(r){e(this,r),this.variant="system",this.icon=null}render(){return r("div",{class:{alert__header:!0,[`alert__header--${this.variant}`]:!0}},this.icon&&r("bds-icon",{theme:"outline",size:"x-large",color:"#fff",name:this.icon}),r("bds-typo",{variant:"fs-16",bold:"bold"},r("slot",null)))}};a.style='@charset "UTF-8";.alert__header{width:100%;min-height:64px;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.alert__header bds-icon{min-width:32px}.alert__header bds-typo{margin-left:8px;color:#ffffff}.alert__header--system{background:#2cc3d5}.alert__header--error{background:#ff5a60}.alert__header--warning{background:#f9b42f}.alert__header--delete{background:#ff5a60}';export{a as bds_alert_header}