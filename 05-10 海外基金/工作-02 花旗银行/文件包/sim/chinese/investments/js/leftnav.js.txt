var nav1 = [{id:1,href:'secu_invest_fund.htm',query:'',name:'证券投资基金',target:'_self',child:[
				{id:2,href:'secu_invest_fund.htm',query:'',name:'基金筛选',target:'_self'},
				{id:3,href:'comp_list.htm',query:'',name:'基金公司',target:'_self', child:[
					{id:28,href:'fuguojijinguanli.htm', query:'', name:'富国基金管理有限公司',target:'_self'},
					{id:4,href:'jingshunchangcheng.htm', query:'', name:'景顺长城基金管理有限公司',target:'_self'},
					{id:5,href:'taidahongli.htm', query:'', name:'泰达宏利基金管理有限公司',target:'_self'},
					{id:30,href:'shangtoumogen.htm', query:'', name:'上投摩根基金管理有限公司',target:'_self'},
					{id:31,href:'haifutong.htm', query:'', name:'海富通基金管理有限公司',target:'_self'}
				]}
			]},
			{id:7,href:'enh_yield_account.htm',query:'',name:'汇利帐户',target:'_self'},
			{id:8,href:'premium_account.htm',query:'',name:'优利帐户',target:'_self'},
			{id:9,href:'stru_invest_account.htm',query:'',name:'结构性投资帐户',target:'_self',child:[
				{id:12,href:'sia_generic.htm',query:'',name:'结构性投资帐户简介',target:'_self'},
				{id:13,href:'pdf/sia_201506.pdf',query:'',name:'结构性投资帐户2015年第6期',target:'_blank'},
				{id:14,href:'pdf/eya_series.pdf',query:'',name:'结构性投资帐户汇利系列',target:'_blank'}
			]},
			{id:6,href:'stru_notes_account.htm',query:'',name:'代客境外理财 – 结构性票据',target:'_self'
			/*,child:[
				{id:15,href:'qdii_stru_notes.htm',query:'',name:'结构性票据简介',target:'_self'},
				{id:16,href:'pdf/audsn_20140810.pdf',query:'',name:'结构性票据2014年第10期',target:'_blank'}
			]*/
			},
			{id:10,href:'qdii_global_bond.htm',query:'',name:'代客境外理财 – 海外债券系列',target:'_self',child:[
				{id:17,href:'qdii_global_bond_fixed.htm',query:'',name:'海外固定票息债券系列',target:'_self'},
				{id:18,href:'qdii_global_bond_floating.htm',query:'',name:'海外浮动票息债券系列',target:'_self'}
			]},
			{id:11,href:'qdii_mutual_funds.htm',query:'',name:'代客境外理财 – 海外基金系列',target:'_self',child:[
				{id:19,href:'henderson.htm',query:'',name:'亨德森基金系列',target:'_self'},
				{id:20,href:'franklin.htm',query:'',name:'富兰克林邓普顿投资基金系列',target:'_self'},
				{id:21,href:'sc_mf.htm',query:'',name:'施罗德环球基金系列',target:'_self'},
				{id:22,href:'baida.htm',query:'',name:'百达基金系列',target:'_self'},
				{id:23,href:'lmmf.htm',query:'',name:'美盛环球基金系列',target:'_self'},
				{id:24,href:'meilin.htm',query:'',name:'贝莱德全球基金系列',target:'_self'},
				{id:25,href:'pimco.htm',query:'',name:'PIMCO基金系列',target:'_self'},
				{id:26,href:'baring.htm',query:'',name:'霸菱基金系列',target:'_self'},
				{id:27,href:'desheng.htm',query:'',name:'德盛安联基金系列',target:'_self'},
				{id:29,href:'jingshunjijin.htm',query:'',name:'景顺基金系列',target:'_self'},
				{id:30,href:'fuda.htm',query:'',name:'富达基金系列',target:'_self'}
			]}]
document.write('<h2>投资</h2><ul id="leftnav">');
$.each(nav1, function(i, item) {
	var url = window.location.pathname;
	var navIsActive = url.indexOf(item.href) > -1;
	
	document.write('<li><img src="/sim/chinese/images/left_arrow.gif"><a id="a' + item.id + '" href="' + item.href + ($.trim(item.query) ? '?' + item.query : '') + '" target="' + item.target + '"' + (navIsActive ? ' class="active"' : '') + '>' + item.name + '</a>');
	if (item.child) {
		if (navIsActive) document.write('<script>$(\'#a' + item.id +'\').prev().attr(\'src\',\'/chinese/images/left_arrow1.gif\')</script>');
		listContent(item, navIsActive, url, item.id);
	}
	document.write('</li>');
});

function listContent(item, navIsActive, url, outid) {
	document.write('<ul' + (!navIsActive ? ' style="display:none;"' : '') + '>');
	$.each(item.child, function(j, item2) {
		var subNavIsActive = url.indexOf(item2.href) > -1;
		document.write('<li><a id="a' + item2.id + '" href="' + item2.href + ($.trim(item2.query) ? '?' + item2.query : '') + '" target="' + item2.target + '"' + (subNavIsActive ? ' class="active"' : '') + '>' + item2.name + '</a>');
		if (subNavIsActive) {
			document.write('<script>$(\'#a' + item.id +'\').addClass(\'active\').parent().find(\'> ul\').show();$(\'#a' + item.id +'\').prev().attr(\'src\',\'/chinese/images/left_arrow1.gif\');</script>');
			if (outid != item.id)
				document.write('<script>$(\'#a' + outid +'\').addClass(\'active\').parent().find(\'> ul\').show();$(\'#a' + outid +'\').prev().attr(\'src\',\'/chinese/images/left_arrow1.gif\');</script>');
		}
		if (item2.child) listContent(item2, true, url, outid);
		document.write('</li>');
	});
	document.write('</ul>');
}
document.write('</ul>');