package UITests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class UIResponsibilities {
    public static void main(String[] args){
        //Add path to your chromedriver
        System.setProperty("webdriver.chrome.driver","/Users/mariusz.skowronskikainos.com/Desktop/Academy_Project/drivers/chromedriver");

        //Invoking browser
        WebDriver driver = new ChromeDriver();

        driver.get("http://localhost:3000/home");

        // Verify Home Page title
        String actualTitle = "Team B";
        String HomePageTitle = driver.getTitle();
        Assert.assertEquals(actualTitle,HomePageTitle);
        //check if link is active
        Assert.assertTrue(driver.findElement(By.linkText("View job roles table")).isEnabled());
        // find link and click it
        driver.findElement(By.linkText("View job roles table")).click();

        //Verify Job Roles table page
        String actualJobRolesTitle = "Team B";
        String JobRolesTitle = driver.getTitle();
        Assert.assertEquals(actualJobRolesTitle,JobRolesTitle,"Proper job role page");

        //Verify that Job Roles table is visible and contains data
        String JobRolesTable = driver.findElement(By.xpath("//main//h2")).getText();
        Assert.assertEquals(JobRolesTable,"List of Job Roles");

        System.out.println(JobRolesTable +" contains: ");
        //Get table contents from Job Roles Page
        List<WebElement> table = driver.findElements(By.tagName("table"));
        //Iterate over rows in table and find elements with "a" tagName
        for(WebElement row : table) {
            List<WebElement> cells = row.findElements(By.tagName("a"));
            //Iterate over cells in rows and print job roles
            for(WebElement cell:cells){
                if(!cell.getText().equals("View Specification")){
                    System.out.println(cell.getText()+" role, which leads to: ");
                    //click link to job role responsibilities
                    cell.click();
                    //Create object of the page
                    ResponsibilitiesPage ResPage = new ResponsibilitiesPage();

                    driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
                    ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
                    driver.switchTo().window(newTab.get(1));
                    // get job role on job responsibilities page
                    ResPage.GetTitle(driver);
                    //count responsibilities
                    ResPage.CountResponsibilities(driver);
                    //close tab
                    driver.close();
                    driver.switchTo().window(newTab.get(0));
                }else
                    continue;

            }
        }

        driver.quit();

    }

}
