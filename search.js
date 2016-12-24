define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	myItems=[{'id':'1','option':'选项A'},{'id':'2','option':'选项B'},{'id':'3','option':'选项C'}];
	months= ['Jan', 'Feb', 'Mar', 'etc'];
	people=[
			 { firstName: 'Bert', lastName: 'Bertington' },
			 { firstName: 'Charles', lastName: 'Charlesforth' },
			 { firstName: 'Denise', lastName: 'Dentiste' }
			 ];

	var Model = function(){
		this.callParent();
	};

	Model.prototype.classDataCustomRefresh = function(event){
		var url=require.toUrl('./json/rootClassData.json');
		$.ajaxSettings.async=false;
		$.getJSON(url,function(data){
			event.source.loadData(data);
		});
	};

	Model.prototype.modelLoad = function(event){
		var allTest1=this.comp('AllTest1');
		var allTest2=this.comp('AllTest2');
		var allTest2_option=this.comp("AllTest2_option");
		$.ajax({
			"type":"post",
			"async":false,
			"data":{
				
			},
			"dataType":"json",
			"url":"http://www.tests.mm/index/test/queryalltest",
			"success":function(data){
				//console.log(data);
				//event.source.loadData(data);
				localStorage.setItem('AllTest1',JSON.stringify(data.result1));
				localStorage.setItem('AllTest2',JSON.stringify(data.result2.data));
				localStorage.setItem('AllTest2_option',JSON.stringify(data.result2.option));
				//allTest1.loadData(JSON.parse(localStorage.getItem('AllTest1'),true));
				allTest2.loadData(JSON.parse(localStorage.getItem('AllTest2'),true));
				allTest2_option.loadData(JSON.parse(localStorage.getItem('AllTest2_option'),true));
				//console.log(allTest2_option.loadData(JSON.parse(localStorage.getItem('AllTest2_option'),true)));
				//allTest2_option.each(function(row){
					
				//	console.log(row.row.val('option_element'));
				//});
			},
		});
	};

	Model.prototype.AllTest2CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest2'),true));
	};

	Model.prototype.AllTest2_optionCustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest2_option'),true));
	};

	return Model;
});