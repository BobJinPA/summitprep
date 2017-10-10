@selenium
Feature: Amort

Background:        
    Given I visit the amortization schedule calculator
    # http://www.amortization-calc.com/

    @happy
    Scenario: calculate a happy path monthly payment
        Given I enter a loan amount of '500000'
        And I enter a loan term of '30' years
        And I enter an interest rate of '4.70'
        When I value
        Then I see a monthly payment of '$2,595'

    Scenario: invalid zip code
        Given I enter a zip code of 'cat'
        When I value
        Then I see 'There are currently no rates available for the products you selected. Please try another search.'

    Scenario:  Search returns valid results
        When I search for a conventional 30 year loan
        And the loan had a total of 365 payments

    Scenario:  30 vs 15 year mortgage
        When I search for a conventional 30 year loan
        And I search for a conventional 15 year loan
        Then the payments are higher for the 15 year loan

    Scenario:  Search returns valid results
        When I search for a conventional 30 year loan
        And I view the Amortization Schedule
        Then I see 360 payment rows