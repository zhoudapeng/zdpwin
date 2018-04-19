<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我们的故事</title>

<style type="text/css">
@font-face {
	font-family: digit;
	src: url('digital-7_mono.ttf') format("truetype");
}
</style>

<link href="css/default.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/garden.js"></script>
<script type="text/javascript" src="js/functions.js"></script>

</head>

<body>

<div id="mainDiv">
	<div id="content">
		<div id="code">
			<span class="keyword">我们的故事</span><br/><br/>
			<span class="keyword">感谢上帝的眷顾</span><br/>
			<span class="keyword">2010年4月4日</span> <br/>
			<span class="keyword">我们相识于少华山，一见如故</span><br/>
			<span class="keyword">2010年10月23日</span> <br/>
			<span class="keyword">在肯德基餐厅，在她舍友的见证下正式确定关系</span><br/>
			<span class="keyword">从此形影不离</span><br/>
			<span class="keyword">我们一起学习，一起找工作，一起规划未来</span><br/>
			<span class="keyword">2012年6月，我们大学毕业</span><br/>
			<span class="keyword">我在北京，她在杭州</span><br>
			<span class="keyword">和很多人一样，我们也面临着异地恋的考验</span><br/>
			<span class="keyword">曾经也疯狂过</span><br/>
			<span class="keyword">周五晚上去杭州，周天晚上回北京</span><br/>
			<span class="keyword">永远记得当时回北京的时候</span><br/>
			<span class="keyword">2个人都哭得像个孩子</span><br/>
			<span class="keyword">后来她放弃了杭州的工作，来到了北京</span><br/>
			<span class="keyword">跟我一起北漂</span><br/>
			<span class="keyword">2015年9月30日,我们如愿领证</span><br/>
			<span class="keyword">现在，我们很幸福，等待着小猴子的降生</span><br/>
			<span class="keyword">这就是我们的故事</span><br/>
			<span class="keyword">而且将一直继续...</span><br/>
			<br>
		</div>
		<div id="loveHeart">
			<canvas id="garden"></canvas>
			<div id="words">
				<div id="messages">
					亲爱的，这是我们相爱在一起的时光。
					<div id="elapseClock"></div>
				</div>
				<div id="loveu">
					在七夕这个浪漫的日子<br/>
					祝天下有情人终成眷属<br/>
					<div class="signature">- 周大鹏</div>
				</div>
			</div>
		</div>
	</div>
</div>
<audio controls="controls" autoplay="autoplay" id="audio_player">
	<source src="song/稳稳的幸福.mp3" >
</audio>
<script type="text/javascript">
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2010, 10, 23);
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
	var msg = document.createElement("div");
	msg.id = "errorMsg";
	msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
	document.body.appendChild(msg);
	$("#code").css("display", "none")
	$("#copyright").css("position", "absolute");
	$("#copyright").css("bottom", "10px");
	document.execCommand("stop");
} else {
	setTimeout(function () {
		startHeartAnimation();
	}, 5000);

	timeElapse(together);
	setInterval(function () {
		timeElapse(together);
	}, 500);

	adjustCodePosition();
	$("#code").typewriter();
}
</script>
<div style="text-align:center;clear:both">
</div>
</body>
</html>