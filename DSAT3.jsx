var activeDoc = app.activeDocument;
var tgaPath = File.saveDialog();
app.displayDialogs = DialogModes.NO;

var targaOptions = new TargaSaveOptions();
targaOptions.resolution = TargaBitsPerPixels.THIRTYTWO;

activeDoc.saveAs(new File(tgaPath), targaOptions, true, Extension.LOWERCASE);

app.displayDialogs = DialogModes.ALL;
