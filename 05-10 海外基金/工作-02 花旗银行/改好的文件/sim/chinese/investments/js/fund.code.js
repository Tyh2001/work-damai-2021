function fundnav(id, total) {
    img = id.substring(1, 2, 3, 4, 5);
    var tabnames = ['fundsection', 'fundcomp', 'law', 'apply', 'knowledge'];
    for (i = 1; i <= total; i++) {
        document.getElementById('re' + i).style.display = 'none';
        document.getElementById('a' + i + tabnames[i - 1]).src = "images/" + tabnames[i - 1] + "_normal.gif";
        document.getElementById('a' + i + tabnames[i - 1]).parentNode.style.cursor = "pointer";
    }
    document.getElementById('re' + img).style.display = 'block';
    document.getElementById(id).src = "images/" + tabnames[img - 1] + "_over.gif";
    document.getElementById(id).parentNode.style.cursor = "default";
}

function fundcompnav(id, total) {
    img = id.substring(1, 2);
    var tabnames = ['compintro', 'compproduct'];
    for (i = 1; i <= total; i++) {
        document.getElementById('re' + i).style.display = 'none';
        document.getElementById('a' + i + tabnames[i - 1]).src = "images/" + tabnames[i - 1] + "_normal.gif";
        document.getElementById('a' + i + tabnames[i - 1]).parentNode.style.cursor = "pointer";
    }
    document.getElementById('re' + img).style.display = 'block';
    document.getElementById(id).src = "images/" + tabnames[img - 1] + "_over.gif";
    document.getElementById(id).parentNode.style.cursor = "default";
}

function showhidefund(tag) {
    var imgopen = 'images/minus.gif';
    var imgclose = 'images/plus.gif';
    var hidediv = $(tag).next();
    if ($.trim(hidediv.html())) {
        if (hidediv.is(':hidden')) {
            $(tag).find('img').attr('src', imgopen);
            hidediv.show();
        } else {
            $(tag).find('img').attr('src', imgclose);
            hidediv.hide();
        }
    }
}

function searchFund(listIsShow, country) {
    var comp = $('select#comp_' + country).val();
    var cate = $('select#cate_' + country).val();
    var risk = $('select#risk_' + country).val();
    var option = $('select#cate_' + country + ' option:gt(0)');
    var htmlResult = '';
    var htmlCode = '';
    var fundSearchResult = '';
    $.each(option, function (i, item) {
        fundSearchResult = '';
        htmlCode = '<div class="fundlist">';
        htmlCode += '<a onclick="showhidefund(this)" href="javascript:;"><img border="0" alt="" src="images/' + (listIsShow ? 'minus' : 'plus') + '.gif">' + $(item).text() + '</a>'
        htmlCode += '<div' + (listIsShow ? '' : ' style="display:none;"') + '>';
        htmlCode += '<ul>';
        $.each(fund[country].sdata, function (i, item2) {
            if ((item2.comp == comp || comp == 0) && (item2.cate == cate || cate == 0) && item2.cate == $(item).val() && (item2.risk == risk || risk == 0))
                fundSearchResult += '<li><a href="popup.htm?FID=' + item2.id + '&country=' + country + '" onclick="return popupWindow(' + item2.id + ', \'' + country + '\')">' + $.trim(item2.name.split('-')[0]) + '</a></li>';
        });
        if (!fundSearchResult && !listIsShow) htmlCode += '<li>即将销售，敬请期待</li>'
        else htmlCode += fundSearchResult;
        htmlCode += '</ul>';
        htmlCode += '</div>';
        htmlCode += '</div>';
        if (!fundSearchResult && listIsShow) return true;
        htmlResult += htmlCode;
    });
    if (htmlResult == '') htmlResult = '<div class="nofund">无符合条件的基金，请重新查询，谢谢！</div>';
    $('div#fundres_' + country).html(htmlResult);
}

/**
 * 用于渲染公司列表
 * @param {String} country zh/hk
 */
function showCompList(country) {
    document.write('<div class="fundlist"><ul>');
    $('#comp_' + country + ' option:gt(0)').each(function () {
        console.log(`每个公司的value是----->${this.value}`)
        document.write('<li><a href="' + $(this).attr('url') + '">' + $(this).text() + '</a></ll>');
    });
    document.write('</ul></div>');
}

/**
 * 用于渲染不同的公司简介
 * @param {Number} compid compid
 * @param {String} country ch/hk
 */
function showCompany(compid, country) {
    var comp = company[country][compid];
    var nameArray;
    switch (country) {
        case 'ch':
            nameArray = ['公司名称：', '法人代表：', '成立日期：', '注册资本：', '办公地址：', '邮编：', '公司客户服务热线：', '传真：', '电子邮件：', '[OUT]公司网址：', '公司历史：'];
            break;
        case 'hk':
            nameArray = ['公司名称：', '基金公司介绍：', '中国内地代理人介绍：'];
            break;
    }

    var i = 0;
    var html = '<table class="fundcomptable"><tr><th class="head"></th></tr><tr><th style="border-top:none;">' + comp.name + '</th></tr>';
    $.each(comp, function (key, value) {
        console.log(value)
        if (nameArray[i].indexOf('[OUT]') > -1)
            html += '<tr><td style="padding: 0; border: 0;"><table width="100%;"><tr><th>' + nameArray[i].substring(5) + '</th><td' + (i++ % 2 == 1 ? ' class="bg"' : '') + '><a href="javascript:;" onclick = "showSwitchService(\'switch_L1\');return false;">' + value + '</a></td></tr></table></td></tr>';
        else
            html += '<tr><td style="padding: 0; border: 0;"><table width="100%;"><tr><th>' + nameArray[i] + '</th><td' + (i++ % 2 == 1 ? ' class="bg"' : '') + '>' + value + '</td></tr></table></td></tr>';
        if (i == nameArray.length) return false;
    });
    html += '</table><div class="prompt">' + comp.remark + '</div>';
    document.write(html);
}

/**
 * 用于列表中跳转不同的地方
 * @param {Number} compid id
 * @param {String} country ch
 */
function showFund(compid, country) {
    var html = '<div class="fundlist"><ul>';
    $.each(fund[country].sdata, function (i, item) {
        if (compid && item.comp == compid || !compid)
            html += '<li><a href="popup.htm?FID=' + item.id + '&country=' + country + '" onclick="return popupWindow(' + item.id + ', \'' + country + '\')">' + $.trim(item.name.split('-')[0]) + '</a></li>';
    });
    html += '</ul></div>';
    document.write(html);
}

var g_RegPDF = /^[a-zA-Z]+$/;

function fundContent(id, country) {
    var f = fund[country][id];
    var html = '<table class="fundtable">';
    html += '<tr>';
    switch (country) {
        case 'ch':
            html += '<th rowspan="10" class="bg1">基金信息</th><td class="lname">基金名称</td><td>' + f.name + '</td>';

            html += '</tr>';
            html += setFundContentValueNew(id, f, 1, 10, country);
            break;
        case 'hk':
            html += '<th rowspan="13" class="bg1">基金信息</th><td class="lname">基金名称</td><td>' + f.name + '</td>';
            html += '</tr>';
            html += setFundContentValueNew(id, f, 1, 12, country);
            break;
    }
    html += '<tr>';
    switch (country) {
        case 'ch':
            html += '<th rowspan="5" class="bg2">产品特点</th><td class="lname">投资目标</td><td>' + f.target + '</td>';
            html += '</tr>';
            html += setFundContentValueNew(id, f, 12, 15, country);
            break;
        case 'hk':
            html += '<th rowspan="4" class="bg2">产品特点</th><td class="lname">投资目标</td><td>' + f.target + '</td>';
            html += '</tr>';
            html += setFundContentValueNew(id, f, 14, 16, country);
            break;
    }
    html += '</tr>';
    switch (country) {
        case 'ch':
            html += '<tr><th class="bg4">基金公告</th><td class="lname">相关公告</td><td>' + outContent(f.notice) + '</td></tr>';
            html += '<tr><th class="bg5">基金净值</th><td class="lname">净值历史相关数据</td><td>' + pdfContent(f.record) + '</td></tr>';
            html += '<tr><th rowspan="2" class="bg6">法律文件</th><td class="lname">基金合同<br/>招募说明书<br/>基金托管协议</td><td>' + outContent_wu(f.investmentcontract) + '</td></tr>';
            html += '<tr><td class="lname">产品资料概要</td><td>' + outContent_wu(f.investmentcontract) + '</td></tr>';

            break;
        case 'hk':
            html += '<tr><th class="bg4">基金公告</th><td class="lname">相关公告</td><td>' + mulioutContent_hk(f.notice) + '</td></tr>';
            html += '<tr><th class="bg5">基金净值</th><td class="lname">净值历史相关数据</td><td>' + pdfContent(f.record) + '</td></tr>'
            html += '<tr><th rowspan = "3" class="bg6" > 法律文件</th ><td class="lname">基金说明书</td><td>' + mulioutContent_hk(f.agreement) + '</td></tr ><tr><td class="lname">产品资料概要</td><td>' + mulioutContent_hk(f.instruction) + '</td></tr><tr> <td class="lname">信托契约</td> <td>' + mulioutContent_hk(f.protocol) + '</td></tr > '
            html += setFundContentValueNew(id, f, 20, 21, country);
            break;
    }
    html += '</table>';
    html += '<div class="prompt">' + f.remark + '</div>';
    $('#fundpopup h4 span:eq(0)').html($.trim(f.name.split('-')[0].replace(/<br\s*\/?>/i, '')));
    $('#fundpopup div').html(html);
    document.title = $.trim(f.name.split('-')[0].replace(/<br\s*\/?>/i, ''));
}

function setFundContentValueNew(id, data, startIndex, endIndex, country) {
    var nameArray;
    switch (country) {
        case 'ch':
            nameArray = ['基金名称', '基金代码', '基金类型', '基金管理人', '基金托管人', '基金经理', '基金成立日期', '风险评级', '[OUT_WU]基金费率', '默认分红方式', '[LINK]基金公司介绍', '投资目标', '投资风险特征', '业绩基准', '投资范围', '投资策略', '[OUT|PDF]相关公告', '[PDF]净值历史相关数据', '[PDF]基金合同', null, '[OUT_WU]招募说明书', '[PDF]基金托管协议'];
            break;
        case 'hk':
            nameArray = ['基金名称', 'ISIN编号', '基金代码', '基金类型', '基金经理人', '受托人', '中国内地代理人', '基金经理', '基金成立日期', '风险评级', '申购币种', '分红类型', '[OUT_WU]基金费率', '投资目标', '投资风险特征', '业绩基准', '投资策略', '[OUT]相关公告', '[PDF]净值历史相关数据', '基金说明书'];
            break;
    }
    var html = '';
    var i = -1;
    $.each(data, function (key, value) {
        if (++i < startIndex || nameArray[i] == null) return true;

        if (nameArray[i] != '基金托管人') {
            if (nameArray[i].indexOf('[PDF]') > -1)
                html += '<tr><td class="lname">' + nameArray[i].substring(5) + '</td><td>' + pdfContent(value) + '</td></tr>';
            else if (nameArray[i].indexOf('[OUT]') > -1)
                html += '<tr><td class="lname">' + nameArray[i].substring(5) + '</td><td>' + outContent(value) + '</td></tr>';
            else if (nameArray[i].indexOf('[OUT_WU]') > -1)
                html += '<tr><td class="lname">' + nameArray[i].substring(8) + '</td><td>' + outContent_wu(value) + '</td></tr>';
            else if (nameArray[i].indexOf('[LINK]') > -1)
                html += '<tr><td class="lname">' + nameArray[i].substring(6) + '</td><td>' + linkContent(value) + '</td></tr>';
            else
                html += '<tr><td class="lname">' + nameArray[i] + '</td><td>' + (value == '' ? '-' : value) + '</td></tr>';
        }

        if (i >= endIndex) return false;

    });
    return html;
}
function setFundContentValue(data, startIndex, endIndex, country) {
    var nameArray;
    switch (country) {
        case 'ch':
            nameArray = ['基金名称', '基金代码', '基金类型', '基金管理人', '基金托管人', '基金经理', '基金成立日期', '风险评级', '[OUT_WU]基金费率', '默认分红方式', '[LINK]基金公司介绍', '投资目标', '投资风险特征', '业绩基准', '投资范围', '投资策略', '[OUT|PDF]相关公告', '[PDF]净值历史相关数据', '[PDF]基金合同', null, '[OUT_WU]招募说明书', '[PDF]基金托管协议'];
            break;
        case 'hk':
            nameArray = ['基金名称', 'ISIN编号', '基金代码', '基金类型', '基金经理人', '受托人', '中国内地代理人', '基金经理', '基金成立日期', '风险评级', '申购币种', '分红类型', '[OUT_WU]基金费率', '投资目标', '投资风险特征', '业绩基准', '投资策略', '[OUT]相关公告', '[PDF]净值历史相关数据', '基金说明书'];
            break;
    }
    var html = '';
    var i = -1;
    $.each(data, function (key, value) {
        if (++i < startIndex || nameArray[i] == null) return true;
        if (nameArray[i].indexOf('[PDF]') > -1)
            html += '<tr><td class="lname">' + nameArray[i].substring(5) + '</td><td>' + pdfContent(value) + '</td></tr>';
        else if (nameArray[i].indexOf('[OUT]') > -1)
            html += '<tr><td class="lname">' + nameArray[i].substring(5) + '</td><td>' + outContent(value) + '</td></tr>';
        else if (nameArray[i].indexOf('[OUT_WU]') > -1)
            html += '<tr><td class="lname">' + nameArray[i].substring(8) + '</td><td>' + outContent_wu(value) + '</td></tr>';
        else if (nameArray[i].indexOf('[LINK]') > -1)
            html += '<tr><td class="lname">' + nameArray[i].substring(6) + '</td><td>' + linkContent(value) + '</td></tr>';
        else
            html += '<tr><td class="lname">' + nameArray[i] + '</td><td>' + (value == '' ? '-' : value) + '</td></tr>';
        if (i >= endIndex) return false;
    });
    return html;
}

function pdfContent(value) {
    if (value == '') return '-';
    else return '<a href="pdf/' + value + '.pdf' + '" onclick="return openPdf(this.href)">点击查看</a>';
}

function muliPdfContent(obj) {
    if (obj) {
        var pdf = new Array;
        for (var i = 0; i < obj.length; i++)
            pdf.push('<a href="' + ('pdf/' + obj[i].pdf + '.pdf') + '" onclick="return openPdf(this.href)">' + obj[i].name + '</a>');
        return pdf.join('&nbsp;&nbsp;&nbsp;');
    } else return '-';
}
//hk基金公告
function mulioutContent_hk(obj) {
    if (obj) {
        var url = new Array;
        for (var i = 0; i < obj.length; i++)
            url.push('<a href="' + obj[i].url + '" onclick="return setOutlingHref(this.href)">' + obj[i].name + '</a>' + obj[i].title);
        return url.join('&nbsp;&nbsp;&nbsp;');
    } else return '-';
}

function outContent_wu(value) {
    if (value == '') return '-';
    else return '<a href="javascript:;" onclick="return setOutlingHref(\'' + value + '\');">点击查看</a>';
}

function outContent(value) {
    if (value == '') return '-';
    else return '<a href="javascript:;" onclick="return setOutlingHref(\'' + value + '\');">点击查看</a>' + '（基金报告、绩效表现、持仓明细、资产配置等相关公告可在此查询）';
}

function linkContent(value) {
    if (value == '') return '-';
    else return '<a href="' + value + '" target="_blank">点击查看</a>';
}

function setOutlingHref(href) {
    if (href == '') return false;
    $('a#outpopuplink').attr('href', href);
    popup('outpopup');
    return false;
}

function popupWindow(fid, country) {
    if (fid) {
        window.open('popup.htm?FID=' + fid + '&country=' + country, '_blank', 'status=yes,location=no,menubar=no,resizable=yes,scrollbars=yes,toolbar=no,width=680,height=' + $(window).height() + ',screenX=' + (screen.availWidth - 680) / 2 + ',left=0' + (screen.availWidth - 680) / 2 + ',screenY=0,top=0');
    }
    return false;
}

function openPdf(href) {
    if (href.lastIndexOf('#') < 0) {
        window.open(href, '_blank', 'status=yes,location=no,menubar=no,resizable=yes,scrollbars=yes,toolbar=no,width=' + screen.availWidth + ',height=' + screen.availHeight);
    }
    return false;
}


function popup(id) {
    var obj = $('div#' + id);
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var objWidth = obj.outerWidth(true);
    var objHeight = obj.outerHeight(true);
    var oTop = 0;
    if (id == 'fundpopup') {
        $('#fundpopup .fundcontent').height($(window).height() - 101);
    } else {
        oTop = (windowHeight - objHeight) / 2;
    }
    $.blockUI({ message: obj, css: { width: 'auto', height: 'auto', border: '8px solid #003F84', cursor: 'default', top: oTop, left: (windowWidth - objWidth) / 2 }, overlayCSS: { cursor: 'default' } })
}

function closepopup() {
    $.unblockUI();
}