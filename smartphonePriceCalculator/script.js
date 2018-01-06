/* Writing a program to calculate the total price of your phone purchase.
Keep purchasing until you run out of money in your bank accountr.
Buy accessories for each phone as long as your purchase is below your mental
spending threshold.

After the purchase amount is calculated, add in the tax, then print out
the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if
you can afford it or not. */

var phonePrice = parseFloat(prompt( 'Please tell me how much does the phone cost?'));
var taxRate = 0.23;
var phoneCase = parseFloat(prompt('How much does the phone case cost?'));
var phoneHeadphones = parseFloat(prompt('How much for the headphones?'));
var phoneGlass = parseFloat(prompt('How much does the tempered glass cost?'));
var bankBalance = parseFloat(prompt('How much money do you have in your bank account?'));
var mentalSpendingLimit = phonePrice/2;
var purchaseAmount = phonePrice + phoneCase + phoneGlass + phoneHeadphones;
var finalPrice = purchaseAmount + purchaseAmount * taxRate;

if ((phoneCase + phoneHeadphones + phoneGlass) < mentalSpendingLimit) {
    for (var n=0; (purchaseAmount + (purchaseAmount * taxRate)) < bankBalance; n++) {
      purchaseAmount += (phonePrice + phoneCase + phoneHeadphones + phoneGlass);
    }
    alert('$' + purchaseAmount.toFixed(2));
} else {
  alert('These accessories cost way too much, refresh the page and change their cost!');
}
