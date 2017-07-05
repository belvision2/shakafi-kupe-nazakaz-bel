        onload = function ()
        {
            var timeId= setInterval (function ()
                    {
                        var fY = 2018, fM = 01, fD = 14, fH = 00, fm = 00,fS = 00;
                        var nT = new Date ().getTime ();

                        var Y = 0; while (new Date (fY - Y, fM    , fD    , fH    , fm    , fS    ).getTime () > nT) Y++; Y--;
                        var M = 0; while (new Date (fY - Y, fM - M, fD    , fH    , fm    , fS    ).getTime () > nT) M++; M--;
                        var D = 0; while (new Date (fY - Y, fM - M, fD - D, fH    , fm    , fS    ).getTime () > nT) D++; D--;
                        var H = 0; while (new Date (fY - Y, fM - M, fD - D, fH - H, fm    , fS    ).getTime () > nT) H++; H--;
                        var m = 0; while (new Date (fY - Y, fM - M, fD - D, fH - H, fm - m, fS    ).getTime () > nT) m++; m--;
                        var S = 0; while (new Date (fY - Y, fM - M, fD - D, fH - H, fm - m, fS - S).getTime () > nT) S++; S--;

						/*if (Y < 0) {
							clearInterval(timeId);
							return;
						}*/
						
                        function addText (n, w)
                        {
                            var j, e = n.toString ().slice (-1);
                            if (!n) return ' ';
                            if (n > 10 && n < 20) j = 2;
                            else if (e == 0)           j = 2;
                            else if (e == 1)           j = 0;
                            else if (e < 5 )           j = 1;
                            else                       j = 2;
                            return n + ' ' + w [j];
                        }
						
						/*if(D < 10){
                            $(".days-1").html(0);
                            $(".days-2").html(D);
                        }else{
                            var d1 = parseInt((D/1)%10);
                            var d2 = parseInt((D/10)%10);
                            $(".days-1").html(d2);
                            $(".days-2").html(d1);
                        }*/
						
                        if(H < 10){
                            $(".hours-1").html(0);
                            $(".hours-2").html(H);
                        }else{
                            var h1 = parseInt((H/1)%10);
                            var h2 = parseInt((H/10)%10);
                            $(".hours-1").html(h2);
                            $(".hours-2").html(h1);
                        }

                        if(m < 10){
                            $(".min-1").html(0);
                            $(".min-2").html(m);
                        }else{
                            var m1 = parseInt((m/1)%10);
                            var m2 = parseInt((m/10)%10);
                            $(".min-1").html(m2);
                            $(".min-2").html(m1);
                        }

                        if(S < 10){
                            $(".sec-1").html(0);
                            $(".sec-2").html(S);
                        }else{
                            var s1 = parseInt((S/1)%10);
                            var s2 = parseInt((S/10)%10);
                            $(".sec-1").html(s2);
                            $(".sec-2").html(s1);
                        }
                    },
                    1000);
        }
        
        $(function($) {

    
    var time = new Date();
    var target_time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    target_time = target_time.valueOf()+4000*60*60*24;
    var tomorrow = new Date(target_time);
    var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    $('.end-of-action-date').html(tomorrow.getDate()+" "+months[tomorrow.getMonth()]);
    // $('#timer2 .text').html("Предложение действительно до "+tomorrow.getDate()+" "+months[time.getMonth()]);

});