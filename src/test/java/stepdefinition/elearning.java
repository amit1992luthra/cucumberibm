package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class elearning {
	
	WebDriver driver;
	
	@Given("User is on homepage")
	public void user_is_on_homepage() {
		
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
	    
	}

	
	
	@When("user enter invalid Username {string} and password {string}")
	public void user_enter_invalid_Username_and_password(String username, String password) {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);	   
	}

	

@When("user enter valid Username {string} and password {string}")
public void user_enter_valid_Username_and_password(String string, String string2) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("User enter value in user name field")
public void user_enter_value_in_user_name_field() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("user enter value in password field")
public void user_enter_value_in_password_field() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Then("Login button enabled")
public void login_button_enabled() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

	@When("user click on Submit button")
	public void user_click_on_Submit_button() {
		
		driver.findElement(By.name("login")).click();
	}

	@Then("validation message appears")
	public void validation_message_appears() {
	   System.out.println("validation message verified");
	}

	@When("user enter valid credentials")
	public void user_enter_valid_credentials() {
	   
	}

	@Then("User navigates to home page")
	public void user_navigates_to_home_page() {
	    
	}


}
