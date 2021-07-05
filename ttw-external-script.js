jQuery(function() {
    console.log("testing external js");
});


// <!-- script for hining checking if each Coaching Certification Program is scheduled (hasn't begun yes)  -->
// <!-- and hiding the course expand buttons for the ones that have not yet begun -->
jQuery('input[value="Finish Quiz"]').css("background-color", "#546db4");
jQuery('input[value="Finish Quiz"]').val('Submit');



// <!-- script for hining checking if each Coaching Certification Program is scheduled (hasn't begun yes)  -->
// <!-- and hiding the course expand buttons for the ones that have not yet begun -->
jQuery(function() {
    jQuery(".ld-icon-calendar").each(function() {
        jQuery(this).parents(".ld-lesson-item-preview-heading").siblings(".ld-expand-button").css("display", "none");
    });
});


//  <!-- script for changing behavior of Next Lesson button and Mark Complete Button button, when the user is inside a Module -->
//  <!-- note: inside a Module, and not a sub topic -->
//  <!-- script for changing behavior of Next Lesson button and Mark Complete Button button, when the user is inside a Module -->
//  <!-- note: inside a Module, and not a sub topic -->
jQuery(function() {
    jQuery(".ld-lesson-title").each(function() {
        //the if clause bellow only executes when the user is viewing viewing a Module page, and also IS on a topic title
        if ((jQuery(this).css("font-weight") > 550) && (jQuery(".ld-is-current-item").length != 0)) {
            console.log("inside one of the topics")

            // check if there are any topics following the curent one, inside the current module
            // if there aren't (and the if returns true) than the user is curently on the last topic of a module
            if (jQuery('.ld-is-current-item').parent().nextAll().length == 0) {
                console.log("specificaly, inside the last topic of a module")
                jQuery('input[value="Mark Complete"]').on("click", function() {
                    sessionStorage.setItem("landingFromLastTopic", "True");
                });
            }
        }


        //the if clause bellow only executes when the user is viewing viewing a Module page, and not on a topic title
        if ((jQuery(this).css("font-weight") > 550) && (jQuery(".ld-is-current-item").length == 0)) {
            console.log("inside a module, not a topic")

            var currentBoldedModule = jQuery(this);
            var firstIncompleteBullet = currentBoldedModule.closest(".ld-lesson-item-preview").next().find(".ld-status-icon.ld-status-incomplete").first();

            if (sessionStorage.getItem("landingFromLastTopic") == "True") {
                console.log("comming from last topic");
            } else {
                console.log("comming from something diferent than last topic");
            }

            if (firstIncompleteBullet.length == 1) {
                //the line bellow hides the mark complete button for the Module page, if there is even one incomplete subtopic
                jQuery(".learndash_mark_complete_button").css("display", "none");

                //the line bellow disables the predefined behavior of the Next lesson button
                jQuery("span:contains(Next Lesson)").parent().click(false);

                //the code block bellow tells the browser to open a difernt page if the user hits Next Lesson
                jQuery("span:contains(Next Lesson)").parent().on("click", function() {
                    firstIncompleteBullet.click();
                });
            }
        }
    });
});