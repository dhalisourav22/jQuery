//This noConflict() method is used for preventing the '$' sign conflicting problem between other frameworks in js.

//Default noConflict() method. Here We can use jQuery only.

// $.noConflict();
// jQuery(document).ready(()=>{
//     jQuery(".butt1").click(()=>{
//         jQuery("p").text("This is changed text..!");
//     })
// });


//noConflict() method use by customaize variable. Here we can use jQuery and jq(customized variable) also.

// let jq = $.noConflict();
// jq(document).ready(()=>{
//     jQuery(".butt1").click(()=>{
//         jq("p").text("This is changed text..!");
//     });
// });


//noConflict(). Here we can use jQuery and '$' sign also.

$.noConflict();
jQuery(document).ready(($)=>{
    $(".butt1").click(()=>{
        jQuery("p").text("This is changed text..!");
    });
});