// Created by iWeb 3.0.4 local-build-20120213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,276),url:'transplant_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'transplant_files/stroke_1.png'},{rect:new IWRect(5,-5,371,10),url:'transplant_files/stroke_2.png'},{rect:new IWRect(376,-5,11,10),url:'transplant_files/stroke_3.png'},{rect:new IWRect(376,5,11,276),url:'transplant_files/stroke_4.png'},{rect:new IWRect(376,281,11,10),url:'transplant_files/stroke_5.png'},{rect:new IWRect(5,281,371,10),url:'transplant_files/stroke_6.png'},{rect:new IWRect(-5,281,10,10),url:'transplant_files/stroke_7.png'}],new IWSize(381,286))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('transplant_files/transplantMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
