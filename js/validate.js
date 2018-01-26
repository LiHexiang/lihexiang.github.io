$(document).ready(function(){
	var t="";
	var d1=0,d2=0,d3=0,d4=0,d5=0;
	$("#name").focus(function()
	{	
		this.value="";
	}).blur(function(){
		this.style.color="red";
		if(this.value.length>0)
		{
			if(this.value.length<3 && this.value.length>0)
			{
				this.value="*The length must lager than 2";
				
			}
			else
			{
				this.style.color="green";
				d1=1;
			}
		}
		else
		{
		this.value="*Please input your name .";
		return false;
		}
	});
	$("#email").focus(function()
	{
		this.value="";
	}).blur(function(){
		this.style.color="red";
		if(this.value.length>0)
		{
			 var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			 if(reg.test(this.value))
			 {
				this.style.color="green";
				d2=1;
			 }
			 else
			 {
				this.value="Please input your email address such as ：www@136.com ";
				return false;
			 }
		}
		else
		{
		this.value="*Please input your email address";
		return false;
		}
	});
	$("#phone").focus(function()
	{
		this.value="";
	}).blur(function(){
		this.style.color="red";
		if(this.value.length>0)
		{
			var reg=/(^[0-9]{3,4}[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;
			if(reg.test(this.value))
			{
				this.style.color="green";
				d3=1;
			}
			else
			{
				this.value="*Please input your phone number with right type ";
				return false;
			}
		}
		else
		{
		this.value="*Please input your phone number";
		return false;
		}
	});
		$("#gred").focus(function()
	{
		this.value="";
	}).blur(function(){
		this.style.color="red";
		if(this.value.length>0)
		{
			this.style.color="green";
			d4=1;
		}
		else
		{
		this.value="*Please input your question";
		return false;
		}
	});
		$("#msg").focus(function()
	{
		this.value="";
	}).blur(function(){
		this.style.color="red";
		if(this.value.length>0)
		{
			this.style.color="green";
			d5=1;
		}
		else
		{
		this.value="*please input your message";
		return false;
		}
	});
 $("#send").click(function(){
	var name=$("#name").val();
	var email=$("#email").val();
	var phone=$("#phone").val();
	var gred=$("#gred").val();
	var msg=$("#msg").val();
	addr="mailto:15025134157@136.com?subject=Quest of my html page  &body=	name:"+name+
	"	Email:"+email+"	Tel:"+phone+"	question:"+gred+"	Message:"+msg+" &cc=yxh.network@gmail.com &bcc=1157686920@qq.com";
	var obj=document.getElementById("send");
	var reg=/^[0-9a-zA-Z]{6,20}$/;
			if(d1+d2+d3+d4+d5==5)
			{
				if(reg.test(name+gred+msg))
				{
				obj.href=addr;
				}
				else
				{
					alert('请输入英文。');
				}
			 
			}
			else
			{
				alert('验证未通过，请尝试再一次输入。');
			}



 });
 
 
 
 });