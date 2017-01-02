<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="AllTest1" onCustomRefresh="AllTest1CustomRefresh" idColumn="id">
      <column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="题面" name="title" type="String" xid="xid2"></column>
  <column isCalculate="false" label="选中" name="checked" type="String" xid="xid3"></column></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="radioSet1" idColumn="item">
      <column label="项目" name="item" type="String" xid="xid4"/>  
      <column label="值" name="value" type="String" xid="xid5"/>  
      <data xid="default1">[{"item":"正确","value":"1"},{"item":"错误","value":"0"}]</data>
    </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="AllTest2" idColumn="id" onCustomRefresh="AllTest2CustomRefresh"><column label="ID" name="id" type="String" xid="xid6"></column>
  <column label="题面" name="title" type="String" xid="xid7"></column>
  <column label="类型" name="type" type="String" xid="xid8"></column>
  <master xid="default2"></master>
  <column label="选择" name="checked" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest2_option" onCustomRefresh="AllTest2_optionCustomRefresh" idColumn="id" isTree="false"><column label="ID" name="id" type="String" xid="xid11"></column>
  <column label="字母" name="option_key" type="String" xid="xid19"></column>
  <column label="选项" name="option_element" type="String" xid="xid12"></column>
  <master xid="default3"></master>
  <treeOption nodeKindRelation="id" parentRelation="id" xid="default4"></treeOption>
  <column label="选中" name="checked" type="String" xid="xid13"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest3" idColumn="id" onCustomRefresh="AllTest3CustomRefresh"><column label="ID" name="id" type="String" xid="xid14"></column>
  <column label="题面" name="title" type="String" xid="xid15"></column>
  <column label="类型" name="type" type="String" xid="xid16"></column>
  <column label="选择" name="checked" type="String" xid="xid18"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest3_option" idColumn="id" onCustomRefresh="AllTest3_optionCustomRefresh"><column label="ID" name="id" type="String" xid="xid20"></column>
  <column label="选项" name="option_key" type="String" xid="xid21"></column>
  <column label="内容" name="option_element" type="String" xid="xid22"></column>
  <column label="选择" name="checked" type="String" xid="xid23"></column></div></div>  
  <span component="$UI/system/components/justep/timer/timer" xid="timer1" onTimer="timer1Timer"></span><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="考试中..."
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a>  
          </div>  
        <div class="x-titlebar-title">考试中...</div>  
        <div class="x-titlebar-right reverse"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" style="color:#FFFFFF;"></div></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" style="padding-left:10px;padding-right:10px;"> 
      
    
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col11"></div>
   <div class="x-col" xid="col12"><h3 xid="h3"><![CDATA[判断题]]></h3></div>
   <div class="x-col" xid="col13"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="AllTest1"> 
              <ul class="x-list-template" xid="listTemplateUl1"> 
                <li xid="li1"> 
                  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1"> 
                    <div class="x-col bg-info" xid="col3"> 
                      <span xid="span7" bind-text="val(&quot;title&quot;)" style="font-size:x-large;" />
                    </div> 
                  </div>
                  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3"> 
                    <div class="x-col x-col-fixed" xid="col1" style="width:auto;"> 
                      <label xid="label1">选择答案：</label>  
                      <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup1" bind-itemset="$model.radioSet1" bind-itemsetLabel="ref(&quot;item&quot;)" onChange="radioGroup1Change" bind-itemsetValue="ref(&quot;value&quot;)" bind-ref='ref("checked")' />
                    </div> 
                  </div> 
                </li>
              </ul> 
            </div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col14"></div>
   <div class="x-col" xid="col15"><h3 xid="h34"><![CDATA[单选题]]></h3></div>
   <div class="x-col" xid="col16"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col18"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="AllTest2" autoLoad="true">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
      <div class="x-col bg-info" xid="col20">
       <span xid="span5" bind-text='val("title")' style="font-size:x-large;"></span></div> </div> 
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
      <div class="x-col x-col-fixed" xid="col21" style="width:auto;">
       <label xid="label3">选择答案：</label>
       </div> 
  <div class="x-col" xid="col2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="$model.AllTest2_option" filter="$row.val('id')==val('id')">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><span component="$UI/system/components/justep/button/radio" class="x-radio" xid="radio1" bind-label="val('option_element')" bind-value="val('option_key')" onChange="radio1Change" bind-ref='ref("checked")' checkedValue="1" uncheckedValue="0"></span>
  <span xid="span3" bind-text="val('option_element')"></span></li></ul> </div></div></div> 
  </li> </ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col8"></div>
   <div class="x-col" xid="col7">
    <h3 xid="h31"><![CDATA[多选题]]></h3></div> 
   <div class="x-col" xid="col6"></div></div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col4">
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="list4" data="AllTest3" autoLoad="true">
     <ul class="x-list-template" xid="listTemplateUl4">
      <li xid="li5">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
        <div class="x-col bg-info" xid="col10">
         <span xid="span9" bind-text='val("title")' style="font-size:x-large;"></span></div> </div> 
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
        <div class="x-col x-col-fixed" xid="col9" style="width:auto;">
         <label xid="label2">选择答案：</label></div> 
        <div class="x-col" xid="col17">
         <div component="$UI/system/components/justep/list/list" class="x-list" xid="list5" data="$model.AllTest3_option" filter="$row.val('id')==val('id')">
          <ul class="x-list-template" xid="listTemplateUl5">
           <li xid="li4">
            <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="checkbox1" checkedValue="1" uncheckedValue="0" bind-label="val('option_element')" bind-value="val('option_key')" bind-ref="ref('checked')" onChange="checkbox1Change"></span><span xid="span6" bind-text="val('option_element')"></span>
  </li> </ul> </div> </div> </div> </li> </ul> </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col22"><a component="$UI/system/components/justep/button/button" class="btn btn-success btn-block" label="交  卷" xid="completedButton" onClick="completedButton">
   <i xid="i5"></i>
   <span xid="span8">交  卷</span></a></div>
   </div></div> 
  </div> 
  <div id="loading" style="z-index:99999;position:fixed; top:0;left:0; width:100%;height:800px;background-image:url(img/loading.gif); background-position:center;background-repeat:no-repeat; text-align:center;">
<div style="position:absolute; top:42%; left:30%; width:50%; text-align:center;">正在加载试题，请稍候……</div>  
</div>  
</div>
