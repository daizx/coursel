// JavaScript Document


     function Coursel(sect){
	     this.sect=document.getElementById(sect);
		 this.choose=this.sect.getElementsByTagName("div")[0];
		 this.img=this.sect.getElementsByTagName("img");
		 this.len=this.img.length;
		 this.bot=this.choose.getElementsByTagName("span");
		 this.index=0;
		 this.exdex=0;
		 this.begin=null;
		 this.start();
		}

		 //开始函数
		 Coursel.prototype.start=function(){
		     this.circle();
			 this.auto();
		 }
		 
		 //轮播函数
		 Coursel.prototype.circle=function(){
		     var that=this
			 this.choose.onmouseover=function(){
	   	         var z=event.target;
				 if(z.tagName==="SPAN"){
				 that.index=z.getAttribute("index");
				 that.bot[that.index].style.backgroundColor="red";
	             that.bot[that.exdex].style.backgroundColor="white";
	             if(that.index>that.exdex){
	                that.go("next")
	             }else if(that.index<that.exdex){
	                that.go("prev")}
	             that.exdex=that.index;
				 }}
		 }
		 
		 //图片切换函数 
         Coursel.prototype.go=function(dire){
		    if(dire==="next"){
	           this.animate(this.img[this.index],"100%","0%");
		       this.animate(this.img[this.exdex],"0%","-100%");
	           }
	        if(dire==="prev"){
	           this.animate(this.img[this.index],"-100%","0%");
		       this.animate(this.img[this.exdex],"0%","100%");
	          }	 
		 }
		 
		 //自动播放函数
         Coursel.prototype.auto=function(){
		      var that=this;
			  this.begin=setInterval(function(){
			  that.index++;
			  if(that.index>=that.len){
				  that.index=0;}	 
		 	  that.bot[that.index].style.backgroundColor="red";
	          that.bot[that.exdex].style.backgroundColor="white";
			  that.go("next");
			  that.exdex=that.index;
			  },2000)
			  
	     } 
       
	   //动画函数
		Coursel.prototype.animate=function(ele,nowPos,nextPos){
		     var speed=(parseInt(nextPos)-parseInt(nowPos))/100,
			     i=0,
				 j=0;
			 var count=setInterval(function(){
			     j=j+speed
				 ele.style.left=parseInt(nowPos)+j+"%"
				 i++;
				 if(i>=100){clearInterval(count)}
				 },10)
		}
		


window.onload=function(){
    var a= new Coursel("banner");
	
	
}