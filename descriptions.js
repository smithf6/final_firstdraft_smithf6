$(document).ready(function() {
  
  
    $("#RT1C").click(showRT1);
    $("#RT2C").click(showRT2);
    $("#RT3C").click(showRT3);
    $("#RM1C").click(showRM1);
    $("#RM2C").click(showRM2);
    $("#RM3C").click(showRM3);
    $("#RM4C").click(showRM4);
    $("#RM5C").click(showRM5);
    $("#RM6C").click(showRM6);
  
  
    
    function showRT1() {
      $('.descriptions_R').hide();
      $('#RT1').show();
    }
    
    function showRT2() {
        $('.descriptions_R').hide();
        $('#RT2').show();
      }
      function showRT3() {
        $('.descriptions_R').hide();
        $('#RT3').show();
      }
      function showRM1() {
        $('.descriptions_R').hide();
        $('#RM1').show();
      }
      function showRM2() {
        $('.descriptions_R').hide();
        $('#RM2').show();
      }
      function showRM3() {
        $('.descriptions_R').hide();
        $('#RM3').show();
      }
      function showRM4() {
        $('.descriptions_R').hide();
        $('#RM4').show();
      }
      function showRM5() {
        $('.descriptions_R').hide();
        $('#RM5').show();
      }
      function showRM6() {
        $('.descriptions_R').hide();
        $('#RM6').show();
      }
  });