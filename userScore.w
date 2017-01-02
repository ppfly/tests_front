<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:280px;left:321px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" onCustomRefresh="data1CustomRefresh" idColumn="userScore"><column label="得分" name="userScore" type="String" xid="xid1"></column>
  <data xid="default1">[]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="测试得分"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">测试得分</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-fixed x-col-center text-success center-block" xid="col2" style="width:auto;height:auto;vertical-align:middle;line-height:inherit;">
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="回顾答错的题目" xid="button1" onClick="button1Click" style="position:fixed;top:50%;width:40%;left:32%;">
   <i xid="i1"></i>
   <span xid="span1">回顾答错的题目</span></a>
  <h1 xid="h11" style="position:fixed;top:35%;width:100%;left:43%;"><![CDATA[]]><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" style=";font-size:xx-large;font-weight:bolder;"></div></h1></div>
   </div></div>
  </div> 
</div>