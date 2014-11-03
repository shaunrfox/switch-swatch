$(document).ready(function() {

  // Count
  var quantity = 0;

  // Making random array stuff
  var rainbow = new Rainbow(); // by default, range is 0 to 100

  customSpectrum = ['#f1da0e', '#c7da2e', '#72bf44', '#01a7a3', '#00a8d4', '#6575ae', '#5b2874', '#8e4879', '#d61f26'];

  swatches = customSpectrum;

  function getSwatches() {
    $("#starting-swatches").children().remove();
    for (var i = 0; i < customSpectrum.length; i++) {
      // console.log(customSpectrum[i]);
      $("#starting-swatches").append('<div class="starting-swatch" style="background:' + customSpectrum[i] + ';"><span>' + customSpectrum[i] + '</span><svg viewBox="0 0 30 30" class="ico-close"><use xlink:href="#ico-close"></use></svg></div>')
    }
  }

  getSwatches();

  rainbow.setSpectrum.apply(null, customSpectrum);

  $("button.add-starting-hex").click(function(){
  	swatches = $("#add-starting-hex").val();
  	swatches = swatches.replace(/\s+/, "").replace(/[#"']/g,"").split(",")
  	swatches = swatches.map(function(swatch){
  		return "#" + swatch
  	});

  	rainbow.setSpectrum.apply(null, swatches)
  	$("#add-starting-hex").val("");
    getSwatches();
  });

  $('#add-starting-hex').on('keyup', function(e) {
    if (e.which == 13) {
      $("button.add-starting-hex").click();
      getSwatches();
    }
  });

  // Increment Value
  function incrementValue() {
    quantity += 1;
  };

  // Decrement Value
  function decrementValue() {
    quantity -= 1;
  };

  // Generate li's
  function generateItem() {
    var s = ''

    // Hex List
    hexList = [];

    for (var i = 0; i < quantity; i++) {
      var hex = '#' + rainbow.colourAt(i);
      hexList.push(hex);
      s += '<li style="background-color:' + hex + '"><span>' + hex + '</span></li>';
    }

    $("#generated-swatches").append(s);
    console.log(hexList);
  }

  function outputHexList() {
    var h = '';
    for (var i = 0; i < quantity; i++) {
      h += '<li><span class="swatch" style="background:' + hexList[i] +'"></span>' + hexList[i] + '"<span class="comma">,</span>&nbsp;</li>';
    }

    $("#hex-values-box").append(h);
  }

  // Add Items
  $(".add-item").click(function() {
    $("#generated-swatches").children().remove();
    incrementValue();
    rainbow.setNumberRange(0, quantity);
    generateItem();
    console.log(quantity);

    $("#hex-values-box").children().remove();
    outputHexList();
    // console.log(hexList);

    $("#item-count").val(quantity);
  });

  // Subtract Items
  $(".subtract-item").click(function() {

    if ( quantity == 1 ) {
      $("#hex-values-box").children().remove();
      $("#generated-swatches").children().remove();
      decrementValue();
      $("#item-count").val(quantity);

    } else if (quantity == 0) {

    } else {
      $("#generated-swatches").children().remove();
      decrementValue();
      rainbow.setNumberRange(0, quantity);
      generateItem();

      $("#hex-values-box").children().remove();
      outputHexList();
      // console.log(hexList);
      console.log(quantity);

      $("#item-count").val(quantity);
    }

  });

  $("#item-count").on('keyup', function() {

    if ( $(this).val() == '' ) {
      quantity = 0;
    } else {
      console.log($("#item-count").val())
      quantity = parseInt($(this).val());

      $("#generated-swatches").children().remove();
      rainbow.setNumberRange(0, quantity);
      generateItem();

      $("#hex-values-box").children().remove();
      outputHexList();
      // console.log(quantity);
    }
  });

});