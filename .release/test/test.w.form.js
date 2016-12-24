define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/timer/timer');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/wd/test'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJjqy6f';
	this._flag_='604ce578eb92a085ddf40c3e8be6634e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选中","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest1CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"item":{"define":"item","label":"项目","name":"item","relation":"item","type":"String"},"value":{"define":"value","label":"值","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"item","initData":"[{\"item\":\"正确\",\"value\":\"1\"},{\"item\":\"错误\",\"value\":\"0\"}]","limit":20,"xid":"radioSet1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选择","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选中","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option_element":{"define":"option_element","label":"选项","name":"option_element","relation":"option_element","type":"String"},"option_key":{"define":"option_key","label":"字母","name":"option_key","relation":"option_key","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest2_optionCustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest2_option"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选择","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"题面","name":"title","relation":"title","type":"String"},"type":{"define":"type","label":"类型","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest3CustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest3"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","label":"选择","name":"checked","relation":"checked","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"option_element":{"define":"option_element","label":"内容","name":"option_element","relation":"option_element","type":"String"},"option_key":{"define":"option_key","label":"选项","name":"option_key","relation":"option_key","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"AllTest3_optionCustomRefresh"},"idColumn":"id","limit":20,"xid":"AllTest3_option"});
}}); 
return __result;});