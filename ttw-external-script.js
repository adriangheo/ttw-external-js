jQuery(function() {
    console.log("testing github external js");
});


// <!-- script for modifying butons in ccp into submit buttons  -->
jQuery(function() {
    jQuery('input[value="Finish Quiz"]').css("background-color", "#546db4");
    jQuery('input[value="Finish Quiz"]').val('Submit');
    jQuery('input[value="Check"]').css("background-color", "#546db4"); //agh
    jQuery('input[value="Check"]').val('Submit'); //agh
});


// <!-- script for hiding checking if each Coaching Certification Program is scheduled (hasn't begun yes)  -->
// <!-- and hiding the course expand buttons for the ones that have not yet begun -->
jQuery(function() {
    jQuery(".ld-lesson-item-preview-heading").each(function() {
        // console.log("test1");
        var curentHeading = jQuery(this);
        if (curentHeading.find(".ld-icon-calendar").length == 0) {
            // console.log("test2");
            curentHeading.siblings(".ld-expand-button.ld-button-alternate").css("display", "inline-block");
        }
        // console.log("test3");
    });
});



//  <!-- script for changing behavior of Next Lesson button and Mark Complete Button button behavior-->
//  <!-- note: inside a Module, and not a sub topic -->
jQuery(function() {
    jQuery(".ld-lesson-title").each(function() {
        //the if clause bellow only executes when the user is viewing viewing a Module page, and also IS on a topic title
        if ((jQuery(this).css("font-weight") > 550) && (jQuery(".ld-is-current-item").length != 0)) {
            // console.log("inside one of the topics")

            // check if there are any topics following the curent one, inside the current module
            // if there aren't (and the if returns true) than the user is curently on the last topic of a module
            if (jQuery('.ld-is-current-item').parent().nextAll().length == 0) {
                // console.log("specificaly, inside the last topic of a module")
                jQuery('input[value="Mark Complete"]').on("click", function() {
                    sessionStorage.setItem("landingFromLastTopic", "True");
                });
            }
        }


        //the if clause bellow only executes when the user is viewing viewing a Module page, and not on a topic title
        if ((jQuery(this).css("font-weight") > 550) && (jQuery(".ld-is-current-item").length == 0)) {
            // console.log("inside a module, not a topic")

            var currentBoldedModule = jQuery(this);
            var firstIncompleteBullet = currentBoldedModule.closest(".ld-lesson-item-preview").next().find(".ld-status-icon.ld-status-incomplete").first();

            if (sessionStorage.getItem("landingFromLastTopic") == "True") {
                // console.log("landing from last topic of module, after MarkComplete click");
                sessionStorage.setItem("landingFromLastTopic", "False");
                //jQuery("span:contains(Next Lesson)").parent().first()[0].click(); //this doesn't work. So I was forced to use to method below
                if (window.location.href.indexOf("ccp-module-1-introduction") > -1) { //this is actualy the intro
                    window.open("https://thethirdwave.co/lessons/ccp-m1-setting-the-stage/", "_self");
                }
                if (window.location.href.indexOf("ccp-m1-setting-the-stage") > -1) { //this is the actual module 1
                    window.open("https://thethirdwave.co/lessons/ccp-module-2-the-legal-landscape/", "_self");
                }
                if (window.location.href.indexOf("ccp-module-2-the-legal-landscape") > -1) { //this is the actual module 2
                    window.open("https://thethirdwave.co/lessons/module-3-consciousness-medicines/", "_self");
                }
                if (window.location.href.indexOf("module-3-consciousness-medicines") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-4-psychedelics-neuroplasticity/", "_self");
                }
                if (window.location.href.indexOf("module-4-psychedelics-neuroplasticity") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-5-an-outcome-based-approach/", "_self");
                }
                if (window.location.href.indexOf("module-5-an-outcome-based-approach/") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-6-guidance-facilitation/", "_self");
                }
                if (window.location.href.indexOf("module-6-guidance-facilitation") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-7-integration/", "_self");
                }
                if (window.location.href.indexOf("module-7-integration") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-8-optimal-well-being/", "_self");
                }
                if (window.location.href.indexOf("module-8-optimal-well-being") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-9-purpose-flow-creativity/", "_self");
                }
                if (window.location.href.indexOf("module-9-purpose-flow-creativity") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-10-reimagining-leadership/", "_self");
                }
                if (window.location.href.indexOf("module-10-reimagining-leadership") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-11-safety-ethics-integrity/", "_self");
                }
                if (window.location.href.indexOf("module-11-safety-ethics-integrity") > -1) {
                    window.open("https://thethirdwave.co/lessons/module-12-from-theory-to-practice/", "_self");
                }
            } else {
                console.log("landing from something other than last topic of module (MarkComplete click)");
                // sessionStorage.setItem("landingFromLastTopic", "False");
                // window.open("https://thethirdwave.co/lessons/module-4-psychedelics-neuroplasticity/", "_self");
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