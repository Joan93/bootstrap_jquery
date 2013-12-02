var API_BASE_URL = "http://localhost:8080/beeter-api";



//Obtenim un sting a partir del sting id
$("#button_get_sting").click(function(e) {
	e.preventDefault();
	getSting($("#stingid").val());
});
function getSting(stingid) {
	var url = API_BASE_URL + "/stings/" + stingid;
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "alicia",
		password : "alicia",
	}).done(
			function(data, status, jqxhr) {
				var sting = JSON.parse(jqxhr.responseText);
				$(document)
						.ready(
								function() {
									$("#sting_result").text("");
									var $grouplist = $('#sting_result');
									$('<li>' + sting.stingid + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Nombre de usuario: "
													+ sting.username + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Subject: "
													+ sting.subject + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Contenido: "
													+ sting.content + '</li>')
											.appendTo($grouplist);
									$(
											'<li>' + "Fecha: "
													+ sting.creationTimestamp
													+ '</li>').appendTo(
											$grouplist);
								});
			}).fail(function() {
		$("#sting_result").text("Sting no encontrado");
	});
}
















//Obtenir varis Stings (10)
$("#button_get_stings").click(function(e) {
	e.preventDefault();
	getStings();
});
function getStings() {
	var url = API_BASE_URL + "/stings?offset=0&length=10&username=alicia";
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "alicia",
		password : "alicia",

	}).done(function(data, status, jqxhr) {
		var response = JSON.parse(jqxhr.responseText);
		var stings = response.stings;
		$("#stings_result").text("");
		$.each(stings, function(i, v) {
			var sting = v;
			var $grouplist = $('#stings_result');
			$('<li>' + sting.stingid + '</li>').appendTo($grouplist);
			$('<li>' + sting.username + '</li>').appendTo($grouplist);
			$('<li>' + sting.subject + '</li>').appendTo($grouplist);
			$('<li>' + sting.content + '</li>').appendTo($grouplist);
			$('<li>' + sting.creationTimestamp + '</li>').appendTo($grouplist);
			$("<HR>").appendTo($grouplist);
		});
	}).fail(function() {
		$("#stings_result").text("El usuario no ha escrito ningun sting");
	});
}









//esborrar un sting a partir de la id
$("#button_delete_sting").click(function(e) {
	e.preventDefault();
	deleteSting($("#stingid2").val());
});
function deleteSting(stingid) {
	var url = API_BASE_URL + '/stings/' + stingid;
	$.ajax({
		url : url,
		type : 'DELETE',
		dataType : 'json',
		crossDomain : true,
		username : 'alicia',
		password : 'alicia',

	}).done(function(data, status, jqxhr) {
		$("#delete_result").text("Sting borrado correctamente");

	}).fail(function(jqXHR, textStatus) {
		console.log(textStatus);
	});
}










$("#button_post_sting").click(function(e) {
	e.preventDefault();
	createSting();
});
function createSting() {
	var url = API_BASE_URL + '/stings';
	var sting = new Object();
	sting.content = $("#content").val();
	sting.subject = $("#subject").val();
	sting.username = "alicia";

	var data = JSON.stringify(sting);
	$.ajax({
		url : url,
		type : 'POST',
		dataType : "json",
		crossDomain : true,
		headers : {
			"Accept" : "application/vnd.beeter.api.sting+json",
			"Content-Type" : "application/vnd.beeter.api.sting+json"
		},
		data : data,
		username : 'alicia',
		password : 'alicia',
	}).done(function(data, status, jqxhr) {

		$("#post_result").text("Sting añadido correctamente");
	}).fail(function(jqXHR, textStatus) {
		$("#post_result").text("Sting NO añadido");
	});
}











$("#button_get_sting1").click(function(e) {
	e.preventDefault();
	getSting1($("#stingid1").val());
});
function getSting1(stingid) {
	var url = API_BASE_URL + "/stings/" + stingid;
	$("#subject1").text("");
	$("#content1").text("");
	$("#username").text("");
	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
		username : "alicia",
		password : "alicia",
	}).done(function(data, status, jqxhr) {
		var sting = JSON.parse(jqxhr.responseText);
		$("#subject1").text(sting.subject);
		$("#content1").text(sting.content);
		$("#username").text(sting.username);
	}).fail(function() {
		$("#sting_result").text("Sting no encontrado");
	});
}
$("#button_update_stings").click(function(e) {
	e.preventDefault();
	updateSting();
});
function updateSting() {
	var url = API_BASE_URL + '/stings/' + $("#stingid1").val();
	var sting = new Object();
	sting.content = $("#content1").val();
	sting.subject = $("#subject1").val();
	sting.username = $("#username").val();

	var data = JSON.stringify(sting);

	$.ajax({
		url : url,
		type : 'PUT',
		dataType : "json",
		crossDomain : true,
		headers : {
			"Accept" : "application/vnd.beeter.api.sting+json",
			"Content-Type" : "application/vnd.beeter.api.sting+json"
		},
		data : data,
		username : 'alicia',
		password : 'alicia',
	}).done(function(data, status, jqxhr) {

		$("#update_result").text("Sting modificado correctamente");
	}).fail(function(jqXHR, textStatus) {
		$("#update_result").text("Sting no modificado");
	});
}