(function ($) {
  
  $(function() {

    buildSource();

    function generate() {
      count = scriptParams.count; // Variable passed in from bdt-shortcodes.php
      output = "";
      current = 0;

      // Output content   
      for (var i = 0; i < count; i++) {
        num = Math.floor(Math.random() * 4) + 3;
        last = 0;

        // Output a paragraph
        p = "";
        for (var z = 1; z <= num; z++) {
          p += q[++current % q.length][1];
          if (z != num) p += " ";
        }
        // Output a list
        list = "";
        if (i == 2 || i == 4) {
          for (var l = 0; l < Math.floor(Math.random() * 4) + 2; l++) {
            list += "<li>" + q[Math.floor(Math.random() * q.length)][1] + "</li>\n";
          }
          if (i == 2) output += "<ul>\n" + list + "</ul>\n";
          else output += "<ol>\n" + list + "</ol>\n";
        }
        // Output a header
        if (i < 6) {
          length = Math.floor(Math.random() * 5) + 2;
          s = h[Math.floor(Math.random() * h.length)][0];
          output += "<h" + (i + 1) + ">" + s + "</h" + (i + 1) + ">\n";
        }
        output += "<p>" + p + "</p>\n";
      }

      $("#bdt").html(output);
    }

    function buildSource() {
      q = []; // Quote array
      h = []; // Header array
      var val = scriptParams.show; // Variable passed in from bdt-shortcodes.php

      $.getJSON("http://api.chrisvalleskey.com/fillerama/get.php?show=" + val + "&format=json&jsoncallback=?",
      function(data){
        $.each(data.db, function (key, value) {
          q.push([value.source, value.quote]);
        });
        $.each(data.headers, function (key, value) {
          h.push([value.header]);
        });
        generate();
      });
    } 
  });
})(jQuery);