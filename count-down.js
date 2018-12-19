			
 
 function getDistanceTime(time){
        var endTime= new Date(Date.parse(time.replace(/-/g, "/")));/*replace将时间字符串中所有的'-'替换成'/',parse将时间格式的字符串转换成毫秒*/
        var nowTime = new Date();
        var distance =endTime.getTime() - nowTime.getTime();/*getTime把一个date对象转换成毫秒*/

        var day = 0;
        var hour = 0;
        var minute = 0;
        var second = 0;

        if(distance >= 0){
            day = Math.floor(distance/1000/60/60/24);
            hour = Math.floor(distance/1000/60/60%24);
            minute = Math.floor(distance/1000/60%60);
            second = Math.floor(distance/1000%60);
        }else{
            alert("目标日期小于当前日期!")
        }

		return {
			day:day,//天
			hour:hour,//时
			minute:minute,//分
			second:second,//秒
		}   
    }
//  	console.log(getDistanceTime('2018-12-19 14:00:00'))
