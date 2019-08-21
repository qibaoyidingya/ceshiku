// JavaScript Document

//挂号
function SendFn(vname,vsex,vtel,vage,vordertime,vdept,vweburl,vpid){
	if(!vname||!vtel||!vordertime||!vpid){
		alert('请填写完整！');
		return false;
	}
	function IsDate(mystring){  
	  var reg=/^\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}$/;  
	  var str=mystring;
	  var arr=reg.exec(str);  
	  if (str=="") { return true; }  
	  else if(!reg.test(str)){  
		alert("请保证输入的日期格式为yyyy-mm-dd或正确的日期!");
		return false;
	  }  
	}   
	IsDate(vordertime);
	function IsTel(a){
		/*var regBox = {
			regMobile : /^0?1[3|4|5|8][0-9]\d{8}$/,
			regTel : /^0[\d]{2,3}-[\d]{7,8}$/
		}
		var mflag = regBox.regMobile.test(a);
		var tflag = regBox.regTel.test(a);*/
		var reg=/(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^[0-9]{3,4}[0-9]{7,8}$)|(^0{0,1}13[0-9]{9}$)|(^0{0,1}14[0-9]{9}$)|(^0{0,1}15[0-9]{9}$)|(^0{0,1}18[0-9]{9}$)/;
		if (reg.test(a)==false) {
			alert("不是完整的11位手机号或者正确的座机号！");
			a.preventDefault();
			window.event.returnValue=false;
		}
	}
	IsTel(vtel);
	$.ajax({
		type: "get",
		dataType: "jsonp",
		url: "http://huibo.mhjsk.com:8900/send.ashx",
		jsonp: "callbackparam",
		jsonpCallback: "jsonpCallback",
		data: { pid: vpid, name: vname, sex: vsex, tel: vtel, age: vage, dept: vdept, ordertime: vordertime, weburl: vweburl },
		success: function (json) {
			var getresult = json[0].name;
			if (getresult == 1) { alert("您已经预约成功，稍后医师会主动联系您！"); } else { alert("失败"); }
		},
		error: function (msg) { alert("失败2"); }
	});
}
