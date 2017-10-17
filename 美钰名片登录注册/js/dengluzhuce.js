	function hideShowPsw(a){
	var pas = $("#s1").attr("type");
	if( pas == 'password'){
		$("#s1")[0].type = "text";  
		$(a).attr("src","img/eye.png");
	}else{
		$("#s1")[0].type = "password";  
		$(a).attr("src","img/eye-close.png");
	}
}

$(function(){
	//登录验证
	$("input[name=denglu]").click(function(){
             var name = $("input[name=mobile]").val();
             var pas = $("input[name=zhuce]").val();
             if(!(/^1[34578]\d{9}$/.test(name))|| name == null || name == ''){
                 $("input[name=mobile]").next().html("用户名不能为空且只能输入手机号！");
                 return false;
             }else{
             	$("input[name=mobile]").next().html("");
             }
             if(!/^[a-zA-Z]\w{5,17}$/.test(pas) || pas == null || pas == ''){
                 $("input[name=zhuce]").next().html("密码不能为空且只能以字母开头，长度在6-18之间！")
                 return false;
             }else{
             	$("input[name=zhuce]").next().html("");
             }
          }
      )
	
	//tab切换
	$("#form_denglu").click(function(){
	  $("#div_denglu").show();
	  $("#div_zhuce").hide();
	  $("#form_denglu").attr("class","dl");
	  $("#form_zhuce").removeAttr("class");
	})
	$("#form_zhuce").click(function(){
	  $("#div_denglu").hide();
	  $("#div_zhuce").show();
	  $("#form_zhuce").attr("class","dl");
	  $("#form_denglu").removeAttr("class");
	})
	
	//注册验证
	$("input[name=zhuces]").click(function(){
             var name = $("input[name=yonghuming]").val();
             var pas = $("input[name=mima1]").val();
             if(!(/^1[34578]\d{9}$/.test(name))|| name == null || name == ''){
                 $("input[name=yonghuming]").next().html("手机号不能为空！");
                 return false;
             }else{
             	$("input[name=yonghuming]").next().html("");
             }
             if(!/^[a-zA-Z]\w{5,17}$/.test(pas) || pas == null || pas == ''){
                 $("input[name=mima1]").next().html("密码不能为空！")
                 return false;
             }else{
             	$("input[name=mima1]").next().html("");
             }
          }
      )
	
	//俩次密码验证
	$("input[name=zhuces]").click(function(){
		    var pas1 = $("input[name=mima1]").val();
            var pas2 = $("input[name=mima2]").val();
            if("pas2!=pas1"){
             $("input[name=mima2]").next().html("俩次密码请保持一致！");
                 return false;
            }else{
             	$("input[name=mima2]").next().html("");
             }
	}
 )
	
	
})