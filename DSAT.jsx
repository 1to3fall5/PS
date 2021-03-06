//////////////////////////////////////////////////////////////////////
// savePSD and TGA										| 3/20/2009	//
//		by Chris "Funky Bunnies" Whitaker				============//
// https://www.funkybunnies3d.com/tools.php#savePSD+TGA				//
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//简化了原作者的脚本，不跳弹窗只保存为TGA文件并覆盖原TGA文件		//
//保存位置为PSD文件所在位置											//
//==================================================================//
//安装												
//------------------------------------------------------------------//
//	1-将脚本放入Program Files/Adobe/Photoshop/Presets/Scripts       //
//	2-重新打开PS													//
//	3-选择File->Scripts->Save as TGA使用脚本
//------------------------------------------------------------------//
//快捷键
//------------------------------------------------------------------//
//在 Edit->Keyboard Shortcuts->Application Menus->File->Script 中
//找到Save as TGA 并设置所需的快捷键即可
//////////////////////////////////////////////////////////////////////
#target photoshop
app.bringToFront();
main();
function main()
{	var activeDoc = app.activeDocument;
	var tgaPath;
	var initDlgDisplay = app.displayDialogs;
	
	tgaPath = (activeDoc.path);
	if(activeDoc.channels.length >3)
			TargaSaveOptions.resolution = TargaBitsPerPixels.THIRTYTWO;
	else
			TargaSaveOptions.resolution = TargaBitsPerPixels.TWENTYFOUR;
	//Okay to default to always alpha channels because bits will determine if alpha saved or not
	TargaSaveOptions.alphaChannels = true;
	TargaSaveOptions.rleCompression=false
	//turn off dialogs real quick so the damn thing doesn't pop up when saving
	app.displayDialogs = DialogModes.NO;
	activeDoc.saveAs(new File(tgaPath), TargaSaveOptions, false, Extension.NONE);
	app.displayDialogs = initDlgDisplay;
}
