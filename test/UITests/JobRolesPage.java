import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.List;

public class JobRolesPage {
    public void getJobRolePageTitle(WebDriver driver) {
        Assert.assertEquals("Job Roles", driver.findElement(By.xpath("//body//div[2]//h1")).getText());

    }

    public void getContentOfJobRolesTable(WebDriver driver) {
        //Get table contents from Job Roles Page
        List<WebElement> table = driver.findElements(By.tagName("table"));
        //Iterate over rows in table and find elements with "a" tagName
        for (WebElement row : table) {
            List<WebElement> cells = row.findElements(By.tagName("a"));
            //Iterate over cells in rows and print job roles
            for (WebElement cell : cells) {
                if (!cell.getText().equals("View Specification")) {
                    Assert.assertTrue(!cell.getText().equals(""));
                } else {
                    Assert.assertTrue(driver.findElement(By.linkText("View Specification")).isEnabled());

                }
            }
        }
    }

    public void CheckIfLinksToJobResponsibilitiesAreActive(WebDriver driver) {
        //Get table contents from Job Roles Page
        List<WebElement> table = driver.findElements(By.tagName("table"));
        //Iterate over rows in table and find elements with "a" tagName
        for (WebElement row : table) {
            List<WebElement> cells = row.findElements(By.tagName("a"));
            //Iterate over cells in rows and print job roles
            for (WebElement cell : cells) {
                if (!cell.getText().equals("View Specification")) {
                    Assert.assertTrue(cell.isEnabled());
                } else {
                    ;
                }
            }
        }
    }

    public void CheckIfLinksToResponsibilitiesOpenNewTabWithResponsibilities(WebDriver driver) {
        //Get table contents from Job Roles Page
        List<WebElement> table = driver.findElements(By.tagName("table"));
        //Iterate over rows in table and find elements with "a" tagName
        for (WebElement row : table) {
            List<WebElement> cells = row.findElements(By.tagName("a"));
            //Iterate over cells in rows and print job roles
            for (WebElement cell : cells) {
                if (!cell.getText().equals("View Specification")) {
                    cell.click();
                    ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
                    driver.switchTo().window(newTab.get(1));
                    Assert.assertTrue(driver.getCurrentUrl().contains("Responsibility"));
                    driver.close();
                    driver.switchTo().window(newTab.get(0));
                } else {
                    ;
                }
            }
        }


    }
    public void CheckIfTableContainsBand (WebDriver driver){
        Assert.assertEquals(driver.findElement(By.xpath("//table//tr//th[5]")).getText(),
                "Band");

    }
    public void CheckIfTableContainsSpecification(WebDriver driver){
        Assert.assertEquals(driver.findElement(By.xpath("//table//tr//th[2]")).getText(),
                "Specification");

    }
    public void CheckIfTableContainsCapability (WebDriver driver){
        Assert.assertEquals(driver.findElement(By.xpath("//table//tr//th[4]")).getText(),
                "Capability");

    }
}


