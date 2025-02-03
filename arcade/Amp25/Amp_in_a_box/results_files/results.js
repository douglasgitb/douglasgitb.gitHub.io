// Created by iWeb 3.0.4 local-build-20120213

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="240" height="336" style="height: 336px; left: 399px; position: absolute; top: 120px; width: 240px; z-index: 1; "><param name="src" value="Media/Tempest%20on%20Amp%2025-1.MOV" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="240" height="336" style="height: 336px; left: 399px; position: absolute; top: 120px; width: 240px; z-index: 1; "><param name="src" value="results_files/Tempest%20on%20Amp%2025.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/Tempest%20on%20Amp%2025-1.MOV"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="240" height="336" data="Media/Tempest%20on%20Amp%2025-1.MOV" style="height: 336px; left: 399px; position: absolute; top: 120px; width: 240px; z-index: 1; "><param name="src" value="Media/Tempest%20on%20Amp%2025-1.MOV"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,336),url:'results_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'results_files/stroke_1.png'},{rect:new IWRect(5,-5,250,10),url:'results_files/stroke_2.png'},{rect:new IWRect(255,-5,10,10),url:'results_files/stroke_3.png'},{rect:new IWRect(255,5,10,336),url:'results_files/stroke_4.png'},{rect:new IWRect(255,341,10,11),url:'results_files/stroke_5.png'},{rect:new IWRect(5,341,250,11),url:'results_files/stroke_6.png'},{rect:new IWRect(-5,341,10,11),url:'results_files/stroke_7.png'}],new IWSize(260,347))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('results_files/resultsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
