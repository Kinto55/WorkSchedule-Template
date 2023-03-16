// Table Styling
const table = document.querySelector('table');
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.maxWidth = '800px';
table.style.margin = '20px auto';
table.style.border = '2px solid #f44336';
table.style.fontSize = '18px';
table.style.textAlign = 'center';
table.style.color = '#f44336';
table.style.backgroundColor = '#ffebee';

// Table Header Styling
const tableHeader = table.querySelector('thead');
const tableHeaderRows = tableHeader.querySelectorAll('tr');
tableHeader.style.backgroundColor = '#f44336';
tableHeader.style.color = 'white';
tableHeaderRows[0].querySelector('th').setAttribute('colspan', '5');
tableHeaderRows[1].querySelectorAll('th').forEach(th => {
	th.style.padding = '10px';
});

// Table Body Styling
const tableBody = table.querySelector('tbody');
const tableBodyRows = tableBody.querySelectorAll('tr');
tableBodyRows.forEach((row, index) => {
	row.style.backgroundColor = index % 2 === 0 ? '#ffebee' : '#ffe0e0';
	row.querySelectorAll('td').forEach(td => {
		td.style.padding = '10px';
		td.style.borderBottom = '1px solid #f44336';
	});
});