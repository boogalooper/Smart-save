#target photoshop

var GUID = "68c86e88-e0d0-4571-a116-3d653eed4be3"

strMessage = "Save in..."

var exportInfo = new Object()  
//initExportInfo(exportInfo) 

main ()

function main ()
{
    var d = app.getCustomOptions(GUID)
    descriptorToObject(exportInfo, d, strMessage)
    
    var w = buildWindow ()
    w.show ()
}


function buildWindow ()
{
/* 
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":25,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"varName":"wn","text":"Save in...","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"varName":"pn1","text":"Сохранить открытый файл","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Panel","parentId":27,"style":{"varName":"pn2","text":"Каталог назначения","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-3":{"id":3,"type":"Panel","parentId":27,"style":{"varName":"pn3","text":"Формат файла","preferredSize":[300,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null}},"item-7":{"id":7,"type":"Group","parentId":16,"style":{"varName":"gr5","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-9":{"id":9,"type":"Group","parentId":16,"style":{"varName":"gr4","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-10":{"id":10,"type":"StaticText","parentId":9,"style":{"varName":"st1","text":"сохранить  как...","justify":"left","preferredSize":[200,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"DropDownList","parentId":7,"style":{"varName":"dl2","text":"","listItems":"jpg,psd,tif","preferredSize":[0,0],"alignment":null,"selection":2,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":3,"style":{"varName":"gr6","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":17,"style":{"varName":"st2","text":"качество jpg:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"StaticText","parentId":17,"style":{"varName":"st3","text":"12","justify":"center","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Slider","parentId":18,"style":{"varName":"sl1","helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":3,"style":{"varName":"gr3","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-17":{"id":17,"type":"Group","parentId":12,"style":{"varName":"gr7","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-18":{"id":18,"type":"Group","parentId":12,"style":{"varName":"gr8","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","top"],"alignment":null}},"item-19":{"id":19,"type":"DropDownList","parentId":22,"style":{"varName":"dl1","text":"","listItems":"сохранить в том же каталоге,указать путь","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-20":{"id":20,"type":"Button","parentId":22,"style":{"varName":"bn1","text":"...","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"EditText","parentId":23,"style":{"varName":"et1","text":"","preferredSize":[270,0],"alignment":null,"helpTip":null}},"item-22":{"id":22,"type":"Group","parentId":2,"style":{"varName":"gr1","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-23":{"id":23,"type":"Group","parentId":2,"style":{"varName":"gr2","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-24":{"id":24,"type":"Button","parentId":26,"style":{"varName":"bnOk","text":"Ok","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-25":{"id":25,"type":"Button","parentId":26,"style":{"varName":"bnCancel","text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-26":{"id":26,"type":"Group","parentId":0,"style":{"varName":"gr9","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":"center"}},"item-27":{"id":27,"type":"Group","parentId":1,"style":{"varName":"gr10","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","top"],"alignment":null}}},"order":[0,1,27,2,22,19,20,23,21,3,16,9,10,7,11,12,17,13,14,18,15,26,24,25]}
*/ 

// WN
// ==
var wn = new Window("dialog"); 
    wn.text = strMessage; 
    wn.orientation = "column"; 
    wn.alignChildren = ["fill","top"]; 
    wn.spacing = 10; 
    wn.margins = 16; 

// PN1
// ===
var pn1 = wn.add("panel"); 
    pn1.text = "Сохранить открытый файл"; 
    pn1.orientation = "row"; 
    pn1.alignChildren = ["left","top"]; 
    pn1.spacing = 10; 
    pn1.margins = 10; 

// GR10
// ====
var gr10 = pn1.add("group"); 
    gr10.orientation = "row"; 
    gr10.alignChildren = ["center","fill"]; 
    gr10.spacing = 10; 
    gr10.margins = 0; 

// PN2
// ===
var pn2 = gr10.add("panel"); 
    pn2.text = "Каталог назначения"; 
    pn2.preferredSize.width = 300; 
    pn2.orientation = "column"; 
    pn2.alignChildren = ["fill","top"]; 
    pn2.spacing = 10; 
    pn2.margins = 10; 

// GR1
// ===
var gr1 = pn2.add("group"); 
    gr1.orientation = "row"; 
    gr1.alignChildren = ["left","center"]; 
    gr1.spacing = 10; 
    gr1.margins = 0; 

var dl1_array = ["сохранить в том же каталоге","указать путь"]; 
var dl1 = gr1.add("dropdownlist", undefined, dl1_array); 
    dl1.selection = 0; 

var bn1 = gr1.add("button"); 
    bn1.text = "..."; 
    bn1.justify = "center"; 

// GR2
// ===
var gr2 = pn2.add("group"); 
    gr2.orientation = "row"; 
    gr2.alignChildren = ["left","center"]; 
    gr2.spacing = 10; 
    gr2.margins = 0; 

var et1 = gr2.add("edittext", undefined,"",{readonly:true}); 
    et1.preferredSize.width = 270; 

// PN3
// ===
var pn3 = gr10.add("panel"); 
    pn3.text = "Формат файла"; 
    pn3.preferredSize.width = 300; 
    pn3.orientation = "column"; 
    pn3.alignChildren = ["fill","top"]; 
    pn3.spacing = 10; 
    pn3.margins = 10; 

// GR3
// ===
var gr3 = pn3.add("group"); 
    gr3.orientation = "row"; 
    gr3.alignChildren = ["left","top"]; 
    gr3.spacing = 10; 
    gr3.margins = 0; 
    gr3.alignment = ["fill","top"]; 

// GR4
// ===
var gr4 = gr3.add("group"); 
    gr4.orientation = "row"; 
    gr4.alignChildren = ["left","center"]; 
    gr4.spacing = 10; 
    gr4.margins = 0; 

var st1 = gr4.add("statictext"); 
    st1.text = "сохранить  как..."; 
    st1.preferredSize.width = 200; 

// GR5
// ===
var gr5 = gr3.add("group"); 
    gr5.orientation = "row"; 
    gr5.alignChildren = ["right","center"]; 
    gr5.spacing = 10; 
    gr5.margins = 0; 

var dl2_array = ["jpg","psd","tif"]; 
var dl2 = gr5.add("dropdownlist", undefined, dl2_array); 

// GR6
// ===
var gr6 = pn3.add("group"); 
    gr6.orientation = "row"; 
    gr6.alignChildren = ["left","fill"]; 
    gr6.spacing = 10; 
    gr6.margins = 0; 

// GR7
// ===
var gr7 = gr6.add("group"); 
    gr7.orientation = "row"; 
    gr7.alignChildren = ["left","top"]; 
    gr7.spacing = 10; 
    gr7.margins = 0; 

var st2 = gr7.add("statictext"); 
    st2.text = "качество jpg:"; 

var st3 = gr7.add("statictext"); 
    st3.text = "12"; 
    st3.preferredSize.width = 30; 
    st3.justify = "center"; 

// GR8
// ===
var gr8 = gr6.add("group"); 
    gr8.orientation = "row"; 
    gr8.alignChildren = ["right","top"]; 
    gr8.spacing = 10; 
    gr8.margins = 0; 

var sl1 = gr8.add("slider"); 
    sl1.minvalue = 0; 
    sl1.maxvalue = 12; 
    sl1.value = 12; 

// GR9
// ===
var gr9 = wn.add("group"); 
    gr9.orientation = "row"; 
    gr9.alignChildren = ["left","center"]; 
    gr9.spacing = 10; 
    gr9.margins = 0; 
    gr9.alignment = ["center","top"]; 

var bnOk = gr9.add("button"); 
    bnOk.text = "Ok"; 
    bnOk.justify = "center"; 

var bnCancel = gr9.add("button"); 
    bnCancel.text = "Cancel"; 
    bnCancel.justify = "center"; 

bnOk.onClick = function ()
{
    $.writeln ("Ok pressed" )
    
    var d = objectToDescriptor(exportInfo, strMessage)
    app.putCustomOptions(GUID, d)
    
    wn.close ()
 }

dl1.onChange = function () 
{
    exportInfo.newFolder = bn1.enabled= Boolean (this.selection.index)
    
    if (!Boolean (this.selection.index)) 
    {et1.text = ""}
    else 
    {
        if (exportInfo.path!="") 
        {var fol = new Folder (exportInfo.path) 
            if (fol.exists) {
                et1.text = exportInfo.path} 
            else {exportInfo.path=""}
            }
        }
}

dl2.onChange = function () {exportInfo.fileType = this.selection.text; st2.visible=st3.visible=sl1.visible = !Boolean(this.selection.index) }
sl1.onChange = function () {exportInfo.jpgQuality=this.value}
sl1.onChanging = function () {this.value = Math.round( Number (this.value)); st3.text = this.value }

bn1.onClick = function ()
{
    var fol = new Folder (exportInfo.path)
    var userSelectedFolder = fol.selectDlg()
    if (userSelectedFolder) 
    {exportInfo.path = userSelectedFolder.fsName
       et1.text = exportInfo.path}
}
wn.onShow = function ()
{
    // init controls
    if (exportInfo.path!="") {dl1.selection =Number (exportInfo.newFolder)}; dl1.onChange ()
    dl2.selection = dl2.find (exportInfo.fileType); dl2.onChange ()
    sl1.value = exportInfo.jpgQuality; sl1.onChanging ()
}
return wn
}
 
 
 

 
 /*strDlg = {en: "Save in...",ru: "Сохранить в..."}
strFld =  {en: "Folder name...",ru: "Имя каталога..."}
$.localize = true

var w = buildWindow (); var result = w.show()

function buildWindow ()
{
    var interfaceHeight = 1.2 
    var w = new Window ("dialog", strDlg)
    
    var p1 = w.add ("panel", undefined, strFld)
    p1.alignChildren = "fill"
    var d1 = p1.add ("dropdownlist", undefined, ["cm", "mm", "in", "px"])
    var s1 = p1.add ("statictext", undefined)
    
    d1.onChange = function ()
    {
        div= 'x'
        switch (this.selection.index)
        {
        case 0: getSize (Units.CM, div) break;
        case 1: getSize (Units.MM, div)  break;
        case 2: getSize (Units.INCHES, div)  break;
        case 3: getSize (Units.PIXELS, div) break;
        default: $.write (this.selection.index + '\n'); break;
        }
    }
    
    
function getSize (units, div, direction)
{
    var oldPref = app.preferences.rulerUnits
    app.preferences.rulerUnits = units

    var a
    var b

    $.write (Math.round ( a.value )+ div + Math.round ( b.value)+ '\n')
    s1.text =Math.round ( a.value )+ div+ Math.round ( b.value)
    app.preferences.rulerUnits = oldPref   
    
}
    return w;
 }

*/

function initExportInfo (exportInfo) 
{
        exportInfo.newFolder = false
        exportInfo.path = ""
        exportInfo.fileType = "jpg"
        exportInfo.jpgQuality= 12
         /*exportInfo.searchWhere = 3 // 1 - DocInAtn ,2 - AtnInDoc, 3 - inAllDirections
         exportInfo.searchFromEnd = false
         exportInfo.useIndex = true
         exportInfo.setInclude = false
         exportInfo.docInclude = false
         exportInfo.setName= ""*/
}

function objectToDescriptor (o, s) 
{
    $.writeln (" ")
     preProcess (o)
	var d = new ActionDescriptor;
	var l = o.reflect.properties.length;
	d.putString( app.charIDToTypeID( 'Msge' ), s);
	for (var i = 0; i < l; i++ ) {
		var k = o.reflect.properties[i].toString();
		if (k == "__proto__" || k == "__count__" || k == "__class__" || k == "reflect") continue;
		var v = o[ k ];
		k = app.stringIDToTypeID(k);
		switch ( typeof(v) ) {
			case "boolean": d.putBoolean(k, v); break;
			case "string": d.putString(k, v); break;
			case "number": d.putInteger(k, v); break;
             default: $.writeln (typeof(v)); break;
		}
            $.writeln ('put ' + typeof(v) + ' "' + typeIDToStringID(k)  +'": ' + v)
	}
    return d;
}

function descriptorToObject (o, d, s) 
{
    $.writeln (" ")
	var l = d.count;
	if (l) {
	    var keyMessage = app.charIDToTypeID( 'Msge' );
        if ( d.hasKey(keyMessage) && ( s != d.getString(keyMessage) )) return;
	}
	for (var i = 0; i < l; i++ ) {
		var k = d.getKey(i); // i + 1 ?
		var t = d.getType(k);
		strk = app.typeIDToStringID(k);
		switch (t) {
			case DescValueType.BOOLEANTYPE:
				o[strk] = d.getBoolean(k);
				break;
			case DescValueType.STRINGTYPE:
				o[strk] = d.getString(k);
				break;
			case DescValueType.INTEGERTYPE:
				o[strk] = d.getDouble(k);
				break;
		}
        $.writeln ('get ' + typeof(o[strk]) + ' "' + strk  +'": ' + o[strk])
	}
postProcess (o)
}

function preProcess (exportInfo)
{
   /* switch (exportInfo.searchWhere) {
    case 1: exportInfo.searchWhere = "DocInAtn"; break;
    case 2: exportInfo.searchWhere = "AtnInDoc"; break;
    default: exportInfo.searchWhere = "inBothWays"; break;
    }*/
}

function postProcess (exportInfo)
{
    /*
    switch (exportInfo.searchWhere) {
    case "DocInAtn": exportInfo.searchWhere = 1; break;
    case "AtnInDoc": exportInfo.searchWhere = 2; break;
    default: exportInfo.searchWhere = 3; break;
    }
    */
}