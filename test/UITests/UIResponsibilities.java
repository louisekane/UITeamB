import io.github.bonigarcia.wdm.WebDriverManager;
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
        //Setup driver
        WebDriver driver;

        WebDriverManager.chromedriver().setup();

        //Invoking browser
        driver = new ChromeDriver();
        ResponsibilitiesPage ResPage = new ResponsibilitiesPage();
        int tableSize =ResPage.GetTableSize(driver);


        for(int i =2;i<tableSize+2;i++){
            driver.get("http://localhost:3000/jobResponsibility/"+i);
            ResPage.GetTitle(driver);
            ResPage.CountResponsibilities(driver);
            driver.close();


        }
    }
}

