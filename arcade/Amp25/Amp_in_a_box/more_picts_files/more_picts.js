// Created by iWeb 3.0.4 local-build-20120213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,215),url:'more_picts_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'more_picts_files/stroke_1.png'},{rect:new IWRect(5,-5,290,10),url:'more_picts_files/stroke_2.png'},{rect:new IWRect(295,-5,10,10),url:'more_picts_files/stroke_3.png'},{rect:new IWRect(295,5,10,215),url:'more_picts_files/stroke_4.png'},{rect:new IWRect(295,220,10,10),url:'more_picts_files/stroke_5.png'},{rect:new IWRect(5,220,290,10),url:'more_picts_files/stroke_6.png'},{rect:new IWRect(-5,220,10,10),url:'more_picts_files/stroke_7.png'}],new IWSize(300,225))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('more_picts_files/more_pictsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
