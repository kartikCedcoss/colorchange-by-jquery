var color = ['#222f3e','#f368e0','#ee5253','#0abde3','#10ac84'];
var i=0;
    $('#btn').on('click',function(){
        i=i; i <color.length ? ++i :0;
        document.querySelector('body').style.background =color[i];
        
    })
