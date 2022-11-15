<?php

namespace Intcomex\Managereindex\Plugin\Indexer;

use \Intcomex\Managereindex\Helper\Helper;
use Magento\Store\Model\StoreManagerInterface;

class IndexerPlugin
{
    public function __construct(
        \Intcomex\Managereindex\Helper\Helper $helper,
         StoreManagerInterface $storeManager,
        \Psr\Log\LoggerInterface $logger
     ) {
        $this->helper = $helper;
        $this->logger = $logger;
         $this->storeManager = $storeManager;
     }

    public function beforereindexAll($subjetc)
    {
        $storeId = $this->storeManager->getStore()->getId();
        if ( !$this->helper->isEnabled($storeId) && $subjetc->getId() != 'cataloginventory_stock'){
           $this->logger->info('reindexAll is Disable');
           //exit();
        }
        else if($subjetc->getId() == 'cataloginventory_stock')
              $this->logger->info('reindexAll is Enable of ' . $subjetc->getId() );
    }

    public function beforeExecuteFull($subjetc)
    {
        $backtrace = \Magento\Framework\Debug::backtrace(true, false, false);
        $this->logger->info('-------- START BACKTRACE --------');
        $this->logger->info('Backtrace reindexAll for index ');
        $this->logger->info($backtrace);
        $this->logger->info('-------- END BACKTRACE --------');
        $this->logger->info(get_class($subjetc));
    }

}
