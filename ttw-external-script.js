jQuery(function() {
    console.log("testing external js");
});


// <!-- script for hining checking if each Coaching Certification Program is scheduled (hasn't begun yes)  -->
// <!-- and hiding the course expand buttons for the ones that have not yet begun -->
jQuery(function() {
    jQuery('input[value="Finish Quiz"]').css("background-color", "#546db4");
    jQuery('input[value="Finish Quiz"]').val('Submit');

});



// <!-- script for hining checking if each Coaching Certification Program is scheduled (hasn't begun yes)  -->
// <!-- and hiding the course expand buttons for the ones that have not yet begun -->
//start of script for hiding home page link from test pages     
function hideCppTopics() {
    var timesRunV1 = 0;

    console.log("7a");
    var checkExistV1 = setInterval(function() {
        timesRunV1 += 1;
        console.log("8a");
        if ((jQuery(".ld-icon-calendar").length > 0) == true) { //this line could have been writen shorten. It hasn't for simple readability purposes

            //the setTimeout bellow is conceived to be in case the user's is soooo fast that it literaly doesn't allow time for all the calendar icons to appear
            //this is why it has a 100 milisecond delay time
            setTimeout(
                //bellow is the 1st argument for setInterval (specifically the funciton to be executet)
                function() {
                    jQuery(".ld-icon-calendar").each(function() {
                        jQuery(this).parents(".ld-lesson-item-preview-heading").siblings(".ld-expand-button").css("display", "none");
                    });
                },
                //bellow is the 2nd argument for setTimout (specifically the interval in miliseconds). So the functio in the first argument will be executed only after the number of millisecods bellow have passed
                100
            );
            console.log("Exists!");
            clearInterval(checkExistV1);
        }
        //the if clause below is conceived in case the check never finds any .ld-icon-calendar. It's set to 40 seconds (400 x 100 miliseconds). If it reaches this limit (case in which it hasn't found any .ld-icon-calendar element), it will force stop the interval check
        if (timesRunV1 === 400) {
            clearInterval(checkExistV1);
        }
        console.log("9a");
    }, 100); // check every 100ms
}

hideCppTopics();

//  <!-- script for changing behavior of Next Lesson button and Mark Complete Button button, when the user is inside a Module -->
//  <!-- note: inside a Module, and not a sub topic -->
//  <!-- script for changing behavior of Next Lesson button and Mark Complete Button button, when the user is inside a Module -->
//  <!-- note: inside a Module, and not a sub topic -->
jQuery(documet).ready() {

}

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
                console.log("landing from last topic of module, after MarkComplete click");
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