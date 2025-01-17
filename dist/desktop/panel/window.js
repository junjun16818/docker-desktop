var util_1 = require('../tools/util');
var dock_1 = require('../../desktop/taskbar/dock');
window['ZINDEX'] = window['ZINDEX'] || 100;
exports.windowTemplate = "\n    <div id=\"{{config && config._id}}\" (mousedown)=\"focus(config && config._id)\" [ngStyle]=\"{'width': width+'px', 'height': height+'px', 'z-index': zindex}\"  class=\"panel desktop-window\"  > \n        <div class=\"header\" style=\"position: absolute;\"> \n            <div class=\"icon {{config.icon}}\"></div> \n            <div class=\"title\">{{config.title}}</div> \n            <div class=\"panel-title-buttons\"> \n                <div class=\"icon-min\" (click)=\"min()\"> </div> \n                <div class=\"icon-max\" (click)=\"max()\"> </div> \n                <div class=\"icon-close\" (click)=\"destroy()\"> </div> \n            </div> \n        </div>\n        \n        {{__body__}}\n        \n        <div class=\"design-resize-left design-resize\"></div>\n        <div class=\"design-resize-right design-resize\"></div>\n        <div class=\"design-resize-bottom design-resize\"></div>\n        <div class=\"design-resize-right-bottom design-resize\"></div>\n        <div class=\"design-resize-left-bottom design-resize\"></div>\n    </div> \n";
var WindowCmp = (function () {
    function WindowCmp() {
        var _this = this;
        this.width = 900;
        this.height = 300;
        setTimeout(function () {
            _this.focus(1);
        });
    }
    WindowCmp.prototype.setDialog = function () {
        this.dialog = util_1.dialog({
            top: 50 + (Math.random() * 100),
            left: 100 + (Math.random() * 100),
            taskBarHeight: 42,
            element: $(this.element).find('.panel')[0],
            eventEl: $(this.element).find('.header')[0],
            onMove: function () {
            },
            onMouseUp: function () {
            },
            onResize: function () {
            }
        });
    };
    WindowCmp.prototype.setTitle = function (title) {
        $(this.element).find('.title').html(title);
    };
    WindowCmp.prototype.focus = function (id) {
        $(this.element).find('.panel').css('z-index', window['ZINDEX']++);
        $('.panel').removeClass('focus');
        $(this.element).find('.panel').addClass('focus');
    };
    WindowCmp.prototype.destroy = function () {
        var _this = this;
        this.config.componentList.forEach(function (item, index) {
            if (item._id === _this.config._id)
                _this.config.componentList.splice(index, 1);
        });
        if (this.config.componentList.length)
            return;
        dock_1.dockAppList.forEach(function (item, index) {
            if (item._id === _this.config.type)
                dock_1.dockAppList.splice(index, 1);
        });
    };
    WindowCmp.prototype.min = function () {
        $(this.element).find('.panel').hide();
    };
    WindowCmp.prototype.max = function () {
        this.dialog.max();
    };
    return WindowCmp;
})();
exports.WindowCmp = WindowCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2t0b3AvcGFuZWwvd2luZG93LnRzIl0sIm5hbWVzIjpbIldpbmRvd0NtcCIsIldpbmRvd0NtcC5jb25zdHJ1Y3RvciIsIldpbmRvd0NtcC5zZXREaWFsb2ciLCJXaW5kb3dDbXAuc2V0VGl0bGUiLCJXaW5kb3dDbXAuZm9jdXMiLCJXaW5kb3dDbXAuZGVzdHJveSIsIldpbmRvd0NtcC5taW4iLCJXaW5kb3dDbXAubWF4Il0sIm1hcHBpbmdzIjoiQUFFQSxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFDckMscUJBQTRCLDRCQUE0QixDQUFDLENBQUE7QUFJekQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUE7QUFFL0Isc0JBQWMsR0FBRyxnakNBb0IzQixDQUFBO0FBRUQ7SUFNSUE7UUFOSkMsaUJBOERDQTtRQTNEQUEsVUFBS0EsR0FBR0EsR0FBR0EsQ0FBQUE7UUFDWEEsV0FBTUEsR0FBR0EsR0FBR0EsQ0FBQUE7UUFHTEEsVUFBVUEsQ0FBQ0E7WUFDUEEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDakJBLENBQUNBLENBQUNBLENBQUFBO0lBQ05BLENBQUNBO0lBQ0RELDZCQUFTQSxHQUFUQTtRQUVJRSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxhQUFNQSxDQUFDQTtZQUNqQkEsR0FBR0EsRUFBRUEsRUFBRUEsR0FBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBQ0EsR0FBR0EsQ0FBQ0E7WUFDNUJBLElBQUlBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUNBLEdBQUdBLENBQUNBO1lBQy9CQSxhQUFhQSxFQUFFQSxFQUFFQTtZQUNqQkEsT0FBT0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDMUNBLE9BQU9BLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNDQSxNQUFNQSxFQUFFQTtZQUVqQkEsQ0FBQ0E7WUFDREEsU0FBU0EsRUFBRUE7WUFFWEEsQ0FBQ0E7WUFDUUEsUUFBUUEsRUFBRUE7WUFFVkEsQ0FBQ0E7U0FDSkEsQ0FBQ0EsQ0FBQUE7SUFDTkEsQ0FBQ0E7SUFFREYsNEJBQVFBLEdBQVJBLFVBQVNBLEtBQUtBO1FBQ1ZHLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUFBO0lBRTlDQSxDQUFDQTtJQUVESCx5QkFBS0EsR0FBTEEsVUFBTUEsRUFBRUE7UUFDSkksQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDbEVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1FBQ2pDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtJQUNyREEsQ0FBQ0E7SUFFREosMkJBQU9BLEdBQVBBO1FBQUFLLGlCQWFDQTtRQVpHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFJQSxFQUFFQSxLQUFLQTtZQUMxQ0EsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBSUEsQ0FBQ0E7Z0JBQzlCQSxLQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFBQTtRQUNsREEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFFRkEsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsTUFBT0EsQ0FBQ0E7WUFDbENBLE1BQU1BLENBQUFBO1FBRVZBLGtCQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxJQUFJQSxFQUFFQSxLQUFLQTtZQUM1QkEsRUFBRUEsQ0FBQUEsQ0FBRUEsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBS0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBS0EsQ0FBQ0E7Z0JBQy9CQSxrQkFBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDcENBLENBQUNBLENBQUNBLENBQUFBO0lBQ05BLENBQUNBO0lBQ0RMLHVCQUFHQSxHQUFIQTtRQUNJTSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFBQTtJQUN6Q0EsQ0FBQ0E7SUFDRE4sdUJBQUdBLEdBQUhBO1FBQ0lPLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLEVBQUVBLENBQUFBO0lBQ3JCQSxDQUFDQTtJQUNMUCxnQkFBQ0E7QUFBREEsQ0E5REEsQUE4RENBLElBQUE7QUE5RFksaUJBQVMsWUE4RHJCLENBQUEiLCJmaWxlIjoiZGVza3RvcC9wYW5lbC93aW5kb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmdTdHlsZX0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7ZGlhbG9nfSBmcm9tICcuLi90b29scy91dGlsJztcbmltcG9ydCB7IGRvY2tBcHBMaXN0IH0gZnJvbSAnLi4vLi4vZGVza3RvcC90YXNrYmFyL2RvY2snO1xuXG5kZWNsYXJlIHZhciAkXG5cbndpbmRvd1snWklOREVYJ10gPSB3aW5kb3dbJ1pJTkRFWCddIHx8IDEwMFxuXG5leHBvcnQgdmFyIHdpbmRvd1RlbXBsYXRlID0gYFxuICAgIDxkaXYgaWQ9XCJ7e2NvbmZpZyAmJiBjb25maWcuX2lkfX1cIiAobW91c2Vkb3duKT1cImZvY3VzKGNvbmZpZyAmJiBjb25maWcuX2lkKVwiIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiB3aWR0aCsncHgnLCAnaGVpZ2h0JzogaGVpZ2h0KydweCcsICd6LWluZGV4JzogemluZGV4fVwiICBjbGFzcz1cInBhbmVsIGRlc2t0b3Atd2luZG93XCIgID4gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtcIj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbiB7e2NvbmZpZy5pY29ufX1cIj48L2Rpdj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57e2NvbmZpZy50aXRsZX19PC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLXRpdGxlLWJ1dHRvbnNcIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tbWluXCIgKGNsaWNrKT1cIm1pbigpXCI+IDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1tYXhcIiAoY2xpY2spPVwibWF4KClcIj4gPC9kaXY+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNsb3NlXCIgKGNsaWNrKT1cImRlc3Ryb3koKVwiPiA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAge3tfX2JvZHlfX319XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduLXJlc2l6ZS1sZWZ0IGRlc2lnbi1yZXNpemVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2lnbi1yZXNpemUtcmlnaHQgZGVzaWduLXJlc2l6ZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduLXJlc2l6ZS1ib3R0b20gZGVzaWduLXJlc2l6ZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduLXJlc2l6ZS1yaWdodC1ib3R0b20gZGVzaWduLXJlc2l6ZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzaWduLXJlc2l6ZS1sZWZ0LWJvdHRvbSBkZXNpZ24tcmVzaXplXCI+PC9kaXY+XG4gICAgPC9kaXY+IFxuYFxuXG5leHBvcnQgY2xhc3MgV2luZG93Q21we1xuICAgIGNvbmZpZzphbnk7XG4gICAgZWxlbWVudDogYW55O1xuXHR3aWR0aCA9IDkwMFxuXHRoZWlnaHQgPSAzMDBcbiAgICBkaWFsb2dcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLmZvY3VzKDEpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldERpYWxvZygpXG4gICAge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZyh7XG4gICAgICAgICAgICB0b3A6IDUwKyAoTWF0aC5yYW5kb20oKSoxMDApLFxuICAgICAgICAgICAgbGVmdDogMTAwICsgKE1hdGgucmFuZG9tKCkqMTAwKSxcbiAgICAgICAgICAgIHRhc2tCYXJIZWlnaHQ6IDQyLFxuICAgICAgICAgICAgZWxlbWVudDogJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy5wYW5lbCcpWzBdLFxuICAgICAgICAgICAgZXZlbnRFbDogJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy5oZWFkZXInKVswXSxcbiAgICAgICAgICAgIG9uTW92ZTogKCkgPT4ge1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRvbk1vdXNlVXA6ICgpID0+IHtcblx0XHRcdFx0XG5cdFx0XHR9LFxuICAgICAgICAgICAgb25SZXNpemU6ICgpID0+IHtcblx0XHRcdFx0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHNldFRpdGxlKHRpdGxlKXtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy50aXRsZScpLmh0bWwodGl0bGUpXG4gICAgICAgIC8vIHRoaXMuY29uZmlnLnRpdGxlID0gdGl0bGVcbiAgICB9XG4gICAgXG4gICAgZm9jdXMoaWQpe1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkuZmluZCgnLnBhbmVsJykuY3NzKCd6LWluZGV4Jywgd2luZG93WydaSU5ERVgnXSsrKTtcbiAgICAgICAgJCgnLnBhbmVsJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5maW5kKCcucGFuZWwnKS5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICB9XG4gICAgXG4gICAgZGVzdHJveSgpe1xuICAgICAgICB0aGlzLmNvbmZpZy5jb21wb25lbnRMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICAgICAgaWYoIGl0ZW0uX2lkID09PSB0aGlzLmNvbmZpZy5faWQgKVxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbXBvbmVudExpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgaWYoIHRoaXMuY29uZmlnLmNvbXBvbmVudExpc3QubGVuZ3RoIClcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgXG4gICAgICAgIGRvY2tBcHBMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICAgICAgaWYoIGl0ZW0uX2lkID09PSB0aGlzLmNvbmZpZy50eXBlIClcbiAgICAgICAgICAgICAgICBkb2NrQXBwTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIG1pbigpe1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkuZmluZCgnLnBhbmVsJykuaGlkZSgpXG4gICAgfVxuICAgIG1heCgpe1xuICAgICAgICB0aGlzLmRpYWxvZy5tYXgoKSAgIFxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==