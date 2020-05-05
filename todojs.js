class Todojs {
    constructor(inp, list){
        this.inp = inp;
        this.list = list;
    }
    initHandler(){
        let list =this.list
        $(this.inp).keypress(function(event){
            if ( event.which == 13 ) {
                let random = Math.random();
                $(list).append( `<div id="${random}">
                    ${$("#inp").val()}
                    <button id="${random}">delete</button>
                    </div>`);
            }
        });

        $(document).on('click','button[id^=0]', function(){
            $(this).closest( "div[id^=0]" ).remove();
        });
    }
}

new Todojs("#inp","#list").initHandler();
