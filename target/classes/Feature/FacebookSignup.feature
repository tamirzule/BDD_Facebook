Feature: Facebook Signup functionaltily 

Scenario Outline: Facebook Signup functionaltily test case 

	Given user at homepage 
	When user enter fristname "<fristname>" 
	And user enter lastname "<lastname>" 
	And user enter email "<email>" 
	And user enter newpassword "<newpassword>" 
	#	And user_select_month
	#	And user_select_date
	##	And user_select_year
	##	And user_select_gender
	##	And user_click_signup_button
	##	Then user_see_signup_result
	
	Examples: 
		|fristname|lastname|email|newpassword|
		|zule|tamir|zule@gmail.com|123321|
		|byran|ali|byran@gmail.com|9878217|