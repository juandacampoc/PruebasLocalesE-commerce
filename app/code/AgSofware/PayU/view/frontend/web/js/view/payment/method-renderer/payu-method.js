define([
        'Magento_Checkout/js/view/payment/default',
        'Magento_Checkout/js/model/quote'
    ],
    function (Component, quote) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'AgSofware_PayU/payment/payu'
            },
            initialize: function () {
                this._super();
                this.getPrice();
            },
            getMailingAddress: function () {
                //return window.checkoutConfig.payment.checkmo.mailingAddress;
            },
            getInstructions: function () {
                //return window.checkoutConfig.payment.instructions[this.item.method];
            },


            /*
            * Obtiene el precio TOTAL
            * */
            getPrice: function (){
                return '<h2 style="color: red">' + quote.totals().grand_total + '</h2>';

            }
        });
    }
);
