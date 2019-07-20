# THIS PROJECT IS DEPRECATED

This project is no longer maintained

coops-ckplugins
===============
This is a set of plugins that provide CoOps implementation for CKEditor (https://github.com/foyt/coops-spec/).

CoOps turns CKEditor into collaborative real-time rich-text editor that allows multiple users to edit simultaneously same text document.

Installation
---

1. Download required plugins:

    * [http://ckeditor.com/addon/coops](http://ckeditor.com/addon/coops)
    * [http://ckeditor.com/addon/change](http://ckeditor.com/addon/change)
    * [http://ckeditor.com/addon/coops-connector](http://ckeditor.com/addon/coops-connector)
    * [http://ckeditor.com/addon/coops-dmp](http://ckeditor.com/addon/coops-dmp)
    * [http://ckeditor.com/addon/coops-cursors](http://ckeditor.com/addon/coops-cursors) (optional)

2. Extract zip files into plugins folder of your CKEditor installation.

    *e.g. /var/www/example.com/ckeditor/plugins/*


3. Enable plugins by adding them into extraPlugins configuration setting. 

        config.extraPlugins = 'coops,coops-connector,coops-dmp,coops-cursors';

4. Change editor to be readOnly by default

        config.readOnly = true;
    
5. Configure CoOps server url

        coops: {
          serverUrl: [SERVER_URL]
        }  

  
