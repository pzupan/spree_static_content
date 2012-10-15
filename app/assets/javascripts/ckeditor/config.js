/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
  config.PreserveSessionOnFileBrowser = true;
  // Define changes to default configuration here. For example:
  config.language = 'en';
  // config.uiColor = '#AADC6E';

  //config.ContextMenu = ['Generic','Anchor','Flash','Select','Textarea','Checkbox','Radio','TextField','HiddenField','ImageButton','Button','BulletedList','NumberedList','Table','Form'] ; 
  
  config.height = '400px';
  config.width = '600px';
  
  //config.resize_enabled = false;
  //config.resize_maxHeight = 2000;
  //config.resize_maxWidth = 750;
  
  //config.startupFocus = true;
  
  // works only with en, ru, uk languages
  config.extraPlugins = "embed,attachment";
  
  // Protect <% %> statements
  // config.entities = false;
  config.protectedSource.push( /<%[\s\S]*?%>/g );

    config.toolbar = 'SpreePages';
 
    config.toolbar_SpreePages =
    [
    ['Source', '-','Preview','-','Templates'],
    ['Cut','Copy','Paste','PasteText','PasteFromWord','-', 'SpellChecker', 'Scayt'],
    ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
    '/',
    ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
    ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
    ['BidiLtr', 'BidiRtl'],
    ['Link','Unlink','Anchor'],
    ['Image','Table','HorizontalRule','SpecialChar','PageBreak','Iframe'],
    '/',
	['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
    ['Styles','Format','Font','FontSize'],
    ['TextColor','BGColor'],
    ['Maximize', 'ShowBlocks']
    ];
};

