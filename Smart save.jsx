///////////////////////////////////////////////////////////////////////////////
// Smart save
// jazz-y@ya.ru
///////////////////////////////////////////////////////////////////////////////

#target photoshop
 
/*
// BEGIN__HARVEST_EXCEPTION_ZSTRING
<javascriptresource>
<name>Smart save</name>
<category>jazzy</category>
<enableinfo>true</enableinfo>
<eventid>d2801bd0-adb4-4872-bd68-a688d0e6e151</eventid>
<terminology><![CDATA[<< /Version 1
                        /Events <<
                        /d2801bd0-adb4-4872-bd68-a688d0e6e151 [(Smart save) <<
                        /newFolder [(saveToNewFolder) /boolean]
                        /path [(destinationPath) /string]
                        /createSubFolder [(createSubfolder) /boolean]
                        /subFolderOpt [(subfolderTemplate) /string]
                        /renameFile [(renameFile) /boolean]
                        /renameFileOpt [(filenameTemplate) /string]
                        /sequenceId [(sequenceID) /string]
                        /replace [(overwriteExisting) /boolean]
                        /preset [(preset) /string]
                        /saveFormat [(saveFormat) /string]
                        /saveDescriptor [(saveOptions) /string]
                        >>]
                         >>
                      >> ]]></terminology>
</javascriptresource>
// END__HARVEST_EXCEPTION_ZSTRING
*/ 

(function () {

$.localize = true
//$.locale = "ru"

//bin here
var GUID = "d2801bd0-adb4-4872-bd68-a688d0e6e151",
    ver = "0.12.1",
    stCurFilename = { en: "Current filename:", ru: "Текущее имя:" },
    stNewFilname = { en: "New filename:", ru: "Новое имя:" },
    strAddToBegin = { en: "Insert before", ru: "Добавить в начало" },
    strAddToEnd = { en: "Insert after", ru: "Добавить в конец" },
    strAlbum = { en: "WxH: album", ru: "WxH: альбомная" },
    strAuthor = { en: "Author", ru: "Автор" },
    strBrowse = { en: "Browse", ru: "Обзор" },
    strCamera = { en: "Camera model", ru: "Камера" },
    strCancel = { en: "Cancel", ru: "Отмена" },
    strCreated = { en: "Created", ru: "Создан" },
    strCreateSub = { en: "Create subdirectory", ru: "Создавать подкаталог" },
    strCyr = { en: "Cyrillic", ru: "Кириллица" },
    strDate = { en: "Date, time", ru: "Дата, время" },
    strDigits = { en: "Digits", ru: "Цифры" },
    strDoc = { en: "Document", ru: "Документ" },
    strEDoc = { en: "Every document", ru: "Каждый документ" },
    strESave = { en: "Every save", ru: "Каждое сохранение" },
    strExt = { en: "Extension", ru: "Расширение" },
    strFilter = { en: "Character filter", ru: "Фильтр символов" },
    strFiveDig = { en: "Five digits", ru: "Пять цифр" },
    strFolderDest = { en: "Destination directory", ru: "Каталог назначения" },
    strFourDig = { en: "Four digits", ru: "Четыре цифры" },
    strInSameFolder = { en: "save in the same directory", ru: "сохранить в том же каталоге" },
    strLat = { en: "Latin", ru: "Латиница" },
    strLCase = { en: "lower case", ru: "строчные" },
    strLetters = { en: "Letters", ru: "Буквы" },
    strLrName = { en: "Layer name", ru: "Имя слоя" },
    strMessage = "Smart save",
    strMod = { en: "Modified", ru: "Изменен" },
    strName = { en: "Name", ru: "Имя" },
    strNewPath = { en: "save to new directory", ru: "сохранить в новом каталоге" },
    strOk = { en: "Save file", ru: "Сохранить файл" },
    strOkAlt = { en: "Save settings", ru: "Сохранить настройки" },
    strOneDig = { en: "One digit", ru: "Одна цифра" },
    strOrig = { en: "Without change", ru: "Без изменения" },
    strOrigCase = { en: "Original case", ru: "Без изменения" },
    strParent = { en: "Folder", ru: "Папка" },
    strParentOfParent = { en: "Parent of folder", ru: "Каталог папки" },
    strPortrait = { en: "WxH: portrait", ru: "WxH: портретная" },
    strPreview = { en: "Preview", ru: "Предпросмотр" },
    strRenameFile = { en: "Rename file when saving", ru: "Переименовывать файл при сохранении" },
    strReplace = { en: "replace file in the destination directory if the names match", ru: "заменять файл в каталоге назначения при совпадении имен" },
    strReplaced = { en: "Replace", ru: "Заменить" },
    strResolution = { en: "Resolution", ru: "Разрешение" },
    strRoundDec = { en: "Up to decimal", ru: "До десятых" },
    strRoundInt = { en: "Up to integer", ru: "До целого" },
    strRoundTwoDec = { en: "Up to two decimal", ru: "До сотых" },
    strSaveFile = { en: "Save opened file", ru: "Сохранить открытый файл" },
    strSearch = { en: "Search:", ru: "Найти:" },
    strSeq = { en: "Sequence", ru: "Счетчик" },
    strSize = { en: "Dimensions", ru: "Размер" },
    strSubt = { en: "Substitution", ru: "Подстановка" },
    strSubfolder = { en: "Subfolder", ru: "Подкаталог" },
    strTabFile = { en: "File name", ru: "Имя файла" },
    strTabFld = { en: "Subfolder name", ru: "Имя подкаталога" },
    strText = { en: "Text", ru: "Текст" },
    strThreeDig = { en: "Three digits", ru: "Три цифры" },
    strTipAction = { en: "Action", ru: "Действие" },
    strTipBegin = { en: "Begin from...", ru: "Начинать с..." },
    strTipCase = { en: "Letter case", ru: "Регистр букв" },
    strTipDigits = { en: "Number of digits", ru: "Количество знаков" },
    strTipMode = { en: "Display format", ru: "Формат отображения" },
    strTipPaste = { en: "Inserted text", ru: "Текст вставки" },
    strTipRound = { en: "Round up", ru: "Округлять" },
    strTipSearchLine = { en: "Search text", ru: "Поиск текста" },
    strTipSeqOpt = { en: "Increase value", ru: "Увеличивать значение" },
    strTipUnits = { en: "Units", ru: "Единицы измерения" },
    strTitle = { en: "Title", ru: "Заголовок" },
    strToday = { en: "Today", ru: "Сегодня" },
    strTomorrow = { en: "Tomorrow", ru: "Завтра" },
    strTranslitBackward = { en: "Transliterate LAT-CYR", ru: "Транслит LAT-CYR" },
    strTranslitFoward = { en: "Transliterate CYR-LAT", ru: "Транслит CYR-LAT" },
    strTwoDig = { en: "Two digits", ru: "Две цифры" },
    strUCase = { en: "UPPER CASE", ru: "ПРОПИСНЫЕ" },
    strYestedray = { en: "Yesterday", ru: "Вчера" },
    msgSave = { en: "File does not have a path. Saving in the same directory is not possible!\nSave the file before running the script, or change the settings", ru: "Файл не имеет пути. Сохранение в тот же каталог невозможно!\nСохраните файл перед запуском скрипта, либо измените настройки" },
    strDefailt = { ru: "по умолчанию", en: "default" },
    strPresetSave={ru: "Сохранить", en: "Save"},
    strPresetSaveAs={ru: "Добавить", en: "Add new"},
    strPresetDelete={ru: "Удалить", en: "Delete"},
    strSet = { ru: "Пресет:", en: "Preset:" },
    strReload = { ru: "↺", en: "↺" },
    strReset = { ru: "Сброс", en: "Reset" },
    strPreset = { ru: "Сохранение пресета", en: "Saving a preset" },
    strPresetPromt = { ru: "Укажите имя пресета\nБудут сохранены настройки имени подкаталога и файла.", en: "Specify the name of the preset\nSubdirectory and file name settings will be saved." },
    strCopy = { ru: " копия", en: " copy" },
    strSaveAgain = { ru: "Сохранить заново…", en: "Save again…" },
    strFormat = { ru: "Формат:", en: "Format:" },
    strNotSet = { ru: "не задан", en: "not set" },
    msgNoSaveDescriptor = { ru: "Для этого шага экшена не сохранены параметры формата. Откройте шаг двойным щелчком и нажмите «Сохранить заново…».", en: "No save-format parameters are stored for this action step. Open the step and click “Save again…”." },
    msgCreateFolder = { ru: "Не удалось создать каталог:\n%1", en: "Could not create folder:\n%1" },
    msgCaptureSave = { ru: "Photoshop выполнил сохранение, но не вернул параметры формата. Повторите «Сохранить заново…».", en: "Photoshop completed the save but did not return reusable format parameters. Run “Save again…” once more." },
    strErrPreset={ru: "Набор с именем \"%1\" уже существует. Перезаписать?", en: "A set with the name \"%1\" already exists. Overwrite?"}

var sysDiv = "/"; if ( $.os.search(/windows/i) != -1 ) {sysDiv='\\'}

var PRESET_KEY = GUID + "-presets";

var saveButtonID = 1;
var cancelButtonID = 2;
var settingsButtonID = 3;
var renew = false; // начальная загрузка, не тратить время на загрузку данных из элементов
var CFG = new Config();
var metadata = new Metadata();
var preset = new Preset();

var cacheFld = makeSmartSaveCache(); // кэш для настроек и значений каталогов
var cacheFle = makeSmartSaveCache(); // кэш для настроек и значений файлов

var descriptorKeys = [
    "newFolder", "path",
    "createSubFolder", "subFolderOpt",
    "renameFile", "renameFileOpt",
    "sequenceId", "replace", "preset"
]

function makeSmartSaveCache()
{
    var out = [];
    for (var i = 0; i < 10; i++) out.push(new cacheRecord("", ""));
    return out;
}

if (metadata.hasOwnProperty("doc")) main ()

function main ()
{
    var d, w, result, oldSequenceId, didSave

    if (!app.playbackParameters.count)
    {
        // normal run / action recording
        try {
            d = app.getCustomOptions(GUID)
            if (d != undefined) descriptorToObject(CFG, d, strMessage)
        } catch (e) {}

        initSeq()
        generateUUID()

        w = buildWindow(false)
        result = w.show()
        if (result == cancelButtonID) return 'cancel'

        if (!saveWithPhotoshopDialog()) return 'cancel'

        commitSeqState(true)
        d = objectToDescriptor(CFG, strMessage)
        app.putCustomOptions(GUID, d)
        app.playbackParameters = d
        return
    }

    // run/edit from Actions palette
    d = app.playbackParameters
    descriptorToObject(CFG, d, strMessage)

    if (app.playbackDisplayDialogs == DialogModes.ALL)
    {
        // double click / edit action step
        initSeq(true)
        oldSequenceId = CFG.sequenceId
        w = buildWindow(true)
        result = w.show()

        if (result == cancelButtonID) return 'cancel'
        didSave = result == saveButtonID
        if (didSave && !saveWithPhotoshopDialog()) return 'cancel'

        // "Save settings" changes only naming/path rules; "Save again" also refreshes save descriptor.
        if (oldSequenceId != "") {
            try { app.eraseCustomOptions(oldSequenceId) } catch (e) {}
            try { app.eraseCustomOptions(oldSequenceId + "_docID") } catch (e) {}
        }
        generateUUID()

        d = objectToDescriptor(CFG, strMessage)
        app.playbackParameters = d
        commitSeqState(didSave)
        return
    }

    // silent action playback
    initSeq()
    if (CFG.saveDescriptor == "") {
        alert(msgNoSaveDescriptor)
        return
    }

    if (saveWithStoredDescriptor()) {
        commitSeqState(true)
    }
}
////////////////////////////////////////////////////////////////////////////////////
// конструктор главного окна программы
///////////////////////////////////////////////////////////////////////////////////
function buildWindow (editMode)
{
var wn = new Window("dialog{orientation:'column',alignChildren:['fill','top'],spacing:10,margins:16}");
    wn.text = strMessage + " " + ver;

// PN1
// ===
var pn1 = wn.add("panel{orientation:'row',alignChildren:['left','center'],spacing:10,margins:10}");
    pn1.text = strFolderDest;

// left column: destination mode + browse
var gr1 = pn1.add("group{orientation:'row',alignChildren:['left','center'],spacing:10}");

var dl1_array = [strInSameFolder,strNewPath];
var dl1 = gr1.add("dropdownlist", undefined, dl1_array);
    dl1.preferredSize.width = 210;
var bn1 = gr1.add("button{preferredSize:[75,-1]}");
    bn1.text = strBrowse;

// right column: resolved path + stored Photoshop format
var gr2 = pn1.add("group{orientation:'row',alignChildren:['left','center'],spacing:8}");

var et1 = gr2.add("edittext{preferredSize:[300,-1],properties:{readonly:true}}");
var stFormatLabel = gr2.add("statictext", undefined, strFormat);
var stFormatValue = gr2.add("statictext{preferredSize:[110,-1]}");

var h = et1.preferredSize.height > dl1.preferredSize.height ? et1.preferredSize.height : dl1.preferredSize.height;

// =========================================
  // preset module
  // =========================================    
  var grPreset = wn.add("group{orientation:'row',alignChildren:['left','center'],spacing:10}");

  var dlPreset_array = [strDefailt];
  var dlPreset = grPreset.add("dropdownlist", undefined, undefined, { items: dlPreset_array });
  dlPreset.text = strSet
  dlPreset.preferredSize.width = 300

  var bnRefresh = grPreset.add("button{preferredSize:[30,-1]}");
  bnRefresh.text = strReload

  var bnSave = grPreset.add("button");
  bnSave.text = strPresetSave

  var bnSaveAs = grPreset.add("button");
  bnSaveAs.text = strPresetSaveAs

  var bnPresetDelete = grPreset.add("button");
  bnPresetDelete.text = strPresetDelete


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
var grEnableSubfolder = tb1.add("group{orientation:'row',alignChildren:['left','center'],spacing:10,margins:0}");

var ch2 = grEnableSubfolder.add("checkbox"); 
    ch2.text = strCreateSub; 

var grDivSubfolder = grEnableSubfolder.add("group"); 
var bnResetSubfolder = grEnableSubfolder.add("button",undefined, strReset); 
    //grDiv.preferredSize.width = 400

// GRENABLERENAMINGFILE
// =================
var grEnableFile = tb2.add("group{orientation:'row',alignChildren:['left','center'],spacing:10,margins:0}");

var ch3 = grEnableFile.add("checkbox"); 
    ch3.text = strRenameFile; 

    var grDivFile = grEnableFile.add("group");
    var bnResetFile = grEnableFile.add("button", undefined, strReset); 

// PNPREVIEW
// =========
var pnPreview = wn.add("panel{orientation:'column',alignChildren:['left','top'],spacing:10,margins:10}");
    pnPreview.text = strPreview;

var pnLabels = pnPreview.add("group{orientation:'row'}");
       
// GRTEXT
// ======
var grPreviewText = pnLabels.add("group{orientation:'column',alignChildren:['right','center'],spacing:10,margins:0}");

var stCurrentLabel = grPreviewText.add("statictext");
    stCurrentLabel.text = stCurFilename;

var stNewLabel = grPreviewText.add("statictext");
    stNewLabel.text = stNewFilname;

// GRLABELS
// ========
var grLabels = pnLabels.add("group{orientation:'column',alignChildren:['left','center'],spacing:10,margins:0}");

var stOld = grLabels.add("statictext{preferredSize:[350,-1]}");
    stOld.text = metadata.doc.name

var stNew = grLabels.add("statictext{preferredSize:[500,-1]}");

var ch4 =  pnPreview.add("checkbox"); 
ch4.text = strReplace

// GR9
// ===
var gr9 = wn.add("group{orientation:'row',alignChildren:['left','center'],spacing:10,margins:0,alignment:['center','top']}");

var bnSettings = null;
if (editMode) {
    bnSettings = gr9.add("button");
    bnSettings.text = strOkAlt;
}

var bnOk = gr9.add("button");
    bnOk.text = editMode ? strSaveAgain : strOk;

var bnCancel = gr9.add("button{properties:{name:'cancel'}}");
    bnCancel.text = strCancel;

// ======================================================
// preset functions
// ======================================================

dlPreset.onChange = function ()
{
  if (this.selection.index == 0)
  {
    bnPresetDelete.enabled = false
    
    if (renew)
    {
      var def = new Config

      var a = preset.putSettingsToArray (def)
      preset.putArrayToSettings (CFG, a)

      refreshWindow(true)
    }
  } else 
  {  
    bnPresetDelete.enabled = true

    if (renew)
    {
      var a = preset.getPreset (this.selection.text)
      preset.putArrayToSettings (CFG, a)

      refreshWindow(true)
    }
  }
    CFG.preset = this.selection.text
    if (wn.visible) {var d = objectToDescriptor(CFG, strMessage); app.putCustomOptions(GUID, d)}
    preset.checkPresetIntegrity(wn)
}

bnSave.onClick = function ()
{
  var a = preset.putSettingsToArray (CFG)
  var nm = dlPreset.selection.text
  preset.putPreset (nm, a, "save")

  var d = objectToDescriptor(CFG, strMessage); app.putCustomOptions(GUID, d)
  preset.checkPresetIntegrity(wn)
}

bnSaveAs.onClick = function ()
{
  var a = preset.putSettingsToArray (CFG),
  nm = prompt(strPresetPromt, dlPreset.selection.text + strCopy, strPreset);
  
  if (nm!=null && nm!="")
  {
    if (preset.getPreset (nm) =="" && nm != strDefailt) 
    {
      preset.putPreset (nm, a, "add")
      loadPresets ()

      renew = false;
      dlPreset.selection = dlPreset.find (nm)
      renew = true;
    } else 
    {
      if (nm != strDefailt) 
      {
        if (confirm (localize(strErrPreset,nm), false,strPreset))
        {
          preset.putPreset (nm, a, "save")

          renew = false;
          dlPreset.selection = dlPreset.find (nm)
          renew = true;
        } 
      }
    }
  }

  var d = objectToDescriptor(CFG, strMessage); app.putCustomOptions(GUID, d)
  preset.checkPresetIntegrity(wn)
}

bnPresetDelete.onClick = function ()
{
  var a = preset.putSettingsToArray (CFG)
  var nm = dlPreset.selection.text
  var num = dlPreset.selection.index

  preset.putPreset (nm, a, "delete")
  loadPresets ()

  num = num > dlPreset.items.length-1 ? dlPreset.items.length-1 : num
  dlPreset.selection = num

  var d = objectToDescriptor(CFG, strMessage); app.putCustomOptions(GUID, d)
  preset.checkPresetIntegrity(wn)
}

bnRefresh.onClick = function () {dlPreset.onChange()}


// ======================================================
// wimdow files functions
// ======================================================

    bnOk.onClick = function () { wn.close(saveButtonID) }
    if (bnSettings) bnSettings.onClick = function () { wn.close(settingsButtonID) }

    function setSaveButtonsEnabled(v) {
        bnOk.enabled = Boolean(v)
        if (bnSettings) bnSettings.enabled = Boolean(v) && CFG.saveDescriptor != ""
    }

dl1.onChange = function ()
{
    bn1.enabled = Boolean(this.selection.index)
    CFG.newFolder = Boolean(this.selection.index)

    if (!Boolean(this.selection.index))
    {
        if (metadata.curPath != "") {
            et1.text = metadata.curPath
            et1.helpTip = metadata.curPath
            setSaveButtonsEnabled(true)
        } else {
            et1.text = ""
            et1.helpTip = ""
            setSaveButtonsEnabled(false)
        }
    }
    else
    {
        if (CFG.path != "") {
            et1.text = CFG.path
            et1.helpTip = CFG.path
            setSaveButtonsEnabled(true)
        } else {
            bn1.onClick()
        }
    }
}

bn1.onClick = function ()
{
    var fol = new Folder (CFG.path)
    var userSelectedFolder = fol.selectDlg()
    if (userSelectedFolder) 
    {CFG.path = userSelectedFolder.fsName
       et1.text = CFG.path
       et1.helpTip = CFG.path
       setSaveButtonsEnabled(true)}
}

ch2.onClick = function ()
{
    CFG.createSubFolder = bnResetSubfolder.enabled = this.value

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
    CFG.renameFile = bnResetFile.enabled = this.value
    for (var i=1; i<tb2.children.length;i++) 
    {
        for (var x=0; x<tb2.children[i].children.length; x++)
        {
            tb2.children[i].children[x].enabled=this.value
         }
       
    }
    if (renew) collectSubfolderSettings(this.parent.parent)
 }

ch4.onClick = function () {CFG.replace = this.value; preset.checkPresetIntegrity(wn)}

bnResetSubfolder.onClick = function (){
    renew = false
    var len = tb1.children.length
    for (var i =1; i<len; i++) { tb1.remove (tb1.children[1])}
    CFG.subFolderOpt = "1"
    renew = true
    pnFolderAdd (tb1, CFG.subFolderOpt)
}

bnResetFile.onClick = function (){
    renew = false
    var len = tb2.children.length
    for (var i =1; i<len; i++) { tb2.remove (tb2.children[1])}
    CFG.renameFileOpt = "0"
    renew = true
    pnFolderAdd (tb2, CFG.renameFileOpt)
}

    function ensureDefaultRows() {
        if (typeof CFG.subFolderOpt != "string" || CFG.subFolderOpt == "") CFG.subFolderOpt = "1"
        if (typeof CFG.renameFileOpt != "string" || CFG.renameFileOpt == "") CFG.renameFileOpt = "0"
    }

    function refreshWindow(fromPreset) {
        var len, i, tmp, foundPreset

        renew = false
        ensureDefaultRows()

        if (!fromPreset) {
            loadPresets()
            foundPreset = CFG.preset != "" ? dlPreset.find(CFG.preset) : null
            dlPreset.selection = foundPreset != null ? foundPreset : 0
        }

        // Dynamic rows are rebuilt explicitly. Do not depend on Window.onShow:
        // in some Photoshop/ScriptUI versions it may run too late or not rebuild
        // controls created after the window resource has been parsed.
        len = tb1.children.length
        for (i = 1; i < len; i++) tb1.remove(tb1.children[1])
        len = tb2.children.length
        for (i = 1; i < len; i++) tb2.remove(tb2.children[1])

        tmp = CFG.subFolderOpt.split('#')
        for (i = 0; i < tmp.length; i++) pnFolderAdd(tb1, tmp[i])

        tmp = CFG.renameFileOpt.split('#')
        for (i = 0; i < tmp.length; i++) pnFolderAdd(tb2, tmp[i])

        if (tb1.children.length == 2) tb1.children[1].children[0].children[1].enabled = false
        if (tb2.children.length == 2) tb2.children[1].children[0].children[1].enabled = false

        if (CFG.path != "") dl1.selection = Number(CFG.newFolder)
        else dl1.selection = 0
        dl1.onChange()
        stFormatValue.text = getStoredFormatLabel()

        stNew.text = makePath(CFG.renameFileOpt, CFG.subFolderOpt)
        ch2.value = CFG.createSubFolder; ch2.onClick()
        ch3.value = CFG.renameFile; ch3.onClick()
        ch4.value = CFG.replace

        renew = true
        wn.layout.layout(true)

        // These spacer widths are cosmetic only; calculate them after layout exists.
        if (!fromPreset) {
            try {
                grDivSubfolder.preferredSize.width = tpn1.preferredSize.width - ch2.preferredSize.width - bnResetSubfolder.preferredSize.width - 50
                grDivFile.preferredSize.width = tpn1.preferredSize.width - ch3.preferredSize.width - bnResetFile.preferredSize.width - 50
            } catch (e) {}
        }
    }

    // Keep onShow only as a harmless fallback. Normal initialization is explicit below.
    var windowInitialized = false
    wn.onShow = function () {
        if (!windowInitialized) {
            refreshWindow(false)
            windowInitialized = true
        }
    }

    function loadPresets() {
        var len = dlPreset.items.length

        if (len > 1) {
            for (var i = 1; i < len; i++) { dlPreset.remove(dlPreset.items[1]) }
        }

        var items = preset.getPresetList()

        for (var i = 0; i < items.length; i++) { dlPreset.add('item', items[i].key) }
    }

////////////////////////////////////////////////////////////////////////////////////
// панель управления каталогами и 
// вложенные функции загруки подпанелей
///////////////////////////////////////////////////////////////////////////////////
function pnFolderAdd (parent, s)
{
    if (s == undefined || s == "") s = parent.text == strTabFile ? "0" : "1"

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

    var bnRowDelete = grBtn.add("button");
        bnRowDelete.text = "-";
        bnRowDelete.preferredSize.width = 30;
        bnRowDelete.justify = "center";

    // grFolder
    // ========
    var dlMode_array =[]
    if (parent.text ==strTabFile ) {dlMode_array = [strDoc,strSize,strDate,strText,strSubt,strSeq]} else {dlMode_array = [strDoc,strSize,strDate,strText,strSubt,strSubfolder]; }
    
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
         case 5: if (parent.text==strTabFile) {grSeqAdd (grFolder, s)} else {grSubfolderAdd (grFolder, s)}; break; 
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
     var cur, tmp, tmpCache, delLines
     var newArr = []
     // определяем, с какой строкой/массивом будем сейчас работать
     if (parent.text == strTabFile) {tmp = CFG.renameFileOpt; tmpCache = cacheFle} else {tmp = CFG.subFolderOpt; tmpCache = cacheFld}
     tmp = tmp.split('#')
    
     // ищем в каком ряду нажата кнопка
     for (var i=1; i<parent.children.length;i++) {if (parent.children[i]==grFolder) {cur = i+1; break}}
     
     //удаляем строки, расположенные ниже
     delLines = parent.children.length;
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

 bnRowDelete.onClick = function () {
     
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
        dropdown1.preferredSize.width =110; 
        dropdown1.helpTip = strTipUnits
        dropdown1.preferredSize.height = h
        
    var dim3 = [strRoundInt,strRoundDec,strRoundTwoDec]; 
    var dropdown3 = grOpt.add("dropdownlist", undefined, dim3); 
    dropdown3.helpTip =  strTipRound
    dropdown3.preferredSize.width = 140; 
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

var dropdown5_array = [strName,strLrName,strExt,strParent,strParentOfParent,strAuthor,strTitle,strCamera]; 
var dropdown5 = grOpt.add("dropdownlist", undefined, dropdown5_array); 
    dropdown5.selection = 0; 
    dropdown5.preferredSize.width = 150; 
    dropdown5.helpTip =  strTipPaste
    dropdown5.preferredSize.height = h
    
var dropdown6_array = [strOrigCase,strUCase,strLCase]; 
var dropdown6 = grOpt.add("dropdownlist", undefined, dropdown6_array); 
    dropdown6.selection = 0; 
    dropdown6.preferredSize.width = 110; 
    dropdown6.helpTip =  strTipCase
    dropdown6.preferredSize.height = h
    
var dropdown7_array = [strOrig, strLetters,strDigits,strLat,strCyr,strTranslitFoward,strTranslitBackward]; 
var dropdown7 = grOpt.add("dropdownlist", undefined, dropdown7_array); 
    dropdown7.selection = 0; 
    dropdown7.preferredSize.width = 140; 
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
    edittext1.preferredSize.width = 270;
    edittext1.preferredSize.height = h;
    
    edittext1.helpTip =  strTipPaste

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
    dropdown9.preferredSize.width = 110; 
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

var stSearch = grOpt.add("statictext");
    stSearch.text = strSearch;
    stSearch.preferredSize.width = 40;
    
var edittext2 = grOpt.add("edittext");
    edittext2.preferredSize.width = 100;
    edittext2.preferredSize.height = h;
    edittext2.helpTip = strTipSearchLine
    
var dropdown12_array = [strReplaced,strAddToBegin,strAddToEnd]; 
var dropdown12 = grOpt.add("dropdownlist", undefined, dropdown12_array); 
    dropdown12.selection = 0; 
    dropdown12.preferredSize.width = 125; 
    dropdown12.helpTip = strTipAction
    dropdown12.preferredSize.height = h
    
var edittext3 = grOpt.add("edittext");
    edittext3.preferredSize.width = 125;
    edittext3.preferredSize.height = h;
    edittext3.helpTip = strTipPaste
    
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
    edittext2.preferredSize.height = h;
    edittext2.helpTip = strTipBegin
    edittext2.label = "seq"
    
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
     this.text = this.text.replace(/[^0-9]/g, "");
     if (this.text.length>5) this.text=this.text.substr (0, 5)
     if (renew) collectSubfolderSettings(grOpt.parent.parent)
     }

   loadSubPanel (s, grOpt)
   
if (renew) {wn.layout.layout (true);collectSubfolderSettings(grOpt.parent.parent)}
    
}  

////////////////////////////////////////////////////////////////////////////////////
//  подпанель подкаталога
///////////////////////////////////////////////////////////////////////////////////

function grSubfolderAdd (parent, s)
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
    edittext1.preferredSize.width = 270;
    edittext1.preferredSize.height = h;
    
    edittext1.onChanging = function () {if (renew) collectSubfolderSettings(grOpt.parent.parent)}
    loadSubPanel (s, grOpt)
    
if (renew) {wn.layout.layout (true); collectSubfolderSettings(grOpt.parent.parent) }
}


// Build dynamic editor rows before Window.show(). This restores the original
// default/preset behavior without requiring the user to press Reset.
refreshWindow(false)
windowInitialized = true

return wn
}
 
////////////////////////////////////////////////////////////////////////////////////
// управление настройками программы
///////////////////////////////////////////////////////////////////////////////////

function Config () 
{
    this.newFolder = false
    this.path = ""
    this.subFolderOpt = "1"
    this.createSubFolder = false
    this.renameFile = true
    this.renameFileOpt = "0"
    this.sequenceId = ""
    this.replace = true
    this.preset = ""
    this.saveDescriptor = ""
}

function objectToDescriptor (o, s) 
{
    var d = new ActionDescriptor
    d.putString(app.charIDToTypeID('Msge'), s)

    for (var i = 0; i < descriptorKeys.length; i++) {
        var propName = descriptorKeys[i];
        if (!o.hasOwnProperty(propName)) continue;
        var propValue = o[propName];
        var keyID = app.stringIDToTypeID(propName);
        switch (typeof(propValue)) {
            case "boolean": d.putBoolean(keyID, propValue); break;
            case "string": d.putString(keyID, propValue); break;
            case "number": d.putInteger(keyID, propValue); break;
        }
    }

    // Readable summary first, then the internal reusable Photoshop save data.
    d.putString(app.stringIDToTypeID("saveFormat"), getStoredFormatLabelText())
    d.putString(app.stringIDToTypeID("saveDescriptor"), o.saveDescriptor)
    return d
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
		var strk = app.typeIDToStringID(k);
        if (!o.hasOwnProperty(strk)) continue;
		switch (t) {
			case DescValueType.BOOLEANTYPE:
				o[strk] = d.getBoolean(k);
				break;
			case DescValueType.STRINGTYPE:
				o[strk] = d.getString(k);
				break;
			case DescValueType.INTEGERTYPE:
				o[strk] = d.getInteger(k);
				break;
		}
      //  $.writeln ('get ' + typeof(o[strk]) + ' "' + strk  +'": ' + o[strk])
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
                if (s[i+1]!=undefined) {parent.children[i].text = String (s[i+1])} else {if (parent.children[i].label == "seq") {parent.children[i].text = "0"}}
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
        {CFG.renameFileOpt = s} 
        else {CFG.subFolderOpt=s}
        
        parent.parent.parent.children[3].children[0].children[1].children[1].text = makePath (CFG.renameFileOpt, CFG.subFolderOpt)
        
        preset.checkPresetIntegrity(parent.parent.parent)

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
                if (parent.parent.children[1].selection.index != 5)    
                {
                    s=s+parent.children[i].text.replace(/[:\/\\*\?\"\<\>\|\#]/g, "_")   + '|'    
                 } else
                    {   
                        var tmp = ""
                        if ( $.os.search(/windows/i) != -1 ) 
                        {tmp=parent.children[i].text.replace(/[:\/*\?\"\<\>\|\#]/g, "_")
                         tmp = tmp.replace(/\\+/g, '$1\\')
                         } 
                        else {
                            tmp=parent.children[i].text.replace(/[:\\\*\?\"\<\>\|\#]/g, "_")
                            tmp = tmp.replace(/\/+/g, '$1/')
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
         case 5: if (cached[i].s !="" && useCache) {c+=cached[i].s} else { cache = (cached == cacheFle) ? grpSeq(tmp) : grSubfolder(tmp); c += cache; cached[i].s = cache; cached[i].arg = s[i]}; break;
         }
     
        useCache = false
    }

// имя
function grName (s)
{
    var c = ""
        switch (Number(s[1]))  
        {
            case 0: c= metadata.curFilename; break;
            case 1: c =metadata.lrName; break;
            case 2: c = getPreferredSaveExtension(); break;
            case 3: c =metadata.parentPath; break;
            case 4: c =metadata.parentOfParentPath; break;
            case 5: c =metadata.author; break;
            case 6: c =metadata.title; break;
            case 7: c =metadata.camera; break;
        }
    
        switch (Number(s[2]))  
        {
            case 1: c= c.toUpperCase(); break;
            case 2: c =c.toLowerCase(); break;
        }
    
            switch (Number(s[3]))  
        {
            case 1: c =trim(c.replace(/[^ А-Яа-яЁёA-Za-z]/g, "")); break;
            case 2: c =trim(c.replace(/[^0-9]/g, "")); break;    
            case 3: c =trim(c.replace(/[^ A-Za-z]/g, "")); break;
            case 4: c =trim(c.replace(/[^ А-Яа-яЁё]/g, "")); break;
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
    var c = ""
    try {
        app.preferences.rulerUnits = units

        var a = metadata.doc.width
        var b = metadata.doc.height
        switch (Number (mode))
        {
            case 0: if (a.value > b.value) {c = round (a, div) + 'x' + round (b, div)} else {c = round (b, div) + 'x' + round (a, div)}; break;
            case 1: if (a.value < b.value) {c = round (a, div) + 'x' + round (b, div)} else {c = round (b, div) + 'x' + round (a, div)}; break;
            case 2: c = round (a, div) + 'x' + round (b, div); break;
            case 3: c = round (a, div); break;
            case 4: c = round (b, div); break;
            case 5: if (units == Units.CM) {c = round(metadata.doc.resolution,div)} else {c = round(metadata.doc.resolution/2.54,div)}; break;
        }
    } finally {
        app.preferences.rulerUnits = oldPref
    }

    function round (val, precisionMode)
    {
        var tmp
        if (val instanceof UnitValue) {val=val.value}
        switch (Number (precisionMode))
        {
            case 0: return Math.round (val); break;
            case 1: 
                tmp = String(Math.round (val*10)/10)
                if (tmp.indexOf (".") == -1 && tmp.indexOf (",") == -1) tmp += ".0"
                return tmp
                break;
            case 2: 
                tmp = String(Math.round (val*100)/100)
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
    var dateValue
    switch (Number (s[1]))
    {
        case 0: getDt (metadata.created, dt); break;
        case 1: getDt (metadata.modified, dt); break;
        case 2: dateValue = new Date; getDt(dateValue, dt); break;
        case 3: dateValue = new Date; dateValue.setDate(Number(dateValue.getDate()-1)); getDt(dateValue, dt); break;
        case 4: dateValue = new Date; dateValue.setDate(Number(dateValue.getDate()+1)); getDt(dateValue, dt); break;
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
        case 9:  c=c.concat (dt.hh,div,dt.ss); break;
        case 10:  c=dt.YY; break;
        case 11:  c=dt.MM; break;
        case 12:  c=dt.DD; break;
        case 13:  c=dt.hh; break;
        case 14:  c=dt.mm; break;
        case 15:  c=dt.ss; break;
     }
 
 function getDt (sourceDate, d)
 {
     d.YY = String(Number(sourceDate.getYear()) + 1900)
     d.MM = String(Number(sourceDate.getMonth()) + 1); if (d.MM.length==1) d.MM = "0" + d.MM
     d.DD = String(sourceDate.getDate()); if (d.DD.length==1) d.DD = "0" + d.DD
     d.hh = String(sourceDate.getHours()); if (d.hh.length==1) d.hh = "0" + d.hh
     d.mm = String(sourceDate.getMinutes()); if (d.mm.length==1) d.mm = "0" + d.mm
     d.ss = String(sourceDate.getSeconds()); if (d.ss.length==1) d.ss = "0" + d.ss
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

//замена
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

//подкаталог
function grSubfolder (s)
{
    var c=""
    s[1] = s[1]==undefined ? "" :s[1]
    c = sysDiv + s[1] + sysDiv
    return c
 }

return c
}


function makePath (fle, fld)
{
    
    var s = ""
    
    fle = createName (fle, cacheFle)
    fld = createName (fld, cacheFld)
    
    if (fle == "" || CFG.renameFile == false ) fle = metadata.curFilename
    if (fld != "") {fld = fld  + sysDiv}
    
    var ext = getPreferredSaveExtension()
    var suffix = ext != "" ? "." + ext : ""
    if (CFG.createSubFolder) {s=fld + fle + suffix} else {s=fle + suffix}
    if ( $.os.search(/windows/i) != -1 ) {s=s.replace(/\\+/g, '$1\\')} else {s=s.replace(/\/+/g, '$1/')}
    if ( $.os.search(/windows/i) != -1 ) {s=s.replace(/^\\+/, '')} else {s=s.replace(/^\/+/g, '')}  

    return s
}
function Metadata ()
{
    try {var doc = app.activeDocument } catch (e) {return}
    this.doc = doc
    this.curFilename = doc.name.lastIndexOf(".") != -1 ? doc.name.substr(0, doc.name.lastIndexOf(".")) : doc.name //curFilename
    try { this.curPath = doc.path.fsName } catch (e) { this.curPath = "" }  //curPath
    this.curExt = doc.name.lastIndexOf(".") != -1 ? doc.name.substr(doc.name.lastIndexOf(".") + 1) : "" //curExt
    this.lrName = doc.activeLayer.name //lrName
    var pth = []
    try {pth = doc.path.fsName.replace(":","").split(sysDiv)} catch (e) {}
    var shift = pth[pth.length - 1] == "" ? 1 : 0
    this.parentPath = pth.length >= 1+shift ? pth[pth.length - (1 +shift)] : ""//parentPath
    this.parentOfParentPath =  pth.length >= 2+shift ? pth[pth.length - (2+shift)] : ""  //parent of parent
    this.author = doc.info.author || ""    //author
    this.title = doc.info.title || "" // title
    this.camera = ""
    try {
        for (var i = 0; i < doc.info.exif.length; i++) {
            var tmp = doc.info.exif[i]
            if (tmp[0] == "Model") { this.camera = tmp[1] || ""; break }
        }
    } catch (e) {} //camera
    try { var fl = File(doc.fullName); this.created = fl.created; this.modified = fl.modified } catch (e) { this.created = this.modified = new Date } //created  //modified
}

// проверка и инкремент счетчиков
function initSeq (editMode)
{
      //app.eraseCustomOptions(String(GUID));
         var tmp = CFG.renameFileOpt.split ('#')
         var s = ""
         var found = false
         var seq =[]
         
         for (var i =0; i<tmp.length; i++) {seq = tmp[i].split ('|'); if (seq[0] == "5") {found = true; break}}
            
         if (found) 
         {
             if (getSeqSettings (String(CFG.sequenceId)) !="") 
                    {tmp = getSeqSettings (String(CFG.sequenceId)).split ('#')}
             else {tmp = CFG.renameFileOpt.split ('#')}
                 
                 for (var i =0; i<tmp.length; i++)
                 {
                     seq = tmp[i].split ('|')
                     
                     if (seq[0] == "5" && editMode!=true)
                     {
                         switch (Number (seq[3]))
                         {
                             case 0: seq[1]= Number(seq[1])+1; break;
                             case 1: if (String(metadata.doc.id) != getSeqSettings(String(CFG.sequenceId) + "_docID")) {seq[1]= Number(seq[1])+1}; break;
                          }    
                             if (seq[1]==100000) seq[1] = 0
                      } 

                        for (var x=0; x<seq.length-1; x++) {s += seq[x] + '|'}
                        s += seq[seq.length-1] + '#'   
                 }
                s = s.substr (0, s.length-1)
                
                CFG.renameFileOpt = s             
          } 
 }

function saveWithPhotoshopDialog()
{
    var target = buildTargetFile()
    if (!target) return false

    // Prefer Save a Copy semantics. In older Photoshop versions the same save event
    // may expose only the legacy Save As workflow. If copy mode itself fails, retry
    // interactively without the copy flag and remember that mode for action playback.
    var d = CFG.saveDescriptor != "" ? descriptorFromBase64(CFG.saveDescriptor) : new ActionDescriptor()
    prepareSaveDescriptor(d, target, true)

    var result
    var mode = "copy"
    try {
        result = executeAction(s2t("save"), d, DialogModes.ALL)
    } catch (e) {
        if (isUserCancel(e)) return false

        var fallback = CFG.saveDescriptor != "" ? descriptorFromBase64(CFG.saveDescriptor) : new ActionDescriptor()
        prepareSaveDescriptor(fallback, target, false)
        try {
            result = executeAction(s2t("save"), fallback, DialogModes.ALL)
            mode = "saveAs"
        } catch (e2) {
            if (isUserCancel(e2)) return false
            throw e2
        }
    }

    var captured = hasSaveFormat(result) ? result : null
    if (!captured) {
        alert(msgCaptureSave)
        return false
    }

    prepareStoredSaveDescriptor(captured, mode == "copy")
    CFG.saveDescriptor = descriptorToBase64(captured)
    return true
}

function saveWithStoredDescriptor()
{
    if (CFG.saveDescriptor == "") {
        alert(msgNoSaveDescriptor)
        return false
    }

    var target = buildTargetFile()
    if (!target) return false

    var d = descriptorFromBase64(CFG.saveDescriptor)
    var useCopy = descriptorUsesCopy(d)
    prepareSaveDescriptor(d, target, useCopy)

    // Do not retry a silent action save with another method: an error here can mean
    // a bad path, permissions, disk space, etc. Falling back could unexpectedly rebind
    // the open document to a new file. The fallback is selected only during interactive capture.
    executeAction(s2t("save"), d, DialogModes.NO)
    return true
}

function prepareSaveDescriptor(d, target, useCopy)
{
    // Remove document-specific values captured by Photoshop; keep format/options and replace only destination.
    try { d.erase(s2t("documentID")) } catch (e) {}
    try { d.erase(s2t("saveStage")) } catch (e) {}
    d.putPath(s2t("in"), target)
    try { d.erase(s2t("copy")) } catch (e) {}
    if (useCopy) d.putBoolean(s2t("copy"), true)
}

function prepareStoredSaveDescriptor(d, useCopy)
{
    // The interactive Save dialog is used only to capture the format and its options.
    // Never persist the folder/file chosen there: playback always builds its own target path.
    try { d.erase(s2t("documentID")) } catch (e) {}
    try { d.erase(s2t("saveStage")) } catch (e) {}
    try { d.erase(s2t("in")) } catch (e) {}
    try { d.erase(s2t("copy")) } catch (e) {}
    if (useCopy) d.putBoolean(s2t("copy"), true)
}

function descriptorUsesCopy(d)
{
    try {
        var key = s2t("copy")
        return d.hasKey(key) && d.getBoolean(key)
    } catch (e) { return false }
}

function hasSaveFormat(d)
{
    try { return d != undefined && d.count > 0 && d.hasKey(s2t("as")) } catch (e) { return false }
}

function buildTargetFile()
{
    var parentPath = ""
    var newPath = createName(CFG.subFolderOpt, cacheFld)

    if (CFG.newFolder == true && CFG.path != "") parentPath = CFG.path
    else parentPath = metadata.curPath

    if (parentPath == "") {
        alert(msgSave)
        return null
    }

    if (CFG.createSubFolder && newPath != "") parentPath += sysDiv + newPath
    if (!ensureFolder(parentPath)) throw new Error(localize(msgCreateFolder, parentPath))

    var targetName = createName(CFG.renameFileOpt, cacheFle)
    if (targetName == "" || CFG.renameFile == false) targetName = metadata.curFilename
    targetName = sanitizeFileName(targetName)

    return File(CreateUniqueFileName(parentPath, targetName, getPreferredSaveExtension()))
}

function ensureFolder(path)
{
    var fld = new Folder(path)
    if (fld.exists) return true

    var parent = fld.parent
    if (parent && !parent.exists && parent.fsName != fld.fsName) {
        if (!ensureFolder(parent.fsName)) return false
    }
    return fld.create() || fld.exists
}

function CreateUniqueFileName(inParentPath, inFileName, inFileExt)
{
    var fld = new Folder(inParentPath)
    var parent = fld.fsName
    var suffix = inFileExt != "" ? "." + inFileExt : ""
    var uniqueFileName = parent + sysDiv + inFileName + suffix

    if (CFG.replace == false) {
        var fileNumber = 1
        while (File(uniqueFileName).exists) {
            uniqueFileName = parent + sysDiv + inFileName + "_" + fileNumber + suffix
            fileNumber++
        }
    }
    return uniqueFileName
}

function sanitizeFileName(s)
{
    s = String(s).replace(/[\\\/:*?"<>|]/g, "_")
    if ($.os.search(/windows/i) != -1) s = s.replace(/[ .]+$/, "")
    return s == "" ? "untitled" : s
}

function getPreferredSaveExtension()
{
    var ext = getStoredSaveExtension()
    return ext != "" ? ext : metadata.curExt
}

function getStoredSaveExtension()
{
    if (CFG.saveDescriptor == "") return ""
    try {
        var d = descriptorFromBase64(CFG.saveDescriptor)
        var info = getFormatInfo(d)
        if (info.ext != "") return info.ext

        var key = s2t("in")
        if (d.hasKey(key)) {
            var f = d.getPath(key)
            var n = f.name
            var pos = n.lastIndexOf(".")
            if (pos > 0 && pos < n.length - 1) return n.substr(pos + 1).toLowerCase()
        }
        return ""
    } catch (e) { return "" }
}

function getStoredFormatLabel()
{
    if (CFG.saveDescriptor == "") return strNotSet
    try {
        var info = getFormatInfo(descriptorFromBase64(CFG.saveDescriptor))
        if (info.label != "") return info.label
        var ext = getStoredSaveExtension()
        return ext != "" ? ext.toUpperCase() : strNotSet
    } catch (e) { return strNotSet }
}

function getStoredFormatLabelText()
{
    var label = getStoredFormatLabel()
    try { return localize(label) } catch (e) { return String(label) }
}

function getFormatInfo(d)
{
    var out = {label:"", ext:""}
    try {
        var key = s2t("as")
        if (!d.hasKey(key)) return out
        var id = d.getObjectType(key)
        var raw = ""
        try { raw = typeIDToStringID(id) } catch (e) {}
        if (raw == "") try { raw = typeIDToCharID(id) } catch (e) {}

        var map = {
            "JPEG": ["JPEG", "jpg"],
            "JPEGFormat": ["JPEG", "jpg"],
            "PNGFormat": ["PNG", "png"],
            "TIFF": ["TIFF", "tif"],
            "photoshop35Format": ["PSD", "psd"],
            "largeDocumentFormat": ["PSB", "psb"],
            "PDFGenericFormat": ["Photoshop PDF", "pdf"],
            "CompuServeGIF": ["GIF", "gif"],
            "BMP": ["BMP", "bmp"],
            "BMPFormat": ["BMP", "bmp"],
            "webPFormat": ["WebP", "webp"]
        }
        if (map[raw]) { out.label = map[raw][0]; out.ext = map[raw][1] }
        else out.label = raw
    } catch (e) {}
    return out
}

function descriptorToBase64(d)
{
    return base64Encode(d.toStream())
}

function descriptorFromBase64(s)
{
    var d = new ActionDescriptor()
    d.fromStream(base64Decode(s))
    return d
}

function base64Encode(input)
{
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    var out = "", i = 0
    while (i < input.length) {
        var c1 = input.charCodeAt(i++) & 255
        var c2 = i < input.length ? input.charCodeAt(i++) & 255 : NaN
        var c3 = i < input.length ? input.charCodeAt(i++) & 255 : NaN
        out += chars.charAt(c1 >> 2)
        out += chars.charAt(((c1 & 3) << 4) | (isNaN(c2) ? 0 : (c2 >> 4)))
        out += isNaN(c2) ? "=" : chars.charAt(((c2 & 15) << 2) | (isNaN(c3) ? 0 : (c3 >> 6)))
        out += isNaN(c3) ? "=" : chars.charAt(c3 & 63)
    }
    return out
}

function base64Decode(input)
{
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    var out = "", i = 0
    input = String(input).replace(/[^A-Za-z0-9\+\/\=]/g, "")
    while (i < input.length) {
        var e1 = chars.indexOf(input.charAt(i++))
        var e2 = chars.indexOf(input.charAt(i++))
        var c3ch = input.charAt(i++)
        var c4ch = input.charAt(i++)
        var e3 = c3ch == "=" ? 64 : chars.indexOf(c3ch)
        var e4 = c4ch == "=" ? 64 : chars.indexOf(c4ch)

        var b1 = (e1 << 2) | (e2 >> 4)
        out += String.fromCharCode(b1 & 255)
        if (e3 != 64) {
            var b2 = ((e2 & 15) << 4) | (e3 >> 2)
            out += String.fromCharCode(b2 & 255)
        }
        if (e4 != 64) {
            var b3 = ((e3 & 3) << 6) | e4
            out += String.fromCharCode(b3 & 255)
        }
    }
    return out
}

function isUserCancel(e)
{
    return e && (e.number == 8007 || e.number == -128)
}

function cacheRecord (arg, s)
{
    
    this.arg = arg
    this.s=s 
    
    return
}

function generateUUID () {
     CFG.sequenceId =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
            var r = Math.random() * 16 | 0;
            return ( c == 'x' ? r : ( r & 0x3 | 0x8 ) ).toString( 16 );
        } );
    }

    function s2t(s) {return stringIDToTypeID(s)}
    function t2s(s) {return typeIDToStringID(s)}

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

function commitSeqState (savedDocument)
{
    putSeqSettings(CFG.sequenceId, CFG.renameFileOpt)
    if (savedDocument) putSeqSettings(String(CFG.sequenceId) + "_docID", String(metadata.doc.id))
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

function Preset() {

    this.putPreset = function (key, val, mode) {
        var output = this.getPresetList()

        switch (mode) {
            case "add":
                output.push({ key: key, val: val })
                break;
            case "save":
                for (var i = 0; i < output.length; i++) {
                    if (output[i].key == key) { output[i].val = val; break; }
                }
                break;
            case "delete":
                for (var i = 0; i < output.length; i++) {
                    if (output[i].key == key) { output.splice(i, 1); break; }
                }
                break;
        }

        app.eraseCustomOptions(PRESET_KEY)

        var d = new ActionDescriptor();
        for (var i = 0; i < output.length; i++) { d.putString(s2t(output[i].key), output[i].val) }

        app.putCustomOptions(PRESET_KEY, d);
    }

    this.getPreset = function (key) {
        try {
            var d = app.getCustomOptions(PRESET_KEY);
            return d.getString(s2t(key))
        } catch (e) { return "" }
    }

    this.getPresetList = function () {
        var output = []
        try {
            var d = app.getCustomOptions(PRESET_KEY);

            for (var i = 0; i < d.count; i++) { output.push({ key: t2s(d.getKey(i)), val: d.getString(d.getKey(i)) }) }
        } catch (e) { }

        return output.sort(sortPresets)
    }

    function sortPresets(a, b) {
        if (a.key == b.key) return 0
        return a.key > b.key ? 1 : -1
    }

    this.putSettingsToArray = function (s) {

        var arr = [s.subFolderOpt, s.createSubFolder, s.renameFile, s.renameFileOpt, s.replace]
        return arr.join('\v')
    }

    this.putArrayToSettings = function (s, arr) {
        var a = arr.split('\v')

        s.subFolderOpt = String(a[0])
        s.createSubFolder = a[1] == "true" ? true : false
        s.renameFile = a[2] == "true" ? true : false
        s.renameFileOpt = String(a[3])
        s.replace = a[4] == "true" ? true : false
    }

    this.checkPresetIntegrity = function (wnd) {

        var dlPreset = wnd.children[1].children[0]
        var bnRefresh = wnd.children[1].children[1]
        var bnSave = wnd.children[1].children[2]

        if (dlPreset.selection.index > 0) {
            var cur = preset.putSettingsToArray(CFG)
            var old = preset.getPreset(dlPreset.selection.text)
            bnRefresh.enabled = bnSave.enabled = cur == old ? false : true
        } else { bnSave.enabled = false; bnRefresh.enabled = true }
    }
}

})();
