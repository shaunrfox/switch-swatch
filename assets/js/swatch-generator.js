$(document).ready(function () {

  var quantity = 0;
  var rainbow = new Rainbow(); // by default, range is 0 to 100
  customSpectrum = [];
  hexList = [];
  var randomize = false;
  const svgSwatchContainer = document.querySelector("#svg-swatches-wrapper");
  const copySVGButton = document.querySelector("#copy-svgs");
  const copyStatus = document.querySelector(".copy-status");

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
    newSwatches = newSwatches.replace(/\s/g, "").replace(/[#"']/g, "").split(",")

    newSwatches.map(function (swatch) {
      if (swatch.length == 3) {
        swatch += swatch
      }
      if (swatch.length == 6) {
        customSpectrum.push("#" + swatch)
      }
    });

    // Show reset button
    $(".reset-swatches").show();

    // Send new values to rainbowvis
    rainbow.setSpectrum.apply(null, customSpectrum);

    // Clear out value field
    $("#add-starting-hex").val("");

    // Print all new swatches
    getStartingSwatches();

    // Print all generated swatches
    generateNewSwatches();
  }

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  function generateNewSwatches() {
    var newSwatchTemplate = ''

    $("#generated-swatches").children().remove();

    hexList = [];

    for (var i = 0; i < quantity; i++) {
      var hex = '#' + rainbow.colourAt(i);
      hexList.push(hex);
    }

    if ($("#randomize input[type=checkbox]").is(':checked')) {
      shuffle(hexList);
      for (var i = 0; i < quantity; i++) {
        newSwatchTemplate += '<li style="background-color:' + hexList[i] + '"><span>' + hexList[i] + '</span></li>';
      }
    } else {
      for (var i = 0; i < quantity; i++) {
        newSwatchTemplate += '<li style="background-color:' + hexList[i] + '"><span>' + hexList[i] + '</span></li>';
      }
    }

    $("#generated-swatches").append(newSwatchTemplate);

    renderAllSVGSwatches(svgSwatchContainer, hexList);

    outputHexList();
  }

  function outputHexList() {
    $("#hex-values-box").children().remove();

    var hexListTemplate = [];
    for (var i = 0; i < quantity; i++) {
      hexListTemplate += '<li><span class="swatch" style="background:' + hexList[i] + '"></span>"' + hexList[i] + '"<span class="comma">,</span>&nbsp;</li>';
    }

    $("#hex-values-box").append(hexListTemplate);
  }

  function renderSVGSwatch(node, color, x, y) {
    const rectElem = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    rectElem.setAttribute("width", "10");
    rectElem.setAttribute("height", "10");
    rectElem.setAttribute("fill", color);
    rectElem.setAttribute("x", x);
    rectElem.setAttribute("y", y);

    return node.appendChild(rectElem);
  }

  function renderAllSVGSwatches(node, colors) {
    const count = colors.length;
    let svgHeight = 10;

    // remove all existing swatches
    node.innerHTML = "";

    const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    node.appendChild(svgElem);

    let rectX = 0;
    let rectY = 0;

    for (i = 0; i < count; i++) {
      rectX += 10;
      if (i % 10 === 0) {
        rectX = 0;
        if (i >= 10) {
          rectY += 10;
        }
        svgHeight += 10;
      }
      renderSVGSwatch(svgElem, colors[i], rectX, rectY);
    }

    svgElem.setAttribute("fill", "none");
    svgElem.setAttribute("viewBox", "0 0 100 " + svgHeight);
    svgElem.classList.add("svg-swatches");
  }

  function removeThisSwatch(element) {
    customSpectrum.splice($(element).parent().attr("id"), 1);
    $(".reset-swatches").show();
    getStartingSwatches();
    generateNewSwatches();
    onlyTwo();
  }

  function placeholderValues() {
    customSpectrum = ['#f1da0e', '#72bf44', '#00a8d4', '#5b2874', '#d61f26'];
    $("#item-count").val("12");
    quantity = 12;
    rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity - 1);
  }

  function resetStartingSwatches() {
    customSpectrum = ['#f1da0e', '#72bf44', '#00a8d4', '#5b2874', '#d61f26'];
    $(".reset-swatches").hide();
    getStartingSwatches();
    generateNewSwatches();
  }

  function incrementValue() { quantity += 1; };

  function incrementGeneratedSwatches() {
    $("#generated-swatches").children().remove();
    incrementValue();
    rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity - 1);
    generateNewSwatches();

    $("#item-count").val(quantity);
  }

  function decrementValue() { quantity -= 1; };

  function decrementGeneratedSwatches() {
    if (quantity === 1) {
      $("#hex-values-box").children().remove();
      $("#generated-swatches").children().remove();
      decrementValue();
      $("#item-count").val(quantity);
    } else if (quantity > 1) {
      $("#generated-swatches").children().remove();
      decrementValue();
      rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity - 1);
      generateNewSwatches();
      $("#item-count").val(quantity);
    }
  }

  function generatedSwatchesFieldKeyup(element) {
    if ($(element).val() == '') {
      quantity = 0;
    } else {
      quantity = parseInt($(element).val());

      $("#generated-swatches").children().remove();
      rainbow.setNumberRange(0, quantity == 1 ? quantity : quantity - 1);
      generateNewSwatches();
    }
  }

  function onlyTwo() {
    if ($(".starting-swatch").length <= 2) {
      $(".starting-swatch > svg").hide();
    }
  }

  function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      // success
      function () {
        copyStatus.innerHTML = "✅ Copied!";
        copySVGButton.setAttribute("disabled", true);
        console.log("copied svg to clipboard");

        setTimeout(function () {
          copyStatus.innerHTML = "";
          copySVGButton.removeAttribute("disabled");
        }, 3000);
      },

      // failure
      function () {
        copyStatus.innerHTML = "❌ Copying failed!";
        console.log("copying failed");

        setTimeout(function () {
          copyStatus.innerHTML = "";
        }, 3000);
      }
    );
  }

  function clickToCopy() {
    const svgstring = document.querySelector(".svg-swatches").outerHTML;
    setClipboard(svgstring);
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
  $("button.add-starting-hex").on("click", function () {
    addNewStartingHex();
  });

  // Add new starting swatch with Return key
  $('#add-starting-hex').on('keyup', function (e) {
    if (e.which == 13) {
      $("button.add-starting-hex").click();
      getStartingSwatches();
    }
  });

  // Reset starting swatches
  $("#resetSwatches").on("click", function () {
    resetStartingSwatches();
  });

  // Randomize Click
  $('#randomize-check').change(function () {
    generateNewSwatches();
  });

  // About dialog clicks
  $(".info-dropdown").on("click", ".info-toggle", function () {
    $(".info-dropdown").addClass("open");
  });

  $(".info-content").on("click", ".info-close", function () {
    $(".info-dropdown").removeClass("open");
  });

  // Remove swatch from array
  $("#starting-swatches").on("click", ".starting-swatch > svg", function () {
    removeThisSwatch($(this));
  });

  // Add Items
  $(".add-item").click(function () {
    incrementGeneratedSwatches();
  });

  // Subtract Items
  $(".subtract-item").click(function () {
    decrementGeneratedSwatches();
  });

  // Copy SVGs
  $("#copy-svgs").click(function () {
    clickToCopy();
  });

  // Item Count Field
  $("#item-count").on('keyup', function () {
    generatedSwatchesFieldKeyup($(this));
  });

  // Dragula
  var drake = dragula([document.querySelector("#starting-swatches")], {
    revertOnSpill: true,
    delay: true
  });

  drake.on("drop", function () {
    var getSpanText = $("#starting-swatches > div > span").text().split('#');
    var newSwatchOrder = $.makeArray(getSpanText);

    newSwatchOrder = $.grep(newSwatchOrder, function (value) {
      return value != "";
    });

    customSpectrum = newSwatchOrder.map(function (swatch) {
      return "#" + swatch
    });

    $(".reset-swatches").show();

    getStartingSwatches();
    generateNewSwatches();
  });

});