$(function () {
    $(".jf-tab-content").hide();
    $(".jf-tab-content:first").show();

    /* Tabbing */
    $('.jf-tabs-list li').click(function () {
        console.log('i clicked');
        $(".jf-tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.jf-tabs-list li").removeClass("active");
        $(this).addClass("active");
        $(".tab_drawer_heading").removeClass("d_active");
        $(".jf-accordion-heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* Accordion */
    $(".jf-accordion-heading").click(function () {
        $(".jf-tab-content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();
        $(".jf-accordion-heading").removeClass("d_active");
        $(this).addClass("d_active");
        $("ul.jf-tabs-list li").removeClass("active");
        $("ul.jf-tabs-list li[rel^='" + d_activeTab + "']").addClass("active");
    });

    // Load Data into Div through JS
    //Get Method
    $.get("assets/data/tab-box-1.txt", function (data) {
        $("#tab-box-1").html(data);
    });
    // SetTimeout Method
    /*  setTimeout(function() {
     $('#lbl-tab-list-1').trigger( "click" );
     },10);
     */

    $('.tsList').click(function () {
        var dataFile = $(this).data('file');
        if ($("#" + dataFile).is(':empty')) {
            console.log(dataFile);
            $.ajax({
                url: 'assets/data/' + dataFile + '.txt',
                dataType: "text",
                success: function (data) {
                    $("#" + dataFile).html(data);
                }
            });
        }
    });

});

