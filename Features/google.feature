@selenium
Feature: Google

	@google
	Scenario: Hello Google
		Given I go to google
		Then I see the title Google