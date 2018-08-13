package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
		features = "C:\\bin\\Eclipse-Tests\\FreeCrmBDDFramework\\src\\main\\java\\Features\\tagging.feature",
		glue= {"stepDefinitions"},
		format= {"pretty","html:test-outlook", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		dryRun = true,
		monochrome = true,
		strict = true
		//tags = {"@SmokeTest , @RegressionTest"}
		)


public class TestRunner {

}


// OR : tags = {"@SmokeTest , @RegressionTest"}
//AND : tags = tags = {"@SmokeTest , @RegressionTest"}
//~ ignores tags : {"@SmokeTest , ~@RegressionTest"}