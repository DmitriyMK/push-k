webpackJsonp([4], {
    Cvar: function(t, e, n) {
        "use strict";
        ! function(t) {
            function e() {
                var s = window.scrollY;
                if (r === s) return t(e);
                r = s, n(o) ? c || (c = !0, i.play()) : c && (c = !1, i.pause()), window.innerHeight - d.offsetTop + s > 0 && d.clientWidth <= l && (d.style.width = u + (window.innerHeight - d.offsetTop + s) * a + "px"), t(e)
            }

            function n(t) {
                var e = t.getBoundingClientRect();
                return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
            var o = document.querySelector('[data-controller="ui-player"]'),
                i = document.querySelector('[data-target="ui-player.video"]'),
                r = 0,
                c = !1,
                d = document.getElementById("growing_video"),
                u = d.clientWidth,
                l = d.parentElement.clientWidth,
                a = .5,
                s = document.querySelector(".kis__list"),
                m = s.querySelectorAll(".kis__icon");
            window.addEventListener("scroll", function() {
                if (n(s))
                    for (var t = 0; t < m.length; t++) ! function() {
                        var e = m[t];
                        setTimeout(function() {
                            e.classList.add("showup")
                        }, 250 * t)
                    }()
            }), "ontouchstart" in document.documentElement ? i.controls = !0 : (i.removeAttribute("poster"), t(e))
        }(window.requestAnimationFrame),
        function() {
            function t() {
                setTimeout(function() {
                    n[i - 1] && (n[i - 1].classList.add("animated"), --i > 0 && o && t())
                }, 400)
            }
            var e = document.querySelector(".stack");
            if (0 === e.offsetHeight) return void e.classList.remove("animation-stack");
            var n = e.children,
                o = !1,
                i = n.length;
            window.onfocus = function() {
                o || (o = !0, t())
            }, window.onblur = function() {
                o = !1
            }, window.onload = function() {
                document.hidden ? o = !1 : (o = !0, t())
            }
        }()
    }
}, ["Cvar"]);