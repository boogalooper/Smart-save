///////////////////////////////////////////////////////////////////////////////
// Smart save - revision 0.61
// jazz-y@ya.ru
///////////////////////////////////////////////////////////////////////////////

#target photoshop

/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>Smart save</name>
<category>jazzy</category>
<enableinfo>true</enableinfo>
<eventid>68c86e88-e0d0-4571-a116-3d653eed4be3</eventid>
<terminology><![CDATA[<< /Version 1
                        /Events <<
                        /68c86e88-e0d0-4571-a116-3d653eed4be3 [(Smart save) <<
                        /newFolder [(saveInNewFolder) /boolean]                       
                        /path [(newFolderPath) /string]
                        /fileType [(fileType) /string] 
                        /jpgQuality [(jpgQuality) /number]                        
                        /flatten [(flattenLayers) /boolean] 
                        /createSubFolder [(createSubFolder) /boolean]                         
                        /subFolderOpt [(subFolderOptions) /string] 
                        /renameFile [(renameFile) /boolean] 
                        /renameFileOpt [(renameFileOptions) /string] 
                        /sequenceId [(sequenceId) /string]     
                        /replace [(replaceWhenSave) /boolean]                         
                        >>]
                         >>
                      >> ]]></terminology>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/ 

var GUID = "68c86e88-e0d0-4571-a116-3d653eed4be3"
var stCurFilename =  {en: "Current filename:",ru: "Текущее имя:"}
var stNewFilname =  {en: "New filename:",ru: "Новое имя:"}
var strAddToBegin= {en:"Insert before", ru: "Добавить в начало"}
var strAddToEnd= {en:"Insert after", ru: "Добавить в конец"}
var strAlbum = {en:"WxH: album", ru: "WxH: альбомная"}
var strAuthor= {en:"Author", ru: "Автор"}
var strBrowse = {en: "Browse",ru:"Обзор"}
var strCamera = {en:"Camera model", ru: "Камера"}
var strCancel = {en:"Cancel", ru: "Отмена"}
var strCreated= {en:"Created", ru: "Создан"}
var strCreateSub =  {en: "Create subdirectory",ru: "Создавать подкаталог"}
var strCyr = {en:"Cyrillic", ru: "Кириллица"}
var strDate = {en:"Date, time", ru: "Дата, время"}
var strDigits = {en:"Digits", ru: "Цифры"}
var strDoc = {en:"Document", ru: "Документ"}
var strEDoc = {en:"Every document", ru: "Каждый документ"}
var strESave = {en:"Every save", ru: "Каждое сохранение"}
var strExt = {en:"Extension", ru: "Расширение"}
var strFileType =  {en: "File format",ru: "Формат файла"}
var strFilter= {en:"Character filter", ru: "Фильтр симоволов"}
var strFiveDig = {en:"Five digits", ru: "Пять цифр"}
var strFlatten = {en: "flatten layers before save", ru:"объединять слои перед сохранением"}
var strFolderDest =  {en: "Destination directory",ru: "Каталог назначения"}
var strFourDig = {en:"Four digits", ru: "Четыре цифры"}
var strInSameFolder =  {en: "save in the same directory",ru: "сохранить в том же каталоге"}
var strJpgQuality = {en: "jpg quality:", ru: "качество jpg:"}
var strLat = {en:"Latin", ru: "Латиница"}
var strLCase= {en:"lower case", ru: "строчные"}
var strLetters= {en:"Letters", ru: "Буквы"}
var strLrName= {en:"Layer name", ru: "Имя слоя"}
var strMessage = "Smart save"
var strMod= {en:"Modified", ru: "Изменен"}
var strName = {en:"Name", ru: "Имя"}
var strNewPath =  {en: "save to new directory",ru: "сохранить в новом каталоге"}
var strOk = {en:"Save file", ru: "Сохранить файл"}
var strOkAlt = {en:"Save settings", ru: "Сохранить настройки"}
var strOneDig = {en:"One digit", ru: "Одна цифра"}
var strOrig = {en:"Without change", ru: "Без изменения"}
var strOrigCase= {en:"Original case", ru: "Без изменения"}
var strParent= {en:"Parent folder", ru: "Каталог"}
var strPortrait = {en:"WxH: portrait", ru: "WxH: портретная"}
var strPreview =  {en: "Preview",ru: "Предпросмотр"}
var strRenameFile=  {en: "Rename file when saving",ru: "Переименовывать файл при сохранении"}
var strReplace =  {en:"replace file in the destination directory if the names match", ru: "заменять файл в каталоге назначения при совпадении имен"}
var strReplaced= {en:"Replace", ru: "Заменить"}
var strResolution= {en:"Resolution", ru: "Разрешение"}
var strRoundDec =  {en: "Up to decimal",ru: "До десятых"}
var strRoundInt =  {en: "Up to integer",ru: "До целого"}
var strRoundTwoDec =  {en: "Up to two decimal",ru: "До сотых"}
var strSaveAs =  {en: "save as...",ru: "Сохранить как..."}
var strSaveFile =  {en: "Save opened file",ru: "Сохранить открытый файл"}
var strSearch= {en:"Search:", ru: "Найти:"}
var strSeq = {en:"Sequence", ru: "Счетчик"}
var strSize = {en:"Dimensions", ru: "Размер"}
var strSubt = {en:"Substitution", ru: "Подстановка"}
var strTabFile = {en: "File name",ru: "Имя файла"}
var strTabFld = {en: "Subfolder name",ru: "Имя подкаталога"}
var strText = {en:"Text", ru: "Текст"}
var strThreeDig = {en:"Three digits", ru: "Три цифры"}
var strTipAction= {en:"Action", ru: "Действие"}
var strTipBegin= {en:"Begin from...", ru: "Начинать с..."}
var strTipCase = {en:"Letter case", ru: "Регистр букв"}
var strTipDigits= {en:"Number of digits", ru: "Количество знаков"}
var strTipDiv = {en:"Inserted text\nYou can create additional subdirectories using the delimiter ", ru: "Текст вставки\nВы можете создавать дополнительные подкаталоги, используя разделитель "}
var strTipMode=  {en: "Display format",ru: "Формат отображения"}
var strTipPaste = {en:"Inserted text", ru: "Текст вставки"}
var strTipRound =  {en: "Round up",ru: "Округлять"}
var strTipSearchLine= {en:"Search text", ru: "Поиск текста"}
var strTipSeqOpt= {en:"Increase value", ru: "Увеличивать значение"}
var strTipUnits= {en:"Units", ru: "Единицы измерения"}
var strTitle= {en:"Title", ru: "Заголовок"}
var strToday= {en:"Today", ru: "Сегодня"}
var strTomorrow= {en:"Tomorrow", ru: "Завтра"}
var strTranslitBackward = {en:"Transliterate LAT-CYR", ru: "Транслит LAT-CYR"}
var strTranslitFoward = {en:"Transliterate CYR-LAT", ru: "Транслит CYR-LAT"}
var strTwoDig = {en:"Two digits", ru: "Две цифры"}
var strUCase= {en:"UPPER CASE", ru: "ПРОПИСНЫЕ"}
var strYestedray= {en:"Yestedray", ru: "Вчера"}
var msgSave = {en:"File does not have a path. Saving in the same directory is not possible!\nSave the file before running the script, or change the settings", ru: "Файл не имеет пути. Сохранение в тот же каталог невозможно!\nСохраните файл перед запуском скрипта, либо измените настройки"}

$.localize = true
//$.locale = "ru"

//bin here

var cancelButtonID = 2
var h = 0

var renew = false // начальная загрузка, не тратить время на загрузку данных из элементов
var exportInfo = new Object() 
var metadata = new Object ()
var sysDiv = "/"; if ( $.os.search(/windows/i) != -1 ) {sysDiv='\\'}

var cacheFld = []; for (var i=0; i<10; i++) {cacheFld.push (new cacheRecord ("", "")) } // кэш для настроек и значений каталогов
var cacheFle = []; for (var i=0; i<10; i++) {cacheFle.push (new cacheRecord ("", "")) } // кэш для настроек и значений файлов

initExportInfo(exportInfo) // заполнить значениями по-умолчанию

if (initMetadata (metadata)) 
main ()

function main ()
{
if (!app.playbackParameters.count)  
    {  
   // normal run
   // try to get settings from registry

    try {var d = app.getCustomOptions(GUID)
    if (d!=undefined) descriptorToObject(exportInfo, d, strMessage)} catch (e) {}
    
    initSeq () //загружаем счетчик
    generateUUID () //генерируем и записываем id , который будет зафиксирован в настройках
    
    var w = buildWindow (); var result = w.show()
    
    if (result == cancelButtonID) {return 'cancel'} else  // if cancelled
        {
           // normal run
           //try to search from menu with registry settings, aftter search put it to palette and registry
     // если форма закрыта по нажатию кнопки "ок"           
            var parentPath = ""  
            var newPath = createName(exportInfo.subFolderOpt, cacheFld)

            if (exportInfo.newFolder == true && exportInfo.path !="") {parentPath = exportInfo.path} else {parentPath = metadata.curPath}
            if (exportInfo.createSubFolder && newPath!="") parentPath  +=sysDiv + newPath

         
            var targetName = createName(exportInfo.renameFileOpt, cacheFle) 
            if (targetName == "" || exportInfo.renameFile == false ) targetName = metadata.curFilename
            
            switch (exportInfo.fileType)
            {
                case "jpg": var a = SaveAsJPEG(CreateUniqueFileName (parentPath,targetName, "jpg"), exportInfo.jpgQuality); break;
                case "tif": var a = SaveAsTIFF(CreateUniqueFileName (parentPath,targetName, "tif" )); break;
                case "psd": var a = SaveAsPSD(CreateUniqueFileName (parentPath,targetName, "psd")); break;
             }
                   
                    var d = objectToDescriptor(exportInfo, strMessage)
                    app.putCustomOptions(GUID, d)
                    app.playbackParameters = d
        }
    // exit script  
    }  
else  // если запущено из палитры
    {  

    var d = app.playbackParameters
    descriptorToObject(exportInfo, d, strMessage)
      
    if (app.playbackDisplayDialogs == DialogModes.ALL ) 
    {
        //double click from action
        initSeq (true) 
        strOk = strOkAlt
        var w = buildWindow (); var result = w.show()
        
        if (result == cancelButtonID) {return 'cancel'} else // if cancelled
        {   
            app.eraseCustomOptions(exportInfo.sequenceId);
            // сохранить введенные настройки
            generateUUID ()

            var d = objectToDescriptor(exportInfo, strMessage)
            app.playbackParameters = d

            putSeqSettings (exportInfo.sequenceId, exportInfo.renameFileOpt )
            }
    }

    if (app.playbackDisplayDialogs != DialogModes.ALL)  // run by button "play" with saved in palette settings (быстрый запуск с сохраненными настройками)
    {
            initSeq () 
            var parentPath = ""  
            var newPath = createName(exportInfo.subFolderOpt, cacheFld)

            if (exportInfo.newFolder == true && exportInfo.path !="") {parentPath = exportInfo.path} else {if (metadata.curPath!="") {parentPath = metadata.curPath} else{alert (msgSave);return}}
            if (exportInfo.createSubFolder && newPath!="") parentPath  +=sysDiv + newPath
         
            var targetName = createName(exportInfo.renameFileOpt, cacheFle) 
            if (targetName == "" || exportInfo.renameFile == false ) targetName = metadata.curFilename
            
            switch (exportInfo.fileType)
            {
                case "jpg": var a = SaveAsJPEG(CreateUniqueFileName (parentPath,targetName, "jpg"), exportInfo.jpgQuality); break;
                case "tif": var a = SaveAsTIFF(CreateUniqueFileName (parentPath,targetName, "tif" )); break;
                case "psd": var a = SaveAsPSD(CreateUniqueFileName (parentPath,targetName, "psd")); break;
             }

               putSeqSettings (exportInfo.sequenceId, exportInfo.renameFileOpt )
        }
    // next code  
} 
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
    pn1.text = strSaveFile; 
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
    pn2.text = strFolderDest; 
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

var dl1_array = [strInSameFolder,strNewPath]; 
var dl1 = gr1.add("dropdownlist", undefined, dl1_array); 
      dl1.preferredSize.width = 210;
var bn1 = gr1.add("button"); 
    bn1.text = strBrowse
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

    if (et1.preferredSize.height > dl1.preferredSize.height) {h = et1.preferredSize.height } else { h =  dl1.preferredSize.height}
// PN3
// ===
var pn3 = gr10.add("panel"); 
    pn3.text = strFileType; 
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
    st1.text = strSaveAs; 
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
    tpn1.margins = 0; 

// TB1
// ===
var tb1 = tpn1.add("tab"); 
    tb1.text = strTabFld //"Имя подкаталога"; 
    tb1.orientation = "column"; 
    tb1.alignChildren = ["left","top"]; 
    tb1.spacing = 10; 
    tb1.margins = 10; 

// TB2
// ===
var tb2 = tpn1.add("tab"); 
    tb2.text = strTabFile //"Имя файла"; 
    tb2.orientation = "column"; 
    tb2.alignChildren = ["left","top"]; 
    tb2.spacing = 10; 
    tb2.margins = 10; 


// TPN1
// ====
tpn1.selection = tb2; 

// GRENABLESUBFOLDER
// =================
var grEnableSubfolder = tb1.add("group"); 
    grEnableSubfolder.orientation = "row"; 
    grEnableSubfolder.alignChildren = ["left","center"]; 
    grEnableSubfolder.spacing = 10; 
    grEnableSubfolder.margins = 0; 

var ch2 = grEnableSubfolder.add("checkbox"); 
    ch2.text = strCreateSub; 
    
// GRENABLERENAMINGFILE
// =================
var grEnableFile = tb2.add("group"); 
    grEnableFile.orientation = "row"; 
    grEnableFile.alignChildren = ["left","center"]; 
    grEnableFile.spacing = 10; 
    grEnableFile.margins = 0; 

var ch3 = grEnableFile.add("checkbox"); 
    ch3.text = strRenameFile; 

// PNPREVIEW
// =========
var pnPreview = wn.add("panel"); 
    pnPreview.text = strPreview; 
    pnPreview.orientation = "column"; 
    pnPreview.alignChildren = ["left","top"]; 
    pnPreview.spacing = 10; 
    pnPreview.margins = 10; 

var pnLabels = pnPreview.add("group"); 
       pnLabels.orientation = "row"; 
       
// GRTEXT
// ======
var grText = pnLabels.add("group"); 
    grText.orientation = "column"; 
    grText.alignChildren = ["right","center"]; 
    grText.spacing = 10; 
    grText.margins = 0; 

var statictext1 = grText.add("statictext"); 
    statictext1.text = stCurFilename; 

var statictext2 = grText.add("statictext"); 
    statictext2.text = stNewFilname; 

// GRLABELS
// ========
var grLabels = pnLabels.add("group"); 
    grLabels.orientation = "column"; 
    grLabels.alignChildren = ["left","center"]; 
    grLabels.spacing = 10; 
    grLabels.margins = 0; 

var stOld = grLabels.add("statictext"); 
   stOld.text = metadata.doc.name
    stOld.preferredSize.width = 350

var stNew = grLabels.add("statictext"); 
 //   stNew.text = "StaticText"; 
    stNew.preferredSize.width = 500

var ch4 =  pnPreview.add("checkbox"); 
ch4.text = strReplace

// GR9
// ===
var gr9 = wn.add("group"); 
    gr9.orientation = "row"; 
    gr9.alignChildren = ["left","center"]; 
    gr9.spacing = 10; 
    gr9.margins = 0; 
    gr9.alignment = ["center","top"]; 

var bnOk = gr9.add("button"); 
    bnOk.text = strOk; 
    bnOk.justify = "center"; 

var bnCancel = gr9.add("button",undefined, strCancel, {name: "cancel"}); 
    bnCancel.justify = "center"; 

bnOk.onClick = function ()
{

    
    wn.close ()
 }



dl1.onChange = function () 
{
    bn1.enabled= Boolean (this.selection.index)
    exportInfo.newFolder =Boolean(this.selection.index)
     
    if (!Boolean (this.selection.index)) 
        {if (metadata.curPath !="") {et1.text = metadata.curPath;et1.helpTip = metadata.curPath;bnOk.enabled=true} else {et1.text = "";et1.helpTip =""; bnOk.enabled=false}}
    else 
    {
        if (exportInfo.path!="") 
        {var fol = new Folder (exportInfo.path) 
            if (fol.exists) {
                et1.text = exportInfo.path
                et1.helpTip = exportInfo.path
                bnOk.enabled=true} 
            else {
               dl1.selection = 0
               exportInfo.path=""
             }
            } 
            else {bn1.onClick()}
        } 
}


dl2.onChange = function () {
    
    exportInfo.fileType = this.selection.text;
    
    if (renew) collectSubfolderSettings (tb1)
    if (renew) collectSubfolderSettings (tb2)
   
    if (pn3.children.length >1) pn3.remove (pn3.children[1])
    
    if (!Boolean(this.selection.index)){addJpgOpt (pn3)}else{addPsdOpt (pn3)}
  }

bn1.onClick = function ()
{
    var fol = new Folder (exportInfo.path)
    var userSelectedFolder = fol.selectDlg()
    if (userSelectedFolder) 
    {exportInfo.path = userSelectedFolder.fsName
       et1.text = exportInfo.path
       et1.helpTip = exportInfo.path
       bnOk.enabled=true}
}

ch2.onClick = function ()
{
    exportInfo.createSubFolder = this.value

    for (var i=1; i<tb1.children.length;i++) 
    {
        for (var x=0; x<tb1.children[i].children.length; x++)
        {
            tb1.children[i].children[x].enabled=this.value
         }
       
    }
    if (renew) collectSubfolderSettings(this.parent.parent)
 }

ch3.onClick = function ()
{
    exportInfo.renameFile = this.value
    for (var i=1; i<tb2.children.length;i++) 
    {
        for (var x=0; x<tb2.children[i].children.length; x++)
        {
            tb2.children[i].children[x].enabled=this.value
         }
       
    }
    if (renew) collectSubfolderSettings(this.parent.parent)
 }

ch4.onClick = function () {exportInfo.replace = this.value}
wn.onShow = function ()
{
//   init controls
   var tmp = exportInfo.subFolderOpt.split ('#')
   for (var i =0; i<tmp.length; i++) { pnFolderAdd (tb1,tmp[i])}
    
   
   tmp = exportInfo.renameFileOpt.split ('#')
   for (var i =0; i<tmp.length; i++) { pnFolderAdd (tb2,tmp[i])}
   
   if (tb1.children.length ==2 ) tb1.children[1].children[0].children[1].enabled=false
   if (tb2.children.length ==2 ) tb2.children[1].children[0].children[1].enabled=false
   
   stNew.text = makePath (exportInfo.renameFileOpt, exportInfo.subFolderOpt)
    
    if (exportInfo.path!="") {dl1.selection =Number (exportInfo.newFolder)} else {dl1.selection=0}; dl1.onChange ()
    dl2.selection = dl2.find (exportInfo.fileType); pn3.label= dl2.selection.text; dl2.onChange ()
    ch2.value = exportInfo.createSubFolder; ch2.onClick()
    ch3.value = exportInfo.renameFile; ch3.onClick()
    ch4.value = exportInfo.replace
    renew = true
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
        st2.text =strJpgQuality

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
        sl1.minvalue = 1; 
        sl1.maxvalue = 12; 
        sl1.preferredSize.width = parent.preferredSize.width - st3.preferredSize.width - st2.preferredSize.width-50 ; 
        sl1.value = 12; 

        sl1.addEventListener ('keyup', commonHandler)
        sl1.addEventListener ('mouseup', commonHandler)
        sl1.addEventListener ('mouseout', commonHandler)

        function commonHandler(evt) {exportInfo.jpgQuality = sl1.value = st3.text = Math.round (sl1.value)}

        sl1.onChanging = function () {exportInfo.jpgQuality = st3.text = Math.round(Number(this.value))}

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
        ch1.text = strFlatten
        
        ch1.onClick = function () {exportInfo.flatten=Boolean (this.value)}
        ch1.value = Number (exportInfo.flatten)
        
        wn.layout.layout (true)
}


////////////////////////////////////////////////////////////////////////////////////
// панель управления каталогами и 
// вложенные функции загруки подпанелей
///////////////////////////////////////////////////////////////////////////////////
function pnFolderAdd (parent, s)
{
     // grFolder
    // ========
    var grFolder = parent.add("group"); 
        grFolder.orientation = "row"; 
        grFolder.alignChildren = ["left","center"]; 
        grFolder.spacing = 10; 
        grFolder.margins = 0; 
        grFolder.alignment = ["fill","top"]; 
        
    // GRBTN
    // =====
    var grBtn = grFolder.add("group"); 
        grBtn.orientation = "row"; 
        grBtn.alignChildren = ["left","center"]; 
        grBtn.spacing = 0; 
        grBtn.margins = 0; 

    var bnAdd = grBtn.add("button"); 
        bnAdd.text = "+"; 
        bnAdd.preferredSize.width = 30; 
        bnAdd.justify = "center"; 

    var bnDel = grBtn.add("button"); 
        bnDel.text = "-"; 
        bnDel.preferredSize.width = 30; 
        bnDel.justify = "center"; 

    // grFolder
    // ========
    var dlMode_array =[]
    if (parent.text ==strTabFile ) {dlMode_array = [strDoc,strSize,strDate,strText,strSubt,strSeq]} else {dlMode_array = [strDoc,strSize,strDate,strText,strSubt]; }
    
    var dlMode = grFolder.add("dropdownlist", undefined, dlMode_array); 
          dlMode.preferredSize.width = 120 
          dlMode.preferredSize.height = h
    
  // выбор нужной опции из списка, в зависимости от переданного аргумента
        if (s!=undefined) {var tmp = s.split('|')
        dlMode.selection = Number(tmp[0])
        addSubpanel(tmp)}
  
  // выбираем, какую панель загружать, в зависимости от выпадающего списка опций
function addSubpanel (s)
{
     if (grFolder.children.length >2) {grFolder.remove (grFolder.children[2])}
     switch (Number(s[0])) 
     {
         case 0: grNameAdd (grFolder,s); break;
         case 1: grSizeAdd (grFolder,s); break;
         case 2: grDateAdd (grFolder,s); break;
         case 3: grTextAdd (grFolder,s); break;
         case 4: grReplaceAdd (grFolder, s); break;
         case 5: grSeqAdd (grFolder, s); break; 
     }
}
 // загрузка подпанели при непосредственном выборе из списка       
 dlMode.onChange = function (){var tmp = []; tmp.push(this.selection.index); addSubpanel(tmp)}   
 
 bnAdd.onClick = function () 
 {
     if (parent.children.length<12){
     //найти строку, в которой нажата эта кнопка и вставить новую после нее
     if (parent.children.length == 2) parent.children[1].children[0].children[1].enabled=true
     renew = false
     var cur 
     var newArr = []
     // определяем, с какой строкой/массивом будем сейчас работать
     if (parent.text ==strTabFile) {var tmp = exportInfo.renameFileOpt; var tmpCache = cacheFle} else {var tmp = exportInfo.subFolderOpt;; var tmpCache = cacheFld}
     tmp=tmp.split ('#')
    
     // ищем в каком ряду нажата кнопка
     for (var i=1; i<parent.children.length;i++) {if (parent.children[i]==grFolder) {cur = i+1; break}}
     
     //удаляем строки, расположенные ниже
     var delLines = parent.children.length;
     for (var i=cur; i<delLines;i++) {parent.remove(parent.children[cur])}
    
    // добавляем пустую строку     
     pnFolderAdd (parent, "0" )
     
   // добавляем оставшиеся строки из памяти  
     for (var i=cur-1; i<tmp.length; i++) {pnFolderAdd (parent, tmp[i])}

    // делаем то же самое с кэшэм
    for (var i=0; i<cur-1;i++) {newArr.push (new cacheRecord(tmpCache[i].arg, tmpCache[i].s))}
    newArr.push (new cacheRecord ("",""))
    for (var i=cur-1; i<10;i ++) {newArr.push (new cacheRecord(tmpCache[i].arg, tmpCache[i].s))}
    for (var i=0; i<10;i++) {tmpCache[i].arg=newArr[i].arg; tmpCache[i].s=newArr[i].s }
    // обновляем список
     collectSubfolderSettings (parent)
     
    if (parent.children.length==11)
     {
         for (var i=1; i<11;i++) {parent.children[i].children[0].children[0].enabled=false}
      }

     wn.layout.layout (true) 
     renew = true
     }
    }

 bnDel.onClick = function () {
     
     if (parent.children.length>2)
     {
          if (parent.children.length==11)
         {
             for (var i=1; i<11;i++) {parent.children[i].children[0].children[0].enabled=true}
          }
         parent.remove (grFolder); 
         if (parent.children.length==2) {parent.children[1].children[0].children[1].enabled=false}
         collectSubfolderSettings (parent); wn.layout.layout (true)
         } else {parent.children[1].children[0].children[1].enabled=false}
     }
  
  
////////////////////////////////////////////////////////////////////////////////////
//  подпанель размеров
///////////////////////////////////////////////////////////////////////////////////
 function grSizeAdd (parent, s)
 {
    // grOpt
    // =====
  var grOpt = parent.add("group"); 
        grOpt.orientation = "row"; 
        grOpt.alignChildren = ["left","center"]; 
        grOpt.spacing = 10; 
        grOpt.margins = 0; 
        grOpt.alignment = ["left","fill"]; 
                
    var dropdown2_array = [strAlbum,strPortrait,"WxH","W","H",strResolution]; 
    var dropdown2 = grOpt.add("dropdownlist", undefined, dropdown2_array); 
        dropdown2.preferredSize.width = 150; 
        dropdown2.helpTip =  strTipPaste
        dropdown2.preferredSize.height = h
        
    var dim1 = ["cm","mm","in","px"];
    var dim2 = ["px/in","px/cm"];
    
    var dropdown1 = grOpt.add("dropdownlist", undefined, dim1); 
        dropdown1.preferredSize.width =100; 
        dropdown1.helpTip = strTipUnits
        dropdown1.preferredSize.height = h
        
    var dim3 = [strRoundInt,strRoundDec,strRoundTwoDec]; 
    var dropdown3 = grOpt.add("dropdownlist", undefined, dim3); 
    dropdown3.helpTip =  strTipRound
    dropdown3.preferredSize.width = 150; 
    dropdown3.preferredSize.height = h
    
    //
    dropdown1.onChange = function () 
    {
        switch (this.selection.index)
        { 
            case 3:
            if (dropdown3.find (strRoundDec))
           {
            dropdown3.removeAll()
            dropdown3.add ("item", dim3[0])
            dropdown3.selection = 0
             dropdown3.visible = false
           }
            break;
            default:
            if (!dropdown3.find (strRoundDec))
           {
            dropdown3.removeAll()
            for (var i=0; i<dim3.length; i++) {dropdown3.add ("item", dim3[i])}
            dropdown3.selection = 0
              dropdown3.visible = true
           }       
            break;        
        }
     if (renew) collectSubfolderSettings(grOpt.parent.parent)
  }  
    dropdown3.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    
    //меняем структуру списка, в зависимости от выбора (разрешение или размер)
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
            if (renew) collectSubfolderSettings(grOpt.parent.parent)

     }
 
   loadSubPanel (s, grOpt)
    
   if (renew) wn.layout.layout (true)
 }
}

  
////////////////////////////////////////////////////////////////////////////////////
//  подпанель имени
///////////////////////////////////////////////////////////////////////////////////

function grNameAdd (parent, s)
{
// GROPT1
// ======
var grOpt = parent.add("group"); 
    grOpt.orientation = "row"; 
    grOpt.alignChildren = ["left","center"]; 
    grOpt.spacing = 10; 
    grOpt.margins = 0; 
    grOpt.alignment = ["left","fill"]; 

var dropdown5_array = [strName,strLrName,strExt,strParent,strAuthor,strTitle,strCamera]; 
var dropdown5 = grOpt.add("dropdownlist", undefined, dropdown5_array); 
    dropdown5.selection = 0; 
    dropdown5.preferredSize.width = 100; 
    dropdown5.helpTip =  strTipPaste
    dropdown5.preferredSize.height = h
    
var dropdown6_array = [strOrigCase,strUCase,strLCase]; 
var dropdown6 = grOpt.add("dropdownlist", undefined, dropdown6_array); 
    dropdown6.selection = 0; 
    dropdown6.preferredSize.width = 150; 
    dropdown6.helpTip =  strTipCase
    dropdown6.preferredSize.height = h
    
var dropdown7_array = [strOrig, strLetters,strDigits,strLat,strCyr,strTranslitFoward,strTranslitBackward]; 
var dropdown7 = grOpt.add("dropdownlist", undefined, dropdown7_array); 
    dropdown7.selection = 0; 
    dropdown7.preferredSize.width = 150; 
    dropdown7.helpTip =  strFilter
    dropdown7.preferredSize.height = h
    
    dropdown5.onChange= function () {
            
        switch (this.selection.index)
        {
            case 2: dropdown7.selection =0; dropdown7.visible=false;break;
            default: if (!dropdown7.visible) dropdown7.visible = true; break;
         }
        if (renew) collectSubfolderSettings (grOpt.parent.parent)
        
        }
    dropdown6.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    dropdown7.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
     
loadSubPanel (s, grOpt)
    
if (renew) {wn.layout.layout (true); collectSubfolderSettings(grOpt.parent.parent)}
}

////////////////////////////////////////////////////////////////////////////////////
//  подпанель текста
///////////////////////////////////////////////////////////////////////////////////

function grTextAdd (parent, s)
{
// GROPT
// ======
var grOpt = parent.add("group"); 
    grOpt.orientation = "row"; 
    grOpt.alignChildren = ["left","center"]; 
    grOpt.spacing = 10; 
    grOpt.margins = 0; 
    grOpt.alignment = ["left","fill"]; 

var edittext1 = grOpt.add("edittext"); 
    edittext1.preferredSize.width = 260; 
    edittext1.preferredSize.height = h
    
    if (parent.parent.text == strTabFile ) {edittext1.helpTip =  strTipPaste} else {edittext1.helpTip =strTipDiv + sysDiv}

    edittext1.onChanging = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    loadSubPanel (s, grOpt)
    
if (renew) {wn.layout.layout (true); collectSubfolderSettings(grOpt.parent.parent) }
}


////////////////////////////////////////////////////////////////////////////////////
//  подпанель даты
///////////////////////////////////////////////////////////////////////////////////

function grDateAdd (parent, s)
{
 // GROPT
// ======
var grOpt = parent.add("group"); 
    grOpt.orientation = "row"; 
    grOpt.alignChildren = ["left","center"]; 
    grOpt.spacing = 10; 
    grOpt.margins = 0; 
    grOpt.alignment = ["left","fill"]; 

var dropdown8_array = [strCreated,strMod,strToday,strYestedray,strTomorrow]; 
var dropdown8 = grOpt.add("dropdownlist", undefined, dropdown8_array); 
    dropdown8.selection = 0; 
    dropdown8.preferredSize.width = 150; 
    dropdown8.helpTip =  strTipPaste
    dropdown8.preferredSize.height = h
    
var dropdown9_array = ["MM-DD-YYYY","YYYY-MM-DD","DD-MM-YYYY","MM-YYYY", "YYYY-MM", "MM-DD", "DD-MM", "HH-MM-SS","HH-MM","HH-SS","YYYY","MM","DD","HH","MM","SS"]; 
var dropdown9 = grOpt.add("dropdownlist", undefined, dropdown9_array); 
    dropdown9.selection = 0; 
    dropdown9.preferredSize.width = 150; 
    dropdown9.helpTip =  strTipMode
    dropdown9.preferredSize.height = h
   
dropdown8.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
dropdown9.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
 
loadSubPanel (s, grOpt)
    
if (renew) {wn.layout.layout (true);collectSubfolderSettings(grOpt.parent.parent)}
}


////////////////////////////////////////////////////////////////////////////////////
//  подпанель условного форматирования
///////////////////////////////////////////////////////////////////////////////////

function grReplaceAdd (parent, s)
{

// GROPT4
// ======
var grOpt = parent.add("group"); 
    grOpt.orientation = "row"; 
    grOpt.alignChildren = ["left","center"]; 
    grOpt.spacing = 10; 
    grOpt.margins = 0; 
    grOpt.alignment = ["left","fill"]; 

var statictext1 = grOpt.add("statictext"); 
    statictext1.text = strSearch; 
    statictext1.preferredSize.width = 40;  
    
var edittext2 = grOpt.add("edittext"); 
    edittext2.preferredSize.width = 100; 
    edittext2.helpTip =  strTipSearchLine
    edittext2.preferredSize.height = h
    
var dropdown12_array = [strReplaced,strAddToBegin,strAddToEnd]; 
var dropdown12 = grOpt.add("dropdownlist", undefined, dropdown12_array); 
    dropdown12.selection = 0; 
    dropdown12.preferredSize.width = 150; 
    dropdown12.helpTip = strTipAction
    dropdown12.preferredSize.height = h
    
var edittext3 = grOpt.add("edittext"); 
    edittext3.preferredSize.width =100; 
    edittext3.helpTip=strTipPaste
    edittext3.preferredSize.height = h
    
loadSubPanel (s, grOpt)

    dropdown12.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    edittext2.onChanging = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    edittext3.onChanging = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}

if (renew) {wn.layout.layout (true);collectSubfolderSettings(grOpt.parent.parent)}
    
}   

 ////////////////////////////////////////////////////////////////////////////////////
//  подпанель последовательности 
///////////////////////////////////////////////////////////////////////////////////

function grSeqAdd (parent, s)
{

// GROPT4
// ======
var grOpt = parent.add("group"); 
    grOpt.orientation = "row"; 
    grOpt.alignChildren = ["left","center"]; 
    grOpt.spacing = 10; 
    grOpt.margins = 0; 
    grOpt.alignment = ["left","fill"]; 
    
var edittext2 = grOpt.add("edittext"); 
    edittext2.preferredSize.width = 100; 
    edittext2.helpTip =  strTipBegin
    edittext2.label = "seq"
    edittext2.preferredSize.height = h
    
var dropdown12_array = [strOneDig, strTwoDig, strThreeDig, strFourDig, strFiveDig]; 
var dropdown12 = grOpt.add("dropdownlist", undefined, dropdown12_array); 
    dropdown12.selection = 0; 
    dropdown12.preferredSize.width = 150; 
    dropdown12.helpTip =  strTipDigits
    dropdown12.preferredSize.height = h
    
var dropdown13_array = [strESave, strEDoc]; 
var dropdown13 = grOpt.add("dropdownlist", undefined, dropdown13_array); 
    dropdown13.selection = 0; 
    dropdown13.preferredSize.width = 150; 
    dropdown13.helpTip = strTipSeqOpt
    dropdown13.preferredSize.height = h

   dropdown12.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
   dropdown13.onChange = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
   
 edittext2.onChanging = function () {
     this.text = this.text.replace(/[^0-9{2}]/g, "");
     if (this.text.length>5) this.text=this.text.substr (0, 5)
     if (renew) collectSubfolderSettings(grOpt.parent.parent)
     }

   loadSubPanel (s, grOpt)
   
if (renew) {wn.layout.layout (true);collectSubfolderSettings(grOpt.parent.parent)}
    
}   


return wn
}
 
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
        exportInfo.subFolderOpt = "1" 
        exportInfo.createSubFolder = false
        exportInfo.renameFile = true
        exportInfo.renameFileOpt = "0" 
        exportInfo.sequenceId ="" 
        exportInfo.replace = true
}

function objectToDescriptor (o, s) 
{
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
}

////////////////////////////////////////////////////////////////////////////////////
// получить настройки опций и применить
// их к элементам
///////////////////////////////////////////////////////////////////////////////////
function loadSubPanel (s, parent)
{
   
    for (var i=0; i<parent.children.length;i++)
    {
        switch (parent.children[i].type)
        {
            case "dropdownlist":
                parent.children[i].selection = Number(s[i+1])
                break;
           case "edittext":
                if (s[i+1]!=undefined) {parent.children[i].text = String (s[i+1])} else {if (parent.children[i].label == "seq") parent.children[i].text = "0"}
                break;
           case "statictext":
                break;
            default:
                $.writeln (parent.children[i].type)
            break;
         }
     }  
 }


////////////////////////////////////////////////////////////////////////////////////
// получить настройки строки опций
// и сохранить их в строку
///////////////////////////////////////////////////////////////////////////////////
function collectSubfolderSettings (parent)
{
    var s = ""
    var cached = ""
    try{
    for (var i=1; i<parent.children.length; i++)
    {
        var a = String (parent.children[i].children[1].selection.index)
        var b = loadSubPanelSettings (parent.children[i].children[2])  
        
        if (b=="") {s= s+ a + '#'} else {s = s + a + '|' + b + '#'}       
        if (b=="") {cached= a + '#'} else {cached = a + '|' + b} 
        
        if (parent.text != strTabFile) 
        {if (cached != cacheFld[i-1].arg && cacheFld[i-1].arg != "") {cacheFld[i-1].arg = ""} else {cacheFld[i-1].arg = cached}}
        else 
        {if (cached != cacheFle[i-1].arg && cacheFle[i-1].arg != "") {cacheFle[i-1].arg = ""} else {cacheFle[i-1].arg = cached}}
    }
        s = s.substr (0, s.length-1)} catch (e) {}
        if (parent.text == strTabFile) 
        {exportInfo.renameFileOpt = s; $.writeln (parent.text + ': ' + exportInfo.renameFileOpt)} 
        else {exportInfo.subFolderOpt=s; $.writeln (parent.text + ': ' + exportInfo.subFolderOpt)}
        
        parent.parent.parent.children[2].children[0].children[1].children[1].text = makePath (exportInfo.renameFileOpt, exportInfo.subFolderOpt)

        return s

//сохранить настройки подгруппы в строку
function loadSubPanelSettings (parent)
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
           case "edittext":
                if (parent.parent.parent.text == strTabFile)    
                {
                    s=s+parent.children[i].text.replace(/[:\/\\*\?\"\<\>\|\#]/g, "_")   + '|'    
                 } else
                    {   
                        var tmp = ""
                        if ( $.os.search(/windows/i) != -1 ) 
                        {tmp=parent.children[i].text.replace(/[:\/*\?\"\<\>\|\#]/g, "_")
                         tmp = tmp.replace(/\\+/g, '$1\\')
                    //     tmp = tmp.replace(/\\$/,"")
                     //    tmp = tmp.replace(/^\\/,"")
                         } 
                        else {
                            tmp=parent.children[i].text.replace(/[:\\\*\?\"\<\>\|\#]/g, "_")
                            tmp = tmp.replace(/\/+/g, '$1/')
                  //          tmp = tmp.replace(/\/$/,"")  
                  //            tmp = tmp.replace(/^\//,"")          
                            }
                        s=s+tmp + '|'  
                     }
                
                break;
           case "statictext":
                s=s+parent.children[i].text  + '|'
                break;
            default: $.writeln (parent.children[i].type)
            break;
         }
     }  
    s = s.substr (0, s.length-1)
    } catch (e) {s=""}
    return s
}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// формирование читаемой строки из параметров 
/////////////////////////////////////////////////////////////////////////////////////////////////////

function createName (s, cached)
{
    s = s.split ('#')
    var c = ""
    var cache = ""
    var useCache = false
    
    for (var i = 0; i < s.length; i++)
    {
        if (s[i] == cached[i].arg) {useCache = true}
        
        var tmp = s[i].split ('|')
               
        switch (Number (tmp[0]))  
        {
         case 0: if (cached[i].s !="" && useCache) {c+=cached[i].s} else {cache= grName (tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         case 1: if (cached[i].s !="" && useCache) {c+=cached[i].s} else {cache= grSize (tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         case 2: if (cached[i].s !="" && useCache) {c+=cached[i].s} else {cache= grDate (tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         case 3: if (cached[i].s !="" && useCache) {c+=cached[i].s} else {cache= grText (tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         case 4: c = grReplace (tmp,c); break;
         case 5: if (cached[i].s !="" && useCache) {c+=cached[i].s} else {cache= grpSeq (tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         }
     
        useCache = false
    }

// имя
function grName (s)
{
    var c = ""
        switch (Number(tmp[1]))  
        {
            case 0: c= metadata.curFilename; break;
            case 1: c =metadata.lrName; break;
            case 2: c =metadata.curExt; break;
            case 3: c =metadata.parentPath; break;
            case 4: c =metadata.author; break;
            case 5: c =metadata.title; break;
            case 6: c =metadata.camera; break;
        }
    
        switch (Number(tmp[2]))  
        {
            case 1: c= c.toUpperCase(); break;
            case 2: c =c.toLowerCase(); break;
        }
    
            switch (Number(tmp[3]))  
        {
            case 1: c =trim(c.replace(/[^ А-яёЁA-z]/g, "")); break;
            case 2: c =trim(c.replace(/[^0-9]/g, "")); break;    
            case 3: c =trim(c.replace(/[^ A-z]/g, "")); break;
            case 4: c =trim(c.replace(/[^ А-яёЁ]/g, "")); break;
            case 5: c =translit (c, true); break;
            case 6: c =translit (c, false); break;
        }
            
            
            function trim (c)
            {
               c = c.replace(/ +$/,"")  
               c = c.replace(/^ +/,"")   
                return c
            }   
        
        return c 
}
// размеры
function grSize (s)
{
    var c = ""
        switch (Number(s[2]))  
        {
          case 0: c = getSize (s[1], Units.CM,s[3]); break;
          case 1: c = getSize (s[1], Units.MM,s[3]); break;
          case 2: c = getSize (s[1], Units.INCHES,s[3]); break;
          case 3: c = getSize (s[1], Units.PIXELS,s[3]); break;
        }

    
       return c
       
function getSize (mode, units, div)
{
    var oldPref = app.preferences.rulerUnits
    app.preferences.rulerUnits = units

    var a = metadata.doc.width
    var b = metadata.doc.height
    var c = ""
    switch (Number (mode))
    {
        case 0: if (a.value > b.value) {c = round (a, div) + 'x' + round (b, div)} else {c = round (b, div) + 'x' + round (a, div)}; break;
        case 1: if (a.value < b.value) {c = round (a, div) + 'x' + round (b, div)} else {c = round (b, div) + 'x' + round (a, div)}; break;
        case 2: c = round (a, div) + 'x' + round (b, div); break;
        case 3: c = round (a, div); break;
        case 4: c = round (b, div); break;
        case 5: if (units == Units.CM) {c = round(metadata.doc.resolution,div)} else {c = round(metadata.doc.resolution/2.54,div)}; break;
     }


    app.preferences.rulerUnits = oldPref   

    function round (val, mode)
    {
        if (val instanceof UnitValue) {val=val.value}
        switch (Number (mode))
        {
            case 0: return Math.round (val); break;
            case 1: 
                var tmp = String(Math.round (val*10)/10)
                if (tmp.indexOf (".") == -1 && tmp.indexOf (",") == -1) tmp += ".0"
                return tmp
                break;
            case 2: 
                var tmp = String(Math.round (val*100)/100)
                if (tmp.indexOf (".") == -1 && tmp.indexOf (",") == -1) tmp += ".0"
                if (tmp.indexOf (".") >= tmp.length-2 || tmp.indexOf (",") >= tmp.length-2) tmp += "0"
                return tmp
            break;
        }
    }
   
    return c
}
    
}

//время
function grDate (s)
{
    var dt = new Object
    var c = ""
    var div = "-"
    switch (Number (s[1]))
    {
        case 0: getDt (metadata.created, dt); break;
        case 1: getDt (metadata.modified, dt); break;
        case 2: var a = new Date; getDt (a, dt); break;
        case 3: var a = new Date; a.setDate (Number(a.getDate()-1)); getDt (a, dt); break;
        case 4: var a = new Date; a.setDate (Number(a.getDate()+1)); getDt (a, dt); break;
     }
 
     switch (Number (s[2]))
    {
        case 0:  c=c.concat (dt.MM,div,dt.DD,div,dt.YY); break;
        case 1:  c=c.concat (dt.YY,div,dt.MM,div,dt.DD ); break;
        case 2:  c=c.concat (dt.DD,div,dt.MM,div, dt.YY ); break;
        case 3:  c=c.concat (dt.MM,div, dt.YY); break;        
        case 4:  c=c.concat (dt.YY,div,dt.MM); break;        
        case 5:  c=c.concat (dt.MM,div,dt.DD); break;       
        case 6:  c=c.concat (dt.DD,div,dt.MM); break;       
        case 7:  c=c.concat (dt.hh,div,dt.mm,div, dt.ss ); break;
        case 8:  c=c.concat (dt.hh,div,dt.mm); break;
        case 9:  c=c.concat (dt.mm,div,dt.ss); break;
        case 10:  c=dt.YY; break;
        case 11:  c=dt.MM; break;
        case 12:  c=dt.DD; break;
        case 13:  c=dt.hh; break;
        case 14:  c=dt.mm; break;
        case 15:  c=dt.ss; break;
     }
 
 function getDt (dt, d)
 {
     d.YY = String(Number(dt.getYear()) + 1900)
     d.MM = String(Number (dt.getMonth()) + 1); if (d.MM.length==1) d.MM= "0" + d.MM
     d.DD = String (dt.getDate()); if (d.DD.length==1) d.DD= "0" + d.DD
     
     d.hh = String (dt.getHours()); if (d.hh.length==1) d.hh = "0" + d.hh 
     d.mm = String(dt.getMinutes()); if (d.mm.length==1) d.mm= "0" + d.mm 
     d.ss = String (dt.getSeconds()); if (d.ss.length==1) d.ss= "0" + d.ss
  }   

return c
 }

//текст
function grText (s)
{
    var c=""
    if (s[1]!=undefined && s[1]!="") c = s[1]
    return c
 }

//заена
function grReplace (s, z)
{
    var tmp = z.toUpperCase()
    switch (Number(s[3]))
    {
        case 0:
        if (s[2]!=undefined && s[2]!="")
        {
            var a = []
            while (tmp.indexOf (s[2].toUpperCase())!= -1) 
            {
                a.push (z.substr (0, tmp.indexOf (s[2].toUpperCase()))) 
                a.push (z.substr (tmp.indexOf (s[2].toUpperCase()),s[2].length))
                z=tmp = z.substr (tmp.indexOf (s[2].toUpperCase())+s[2].length,tmp.length - s[2].length)
                tmp=tmp.toUpperCase()
            }
        
            a.push (z)
            
            if (a.length>0)
            {
            z=""
             for (var i=0; i<a.length; i++)  
             {
                 if (a[i]== "") continue;
                 if (a[i].toUpperCase()==s[2].toUpperCase()) {z+=s[4]} else {z+=a[i]}
             }
            }
        }    
        break;
        
        case 1: 
        if (tmp.indexOf (s[2].toUpperCase())!= -1) 
        {
            if (tmp.indexOf (sysDiv)!= -1) {
                var b = ""
                var c = ""
                var a = z.split (sysDiv)
                for (var i =0; i< a.length; i++) {c = a[i].toUpperCase(); if (c.indexOf (s[2].toUpperCase())!= -1 && c!="") {a[i]=s[4]+a[i]; break;}}
                for (var i =0; i< a.length-1; i++) {b=b+a[i]+sysDiv};b=b+a[i];z=b
                } else { z=s[4]+z}
        }
        break;    
        
        case 2: 
        if (tmp.indexOf (s[2].toUpperCase())!= -1) 
        {
            if (tmp.indexOf (sysDiv)!= -1) {
                var b = ""
                var c = ""
                var a = z.split (sysDiv)
                for (var i =0; i< a.length; i++) {c = a[i].toUpperCase(); if (c.indexOf (s[2].toUpperCase())!= -1 && c!="") {a[i]=a[i]+s[4]; break;}}
                for (var i =0; i< a.length-1; i++) {b=b+a[i]+sysDiv};b=b+a[i];z=b
                } else { z=z+s[4]}
        }
       break;    
        
    }

    return z
 }

//последовательность
function grpSeq (s)
{
    var n = String (Number(s[1]))
    
    switch (Number(s[2]))
    {
        case 0: if (n.length>(Number(s[2])+1)) n=  n.substr (n.length-Number(s[2])-1,Number(s[2])+1); break;
        case 1: if (n.length>(Number(s[2])+1)) n = n.substr (n.length-Number(s[2])-1,Number(s[2])+1); if (n.length < 2) n="0"+n; break;
        case 2: if (n.length>(Number(s[2])+1)) n = n.substr (n.length-Number(s[2])-1,Number(s[2])+1); while (n.length <3) { n="0"+n}; break;
        case 3: if (n.length>(Number(s[2])+1)) n = n.substr (n.length-Number(s[2])-1,Number(s[2])+1); while (n.length <4) { n="0"+n}; break;
        case 4: if (n.length>(Number(s[2])+1)) n = n.substr (n.length-Number(s[2])-1,Number(s[2])+1); while (n.length <5) { n="0"+n}; break;
    }
    return n
}


// конец формирования строки
//if ( $.os.search(/windows/i) != -1 ) {c=c.replace(/^\\/,"")} else {c=c.replace(/^\//,"") }

return c
}


function makePath (fle, fld)
{
    
    var s = ""
    
    fle = createName (fle, cacheFle)
    fld = createName (fld, cacheFld)
    
    if (fle == "" || exportInfo.renameFile == false ) fle = metadata.curFilename
    if (fld != "") {fld = fld  + sysDiv}
    
    if (exportInfo.createSubFolder) {s=fld + fle + '.' + exportInfo.fileType} else {s=fle+ '.' + exportInfo.fileType}
    if ( $.os.search(/windows/i) != -1 ) {s=s.replace(/\\+/g, '$1\\')} else {s=s.replace(/\/+/g, '$1/')}
    
    return s
}
function initMetadata (metadata)
{
        try { var doc = app.activeDocument} catch (e) {return false}
        
        metadata.doc = doc //doc 
        if (doc.name.lastIndexOf (".")!=-1) {metadata.curFilename =  doc.name.substr (0, doc.name.lastIndexOf ("."))} else {metadata.curFilename = doc.name} //curFilename
        try {metadata.curPath = doc.path.fsName} catch (e) {metadata.curPath = ""}  //curPath
        metadata.curExt =  exportInfo.fileType //curExt
        metadata.lrName = doc.activeLayer.name //lrName
        
        try {metadata.parentPath = doc.path.fsName} catch (e) {metadata.parentPath = ""}  //parentPath
        if (metadata.parentPath.lastIndexOf (sysDiv)+1!=metadata.parentPath.length) {metadata.parentPath = metadata.parentPath.substr (metadata.parentPath.lastIndexOf (sysDiv)+1)}
        else {metadata.parentPath = metadata.parentPath.substr (0, metadata.parentPath.lastIndexOf (sysDiv)-1)}
        metadata.author = doc.info.author    //author
        metadata.title = doc.info.title // title
        for (var i =0; i<doc.info.exif.length;i++) {var tmp = doc.info.exif[i]; if (tmp[0]=="Model") {metadata.camera = tmp [1]; break}} //camera

        try {var fl = File (doc.fullName) ; metadata.created = fl.created; metadata.modified = fl.modified} catch (e) {metadata.created = metadata.modified = new Date} //created  //modified
      
       return true
}

// проверка и инкремент счетчиков
function initSeq (editMode)
{
      //app.eraseCustomOptions(String(GUID));
         var tmp = exportInfo.renameFileOpt.split ('#')
         var s = ""
         var found = false
         var seq =[]
         
         for (var i =0; i<tmp.length; i++) {seq = tmp[i].split ('|'); if (seq[0] == "5") {found = true; break}}
            
         if (found) 
         {
             if (getSeqSettings (String(exportInfo.sequenceId)) !="") 
                    {tmp = getSeqSettings (String(exportInfo.sequenceId)).split ('#')}
             else {tmp = exportInfo.renameFileOpt.split ('#')}
                 
                 for (var i =0; i<tmp.length; i++)
                 {
                     seq = tmp[i].split ('|')
                     
                     if (seq[0] == "5" && editMode!=true)
                     {
                         switch (Number (seq[3]))
                         {
                             case 0: seq[1]= Number(seq[1])+1; break;
                             case 1: if (String(metadata.doc.id) != getSeqSettings("docID")) {seq[1]= Number(seq[1])+1}; break;
                          }    
                             if (seq[1]==100000) seq[1] = 0
                      } 

                        for (var x=0; x<seq.length-1; x++) {s += seq[x] + '|'}
                        s += seq[seq.length-1] + '#'   
                 }
                s = s.substr (0, s.length-1)
                
                putSeqSettings ("docID", metadata.doc.id) // записать id документа
                
                exportInfo.renameFileOpt = s             
          } else
           
  //    exportInfo.sequenceId = generateUUID ()
 }

function SaveAsJPEG( inFileName, inQuality) {
    var hs = app.activeDocument.activeHistoryState
	var jpegOptions = new JPEGSaveOptions();
	jpegOptions.quality = inQuality;
     app.activeDocument.flatten()
	app.activeDocument.saveAs ( File( inFileName ), jpegOptions, true );
     app.activeDocument.activeHistoryState = hs
}

function SaveAsPSD( inFileName) {
     if (exportInfo.flatten) var hs = app.activeDocument.activeHistoryState
	var psdSaveOptions = new PhotoshopSaveOptions();
    if (exportInfo.flatten) app.activeDocument.flatten()
	app.activeDocument.saveAs( File( inFileName ), psdSaveOptions, true);
     if (exportInfo.flatten) app.activeDocument.activeHistoryState = hs
}

function SaveAsTIFF( inFileName) {
    if (exportInfo.flatten) var hs = app.activeDocument.activeHistoryState
	var tiffSaveOptions = new TiffSaveOptions();
    tiffSaveOptions.imageCompression = TIFFEncoding.NONE;
     if (exportInfo.flatten) app.activeDocument.flatten()
	app.activeDocument.saveAs( File( inFileName ), tiffSaveOptions,true);
    if (exportInfo.flatten) app.activeDocument.activeHistoryState = hs
}

function CreateUniqueFileName(inParentPath, inFileName, inFileExt) {

    if ( $.os.search(/windows/i) != -1 )  {inParentPath=inParentPath.replace(/\\+/g, '$1\\')} else  {inParentPath=inParentPath.replace(/\/+/g, '$1/')}
    if ( $.os.search(/windows/i) != -1 ) {inParentPath=inParentPath.replace(/\\$/,"")} else {inParentPath=inParentPath.replace(/\/$/,"") }
    if (inParentPath.indexOf(sysDiv,0) == 0) inParentPath = sysDiv + inParentPath
    
    var fld = new Folder (inParentPath)
    if (!fld.exists) fld.create()
    
	var uniqueFileName =inParentPath + sysDiv+ inFileName + '.' + inFileExt
    
  if (exportInfo.replace == false)
   {
	var fileNumber = 1;
	while ( File( uniqueFileName ).exists ) {
		uniqueFileName = inParentPath +  sysDiv + inFileName + "_" + fileNumber +  '.' + inFileExt;
		fileNumber++;
	}

}
	return uniqueFileName;
}

function cacheRecord (arg, s)
{
    
    this.arg = arg
    this.s=s 
    
    return
}

function generateUUID () {
     exportInfo.sequenceId =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
            var r = Math.random() * 16 | 0;
            return ( c == 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
        } );
    }

function s2t(s) {return stringIDToTypeID(s)}

function putSeqSettings (key, val)
{
    var d = new ActionDescriptor();
    d.putString(s2t('renameFileOpt'), val);
    app.putCustomOptions(key, d);
}

function getSeqSettings (key)
{
    try{var d = app.getCustomOptions(key);
    return d.getString(s2t('renameFileOpt'))} catch (e) {return ""}
}

function translit (s, mode)
{
        var arrru = new Array ('Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э');
        var arren = new Array ('Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e');
        
        if (mode) {s=cyrill_to_latin(s)} else {s=latin_to_cyrill(s)}
        
        function cyrill_to_latin(text){
            for(var i=0; i<arrru.length; i++){
                var reg = new RegExp(arrru[i], "g");
                text = text.replace(reg, arren[i]);
            }
            return text;
        }
         
        function latin_to_cyrill(text){

            for(var i=0; i<arren.length; i++){
                var reg = new RegExp(arren[i], "g");
                text = text.replace(reg, arrru[i]);
            }
            return text;
        }

    return s
}