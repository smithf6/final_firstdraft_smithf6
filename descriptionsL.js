$(document).ready(function() {
  
  
    $("#LT1C").click(showLT1);
    $("#LT2C").click(showLT2);
    $("#LT3C").click(showLT3);
    $("#MT1C").click(showMT1);
    $("#MT2C").click(showMT2);
    $("#MT3C").click(showMT3);
    $("#MT4C").click(showMT4);
    $("#MT5C").click(showMT5);
    $("#MT6C").click(showMT6);
    
    function showLT1() {
      $('.descriptions_L').hide();
      $('#LT1').show();
    }
    
    function showLT2() {
        $('.descriptions_L').hide();
        $('#LT2').show();
      }
      function showLT3() {
        $('.descriptions_L').hide();
        $('#LT3').show();
      }
      function showMT1() {
        $('.descriptions_L').hide();
        $('#MT1').show();
      }
      function showMT2() {
        $('.descriptions_L').hide();
        $('#MT2').show();
      }
      function showMT3() {
        $('.descriptions_L').hide();
        $('#MT3').show();
      }
      function showMT4() {
        $('.descriptions_L').hide();
        $('#MT4').show();
      }
      function showMT5() {
        $('.descriptions_L').hide();
        $('#MT5').show();
      }
      function showMT6() {
        $('.descriptions_L').hide();
        $('#MT6').show();
      }
  });