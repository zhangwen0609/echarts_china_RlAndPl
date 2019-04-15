var geoCoordMap = {
    	    '上海': [121.4648,31.2891],
    	    '东莞': [113.8953,22.901],
    	    '东营': [118.7073,37.5513],
    	    '中山': [113.4229,22.478],
    	    '临汾': [111.4783,36.1615],
    	    '临沂': [118.3118,35.2936],
    	    '丹东': [124.541,40.4242],
    	    '丽水': [119.5642,28.1854],
    	    '乌鲁木齐': [87.9236,43.5883],
    	    '佛山': [112.8955,23.1097],
    	    '保定': [115.0488,39.0948],
    	    '兰州': [103.5901,36.3043],
    	    '包头': [110.3467,41.4899],
    	    '北京': [116.4551,40.2539],
    	    '北海': [109.314,21.6211],
    	    '南京': [118.8062,31.9208],
    	    '南宁': [108.479,23.1152],
    	    '南昌': [116.0046,28.6633],
    	    '南通': [121.1023,32.1625],
    	    '厦门': [118.1689,24.6478],
    	    '台州': [121.1353,28.6688],
    	    '合肥': [117.29,32.0581],
    	    '呼和浩特': [111.4124,40.4901],
    	    '咸阳': [108.4131,34.8706],
    	    '哈尔滨': [127.9688,45.368],
    	    '唐山': [118.4766,39.6826],
    	    '嘉兴': [120.9155,30.6354],
    	    '大同': [113.7854,39.8035],
    	    '大连': [122.2229,39.4409],
    	    '天津': [117.4219,39.4189],
    	    '太原': [112.3352,37.9413],
    	    '威海': [121.9482,37.1393],
    	    '宁波': [121.5967,29.6466],
    	    '宝鸡': [107.1826,34.3433],
    	    '宿迁': [118.5535,33.7775],
    	    '常州': [119.4543,31.5582],
    	    '广州': [113.5107,23.2196],
    	    '廊坊': [116.521,39.0509],
    	    '延安': [109.1052,36.4252],
    	    '张家口': [115.1477,40.8527],
    	    '徐州': [117.5208,34.3268],
    	    '德州': [116.6858,37.2107],
    	    '惠州': [114.6204,23.1647],
    	    '成都': [103.9526,30.7617],
    	    '扬州': [119.4653,32.8162],
    	    '承德': [117.5757,41.4075],
    	    '拉萨': [91.1865,30.1465],
    	    '无锡': [120.3442,31.5527],
    	    '日照': [119.2786,35.5023],
    	    '昆明': [102.9199,25.4663],
    	    '杭州': [119.5313,29.8773],
    	    '枣庄': [117.323,34.8926],
    	    '柳州': [109.3799,24.9774],
    	    '株洲': [113.5327,27.0319],
    	    '武汉': [114.3896,30.6628],
    	    '汕头': [117.1692,23.3405],
    	    '江门': [112.6318,22.1484],
    	    '沈阳': [123.1238,42.1216],
    	    '沧州': [116.8286,38.2104],
    	    '河源': [114.917,23.9722],
    	    '泉州': [118.3228,25.1147],
    	    '泰安': [117.0264,36.0516],
    	    '泰州': [120.0586,32.5525],
    	    '济南': [117.1582,36.8701],
    	    '济宁': [116.8286,35.3375],
    	    '海口': [110.3893,19.8516],
    	    '淄博': [118.0371,36.6064],
    	    '淮安': [118.927,33.4039],
    	    '深圳': [114.5435,22.5439],
    	    '清远': [112.9175,24.3292],
    	    '温州': [120.498,27.8119],
    	    '渭南': [109.7864,35.0299],
    	    '湖州': [119.8608,30.7782],
    	    '湘潭': [112.5439,27.7075],
    	    '滨州': [117.8174,37.4963],
    	    '潍坊': [119.0918,36.524],
    	    '烟台': [120.7397,37.5128],
    	    '玉溪': [101.9312,23.8898],
    	    '珠海': [113.7305,22.1155],
    	    '盐城': [120.2234,33.5577],
    	    '盘锦': [121.9482,41.0449],
    	    '石家庄': [114.4995,38.1006],
    	    '福州': [119.4543,25.9222],
    	    '秦皇岛': [119.2126,40.0232],
    	    '绍兴': [120.564,29.7565],
    	    '聊城': [115.9167,36.4032],
    	    '肇庆': [112.1265,23.5822],
    	    '舟山': [122.2559,30.2234],
    	    '苏州': [120.6519,31.3989],
    	    '莱芜': [117.6526,36.2714],
    	    '菏泽': [115.6201,35.2057],
    	    '营口': [122.4316,40.4297],
    	    '葫芦岛': [120.1575,40.578],
    	    '衡水': [115.8838,37.7161],
    	    '衢州': [118.6853,28.8666],
    	    '西宁': [101.4038,36.8207],
    	    '西安': [109.1162,34.2004],
    	    '贵阳': [106.6992,26.7682],
    	    '连云港': [119.1248,34.552],
    	    '邢台': [114.8071,37.2821],
    	    '邯郸': [114.4775,36.535],
    	    '郑州': [113.4668,34.6234],
    	    '鄂尔多斯': [108.9734,39.2487],
    	    '重庆': [107.7539,30.1904],
    	    '金华': [120.0037,29.1028],
    	    '铜川': [109.0393,35.1947],
    	    '银川': [106.3586,38.1775],
    	    '镇江': [119.4763,31.9702],
    	    '长春': [125.8154,44.2584],
    	    '长沙': [113.0823,28.2568],
    	    '长治': [112.8625,36.4746],
    	    '阳泉': [113.4778,38.0951],
    	    '青岛': [120.4651,36.3373],
    	    '韶关': [113.7964,24.7028]
    	};

    	var XAData = [
    	    [{name:'西安'}, {name:'北京',value:100}],
    	    [{name:'西安'}, {name:'上海',value:100}],
    	    [{name:'西安'}, {name:'广州',value:100}],
    	    [{name:'西安'}, {name:'西宁',value:100}],
    	    [{name:'西安'}, {name:'银川',value:100}]
    	];

    	var XNData = [
    	    [{name:'西宁'}, {name:'北京',value:100}],
    	    [{name:'西宁'}, {name:'上海',value:100}],
    	    [{name:'西宁'}, {name:'广州',value:100}],
    	    [{name:'西宁'}, {name:'西安',value:100}],
    	    [{name:'西宁'}, {name:'银川',value:100}]
    	];

    	var YCData = [
    	    [{name:'银川'}, {name:'北京',value:100}],
    	    [{name:'银川'}, {name:'广州',value:100}],
    	    [{name:'银川'}, {name:'上海',value:100}],
    	    [{name:'银川'}, {name:'西安',value:100}],
    	    [{name:'银川'}, {name:'西宁',value:100}],
    	];
var datavalue = [{
	name: '辽宁',
	value: 20
}, {
	name: '吉林',
	value: 100
}, {
	name: '黑龙江',
	value: 40
}, {
	name: '山西',
	value: 50
}, {
	name: '陕西',
	value: 1
}, {
	name: '内蒙古',
	value: 90
}, {
	name: '西藏',
	value: 100
}, {
	name: '重庆',
	value: 100
}];
    	var convertData = function (data) {
    			
    	    var res = [];
    	    for (var i = 0; i < data.length; i++) {
    	    	
    	        var dataItem = data[i];

    	        var fromCoord = geoCoordMap[dataItem[0].name];
    	        var toCoord = geoCoordMap[dataItem[1].name];
    	        if (fromCoord && toCoord) {
    	            res.push({
    	                fromName: dataItem[0].name,
    	                toName: dataItem[1].name,
    	                coords: [fromCoord, toCoord],
    	                value: dataItem[1].value
    	            });
    	        }
    	    }
    	    return res;
    	   	
    	};
var color=['red','yellow','blue'];
var series=[{
	type: 'map3D',
	//好像没什么作用，难道要配套使用吗？？
	name: '地图热力数据',
	map: 'china',
	//后处理特效的相关配置，后处理特效可以为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果。可以让整个画面更富有质感。
	postEffect: {
		enable: true,
		//高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现0 - 255范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现
		//但是没有太大感觉呢？？
		bloom: {
			enable: true,
			bloomIntensity: 0.1
		},
		//屏幕空间的环境光遮蔽效果。环境光遮蔽可以让角落，缝隙等大部分光无法到达的区域变暗，是传统的阴影贴图的补充，可以让整个场景更加自然，有层次。
		screenSpaceAmbientOcclusion: false,
		//颜色纠正和调整
		colorCorrection: {
			enable: true,
			lookupTexture: 'lookup.png',
			//画面曝光度
			exposure: 0,
			//亮度
			brightness: 0,
			//对比度
			contrast: 1,
			//饱和度
			saturation: 1
		},
		//投影方式
		viewControl: {
			//透视投影：perspective
			projection: 'orthographic', //正交投影,
			distance: 1000
		}
	},
	itemStyle: {
		//?????
		color: '',
		//地图的背景颜色
		areaColor: '#a9d6ff',
		//透明度
		opacity: 0.9,
		borderWidth: 1,
		borderColor: '#333'
	},

	light: {
		main: {
			intensity: 0.5, //光照强度
			shadowQuality: 'high', //阴影亮度
			shadow: false, //是否显示阴影
			alpha: 40, //主光源绕 x 轴，即上下旋转的角度
			beta: 40 //主光源绕 y 轴，即左右旋转的角度。
		},
		ambient: {
			intensity: 0
		},
		ambientCubemap: {}

	},
	//标签的相关设置。(比如地图上显示的省份名字，西藏，广西等)
	label: {
		show: true,
		textStyle: {
			color: 'green', //地图初始化区域字体颜色
			fontSize: 12,
			opacity: 1,
			//backgroundColor: 'rgba(0,0,0,0)'
			backgroundColor: 'yellow'
		},
	},
	emphasis: { //当鼠标放上去  地区区域是否显示名称
		label: {
			show: false,
			textStyle: {
				color: '#fff',
				fontSize: 16,
				backgroundColor: 'rgba(0,23,11,0)'
			}
		}
	},
	groundPlane: {
		show: false
	},
	zlevel: 1,
	data: [{
		name: '辽宁',
		value: 47
	}, {
		name: '吉林',
		value: 22
	}, {
		name: '黑龙江',
		value: 17
	}, {
		name: '山西',
		value: 33
	}, {
		name: '陕西',
		value: 55
	}, {
		name: '西藏',
		value: 23
	}, {
		name: '新疆',
		value: 49
	}, {
		name: '河北',
		value: 17
	}, {
		name: '河南',
		value: 54
	}]
}, {
	type: 'scatter3D',
	coordinateSystem: "geo3D",
	zlevel: 2,
	rippleEffect: {
		period: 4,
		brushType: "stroke",
		scale: 4
	},
	label: {
		normal: {
			show: true,
			position: "right",
			color: "#00ffff",
			formatter: "{b}",
			textStyle: {
				color: "#0bc7f3"
			}
		},
		emphasis: {
			show: true
		}
	},
	symbol: "pin",
	symbolSize: 30,
	itemStyle: {
		normal: {
			show: true,
			color: "#9966cc"
		}
	},
	data: [{
			name: "拉萨",
			value: [91.11, 29.97]
		}]
		//data:convertData(geoCoordMap)
}];
	[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function(item, i) {
	series.push( //画线
		{
			type: 'lines3D',
			name: '票流数据',
			//使用三维笛卡尔坐标系
			coordinateSystem: 'geo3D',
			//飞线的尾迹特效。
			effect: {
				show: true,
				trailWidth: 4,
				trailOpacity: 1,
				trailLength: 0.3,
				constantSpeed: 5,
				trailColor: 'red'
			},

			blendMode: 'lighter',
			//飞线的线条样式。
			lineStyle: {
				color: 'blue',
				width: 1,
				opacity: 1
			},
			zlevel: 2,
			data:  convertData(item[1])
		}, {
			name: item[1] + ' Top3',
			type: 'lines3D',
			coordinateSystem: 'geo3D',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i],
				},
				emphasis: {
					areaColor: '#2B91B7'
				}
			},
			data:  convertData(item[1])
		}, {
			name: item[0] + ' Top3',
			type: 'lines3D',
			coordinateSystem: 'geo3D',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i],
				},
				emphasis: {
					areaColor: '#2B91B7'
				}
			},
			data:  convertData(item[1])
		});
});
option = {
	title: {
		text: '全国主要城市发票流向图（数据虚构）', //设置标题显示内容
		x: 'center', //设置标题x轴方向位置
		top: "10", //设置标题y轴方向位置
		textStyle: {
			color: '#000', //设置标题文字颜色
			fontSize: 20 //设置标题字体大小
		}
	}
	/*,
		    legend: {
	        type: 'scroll',
	        bottom: 10,
	        data:['地图热力数据','票流数据']
	    }*/
	,
	tooltip: {
		show: true,
		formatter: (params) => {
			let data = "测试1:" + params.name + "<br/>" + "值:" + params.value[2] + "<br/>" + "地理坐标:[" + params.value[0] + "," + params.value[1] + "]";
			return data;
		},
	},
	//将数据通过颜色直观的在图上展示出来
	//可以支持多组数据展示了 哈哈哈哈哈哈哈
	visualMap: [{
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',
		//指定取哪个系列的数据，即哪个系列的 series.data。
		seriesIndex: 0,
		//两端的文本，如 ['High', 'Low']
		text: ['地图热力数据'],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		max: 100,
		inRange: {
			color: ['#87aa66', '#eba438', '#d94d4c']
		}
	}, {
		type: 'continuous',
		seriesIndex: 1,
		text: ['票流数据'],
		left: 'right',
		max: 100,
		calculable: true,
		inRange: {
			color: ['#000', 'blue', 'red']
		}
	}, {
		type: 'continuous',
		seriesIndex: 2,
		text: ['散点数据'],
		left: 'right',
		max: 100,
		calculable: true,
		inRange: {
			color: ['#000', 'blue', 'red']
		}
	}],
	geo3D: {
		//是否显示三维地理坐标系组件，底图不显示
		show: false,
		//地图类型。echarts-gl 中使用的地图类型同 geo 组件相同
		map: 'china',
		//是否开启鼠标缩放和平移漫游
		roam: false,
		//scale 地图的长宽比。
		//最终的 aspect 的计算方式是：geoBoundingRect.width / geoBoundingRect.height * aspectScale
		aspectScale: 1,
		//是否显示地面
		groundPlane: {
			show: true,
			color: '#333'
		},
		//三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
		itemStyle: {
			//?????好像感觉没什么作用呢？？？？
			color: 'red',
			//地图的背景颜色
			areaColor: 'blue',
			//透明度
			opacity: 0.9,
			//边线粗细
			borderWidth: 0.8,
			//边线颜色
			borderColor: 'rgb(62,215,213)'
		},
		//标签的相关设置。(比如地图上显示的省份名字，西藏，广西等)
		label: {
			show: true,
			//???????
			distance: '',
			//标签内容格式器
			//formatter:'',
			textStyle: {
				color: 'green', //地图初始化区域字体颜色
				fontSize: 12,
				opacity: 1,
				//backgroundColor: 'rgba(0,0,0,0)'
				backgroundColor: 'yellow'
			},
		},
		emphasis: { //当鼠标放上去  地区区域是否显示名称
			label: {
				show: false,
				textStyle: {
					color: '#fff',
					fontSize: 16,
					backgroundColor: 'rgba(0,23,11,0)'
				}
			}
		},
		//shading: 'lambert',
		//光照相关的设置
		light: {
			//场景主光源的设置
			main: {
				color: 'green', //光照颜色
				intensity: 1, //光照强度
				shadowQuality: 'high', //阴影亮度
				shadow: true, //是否显示阴影
				alpha: 40, //主光源绕 x 轴，即上下旋转的角度
				beta: 40 //主光源绕 y 轴，即左右旋转的角度。

			},
			//全局的环境光设置。
			ambient: {
				intensity: 0.3
			}
		},
		// 会使用纹理作为光源的环境光， 会为物体提供漫反射和高光反射。
		realisticMaterial: {
			detailTexture: 'asset/leather/leather_albedo.jpg'
		}
	},
	series:series
};
var dom = document.getElementById("map");
var myChart = echarts.init(dom);
myChart.setOption(option, true);