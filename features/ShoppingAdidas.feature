Feature: Place an Order using Adidas UK platform

  Scenario: Place an order from Adidas
  Given Navigate to adidas homepage and Search the word running
  When Click on the first product
  When Verify that you have navigated to the correct product page by checking the URL
  When Pick any size and click on Add to Bag button
  When Verify that you have successfully added one item to the bag
  When Click on View Bag button and navigate to the cart page
  When Verify that you are on the cart page by the title Your Bag
  Then Click on the Checkout button
  Then Verify that youre on the delivery page
  Then Navigate to from the Get Your Order module and click From A Collection Point
  Then Type London in the location text box
  Then click Search for Collection Points button
  Then from the list, pick any collection point
  Then Verify that correct collection point is selected
  Then Proceed to the payment step by Review and Pay Button
  Then Verify that major payment methods PayPal and Credit Card are present







