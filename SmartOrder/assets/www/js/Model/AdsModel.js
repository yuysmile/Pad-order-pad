/**
 * 广告控制类：主要负责广告的内容管理
 */
var Ads = Common.extend({
	init:function(){
		this.checkUrl = "http://"+SERVER+"/"+ProName+"/Ads/GetAds";
	},

	getAds:function(data){
		var jsonData;
		jsonData = eval(data);
//		var adnum = jsonData.adnum;
        var adname = jsonData[0].adname;
        var adtext = jsonData[0].adtext;
		//$(document).ready(function(){




        var result = "";
           $.each(jsonData,function(index,val){
              result += val.adname +" :"+ val.adtext + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
           });
        $(".ads_infor").html(result);

		//var adtext = jsonData[0].adtext;
		//var adcount = jsonData[0].adshowcount;
		var adpic = jsonData[0].adpic;
		var adpic2 = "http://"+SERVER+"/SmartOrder/Public/Pad/images/2.jpg";
		var adpic3 = "http://"+SERVER+"/SmartOrder/Public/Pad/images/3.jpg";
		var adpic4 = "http://"+SERVER+"/SmartOrder/Public/Pad/images/7.jpeg";

		console.log(adpic2);
		console.log(adpic3);
		console.log(adpic4);
		// 取图片地址没有问题


		console.log(adtext);
        modelCon.adsText = adtext;
        var adsloop = $("#ads").get(0);
        var oAdPic = $(".ad_pic_1").get(0);
        var oAdPic1 = $(".ad_pic_1").get(1);
        var oAdPic2 = $(".ad_pic_2").get(0);
        var oAdPic22 = $(".ad_pic_2").get(1);
        var oAdPic3 = $(".ad_pic_3").get(0);
        var oAdPic33 = $(".ad_pic_3").get(1);
        var oAdPic4 = $(".ad_pic_4").get(0);
        var oAdPic44 = $(".ad_pic_4").get(1);

        // $('#ad_pic_1').src = "Images/1.jpg";
         oAdPic.src = adpic;
        oAdPic1.src = adpic;
        oAdPic2.src = adpic2;
        oAdPic22.src = adpic2;
        oAdPic3.src = adpic3;
        oAdPic33.src = adpic3;
        oAdPic4.src = adpic4;
        oAdPic44.src = adpic4;

       adsloop.loop = adcount;
	},
	showAds:function(){
	    this.ajaxRequest();
	},
	ajaxRequest:function(){
	    this._super("",this.checkUrl,this.getAds);
	},
})