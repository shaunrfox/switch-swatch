$(document).ready(function() {

  var quantity = 0;
  var rainbow = new Rainbow(); // by default, range is 0 to 100
  customSpectrum = [];
  hexList = [];

  // Function to print out starting swatches
  function getStartingSwatches() {
    $("#starting-swatches").children().remove();
    for (var i = 0; i < customSpectrum.length; i++) {
      $("#starting-swatches").append('<div class="starting-swatch" id="' + i + '" style="background:' + customSpectrum[i] + ';"><span>' + customSpectrum[i] + '</span><svg viewBox="0 0 30 30" class="ico-close"><use xlink:href="#ico-close"></use></svg></div>')
    }

    rainbow.setSpectrum.apply(null, customSpectrum);
  }

  function addNewStartingHex() {
    // Capture and store values from input
    newSwatches = $("#add-starting-hex").val();

    // Clean array from extraneous characters
    newSwatches = newSwatches.replace(/\s/g, "").replace(/[#"']/g,"").split(",")

    newSwatches.map(function(swatch){
      if(swatch.length == 3){
        swatch += swatch
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
    getStartingSwatches();

    // Print all generated swatches
    generateNewSwatches();
  }

  function generateNewSwatches() {
    var newSwatchTemplate = ''

    $("#generated-swatches").children().remove();

    hexList = [];

    for (var i = 0; i < quantity; i++) {
      var hex = '#' + rainbow.colourAt(i);
      hexList.push(hex);
      newSwatchTemplate += '<li style="background-color:' + hex + '"><span>' + hex + '</span></li>';
    }

    $("#generated-swatches").append(newSwatchTemplate);

    outputHexList();
  }

  function outputHexList() {
    $("#hex-values-box").children().remove();

    var hexListTemplate = [];
    for (var i = 0; i < quantity; i++) {
      hexListTemplate += '<li><span class="swatch" style="background:' + hexList[i] +'"></span>"' + hexList[i] + '"<span class="comma">,</span>&nbsp;</li>';
    }

    $("#hex-values-box").append(hexListTemplate);
  }

  function removeThisSwatch(element) {
    customSpectrum.splice( $(element).parent().attr("id"), 1 );
    getStartingSwatches();
    generateNewSwatches();
    onlyTwo();
  }

  function placeholderValues() {
    customSpectrum = ['#f1da0e', '#72bf44', '#00a8d4', '#5b2874', '#d61f26'];
    $("#item-count").val("12");
    quantity = 12;
    rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
  }

  function incrementValue() { quantity += 1; };

  function incrementGeneratedSwatches() {
    $("#generated-swatches").children().remove();
    incrementValue();
    rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
    generateNewSwatches();

    $("#item-count").val(quantity);
  }

  function decrementValue() { quantity -= 1; };

  function decrementGeneratedSwatches() {
    if ( quantity === 1 ) {
      $("#hex-values-box").children().remove();
      $("#generated-swatches").children().remove();
      decrementValue();
      $("#item-count").val(quantity);
    } else if ( quantity > 1 ) {
      $("#generated-swatches").children().remove();
      decrementValue();
      rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity-1);
      generateNewSwatches();
      $("#item-count").val(quantity);
    }
  }

  function generatedSwatchesFieldKeyup(element) {
    if ( $(element).val() == '' ) {
      quantity = 0;
    } else {
      quantity = parseInt($(element).val());

      $("#generated-swatches").children().remove();
      rainbow.setNumberRange(0, quantity== 1 ? quantity : quantity-1);
      generateNewSwatches();
    }
  }

  function onlyTwo() {
    if ( $(".starting-swatch").length <= 2) {
      $(".starting-swatch > svg").hide();
    }
  }

  function initialize() {
    placeholderValues();
    getStartingSwatches();
    generateNewSwatches();
  }

  // Start it up
  initialize();

  /****************
  CLICKS
  ****************/

  // Add new starting swatches
  $("button.add-starting-hex").on("click", function(){
    addNewStartingHex();
  });

  // Add new starting swatch with Return key
  $('#add-starting-hex').on('keyup', function(e) {
    if (e.which == 13) {
      $("button.add-starting-hex").click();
      getStartingSwatches();
    }
  });

  // About dialog clicks
  $(".info-dropdown").on("click", ".info-toggle", function() {
    $(".info-dropdown").addClass("open");
  });

  $(".info-content").on("click", ".info-close", function() {
    $(".info-dropdown").removeClass("open");
  });

  // Remove swatch from array
  $("#starting-swatches").on("click", ".starting-swatch > svg", function() {
    removeThisSwatch( $(this) );
  });

  // Add Items
  $(".add-item").click(function() {
    incrementGeneratedSwatches();
  });

  // Subtract Items
  $(".subtract-item").click(function() {
    decrementGeneratedSwatches();
  });

  // Item Count Field
  $("#item-count").on('keyup', function() {
    generatedSwatchesFieldKeyup( $(this) );
  });

  // Dragula
  var drake = dragula([document.querySelector("#starting-swatches")], {
    revertOnSpill: true,
    delay: true
  });

  drake.on("drop", function() {
    var getSpanText = $("#starting-swatches > div > span").text().split('#');
    var newSwatchOrder = $.makeArray( getSpanText );

    newSwatchOrder = $.grep(newSwatchOrder, function(value) {
      return value != "";
    });

    customSpectrum = newSwatchOrder.map(function(swatch){
      return "#" + swatch
    });

    getStartingSwatches();
    generateNewSwatches();
  });

});