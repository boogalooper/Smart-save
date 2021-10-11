#target photoshop

var GUID = "68c86e88-e0d0-4571-a116-3d653eed4be3"

strMessage = "Save in..."

var exportInfo = new Object()  
initExportInfo(exportInfo) 
var folderOpt = ""

main ()

function main ()
{
   try{var d = app.getCustomOptions(GUID)
    if (d!=undefined) descriptorToObject(exportInfo, d, strMessage)} catch (e) {}
    
    var w = buildWindow ()
    w.show ()
}


////////////////////////////////////////////////////////////////////////////////////
// конструктор главного окна программы
///////////////////////////////////////////////////////////////////////////////////
function buildWindow ()
{
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
    pn1.alignChildren = ["center","top"]; 
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
      dl1.preferredSize.width = 210;
var bn1 = gr1.add("button"); 
    bn1.text = "Обзор"; 
    bn1.justify = "center"; 
    bn1.preferredSize.width = 75
    
// GR2
// ===
var gr2 = pn2.add("group"); 
    gr2.orientation = "row"; 
    gr2.alignChildren = ["left","center"]; 
    gr2.spacing = 10; 
    gr2.margins = 0; 

var et1 = gr2.add("edittext", undefined,"",{readonly:true}); 
    et1.preferredSize.width =295; 

// PN3
// ===
var pn3 = gr10.add("panel"); 
    pn3.text = "Формат файла"; 
 //   pn3.preferredSize.width = 300; 
 //   pn3.preferredSize.height = 300; 
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

// TPN1
// ====
var tpn1 = wn.add("tabbedpanel"); 
    tpn1.alignChildren = "fill"; 
//    tpn1.preferredSize.width = 800; 
    tpn1.margins = 0; 

// TB1
// ===
var tb1 = tpn1.add("tab"); 
    tb1.text = "Имя подкаталога"; 
    tb1.orientation = "column"; 
    tb1.alignChildren = ["left","top"]; 
    tb1.spacing = 10; 
    tb1.margins = 10; 
    
// TB2
// ===
var tb2 = tpn1.add("tab"); 
    tb2.text = "Имя файла"; 
    tb2.orientation = "column"; 
    tb2.alignChildren = ["left","top"]; 
    tb2.spacing = 10; 
    tb2.margins = 10; 

// TPN1
// ====
tpn1.selection = tb1; 

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
    
    exportInfo.subFolderOpt = folderOpt 
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


dl2.onChange = function () {
    
    exportInfo.fileType = this.selection.text;
    
    if (pn3.children.length >1) pn3.remove (pn3.children[1])
    
    if (!Boolean(this.selection.index)){addJpgOpt (pn3)}else{addPsdOpt (pn3)}
  }

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
//   init controls
   var tmp = exportInfo.subFolderOpt.split ('||')
   for (var i =0; i<tmp.length; i++) { pnFolderAdd (tb1,tmp[i])}
    
    if (exportInfo.path!="") {dl1.selection =Number (exportInfo.newFolder)} else {dl1.selection=0}; dl1.onChange ()
    dl2.selection = dl2.find (exportInfo.fileType); pn3.label= dl2.selection.text; dl2.onChange ()
}


////////////////////////////////////////////////////////////////////////////////////
// настройки jpg
///////////////////////////////////////////////////////////////////////////////////

function addJpgOpt (parent)
{
    // GR6
    // ===
    var gr6 = parent.add("group"); 
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
        sl1.preferredSize.width = parent.preferredSize.width - st3.preferredSize.width - st2.preferredSize.width-50 ; 
        sl1.value = 12; 

        sl1.onChange = function () {exportInfo.jpgQuality=this.value}
        sl1.onChanging = function () {this.value = Math.round( Number (this.value)); st3.text = this.value }

        sl1.value = exportInfo.jpgQuality; sl1.onChanging ()

        wn.layout.layout (true)
 }

////////////////////////////////////////////////////////////////////////////////////
// настройки psd
///////////////////////////////////////////////////////////////////////////////////

function addPsdOpt (parent)
{
    // GR11
    // ====
    var gr11 = parent.add("group"); 
        gr11.orientation = "row"; 
        gr11.alignChildren = ["left","center"]; 
        gr11.spacing = 10; 
        gr11.margins = 0; 

    var ch1 = gr11.add("checkbox"); 
        ch1.text = "объединять слои перед сохранением"; 
        
        ch1.onClick = function () {exportInfo.flatten=Boolean (this.value)}
        ch1.value = Number (exportInfo.flatten)
        
        wn.layout.layout (true)
}


////////////////////////////////////////////////////////////////////////////////////
// панель управления каталогами и 
// вложенные функции с опциями
///////////////////////////////////////////////////////////////////////////////////
function pnFolderAdd (parent, s)
{
     // GRFOLDER
    // ========
    var grfolder = parent.add("group"); 
        grfolder.orientation = "row"; 
        grfolder.alignChildren = ["left","center"]; 
        grfolder.spacing = 10; 
        grfolder.margins = 0; 
        grfolder.alignment = ["fill","top"]; 
        
    // GRBTN
    // =====
    var grBtn = grfolder.add("group"); 
        grBtn.orientation = "row"; 
        grBtn.alignChildren = ["left","center"]; 
        grBtn.spacing = 0; 
        grBtn.margins = 0; 

    var bnadd = grBtn.add("button"); 
        bnadd.text = "+"; 
        bnadd.preferredSize.width = 30; 
        bnadd.justify = "center"; 

    var bndel = grBtn.add("button"); 
        bndel.text = "-"; 
        bndel.preferredSize.width = 30; 
        bndel.justify = "center"; 

    // GRFOLDER
    // ========
    var dlMode_array = ["Имя документа","Размер документа"]; 
    var dlMode = grfolder.add("dropdownlist", undefined, dlMode_array); 
          dlMode.preferredSize.width = 150; 
    
        var tmp = s.split('|')
        dlMode.selection = Number(tmp[0])
        addFolderOpt()
        
function addFolderOpt ()
{
     if (grfolder.children.length >2) {grfolder.remove (grfolder.children[2])}
     switch (dlMode.selection.index) 
     {
         case 0: break;
         case 1: grSizeAdd (grfolder,tmp); break;
     }
}
         
 dlMode.onChange = function (){addFolderOpt()}   
 bnadd.onClick = function () {pnFolderAdd (parent); wn.layout.layout (true)}
 bndel.onClick = function () {if (parent.children.length>1) {$.writeln ('remove folder group: index ' + grfolder.index); parent.remove (grfolder); wn.layout.layout (true)}}
  
}

  
////////////////////////////////////////////////////////////////////////////////////
//  подпанель размеров
///////////////////////////////////////////////////////////////////////////////////
 function grSizeAdd (parent, s)
 {
    // GROPT
    // =====
  var gropt = parent.add("group"); 
        gropt.orientation = "row"; 
        gropt.alignChildren = ["left","center"]; 
        gropt.spacing = 10; 
        gropt.margins = 0; 
        gropt.alignment = ["left","fill"]; 
                
    var dropdown2_array = ["WxH: альбомная","WxH: портретная","WxH","W","H","Разрешение"]; 
    var dropdown2 = gropt.add("dropdownlist", undefined, dropdown2_array); 
        dropdown2.preferredSize.width = 150; 
        dropdown2.helpTip =  "текст вставки"
        
    var dim1 = ["cm","mm","in","px"];
    var dim2 = ["px/in","px/cm"];
    
    var dropdown1 = gropt.add("dropdownlist", undefined, dim1); 
        dropdown1.preferredSize.width = 75; 
        dropdown1.helpTip =  "единицы измерения"
        
    var dropdown3_array = ["не округлять","до целых","до десятых","до сотых"]; 
    var dropdown3 = gropt.add("dropdownlist", undefined, dropdown3_array); 
    dropdown3.helpTip =  "округление"
    dropdown3.preferredSize.width = 150; 
    
    //
    dropdown1.onChange = function () {collectSubfolderSet(gropt.parent.parent)}
    dropdown3.onChange = function () {collectSubfolderSet(gropt.parent.parent)}
    
    dropdown2.onChange = function ()
    {
        switch (this.selection.index)
        {
            case 5: 
            if (dropdown1.find ("mm"))
            {
                dropdown1.removeAll()
                for (var i=0; i<dim2.length; i++)  {dropdown1.add ("item", dim2[i])}
                dropdown1.selection = 0
             }
          break;      
         default:
             if (dropdown1.find ("px/in"))
            {
                dropdown1.removeAll()
                for (var i=0; i<dim1.length; i++)  {dropdown1.add ("item", dim1[i])}
                dropdown1.selection = 0
             }
            break;      
        }
            collectSubfolderSet(gropt.parent.parent)
     }
 
   getLocalSet (s, gropt)
    
    
    wn.layout.layout (true)
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

////////////////////////////////////////////////////////////////////////////////////
// управление настройками программы
///////////////////////////////////////////////////////////////////////////////////

function initExportInfo (exportInfo) 
{
        exportInfo.newFolder = false
        exportInfo.path = ""
        exportInfo.fileType = "jpg"
        exportInfo.jpgQuality= 12
        exportInfo.flatten = false
        exportInfo.subFolderOpt = "1|0|0|0||1|0|0|0" 

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


////////////////////////////////////////////////////////////////////////////////////
// получить настройки опций и применить
// их к элементам
///////////////////////////////////////////////////////////////////////////////////
function getLocalSet (s, parent)
{
   //var tmp = s.split("|")
    
    for (var i=0; i<parent.children.length;i++)
    {
        switch (parent.children[i].type)
        {
            case "dropdownlist":
                parent.children[i].selection = Number(s[i+1])
                break;
            default:
                $.writeln (parent.children[i])
            break;
         }
     }  
 }


////////////////////////////////////////////////////////////////////////////////////
// получить настройки строки опций
// и сохранить их в строкуяя
///////////////////////////////////////////////////////////////////////////////////
function collectSubfolderSet (parent)
{
    var s = ""
    try{
    for (var i=0; i<parent.children.length; i++)
    {
        s=s+String (parent.children[i].children[1].selection.index) + '|' + putLocalSet (parent.children[i].children[2]) +'||'
    }
        s = s.substr (0, s.length-2)} catch (e) {}
        $.writeln ('save subfolder global ' + s)
        folderOpt = s
        return

//сохранить настройки подгруппы в строку
function putLocalSet (parent)
{
   var s = ""
    
    try {
    for (var i=0; i<parent.children.length;i++)
    {
        switch (parent.children[i].type)
        {
            case "dropdownlist":
                s=s+String(parent.children[i].selection.index) + '|'
                break;
            default:
            break;
         }
     }  
    s = s.substr (0, s.length-1)
    } catch (e) {s=""}
    return s
}
}
