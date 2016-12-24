define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.cartShopDataCustomRefresh = function(event){
		var url=require.toUrl('./json/cartShopData.json');
		$.ajaxSettings.async=false;
		$.getJSON(url,function(data){
			event.source.loadData(data);
		});
	};

	Model.prototype.cartGoodsDataCustomRefresh = function(event){
		var url=require.toUrl('./json/cartGoodsData.json');
		$.ajaxSettings.async=false;
		$.getJSON(url,function(data){
			event.source.loadData(data);
		});
	};

	return Model;
});