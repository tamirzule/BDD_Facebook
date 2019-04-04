Feature: Facebook mutily user login functionality

@mutily
Scenario Outline: Facebook mutily user login sucess test case

	Given user at homepage
	When user enter the email "<email>"
	And user enter the password "<password>"
	And user click on login button
	Then user see the login result
	
Examples: 
	|email|password|
	|tamir@gmail.com|jhbhjghgday|
	|bryan@gmail.com|jhjkasduiq|
	|ferd@gmail.com|jhjhyuqasd|
	
	
	Data driven testing