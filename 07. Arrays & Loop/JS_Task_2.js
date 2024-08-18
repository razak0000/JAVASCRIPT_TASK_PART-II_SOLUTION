// Generate the following series in your browser. See example output.
    // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
    // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
    // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function generateSeries() {
    let series = [];
    let start = 1;
    let end = 15;
    let step = 1;
    let even = true;
    let odd = true;
    let k = 2;
    let seriesType = prompt("Enter the series type (a, b, c, d, e):");
    if (seriesType === "a") {
    for (let i = start; i <= end; i += step) {
    series.push(i);
    }
    } else if (seriesType === "b") {
     for (let i = end; i >= start; i -= step) {
    series.push(i);
    }
  } else if (seriesType === "c") {
    for (let i = 0; i <= end; i += 2) {
    series.push(i);
    }
    } else if (seriesType === "d") {
    for (let i = 1; i <= end; i += 2) {
    series.push(i);
    }
    } else if (seriesType === "e") {
        while (k <= end) {
            series.push(k * 2);
            k += 2;
            }
            }
            return series;
            }
    generateSeries();
    console.log(generateSeries());
    // Call the function to test it


/* --------------------------------------------------------------------------------- */