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



/* 함수 */
function fn_showAddressView(){
	alert("test");
}


$('#reviewerInfoCard button').click(function() {
	
	$(this).addClass("saveReviewer");
	
	if ($(this).hasClass("saveReviewer")) {
		$("#reviewEventCard").show();
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

