define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wd/checkWrong'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMjmY32';
	this._flag_='5c85287168a17ea1b3849a7656906278';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"标准答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest1CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"标准答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option_element":{"define":"option_element","label":"选项","name":"option_element","relation":"option_element","type":"String"},"option_key":{"define":"option_key","label":"字母","name":"option_key","relation":"option_key","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2_optionCustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2_option"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"answer":{"define":"answer","label":"标准答案","name":"answer","relation":"answer","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest3CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option_element":{"define":"option_element","label":"内容","name":"option_element","relation":"option_element","type":"String"},"option_key":{"define":"option_key","label":"选项","name":"option_key","relation":"option_key","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest3_optionCustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest3_option"});
}}); 
return __result;});