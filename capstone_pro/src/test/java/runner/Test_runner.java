package runner;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

	@CucumberOptions(
	        features ="src/test/resources/Feature/contact.feature",   
	        glue = "stepdefinitions_con",                  
	        plugin = {
	                "pretty",
	                "html:target/cucumber-reports.html",
	                "json:target/cucumber.json"
	        },
	        monochrome = true,
	        publish = true
	)

	public class Test_runner extends AbstractTestNGCucumberTests {

	}


