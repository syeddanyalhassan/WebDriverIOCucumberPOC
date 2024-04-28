Feature: Perform Transaction via Terminal

Scenario: Perform Transaction with ACH
Given Login To Application
When Filled Customer Info And Amount
Then Added ACH details and then requested for processing ACH