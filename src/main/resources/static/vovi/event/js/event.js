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

function fn_createModBtn(){
	const MOD_BTN = `<button type="button" class="btn btn-outline-warning modBtn">수정</button>`;
	$("#reviewEventCard").show();
	$("#reviewEventCard").focus();
	$("#reviewerInfoCard .saveBtn").remove();
	$("#reviewerInfoCard .card-header").append(MOD_BTN);
	$("#reviewerInfoCard input").attr("readOnly", true);
}

function fn_createSaveBtn(){
	const SAVE_BTN = `<button type="button" class="btn btn-outline-success saveBtn">저장</button>`;
	$("#reviewEventCard").hide();
	$("#reviewerInfoCard .modBtn").remove();
	$("#reviewerInfoCard input").attr("readOnly", false);
	$("#reviewerInfoCard .card-header").append(SAVE_BTN);
}

$('#reviewerInfoCard').on('click', '.saveBtn', function() {
	fn_createModBtn();
});

$('#reviewerInfoCard').on('click', '.modBtn', function() {
	fn_createSaveBtn();
});

$('#userAgreeCard').on('change', '#checkAgree', function() {
	if ($("#checkAgree").is(':checked')) {
		$("#reviewerInfoCard").show();
		$("#reviewerInfoCard").focus();
		fn_createSaveBtn();
		if($("#reviewerInfoCard .saveBtn").length > 1){
			$("#reviewerInfoCard .saveBtn")[0].remove();
		}
	} else {
		$("#reviewerInfoCard").hide();
		$("#reviewEventCard").hide();
	}
});

$("#eventParticipation").click(function (){
	alert("참여버튼")
})

/* 초기화 */
//fn_get("event/member", {userNm : "김선호", userTelNo: "010-0000-0000"});
