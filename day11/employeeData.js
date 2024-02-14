const ExcelJS = require('exceljs');

// Load a workbook from a file
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('employees.xlsx')
    .then(function() {
        // Use the workbook
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow( function(row, rowNumber) {
            console.log('Row ' + rowNumber + ' = ' + JSON.stringify("id : "+row.values[1]+", AnnualSalary : " +row.values[2]));
        });          
    });

    //calculating bonus 
    workbook.xlsx.readFile('example.xlsx')
        .then(function() {
            // Use the workbook
            const worksheet = workbook.getWorksheet(1);
    
            // Add two new columns
            worksheet.getColumn('C').values = ['BonusPercentage'];
            worksheet.getColumn('D').values = ['BonusAmount'];
    
            // Iterate over each row and fill the new columns
            worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
                if (rowNumber === 1) {
                    // Skip the header row
                    return;
                }
    
                // Get the value from the third column (C)
                const valueC = row.getCell(2).value;
    
                // Calculate values for the new columns
                var newValue1;
                if (valueC<50000) {
                    newValue1 = 5;
                }
                else if (valueC<100000) {
                    newValue1=7;
                } else {
                    newValue1=10;
                }
                
                const newValue2 = valueC+(valueC*newValue1)/100;
                // Set the values in the new columns for the current row
                row.getCell('C').value = newValue1;
                row.getCell('D').value = newValue2;
            });
    
            // Save the workbook with the new columns
            return workbook.xlsx.writeFile('employees.xlsx');
        })
        .then(function() {
            console.log('New columns added and filled successfully!');
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
/*
        workbook.xlsx.readFile('employees.xlsx')
        .then(function() {
            // Use the workbook
            const worksheet = workbook.getWorksheet(1);
            worksheet.eachRow( function(row, rowNumber) {
                console.log('Row ' + rowNumber + ' = ' + JSON.stringify("id : "+row.values[1]+", AnnualSalary : " +row.values[2]+", " + row.values[3]+", " + row.values[4]));
            });          
        }); 

*/

