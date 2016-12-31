define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		justep.Baas.sendRequest({
			"url" : "/f/Tt",
			"action" : "queryCount",
			"async" : false,
			"params" : {
				x:2,y:3
			},
			"success" : function(data) {
				if (data !== null) {
	            //alert(data);
	            alert(data.orderCount);
	            alert(data.x);
	            alert(data.y);
		        } else {
		            alert("error");
		        }
			}
		});
	};

	Model.prototype.button2Click = function(event){
		justep.Baas.sendRequest({
			"url" : "/f/Tt",
			"action" : "queryAllTest1",
			"async" : false,
			"params" : {},
			"success" : function(data) {
				console.log(data);
			}
		});
	};



/*
	Model.prototype.AllTest1CustomRefresh = function(event){
		justep.Baas.sendRequest({
			"url" : "/f/Tt",
			"action" : "queryAllTest1",
			"async" : false,
			"params" : {},
			"success" : function(data) {
				event.source.loadData(data);
			}
		});
	};*/
	Model.prototype.AllTest1CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest1')));
		/*$.ajax({
			"type":"post",
			"async":false,
			"data":{
				id:2
			},
			"dataType":"json",
			"url":"http://www.tests.mm/index/test/queryalltest1",
			"success":function(data){
				//console.log(data);
				event.source.loadData(data);
			},
		});*/
	};
	

	Model.prototype.button3Click = function(event){
		var data=this.comp("AllTest2");
		var rows=data.find(['title'],['1'] , false, false, false, true);
		var result=rows[0].val('title');
		console.log(result);
		
	};

	Model.prototype.radioGroup1Change = function(event){
		console.log(event.source.val());
	};

	Model.prototype.completedButton = function(event){
		//var formData=this.comp(Model);
		var AllTest1=this.comp("AllTest1");
		var AllTest2=this.comp("AllTest2");
		var AllTest3=this.comp("AllTest3");
		$.ajax({
			'type':'post',
			'async':'false',
			//'data':formData.toJson(),
			'data':{
				'alltest1':AllTest1.toJson(),
				'alltest2':AllTest2.toJson(),
				'alltest3':AllTest3.toJson(),
			},
			'dataType':'json',
			'url':'http://www.tests.mm/index/test/completedtest',
			'success':function(data){
				localStorage.setItem('userScore', JSON.stringify(data.userScore));
				//localStorage存储数据需要用JSON.stringify(data)转换成json格式，取值时用JSON.parse();
				//console.log(JSON.parse(localStorage.getItem('userScore')));
				localStorage.setItem('wrongTest1', JSON.stringify(data.wrongtest1));
				localStorage.setItem('wrongTest2', JSON.stringify(data.wrongtest2.data));
				localStorage.setItem('wrongTest2_option', JSON.stringify(data.wrongtest2.option));
				localStorage.setItem('wrongTest3', JSON.stringify(data.wrongtest3.data));
				localStorage.setItem('wrongTest3_option', JSON.stringify(data.wrongtest3.option));
				window.location.href='./userScore.w';
				console.log(data);
			},
			'error':function(e){
				console.log(e);
			}
		});
	};

	Model.prototype.AllTest2CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest2'),true));

		/*$.ajax({
			"type":"post",
			"async":false,
			"data":{
				id:2
			},
			"dataType":"json",
			"url":"http://www.tests.mm/index/test/queryalltest2",
			"success":function(data){
				//console.log(data);
				event.source.loadData(data);
			},
		});*/
	};

	Model.prototype.AllTest2_optionCustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest2_option')));
		
	};

	Model.prototype.modelLoad = function(event){
		var allTest1=this.comp('AllTest1');
		var allTest2=this.comp('AllTest2');
		var allTest2_option=this.comp("AllTest2_option");
		var allTest3=this.comp('AllTest3');
		var allTest3_option=this.comp("AllTest3_option");
		$.ajax({
			"type":"post",
			"async":false,
			//"global":false,
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
				
				localStorage.setItem('AllTest3',JSON.stringify(data.result3.data));
				localStorage.setItem('AllTest3_option',JSON.stringify(data.result3.option));
				
				
				allTest1.loadData(JSON.parse(localStorage.getItem('AllTest1'),true));
				allTest2.loadData(JSON.parse(localStorage.getItem('AllTest2'),true));
				allTest2_option.loadData(JSON.parse(localStorage.getItem('AllTest2_option'),true));
				allTest3.loadData(JSON.parse(localStorage.getItem('AllTest3'),true));
				allTest3_option.loadData(JSON.parse(localStorage.getItem('AllTest3_option'),true));
				
				
				console.log(data.result3.data);
				console.log(allTest3.toJson());
				//allTest2_option.each(function(row){
					
				//	console.log(row.row.val('option_element'));
				//});
			},
		});
		
		//生成一个时间用于倒计时
		this.timerDate=new Date();
		this.timerDate.setFullYear('1970', '1', '1');
		this.timerDate.setHours('0', '40', 0, 0);
	};

	

	Model.prototype.radioGroup3Load = function(event){

	};

	

	Model.prototype.radio1Load = function(event){
		
	};

	

	Model.prototype.radioGroup4Change = function(event){
		var row=event.bindingContext.$object;
		console.log(row.val('id'));
	};

	

	Model.prototype.radio2Change = function(event){

	};

	

	Model.prototype.radioGroup4Load = function(event){
		var row=event.bindingContext.$object;
		console.log(row.val('id'));
	};

	

	Model.prototype.radio1Change = function(event){
		var row = event.bindingContext.$object;
		var id=row.val('id');
		var option_key=row.val('option_key');
		var rows=this.comp("AllTest2_option").find(['id'],[id]);
		for(var i=0;i<rows.length;i++){
			if(rows[i].val('option_key')!=option_key){
				rows[i].val('checked','');
			}
			//rows[i].val('checked',event.value);
			//console.log(rows[i].val('option_key'));
		}
		var AllTest2Row=this.comp("AllTest2").find(['id'],[id]);
		for(var i=0;i<AllTest2Row.length;i++){
			AllTest2Row[i].val('checked',option_key);
		}
		//this.comp("AllTest2").
		console.log(this.comp("AllTest2").toJson());
		//console.log(row.val('id')+':'+row.val('option_key'));
		//console.log(event.value);
	};

	

	Model.prototype.AllTest3CustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest3'),true));
	};

	

	Model.prototype.AllTest3_optionCustomRefresh = function(event){
		event.source.loadData(JSON.parse(localStorage.getItem('AllTest3_option'),true));
	};

	

	Model.prototype.checkbox1Change = function(event){
		//console.log('event value:'+event.value);
		
		var row = event.bindingContext.$object;
		//console.log('checked:'+row.val('checked'));
		var id=row.val('id');
		row.val('checked',event.value);
		//var option_key=row.val('option_key');
		
		var options='';
		var rows=this.comp("AllTest3_option").find(['id'],[id]);
		for(var i=0;i<rows.length;i++){
			if(rows[i].val('checked')=='1'){
				options=options+rows[i].val('option_key');
			}
		}
		
		
		var AllTest3Row=this.comp("AllTest3").find(['id'],[id]);
		for(var i=0;i<AllTest3Row.length;i++){
			//if(!AllTest3Row[i].val('checked')) AllTest3Row[i].val('checked','');
			AllTest3Row[i].val('checked',options);
		}
		console.log(this.comp("AllTest3").toJson());
	};

	

	Model.prototype.timer1Timer = function(event){
		this.timerDate.setMilliseconds(-1000);
		this.comp("output1").set('value','倒计时 '+this.timerDate.getMinutes().valueOf()+":"+this.timerDate.getSeconds().valueOf());
		if(this.timerDate.getMinutes()=='0' && this.timerDate.getSeconds()=='0'){
			
			//alert('时间到！！！');
			this.comp('timer1').pause();
			this.completedButton(event);
		};
	};

	

	return Model;
});