var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;

var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];

shopping[0];
// returns "bread"

shopping[0] = 'tahini';
shopping;
// shopping vai retornar agora [ "tahini", "milk", "cheese", "hummus", "noodles" ]

random[2][2];

sequence.length;
// deve retornar 7

var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
myArray;
myArray.length;
myArray[0]; // the first item in the array
myArray[1]; // the second item in the array
myArray[myArray.length-1]; // the last item in the array

var myNewString = myArray.join(',');
myNewString;

var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger

var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
var newLength = myArray.push('Bristol');
myArray;
newLength;
myArray.pop();
var removedItem = myArray.pop();
myArray;
removedItem;
myArray.unshift('Edinburgh');
myArray;
var removedItem = myArray.shift();
myArray;
removedItem;
