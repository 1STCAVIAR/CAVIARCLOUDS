/*
* 多选框全选,反选,全不选插件
*/
;(function($,undefined){
    $.fn.extend({
        "selectAll" : function(){
            //全选
            this.prop('checked',true);
        },
        "cancelAll" : function(){
            //全不选
            this.prop('checked',false);
        },
        "unsel" : function(){
            //反选
            $.each(this,function(k,v){
                $(this).prop('checked',!$(this).prop('checked'));
            });
        }
    });
})(jQuery);