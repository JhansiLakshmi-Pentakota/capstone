package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class contact_page {
WebDriver driver;
@Test
public void Contact_1() throws InterruptedException{

driver=new ChromeDriver();
driver.manage().window().maximize();
driver.get("https://www.demoblaze.com/");
Thread.sleep(2000);	 
}
@Test
public void Contact_2() throws InterruptedException{
		driver.findElement(By.linkText("Contact")).click();
		Thread.sleep(2000);
}
@Test
public void Contact_3() throws InterruptedException{
	driver.findElement(By.id("recipient-email")).sendKeys("@gmail.com");
	driver.findElement(By.id("recipient-name")).sendKeys("Pujitha");
	driver.findElement(By.id("message-text")).sendKeys("Capstone Project");
	driver.findElement(By.xpath("//button[text()='Send message']")).click();
	Thread.sleep(3000);
}
@Test
	public void Contact_4() throws InterruptedException{
	Thread.sleep(3000);
	   driver.quit();
}
}