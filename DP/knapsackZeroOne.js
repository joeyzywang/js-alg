// The value of the goods items.
var j = [10, 8, 9];

// The size of the goods items.
var t = [5, 4, 3];

// goods total number
var total = 3;

// knapsack capacity
var capacity = 10;

// dp[n][v]: The maximum value to fill n items into v capacity bag
var dp = new Array();

for(var n = 0; n <= total; n++){
	dp[n]=[];
}

function max(a, b){
	return (a > b) ? a : b;
}

// Don't change index

// for (var n = 0; n <= total; n++) {
// 	for (var v = 0; v <= capacity; v++) {
// 		if(n == 0 || v == 0){
// 			dp[n][v] = 0;
// 		}else{
// 			if(v < t[n-1]){
// 				dp[n][v] = dp[n-1][v];	
// 			}else{
// 				dp[n][v] = max(dp[n-1][v], dp[n-1][v - t[n-1]] + j[n-1]);
// 			}
// 		}
// 	}
// }

// Because array index start from zero, make it start from one to better understand
t.unshift(0);
j.unshift(0);

console.log("value array: ", j);
console.log("size array: ", t);

for (var n = 0; n <= total; n++) {
	for (var v = 0; v <= capacity; v++) {
		if(n == 0 || v == 0){
			dp[n][v] = 0;
		}else{
			if(v < t[n]){	// Just use n, not n-1 when refer to t					
				dp[n][v] = dp[n-1][v];	
			}else{
				dp[n][v] = max(dp[n-1][v], dp[n-1][v - t[n]] + j[n]); // Just use n, not n-1 when refer to t and j
			}
		}
	}
}

console.log("DP array: ", dp);
console.log("The maximum value of putting %d goods into a bag with capacity of %d is: %d", total, capacity, dp[total][capacity]);

var choice = []; // init choice array
for (var i = 0; i < total; i++) {
	choice[i] = 0;
}

var remainCapacity = capacity;
for (var i = total; i > 0; i--) {
	if( dp[i][remainCapacity] > dp[i-1][remainCapacity]){
		choice[i-1] = 1;
		remainCapacity = remainCapacity - t[i];
	}
}

choice.unshift(0); // Add 0 in front of the array to match the 0 in t and j

console.log("choice: ", choice);
