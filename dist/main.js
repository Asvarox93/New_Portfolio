"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";$(window).on("load",function(){var n=500;$(".spinner-wrapper").fadeOut(n)});
"use strict";function onResize(o){var i=$(window).width(),n=$(".navigation_bar"),a=$(".navigation_menu");i<800?(a.hide(),n.show()):(a.show(),n.hide())}function onScroll(o){var i=$(document).scrollTop();$(".navigation_items a").each(function(){var o=$(this),n=$(o.attr("href"));n.position().top-70<=i&&n.position().top-70+n.height()>=i?($(".navigation_items ul li a").removeClass("active"),o.addClass("active")):o.removeClass("active")})}$(document).ready(function(){var o=$(".navigation_menu"),i=$(".navigation_bar");i.click(function(){$(this).toggleClass("navigation_bar--open"),o.toggle()}),onResize(),$(window).on("resize",onResize),$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(o){o.preventDefault(),$(document).off("scroll"),onResize(),i.removeClass("navigation_bar--open"),$("a").each(function(){$(this).removeClass("active"),$(this).parent().removeClass("active")}),$(this).addClass("active"),$(this).parent().addClass("active");var n=this.hash,a=$(n);$("html, body").stop().animate({scrollTop:a.offset().top-70},500,"swing",function(){window.location.hash=n,$(document).on("scroll",onScroll)})})});
"use strict";
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmpzIiwiYmlvZ3JhcGh5LmpzIiwiYmxvZy5qcyIsImNsaWVudC1yZXZpZXcuanMiLCJjb250YWN0LmpzIiwiZm9vdGVyLmpzIiwiaGVhZGVyLmpzIiwia25vd2xlZGdlLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiLCJwcm9qZWN0cy5qcyIsInNraWxscy5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93Iiwib24iLCJoaWRlUHJlbG9hZGVyIiwicHJlbG9hZGVyIiwib25SZXNpemUiLCJldmVudCIsIndpZHRoIiwibmF2X2JhciIsImhpZGUiLCJuYXZfbWVudSIsInNob3ciLCJvblNjcm9sbCIsInNjcm9sbFBvcyIsInNjcm9sbFRvcCIsImRvY3VtZW50IiwiY3VyckxpbmsiLCJ0aGlzIiwiYXR0ciIsInJlZkVsZW1lbnQiLCJwb3NpdGlvbiIsInRvcCIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJyZWFkeSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicGFyZW50IiwidGFyZ2V0IiwiJHRhcmdldCIsInN0b3AiLCJhbmltYXRlIiwib2Zmc2V0IiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7QUNBQTtBQ0FBO0FDQUE7YUNDQUEsRUFBQUMsUUFBQUMsR0FBQSxPQUFBLFdBQ0VELElBQVFDLEVBQW9CLElBRWpCQyxFQUFBQSxvQkFDSEMsUUFBQUE7YUNnQ1YsU0FBU0MsU0FBU0MsR0FBbEIsSUFBU0QsRUFBU0MsRUFBQUEsUUFBTUMsUUFDZEEsRUFBVU4sRUFBQUEsbUJBQ1ZPLEVBQVlSLEVBQUEsb0JBR2ZPLEVBQU8sS0FBUEEsRUFBT0UsT0FDTkMsRUFBQUEsU0FESkEsRUFHS0MsT0FDREQsRUFBQUEsUUFLUixTQUFTRSxTQUFTTixHQUFsQixJQUFBTyxFQUFrQlAsRUFBQUEsVUFBTVEsWUFDcEJkLEVBQUEsdUJBQWtCZSxLQUFVRCxXQUMxQixJQUFBRSxFQUFBaEIsRUFBQWlCLE1BQ01ELEVBQWFoQixFQUFBZ0IsRUFBakJFLEtBQUEsU0FDSUMsRUFBQUEsV0FBZUgsSUFBU0UsSUFBS0wsR0FBakNNLEVBQUFDLFdBQUFDLElBQUEsR0FBQUYsRUFBQUcsVUFBQVQsR0FDSU0sRUFBQUEsNkJBQUFJLFlBQUEsVUFDQXZCLEVBQUV3QixTQUFBLFdBSUZSLEVBQVNPLFlBQVksWUE3RGpDdkIsRUFBRWUsVUFBVVUsTUFBTSxXQUNkLElBQU1mLEVBQVdWLEVBQUUsb0JBRHZCUSxFQUFrQlIsRUFBQSxtQkFFZFEsRUFBTUEsTUFBVVIsV0FDaEJBLEVBQUFpQixNQUFBUyxZQUFBLHdCQUNBbEIsRUFBQW1CLFdBR0N0QixXQUdETCxFQUFFQyxRQUFRQyxHQUFHLFNBQVNHLFVBRHRCQSxFQUFBQSxVQUFBQSxHQUFBQSxTQUFBQSxVQUVBTCxFQUFFZSxnQkFBYWIsR0FBQSxRQUFVVSxTQUF6QmdCLEdBQ0FBLEVBQUFDLGlCQUNFN0IsRUFBQWUsVUFBRmUsSUFBQSxVQUNJRixXQUNBNUIsRUFBRWUsWUFBYyx3QkFDaEJWLEVBQUFBLEtBQUFBLEtBQUFBLFdBQ0FHLEVBQUFBLE1BQVFlLFlBQVksVUFDbEJ2QixFQUFGaUIsTUFBWWMsU0FBQVIsWUFBWSxZQUVwQnZCLEVBQUFBLE1BQUV3QixTQUFNTyxVQUNYL0IsRUFIRGlCLE1BQUFjLFNBQUFQLFNBQUEsVUFLQXhCLElBQUVnQyxFQUFNRCxLQUFTUCxLQUdiUyxFQUFVakMsRUFBRWdDLEdBRGhCaEMsRUFBQSxjQUFha0MsT0FBYkMsU0FDSUYsVUFBWUQsRUFBaEJJLFNBQUFmLElBQUEsSUFDRSxJQUFBLFFBQWNhLFdBQ1pqQyxPQUFBb0MsU0FBYUosS0FBUUcsRUFDdEJwQyxFQUZIZSxVQUFBYixHQUVpQixTQUFZVTtBQzdCckM7QUNBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwiXG4vL1ByZWxvYWRlclxuJCh3aW5kb3cpLm9uKCdsb2FkJyxmdW5jdGlvbigpe1xuICAgIGNvbnN0IHByZWxvYWRlckZhZGVPdXRUaW1lID0gNTAwO1xuICAgIGZ1bmN0aW9uIGhpZGVQcmVsb2FkZXIoKSB7XG4gICAgY29uc3QgcHJlbG9hZGVyID0gJCgnLnNwaW5uZXItd3JhcHBlcicpO1xuICAgIHByZWxvYWRlci5mYWRlT3V0KHByZWxvYWRlckZhZGVPdXRUaW1lKTtcbiAgICB9XG4gICAgaGlkZVByZWxvYWRlcigpO1xufSk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmF2X21lbnUgPSAkKCcubmF2aWdhdGlvbl9tZW51Jyk7XG4gICAgY29uc3QgbmF2X2JhciA9ICQoJy5uYXZpZ2F0aW9uX2JhcicpO1xuICAgIC8vaGFtYnVyZ2VyXG4gICAgbmF2X2Jhci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCduYXZpZ2F0aW9uX2Jhci0tb3BlbicpO1xuICAgICAgICBuYXZfbWVudS50b2dnbGUoKTtcbiAgICB9KTtcbiAgICBcbiAgICBvblJlc2l6ZSgpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJyxvblJlc2l6ZSlcbiAgICAkKGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgLy9zbW9vdGhzY3JvbGxcbiAgICAkKCdhW2hyZWZePVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKFwic2Nyb2xsXCIpO1xuICAgICAgICBvblJlc2l6ZSgpO1xuICAgICAgICBuYXZfYmFyLnJlbW92ZUNsYXNzKCduYXZpZ2F0aW9uX2Jhci0tb3BlbicpO1xuICAgICAgICAkKCdhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICBcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuaGFzaDtcbiAgICAgICAgbGV0ICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnc2Nyb2xsVG9wJzogJHRhcmdldC5vZmZzZXQoKS50b3AtNzBcbiAgICAgICAgfSwgNTAwLCAnc3dpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShldmVudCl7XG4gICAgY29uc3Qgd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICBjb25zdCBuYXZfYmFyID0gJCgnLm5hdmlnYXRpb25fYmFyJyk7XG4gICAgY29uc3QgbmF2X21lbnUgPSAkKCcubmF2aWdhdGlvbl9tZW51Jyk7XG4gICAgXG4gICAgaWYod2lkdGg8IDgwMCl7XG4gICAgICAgIG5hdl9tZW51LmhpZGUoKTtcbiAgICAgICAgbmF2X2Jhci5zaG93KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIG5hdl9tZW51LnNob3coKTtcbiAgICAgICAgbmF2X2Jhci5oaWRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvblNjcm9sbChldmVudCl7XG4gICAgbGV0IHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuICAgICQoJy5uYXZpZ2F0aW9uX2l0ZW1zIGEnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN1cnJMaW5rID0gJCh0aGlzKTtcbiAgICAgICAgbGV0IHJlZkVsZW1lbnQgPSAkKGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpKTtcbiAgICAgICAgaWYgKHJlZkVsZW1lbnQucG9zaXRpb24oKS50b3AtNzAgPD0gc2Nyb2xsUG9zICYmIChyZWZFbGVtZW50LnBvc2l0aW9uKCkudG9wLTcwKSArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgPj0gc2Nyb2xsUG9zKSB7XG4gICAgICAgICAgICAkKCcubmF2aWdhdGlvbl9pdGVtcyB1bCBsaSBhJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyTGluay5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY3VyckxpbmsucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjsiLCJcInVzZSBzdHJpY3RcIjsiXX0=
