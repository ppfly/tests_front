<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:280px;left:505px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="cartShopData" idColumn="id" onCustomRefresh="cartShopDataCustomRefresh"><column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="商户名" name="fShopName" type="String" xid="xid2"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="cartGoodsData" idColumn="id" onCustomRefresh="cartGoodsDataCustomRefresh"><column label="ID" name="id" type="String" xid="xid3"></column>
  <column label="商户ID" name="fShopID" type="String" xid="xid11"></column>
  <column label="商品ID" name="fGoodsID" type="String" xid="xid4"></column>
  <column label="商品名" name="fTitle" type="String" xid="xid5"></column>
  <column label="图片" name="fImg" type="String" xid="xid6"></column>
  <column label="价格" name="fPrice" type="String" xid="xid7"></column>
  <column label="原价" name="fOldPrice" type="String" xid="xid8"></column>
  <column label="型号" name="fSize" type="String" xid="xid9"></column>
  <column label="数量" name="fNumber" type="String" xid="xid10"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="购物车"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">购物车</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="cartShopData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5"><span xid="span4" bind-text='val("fShopName")'></span></div>
   <div class="x-col" xid="col6"></div></div><div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="cartGoodsData" filter=' $row.val("fShopID") == val("id")'>
   <ul class="x-list-template" xid="listTemplateUl3">
    <li xid="li3"><span xid="span3" bind-text='val("fTitle")'></span></li></ul> </div></li></ul> </div></div>
  </div> 
</div>