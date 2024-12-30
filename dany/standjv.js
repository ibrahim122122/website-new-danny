function showPaymentOptions(productName, price) {
    document.getElementById('product-name').textContent = productName;
    document.getElementById('payment-section').style.display = 'block';
}

function payWithMTNMobileMoney() {
    const phoneNumber = "0788290931";
    const amount = prompt("Enter the amount you wish to pay:");
    if (amount && parseFloat(amount) > 0) {
        alert(`Please dial *182*1*1# to complete the payment of RWF ${amount} to ${phoneNumber}.`);
    } else {
        alert("Invalid amount entered. Payment canceled.");
    }
}

var stripe = Stripe('your-publishable-key-here');
var elements = stripe.elements();
var paymentRequest = stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
        label: 'Total Amount',
        amount: 1000,
    },
    requestPayerName: true,
    requestPayerEmail: true,
});

var prButton = elements.create('paymentRequestButton', {
    paymentRequest: paymentRequest,
});

paymentRequest.canMakePayment().then(function(result) {
    if (result) {
        prButton.mount('#payment-request-button');
    } else {
        document.getElementById('payment-request-button').style.display = 'none';
    }
});