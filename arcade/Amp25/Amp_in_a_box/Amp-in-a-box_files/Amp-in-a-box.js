// Created by iWeb 3.0.4 local-build-20120213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,446),url:'Amp-in-a-box_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Amp-in-a-box_files/stroke_1.png'},{rect:new IWRect(5,-5,598,10),url:'Amp-in-a-box_files/stroke_2.png'},{rect:new IWRect(603,-5,10,10),url:'Amp-in-a-box_files/stroke_3.png'},{rect:new IWRect(603,5,10,446),url:'Amp-in-a-box_files/stroke_4.png'},{rect:new IWRect(603,451,10,10),url:'Amp-in-a-box_files/stroke_5.png'},{rect:new IWRect(5,451,598,10),url:'Amp-in-a-box_files/stroke_6.png'},{rect:new IWRect(-5,451,10,10),url:'Amp-in-a-box_files/stroke_7.png'}],new IWSize(608,456))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Amp-in-a-box_files/Amp-in-a-boxMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
