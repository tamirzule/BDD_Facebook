package Step;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.SendKeysAction;
import org.openqa.selenium.support.ui.Select;

import Util.Lib;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class GUIStepDefination extends Lib {
	private static final String SendKey = null;
	public static WebDriver driver = null;

	@Before
	public void initialiaz() {
		System.setProperty("webdriver.chrome.driver", "src/test/resource/Objectrepo/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get("https://www.facebook.com/");

	}

	@Given("^user at homepage$")
	public void FBhp() {
		System.out.println("My facebook hp is: " + driver.getTitle());
		String exptitle="Facebook - Log In or Sign Up";
		String acttitle=driver.getTitle();
		Assert.assertEquals("this is not hp please reset", exptitle,acttitle);
	}
//	@When("^user enter the email \"([^\"]*)\"$")
//	public void user_enter_the_email(String arg1) throws Throwable {
//		Findele(driver, readproperties("email")).sendKeys(arg1);
//	}
//
//	@When("^user enter the password \"([^\"]*)\"$")
//	public void user_enter_the_password(String arg1) throws Throwable {
//		Findele(driver, readproperties("password")).sendKeys(arg1);
//	}
//
//	
//	@When("^user enter the email$")
//	public void email() throws IOException {
//		Findele(driver, readproperties("email")).sendKeys("tamir@gmail.com");
//	}
//
//	@And("^user enter the password$")
//	public void password() throws IOException {
//		Findele(driver, readproperties("password")).sendKeys("123wsedrf");
//	}
//	@And("^user click on login button$")
//	public void click() throws IOException {
//		Findele(driver,readproperties("loginbutton")).click();
//	
//	}
//	@Then("^user see the login result$")
//	public void result() throws IOException {
//		String reponse=Findele(driver, readproperties("errormsg")).getText();
//		System.out.println("This is the result message: "+reponse);
//	}
//	@After
//	public void teardown() {
//		driver.manage().deleteAllCookies();
//		driver.close();
//		
//		
//	}
//	

	@When("^user enter fristname \"([^\"]*)\"$")
	public void user_enter_fristname(String arg1) throws Throwable {
		Findele(driver, readproperties("signup_fristname")).sendKeys(arg1);
	}

	@When("^user enter lastname \"([^\"]*)\"$")
	public void user_enter_lastname(String arg1) throws Throwable {
		Findele(driver, readproperties("signup_lastname")).sendKeys(arg1);
	}

	@When("^user enter email \"([^\"]*)\"$")
	public void user_enter_email(String arg1) throws Throwable {
		Findele(driver, readproperties("signup_email")).sendKeys(arg1);
	}

	@When("^user enter newpassword \"([^\"]*)\"$")
	public void user_enter_newpassword(String arg1) throws Throwable {
		Findele(driver, readproperties("signup_password")).sendKeys(arg1);
	}

	@When("^user enter fristname$")
	public void su_firstname() throws IOException {
		Findele(driver, readproperties("signup_fristname")).sendKeys("zule");
	}

	@And("^user enter lastname$")
	public void su_lastname() throws IOException {
		Findele(driver, readproperties("signup_lastname")).sendKeys("tamir");
	}

	@And("^user enter email$")
	public void su_email() throws IOException {
		Findele(driver, readproperties("signup_email")).sendKeys("tatartamir@gmail.com");
	}

	@And("^user enter newpassword$")
	public void su_password() throws IOException {
		Findele(driver, readproperties("signup_password")).sendKeys("asdasdqwdf1123@");
	}

	@After
	public void teardown() {
		driver.manage().deleteAllCookies();
		driver.close();
	}
}
