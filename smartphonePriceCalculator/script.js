/* Writing a program to calculate the total price of your phone purchase.
Keep purchasing until you run out of money in your bank accountr.
Buy accessories for each phone as long as your purchase is below your mental
spending threshold.

After the purchase amount is calculated, add in the tax, then print out
the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if
you can afford it or not. */


function formChanged(){   //this allows live update

var phonePrice = parseFloat(document.getElementById("phoneprice").value);
var taxRate = 0.23;
var phoneCase = parseFloat(document.getElementById("phonecase").value);
var phoneHeadphones = parseFloat(document.getElementById("headphones").value);
var phoneGlass = parseFloat(document.getElementById("phoneglass").value);
var bankBalance = parseFloat(document.getElementById("bankbalance").value);
var mentalSpendingLimit = phonePrice;
var purchaseAmount = phonePrice + phoneCase + phoneGlass + phoneHeadphones;
var finalPrice = purchaseAmount + purchaseAmount * taxRate;

/* Have to figure out away to not let the phone price show
if there is no money in the bank */
if ((phoneCase + phoneHeadphones + phoneGlass) < mentalSpendingLimit) {
    for (var n=0; (purchaseAmount + (purchaseAmount * taxRate)) < bankBalance; n++) {
      purchaseAmount += purchaseAmount;
    }
    // alert('$' + purchaseAmount.toFixed(2));
    document.getElementById('totalprice').innerHTML=
    ('$' + (purchaseAmount + (purchaseAmount * taxRate)).toFixed(2));
} else {
  document.getElementById('totalprice').innerHTML="You cannot possibly buy that!";
}
}
