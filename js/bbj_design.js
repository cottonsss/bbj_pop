// JavaScript Document
$(document).ready(function(){
	/******************** 공통 ********************/
	/* 기본 체크박스(파란배경 하얀체크) */
	$(".chk_input").click(function(){
		var chk_wrap = $(this).parents(".chk_wrap");
		var chk_lb = $(chk_wrap).find(".chk_lb");
		if($(this).prop("checked")){
			$(chk_lb).css("background","url(http://image.club5678.com/imgs/bbjang/img01/btn_chk_on.png) no-repeat left center").css("background-size","22px 22px");
		} else {
			$(chk_lb).css("background","url(http://image.club5678.com/imgs/bbjang/img01/btn_chk_off.png) no-repeat left center").css("background-size","22px 22px");
		}
	});
	/* 풀페이지 */
	function full_page(){
		var window_height =$(window).height();
		var full_height = window_height + "px"
		$(".full_page").css("height", full_height);
	}
	$(window).on("load",full_page);
	
	/******************** 메인리스트 ********************/
	/* 검색 포커스 인 */
	function focus_in(){
		//마이메뉴 아이콘을 검색 초기화 아이콘으로
		$(".btn_my").addClass("btn_reset");
		$(".header_logo").css("display","none");
		$(".header_bar").css("border-radius","3px 3px 0px 0px");
		$(".srch_drop").css("display","block");
		// 검색바에 글씨가 써지거나 써져있는 경우
		if($("#header_srch").val().length > 0){
			$(".header_srch label").css("display","none");
			$(".srch_del").css("display","block");
			$(".btn_voice").css("display","none");
			$(".btn_shrch").css("display","block");
			$(".srch_rel").css("display","block");
			//검색어 삭제 버튼을 클릭한 경우
			$(".srch_del").click(function(){
				$("#header_srch").val("");
			});
		// 검색바에 글씨가 없는 경우
		} else {
			$(".header_srch label").css("display","block");
			$(".srch_del").css("display","none");
			$(".btn_voice").css("display","block");
			$(".btn_shrch").css("display","none");
			$(".srch_rel").css("display","none");
		}
	}
	/* 검색 포커스 아웃 */
	function focus_out(){
		// 검색바에 글씨가 없는 경우
		if($("#header_srch").val().length <= 0){
			$(".btn_my").removeClass("btn_reset");
			$(".header_logo").css("display","block");
			$(".header_srch label").css("display","none");
			$(".header_bar").css("border-radius","3px 3px 3px 3px");
			$(".srch_drop").css("display","none");
		}
	}
	$("#header_srch").focusin(function(){
		focus_in()
	});
	$("#header_srch").focusout(function(){
		focus_out()
	});
	$("#header_srch").keyup(function(){
		focus_in()
	});
	$(".srch_del").click(function(){
		$("#header_srch").val("");
		focus_in()
	});
	$(".link_reset").click(function(){
		$("#header_srch").val("");
		focus_out()
	});
	
	/* 새로고침 click시 애니메이션 */
	function rfsh_on(){
		// 화살표 사라짐
		$(".arrow_span").addClass("arrow_span_on");
		// 로딩애니메이션
		setTimeout(function(){
			$(".result_rfsh").addClass("result_rfsh_on");
		},150);
		// 원상복귀
		setTimeout(function(){
			$(".arrow_span").removeClass("arrow_span_on");
			$(".result_rfsh").removeClass("result_rfsh_on");
		},700);
	}
	$(".result_rfsh").click(function(){
		rfsh_on();
	});
	
	/******************** active ********************/
	$(".list_card .list_intro a").mousedown(function(){
		$(this).addClass("a_active");
	});
	$(".list_card .list_intro a").mouseup(function(){
		$(this).removeClass("a_active");
	});
	$(".btn_write a").mousedown(function(){
		$($(this).find(".ripple")).addClass("ripple_active");
	});
	$(".btn_write a").mouseup(function(){
		$($(this).find(".ripple")).removeClass("ripple_active");
	});
	

	/* 로그인페이지 라인 컬러 설정 */
	$(".form_1 input").focusin(function(){
		var this_form = $(this).closest(".form_1");
		var this_line = $(this_form).find(".line");
		var this_txt_erase = $(this_form).find(".txt_erase");
		$(this_line).addClass("line_on");
		$(this_txt_erase).addClass("txt_erase_on");
	});
	$(".form_1 input").focusout(function(){
		var this_form = $(this).closest(".form_1");
		var this_line = $(this_form).find(".line");
		var this_txt_erase = $(this_form).find(".txt_erase");
		$(this_line).removeClass("line_on");
		$(this_txt_erase).removeClass("txt_erase_on");
	});


});