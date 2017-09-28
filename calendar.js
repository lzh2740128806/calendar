/*
	**create by lizhenhu
	**time: 2017 09 27
*/

/*

	//api
	num : year
	num : month
	num : date
	num : day
	num : time
	data: getData()
	data: preMonth()
	data: nextMonth()
	data: preYear()
	data: nextYear()
	data: thisMonth()
	data: costomDate()

	data{isToday,isThisMonth,date}

*/

function Calendar(){


	var calendar = new Object();

	//日期数据基础
	calendar.baseDate = new Date();

	//初始化
	calendar.init = function (){
		this.year = this.baseDate.getFullYear();
		this.month = this.baseDate.getMonth();
		this.date = this.baseDate.getDate();
		this.day = this.baseDate.getDay();
		this.time = this.baseDate.getTime();
	}

	calendar.init();

	//获取数据
	calendar.getData = function (){
		var data = [];

		//起始值
		var date = new Date(this.year,this.month,1);
		date.setTime(date.getTime() - 86400000 * date.getDay());

		do{
			for(var i=0; i<7; i++){
				var obj = {};

				obj.isThisMonth = date.getMonth() == this.month? true : false;
				obj.isToday = date.getDate() == this.date && obj.isThisMonth? true : false;
				obj.date = date.getDate();
				data.push(obj);
				date.setTime(date.getTime() + 86400000);
			}
		} while(date.getMonth() == this.month);

		return data;
	}

	//上月
	calendar.preMonth = function (){
		this.month--;
		this.baseDate.setMonth(this.month);
		this.init();

		return this.getData();
	}

	//下月
	calendar.nextMonth = function (){
		this.month++;
		this.baseDate.setMonth(this.month);
		this.init();

		return this.getData();
	}

	//上一年
	calendar.preYear = function (){
		this.year -= 1;
		this.baseDate.setFullYear(this.year);
		this.init();

		return this.getData();
	}

	//下一年
	calendar.nextYear = function (){
		this.year += 1;
		this.baseDate.setFullYear(this.year);
		this.init();

		return this.getData();
	}

	//本月
	calendar.thisMonth = function (){
		this.baseDate = new Date();
		this.init();

		return this.getData();
	}

	//自定义年月
	calendar.customDate = function (year,month){
		this.year = +year;
		this.month = +month;
		this.baseDate.setFullYear(this.year);
		this.baseDate.setMonth(this.month - 1);
		this.init();

		return this.getData();
	}

	//返回值
	return calendar;

}