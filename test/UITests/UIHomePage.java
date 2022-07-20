package UITests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class UIHomePage {
    public static void main(String[] args){
        //path to chromedriver
        System.setProperty("webdriver.chrome.driver",/* path to chromdriver */);

        //Invoking browser
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000/home");

        // Verify Home Page title
        String actualTitle = "Team B";
        String HomePageTitle = driver.getTitle();
        Assert.assertEquals(actualTitle,HomePageTitle);
        //check if link is active
        Assert.assertTrue(driver.findElement(By.linkText("View job roles table")).isEnabled());


        driver.quit();
    }
}
