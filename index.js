console.log("hello  world ");


let priceArray=["₱65-₱99","₱569","₱266-₱299","₱563",
"₱57","₱298-₱331","₱294","₱27","₱345","₱833-₱930","₱349-₱764",
"₱45-₱60","₱300 n/a","₱161","₱115","₱6-₱9","₱25","₱25",
"₱151","₱359-₱500","₱270-₱374","₱222-₱300","₱110-₱184",
"₱69-95","₱85-₱95","₱120","₱49-52","₱355-₱463","₱169", "₱217",
"₱44","₱16-₱100","₱756-₱788","₱1552","₱476","₱799-₱959","₱69-₱100",
"₱25","₱421-₱500","₱172","₱419","₱429","₱225-₱384","₱999","₱1075"

];
const prices=document.querySelectorAll(".price");

for(let i=0;i<prices.length && priceArray.length;i++){
	console.log(prices.length);
	prices[i].innerHTML=priceArray[i];
}

const burgerMenu=document.querySelector(".burger-menu");
const menuBlock=document.querySelector(".menu-block");
const textBlock=document.querySelector("#menutext");
burgerMenu.addEventListener("mouseover",function(){
	menuBlock.style.display="block";
});
burgerMenu.addEventListener("click",function(){
	menuBlock.style.display="none";
});
menuBlock.addEventListener("mousover",function(){
	menuBlock.style.display="block";
});
textBlock.addEventListener("mousover",function(){
	menuBlock.style.display="block";
});


const arrayOfImages=["image/1-min.png",
"image/2-min.png",
"image/3-min.png",
"image/4-min.png",
"image/5-min.png",
"image/6-min.png",
"image/7-min.png",
"image/8-min.png",
"image/9-min.png",
"image/10-min.png",
"image/11-min.png",
"image/12-min.png",
"image/13-min.png",
"image/14-min.png",
"image/15-min.png",
"image/16-min.png",
"image/17-min.png",
"image/18-min.png",
"image/19-min.png",
"image/20-min.png",
"image/21-min.png",
"image/22-min.png",
"image/23-min.png",
"image/24-min.png",
"image/25-min.png",
"image/26-min.png",
"image/27-min.png",
"image/28-min.png",
"image/29-min.png",
"image/30-min.png",
"image/31-min.png",
"image/32-min.png",
"image/33-min.png",
"image/34-min.png",
"image/35-min.png",
"image/36-min.png",
"image/37-min.png",
"image/38-min.png",
"image/39-min.png",
"image/40-min.png",
"image/41-min.png",
"image/42-min.png",
"image/43-min.png",
"image/44-min.png",
"image/45-min.png"
];

const imageTags=document.querySelectorAll(".items-itself");
for(let i=0;i<imageTags.length;i++){
if (arrayOfImages[i]) {
    imageTags[i].src = arrayOfImages[i];
  }else{alert("error!! line 57")}
};



let minPageBanners=document.querySelector(".banner-image");
let count=0;
let bannerInterval=setInterval(function(){
	count++
	if(count==1){
	
		minPageBanners.setAttribute("src","image2/BANNER1-min.png");
	}else if(count==2){
	
		minPageBanners.setAttribute("src","image2/BANNER2-min.png");
	}else if(count==3){
	
		minPageBanners.setAttribute("src","image2/BANNER3-min.png");
	}else if(count==4){
	
		minPageBanners.setAttribute("src","image2/BANNER4-min.png");
	}else if(count==5){
	
		minPageBanners.setAttribute("src","image2/BANNER5-min.png");
		count=0;
	}else{alert("Errors Banner Images cannot find!!!!");}
	
},5000);




alert("Notice!! : Please keep in mind that these Price range are just 'general estimates' it  might change if the e-comerse platform starts or ended their seasonal events  -happy shoping :)");
