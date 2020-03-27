//Simple Clock Javascript
var d,h,m,s, animate;
var checkPM = true,checkAM = true;
    d = new Date();
    h =d.getHours();
    m =d.getMinutes();
    s =d.getSeconds();
    
function clock(){

	if(h > 11 && checkPM)
	{
		pm = 'PM';
		checkAM = false;
		checkPM = true;
		
		if(h > 12)
		{
			h = h%12;
		}
		
	}

	if (h < 12 && checkAM)
	{
		pm = 'AM';
		checkPM = false;
	}
	
	if(s != 60)
    {
		s++;
	}
	else
	{
		s = 0;
		m++;
	}
	if(m > 59)
	{
		m = 0;
		h++;
	}
    $('sec',s);
    $('min',m);
    $('hr',h);
    $('pm',pm);
    
    animate = setTimeout(clock,1000);
};

function $(id,val){
    if(val < 10 && id != 'hr'){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};
window.onload = clock;
