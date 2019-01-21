function bubble(arr,n){
	var temp;
	for(var i=0;i<n-1;i++){
		if(arr[i]>arr[i+1]){
			temp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=temp;
		}
	}
}
	function bubbleSort(arr,n){

		for(var i=n;i>=1;i--){

		bubble(arr,i);
	}
}
var arr=[6,5,1,2,3,9,8,4,7];
bubbleSort(arr,9);
for(var i=8;i>=	0;i--){
	console.log(arr[i]);
}