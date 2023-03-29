var body = document.getElementsByTagName('body')[0];
var textArr=["Speedslove: F2L is everything!","练而不思则罔, 思而不练则殆。",
"忘记公式, 立地成魔","Blindcubing: Memory is everything!",
"人生总有几次Pop的时候。","沒有最快的公式, 只有自己最熟练的",
"在一个困难的嵌套决策链中, 决策出最优解","从记住所有公式到忘记所有公式",
"道高一尺, 魔高一丈, 魔无止境！","十字做得好, 秒数走的少。",
"一切在于感觉，这就是高手的境界","公式熟练的时候就是你忘掉公式的时候",
"f2l: 慢到极速便是快到极速。","十字做得好, 秒数走的少。",
"对于F2L, 眼比手更重要。","发现自己还不会还原5面~","手随眼动, 心随手动。",
"F2l靠眼跑得快"];
document.addEventListener('click',(e)=>{
	var ev = e || window.event;
	var baseX = ev.pageX;
	var baseY = ev.pageY;
	var new_span=document.createElement('span');
	new_span.innerText=textArr[parseInt(Math.random()*textArr.length)]
	new_span.style.position='absolute';
	new_span.style.left=baseX-10+'px';
	new_span.style.top=baseY+'px';
	new_span.style.color='RGB('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')';
	body.appendChild(new_span);
	var timer = window.setInterval(()=>{
	    new_span.style.top=parseInt(window.getComputedStyle(new_span,null)['top'])-2+'px';
		new_span.style.opacity=window.getComputedStyle(new_span,null)['opacity']-0.02;
		},30);
	window.setTimeout(()=>{
		window.clearInterval(timer);
		body.removeChild(new_span);
		},1000);
	},false);
