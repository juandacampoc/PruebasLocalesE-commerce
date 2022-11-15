<?php
declare(strict_types=1);

namespace AgSofware\PayU\Model\Payment;

class PayU extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "payu";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}

