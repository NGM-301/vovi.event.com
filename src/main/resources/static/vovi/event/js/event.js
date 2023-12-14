/**
 * @Class Name : vovi/event/js/event.js
 * @Description : event js
 * @Modification : Information
 * 
 * 수정일				수정자			수정내용
 * -------------------------------------------------------
 * 2023-12-04		sgjang		최초 생성
 * 
 * author: sgjang
 * since 2023-12-04 MON
 */

/*  변수  */
let btnCount = 0;

/* 함수 */

function fn_get(url, memberData, detail=null){
	$.ajax({
		url: contextPath + url,
		contentType: "application/json",
		method: "POST",
		data: JSON.stringify(memberData),
		success: function(response)
		{
			if(detail) {
	
			} else {
				console.log(response);
			} 
		},
		error: function(xhr)
		{
			
		}
	});
}

function fn_showAddressView(){
	alert("test");
}


$('#saveAndModBtn').click(function() {
	btnCount = 1;
	$(this).addClass("saveReviewer");
	$("#reviewerInfoCard input").attr("readonly",true);
	if ($(this).hasClass("saveReviewer")) {
		btnCount = 0;
		$("#reviewEventCard").show();
		$(this).removeClass('btn-outline-success').addClass('btn-outline-warning');
		$(this).text("수정");
	}
});

$('#checkAgree').change(function() {
	if ($(this).is(':checked')) {
		$("#reviewerInfoCard").show();
	} else {
		$("#reviewerInfoCard").hide();
		$("#reviewEventCard").hide();
	}
});



/* 초기화 */
//fn_get("event/member", {userNm : "김선호", userTelNo: "010-0000-0000"});
