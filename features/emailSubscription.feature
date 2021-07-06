Feature: Performing a newsletter subscription Hoeffner

  Background: Open the Hoeffner webpage and accept the cookies
    Given  I visit Hoeffner login page
    When   I accept the cookie setting pop-up

  Scenario Outline: As a user, I can perform a newsletter subscription in Hoeffner login webpage
    Given  I can see the newsletter subscription input field
    When   I enter my "<email>" in the input field
    When   I press the Absenden button
    Then   I can see a confirmation message that my subscription is in progress
    Examples:
      | email                        |
      | agarwalatrisha1212@gmail.com |







