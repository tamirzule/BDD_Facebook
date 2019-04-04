package Util;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Lib {
	public static WebElement Findele(WebDriver driver, String xpath) {
		return driver.findElement(By.xpath(xpath));
	}

	public static void waitfor(int a) throws InterruptedException {
		Thread.sleep(a * 1000);
	}

	public static String ReadExcel(int rown, int coln) throws IOException {

		// I have placed an excel file 'Test.xlsx' in my D Driver
		FileInputStream fis = new FileInputStream("src//test//java//Util//Parabank.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(fis);
		XSSFSheet sheet = workbook.getSheetAt(0);
		// I have added test data in the cell A1 as "SoftwareTestingMaterial.com"
		// Cell A1 = row 0 and column 0. It reads first row as 0 and Column A as 0.
		Row row = sheet.getRow(rown);
		Cell cell = row.getCell(coln);

		String value = cell.getStringCellValue();
		return value;

	}

	public static String readproperties(String Key) throws IOException {
		Properties prop = new Properties();
		InputStream input = new FileInputStream("src/test/resource/Objectrepo/Xpath.properties");

		// load a properties file
		prop.load(input);

		String value = prop.getProperty(Key);
		return value;
	}
}
