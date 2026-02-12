package stepdefinitions_con;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.contact_page;
public class step_contact extends contact_page {
	WebDriver driver;
	contact_page  contactpage;
		@Given("User opens Demoblaze")
		public void user_opens_demoblaze()throws InterruptedException  {
			Contact_1();
			contactpage = new contact_page();
	}
        @When("User clicks contact link")
		public void user_clicks_contact_link()throws InterruptedException {
		Contact_2();	
		}
        @When("User enters contact details")
		public void user_enters_contact_details()throws InterruptedException  {
		Contact_3();	
	}
	   @Then("Contact message sent")
		public void contact_message_sent()throws InterruptedException  {
		Contact_4();	
		}
}




