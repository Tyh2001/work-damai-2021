 var imagePath = 'images/';

        function ismobileandtablet() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM;
        }

        var dynamic = {
            title: '最新<span>市场动态</span>',
            data: [
                { id: 1, title: '月度市场展望', date: '2017年4月', href: '/sim/chinese/pdf/Market_Outloook.pdf', target: '_blank' },
                { id: 2, title: '每周金融市场分析', date: '2017年4月17日', href: '/sim/chinese/pdf/Financial_Market_Analysis.pdf', target: '_blank' },
                { id: 3, title: '每日市场聚焦', date: '2017年4月25日', href: '/sim/chinese/investments/daily/index.html ', target: '_blank' }
            ]
        };

        var investment = {
            title: '投资',
            data: [
                { id: 1, text: '本地证券投资资金', href: '/sim/chinese/investments/secu_invest_fund.htm', target: '_self' },
                { id: 2, text: '香港互认资金', href: '/sim/chinese/investments/hk_mutual_fund.htm', target: '_self' },
                { id: 3, text: '结构性存款汇利系列', href: '/sim/chinese/investments/enh_yield_account.htm', target: '_self' },
                { id: 4, text: '结构性存款优利系列', href: '/sim/chinese/investments/premium_account.htm', target: '_self' },
                { id: 5, text: '结构性存款/结构性存款添利系列', href: '/sim/chinese/investments/stru_invest_account.htm', target: '_self' },
                { id: 6, text: '代客境外理财-结构性票据', href: '/sim/chinese/investments/stru_notes_account.htm', target: '_self' },
                { id: 7, text: '代客境外理财-海外债券系列', href: '/sim/chinese/investments/qdii_global_bond.htm', target: '_self' },
                { id: 8, text: '代客境外理财-海外基金系列', href: '/sim/chinese/investments/qdii_mutual_funds.htm', target: '_self' },
                { id: 9, text: '投资课堂', href: '/sim/chinese/investments/investment_class.htm', target: '_self' }
            ]
        };

        var video = {
            title: '最新<span>视频</span>',
            data: [
                /*{id: 1, title: '2017年迎接投资新时代', date: '2016年12月21日', source: '/sim/chinese/video/investment/invest4/mov/video_2017.mp4', img: 'invest4.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 2, title: '四条黄金投资法则，你都做到了吗？', date: '2017年3月11日', source: '/sim/chinese/video/investment/invest5/mov/video1.mp4', img: 'invest5.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 3, title: '中国今年的增长会超出预期吗？', date: '2017年5月19日', source: '/sim/chinese/video/investment/Flow_Will/mov/video_Will.mp4', img: 'Flow_Will.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 4, title: '特朗普效应是否能继续拉升市场？', date: '2017年5月19日', source: '/sim/chinese/video/investment/Flow_Trump/mov/video_Trump.mp4', img: 'Flow_Trump.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 5, title: '花旗银行2017年中展望：在稳健增长中保持谨慎乐观', date: '2017年7月20日', source: '/sim/chinese/MarketOutlook/video/2017_Mid_Year_Outlook_v4_170628.mp4', img: '2017_Mid_Year_Outlook_v4_170628.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 6, title: '颠覆性创新公司：不可忽视的投资标的', date: '2017年8月3日', source: '/sim/chinese/video/170807.mp4', img: 'video_170807.jpg', href: 'video.html', target: '_self'},
                /*{id: 7, title: '花旗2018市场展望-繁华未尽 配置为王', date: '2017年12月26日', source: 'https://campaign.yeahc.com/video/fhwj180106.mp4', img: 'video_180106.jpg', href: 'video.html', target: '_self'},*/
                /*{id: 8, title: '超级人工智能  预见未来的你', date: '2018年2月1日', source: 'https://ceshi.iguangxiong.cn/activity_res/otherPro/citi/20180611.mp4', img: 'video_20180201.jpg', href: 'video.html', target: '_self'},*/
                { id: 8, title: '与沃顿商学院教授对话 看投资者情绪如何左右市场', date: '2018年2月22日', source: '/sim/chinese/video/180222.mp4', img: 'video_20180222.jpg', href: 'video.html', target: '_self' },
                { id: 9, title: '山穷水尽还是柳暗花明？与明星基金经理聊美股', date: '2018年3月29日', source: 'https://campaign.yeahc.com/video/sqsj20180411.mp4', img: 'video_20180329.jpg', href: 'video.html', target: '_self' },
                { id: 10, title: '亚洲有“钱”景，债市论赢家', date: '2018年7月3日', source: 'https://campaign.yeahc.com/video/huaqifangtanv071102.mp4', img: 'video_201803292.jpg', href: 'video.html', target: '_self' },
                { id: 11, title: '没有天生强大的投资，只有穿越牛熊的配置', date: '2018年8月10日', source: 'https://campaign.yeahc.com/video/nsxs20180813.mp4', img: 'video_201803291.jpg', href: 'video.html', target: '_self' },
                { id: 12, title: '投资未来，掘金人工智能板块', date: '2018年8月27日', source: 'https://campaign.yeahc.com/video/rgzn20180827.mp4', img: 'video_201803293.jpg', href: 'video.html', target: '_self' },
                { id: 13, title: '置业成功入门法则', date: '2018年9月7日', source: 'https://campaign.yeahc.com/video/zycg20180910.mp4', img: 'video_201803294.jpg', href: 'video.html', target: '_self' }
                ,
                { id: 14, title: '开年直播：专家解锁投资布局新思维', date: '2019年1月22日', source: 'https://campaign.yeahc.com/video/clzw201904221.mp4', img: 'video_201803295.jpg', href: 'video.html', target: '_self' },
                { id: 15, title: '2019下半年度展望：<br />战胜周期-新常态下的投资思维', date: '2019年7月3日', source: 'http://1252310474.vod2.myqcloud.com/de7e771cvodgzp1252310474/788d6a105285890791318126484/rQSytM5aDAgA.mp4', img: 'video_in_01.jpg', href: 'video.html', target: '_self' },
                { id: 16, title: '2020逐光前行：花旗年度投资展望', date: '2020年1月15日', source: 'https://www.infinitymcn.com/video/001.mp4', img: 'video_in_02.jpg', href: 'video.html', target: '_self' },
                { id: 17, title: '波动市况,如何强化资产"免疫力"?', date: '2020年04月02日', source: 'https://www.infinitymcn.com/video/citi.mp4', img: 'video_in_03.jpg', href: 'video.html', target: '_self' },
                { id: 18, title: '2021牛势再起：花旗年度投资展望', date: '2021年01月21日', source: 'https://www.infinitymcn.com/video/citi_02.mp4', img: 'video_in_04.jpg', href: 'video.html', target: '_self' }
            ]
        };
        var comment = {
            title: '往期<span>即时评论</span>',
            data: [
                { id: 1, title: '这次民调靠谱！马克龙和勒庞杀入决战', date: '2017年4月24日', href: 'comment_old_1.html', target: '_self' },
                { id: 2, title: '“悬浮议会”再现 英国路在何方？', date: '2017年6月9日', href: 'comment_old_2.html', target: '_self' },
                { id: 3, title: '中国资本市场加速开放', date: '2017年8月10日', href: 'comment_old_3.html', target: '_self' },
                { id: 4, title: '如何淡定应对 “缩表时代”', date: '2017年10月17日', href: 'comment_old_4.html', target: '_self' },
                { id: 5, title: '全球股债遭遇调整 牛市面临拐点了吗？', date: '2018年2月06日', href: 'comment_old_5.html', target: '_self' },
                { id: 6, title: '一文看懂近期市场三大焦点', date: '2018年5月30日', href: 'comment_old_6.html', target: '_self' },
                { id: 7, title: '新兴市场震荡： 潘多拉魔盒还是茶杯里的风暴？', date: '2018年9月06日', href: 'comment_old_7.html', target: '_self' },
                { id: 8, title: '宏观经济改善，股市未来可期', date: '2019年4月23日', href: 'comment_old_8.html', target: '_self' },
                { id: 9, title: '贸易摩擦加剧，无需过分担忧', date: '2019年5月14日', href: 'comment_old_9.html', target: '_self' },
                { id: 10, title: '贸易局势左右市场情绪 企业基本面维持强劲', date: '2019年5月21日', href: 'comment_old_10.html', target: '_self' },
                { id: 11, title: '短期波动不改油价中长期走强趋势', date: '2019年5月27日', href: 'comment_old_11.html', target: '_self' },
                { id: 12, title: '关税大棒可能拖累经济增长', date: '2019年6月4日', href: 'comment_old_12.html', target: '_self' },
                { id: 13, title: '摩擦阴霾中的全球投资策略', date: '2019年6月11日', href: 'comment_old_13.html', target: '_self' },
                { id: 14, title: '对周期保持敬畏之心', date: '2019年6月18日', href: 'comment_old_14.html', target: '_self' },
                { id: 15, title: '全球货币宽松态势成型', date: '2019年6月25日', href: 'comment_old_15.html', target: '_self' },
                { id: 16, title: '7月宏观与市场展望', date: '2019年7月3日', href: 'comment_old_16.html', target: '_self' },
                { id: 17, title: '下一次回撤仍可布局', date: '2019年7月9日', href: 'comment_old_17.html', target: '_self' },
                { id: 18, title: '二季度美国企业盈利前瞻', date: '2019年7月16日', href: 'comment_old_18.html', target: '_self' },
                { id: 19, title: '欧美央行重启宽松倒计时', date: '2019年7月23日', href: 'comment_old_19.html', target: '_self' },
                { id: 20, title: '8月宏观与市场展望', date: '2019年7月30日', href: 'comment_old_20.html', target: '_self' },
                { id: 21, title: '被贸易摩擦“绑架”的美联储', date: '2019年8月6日', href: 'comment_old_21.html', target: '_self' },
                { id: 22, title: '贸易摩擦可能增加美元上行压力', date: '2019年8月13日', href: 'comment_old_22.html', target: '_self' },
                { id: 23, title: '花旗熊市清单显示仍然应该逢低布局', date: '2019年8月20日', href: 'comment_old_23.html', target: '_self' },
                { id: 24, title: '股票或成为收益寻求者的新焦点', date: '2019年8月27日', href: 'comment_old_24.html', target: '_self' },
                { id: 25, title: '9月宏观与市场展望', date: '2019年9月2日', href: 'comment_old_25.html', target: '_self' },
                { id: 26, title: '美股市场情绪指标逐渐接近买入信号区间', date: '2019年9月10日', href: 'comment_old_26.html', target: '_self' },
                { id: 27, title: '未来3-6个月或是美股最佳上行时间窗口', date: '2019年9月17日', href: 'comment_old_27.html', target: '_self' },
                { id: 28, title: '花旗上调全球股票配置建议', date: '2019年9月24日', href: 'comment_old_28.html', target: '_self' },
                { id: 29, title: '10月宏观与市场展望', date: '2019年9月30日', href: 'comment_old_29.html', target: '_self' },
                { id: 30, title: '脱欧谈判现转机，英国资产将可期', date: '2019年10月15日', href: 'comment_old_30.html', target: '_self' },
                { id: 31, title: '近期影响市场情绪的重要事件', date: '2019年10月22日', href: 'comment_old_31.html', target: '_self' },
                { id: 32, title: '11月宏观与市场展望', date: '2019年10月29日', href: 'comment_old_32.html', target: '_self' },
                { id: 33, title: '制造业复苏可能带来的投资机会', date: '2019年11月5日', href: 'comment_old_33.html', target: '_self' },
                { id: 34, title: '屡创历史收盘新高，美股未来何去何从？', date: '2019年11月13日', href: 'comment_old_34.html', target: '_self' },
                { id: 35, title: '标普500屡创新高 各大板块盈利表现参差', date: '2019年11月19日', href: 'comment_old_35.html', target: '_self' },
                { id: 36, title: '股市强劲反弹下，风险对冲依然重要', date: '2019年11月27日', href: 'comment_old_36.html', target: '_self' },
                { id: 37, title: '史上最长的牛市', date: '2019年12月3日', href: 'comment_old_37.html', target: '_self' },
                { id: 38, title: '2020年展望概览：保持投资，继续前行', date: '2019年12月12日', href: 'comment_old_38.html', target: '_self' },
                { id: 39, title: '2020年1月宏观与市场展望', date: '2019年12月20日', href: 'comment_old_39.html', target: '_self'},
                { id: 40, title: '忐忑的投资机构到底是怎么想的？', date: '2019年12月25日', href: 'comment_old_40.html', target: '_self' },
                { id: 41, title: '逃离负利率陷阱', date: '2020年1月7日', href: 'comment_old_41.html', target: '_self' },
                { id: 42, title: '2020展望系列之全球股市：上涨待续', date: '2020年1月8日', href: 'comment_old_42.html', target: '_self' },
                { id: 43, title: '2019年四季度美国企业盈利或温和增长', date: '2020年1月14日', href: 'comment_old_43.html', target: '_self' },
                { id: 44, title: '短期波动不改长期趋势', date: '2020年2月5日', href: 'comment_old_44.html', target: '_self' },
                { id: 45, title: '疫情挑战下的投资配置', date: '2020年2月12日', href: 'comment_old_45.html', target: '_self' },
                { id: 46, title: '2020年3月宏观与市场展望', date: '2020年2月19日', href: 'comment_old_46.html', target: '_self' },
                { id: 47, title: '情绪面或影响未来经济增速', date: '2020年2月25日', href: 'comment_old_47.html', target: '_self' },
                { id: 48, title: '美股下跌10%后，未来何去何从？', date: '2020年3月4日', href: 'comment_old_48.html', target: '_self' },
                { id: 49, title: '否极泰来之前还需谋定而后动', date: '2020年3月11日', href: 'comment_old_49.html', target: '_self' },
                { id: 50, title: '中国货币政策继续宽松，股市仍有上行空间', date: '2020年3月18日', href: 'comment_old_50.html', target: '_self' },
                { id: 51, title: '2020年4月宏观经济及市场展望', date: '2020年3月24日', href: 'comment_old_51.html', target: '_self' },
                { id: 52, title: '疫情之下的机会与风险', date: '2020年3月31日', href: 'comment_old_52.html', target: '_self' },
                { id: 53, title: '疫情进入拉锯战，市场风险与机会如何', date: '2020年4月24日', href: 'comment_old_53.html', target: '_self' },
                { id: 54, title: '未来十年亚洲十大趋势', date: '2020年5月14日', href: 'comment_old_54.html', target: '_self' },
                { id: 55, title: '花旗趋势投资主题甄选', date: '2020年7月9日', href: 'comment_old_55.html', target: '_self' },
                { id: 56, title: '弱势美元背景下的投资策略', date: '2020年8月11日', href: 'comment_old_56.html', target: '_self' },
                { id: 57, title: '低利率环境下的投资策略', date: '2020年9月24日', href: 'comment_old_57.html', target: '_self' },
                { id: 58, title: '展望2021：风口浪尖上的中国互联网', date: '2021年01月21日', href: 'comment_old_58.html', target: '_self' },
                { id: 59, title: '为什么要关注ESG投资？', date: '2021年02月26日', href: 'comment_old_59.html', target: '_self' },
                { id: 60, title: '从衰退到复苏：波动向上，价值回归', date: '2021年03月26日', href: 'comment_old_60.html', target: '_self' },
                { id: 61, title: '美元绝地反击，市场投资逻辑如何转变？', date: '2021年04月09日', href: 'comment_old_61.html', target: '_self' },
                { id: 62, title: '通胀上行，科技板块还能入吗？', date: '2021年05月20日', href: 'comment_old_62.html', target: '_self' },
                { id: 63, title: '2021年中展望：顺势而为，借势而变', date: '2021年06月17日', href: 'comment_old_63.html', target: '_self' },
                { id: 64, title: '变中寻不变，布局新常态', date: '2021年07月29日', href: 'comment_old_64.html', target: '_self' },
                { id: 65, title: '驾驭低利率时代：增强收益的三大法宝', date: '2021年08月13日', href: 'comment_old_65.html', target: '_self' },
                { id: 66, title: '担忧蔓延，但这不是“雷曼时刻”', date: '2021年09月23日', href: 'comment.html', target: '_self' }
            ]
        };

        // 修改数据顺序
        function changeComment(data) {
            var data = data.data;
            // 获取到页面链接带的评论id
            var arr = window.location.href.split("/");
            var brr = arr[arr.length - 1].split("_");
            if (brr.length > 1) {
                var commentId = Number(brr[brr.length - 1].split(".")[0]) - 1;
                data[commentId].id = data[commentId].id - 3;
                data[commentId - 1].id = data[commentId - 1].id + 1;
                data[commentId - 2].id = data[commentId - 2].id + 1;
                comment.data = data;
            }
        }
        changeComment(comment);

        var currency = {
            title: '外汇汇率',
            data: [
                { id: 1, text: '人民币', value: 'CNY' },
                { id: 2, text: '澳元', value: 'AUD' },
                { id: 3, text: '加元', value: 'CAD' },
                { id: 4, text: '瑞士法郎', value: 'CHF' },
                { id: 5, text: '欧元', value: 'EUR' },
                { id: 6, text: '英镑', value: 'GBP' },
                { id: 7, text: '港币', value: 'HKD' },
                { id: 8, text: '日元', value: 'JPY' },
                { id: 9, text: '新西兰元', value: 'NZD' },
                { id: 10, text: '新加坡元', value: 'SGD' },
                { id: 11, text: '美元', value: 'USD' },
                { id: 12, text: '黄金现价', value: 'XAU' }
            ]
        }

        function gup(name) {
            name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
            var regexS = '[\\?&]' + name + '=([^&#]*)';
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results == null) return '';
            else return decodeURIComponent(results[1]);
        }

        function writeDynamic(config) {
            document.write(getHTML(config, dynamic, getDynamicHTML));
        }

        function writeInvestment(config) {
            document.write(getHTML(config, investment, getInvestmentHTML));
        }

        function writeVideo(config) {
            var config = $.extend({
                isLink: false
            }, config);
            document.write(getHTML(config, video, getVideoHTML));
        }

        function writeComment(config) {
            document.write(getHTML(config, comment, getCommentHTML));
        }

        var showCurrencyValue = undefined,
            topCurrencyValue = undefined;
        function writeCurrency(config) {
            if (self != top) {
                top.location = self.location;
            }
            $(window).on('load', function () {
                var loc = location.href.split(':');
                if (loc[0] == 'http') {
                    location.href = 'https:' + loc[1];
                }
            })

            var config = $.extend({
                defaultId: 1,
                result: [],	//格式->{field: fieldname, value: fieldvalues} fieldname现有字段 fieldvalues是数组，所有需要检索的数据
                resultTopData: [],	//格式->{field: fieldname, value: fieldvalues} fieldname现有字段 fieldvalues是数组，所有需要检索的数据
                hasTips: true	//是否有提示
            }, config);
            if (config.result.length > 0) {
                showCurrencyValue = _.pluck(searchData(config.result, currency.data), 'value');
            }
            if (config.resultTopData.length > 0) {
                var value = new Array;
                _.each(config.resultTopData, function (td) {
                    value.push(_.find(currency.data, _.matcher(td)).value);
                });
                topCurrencyValue = value;
            }
            document.write(getHTML(config, currency, getCurrencyHTML));
        }

        function getHTML(config, data, getRightPart) {
            var config = $.extend({
                search: [],	//查找指定数据 格式->{field: fieldname, value: fieldvalues} fieldname现有字段 fieldvalues是数组，所有需要检索的数据
                exceptSearch: [],	//除去指定数据 格式->{field: fieldname, value: fieldvalues} fieldname现有字段 fieldvalues是数组，所有需要检索的数据
                exceptNew: false,	//除去最新的，id最大就是最新的
                /*---- 以上条件从上往下只会执行一个 ----*/
                sortField: '',	//指定字段排序 格式->fieldname|ad fieldname现有字段 ad任选一个 a正序 d倒序
                topData: [], //置顶数据 格式->数据中的任意字段和该字段的值
                top: 0,	//前几个数据 0为所有
                rightFirst: false	//是否是右侧导航的第一个
            }, config);

            var title = data.title,
                data = data.data;

            if (config.search.length > 0) {
                data = searchData(config.search, data);
            } else if (config.exceptSearch.length > 0) {
                data = exceptData(config.exceptSearch, data);
            } else if (config.exceptNew) {
                data = exceptData([{ field: 'id', value: [_.max(data, function (d) { return d.id; }).id] }], data);
            }

            if (config.sortField != '') {
                data = sortData(config.sortField, data);
            }
            if (config.topData.length > 0) {
                data = moveDataToTop(config.topData, data);
            }
            if (config.top > 0) {
                data = getTopData(config.top, data);
            }
            return getRightPart(data, config, title);
        }

        function searchData(conditions, data) {
            return _.filter(data, function (d) {
                return _.every(conditions, function (c) {
                    return _.contains(c.value, d[c.field]);
                });
            });
        }

        function exceptData(conditions, data) {
            return _.reject(data, function (d) {
                return _.every(conditions, function (c) {
                    return _.contains(c.value, d[c.field]);
                });
            });
        }

        function sortData(sortField, data) {
            if (sortField.indexOf('|') < 0) throw new Error('error data');
            else {
                var fieldname = sortField.split('|')[0],
                    sort = sortField.split('|')[1];
                return _.sortBy(data, function (d) {
                    switch (sort) {
                        case 'a': return d[fieldname]; break;
                        case 'd': return -d[fieldname]; break;
                        default: throw new Error('error data'); break;
                    }
                });
            }
        }

        function moveDataToTop(topData, data) {
            var orignData = data,
                noDataCount = 0;
            _.each(topData, function (td, i) {
                var findIndex = _.findIndex(orignData, _.matcher(td));
                if (findIndex > -1)
                    orignData.splice(i - noDataCount, 0, orignData.splice(findIndex, 1)[0]);
                else
                    noDataCount++;
            });
            return orignData;
        }

        function getTopData(top, data) {
            return data.slice(0, top);
        }

        function titleHTML(isFirst, title) {
            return _.template('<div class="title<%= first %>"><div class="text"><%= title %></div><div class="clear"></div><div class="line"></div></div><div class="clear"></div>')({
                first: isFirst ? ' first' : '',
                title: title
            });
        }

        function getDynamicHTML(data, config, title) {
            return _.template('<%= title %><%= market %><div class="clear"></div>')({
                title: titleHTML(config.rightFirst, title),
                market: _.map(data, function (d) {
                    return _.template('<a class="market" href="<%= d.href %>" target="<%= d.target %>"><%= d.title %><!--<br><span><%= d.date %></span>--></a>')({
                        d: d
                    });
                }).join('')
            });
        }

        function getCommentHTML(data, config, title) {
            return _.template('<%= title %><%= market %><div class="clear"></div>')({
                title: titleHTML(config.rightFirst, title),
                market: _.map(data, function (d) {
                    return _.template('<a class="market" href="<%= d.href %>" target="<%= d.target %>"><%= d.title %><br><span><%= d.date %></span></a>')({
                        d: d
                    });
                }).join('')
            });
        }

        function getInvestmentHTML(data, config, title) {
            return _.template('<%= title %><%= investment %><div class="clear"></div>')({
                title: titleHTML(config.rightFirst, title),
                investment: _.map(data, function (d) {
                    return _.template('<a class="investment" href="<%= d.href %>" target="<%= d.target %>"><%= d.text %></a>')({
                        d: d
                    });
                }).join('')
            });
        }

        function getVideoHTML(data, config, title) {
            return _.template('<%= title %><%= video %><div class="clear"></div>')({
                title: titleHTML(config.rightFirst, title),
                video: _.map(data, function (d) {
                    var temp;
                    if (config.isLink)
                        temp = _.template('<a class="more_video" href="<%= d.href %>" target="<%= d.target %>"><div class="video_img"><img src="<%= imagePath + d.img %>" /><img src="<%= imagePath %>play.png" class="play" /></div><div class="description"><div class="title"><%= d.title %></div><div class="date"><%= d.date %></div></div></a>');
                    else {
                        if (d.source.match(/^http/i))
                            temp = _.template('<div class="more_video" onclick="openVideoPopup(this, \'<%= d.source %>\')"><div class="video_img"><img src="<%= imagePath + d.img %>" /><img src="<%= imagePath %>play.png" class="play" /></div><div class="description"><div class="title"><%= d.title %></div><div class="date"><%= d.date %></div></div></div>');
                        else
                            temp = _.template('<div class="more_video" onclick="openVideoPopup(this, \'<%= (ismobileandtablet() ? \'https://uat.onlinebanking.citi.com.cn\' : \'' + window.location.protocol + '//www.citibank.com.cn\') + d.source %>\')"><div class="video_img"><img src="<%= imagePath + d.img %>" /><img src="<%= imagePath %>play.png" class="play" /></div><div class="description"><div class="title"><%= d.title %></div><div class="date"><%= d.date %></div></div></div>');
                    }
                    return temp({
                        d: d
                    });
                }).join('')
            });
        }

        function currencyTips() {
            var point = [
                '以上外币兑换汇率仅供参考，其变更无需事先通知。黄金现价的信息以路透社公布的黄金价格的公共信息为依据，仅供参考。我行目前不提供黄金交易服务。',
                '以上所有汇率适用于小于25,000美元的交易。如果您想要了解金额大于或等于25,000美元的外币兑换交易，或本表中未列出的其他外币兑换汇率， 请致电花旗24小时服务热线400-821-1880 或800-830-1880 (限中国大陆固话拨打)，境外请拨打(+86)-(20)-3880-1267 (花旗个人银行及花旗商务客户) 或 (+86)-(21)-3896-9500 (花旗信用卡客户)以获得即时帮助。'
            ];
            var html = new Array;
            html.push('<div class="currency_tips">请注意<ol>');
            html.push(_.map(point, function (d) {
                return '<li>' + d + '</li>'
            }).join(''));
            html.push('</ol></div>');
            return html.join('');
        }

        function getCurrencyHTML(data, config, title) {
            var defaultOption;
            if (gup('currencyCode') != '') {
                defaultOption = _.find(data, { value: gup('currencyCode').toUpperCase() });
                if (!defaultOption) defaultOption = _.find(data, { id: config.defaultId });
            } else defaultOption = _.find(data, { id: config.defaultId });

            if (defaultOption) {
                return _.template('<%= title %><div class="rate"><div class="currency">请选择需查询汇率的币种</div><div class="select"><div class="text"><%= defaultText %></div><select id="currencyCode" onchange="selectChange(this.value)"><%= option %></select></div><div class="date">生效日期：<span id="date"></span></div><div class="clear"></div><div class="scroll"><table id="currency_date"></table></div></div><div class="clear"></div><%= tips %>')({
                    title: titleHTML(config.rightFirst, title),
                    defaultText: defaultOption.text,
                    option: _.map(data, function (d) {
                        return _.template('<option value="<%= d.value %>"<%= selected %>><%= d.text %></option>')({
                            d: d,
                            selected: d.id == defaultOption.id ? ' selected="selected"' : ''
                        });
                    }).join(''),
                    tips: config.hasTips ? currencyTips() : ''
                });
            } else throw new Error('该币种不存在');
        }