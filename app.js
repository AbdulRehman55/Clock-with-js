function showtime()
{

let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let format=formattime(hours);
hours=checktime(hours);

hours=addzero(hours);
minutes=addzero(minutes);
seconds=addzero(seconds);

document.getElementById('clock').innerHTML=`${hours} : ${minutes} :
${seconds} ${format}`



};



function formattime(time)
{

if(time>=12)
	{return 'PM'}

	else

	{ return 'AM'}

	

};

function checktime(time){

if(time>12){

	time=time-12;
}
if(time===0){

	time=12
}
return time;

};






function addzero(time){

if(time<10)
time='0'+time;
return time;
};
showtime();
setInterval(showtime,1000);