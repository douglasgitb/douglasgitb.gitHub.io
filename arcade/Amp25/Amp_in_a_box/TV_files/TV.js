// Created by iWeb 3.0.4 local-build-20120213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,224),url:'TV_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'TV_files/stroke_1.png'},{rect:new IWRect(5,-5,302,10),url:'TV_files/stroke_2.png'},{rect:new IWRect(307,-5,10,10),url:'TV_files/stroke_3.png'},{rect:new IWRect(307,5,10,224),url:'TV_files/stroke_4.png'},{rect:new IWRect(307,229,10,10),url:'TV_files/stroke_5.png'},{rect:new IWRect(5,229,302,10),url:'TV_files/stroke_6.png'},{rect:new IWRect(-5,229,10,10),url:'TV_files/stroke_7.png'}],new IWSize(312,234))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('TV_files/TVMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
