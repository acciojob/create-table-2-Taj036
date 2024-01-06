function createTable() {
    //Write your code here
  let row = prompt('Input number of rows');
  let col = prompt('Input number of columns');
	createTable1(row , col)
}
function createTable1(row , col){
	let table = document.getElementById('myTable');
	let tablehtml = '';
	for(let i = 0 ; i< row ; i++){
		tablehtml += '<tr>' ;
		for(let j = 0 ; j < col ; j++){
			tablehtml += `<td>Row-${i} Column-${j}</td>`;
		}
		tablehtml += '</tr>'
	}
	table.innerHTML = tablehtml ;
}
