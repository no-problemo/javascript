## jsonList ##

MENAMPILKAN DATA JSON DALAM BENTUK HTML-LIST :<br>

    jsonList(json,holder,callback,branchOnly);
**json :** data json misal : var json={root-level1:{\_:1,branch-level2:{\_:1,branch-level3:{\_:1,leaf-level4:0}}}} , _:1 property _ tidak ditampilkan karena dipakai u/ menyimpan informasi keadaan expand(1) / collapse(0) <br>
**holder :** tempat u/ meletakkan html-list nya misal : &lt;div id="holder" >&lt;/div> <br>
**callback :** fungsi yang dipanggil ketika item di html-list diklik misal : jsonList(json,holder,function(path){/* skrip \*/}); path berupa array , misal item leaf-level4 diklik maka isi path : [root-level1,branch-level2,branch-level3,leaf-level4] <br>
**branchOnly :**(optional) hanya menampilkan branch nya saja / tidak menampilkan leaf nya, misal : jsonList(json,holder,function(path){/* skrip \*/},1); <br><br>
contoh penerapan jsonList di file jsonList.htm <br>
**[demo](http://jsfiddle.net/j33hrtpm/1/ "jsonList demo")**
