/*
Longest common substring vs. Longest common subsequence
LCstr means the substring is continuous.
LCseq means the sequence is not continuous, can be intermittent.
eq:
	S = "abbbcccddd" T = "abcd"
	The later one is "abcd", the formaer one is "ab"
 */

var lcs = function(s, t){
	var shortStr = s;
	var longStr = t;
	if(s.length > t.length){
		shortStr = t;
		longStr = s;
	}

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
				}else{
					dp[i][j] = 0;
				}
			}
		}
	}
	console.log(dp);
	console.log(dp[shortStr.length][longStr.length]);
	
}

lcs("abababcbab", "babcda");