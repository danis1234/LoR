gdjs.gameoverCode = {};
gdjs.gameoverCode.GDkostkaObjects1= [];
gdjs.gameoverCode.GDkostkaObjects2= [];
gdjs.gameoverCode.GDPunktyObjects1= [];
gdjs.gameoverCode.GDPunktyObjects2= [];
gdjs.gameoverCode.GDkostka2Objects1= [];
gdjs.gameoverCode.GDkostka2Objects2= [];
gdjs.gameoverCode.GDkoniecObjects1= [];
gdjs.gameoverCode.GDkoniecObjects2= [];
gdjs.gameoverCode.GDponuwObjects1= [];
gdjs.gameoverCode.GDponuwObjects2= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};
gdjs.gameoverCode.condition1IsTrue_0 = {val:false};


gdjs.gameoverCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.gameoverCode.condition0IsTrue_0.val = false;
{
gdjs.gameoverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gameoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gra", false);
}}

}


}; //End of gdjs.gameoverCode.eventsList0xb0b28


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gameoverCode.GDkostkaObjects1.length = 0;
gdjs.gameoverCode.GDkostkaObjects2.length = 0;
gdjs.gameoverCode.GDPunktyObjects1.length = 0;
gdjs.gameoverCode.GDPunktyObjects2.length = 0;
gdjs.gameoverCode.GDkostka2Objects1.length = 0;
gdjs.gameoverCode.GDkostka2Objects2.length = 0;
gdjs.gameoverCode.GDkoniecObjects1.length = 0;
gdjs.gameoverCode.GDkoniecObjects2.length = 0;
gdjs.gameoverCode.GDponuwObjects1.length = 0;
gdjs.gameoverCode.GDponuwObjects2.length = 0;

gdjs.gameoverCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['gameoverCode'] = gdjs.gameoverCode;
