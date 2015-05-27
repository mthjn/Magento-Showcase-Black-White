<?php
// Observer for CSSSlidy Log

class CSSSlidy_Log_Model_Observer
{
  public function logUpdate(Varien_Event_Observer $observer) {
    $product = $observer->getEvent()->getProduct();
    $name = $product->getName();
        $sku = $product->getSku();
        Mage::log(
            "{$name} ({$sku}) updated",
            null,
            'product-updates.log'
        );
      }

}
