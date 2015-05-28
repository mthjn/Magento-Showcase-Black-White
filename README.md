### magento
#### Magento simple template
  
##### [Read the README_dubloo for the frontend dev stuff.](https://github.com/mthjn/magento/blob/master/README_dubloo.md)  
  
**Magento simple template black and white**   
  
simple template based on the responsive magento default theme.
this archives the whole instalation. just in case shit goes south.
  
  
**To Do**  
  
*populate right sidebar*  
*get slider extension*  
get different than default sprite/icons
better product listing
   
   
### dev notes
   
   
**Showcase with login data**  
Remove user changes every X hours  
Copy src and dump db.  
A cronjob to remove the current folder.  
  
    SOURCE dumpfile.sql;
   
https://dev.mysql.com/doc/refman/5.6/en/mysqldump.html  
https://dev.mysql.com/doc/refman/5.6/en/mysql-batch-commands.html  
   
   
**Add PopUp**  
app/design/frontend of a theme: add js into block name head

      <action method="addItem"><type>js</type><name>prototype/window.js</name></action>
      <action method="addItem"><type>js_css</type><name>prototype/windows/themes/default.css</name></action>
      <action method="addItem"><type>js_css</type><name>prototype/windows/themes/magento.css</name></action>
  
add js into footer or better as a custom block via a xml file.
      
      
   
        ...
        PopUp = new Window({
        id: 'omg',
        className:'PopUp',
        destroyOnClose: true,
        url: 'http://localhost/sandbox/pop/',
        width:500,
        height:300,
        minimizable:true,
        maximizable:false,
        showEffectOptions:{duration:0.4},
        hideEffectOptions:{duration:0.4}});
        PopUp.setZIndex(1);
        PopUp.showCenter(true);
        }
        //window.onload = showPopUp();
        ...
          
        
must be a valid url with the actual content. sort out how to close the window nicely.  
    
**Bugs**   
this.parentNode.style.display = 'none'; makes the site unclickable  
