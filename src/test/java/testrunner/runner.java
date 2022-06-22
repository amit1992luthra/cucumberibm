package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/feature",
		glue ={"stepdefinition"},
		monochrome = true,
		dryRun = false,
		//tags={"@Regression","@Smoke"},  //And condition
		//tags={"@Regression,@Smoke"},  //OR condition
		//tags={"~@Regression"},  //skipping tag
		plugin = {"pretty","html:Reports","json:Reports/jsonreport.json","junit:Reports/xmlreport.xml" }
		)

public class runner {

}
