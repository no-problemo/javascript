## jsonList ##

MENAMPILKAN DATA JSON DALAM BENTUK HTML-LIST :<br>

    jsonList(json,holder,callback,branchOnly);
**json :** data json misal : var json={root-level1:{branch-level2:{branch-level3:{leaf-level4:0}}}} <br>
**holder :** tempat u/ meletakkan html-list nya misal : &lt;div id="holder" >&lt;/div> <br>
**callback :** fungsi yang dipanggil ketika item di html-list diklik misal : jsonList(json,holder,function(path){/* skrip \*/}); path berupa array , misal item leaf-level4 diklik maka isi path : [root-level1,branch-level2,branch-level3,leaf-level4] <br>
**branchOnly :**(optional) hanya menampilkan branch nya saja / tidak menampilkan leaf nya, misal : jsonList(json,holder,function(path){/* skrip \*/},1); <br><br>
contoh penerapan jsonList di file jsonList.htm <br>
**[demo](http://jsfiddle.net/j33hrtpm/ "jsonList demo")**
