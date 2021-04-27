$(document).ready(function() {
    $("#dialog").dialog({
      modal: true,
      autoOpen: false
    });
    
    $("#logo").click(function() {
      $("#searchText").val($(this).attr("value"));
      $("#dialog").dialog("close");
    });
    
    $("#searchBtn").click(function() {
      $("#dialog").dialog("open");
    });
  });