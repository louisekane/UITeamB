import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.List;

public class UIJobRoles {
    public static void main(String[] args) {

        //Setup driver
        WebDriver driver;

        WebDriverManager.chromedriver().setup();

        //Invoking browser
        driver = new ChromeDriver();


        driver.get("http://localhost:3000/jobRoles");


        JobRolesPage JRPage = new JobRolesPage();
        //Verify Job Roles table page

        JRPage.getJobRolePageTitle(driver);

        JRPage.getContentOfJobRolesTable(driver);

        JRPage.CheckIfLinksToJobResponsibilitiesAreActive(driver);

        JRPage.CheckIfLinksToResponsibilitiesOpenNewTabWithResponsibilities(driver);

        JRPage.CheckIfTableContainsSpecification(driver);

        JRPage.CheckIfTableContainsCapability(driver);

        JRPage.CheckIfTableContainsBand(driver);
        driver.quit();

    }
}
