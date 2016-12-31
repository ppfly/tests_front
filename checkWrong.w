<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="AllTest1" onCustomRefresh="AllTest1CustomRefresh" idColumn="id">
   <column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="题面" name="title" type="String" xid="xid2"></column>
  <column label="标准答案" name="answer" type="String" xid="xid3"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="AllTest2" idColumn="id" onCustomRefresh="AllTest2CustomRefresh">
   <column label="ID" name="id" type="String" xid="xid6"></column>
  <column label="题面" name="title" type="String" xid="xid7"></column>
  <master xid="default2"></master>
  <column label="标准答案" name="answer" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest2_option" onCustomRefresh="AllTest2_optionCustomRefresh" idColumn="id" isTree="false">
   <column label="ID" name="id" type="String" xid="xid11"></column>
  <column label="字母" name="option_key" type="String" xid="xid19"></column>
  <column label="选项" name="option_element" type="String" xid="xid12"></column>
  <master xid="default3"></master>
  <treeOption nodeKindRelation="id" parentRelation="id" xid="default4"></treeOption></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest3" idColumn="id" onCustomRefresh="AllTest3CustomRefresh">
   <column label="ID" name="id" type="String" xid="xid14"></column>
  <column label="题面" name="title" type="String" xid="xid15"></column>
  <column label="标准答案" name="answer" type="String" xid="xid18"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest3_option" idColumn="id" onCustomRefresh="AllTest3_optionCustomRefresh">
   <column label="ID" name="id" type="String" xid="xid20"></column>
  <column label="选项" name="option_key" type="String" xid="xid21"></column>
  <column label="内容" name="option_element" type="String" xid="xid22"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="错题回顾"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">错题回顾</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="AllTest1">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col bg-info" xid="col4"><span xid="span1" bind-text='val("title")'></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><span xid="span2"><![CDATA[标题答案：]]></span></div>
   <div class="x-col" xid="col8"><span xid="span3" bind-text='val("answer")'></span></div>
   </div></li></ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col10"><hr xid="hr1"></hr></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list2" data="AllTest2">
   <ul class="x-list-template" xid="listTemplateUl2">
    <li xid="li2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col bg-info" xid="col16"><span xid="span4" bind-text='val("title")'></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col19"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="$model.AllTest2_option" filter="$row.val('id')==val('id')">
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3"><span xid="span5" bind-text="val('option_element')"></span></li></ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col22"><span xid="span6"><![CDATA[标准答案：]]></span></div>
   <div class="x-col" xid="col23"><span xid="span7" bind-text='val("answer")'></span></div>
   </div></li></ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col25"><hr xid="hr2"></hr></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col28"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list4" data="AllTest3">
   <ul class="x-list-template" xid="listTemplateUl4">
    <li xid="li4"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col bg-info" xid="col31"><span xid="span8" bind-text='val("title")'></span></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col34"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list5" data="$model.AllTest3_option" filter="$row.val('id')==val('id')">
   <ul class="x-list-template" xid="listTemplateUl5">
    <li xid="li5"><span xid="span12" bind-text="val('option_element')"></span></li></ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col37"><span xid="span10"><![CDATA[标准答案：]]></span></div>
   <div class="x-col" xid="col38"><span xid="span11" bind-text='val("answer")'></span></div>
   </div></li></ul> </div></div>
   </div></div>
  </div> 
</div>