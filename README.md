
This is a Test for the React class at [CodeYourFuture](http://codeyourfuture.co)

Description
---
We will use the UNHCR API to retrieve and display some of their data.

For more information about UNHCR API and the data it provides, you can read the [API documentation](http://data.unhcr.org/wiki/index.php/API_Documentation.html)

For this exercise, we are using two of the APIs provided by UNHCR:

* **[`GET stats/country_of_residence`](http://data.unhcr.org/wiki/index.php/Get-stats-country-of-residence.html)**: Which returns an array of countries that we we are using to display the list of countries by `CountriesList` component.

* **[`GET stats/demographics`](http://data.unhcr.org/wiki/index.php/Get-stats-demographics.html)**: which returns statistics about the number of refugees admitted to that country in a specific year.
The request url is similar to this:
http://data.unhcr.org/api/stats/demographics.json?year=2013&country_of_residence=TUR

Task 1 - Make a Component to display the Country Details
---
We are already retrieving the list of countries from the Countries API and displaying them on a component called CountriesList.

We are also making a call to the demographics API (with hardcoded values to retrieve data for Turkey in 2013) - the data is displayed in App.js in the code below.

```
<div className="app-country-statistics">
  <strong>Country: </strong>{this.state.countryData.country_of_residence_en}<br/>
  <strong>Year: </strong>{this.state.countryData.year}<br/>
  <strong>Female Refugees: </strong>{this.state.countryData.female_total_value}<br/>
  <strong>Male Refugees: </strong>{this.state.countryData.male_total_value}<br/>
</div>
```

* Move that code to a Component called CountryDetails
* Place it under the folder /components
* Import it into App.js and use it to display the same data
* Hint: For ideas on how to track the selection of the list, check out [here](http://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down)
* Hint: the countryData would have to be passed to the new Component you create as xxxx


Task 2 - Display the details of the selected country
---

We now hardcode the URL to get Turkey's statistics in 2013. In this step we will get the statistics for the country selected in the list when the user clicks on the button.


* Instead of displaying the Country Details when the page loads, move it to be displayed when the user clicks on the `Retrieve Country Statistics` button.
* You will probably need to keep track of what country is selected by the user (does it go into props or state?) and pass it in the URL.
* Leave the year hardcoded as 2013 for now.

Task 3 - Write a Test
---
At your CountryDetails, we display the Total number of female and male refugees. Even though the API returns the Total number of refugees, it seems it's calculating it wrongly sometimes, hence we will do the calculation ourself by adding the two values and displaying the total.

* Instead of writing the functionality for the Total directly, write a Test for it first in a file called CountryDetails.test.js
 * You can start by writing a test for the existing functionality
 * Add a Test for the Total functionality (which will fail initially )
 * Then implement the functionality for Total and see your Test pass.
 * For info about running tests, you can check out the [create-react-app documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
