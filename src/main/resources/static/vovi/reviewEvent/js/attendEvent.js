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

function fn_callAddressApi(){
	new daum.Postcode({
		oncomplete: function(data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
			// 예제를 참고하여 다양한 활용법을 확인해 보세요.
		}
	}).open();
}

function fn_post(url, data=null){
	console.log(contextPath + url);
	console.log(data);
	$.ajax({
		url: contextPath + url,
		contentType: APPLICATION_JSON,
		method: POST,
		data: JSON.stringify(data),
		success: function(response){
			console.log(response)
		},
		error: function(xhr){
			
		}
	});
}

function fn_showAddressView(){
	alert("test");
}

function fn_createModBtn(){
	const MOD_BTN = `<button type="button" class="btn btn-outline-warning modBtn">수정</button>`;
	/*$("#reviewEventCard").show();
	$("#reviewEventCard").focus();*/
	$("#reviewerInfoCard .saveBtn").remove();
	$("#reviewerInfoCard .card-header").append(MOD_BTN);
	$("#reviewerInfoCard input").prop("readOnly", true);
	$("#findPostCodeBtn").prop("disabled", true);
}

function fn_createSaveBtn(){
	const SAVE_BTN = `<button type="button" class="btn btn-outline-success saveBtn">저장</button>`;
	$("#reviewEventCard").hide();
	$("#reviewerInfoCard .modBtn").remove();
	$("#reviewerInfoCard .card-header").append(SAVE_BTN);
	$("#reviewerInfoCard input").prop("readOnly", false);
	$("#findPostCodeBtn").prop("disabled", false);
	$("#findPostCodeBtn").off("click", fn_showAddressView).on("click", fn_showAddressView);
}

$('#reviewerInfoCard').on('click', '.saveBtn', function() {
	// 모든 정보와 이메일 인증, 우편번호 찾기 해야 저장 가능
	// 수정 누르면 이메일 인증은 작동 x
	let data = {
		userNm : $("#reviewer").val(),
		userTelNo: $("#reviewerPhoneNum").val(),
		userEmlAddr : $("#reviewerEmail").val(),
		userAddr : $("#reviewPostCode").val()+ ", " + $("#reviewAddress").val() +", "+ $("#reviewDetailAddress").val()
	};
	
	modalConfirm("저장하시겠습니까?").then((result) => {
		if (result) {
			fn_post("review-event/attend-event", data);
			fn_createModBtn();
			modalAlert("저장되었습니다.");
			$(".customAlert").on("click", function(){
				$("#reviewEventCard").show();
				$("#reviewEventCard").focus();
			})
		}else{
			modalAlert("저장이 취소되었습니다.");
		}
	});
});

$('#reviewerInfoCard').on('click', '.modBtn', function() {
	modalConfirm(`<p>수정하시겠습니까?</p>`).then((result) => {
		if (result) {
			fn_createSaveBtn();
		}else{
			modalAlert("수정이 취소되었습니다.");
		}
	});
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

$("#intermediateSave").click(function (){
	
	modalAlert("저장되었습니다.");
})

$("#eventParticipation").click(function (){
	
	modalAlert("참여 완료되었습니다. 소중한 리뷰 감사합니다.");
})

$("#reviewer").on("input", function () {
	let reviewer = $("#reviewer").val();
	reviewer = reviewer.replace(/[0-9]/g, '');
	$(this).val(reviewer);
})

$("#reviewerPhoneNum").on("input", function () {
	let phoneNum = $("#reviewerPhoneNum").val();
	phoneNum = phoneNum.replace(/[^\d]/g, '');
	
	if (phoneNum.length >= 4) {
		phoneNum = phoneNum.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
	}
	
	if (phoneNum.length > 13) {
		phoneNum = phoneNum.substring(0, 13);
	}
	
	$(this).val(phoneNum);
})

$("#reviewerEmail").on("input", function () {
	let reviewerEmail = $("#reviewerEmail").val();
	reviewerEmail = reviewerEmail.replace(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, '');
	$(this).val(reviewerEmail);
})

/* 초기화 */
//fn_get("event/member", {userNm : "김선호", userTelNo: "010-0000-0000"});
