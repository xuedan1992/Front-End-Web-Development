//1、JS输入手机号码加空格,input的id="mobile"
function Mobile2(){
	var obj = document.getElementById('mobile')
	var value = obj.value;
    value = value.replace(/\s*/g, "");//\s*：匹配0个或多个空格，会尽可能多的匹配
    var result = [];
    for(var i = 0; i < value.length; i++){
        if (i==3||i==7){
            result.push(" " + value.charAt(i));
        }else{
            result.push(value.charAt(i));
        }
    }
    obj.value = result.join("");
}
//*****************************************************************************************
//2、求数列前m项和，第一项为n，以后各项为前一项的开平方。
var n = 81;
var m = 4;
var num = 0;
for (var i = 0; i < m; i++) {
	num = num + n;
	n = Math.sqrt(n);//开平方
};
console.log(num.toFixed(2));//保留两位小数
//*****************************************************************************************
//3、递归函数，用于求阶乘
function factorial(x){
	if (x === 0) {
		return 1;
	}else{
		return x*factorial(x-1);
	}
}
//*****************************************************************************************
//4、定义二维数组
//定义二维数组
var arr = new Array();
for (var i = 0; i < 2; i++) {
	arr[i] = new Array();
	for (var j = 0; j < 3; j++) {
		arr[i][j] = '';
	};
};
//遍历二位数组
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		alert("第"+i+"行 第"+j+"列 的值为："+arr[i][j]);
	};
};
//*****************************************************************************************
//5、判断一个正整数是否为素数（质数）
//素数：一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数（即不再有其他因子），否则称为合数。10以内素数：2,3,5,7
function isPrimeNum(n){
	for (var i = 2; i < n; i++){//如果n=2，则for循环(i<n)不成立，直接略过for循环，返回true
		if (n % i == 0) {
			return false;
		};
	}
	return true;
}
//将n以内素数存入数组
function findPrimeNum(num){
	for (var i = 2; i < num; i++) {
		if (isPrimeNum(i)) {
			primeArray.push(i);
		};
	};
}
//两重for循环实现一个数组内两个元素相加，(3+5和5+3算一次)
for (var i = 0; i < primeArray.length; i++) {
	for (var j = i; j < primeArray.length; j++) {//初始化j=i很关键
		if (primeArray[i]+primeArray[j] === num) {
			plus++;
		};
	};
};
//*****************************************************************************************
//6、break跳出最外层for循环：
outer:
for (var i = 0; i < n; i++) {
	inter:
	for (var j = 0; j < n; j++) {
		if (6*i+8*j == n) {
			number = i+j;
			break outer;//如果只是break的话，则跳出与break最接近的那一层，即inter。
		};
	};
};
//*****************************************************************************************
//7、从数组中删除指定元素的方法
function removeByValue(arr,val){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			arr.splice(i,1);//splice方法会改变原数组，slice方法不会改变原数组。
			break;
		};
	};
}
var someArr = ["mom","tue","wed","thur"];
removeByValue(someArr,"tue");
//someArr will now have "mom","wed","thur";
//*****************************************************************************************
//8、排序函数（冒泡排序）
var a = [20,35,23,40];
function numDescSort(a , b){
	return a - b;
}
console.log(a.sort(numDescSort));//[20,23,35,40];
console.log(a.sort());//[20,23,35,40];
//简写
arr.sort(function(a,b){return a-b})
arr.sort((a,b)=>a-b);
//*****************************************************************************************
//9、判断一个变量是否是整数的函数
function isInteger(num){
	return num%1 === 0;
}
function isInteger(num){
	return Math.floor(num) === num;//Math.floor()向下取值
}
//*****************************************************************************************
//10、十进制转化为其他进制
//(1)自己定义的方法
var arr = [];
function tenToOther(num,other){
	while(num != 0){
		//求余数
		var res = num%other;
		arr.push(res);
		//改变被除数
		var temp = parseInt(num/other);
		num = temp;
	}
	return arr.reverse();
}
console.log(tenToOther(123,8));//173
//(2)简单方法，跟自己定义的不同之处在于，例如10转16进制的时候，简单的方法会出现a,b,c,d,e,f,g，自己定义的是10,11,12,13,14,15,16
var x = 110;
console.log(x.toString(2));
console.log(x.toString(8));
console.log(x.toString(16));
console.log(x.toString(32));
//(3)其他进制转十进制
var x = 110;
console.log(parseInt(x,2));
console.log(parseInt(x,8));
console.log(parseInt(x,16));
//*****************************************************************************************
//11、计算结果表示为不可约分的分数形式
var a = 125;
var b = 35;
for (var i = 2; i < b; i++) {
	while(a%i == 0 && b%i == 0){
		a=a/i;
		b=b/i;
	}
};
console.log(a+'/'+b);
//*****************************************************************************************
//12、斐波那契(Fibonacci)数列(sequence) 0,1,1,2,3,5,8,13,21,34.....
function fibonacci (n) {
	var a = 0,b = 1,res;
	if (n == 0) return 0;
	if (n == 1) return 1;
	for (var i = 2; i <= n; i++) {
		res = a+b;
		a = b;
		b = res;
	};
	return res;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
//递归实现Fibonacci数列
function fibonacci (n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	if (n >=2) {
		return fibonacci(n-1) + fibonacci(n-2);
	};
}
console.log(fibonacci(4));
//*****************************************************************************************
//13、提取字符串中的数字或字母
var a = str.replace(/[^0-9]/ig,'');
var b = str.replace(/[^a-z]/ig,'');
//*****************************************************************************************
//14、JS实现计算数组中的值重复出现的次数+数组去掉重复的元素
var arr = ['a','b','c','a','f','a'];
var temp = [];//存放去重后的数组
var obj = {};
//把数组中的每个元素及该元素出现的次数加入到对象中
for (var i = 0; i < arr.length; i++) {
	var dt = arr[i];
	//存在
	if (obj[dt]) {
		obj[dt]++;
	}else{
		//不存在
		temp.push(dt);
		obj[dt] = 1;
	}
};
//求出原数组中重复次数大于等于原数组长度一半的元素
for (var i = 0; i < temp.length; i++) {
	var n = temp[i];
	if (obj[n]>=(arr.length)/2) {
		console.log(n);
		break;
	};
};
//求出原数组中第一个只出现一次的元素
for (var i = 0; i < temp.length; i++) {
	var n = temp[i]
	if(obj[n] == 1){
		console.log(n);
		break;
	}
};
//字符串中只出现一次字符（与上面的方法不同）
var str = 'google';
var len = str.length;
for (var i = 0; i < len; i++) {
	if (str.indexOf(str.charAt(i))===str.lastIndexOf(str.charAt(i))) {
		console.log(str.charAt(i));
	};
};

//*****************************************************************************************
//15、求出0~n中1出现的次数;eg:1~13中1出现了6次
function numberOf1Ton (n) {
	var count = 0,num;
	for (var i = 0; i <= n; i++) {
		num = i;
		while(num>0){
			if (num%10 == 1) {
				count++;
			};
			num = Math.floor(num/10);
		}
	};
	return count;
}
console.log(numberOf1Ton(13));
//*****************************************************************************************
//16、剑指offer递归和循环（跳台阶，变态跳台阶，矩形覆盖）
//特点：列出前几项，找规律。f(1) = 1,f(2) = 2,f(3) = 3,f(4) = 5...
function rectCover(number){
	if (number == 0) {
		return 0 ;
	};
	if (number == 1) {
		return 1;
	};
	if (number == 2) {
		return 2
	};
	var f1 = 1,f2 = 2,temp;
	for (var i = 3; i <= number; i++) {
		temp = f1+f2;
		f1 = f2;
		f2 = temp;
	};
	return temp;
}
//或者用递归解决
function rectCover(number){
	if (number == 0) {
		return 0 ;
	};
	if (number == 1) {
		return 1;
	};
	if (number == 2) {
		return 2
	};
	return rectCover(number-1)+rectCover(number-2);
}
//*****************************************************************************************
//17、返回两个数中较大的一个
var max = Math.max(5,10);//10;
//返回数组元素的最大值和最小值
var a = [1,3,4,5];
console.log(Math.max.apply(Math,a));//5
console.log(Math.min.apply(Math,a));//1
//返回数组元素最大值和最小值的位置
console.log(a.indexOf(Math.max.apply(Math,a)));
console.log(a.indexOf(Math.min.apply(Math,a)));
//*****************************************************************************************
//18、****************动******************态****************规*******************划********
//求一个数列中子数列的最大和，array=[-2,-3,4,-1,-2,1,5,-3]
//dp[i]表示以元素array[i]结尾的最大连续子数组和.
//dp[0] = -2,dp[1] = -3,dp[2] = 4,dp[3] = 3,以此类推,会发现
//dp[i] = max{dp[i-1]+array[i],array[i]}.
var array = [-2,-3,4,-1,-2,1,5,-3]; 
var dp = [];
dp[0] = array[0];
for (var i = 1; i < array.length; i++) {
	dp[i] = Math.max(dp[i-1]+array[i],array[i]);
};
var res = Math.max.apply(Math,dp);
console.log(res);
//求一个数列中最长上升子数列的长度(LIS)的问题array=[1,7,2,8,3,4];
//重新定义：dp[i]表示以数列中第i项结尾的最长递增子序列的长度。
//dp[0] = 1;dp[1] = 2;dp[2] = 2;dp[3] = 3;dp[4] = 3;dp[5] = 4;
//计算dp[i]的时候，先去考察i之前的所有位置，找到i之前的最大	dp值，记为dp[j](0=<j<i),
//dp[j]表示以arr[j]结尾的最长递增序列的长度（最大值）,再来判断array[i]是否大于arr[j]，
//如果大于，dp[i] = dp[j] + 1;否则，dp[i] = dp[j];计算完dp[i]之后，求dp[i]的最大值即可。
//dp[i] = max{dp[j]+1},a[j]<a[i]
var arrary = [1,7,2,8,3,4];
var dp = [];
	dp[0] = 1;
for (var i = 1; i < arrary.length; i++) {
	var dpjMax = 0;
	for (var j = 0; j < i; j++) {
		if (arrary[i]>arrary[j]&&dp[j]>=dpjMax) {//求dp[j]最大值
			dpjMax = dp[j];
		};
	};
	dp[i] = dpjMax + 1;
};
var res = Math.max.apply(Math,dp);
console.log(res);
//求dp最大值也可以用for循环
var maxVal = 0;
for (var i = 0; i < arrary.length; i++) {
	if (dp[i]>maxVal) {
		maxVal = dp[i];
	};
}
console.log(maxVal);
//***********************************************************************************
//19、把数组排成最小的数
var arrary = [3,32,321];
console.log(arrary);
for (var i = 0; i < arrary.length; i++) {
	for (var j = i+1; j < arrary.length; j++) {
		var s1 = arrary[i]+''+arrary[j];
		var s2 = arrary[j]+''+arrary[i];
		if (s1>s2) {
			var t = arrary[i];
			arrary[i] = arrary[j];
			arrary[j] = t;
		};
	};
};
console.log(arrary.join(''));
//***********************************************************************************
//20、去掉数组中重复的元素
function unique(arr) {
  var ret = []
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (ret.indexOf(item) === -1) {//indexOf可以返回某个指定字符串值在字符串（或数组）中首次出现的位置，如果要检测的字符串值没有出现，则该方法返回-1
      ret.push(item)
    }
  }
  return ret
}
console.log(unique([aab,aab,aba,aba,baa,baa]));
//***********************************************************************************
//21、JS实现全排列
function permutations(string) {
    var result=[];
    if (string.length == 0) {
    	return [];
    };
    if(string.length==1){
        return [string]    
    }else{
        var rest = permutations(string.slice(1));//把string看做两部分，第一部分为第一个字母，第二部分为剩余的字符串，即string.slice(1)；那么rest表示剩余字符串的全排列，可以看做一个已知量看待。
        console.log(rest);//当递归到最后一个字符时rest为['c']，再上一层为['bc','cb']
        for (var j = 0; j < rest.length; j++) {//插空法
            for (var k = 0; k < rest[j].length+1; k++) {
                var temp = rest[j].slice(0,k)+string[0]+rest[j].slice(k);
                result.push(temp);         
            }
        }
        return unique(result);
    }  
}
//去重
function unique(arr) {
  	var ret = []
 	for (var i = 0; i < arr.length; i++) {
    	var item = arr[i]
    	if (ret.indexOf(item) === -1) {//如果ret里面不存在item，则返回-1
      		ret.push(item)
   		}
 	}
 	return ret
}
console.log(permutations('aab').sort())//字典序排列
//***********************************************************************************
//22、把数组排成最大的数（与19的方法不同）
var str = '12 123';
var arr = str.split(' ');
arr.sort(function  (a,b) {
	return (b+a) - (a+b);
})
console.log(arr.join(''));
//上面代码中，sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。
//***********************************************************************************
//23、for循环跳过其中的几个数字
for (var i = 0; i < 9; i++) {
	if (i == 5) {
		continue;
	};
	console.log(i);
};
//或者
for (var i = 0; i < 9; i++) {
	if (i!=5) {
		console.log(i);
	};
};
//***********************************************************************************
//24、队列：先进先出（FIFO）
function Queue(){
	var array = [];
	this.enqueue = function(element){
		array.push(element);
	}
	this.dequeue = function(){
		return array.shift();
	}
	this.front = function(){
		return array[0];
	}
	this.isEmpty = function(){
		return array.length == 0;
	}
	this.size = function(){
		return array.length;
	}
	this.clear = function(){
		array = [];
	}
	this.print = function(){
		console.log(array.toString());
	}
}
//用队列实现“击鼓传花”
function hotPotato(nameArray,num){
	var queue = new Queue();
	for (var i = 0; i < nameArray.length; i++) {
		queue.enqueue(nameArray[i]);
	};
	var eliminated = '';
	while(queue.size()>1){
		for (var j = 0; j < num; j++) {
			queue.enqueue(queue.dequeue());
		};
		eliminated = queue.dequeue();
		console.log(eliminated+'被淘汰');
	}
	return queue.front();
}
var nameArray = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(nameArray,7);
console.log(winner);
//***********************************************************************************
//25、分治法：归并排序算法的实现（参考《学习JS数据结构与算法的图示》更容易理解）
function mergeSort(arr){
	var len = arr.length;
	if (len == 1) return arr;//递归终止条件
	var mid = Math.floor(len/2),
		left = arr.slice(0,mid),
		right = arr.slice(mid);
	return merge(mergeSort(left),mergeSort(right));//递归将数组差分成较小的数组，直到每个小数组的length==1;
}
function merge(left,right){
	var res = [];
	while(left.length&&right.length){
		if (left[0]<right[0]) {
			res.push(left.shift());
		}else{
			res.push(right.shift());
		}
	}
	return res.concat(left,right);//最后res.concat是因为不知道left或right其中哪一个剩下元素，哪一个为空，所以要讲left,right都加上。
}
var arr = [8,7,6,5,4,3,2,1];
console.log(mergeSort(arr));
//***********************************************************************************
//26、分治法：快速排序算法的实现
function quickSort (arr) {
	if (arr.length <= 1) return arr;
	var midIndex = Math.floor(arr.length/2);
	var mid = arr.splice(midIndex,1)[0];//找基准，并把基准从原数组删除，这里的基准找的是中间值
	var left = [];//存放比基准小的值
	var right = [];//存放比基准大的值
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]<=mid) {
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	};
	return quickSort(left).concat([mid],quickSort(right));//递归的思想
}
var arr = [8,7,6,5,4,3,2,1];
console.log(quickSort(arr));
//***********************************************************************************
//27、搜索算法：二分搜索
var arr = [8,7,6,5,4,3,2,1];
arr.sort((a,b)=>a-b);//二分搜索的前提是数组已经排好序!
function binarySearch(item){
	var low = 0,
		heigh = arr.length - 1,
		mid,
		temp;
		while(low<=heigh){
			mid = Math.floor((heigh+low)/2);//选择数组中间值
			temp = arr[mid];
			if (item>temp) {//要找的值比选中的中间值要大，则在中间值的右侧子数组内继续搜索
				low = mid+1;
			}else if(item<temp){//要找的值比选中的中间值要小，则在中间值得左侧子数组内继续搜索
				heigh = mid - 1;
			}else{//要找的值和选中的中间值相等
				return mid;
			}
		}
		return -1;
}
console.log(binarySearch(9));
//***********************************************************************************
//28、贪心算法：期盼通过每个阶段的局部最优选择（当前最好的解），从而达到全局最优解。
//最少硬币找零问题：
function minCoinChange (coins,money) {
	var res = [],
		total = 0;
	for (var i = coins.length-1; i >=0; i--) {//从最大金额开始
		var coin = coins[i];
		while(total+coin <= money){//尽可能多的拿最大的币，当无法再拿更多的最大价值的币时，开始拿第二大价值的硬币，以此类推。
			res.push(coin);
			total = total + coin;
		}	
	};
	return res;
}
var coins = [1,5,10,25];
console.log(minCoinChange(coins,36));//25,10,1
//***********************************************************************************
//29、二叉搜索树的中序，前序和后序遍历
var res = [];
//中序遍历：res的结果是二叉树的节点从小到大排序的数组
function inorder(root,res){
	if (root ==null) return; //递归的终止条件
	inorder(root.left);
	res.push(root);
	inorder(root.right);
}
//前序遍历
function preorder(root,res){
	if (root ==null) return; //递归的终止条件
	res.push(root);
	preorder(root.left);
	preorder(root.right);
}
//后序遍历
function postorder(root,res){
	if (root ==null) return; //递归的终止条件
	postorder(root.left);
	postorder(root.right);
	res.push(root);
}

//***********************************************************************************
//30、'123456789876543212345678987654321...'的第n位是什么？
function getNum(n){
	var flag = true;
	var num = 0;
	for (var i = 0; i < n; i++) {
		if (num == 1) flag = true;
		if (num == 9) flag = false;
		flag ? num++ : num --;
	};
	return num;
}
var n = getNum(18);
console.log(n);
//***********************************************************************************
//31、打点计时器(第一个数立马输出，后面的数每隔1S输出)
//setInterval（按照指定的周期来调用函数或计算表达式）实现
function count(start, end) {
    console.log(start);
    var timer = setInterval(function () {
        if (start < end) {
        	start++
            console.log(start)
        } else {
            clearInterval(timer)
        }
    }, 1000);
}
//setTimeout（在指定的毫秒数后调用函数或计算表达式）实现
function count(start, end) {
     var cha = end-start;
     var clcId;
     for(let i = 0;i<=cha;i++){
        setTimeout(function(){
            console.log(i+cha)
        },i*1000)
     }
}
count(5,10)
//***********************************************************************************
//32、时间戳转换为时间
//时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。
//注意：如果是Unix时间戳记得乘以1000。比如：PHP函数time()获得的时间戳就要乘以1000。
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y+M+D+h+m+s;
}
console.log(timestampToTime(1534262400));//2018-08-15 16:43:26
//将日期格式转换成时间戳：
var date = new Date('2014-04-23 18:55:49:123');
// 有三种方式获取
var time1 = date.getTime();
var time2 = date.valueOf();
var time3 = Date.parse(date);
console.log(time1);//1398250549123
console.log(time2);//1398250549123
console.log(time3);//1398250549000
//以上三种获取方式的区别：
//第一、第二种：会精确到毫秒,第三种：只能精确到秒，毫秒用000替代
//注意：获取到的时间戳除以1000就可获得Unix时间戳，就可传值给后台得到。
//***********************************************************************************
//33、实现add(1)(2)(3)(4)(5)...

/*首先要一个数记住每次的计算值，所以使用了闭包，在tmp中记住了x的值，第一次调用add(),初始化了tmp，并将x保存在tmp的作用链中，然后返回tmp保证了第二次调用的是tmp函数，后面的计算都是在调用tmp, 因为tmp也是返回的自己，保证了第二次之后的调用也是调用tmp，而在tmp中将传入的参数与保存在作用链中x相加并付给sum，这样就保证了计算；
但是在计算完成后还是返回了tmp这个函数，这样就获取不到计算的结果了，我们需要的结果是一个计算的数字那么怎么办呢，首先要知道JavaScript中，打印和相加计算，会分别调用toString或valueOf函数，所以我们重写tmp的toString和valueOf方法，返回sum的值；*/

function add (x) {
	var sum = x;
	var tmp = function (y) {
		sum = sum + y;
		return tmp;
	};
	tmp.toString = tmp.valueOf = function () {
		return sum;
	};
	return tmp;
}
console.log(add(1)(2)(3)); //6
console.log(add(1)(2)(3)(4)); //10
//当后面传入的参数个数确定的情况下，也可以：
function add (a){
	return function(b){
		return function(c){
			return a+b+c;
		}
	}
}
console.log(add(1)(2)(3))
