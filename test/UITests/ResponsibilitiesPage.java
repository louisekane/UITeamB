package UITests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ResponsibilitiesPage {

       public void GetTitle(WebDriver driver){
           System.out.println(driver.findElement(By.xpath("//main//h2")).getText()+" table");
       }

       public void CountResponsibilities(WebDriver driver){
           System.out.println("with " +driver.findElements(By.tagName("tr")).size()+" responsibilities");
       }
}

