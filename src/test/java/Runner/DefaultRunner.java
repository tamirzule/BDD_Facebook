package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resource/Feature",
glue={"Step"}, format = {"pretty","html:target/cucumber"},tags="@mutily")
		

public class DefaultRunner {
	
	

}
