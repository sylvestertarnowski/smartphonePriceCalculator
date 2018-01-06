/* Writing a program to calculate the total price of your phone purchase.
Keep purchasing until you run out of money in your bank accountr.
Buy accessories for each phone as long as your purchase is below your mental
spending threshold.

After the purchase amount is calculated, add in the tax, then print out
the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if
you can afford it or not. */

var phonePrice = prompt( 'Please tell me how much does the phone cost?');
var taxRate = 0.23;
var phoneCase = prompt('How much does the phone case cost?');
var phoneHeadphones = prompt('How much for the headphones?');
var phoneGlass = prompt('How much does the tempered glass cost?');
var mentalSpendingLimit = phonePrice/3;
