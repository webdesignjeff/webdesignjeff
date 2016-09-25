var galaxy = ["Alderaan", "Bespin", "Bothawui", "CatoNeimoidia", "Corellia", "Coruscant", "Dagobah", "Dantooine", "Dathomir", "Endor", "Felucia", "Geonosis", "Hoth", "Illum", "Kashyyyk", "Kessel", "Malastare", "Mandalore", "MonCalamari", "Mustafar", "Mygeeto", "Naboo", "NalHutta", "OrdMantell", "RebelBase", "Rodia", "Ryloth", "Saleucami", "Sullust", "Tatooine", "Toydaria", "Utapau", "Yavin"]
var system = '';
var planet = '';
var menu = '';
var target = '';
var destroy = '';
var value = '';

$(document).ready(function(){

// Setting start of game loyalty
$('#startupCancel').on('click', function(){
  $('.startup').css('top', '-500px');
})

$('#startupSubmit').on('click', function(){
  $('.startup').css('top', '-500px');

  //Setting loyal Imperial planets
  for (var i = 1; i <=2; i++) {
    target = ('#impLoyal' + i);
    system = $(target).val();
    menu = ("#l" + system);
    $(menu).val('imperial');
    planet = ("#p" + system);
    $(planet).css("border-color", "blue");
    menu = $('input[name=probe' + system + ']')
    menu[2].checked = true
    menu.prop('disabled', true);
    menu = ("#" + system);
    $(menu).css('border-color', 'green');
    $(menu).css('background-color', 'lightgreen');
    $(planet).css('background-color', 'black');
  }

  //Setting subjugated Imperial planets
  for (var i = 1; i <=3; i++) {
    target = ('#impSub' + i);
    system = $(target).val();
    menu = ("#l" + system);
    $(menu).val('subjugated');
    planet = ("#p" + system);
    $(planet).css("border-color", "cornflowerblue");
    menu = $('input[name=probe' + system + ']')
    menu[2].checked = true
    menu.prop('disabled', true);
    menu = ("#" + system);
    $(menu).css('border-color', 'green');
    $(menu).css('background-color', 'lightgreen');
    $(planet).css('background-color', 'black');
  }

  //Setting Rebel planets
  for (var i = 1; i <=3; i++) {
    target = ('#rebelLoyal' + i);
    system = $(target).val();
    menu = ("#l" + system);
    $(menu).val('rebel');
    planet = ("#p" + system);
    $(planet).css("border-color", "red");
    menu = ("#" + system);
  }
});

//Functions for tab control
$('.tab').on('click', function(){
  var $tab = $(this);
  var index = $tab.index();
  var $content = $('.content').eq(index);

  if(!$tab.hasClass('active')){
    $tab.addClass('active');
    $tab.siblings().removeClass('active');
    $content.addClass('active');
    $content.siblings().removeClass('active');
  }

})

//Map functions
//Functions for changing colors for loyalty
function loyaltyChange(){
  planet = ("#p" + system);
  menu = ("#l" + system);
  target = $(menu).val();
  if (target == "neutral"){
    $(planet).css("border-color", "grey");
  }
  else if (target == "subjugated"){
    $(planet).css("border-color", "cornflowerblue");
    checkPlanet();
  }
  else if (target == "imperial"){
    $(planet).css("border-color", "blue");
    checkPlanet();
  }
  else if (target == "contested"){
    $(planet).css("border-color", "purple");
  }
  else if (target == "rebel"){
    $(planet).css("border-color", "red");
  }
}

//Function to flag system as checked if previously unknown
function checkPlanet(){
  if (system == 'Coruscant' || system == 'RebelBase'){
    }
    else {
    menu = $('input[name=probe' + system + ']');
    if (menu[0].checked){
      menu[1].checked = true;
    menu = ("#" + system);
    $(planet).css('background-color', 'darkgreen');
    $(menu).css('border-color', 'green');
    $(menu).css('background-color', 'lightgreen');
    }
  }
}

//Function for changing color for probe status
function probeChange(){
  planet = ("#p" + system);
  menu = ("#" + system);
  target = $('input[name=probe' + system + ']');
  if (target[0].checked){
    $(planet).css('background-color', 'orange');
    $(menu).css('border-color', 'red');
    $(menu).css('background-color', 'orange');
  }
  else if(target[1].checked){
    $(planet).css('background-color', 'darkgreen');
    $(menu).css('border-color', 'green');
    $(menu).css('background-color', 'lightgreen');
  }
  else if(target[2].checked){
    $(planet).css('background-color', 'lawngreen');
    $(menu).css('border-color', 'green');
    $(menu).css('background-color', 'lightgreen');
  }
}

//Function to destroy planet
$("#superlaser").click(function(){
  destroy = $('#superlaserTarget').val();
  if (destroy == 'default'){
    alert('You must select a target!');
    return false;
  }
  if (destroy == 'Coruscant'){
    alert('Seriously?! Blowing up the Imperial capitol? How sideways has this game gone, son?! Big Poppa Palp gonna force lightning a fool!')
  }
  $('#confirmation').css('top', '5px');
})

$("#superlaserCancel").click(function(){
  destroy ='';
  alert('Superlaser Fire Aborted!');
  $('#confirmation').css('top', '-300px');
})

$("#superlaserFire").click(function(){
  if (destroy == ''){
    alert('Error in targeting, please retry');
    $('#confirmation').css('top', '-300px');
    return false;
  }
  $('#confirmation').css('top', '-300px');
  menu = ("#l" + destroy);
  $(menu).val('contested');
  $(menu).prop('disabled', true);
  target = ('#' + destroy);
  $(target).css('display', 'none');
  planet = ('#p' + destroy);
  $(planet).css('border', '0');
  $(planet).css('background-color', 'white');
  destroy = '';
  $('#superlaserTarget').val('default');
})

//Function for Rebel Base Movement
$("#rebelsMoved").click(function(){
  for (var i = 0; i <= 32; i++){
    system = galaxy[i];
    if (system == "Coruscant" || system == "RebelBase"){
    }
    else {
      menu = ("#l" + system);
      target = $(menu).val();
      if (target == "neutral" || target == "rebel" || target == "contested" || target == undefined){
        menu = $('input[name=probe' + system + ']');
        if (menu[1].checked == true){
          menu[0].checked = true;
          planet = ("#p" + system);
          menu = ("#" + system);
          $(planet).css('background-color', 'orange');
          $(menu).css('border-color', 'red');
          $(menu).css('background-color', 'orange');
        }
      }
    }
  }
  alert("Valid Rebel base locations previously checked reset. Please flag any systems you currently have units as checked.")
})

//Functions for unit production
$("#buildPhase").click(function(){
  //Resetting the build grid output
  var array = ['storm', 'rebel', 'atst', 'speeder', 'atat', 'building', 'tie', 'wing', 'carrier', 'corvette', 'destroyer', 'cruiser'];
  for (var i = 0; i <= 11; i++){
    menu = ("#" + array[i] + "1");
    $(menu).text("0");
    menu = ("#" + array[i] + "2");
    $(menu).text("0");
    menu = ("#" + array[i] + "3");
    $(menu).text("0");
  }

  for (var i = 0; i <= 32; i++){
    system = galaxy[i];
    menu = ("#l" + system);
    target = $(menu).val();
    if (target == undefined || target == "neutral" || target == "contested"){
    }
    else {
      if (system == "Alderaan"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Bespin"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#atst1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#speeder1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Bothawui"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#atst1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#speeder1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "CatoNeimoidia"){
        if (target == "subjugated"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#atst2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#speeder2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Corellia"){
        if (target == "subjugated"){
          menu = '#tie3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#destroyer3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#cruiser3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Coruscant"){
        if (target == "imperial"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Felucia"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Geonosis"){
        if (target == "subjugated"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#atat2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#building2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Kashyyyk"){
        if (target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 2);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 2);
          $(menu).text(target);
        }
      }
      if (system == "Kessel"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Malastare"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Mandalore"){
        if (target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#tie1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#wing1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "MonCalamari"){
        if (target == "subjugated"){
          menu = '#tie3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#destroyer3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#cruiser3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Mustafar"){
        if (target == "subjugated"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#carrier2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#corvette2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Mygeeto"){
        if (target == "subjugated"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#tie2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#atat2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#wing2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#building2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Naboo"){
        if (target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#tie1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#wing1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "NalHutta"){
        if (target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#tie1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#wing1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "OrdMantell"){
        if (target == "subjugated"){
          menu = '#carrier2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#carrier2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#atst2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#corvette2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#speeder2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "RebelBase"){
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#wing1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          }
        }
      if (system == "Rodia"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Ryloth"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#storm1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Saleucami"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#atst1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#speeder1';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Sullust"){
        if (target == "subjugated"){
          menu = '#storm2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#storm2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#atat2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#rebel2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#building2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Toydaria"){
        if (target == "imperial" || target == "subjugated"){
          menu = '#carrier2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#destroyer2';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
      if (system == "Utapau"){
        if (target == "subjugated"){
          menu = '#carrier3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "imperial"){
          menu = '#carrier3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#destroyer3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
        if (target == "rebel"){
          menu = '#corvette3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
          menu = '#cruiser3';
          value = $(menu).text();
          target = (parseInt(value) + 1);
          $(menu).text(target);
        }
      }
    }
  }
})

//Event listeners for changes to loyalty
$('#lCoruscant').on('change',function(){
  system = 'Coruscant';
  loyaltyChange();
})
$('#lRebelBase').on('change',function(){
  system = 'RebelBase';
  loyaltyChange();
})
$('#lAlderaan').on('change',function(){
  system = 'Alderaan';
  loyaltyChange();
})
$('#lBespin').on('change',function(){
  system = 'Bespin';
  loyaltyChange();
})
$('#lBothawui').on('change',function(){
  system = 'Bothawui';
  loyaltyChange();
})
$('#lCatoNeimoidia').on('change',function(){
  system = 'CatoNeimoidia';
  loyaltyChange();
})
$('#lCorellia').on('change',function(){
  system = 'Corellia';
  loyaltyChange();
})
$('#lFelucia').on('change',function(){
  system = 'Felucia';
  loyaltyChange();
})
$('#lGeonosis').on('change',function(){
  system = 'Geonosis';
  loyaltyChange();
})
$('#lKashyyyk').on('change',function(){
  system = 'Kashyyyk';
  loyaltyChange();
})
$('#lKessel').on('change',function(){
  system = 'Kessel';
  loyaltyChange();
})
$('#lMalastare').on('change',function(){
  system = 'Malastare';
  loyaltyChange();
})
$('#lMandalore').on('change',function(){
  system = 'Mandalore';
  loyaltyChange();
})
$('#lMonCalamari').on('change',function(){
  system = 'MonCalamari';
  loyaltyChange();
})
$('#lMustafar').on('change',function(){
  system = 'Mustafar';
  loyaltyChange();
})
$('#lMygeeto').on('change',function(){
  system = 'Mygeeto';
  loyaltyChange();
})
$('#lNaboo').on('change',function(){
  system = 'Naboo';
  loyaltyChange();
})
$('#lNalHutta').on('change',function(){
  system = 'NalHutta';
  loyaltyChange();
})
$('#lOrdMantell').on('change',function(){
  system = 'OrdMantell';
  loyaltyChange();
})
$('#lRodia').on('change',function(){
  system = 'Rodia';
  loyaltyChange();
})
$('#lRyloth').on('change',function(){
  system = 'Ryloth';
  loyaltyChange();
})
$('#lSaleucami').on('change',function(){
  system = 'Saleucami';
  loyaltyChange();
})
$('#lSullust').on('change',function(){
  system = 'Sullust';
  loyaltyChange();
})
$('#lToydaria').on('change',function(){
  system = 'Toydaria';
  loyaltyChange();
})
$('#lUtapau').on('change',function(){
  system = 'Utapau';
  loyaltyChange();
})

//Event listeners for changes in probe status
$('input[name=probeAlderaan]').change(function(){
  system = "Alderaan";
  probeChange();
})
$('input[name=probeBespin]').change(function(){
  system = "Bespin";
  probeChange();
})
$('input[name=probeBothawui]').change(function(){
  system = "Bothawui";
  probeChange();
})
$('input[name=probeCatoNeimoidia]').change(function(){
  system = "CatoNeimoidia";
  probeChange();
})
$('input[name=probeCorellia]').change(function(){
  system = "Corellia";
  probeChange();
})
$('input[name=probeDagobah]').change(function(){
  system = "Dagobah";
  probeChange();
})
$('input[name=probeDantooine]').change(function(){
  system = "Dantooine";
  probeChange();
})
$('input[name=probeDathomir]').change(function(){
  system = "Dathomir";
  probeChange();
})
$('input[name=probeEndor]').change(function(){
  system = "Endor";
  probeChange();
})
$('input[name=probeFelucia]').change(function(){
  system = "Felucia";
  probeChange();
})
$('input[name=probeGeonosis]').change(function(){
  system = "Geonosis";
  probeChange();
})
$('input[name=probeHoth]').change(function(){
  system = "Hoth";
  probeChange();
})
$('input[name=probeIllum]').change(function(){
  system = "Illum";
  probeChange();
})
$('input[name=probeKashyyyk]').change(function(){
  system = "Kashyyyk";
  probeChange();
})
$('input[name=probeKessel]').change(function(){
  system = "Kessel";
  probeChange();
})
$('input[name=probeMalastare]').change(function(){
  system = "Malastare";
  probeChange();
})
$('input[name=probeMandalore]').change(function(){
  system = "Mandalore";
  probeChange();
})
$('input[name=probeMonCalamari]').change(function(){
  system = "MonCalamari";
  probeChange();
})
$('input[name=probeMustafar]').change(function(){
  system = "Mustafar";
  probeChange();
})
$('input[name=probeMygeeto]').change(function(){
  system = "Mygeeto";
  probeChange();
})
$('input[name=probeNaboo]').change(function(){
  system = "Naboo";
  probeChange();
})
$('input[name=probeNalHutta]').change(function(){
  system = "NalHutta";
  probeChange();
})
$('input[name=probeOrdMantell]').change(function(){
  system = "OrdMantell";
  probeChange();
})
$('input[name=probeRodia]').change(function(){
  system = "Rodia";
  probeChange();
})
$('input[name=probeRyloth]').change(function(){
  system = "Ryloth";
  probeChange();
})
$('input[name=probeSaleucami]').change(function(){
  system = "Saleucami";
  probeChange();
})
$('input[name=probeSullust]').change(function(){
  system = "Sullust";
  probeChange();
})
$('input[name=probeTatooine]').change(function(){
  system = "Tatooine";
  probeChange();
})
$('input[name=probeToydaria]').change(function(){
  system = "Toydaria";
  probeChange();
})
$('input[name=probeUtapau]').change(function(){
  system = "Utapau";
  probeChange();
})
$('input[name=probeYavin]').change(function(){
  system = "Yavin";
  probeChange();
})

})
