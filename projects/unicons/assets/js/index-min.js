function replaceIcons(a){$("img").each(function(){var s=$(this);s.attr("src",s.attr("src").replace("16",a)),s.attr("src",s.attr("src").replace("24",a)),s.attr("src",s.attr("src").replace("32",a)),s.attr("src",s.attr("src").replace("48",a)),s.on("error",function(){$(this).attr("src","../assets/img/unicons-people-48px-face-sad.svg")})})}$(".group-count").each(function(){var a=$(this);a.find("h2").append('<span class="appended">&nbsp;&nbsp;'+a.find("ul li").length+" Icons</span>")});var $btns=$(".btn").on("click",function(){$btns.removeClass("active").filter(this).addClass("active").data("filter")});$("#btn-small").on("click",function(){replaceIcons(16),$("ul").removeClass().addClass("group-16"),$("li").removeClass("xlarge")}),$("#btn-medium").on("click",function(){replaceIcons(24),$("ul").removeClass().addClass("group-24"),$("li").removeClass("xlarge")}),$("#btn-large").on("click",function(){replaceIcons(24),$("ul").removeClass().addClass("group-32"),$("li").removeClass("xlarge")}),$("#btn-xlarge").on("click",function(){replaceIcons(48),$("ul").removeClass().addClass("group-48"),$("li").addClass("xlarge")});