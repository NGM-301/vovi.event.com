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
$('#isOk').change(function() {
	if ($(this).is(':checked')) {
		$("#reviewEvent").show();
	} else {
		$("#reviewEvent").hide();
	}
});

