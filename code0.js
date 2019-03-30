gdjs.menuCode = {};
gdjs.menuCode.GDkostkaObjects1= [];
gdjs.menuCode.GDkostkaObjects2= [];
gdjs.menuCode.GDPunktyObjects1= [];
gdjs.menuCode.GDPunktyObjects2= [];
gdjs.menuCode.GDkostka2Objects1= [];
gdjs.menuCode.GDkostka2Objects2= [];
gdjs.menuCode.GDlolObjects1= [];
gdjs.menuCode.GDlolObjects2= [];
gdjs.menuCode.GDLoRObjects1= [];
gdjs.menuCode.GDLoRObjects2= [];
gdjs.menuCode.GDstartObjects1= [];
gdjs.menuCode.GDstartObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gra", false);
}}

}


}; //End of gdjs.menuCode.eventsList0xb0b28


gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.menuCode.GDkostkaObjects1.length = 0;
gdjs.menuCode.GDkostkaObjects2.length = 0;
gdjs.menuCode.GDPunktyObjects1.length = 0;
gdjs.menuCode.GDPunktyObjects2.length = 0;
gdjs.menuCode.GDkostka2Objects1.length = 0;
gdjs.menuCode.GDkostka2Objects2.length = 0;
gdjs.menuCode.GDlolObjects1.length = 0;
gdjs.menuCode.GDlolObjects2.length = 0;
gdjs.menuCode.GDLoRObjects1.length = 0;
gdjs.menuCode.GDLoRObjects2.length = 0;
gdjs.menuCode.GDstartObjects1.length = 0;
gdjs.menuCode.GDstartObjects2.length = 0;

gdjs.menuCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['menuCode'] = gdjs.menuCode;
