gdjs.GraCode = {};
gdjs.GraCode.GDkostkaObjects1= [];
gdjs.GraCode.GDkostkaObjects2= [];
gdjs.GraCode.GDkostkaObjects3= [];
gdjs.GraCode.GDPunktyObjects1= [];
gdjs.GraCode.GDPunktyObjects2= [];
gdjs.GraCode.GDPunktyObjects3= [];
gdjs.GraCode.GDkostka2Objects1= [];
gdjs.GraCode.GDkostka2Objects2= [];
gdjs.GraCode.GDkostka2Objects3= [];
gdjs.GraCode.GDplayerObjects1= [];
gdjs.GraCode.GDplayerObjects2= [];
gdjs.GraCode.GDplayerObjects3= [];

gdjs.GraCode.conditionTrue_0 = {val:false};
gdjs.GraCode.condition0IsTrue_0 = {val:false};
gdjs.GraCode.condition1IsTrue_0 = {val:false};
gdjs.GraCode.condition2IsTrue_0 = {val:false};


gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GraCode.GDkostka2Objects1});gdjs.GraCode.eventsList0x67e728 = function(runtimeScene) {

{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "tworzenie2");
}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie2");
}}

}


}; //End of gdjs.GraCode.eventsList0x67e728
gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GraCode.GDkostkaObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GraCode.GDplayerObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GraCode.GDkostkaObjects1});gdjs.GraCode.eventsList0x66c970 = function(runtimeScene) {

{

gdjs.GraCode.GDkostkaObjects2.createFrom(gdjs.GraCode.GDkostkaObjects1);

gdjs.GraCode.GDplayerObjects2.createFrom(gdjs.GraCode.GDplayerObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects2[i].getX() == (( gdjs.GraCode.GDkostkaObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDkostkaObjects2[0].getX())+100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects2[k] = gdjs.GraCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.GraCode.GDkostkaObjects2.createFrom(gdjs.GraCode.GDkostkaObjects1);

gdjs.GraCode.GDplayerObjects2.createFrom(gdjs.GraCode.GDplayerObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDkostkaObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDkostkaObjects2[i].getX() == (( gdjs.GraCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDkostkaObjects2[k] = gdjs.GraCode.GDkostkaObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDkostkaObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.GraCode.GDkostkaObjects1 */
/* Reuse gdjs.GraCode.GDplayerObjects1 */

gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects1[i].getY() == (( gdjs.GraCode.GDkostkaObjects1.length === 0 ) ? 0 :gdjs.GraCode.GDkostkaObjects1[0].getY())+100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects1[k] = gdjs.GraCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects1.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


}; //End of gdjs.GraCode.eventsList0x66c970
gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GraCode.GDplayerObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GraCode.GDkostka2Objects1});gdjs.GraCode.eventsList0x65cbf8 = function(runtimeScene) {

{

gdjs.GraCode.GDkostka2Objects2.createFrom(gdjs.GraCode.GDkostka2Objects1);

gdjs.GraCode.GDplayerObjects2.createFrom(gdjs.GraCode.GDplayerObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects2[i].getX() == (( gdjs.GraCode.GDkostka2Objects2.length === 0 ) ? 0 :gdjs.GraCode.GDkostka2Objects2[0].getX())+100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects2[k] = gdjs.GraCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.GraCode.GDkostka2Objects2.createFrom(gdjs.GraCode.GDkostka2Objects1);

gdjs.GraCode.GDplayerObjects2.createFrom(gdjs.GraCode.GDplayerObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDkostka2Objects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDkostka2Objects2[i].getX() == (( gdjs.GraCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDplayerObjects2[0].getX())+100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDkostka2Objects2[k] = gdjs.GraCode.GDkostka2Objects2[i];
        ++k;
    }
}
gdjs.GraCode.GDkostka2Objects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.GraCode.GDkostka2Objects1 */
/* Reuse gdjs.GraCode.GDplayerObjects1 */

gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects1[i].getY() == (( gdjs.GraCode.GDkostka2Objects1.length === 0 ) ? 0 :gdjs.GraCode.GDkostka2Objects1[0].getY())-100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects1[k] = gdjs.GraCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects1.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


}; //End of gdjs.GraCode.eventsList0x65cbf8
gdjs.GraCode.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.GraCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GraCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDplayerObjects1[i].setPosition(200,400);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].setPosition(gdjs.random(400),800
);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].hide();
}
}}

}


{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 10
;
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].addPolarForce(270
, 250, 0);
}
}
{ //Subevents
gdjs.GraCode.eventsList0x67e728(runtimeScene);} //End of subevents
}

}


{

gdjs.GraCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
gdjs.GraCode.condition1IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GraCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects1[i].getX() >= 5 ) {
        gdjs.GraCode.condition1IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects1[k] = gdjs.GraCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects1.length = k;}}
if (gdjs.GraCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GraCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDplayerObjects1[i].addPolarForce(180, 800, 0);
}
}}

}


{

gdjs.GraCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
gdjs.GraCode.condition1IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.GraCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDplayerObjects1[i].getX() <= 413 ) {
        gdjs.GraCode.condition1IsTrue_0.val = true;
        gdjs.GraCode.GDplayerObjects1[k] = gdjs.GraCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDplayerObjects1.length = k;}}
if (gdjs.GraCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GraCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDplayerObjects1[i].addPolarForce(0, 1000, 0);
}
}}

}


{


{
gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects1[i].addPolarForce(90, 250, 0);
}
}}

}


{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.75, "tworzenie");
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDkostkaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie");
}}

}


{

gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.GraCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDplayerObjects1Objects, gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects, false, runtimeScene);
}if (gdjs.GraCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GraCode.eventsList0x66c970(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GraCode.GDPunktyObjects1.createFrom(runtimeScene.getObjects("Punkty"));
{for(var i = 0, len = gdjs.GraCode.GDPunktyObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDPunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.GraCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDplayerObjects1Objects, gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects, false, runtimeScene);
}if (gdjs.GraCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GraCode.eventsList0x65cbf8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.GraCode.eventsList0xb0b28


gdjs.GraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GraCode.GDkostkaObjects1.length = 0;
gdjs.GraCode.GDkostkaObjects2.length = 0;
gdjs.GraCode.GDkostkaObjects3.length = 0;
gdjs.GraCode.GDPunktyObjects1.length = 0;
gdjs.GraCode.GDPunktyObjects2.length = 0;
gdjs.GraCode.GDPunktyObjects3.length = 0;
gdjs.GraCode.GDkostka2Objects1.length = 0;
gdjs.GraCode.GDkostka2Objects2.length = 0;
gdjs.GraCode.GDkostka2Objects3.length = 0;
gdjs.GraCode.GDplayerObjects1.length = 0;
gdjs.GraCode.GDplayerObjects2.length = 0;
gdjs.GraCode.GDplayerObjects3.length = 0;

gdjs.GraCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['GraCode'] = gdjs.GraCode;
