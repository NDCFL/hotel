var rootpath = "http://192.168.0.250:8080";
var info ="";
function send(method,url,param,ascy){
	if(ascy==''){
		ascy=true;
	}
	$.ajax({
        url : rootpath+url,
        type : method,
        data : param,
        dataType:"JSON",
        ascy:ascy,
        success : function(data) {
        	info = JSON.stringify(data);
        },
        error : function() {
            info ="{msg:'发生错误!'}";
        }
    });
}
