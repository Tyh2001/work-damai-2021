var cookiesGDPR = function() {
    var current_level = null;
    var privacyStatementUrlk = "/sim/chinese/footer/privacy.htm#cookie"; // Privacy Policy URL with tracking IDs
    var config = {
        cookieCssFilepath: "/sim/chinese/css/cookies.css",	// CSS path for CSS file 
        privacyStatementUrl: "/sim/chinese/footer/privacy.htm#cookie",	// Privacy Policy URL
        cookieName: "cookie_consent_level",
        cookieExpires: new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000), // 1 year
        cookieLevel: null,
        viewContainer: "body",
        minLvl: "essential",
        defaultLevelId: "marketing",
        cookieNotice: "花旗银行在本网站使用Cookies为您提供更佳的浏览体验。如您继续浏览本网站，即表示您同意花旗银行隐私条款及我们使用Cookies。请参阅<a target='_blank' href='" + privacyStatementUrlk + "' title='隐私条款'>隐私条款</a>了解更多。",	// Cookie Policy content that needs to appear on popup

        modalContent: {
            header: "Your cookie settings",
            description: "Cookies are very small text files that are stored on your computer when you visit some websites.<br><br>We use cookies to make our website easier for you to use. You can remove any cookies already stored on your computer, but these may prevent you from using parts of our website."
        },
        levels: [{
            id: "essential",
            title: "Essential Cookies",
            permissions: ["These allow you to access different parts of the Citi Consumer Bank website. These cookies are necessary for the website to function and cannot be switched off in our systems"],
            callback: function callback() {}
        }, {
            id: "functional",
            title: "Functional Cookies",
            permissions: ["These cookies are designed to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. One example of these cookies are personalisation cookies, that are used to build a profile of your reading interests and show you relevant content. If you do not allow these cookies then some or all of these services may not function properly."],
            callback: function callback() {}
        }, {
            id: "marketing",
            title: "Marketing Cookies",
            permissions: ["These cookies can be used by partners to build a profile of your interests and show you relevant adverts on other sites. These cookies are based on uniquely identifying your browser and internet device and no other personal information about you is stored. If you do not allow these cookies, you will experience less targeted advertising."],
            callback: function callback() {}
        }]
    };
    var modal = {
        html: function html() {
            return "" + "<div class=\"cookie-modal\" id=\"cookies-modal\" style=\"visibility: hidden;\">" + "<div class=\"cookie-modal__overlay jsOverlay\"></div>" + "<div class=\"cookie-modal__container\">" + "<div class=\"modal-header\">" + "<h4 class=\"modal-title\" id=\"cookies-modalLabel\">" + config.modalContent.header + "</h4>" + "</div>" + "<div class=\"modal-body\">" + "<div class=\"cookies-modal-levels\">" + modal.renderLevelHtml.header() + "</div>" + "</div>" + "<div class=\"modal-footer\">" + "<button type=\"button\" class=\"btn cookies-modal-confirmBtn\">Confirm your settings</button>" + "</div>" + "</div>" + "</div>"
        },
        renderLevelHtml: {
            header: function header() {
                var output = "";
                var cookieLvl = config.levels.getLevel();
                config.levels.forEach(function(elem, i) {
                    var activeCls = "";
                    var onOff = "OFF";
                    if (cookieLvl != null && i <= cookieLvl) {
                        activeCls = "lively";
                        onOff = "ON"
                    }
                    var headerChart = function(index) {
                        var out = "";
                        for (var i = 0; i < config.levels.length; i++) {
                            var isActive = i <= index ? "lively" : "";
                            out += "<span class=\"cookies-modal-chart cookies-modal-chart-" + (i + 1) + " " + isActive + "\">&nbsp;</span>"
                        }
                        return out
                    }(i);
                    var description = "";
                    description += "<ul class=\"cookies-modal-description-list\" id=\"" + elem.id + "\">";
                    elem.permissions.forEach(function(permission) {
                        description += "<li>" + permission + "</li>"
                    });
                    output += "</ul>";
                    output += "<div class=\"cookies-modal-levels-item items-" + config.levels.length + " " + activeCls + "\">" + "<div class=\"cookies-modal-levels-item-box cookieLvlBtn\" cookie-level=\"" + elem.id + "\">" + "<div class=\"cookies-modal-levels-item-inside\">" + "<div class=\"cookies-modal-levels-item-header\">" + headerChart + "</div>" + "<div class=\"cookies-modal-levels-item-description\">" + "<h6 class=\"cookies-modal-levels-item-title\">" + elem.title + "</h6>" + "<h6 class=\"cookies-modal-levels-item-state\">" + onOff + "</h6>" + "</div>" + "</div>" + "</div>" + "<div class=\"cookies-modal-description\">" + description + "</div>" + "</div>"
                });
                return output
            }
        },
        modalSelector: "#cookies-modal",
        levelBoxSelector: ".cookies-modal-levels-item",
        levelSelector: ".cookieLvlBtn",
        stateSelector: ".cookies-modal-levels-item-state",
        descriptionContainerSelector: ".cookies-modal-description",
        descriptionTitleSelector: ".cookies-modal-description-title",
        confirmBtnSelector: ".cookies-modal-confirmBtn"
    };
    var noticeBox = {
        getHtml: function getHtml() {
            var out = "<div class=\"cookies-notice\">" + "<p class=\"description\">" + config.cookieNotice + "</p>" + "<div class=\"cookies-notice-footer\">" + "<button type=\"button\" class=\"btn cookies-notice-continue\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>" + "</div>" + "</div>";
            return out
        },
        noticeSelector: ".cookies-notice",
        settingsSelector: ".cookies-notice-settings",
        continueSelector: ".cookies-notice-continue"
    };
    var cookies = {
        set: function set(name, value) {
            document.cookie = name + "=" + escape(value) + "; expires=" + config.cookieExpires.toGMTString() + "; path=/;"
        },
        get: function get(name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);
            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) return ""
            } else begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return unescape(dc.substring(begin + prefix.length, end))
        },
        delete: function _delete(name) {
            if (cookies.get(name)) {
                document.cookie = name + "=null;path=/;" + ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
            }
        }
    };

    function __init(options) {
        $.extend(true, config, options ? options : {});
        if (!checkConfigCorrect()) return;
        config.cookieLevel = !!cookies.get(config.cookieName) ? cookies.get(config.cookieName) : config.defaultLevelId;
        if (config.cookieCssFilepath) {
            $("head").append("<link rel=\"stylesheet\" href=\"" + window.location.origin + config.cookieCssFilepath + "\" type=\"text/css\" />")
        }
        addLevelsMethods();
        getScripts();
        $(config.viewContainer).append(modal.html());
        if (!cookies.get(config.cookieName)) $(config.viewContainer).prepend(noticeBox.getHtml());
        setEvents()
    }

    function addLevelsMethods() {
        config.levels.saved = function() {
            return getById.call(config.levels, config.cookieLevel)
        };
        config.levels.getLevel = function() {
            return getElemBy.call(config.levels, config.levels.saved(), "id")
        };
        config.levels.getLevelIndex = function() {
            return getElemIndex.call(config.levels, config.levels.saved(), "id")
        };
        config.levels.setSelected = function(id) {
            function updateDesc() {
                $(modal.levelBoxSelector).each(function(k, v) {
                    var $this = $(this);
                    if (config.levels.getLevel() != null && k <= config.levels.getLevel()) {
                        $this.addClass("lively");
                        $this.find(modal.stateSelector).text("ON")
                    } else {
                        $this.removeClass("lively");
                        $this.find(modal.stateSelector).text("OFF")
                    }
                })
            }
            var isTheSame = config.levels.saved() && config.levels.saved().id === id;
            if (isTheSame) {
                config.cookieLevel = id === config.minLvl ? id : config.levels[config.levels.getLevel() - 1].id;
                updateDesc()
            } else { // set current lev
                config.cookieLevel = id;
                updateDesc()
            }
        }
    };

    function getScripts() {
        if (!config.cookieLevel) return;
        var scriptsToLoad = 0,
            loadedScripts = 0;
        $("script[cookieconsent-level], script[data-cookieconsent-level]").each(function(i, v) {
            var scriptLevel = this.getAttribute("cookieconsent-level") || this.getAttribute("data-cookieconsent-level");
            var scriptSrc = this.getAttribute("src");
            if (getElemBy.call(config.levels, {
                    id: scriptLevel
                }, "id") <= config.levels.getLevelIndex()) {
                scriptsToLoad++;
                if (scriptSrc) {
                    $.getScript(this.getAttribute("src"), function() {
                        loadedScripts++
                    })
                } else {
                    var scri = document.createElement("script");
                    scri.type = "text/javascript";
                    scri.text = this.text;
                    document.body.appendChild(scri);
                    loadedScripts++
                }
            }
        });
        var checkWhenAllScriptsLoaded = setInterval(function() {
            if (loadedScripts === scriptsToLoad) {
                var evt = $.Event("analyticsScriptsLoaded", {
                    level: config.cookieLevel
                });
                $(window).trigger(evt);
                clearInterval(checkWhenAllScriptsLoaded)
            }
        }, 50)
    };

    function setEvents() {
        $(modal.levelSelector).on("click", function(e) {
            e.preventDefault();
            var lvl = this.getAttribute("cookie-level");
            config.levels.setSelected(lvl)
        });
        $(modal.confirmBtnSelector).on("click", function(e) {
            e.preventDefault();
            cookies.set(config.cookieName, config.levels.saved().id);
            $(modal.modalSelector).removeClass("open");
            $(noticeBox.noticeSelector).remove()
        });
        $(noticeBox.continueSelector).on("click", function(e) {
            e.preventDefault(); /*$(noticeBox.noticeSelector).addClass("hide");*/
            cookies.set(config.cookieName, config.levels.saved().id);
            $(".cookies-notice").css("display", "none");
            $(".cookies-notice").remove();
            $(".small-screen-fixed").css("top", 0);
        });
        $(noticeBox.settingsSelector + ", #edit-cookieconsent-settings").on("click", function(e) {
            e.preventDefault();
            $(modal.modalSelector).addClass("open")
        })
    };

    function checkConfigCorrect() {
        if (config.levels.length == 1) {
            error("cookieconsent needs at least 2 levels. level 1 is legal without consent, so there&apos;d be no need for this plugin.");
            return false
        }
        if (config.levels.length > 4) {
            error("cookieconsent accepts a maximum of 4 levels.");
            return false
        }
        for (var i = 0, level; level = config.levels[i]; i++) {
            if (level.id.indexOf(" ") > -1) {
                error("cookieconsent level id properties cannot contain spaces.");
                return false
            }
        }
        config.viewContainer = $(config.viewContainer);
        if (config.viewContainer.length == 0) {
            error("cookieconsent could not find the element specific in the viewContainer property");
            return false
        }
        return true
    };

    function error(message) {
        if (window.console && window.console.error) {
            console.error(message, this)
        }
    };

    function getElemBy(elem, by) {
        if (!elem) return null;
        for (var i = 0, item; item = this[i]; i++) {
            if (item[by] === elem[by]) return i
        }
        return null
    };

    function getElemIndex(elem, by) {
        if (!elem) return null;
        for (var i = 0, item; item = this[i]; i++) {
            if (item[by] === elem[by]) return i
        }
        return null
    }

    function getById(id) {
        for (var i = 0, elem; elem = this[i]; i++) {
            if (elem.id == id) {
                return elem
            }
        }
        return null
    };
    return {
        init: __init
    }
}();

function checkJq() {
    if (window.jQuery) {
        $(document).ready(function() {
            cookiesGDPR.init();
        });
        //window.onload=cookiesGDPR.init();
    } else {
        setTimeout(function() {
            checkJq()
        }, 100);
    }
}
checkJq();