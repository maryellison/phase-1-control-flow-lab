function scuberGreetingForFeet(feetDistance){
  if (feetDistance <= 400){
    return 'This one is on me!'
  } else if (400 < feetDistance && feetDistance <= 2000){
    return 'That will be twenty bucks.'
  } else if (2000 < feetDistance && feetDistance <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else {
      return 'No can do.'
  }
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount){
    case 'generous': 
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}