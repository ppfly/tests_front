define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
		var allTest1=this.comp('AllTest1');
		var allTest2=this.comp('AllTest2');
		var allTest2_option=this.comp("AllTest2_option");
		var allTest3=this.comp('AllTest3');
		var allTest3_option=this.comp("AllTest3_option");
		allTest1.loadData(JSON.parse(localStorage.getItem('wrongTest1'),true));
		allTest2.loadData(JSON.parse(localStorage.getItem('wrongTest2'),true));
		allTest2_option.loadData(JSON.parse(localStorage.getItem('wrongTest2_option'),true));
		allTest3.loadData(JSON.parse(localStorage.getItem('wrongTest3'),true));
		allTest3_option.loadData(JSON.parse(localStorage.getItem('wrongTest3_option'),true));
	};

	Model.prototype.AllTest1CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('wrongTest1'),true));
	};

	Model.prototype.AllTest2CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('wrongTest2'),true));
	};

	Model.prototype.AllTest2_optionCustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('wrongTest2_option'),true));
	};

	Model.prototype.AllTest3CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('wrongTest3'),true));
	};

	Model.prototype.AllTest3_optionCustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('wrongTest3_option'),true));
	};

	Model.prototype.backBtnClick = function(event){
		window.location.href='./index.w';
	};

	return Model;
});