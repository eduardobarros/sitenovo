      /* ANIMATION */
      ScrollOut({
        targets: 'h2,h3,h4,p,a,img,div,span,ul'
      })

      /* ON SCROLL */
      window.onscroll = function() {scrollFunction()};
      function scrollFunction() {

        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
          document.getElementById("header-menu").style.background = "#000F40";
          document.getElementById("header-dasa-branco").style.display = "block";
          document.getElementById("header-dasa-azul").style.display = "none";
          document.getElementById("nav-link-desktop1").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop2").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop3").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop4").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop5").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop6").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop7").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop8").style.color = "#FFFFFF";
          document.getElementById("nav-link-desktop9").style.color = "#FFFFFF";

        } else {
          document.getElementById("header-menu").style.background = "#FFFFFF";
          document.getElementById("header-dasa-branco").style.display = "none";
          document.getElementById("header-dasa-azul").style.display = "block";
          document.getElementById("nav-link-desktop1").style.color = "#000F40";
          document.getElementById("nav-link-desktop2").style.color = "#000F40";
          document.getElementById("nav-link-desktop3").style.color = "#000F40";
          document.getElementById("nav-link-desktop4").style.color = "#000F40";
          document.getElementById("nav-link-desktop5").style.color = "#000F40";
          document.getElementById("nav-link-desktop6").style.color = "#000F40";
          document.getElementById("nav-link-desktop7").style.color = "#000F40";
          document.getElementById("nav-link-desktop8").style.color = "#000F40";
          document.getElementById("nav-link-desktop9").style.color = "#000F40";
        }

      }

      /* OPEN CLOSE */
      $(document).ready(function(){

        $(".icone-menu").click(function(){
          $(".nav-mobile").fadeToggle("fast");
        });

        $(".nav-link").click(function(){
          $(".nav-mobile").fadeToggle("fast");
        });

      });

      /* LITY POP UP VIDEOS */
      !(function (a, b) {
          "function" == typeof define && define.amd
              ? define(["jquery"], function (c) {
                    return b(a, c);
                })
              : "object" == typeof module && "object" == typeof module.exports
              ? (module.exports = b(a, require("jquery")))
              : (a.lity = b(a, a.jQuery || a.Zepto));
      })("undefined" != typeof window ? window : this, function (a, b) {
          "use strict";
          function c(a) {
              var b = y();
              return G && a.length ? (a.one(G, b.resolve), setTimeout(b.resolve, 500)) : b.resolve(), b.promise();
          }
          function d(a, c, d) {
              if (1 === arguments.length) return b.extend({}, a);
              if ("string" == typeof c) {
                  if (void 0 === d) return void 0 === a[c] ? null : a[c];
                  a[c] = d;
              } else b.extend(a, c);
              return this;
          }
          function e(a) {
              var b = a.indexOf("?");
              b > -1 && (a = a.substr(b + 1));
              for (var c, d = decodeURI(a.split("#")[0]).split("&"), e = {}, f = 0, g = d.length; f < g; f++) d[f] && ((c = d[f].split("=")), (e[c[0]] = c[1]));
              return e;
          }
          function f(a, c) {
              if (!c) return a;
              if (("string" === b.type(c) && (c = e(c)), a.indexOf("?") > -1)) {
                  var d = a.split("?");
                  (a = d.shift()), (c = b.extend({}, e(d[0]), c));
              }
              return a + "?" + b.param(c);
          }
          function g(a, b) {
              var c = a.indexOf("#");
              return -1 === c ? b : (c > 0 && (a = a.substr(c)), b + a);
          }
          function h(a, b, c, d) {
              return b && b.element().addClass("lity-iframe"), c && (a = f(a, c)), d && (a = g(d, a)), '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="' + a + '"/></div>';
          }
          function i(a) {
              return b('<span class="lity-error"></span>').append(a);
          }
          function j(a, c) {
              var d = (c.opener() && c.opener().data("lity-desc")) || "Image with no description",
                  e = b('<img src="' + a + '" alt="' + d + '"/>'),
                  f = y(),
                  g = function () {
                      f.reject(i("Failed loading image"));
                  };
              return (
                  e
                      .on("load", function () {
                          if (0 === this.naturalWidth) return g();
                          f.resolve(e);
                      })
                      .on("error", g),
                  f.promise()
              );
          }
          function k(a, c) {
              var d, e, f;
              try {
                  d = b(a);
              } catch (a) {
                  return !1;
              }
              return (
                  !!d.length &&
                  ((e = b('<i style="display:none !important"></i>')),
                  (f = d.hasClass("lity-hide")),
                  c.element().one("lity:remove", function () {
                      e.before(d).remove(), f && !d.closest(".lity-content").length && d.addClass("lity-hide");
                  }),
                  d.removeClass("lity-hide").after(e))
              );
          }
          function l(a, b) {
              return h(a, b);
          }
          function m() {
              return w.documentElement.clientHeight ? w.documentElement.clientHeight : Math.round(x.height());
          }
          function n(a) {
              var b = s();
              b && (27 === a.keyCode && b.options("esc") && b.close(), 9 === a.keyCode && o(a, b));
          }
          function o(a, b) {
              var c = b.element().find(D),
                  d = c.index(w.activeElement);
              a.shiftKey && d <= 0 ? (c.get(c.length - 1).focus(), a.preventDefault()) : a.shiftKey || d !== c.length - 1 || (c.get(0).focus(), a.preventDefault());
          }
          function p() {
              b.each(A, function (a, b) {
                  b.resize();
              });
          }
          function q(a) {
              1 === A.unshift(a) && (z.addClass("lity-active"), x.on({ resize: p, keydown: n })),
                  b("body > *")
                      .not(a.element())
                      .addClass("lity-hidden")
                      .each(function () {
                          var a = b(this);
                          void 0 === a.data(C) && a.data(C, a.attr(B) || null);
                      })
                      .attr(B, "true");
          }
          function r(a) {
              var c;
              a.element().attr(B, "true"),
                  1 === A.length && (z.removeClass("lity-active"), x.off({ resize: p, keydown: n })),
                  (A = b.grep(A, function (b) {
                      return a !== b;
                  })),
                  (c = A.length ? A[0].element() : b(".lity-hidden")),
                  c.removeClass("lity-hidden").each(function () {
                      var a = b(this),
                          c = a.data(C);
                      c ? a.attr(B, c) : a.removeAttr(B), a.removeData(C);
                  });
          }
          function s() {
              return 0 === A.length ? null : A[0];
          }
          function t(a, c, d, e) {
              var f,
                  g = "inline",
                  h = b.extend({}, d);
              return (
                  e && h[e]
                      ? ((f = h[e](a, c)), (g = e))
                      : (b.each(["inline", "iframe"], function (a, b) {
                            delete h[b], (h[b] = d[b]);
                        }),
                        b.each(h, function (b, d) {
                            return !d || !(!d.test || d.test(a, c)) || ((f = d(a, c)), !1 !== f ? ((g = b), !1) : void 0);
                        })),
                  { handler: g, content: f || "" }
              );
          }
          function u(a, e, f, g) {
              function h(a) {
                  (k = b(a).css("max-height", m() + "px")),
                      j.find(".lity-loader").each(function () {
                          var a = b(this);
                          c(a).always(function () {
                              a.remove();
                          });
                      }),
                      j.removeClass("lity-loading").find(".lity-content").empty().append(k),
                      (n = !0),
                      k.trigger("lity:ready", [l]);
              }
              var i,
                  j,
                  k,
                  l = this,
                  n = !1,
                  o = !1;
              (e = b.extend({}, E, e)),
                  (j = b(e.template)),
                  (l.element = function () {
                      return j;
                  }),
                  (l.opener = function () {
                      return f;
                  }),
                  (l.content = function () {
                      return k;
                  }),
                  (l.options = b.proxy(d, l, e)),
                  (l.handlers = b.proxy(d, l, e.handlers)),
                  (l.resize = function () {
                      n && !o && k.css("max-height", m() + "px").trigger("lity:resize", [l]);
                  }),
                  (l.close = function () {
                      if (n && !o) {
                          (o = !0), r(l);
                          var a = y();
                          if (g && (w.activeElement === j[0] || b.contains(j[0], w.activeElement)))
                              try {
                                  g.focus();
                              } catch (a) {}
                          return (
                              k.trigger("lity:close", [l]),
                              j.removeClass("lity-opened").addClass("lity-closed"),
                              c(k.add(j)).always(function () {
                                  k.trigger("lity:remove", [l]), j.remove(), (j = void 0), a.resolve();
                              }),
                              a.promise()
                          );
                      }
                  }),
                  (i = t(a, l, e.handlers, e.handler)),
                  j
                      .attr(B, "false")
                      .addClass("lity-loading lity-opened lity-" + i.handler)
                      .appendTo("html")
                      .focus()
                      .on("click", "[data-lity-close]", function (a) {
                          b(a.target).is("[data-lity-close]") && l.close();
                      })
                      .trigger("lity:open", [l]),
                  q(l),
                  b.when(i.content).always(h);
          }
          function v(a, c, d) {
              a.preventDefault ? (a.preventDefault(), (d = b(this)), (a = d.data("lity-target") || d.attr("href") || d.attr("src"))) : (d = b(d));
              var e = new u(a, b.extend({}, d.data("lity-options") || d.data("lity"), c), d, w.activeElement);
              if (!a.preventDefault) return e;
          }
          var w = a.document,
              x = b(a),
              y = b.Deferred,
              z = b("html"),
              A = [],
              B = "aria-hidden",
              C = "lity-" + B,
              D = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
              E = {
                  esc: !0,
                  handler: null,
                  handlers: { image: j, inline: k, iframe: l },
                  template:
                      '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>',
              },
              F = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
              G = (function () {
                  var a = w.createElement("div"),
                      b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                  for (var c in b) if (void 0 !== a.style[c]) return b[c];
                  return !1;
              })();
          return (
              (j.test = function (a) {
                  return F.test(a);
              }),
              (v.version = "3.0.0-dev"),
              (v.options = b.proxy(d, v, E)),
              (v.handlers = b.proxy(d, v, E.handlers)),
              (v.current = s),
              (v.iframe = h),
              b(w).on("click.lity", "[data-lity]", v),
              v
          );
      });


      $(document).on('lity:ready', function (event, instance) {
          var iframe = $(".lity-iframe-container").find("iframe");
          iframe.prop("id", "lity-youtube-player");

          var player = new YT.Player("lity-youtube-player", {
              events: {
                  'onReady': function (e) {
                      e.target.playVideo();
                  },
                  'onStateChange': function (e) {
                      if (e.data == YT.PlayerState.ENDED) {
                          instance.close();
                      }
                  }
              }
          });
      });  
