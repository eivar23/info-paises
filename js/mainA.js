$(function(){

var v_aciertos=0;
var v_desaciertos=0;


$("#ori_1").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_2").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_3").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_4").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_5").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_6").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_7").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_8").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_9").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_10").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_11").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});
$("#ori_12").draggable({
	containment: '#cont',
	cursor: 'move',
	stop: function(event, ui){
		
	}
});


$("#portugal").droppable({
	drop: function(event, ui){
if (ui.draggable.context.id=='ori_1'||ui.draggable.context.id=='ori_2'||ui.draggable.context.id=='ori_3'||ui.draggable.context.id=='ori_4'||ui.draggable.context.id=='ori_9'||ui.draggable.context.id=='ori_10') {
			
	if (ui.draggable.context.id=='ori_1') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_1").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_1").offset({left: x1, top: y1});
		    $("#ori_1").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		    if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	    
			}
	}
	if (ui.draggable.context.id=='ori_2') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_2").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_2").offset({left: x1, top: y1});
		    $("#ori_2").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		    if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);		     
			}
	}

	if (ui.draggable.context.id=='ori_3') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_3").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_3").offset({left: x1, top: y1});
		    $("#ori_3").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}
if (ui.draggable.context.id=='ori_4') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_4").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_4").offset({left: x1, top: y1});
		    $("#ori_4").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		   if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}


if (ui.draggable.context.id=='ori_9') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_9").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_9").offset({left: x1, top: y1});
		    $("#ori_9").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		   if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}
 

if (ui.draggable.context.id=='ori_10') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_10").hide(1000);
		    var x1=$("#portugal").offset().left;
		    var y1=$("#portugal").offset().top;
		    $("#ori_10").offset({left: x1, top: y1});
		    $("#ori_10").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}





}else{			
			v_desaciertos++;
		    $("#t_desaciertos").html(v_desaciertos);
		    if (v_desaciertos==3) {
		        navigator.vibrate(2000);
		        alert("perdiste");
	}
	}
	}
});





$("#Qatar").droppable({
	drop: function(event, ui){
if (ui.draggable.context.id=='ori_5'||ui.draggable.context.id=='ori_6'||ui.draggable.context.id=='ori_7'||ui.draggable.context.id=='ori_8'||ui.draggable.context.id=='ori_11'||ui.draggable.context.id=='ori_12') {
			
	if (ui.draggable.context.id=='ori_5') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_5").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_5").offset({left: x1, top: y1});
		    $("#ori_5").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);		    
			}
	}
	if (ui.draggable.context.id=='ori_6') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_6").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_6").offset({left: x1, top: y1});
		    $("#ori_6").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	     
			}
	}

	if (ui.draggable.context.id=='ori_7') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_7").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_7").offset({left: x1, top: y1});
		    $("#ori_7").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}
if (ui.draggable.context.id=='ori_8') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_8").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_8").offset({left: x1, top: y1});
		    $("#ori_8").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}


if (ui.draggable.context.id=='ori_11') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_11").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_11").offset({left: x1, top: y1});
		    $("#ori_11").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}
 

if (ui.draggable.context.id=='ori_12') {
		    $("#mensaje").html("respuesta correcta");
		   	$("#ori_12").hide(1000);
		    var x1=$("#Qatar").offset().left;
		    var y1=$("#Qatar").offset().top;
		    $("#ori_12").offset({left: x1, top: y1});
		    $("#ori_12").draggable('disable');
		    v_aciertos++;
		    $("#t_aciertos").html(v_aciertos);
		     if (v_aciertos==12) {
		    $("#oro").hide(1000);
		    $("#oro2").hide(1000);
		    $("#oro3").hide(1000);	
			}
	}





}else{			
			v_desaciertos++;
		    $("#t_desaciertos").html(v_desaciertos);
		    if (v_desaciertos==3) {
		        navigator.vibrate(2000);
		        alert("perdiste");
	}
	}
	}
});
});








