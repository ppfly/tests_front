<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <span xid="span3"></span><div component="$UI/system/components/justep/model/model" xid="model" style="top:157px;left:278px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="classData" idColumn="id" onCustomRefresh="classDataCustomRefresh"><column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="分类名" name="fClassName" type="String" xid="xid2"></column>
  <column label="图片" name="fImg" type="String" xid="xid3"></column>
  <column label="描述" name="fDescription" type="String" xid="xid4"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="AllTest2" idColumn="id" onCustomRefresh="AllTest2CustomRefresh">
   <column label="ID" name="id" type="String" xid="xid6"></column>
   <column label="题面" name="title" type="String" xid="xid7"></column>
   <column label="类型" name="type" type="String" xid="xid8"></column>
   <column label="单选项" name="option" type="String" xid="xid10"></column>
   <master xid="default2"></master>
   <column label="选择" name="checked" type="String" xid="xid9"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="AllTest2_option" onCustomRefresh="AllTest2_optionCustomRefresh" idColumn="id" isTree="false">
   <column label="ID" name="id" type="String" xid="xid11"></column>
   <column label="字母" name="option_key" type="String" xid="xid19"></column>
   <column label="选项" name="option_element" type="String" xid="xid12"></column>
   <master xid="default3"></master>
   <treeOption xid="default4" parentRelation="id" nodeKindRelation="id"></treeOption></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题
  </div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"> 
    	<ul bind-foreach="$model.comp('AllTest2_option')">
		    <li>
		        <b data-bind="text: $object.id"></b>:<b data-bind="text: $object.option_element"></b>
		    </li>
		</ul>
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="AllTest2">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="title" xid="controlGroup1">
   <div class="x-control-group-title" xid="controlGroupTitle1">
    <span xid="span1" bind-text='val("title")'><![CDATA[单选题]]></span></div> 
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col7"><span xid="span2"><![CDATA[选择答案：]]></span></div>
   <div class="x-col" xid="col8"></div>
   </div></div>
  </div>
   </div></li></ul> </div></div>
  </div> 
</div>