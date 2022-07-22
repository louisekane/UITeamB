import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class ResponsibilitiesPage {
    public int GetTableSize(WebDriver driver) {
        //Setup driver
        WebDriver secondDriver;

        WebDriverManager.chromedriver().setup();

        //Invoking browser
        secondDriver = new ChromeDriver();
        secondDriver.get("http://localhost:3000/jobRoles");
        int size = secondDriver.findElements(By.xpath("//table")).size();
        secondDriver.close();
        return size;
    }

    public void GetTitle(WebDriver driver) {
        Assert.assertTrue(driver.findElement(By.xpath("//main//h1")).getText().contains("Responsibilities"));
    }

    public void CountResponsibilities(WebDriver driver) {

        Assert.assertTrue(driver.findElements(By.tagName("tr")).size() != 0);
    }
}