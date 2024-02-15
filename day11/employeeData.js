const ExcelJS = require('exceljs');

// Load a workbook from a file
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('employee_data_.xlsx')
    .then(function() {
        // Use the workbook
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow( function(row, rowNumber) {
            console.log('Row ' + rowNumber + ' = ' + JSON.stringify("id : "+row.values[1]+", AnnualSalary : " +row.values[2]));
        });          
});


 //writing in the file
 workbook.xlsx.readFile('employee_data2_.xlsx').then(() => {
    const worksheet = workbook.getWorksheet(1);

    // Add new columns
    worksheet.getColumn('C').header = 'BonusPercentage';
    worksheet.getColumn('D').header = 'BonusAmount';

    // Calculate bonuses
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header row
        const salary = row.getCell('B').value;
        let bonusPercentage, bonusAmount;

        if (salary < 50000) {
        bonusPercentage = 0.05;
        } else if (salary <= 100000) {
        bonusPercentage = 0.07; 
        } else {
        bonusPercentage = 0.1;
        }

        bonusAmount = salary * bonusPercentage;

        row.getCell('C').value = bonusPercentage;
        row.getCell('D').value = bonusAmount;
    });

    // Save the updated workbook
    return workbook.xlsx.writeFile('employee_data2_.xlsx');
    }).then(() => {
    console.log('Bonuses calculated and saved.');
    }).catch(err => {
    console.error('Error:', err);
    });
    
/*
//remove the added columns
workbook.xlsx.readFile('employee_data2_.xlsx').then(() => {
    const worksheet = workbook.getWorksheet(1);
  
    // Remove the added columns
    worksheet.getColumn('C').eachCell((cell) => {
      cell.value = null;
    });
    worksheet.getColumn('D').eachCell((cell) => {
      cell.value = null;
    });
  
    // Save the updated workbook
    return workbook.xlsx.writeFile('employee_data2_.xlsx');
  }).then(() => {
    console.log('Columns removed and file saved.');
  }).catch(err => {
    console.error('Error:', err);
  });
*/

    //writing in a new xlsx file 

    workbook.xlsx.readFile('employee_data_.xlsx').then(() => {
    const worksheet = workbook.getWorksheet(1);

    // Add new columns
    worksheet.getColumn('C').header = 'BonusPercentage';
    worksheet.getColumn('D').header = 'BonusAmount';

    // Calculate bonuses
    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber === 1) return; // Skip header row
        const salary = row.getCell('B').value;
        let bonusPercentage, bonusAmount;

        if (salary < 50000) {
        bonusPercentage = 0.05;
        } else if (salary <= 100000) {
        bonusPercentage = 0.07; 
        } else {
        bonusPercentage = 0.1;
        }

        bonusAmount = salary * bonusPercentage;

        row.getCell('C').value = bonusPercentage;
        row.getCell('D').value = bonusAmount;
    });

    // Save the updated workbook
    return workbook.xlsx.writeFile('employees_with_bonuses.xlsx');
    }).then(() => {
    console.log('Bonuses calculated and saved.');
    }).catch(err => {
    console.error('Error:', err);
    });

    //bonus features (Do them later )

