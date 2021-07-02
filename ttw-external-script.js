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
jQuery(function() {
    jQuery(".ld-lesson-title").each(function() {
        //the if clause bellow only executes when the user is viewing viewing a Module page, and not on a topic title
        if ((jQuery(this).css("font-weight") > 550) && (jQuery(".ld-is-current-item").length == 0)) {

            var currentBoldedModule = jQuery(this);
            var firstIncompleteBullet = currentBoldedModule.closest(".ld-lesson-item-preview").next().find(".ld-status-icon.ld-status-incomplete").first();

            if (firstIncompleteBullet.length == 1) {
                //the line bellow hides the mark complete button for the Module page, if there is even one incomplete subtopic
                jQuery(".learndash_mark_complete_button").css("display", "none");

                //the line bellow disables the predefined behavior of the Next lesson button
                jQuery("span:contains(Next Lesson)").parent().click(false);

                //the code block bellow tells the browser to open a difernt page if the user hits lesson complete
                jQuery(".ld-button").on("click", function() {
                    firstIncompleteBullet.click();
                });
            }
        }
    });
});