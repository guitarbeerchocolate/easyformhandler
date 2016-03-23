(function($)
{
    $.fn.extend(
    {
        formhandler:function(elem)
        {
            var action = this.attr('action');
            var serial = this.serialize();
            this.on('submit',function(ev)
            {
                ev.preventDefault();
                $.post(action,serial,function(data)
                {
                    $(elem).text(data);
                    $(elem).show();
                }); 
            });
        }
    });
})(jQuery);