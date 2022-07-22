import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

public class HomePage {

    public void CheckHomePageTitle(WebDriver driver){
        Assert.assertTrue(driver.findElement(By.xpath("//main//h1")).getText().contains("Home Page"));

    }

    public void ChechIfJobRoleLinkIsActice(WebDriver driver){
        Assert.assertTrue(driver.findElement(By.linkText("Job Roles")).isEnabled());
    }
}
