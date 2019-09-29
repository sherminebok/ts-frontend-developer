// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function(n) 
{
    int value = Integer.parseInt(n);
	int total;
	int sum = 0;
	   
	for(total=1; total<=value; total++)
	{
		sum += total;
	}
    
	return sum;
};
