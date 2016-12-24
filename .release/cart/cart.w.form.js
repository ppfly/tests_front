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
var __parent0=require('$model/UI2/wd/cart'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyaauQf';
	this._flag_='dac71ead0351e98e0a6bc55e4ead61f5';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fShopName":{"define":"fShopName","label":"商户名","name":"fShopName","relation":"fShopName","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"cartShopDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"cartShopData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fGoodsID":{"define":"fGoodsID","label":"商品ID","name":"fGoodsID","relation":"fGoodsID","type":"String"},"fImg":{"define":"fImg","label":"图片","name":"fImg","relation":"fImg","type":"String"},"fNumber":{"define":"fNumber","label":"数量","name":"fNumber","relation":"fNumber","type":"String"},"fOldPrice":{"define":"fOldPrice","label":"原价","name":"fOldPrice","relation":"fOldPrice","type":"String"},"fPrice":{"define":"fPrice","label":"价格","name":"fPrice","relation":"fPrice","type":"String"},"fShopID":{"define":"fShopID","label":"商户ID","name":"fShopID","relation":"fShopID","type":"String"},"fSize":{"define":"fSize","label":"型号","name":"fSize","relation":"fSize","type":"String"},"fTitle":{"define":"fTitle","label":"商品名","name":"fTitle","relation":"fTitle","type":"String"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"cartGoodsDataCustomRefresh"},"idColumn":"id","limit":20,"xid":"cartGoodsData"});
}}); 
return __result;});