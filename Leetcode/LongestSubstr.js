// Given a string, return the length of the longest substring without 
// repeating characters.
// ---Ex:
// lenLongestSubstr("abcabcbb");// is equal to 3 since "abc"
// lenLongestSubstr("bbbbb");   // is equal to 1 since "b"

function lenLongestSubstr(s) {
	let WindowMap = {};
	let windowStart = 0;
	let maxLength = 0;
	for ( let i = 0; i < s.length; i++) {
		const endChar = s[i];
		
		if (WindowMap[endChar] >= windowStart)
		{
			windowStart = WindowMap[endChar] + 1;
		}
		WindowMap[endChar] = i;
		maxLength = Math.max(maxLength, i - windowStart +1);
	}
	return maxLength;
}

module.exports = lenLongeestSubstr;
