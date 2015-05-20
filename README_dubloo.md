**CONTENTS**
============
============
X / Read More
A / Right sidebar  
B / Homepage  

Z / General issues  


  ***


X / READ MORE  
=============  
@link https://gist.github.com/hightemp/2387916  
@link https://gist.github.com/arosenhagen/2397824  




A / RIGHT SIDEBAR  
=================  

1/ Compare products  
2/ CMS Blocks  
3/ Permanent Callouts  
4/ Search  

CHANGE PROD COMPARISON  
theme/stack/template/catalog/product/compare/sidebar.phtml

CMS BLOCKS IN SIDEBAR  
page.xml  
block name right  

    <block type="page/html_wrapper" name="unique_name" as="unique_name">  
     <action method="setElementClass"><value>my_class</value></action>  
      <block type="cms/block" name="id_of_cms_block">  
        <action method="setBlockId"><block_id>id_of_cms_block</block_id></action>  
      </block>  
    </block>  

CHANGE PARMANENT CALLOUTS  
images linked from skin/.../theme/stack/images/media  
title: in template callouts/right_col.phtml  
layout: catalog.xml  
just set image and alt or add link as well  

    <block type="core/template" name="right.permanent.callout" template="callouts/right_col.phtml">-->
       <action method="setImgSrc"><src>images/media/unboxed.jpg</src></action>
        <action method="setImgAlt" translate="alt" module="catalog">
          <alt>Lorem ipsum dolor sit amet</alt>
        </action>
       <action method="setLinkUrl"><url>checkout/cart</url></action>
    </block>

+ storesearch - lay and temp in catalogsearch  
+ newsletter in newsletter  
(change reference to right)  


B / HOMEPAGE  
============  

1/ Categories on homepage  
2/ Custom Variables  

*1/ Templates for categories flush on homepage*  
template/catalog/product/homepagelist.phtml  (homepageselection.phtml)  

*2/ Create custom variable in Magento: Message that dissapears onclick *  

      // --- Selector
       // TEXT value of the custom variable:
       Mage::getModel('core/variable')->setStoreId(Mage::app()->getStore()->getId())
       ->loadByCode('custom_variable_code')->getValue('text');
       // HTML value of the custom variable:
       Mage::getModel('core/variable')->setStoreId(Mage::app()->getStore()->getId())
       ->loadByCode('custom_variable_code')->getValue('html');

      // --- JS for the variable
      var msg      = document.getElementById("yellowmsg"),
          cross   = document.getElementById("closeyellow");
          //console.log(msg + '  ' + cross);

      if (document.cookie.indexOf("closedmessage") >= 0) {
        console.log("hello again");
        msg.className = 'disabled';
      }

      window.addEventListener("load", function(){
        cross.onclick = function(e) {
              msg.className = 'disabled';

              var expiry = new Date();
              expiry.setDate(expiry.getDate() + 60); // A minute
              document.cookie = "closedmessage=yes; expires=" + expiry.toUTCString();
              console.log("setting the cookie");
          }
      });


      // --- page xml to insert js into footer

      <block type="core/text_list" name="before_body_end" as="before_body_end" translate="label">
      ...
      <block type="page/html_head" name="jsfooter" as="jsfooter" template="page/html/jsfooter.phtml">
         <action method="addItem"><type>skin_js</type><name>js/fadeyellow.js</name></action>
      </block>

      // --- jsfooter.phtml as template

      <?php echo $this->getCssJsHtml() ?>

      // --- custom variable just below top navigation / header.phtml

        <!-- Navigation -->
        <div id="header-nav" class="skip-content"><?php echo $this->getChildHtml('topMenu') ?></div>
        <?php echo Mage::getModel('core/variable')->setStoreId(Mage::app()->getStore()->getId())
        ->loadByCode('msg_yellow')->getValue('html'); ?>

      **
@link https://gist.github.com/mthjn/6c78671bdb5860867c98  

Z /  GENERAL  
============  

**Add custom js code, flush it to the footer**  
  page.xml  
  find
    <block type="core/text_list" name="before_body_end" as="before_body_end" translate="label">  
  insert
    <block type="page/html_head" name="jsfooter" as="jsfooter" template="page/html/jsfooter.phtml">  
      <action method="addItem"><type>skin_js</type><name>js/fadeyellow.js</name></action>  
    </block>  

**Resize images with cropping eg on the same size / homepage latest arrivals**  
used  
     <?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize($_imgSize, $_imgSize2)
    ->keepFrame(false)->constrainOnly(true)->keepAspectRatio(false); ?> __

will look ok for common img sizes, otherwise use crop(10, 20, 30, 40); on Varien_Image  
Varien_Image is not returned by catalog/image helper
    $mainImage = Mage::getBaseDir('media') . DS . 'test' . DS . 'image.jpg';  
    $image = new Varien_Image($mainImage);  
    // crop($top=0, $left=0, $right=0, $bottom=0)  
    $image->crop(10, 10, 10, 10);  
    $image->save(Mage::getBaseDir('media'). DS . 'test' . DS . 'new.jpg');  

@see Mage_Catalog_Block_Product_List  
@link http://stackoverflow.com/questions/9492770/magento-crop-image  

**Edit login/sign up page**  
edit template in  templates/persistent  


**Edit the way main nav is rendered**  
template -  page/html/topmenu/renderer.phtml  
