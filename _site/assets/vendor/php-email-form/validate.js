jQuery(document).ready(function(e){"use strict";e("form.php-email-form").submit(function(){var t=e(this).find(".form-group"),a=!1,n=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;if(t.children("input").each(function(){var t=e(this),i=t.attr("data-rule");if(i!==undefined){var s=!1,r=i.indexOf(":",0);if(r>=0){var d=i.substr(r+1,i.length);i=i.substr(0,r)}else i=i.substr(r+1,i.length);switch(i){case"required":""===t.val()&&(a=s=!0);break;case"minlen":t.val().length<parseInt(d)&&(a=s=!0);break;case"email":n.test(t.val())||(a=s=!0);break;case"checked":t.is(":checked")||(a=s=!0);break;case"regexp":(d=new RegExp(d)).test(t.val())||(a=s=!0)}t.next(".validate").html(s?t.attr("data-msg")!==undefined?t.attr("data-msg"):"wrong Input":"").show("blind")}}),t.children("textarea").each(function(){var t=e(this),n=t.attr("data-rule");if(n!==undefined){var i=!1,s=n.indexOf(":",0);if(s>=0){var r=n.substr(s+1,n.length);n=n.substr(0,s)}else n=n.substr(s+1,n.length);switch(n){case"required":""===t.val()&&(a=i=!0);break;case"minlen":t.val().length<parseInt(r)&&(a=i=!0)}t.next(".validate").html(i?t.attr("data-msg")!=undefined?t.attr("data-msg"):"wrong Input":"").show("blind")}}),a)return!1;var i=e(this).serialize(),s=e(this),r=e(this).attr("action");return r?(s.find(".sent-message").slideUp(),s.find(".error-message").slideUp(),s.find(".loading").slideDown(),e.ajax({type:"POST",url:r,data:i,success:function(e){"OK"==e?(s.find(".loading").slideUp(),s.find(".sent-message").slideDown(),s.find("input:not(input[type=submit]), textarea").val("")):(s.find(".loading").slideUp(),s.find(".error-message").slideDown().html(e))}}),!1):(s.find(".loading").slideUp(),s.find(".error-message").slideDown().html("The form action property is not set!"),!1)})});