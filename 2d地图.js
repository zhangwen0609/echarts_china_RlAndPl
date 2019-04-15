/**
 *   @author liang
 *   2019.01.10
 *   新增边线效果
 *   https://github.com/Mying666/myEcTooltip
 */
let data = [{
		name: '张家口',
		value: 47
	}, {
		name: '佛山',
		value: 22
	}

];
let geoCoordMap1 = {
	'北京': [116.4, 39.9],
	'张家口': [114.9, 40.8],
	'上海': [121.5, 31.2],
	'佛山': [113.1, 23],
	'惠州': [114.4, 23.1],
	'嘉兴': [120.8, 30.7],
	'黔西南州': [104.9, 25.1],
	'湖州': [120.1, 30.9],
	'苏州': [120.6, 31.3],
	'无锡': [120.3, 31.5],
	'南京': [118.8, 32.1],
	'太原': [112.5, 37.9],
	'晋中': [112.7, 37.7],
	'西安': [108.9, 34.3],
	'长沙': [112.9, 28.2],
	'株洲': [113.2, 27.8],
	'武汉': [114.3, 30.6],
	'荆州': [112.2, 30.3],
	'黄石': [115, 30.2],
	'合肥': [117.2, 31.8],
	'九华山': [117.8, 30.5],
	'泉州': [118.7, 24.9],
	'福州': [119.3, 26.1],
	'南昌': [115.9, 28.7],
	'九江': [116, 29.7],
	'仙桃': [113.4, 30.4],
	'天门': [113.2, 30.7],
	'东戴河': [119.9, 40],
	'广州': [113.3, 23.1],
	'大庆': [125.03, 46.58],
	'呼和浩特': [111.4124, 40.4901],
	'丽水': [119.5642, 28.1854],
	'乌鲁木齐': [87.9236, 43.5883]
};
var moveLines = [{
	"fromName": "广州",
	"toName": "南昌",
	"value": 10
}, {
	"fromName": "广州",
	"toName": "福州",
	"value": 20
}, {
	"fromName": "广州",
	"toName": "张家口",
	"value": 30
}, {
	"fromName": "广州",
	"toName": "合肥",
	"value": 40
}];
var moveLines1 = [{
	"toName": "广州",
	"fromName": "南昌",
	"value": 10
}, {
	"toName": "广州",
	"fromName": "福州",
	"value": 20
}, {
	"toName": "广州",
	"fromName": "张家口",
	"value": 30
}, {
	"toName": "广州",
	"fromName": "合肥",
	"value": 40
}];
var moveLines2 = [{
	"toName": "北京",
	"fromName": "南京",
	"value": 10
}, {
	"toName": "晋中",
	"fromName": "太原",
	"value": 20
}, {
	"toName": "南昌",
	"fromName": "九江",
	"value": 30
}, {
	"toName": "苏州",
	"fromName": "上海",
	"value": 40
}, {
	"toName": "呼和浩特",
	"fromName": "乌鲁木齐",
	"value": 40
}, {
	"toName": "乌鲁木齐",
	"fromName": "阿克苏",
	"value": 10
}, {
	"toName": "阿图什",
	"fromName": "昌吉",
	"value": 10
}, {
	"toName": "和田",
	"fromName": "克拉玛依",
	"value": 10
}, {
	"toName": "奎屯",
	"fromName": "石河子",
	"value": 10
}, {
	"toName": "吐鲁番",
	"fromName": "伊宁",
	"value": 10
}];
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

let convertData = function(data) {
	let res = [];
	for(let i = 0; i < data.length; i++) {
		let geoCoord = geoCoordMap[data[i].name];
		if(geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	};
	console.log(res);
	return res;
};
let convertDataLines = function(data) {

	var res = [];
	for(var i = 0; i < data.length; i++) {

		var dataItem = data[i];

		var fromCoord = geoCoordMap[dataItem.fromName];
		var toCoord = geoCoordMap[dataItem.toName];
		if(fromCoord && toCoord) {
			res.push({
				fromName: dataItem.fromName,
				toName: dataItem.toName,
				coords: [fromCoord, toCoord],
				value: dataItem.value
			});
		}
	}
	console.log(res);
	return res;

};

/**
 * priority  tooltip朝向（top/bottom）
 * left, top 为默认值
 * 根据展示内容需要微调text的宽高
 */
option = {
	title: {
		top: 10,
		text: '票流图+热力分布',
		left: 'center',
		textStyle: {
			color: '#fff'
		}
	},
	backgroundColor: 'rgba(0, 10, 52, 1)',
	legend: {
		orient: 'vertical',
		top: 'bottom',
		left: 'right',
		// data:['西安 Top3', '西宁 Top3', '银川 Top3'],
		textStyle: {
			color: '#fff'
		},
		selectedMode: 'multiple'
	},
	tooltip: {
		show: true
	},
	visualMap: [{
		show: false,
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',

		seriesIndex: 0,

		//两端的文本，如 ['High', 'Low']
		text: [''],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		max: 100,
		inRange: {
			color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096']
		}
	}, {
		show: false,
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',
		seriesIndex: 1,
		id: 1,
		//两端的文本，如 ['High', 'Low']
		text: ['1'],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		max: 10,
		inRange: {
			color: ['yellow']
		}
	}, {
		show: false,
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',
		seriesIndex: 2,
		id: 2,
		//两端的文本，如 ['High', 'Low']
		text: ['1'],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		min: 10,
		max: 40,
		inRange: {
			color: ['white', 'yellow']

		}
	}, {
		show: false,
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',
		seriesIndex: 3,
		id: 3,
		//两端的文本，如 ['High', 'Low']
		text: ['1'],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		min: 10,
		max: 40,
		inRange: {
			color: ['blue', 'green']

		}
	}, {
		show: false,
		//值是分散的0-10,10-20.。。。还是连续的0-300
		type: 'continuous',
		seriesIndex: 4,
		id: 4,
		//两端的文本，如 ['High', 'Low']
		text: ['1'],
		//是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
		//ture则拖拽手柄过程中实时更新图表视图
		calculable: true,
		min: 10,
		max: 40,
		inRange: {
			color: ['white']

		}
	}],
	geo: {
		map: 'china',
		aspectScale: 1,
		label: {
			normal: {
				show: false
			}
		},
		itemStyle: {
			normal: {
				borderColor: 'rgba(147, 235, 248, 1)',
				borderWidth: 1,
				areaColor: {
					type: 'radial',
					x: 1,
					y: 1,
					r: 1,
					colorStops: [{
						offset: 0,
						color: 'rgba(147, 235, 248, .9)' // 0% 处的颜色
					}, {
						offset: 1,
						color: 'rgba(147, 235, 248, .9)' // 100% 处的颜色
					}],
					globalCoord: false // 缺省为 false
				},
				shadowColor: 'rgba(128, 217, 248, .2)',
				shadowOffsetX: 12,
				shadowOffsetY: 12,
				shadowBlur: 1
			},
			emphasis: {
				areaColor: 'yellow'
			}
		},
		z: 2
	},
	series: [{
		type: 'map',
		map: 'china',
		geoIndex: 0,
		name: '热力分布',
		id: 0,
		tooltip: {
			show: true
		},
		label: {
			normal: {
				show: false,
				formatter: function(val) {
					console.log(val, 9999999999)
					var area_content = '{a|' + val.name + '}' + '-' + '{b|' + val.value + '}';
					return area_content.split("-").join("\n");
				}, //让series 中的文字进行换行
				rich: {
					a: {
						color: '#fff'
					},
					b: {
						color: '#fff',
						fontFamily: 'Microsoft YaHei',
						fontSize: 14,
						width: 16,
						height: 16,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: '#f00',
						textAlign: 'center',
						padding: 2
					}
				}, //富文本样式,就是上面的formatter中'{a|'和'{b|'
			},
			emphasis: {
				show: false
			}
		}, //地图中文字内容及样式控制

		aspectScale: 1,
		roam: false,
		itemStyle: {
			normal: {
				borderColor: 'rgba(147, 235, 248, 0.6)',
				borderWidth: 1,
				areaColor: 'rgba(147, 235, 248, 0)'
			},
			emphasis: {
				areaColor: 'rgba(147, 235, 248, 0)'
			}
		},
		zlevel: 5,
		data: datavalue
	}, {
		name: '重要点',
		type: 'effectScatter',
		id: 1,
		geoIndex: 0,
		coordinateSystem: 'geo',
		data: convertData(data),
		symbol: '',
		symbolSize: function(val) {
			console.log(val);
			return val[2] / 5;
		},
		showEffectOn: 'render',
		rippleEffect: {
			brushType: 'stroke'
		},
		hoverAnimation: true,
		label: {
			normal: {
				formatter: '{b}',
				position: 'right',
				show: true
			}
		},
		itemStyle: {
			normal: {
				color: '#f4e925',
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		zlevel: 5
	}, {
		name: '线路',
		type: 'lines',
		coordinateSystem: 'geo',
		zlevel: 2,
		large: false,
		effect: {
			show: true,
			period: 4, //箭头指向速度，值越小速度越快
			trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
			symbol: "arrow", //箭头图标
			symbolSize: 5 //图标大小

		},
		lineStyle: {
			normal: {
				width: 1, //尾迹线条宽度
				opacity: 1, //尾迹线条透明度
				curveness: 0.3 //尾迹线条曲直度
			}
		},
		data: convertDataLines(moveLines)
	}, {
		name: '线路1',
		type: 'lines',
		coordinateSystem: 'geo',
		zlevel: 2,
		large: false,
		effect: {
			show: true,
			period: 4, //箭头指向速度，值越小速度越快
			trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
			symbol: "arrow", //箭头图标
			symbolSize: 5 //图标大小

		},
		lineStyle: {
			normal: {
				width: 1, //尾迹线条宽度
				opacity: 1, //尾迹线条透明度
				curveness: 0.3 //尾迹线条曲直度
			}
		},
		data: convertDataLines(moveLines1)
	}, {
		name: '线路2',
		type: 'lines',
		coordinateSystem: 'geo',
		zlevel: 2,
		large: false,
		effect: {
			show: true,
			period: 4, //箭头指向速度，值越小速度越快
			trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
			symbol: "circle", //箭头图标
			symbolSize: 5 //图标大小

		},
		lineStyle: {
			normal: {
				width: 0, //尾迹线条宽度
				opacity: 1, //尾迹线条透明度
				curveness: 0 //尾迹线条曲直度
			}
		},
		data: convertDataLines(moveLines2)
	}]
};

var dom = document.getElementById("map");
var myChart = echarts.init(dom);
myChart.setOption(option, true);