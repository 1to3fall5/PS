var activeDoc = app.activeDocument;
var tgaPath = File.saveDialog();
app.displayDialogs = DialogModes.NO;
activeDoc.saveAs(new File(tgaPath), TargaSaveOptions, false, Extension.NONE);
app.displayDialogs = initDlgDisplay;
