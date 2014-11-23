$(document).ready(function() {

  // Count
  var quantity = 0;

  // Making random array stuff
  var rainbow = new Rainbow(); // by default, range is 0 to 100

  // Default starting swatches
  // customSpectrum = ['#f1da0e', '#c7da2e', '#72bf44', '#01a7a3', '#00a8d4', '#6575ae', '#5b2874', '#8e4879', '#d61f26'];
  customSpectrum = ['#f1da0e', '#72bf44', '#00a8d4', '#5b2874', '#d61f26'];

  // Function to print out starting swatches
  function getSwatches() {
    $("#starting-swatches").children().remove();
    for (var i = 0; i < customSpectrum.length; i++) {
      // console.log(customSpectrum[i]);
      $("#starting-swatches").append('<div class="starting-swatch" id="' + i + '" style="background:' + customSpectrum[i] + ';"><span>' + customSpectrum[i] + '</span><svg viewBox="0 0 30 30" class="ico-close"><use xlink:href="#ico-close"></use></svg></div>')
    }

    rainbow.setSpectrum.apply(null, customSpectrum);
  }

  // Print out starting swatches
  getSwatches();

  rainbow.setSpectrum.apply(null, customSpectrum);

  $("#item-count").val("12");
  quantity = 12;
  rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
  generateItems();

  // Add new starting swatches
  $("button.add-starting-hex").on("click", function(){

    // Capture and store values from input
    newSwatches = $("#add-starting-hex").val();

    // Clean array from extraneous characters
  	newSwatches = newSwatches.replace(/\s/g, "").replace(/[#"']/g,"").split(",")

  	newSwatches.map(function(swatch){
      if(swatch.length == 3){
        swatch +=swatch
      }
      if(swatch.length == 6){
        customSpectrum.push("#" + swatch)
      }
  	});

    // Send new values to rainbowvis
  	rainbow.setSpectrum.apply(null, customSpectrum);

    // Clear out value field
  	$("#add-starting-hex").val("");

    // Print all new swatches
    getSwatches();

    // Print all generated swatches
    generateItems();
  });

  $('#add-starting-hex').on('keyup', function(e) {
    if (e.which == 13) {
      $("button.add-starting-hex").click();
      getSwatches();
    }
  });

  // Remove swatch from array
  $("#starting-swatches").on("click", ".starting-swatch > svg", function() {

    customSpectrum.splice( $(this).parent().attr("id"), 1 );

    getSwatches();
    generateItems();
    onlyTwo();
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
  function generateItems() {
    var s = ''

    // Hex List
    hexList = [];

    $("#generated-swatches").children().remove();

    for (var i = 0; i < quantity; i++) {
      var hex = '#' + rainbow.colourAt(i);
      hexList.push(hex);
      s += '<li style="background-color:' + hex + '"><span>' + hex + '</span></li>';
    }

    $("#generated-swatches").append(s);

    outputHexList();
  }

  // HexList
  function outputHexList() {
    $("#hex-values-box").children().remove();

    var h = '';
    for (var i = 0; i < quantity; i++) {
      h += '<li><span class="swatch" style="background:' + hexList[i] +'"></span>"' + hexList[i] + '"<span class="comma">,</span>&nbsp;</li>';
    }

    $("#hex-values-box").append(h);
  }

  // Add Items
  $(".add-item").click(function() {
    $("#generated-swatches").children().remove();
    incrementValue();
    rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
    generateItems();

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
      rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity-1);
      generateItems();

      $("#item-count").val(quantity);
    }
  });

  // Item Count Field
  $("#item-count").on('keyup', function() {

    if ( $(this).val() == '' ) {
      quantity = 0;
    } else {
      console.log($("#item-count").val())
      quantity = parseInt($(this).val());

      $("#generated-swatches").children().remove();
      rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
      generateItems();
    }
  });

  // Sortable stuff
  $("#starting-swatches").sortable({
    placeholder: "sortable-placeholder"
  });

  // getter
  var placeholder = $( "#starting-swatches" ).sortable( "option", "placeholder" );

  // setter
  $( "#starting-swatches" ).sortable( "option", "placeholder", "sortable-placeholder" );

  // $("#starting-swatches").sortable().bind('sortupdate', function() {
  $("#starting-swatches").on("sortstop", function() {
    var getSpanText = $("#starting-swatches > div > span").text().split('#');

    var newSwatchOrder = $.makeArray( getSpanText );

    newSwatchOrder = $.grep(newSwatchOrder, function(value) {
      return value != "";
    });

    console.log("newSwatchOrder");
    console.log(newSwatchOrder);

    customSpectrum = newSwatchOrder.map(function(swatch){
      return "#" + swatch
    });

    console.log("customSpectrum");
    console.log(customSpectrum);

    getSwatches();
    generateItems();
  });

  function onlyTwo() {
    if ( $(".starting-swatch").length <= 2) {
      $(".starting-swatch > svg").hide();
    }
  }

});