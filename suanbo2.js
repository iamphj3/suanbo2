$(function() {

var array=[0,0,0,0,0,0,0,0,0];
 var post=$("#post"),yes=$("#yes"),no=$("#no");
 var count=0,flag=0;
 var i=0,ff=0;

{ 
 var question=
 [
 "1. 충주 여행을 간다면 ",
 "2. 숙소에서 뭐할래?",
 "3. 충주의 첫 번째 목적지는?",
 "4. 충주여행 기념품은?",
 "5. 충주 맛집에 간다면",
 "6. 잠시 카페에서 쉴 땐"
 ];

 var pos=
[
"계획 한 건 다 보고 갈래!",
"숙소에서는 편하게 쉴래!",
"핫플레이스에서 인생샷 건져야지!",
"먹는 게 최고! 간식 잔뜩 사갈래",
"인증샷은 필수! 남는 건 사진",
"크고 깔끔한 프랜차이즈 카페"
];

 var neg=
[
"그냥 발길 닿는 대로 여행할래",
"숙소에 그냥 있기 아까워! 야경 구경할래",
"구경보단 맛집탐방 냠냠",
"충주 감성 가득한 소품들",
"사진은 뒷전! 먹는게 먼저",
"충주 감성 가득한 개인 카페"
];
}

if(ff==0)
{
$("#post").text(question[count]);
$("#yes").text(pos[count]);
$("#no").text(neg[count]);


$("#yes").click(function () {
	switch(count){
		case 0: array[1]+=2; break;
		case 1: array[0]+=1.5; break;
		case 2: array[3]+=3; break;
		case 3: array[4]+=3.5; break;
		case 4: array[3]+=3; break;
		case 5: array[5]+=2; break;
	}
	count++;
	if(count==6){
	ff=1;
	final();return;}
	$("#post").text(question[count]);
	$("#yes").text(pos[count]);
	$("#no").text(neg[count]);
});

$("#no").click(function () {
	switch(count){
		case 0: array[2]+=3.5; break;
		case 1: array[2]+=1; break;
		case 2: array[4]+=1.5; break;
		case 3: array[5]+=2;break;
		case 4: array[4]+=1; break;
		case 5: array[2]+=2; break;
	}
	count++;
	if(count==6){
	ff=1;
	final();return;}
	$("#post").text(question[count]);
	$("#yes").text(pos[count]);
	$("#no").text(neg[count]);});}

var resultFirst=
[
 //result에 넣기
 "[물아일체형]",
 "[탕진형]",
 "[마이웨이형]",
 "[SNS 매니아형] ",
 "[프로먹방러형] ",
 "[스펀지형]"
 ];

var result=
[
 "여행을 가서 가만히 앉아 경치 구경하는 걸 좋아하는 당신! 머릿속에 복잡한 생각들을 비워내는 중이군요. 조용한 시간이 필요한 만큼 여행을 가서도 당신만의 시간을 중요하게 생각하네요.",
 "비용이 들더라도 좋은 숙소를 잡고 좋은 음식을 먹고 싶어 하는 당신! 마음껏 먹고 마음껏 구매하는 재미로 스트레스를 해소하네요. 통장을 텅장으로 변신 시켜주는 당신은 진정한 탕진 마술사!",
 "여행의 로망은 즉흥적으로 즐기는 것이라고 생각하는 당신! 우연히 찾은 맛집에 뿌듯함을 느끼며 자유를 만끽합니다. 계획이 없기 때문에 언제든지 여행을 갈 준비가 되어 있네요. 자유로운 영혼에 박수를!",
 "여행에서 남는 건 사진이라고 생각하는 당신! SNS에 늘 진심인 당신은 업로드용 사진을 위해 많은 시간을 투자하겠군요. 여행 후 잘 건진 사진들을 보며 또 한 번 가지는 힐링 타임(뿌듯)",
 "오로지 먹기 위해 여행을 떠나는 당신! 여행하면서 하루 종일 멀 먹을지 고민하지 않나요? 맛집을 찾기 위한 철저한 검색 고증은 필수! 하지만 여행 후 몸무게 재는 건 금지...",
 "스펀지처럼 상황에 따라 어떤 모습으로든 스며들 수 있는 당신! 분위기를 스펀지처럼 쫙쫙 흡수하는 융통성 갑 of 갑! 그래도 무엇보다 중요한 건 자신의 감정이란걸 잊지 마세요!"
];

var timer;
var forFinal=0;
	
//yes,no에서 count가 6이면 호출할 함수
 function final() {
 	document.getElementById("img").src = "banner2.PNG";
 	document.getElementById("all").style.display = "none";
 	document.getElementById("gif").style.display = "block";
 	document.getElementById("banner").style.backgroundColor="#ffffff";
 	document.getElementById("a").style.backgroundColor="#ffffff";
 	 	//$("header").backgroundColor="white";

 	setTimeout(function () {
 	document.getElementById("a").style.backgroundColor="#ffffff"; 		
 	document.getElementById("all").style.display = "block";
 	document.getElementById("gif").style.display = "none";
 	document.getElementById("img").src = "banner2.PNG";
 	document.getElementById("banner").style.backgroundColor = "#83c8f2";
 	},3000)  // 5초후 go() 함수를 호출한다

 	document.getElementById("img").style.width = "300px";
 	document.getElementById("text1").style.display = "block";
 	document.getElementById("text2").style.display = "block";
 	document.getElementById("text3").style.display = "block";
 	document.getElementById("text4").style.display = "block";

//$("#text1").style.display='block';
//$("#text2").style.display='block';
//	$("#text1").attr(display,"block");
//	$("#text2").attr(display,"block");
	 
 	var max=0,index=0;
 	for(var i=0;i<9;i++){
 		if(array[i]>max){
 			max=array[i];
 			index=i;}
 	}
	 
 	$("#count").value=index;
	//$("#form").submit();

	$("#question").height="500px";
//	$(".post-wrapper").attr("height","500px");
	$("#content").paddingTop="10px";
	$("#content").fontFamily="Jua";
	$("#content").fontSize="15px";
	$("#content").backgroundColor="#f5e6fd";


	$("#btn1").fontSize="20px";
	$("#btn2").fontSize="20px";
	$("#btn1").width="40px";
	$("#btn2").width="40px";
	//$("").width="40px";
	 
	yes.fontSize="20px";
	no.fontSize="20px";
	yes.text("테스트 다시하기");
	no.text("공약 더 둘러보기 ");

	$("#btn1").css("display","none");
	$("#btn2").css("display","none");
	$("#btn3").css("display","block");
	$("#btn4").css("display","block");	
	 
	$("h1").css("display","block");
	 
	$("#answer").css("padding-bottom","0px");
	 
	$("#text1").text("여행 타입");
	$("#text2").text("테스트 결과");
	$("#text3").text("----------------------");
	$("#text4").text("당신에게 맞는 여행 추천");
	$("#post").text(resultFirst[index]+"\n\n\n");
	$("#content").text(result[index]);
	 
	//	location.replace('eny	ouresult.html');
}

});
