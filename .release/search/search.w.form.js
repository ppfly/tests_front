define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wd/search'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFj2iui';
	this._flag_='6630af2378fecd2d704974a2fd67c8d7';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClassName":{"define":"fClassName","label":"分类名","name":"fClassName","relation":"fClassName","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"classDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"classData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选择","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option":{"define":"option","label":"单选项","name":"option","relation":"option","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option_element":{"define":"option_element","label":"选项","name":"option_element","relation":"option_element","type":"String"},"option_key":{"define":"option_key","label":"字母","name":"option_key","relation":"option_key","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2_optionCustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2_option"});
}}); 
return __result;});