window.__justep.__ResourceEngine.loadCss([{url: '/v_04e2f92ba98347a59590d73b82eb23b0l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_ad61e845a17c494f8e7ce4dd8f05805bl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ce28da12618049e1bcc9bc737e86e885l_zh_CNs_d_m/system/core.min.js','/v_75bdbc0e1fe440ecb5bbf5574cfabe2dl_zh_CNs_d_m/system/common.min.js','/v_e40b2e1103b643898b476801108480bal_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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