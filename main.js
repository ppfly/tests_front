define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.goodsDataCustomRefresh = function(event){
		var url=require.toUrl('./json/goodsData.json');
		$.ajaxSettings.async=false;
		$.getJSON(url,function(data){
			event.source.loadData(data);
		});

	};

	Model.prototype.button1Click = function(event){
		justep.Shell.showPage(require.toUrl('./test.w'));
	};

	return Model;
});