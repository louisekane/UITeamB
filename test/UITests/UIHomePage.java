
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class UIHomePage {
    public static void main(String[] args){
        //Setup driver
        WebDriver driver;

        WebDriverManager.chromedriver().setup();

        //Invoking browser
        driver = new ChromeDriver();

        driver.get("http://localhost:3000/home");
        HomePage HPage = new HomePage();
        // Verify Home Page title
        HPage.CheckHomePageTitle(driver);
        //check if link is active
        HPage.ChechIfJobRoleLinkIsActice(driver);

        driver.quit();
    }
}
