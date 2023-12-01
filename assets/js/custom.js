zbp.plugin.unbind("comment.reply.start", "system");
zbp.plugin.on("comment.reply.start", "themeol_fashion", function(id) {
	var i = id;
	$("#inpRevID").val(i);
	var frm = $('#comm-post'),
		cancel = $(".cancel-reply");
	frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
	$('#AjaxComment' + i).before(frm);
	cancel.show().click(function() {
		var temp = $('#temp-frm');
		$("#inpRevID").val(0);
		if (!temp.length || !frm.length) return;
		$(this).parent('.msg-name').find('.com-r-a').addClass('comm-reply')
		temp.before(frm);
		temp.remove();
		$(this).hide();
		frm.removeClass("reply-frm");
		$('.comm-msgs').before(frm);
		return false;
	});
	try {
		$('#txaArticle').focus();
	} catch (e) {}
	return false;
});

//防止评论框消失
zbp.plugin.on("comment.get", "themeol_fashion", function (logid, page) {
	$('.commentspage').html("Waiting...");
	$.get(bloghost + "zb_system/cmd.php?act=getcmt&postid=" + logid + "&page=" + page, function(data) {
		$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();
		$('#AjaxCommentEnd').before(data);
		$("#cancel-reply").click()
	})
});

zbp.plugin.on("comment.post.success", "themeol_fashion", function () {
	$(".cancel-reply").click();
});

//评论回复/取消按钮控制
$(function () {
	$(document).on('click','.comm-reply',function(){
		$(this).removeClass('comm-reply');
		$('.cancel-reply').css('display','none');
		$(this).siblings('.cancel-reply').css('display','inline');
	});
	$(document).on('click','.cancel-reply',function(){
		$(this).css('display','none');
	});
});