'use strict';
//Global variable for hours of ooperation.
const hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];
//Global container
const containerEl = document.getElementById('location');
//random number generator
function randomNumCustomer(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let allLocation = [];

let seattle = new CookieSales('Seattle', 23, 65, 6.3);
let tokyo = new CookieSales('Tokyo', 3, 24, 1.2);
let dubai = new CookieSales('Dubai', 11, 38, 3.7);
let paris = new CookieSales('Paris', 20, 38, 2.3);
let lima = new CookieSales('Lima', 2, 16, 4.6);

//class function
function CookieSales(city, minNumberCustomer, maxNumberCustomer, avgCookie) {
  this.city = city;
  this.minNumberCustomer = minNumberCustomer;
  this.maxNumberCustomer = maxNumberCustomer;
  this.avgCookie = avgCookie;
  this.cookiesSoldPerHour = [];
  this.dailyTotal = 0;

  allLocation.push(this);
}
//header
function renderHeader (){
  let firstTh = document.createElement('thead');
  tableEl.appendChild(firstTh);
  let tr = document.createElement('tr');
  firstTh.appendChild(tr);
  //empty cell
  let thEmptyCell = document.createElement('th');
  tr.appendChild(thEmptyCell);

  for (let i = 0; i < hours.length; i++) {
    let thHeader = document.createElement('th');
    thHeader.textContent = `${hours[i]} `;
    tr.appendChild(thHeader);
    thHeader.id = 'storeHours';
  }
  let totalDaily = document.createElement('th');
  totalDaily.textContent = 'Daily Location Total';
  tr.appendChild(totalDaily);
  totalDaily.id = 'lastEl';
}


//prototype fx
CookieSales.prototype.calculateCookie = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomer = randomNumCustomer(
      this.maxNumberCustomer,
      this.minNumberCustomer
    );
    let hourlyTotal = Math.ceil(randomCustomer * this.avgCookie);
    this.cookiesSoldPerHour.push(hourlyTotal);
    this.dailyTotal += hourlyTotal;
  }
};

const tableEl = document.createElement('table');
containerEl.appendChild(tableEl);
tableEl.id = 'table';
//Adding hours to the th


//adding daily total


//render Function
CookieSales.prototype.render = function () {
  this.calculateCookie();

  const row1 = document.createElement('tr');
  tableEl.appendChild(row1);

  const tableBody = document.createElement('td');
  tableBody.textContent = this.city;
  row1.appendChild(tableBody);
  tableBody.id = 'cities';


  for (let i = 0; i < hours.length; i++) {
    let td2 = document.createElement('td');
    td2.textContent = `${this.cookiesSoldPerHour[i]}`;
    row1.appendChild(td2);
    td2.id = 'sales';

  }
  let storeTotal = document.createElement('td');
  storeTotal.textContent = `${this.dailyTotal}`;
  row1.appendChild(storeTotal);
  storeTotal.id = 'lastNums';
};

//total from all location
function total() {
  let tfootElem = document.createElement('tfoot');
  tableEl.appendChild(tfootElem);
  const trFooterElem = document.createElement('tr');
  trFooterElem.textContent = 'Totals';
  tfootElem.appendChild(trFooterElem);
  trFooterElem.id = 'footer';
  let totalsRow = [];
  for (let i = 0; i < hours.length; i++) {
    let hourlySum = 0;
    for (let j = 0; j < allLocation.length; j++) {
      hourlySum += allLocation[j].cookiesSoldPerHour[i];
    }
    totalsRow.push(hourlySum);

  }
  for (let i=0; i<totalsRow.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = totalsRow[i];
    trFooterElem.appendChild(tdElem);
  }
  let grandTotal = 0;
  for (let i =0; i<totalsRow.length; i++){
    grandTotal += totalsRow[i];
  }
  let lastCell = document.createElement('td');
  trFooterElem.appendChild(lastCell);
  lastCell.textContent = grandTotal;

}

renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
total();
