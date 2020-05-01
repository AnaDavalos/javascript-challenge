// from data.js
var tableData = data;

// Populating table
var tbody = d3.select("tbody");

function buildTable(data) {
  
  tbody.html("");

  // Loop and execution using arrow function
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Looping through each cell and appending 
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // From class activity
  d3.event.preventDefault();

  // Date tiem from filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);



//   var inputfield = d3.select("#datetime").on("input",myFilterFunction);
//   var button = d3.select("#filter-btn");

// //   function handleClick(){
// //     console.log(inputfield)

// function myFilterFunction(){
//     console.log("Hi there!")


// }





// //   }

//   button.on("click", function() {
//     console.log(inputfield)
//   });

  // function handlesubmit() {
    // Input Date Value
    // var chosen_date = d3.select("datetime").node().value();
    // console.log(chosen_date);

    // Button Activation

    // Build Table Filter
    // var sighting_button = d3.select("")

    // clear the input value
    // d3.select("datetime").node().value = "";
