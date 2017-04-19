/*
Longest common substring vs. Longest common subsequence
LCstr means the substring is continuous.
LCseq means the sequence is not continuous, can be intermittent.
eq:
	S = "abbbcccddd" T = "abcd"
	The later one is "abcd", the formaer one is "ab"
 */

// longest common substring
// dp[i][j] represents s[i] and t[j] has longest common string when s[i] t[j] equals with each other
var lcs = function(s, t){
	var shortStr = s;
	var longStr = t;
	if(s.length > t.length){
		shortStr = t;
		longStr = s;
	}
	var max = 0;
	var longestString = "";
	var dp = new Array();
	for (var i = 0; i <= shortStr.length; i++) {
		dp[i] = [];
	}

	for (var i = 0; i <= shortStr.length; i++) {
		for (var j = 0; j <= longStr.length; j++) {
			if(i == 0 || j == 0){
				dp[i][j] = 0;
			}else{
				if(shortStr[i-1] == longStr[j-1]){
					dp[i][j] = dp[i-1][j-1] + 1;
					if(max < dp[i][j]){
						max = dp[i][j];
						longestString = shortStr.substr(i - max, max)
					}
				}else{
					dp[i][j] = 0; // 讲究连续！！！ 如果断了就重新开始。
				}
			}
		}
	}
	// console.log(dp);
	console.log("max length is %s, and the longest common substring is %s.", max, longestString);
	
}

lcs("abababcbab", "babcda");

// longest common subsequence
var lcseq = function(s, t){
	var shortStr = s;
	var longStr = t;
	if(s.length > t.length){
		shortStr = t;
		longStr = s;
	}
	var max = 0, maxi = 0, maxj = 0;
	var dp = new Array();
	var longestsubseq = [];
	for (var i = 0; i <= shortStr.length; i++) {
		dp[i] = [];
	}

	for (var i = 0; i <= shortStr.length; i++) {
		for (var j = 0; j <= longStr.length; j++) {
			if(i == 0 || j == 0){
				dp[i][j] = 0;
			}else{
				if(shortStr[i-1] == longStr[j-1]){
					dp[i][j] = dp[i-1][j-1] + 1;
					if(max < dp[i][j]){
						max = dp[i][j];
						maxi = i;
						maxj = j;
					}
				}else{
					dp[i][j] = dp[i-1][j-1]; // 不管连续与否！！！ 断了可以保留。
				}
			}
		}
	}
	for (var i = maxi; i > 0; i --) {
		if( dp[i][maxj] == (dp[i-1][maxj-1] + 1) ){
			longestsubseq.unshift(shortStr[i-1]);
		}
		maxj -= 1;		
	}
	// console.log(dp);
	console.log("max length is %s, and the longest common subsequence is %s.", max, longestsubseq.join(''));
}

lcseq("abababcbab", "babcda");