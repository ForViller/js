(function($){    //($)防止$冲突
    $.fn.extend({   //jquery方法
　　　	dialog:function(bol,data){
			data = data||{time:500,top:"200px"};
			data.time = data.time||500;
			data.top = data.top||"200px";
			
			
			if(bol){	
				var str = this.css("width");
				mleft = -(str.substring(-1,str.indexOf("p"))-0)/2+"px";
				
				this.css({
					"position":"fixed",
					"top": "-1000px",
					"left": "50%",
					"margin-left": mleft,
					"z-index":"5",
				});
				this.animate({
					"top": data.top,
				
				},data.time);
				
				var shade = $("<div id='shade'></div>");
				shade.css({
					"position":"fixed",
					"width": "100%",
					"top":"0",
					"height": "100%",
					"background": "rgba(0,0,0,0.4)",
					"opacity":"0",
				});
				$("body").append(shade);
				$("#shade").animate({"opacity":"1"},data.time)
			}else{
				this.animate({
					"top":"-1000px",
				},data.time);
				$("#shade").remove()
			}	
		}　　　
    });
})(jQuery);