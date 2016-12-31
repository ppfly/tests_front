define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.data1CustomRefresh = function(event){
		console.log(localStorage.getItem('userScore'));
		
	};

	Model.prototype.button1Click = function(event){
		window.location.href='./checkWrong.w';
	};

	Model.prototype.modelLoad = function(event){
		this.comp("output1").set({'value':localStorage.getItem('userScore')});
	};

	return Model;
});