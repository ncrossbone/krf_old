Ext.define('krf_new.view.south.SearchResultGrid_I_2', {

	extend: 'Ext.container.Container',
	//extend : 'Ext.grid.Panel',

	xtype: 'south-grid-searchresult',

	id: 'searchResultContainer_I_2',
	height: '100%',
	width: '100%',
	gridId: null,

	initComponent: function () {

		this.items = [{
			xtype: 'container',
			id: 'grid-container_' + this.gridId,
			width: '100%',
			height: '100%',
			items: [{
				xtype: 'grid',
				layerId: 'I',
				//id: 'grdSearchResult',
				//id: this.up('container').up('container'),
				plugins: ['bufferedrenderer', 'gridfilters'],
				cls: 'khLee-x-column-header-text',
				//height: 195,
				//plugins: 'bufferedrenderer',
				siteIds: "",
				parentIds: [],
				//height: '100%',
				header: {
					height: 5
				},
				title: '검색결과',
				siteId: '',
				//store: 'KRF_DEV.store.south.SearchResultGrid',
				//store: Ext.create('KRF_DEV.store.south.SearchResultGrid'),
				beforeRender: function () {

					var me = this;
					var parentCtl = this.findParentByType("window");

					me.setWidth(parentCtl.getWidth() - 10);
					me.setHeight(parentCtl.getHeight() - 110);

					parentCtl.on("resize", function () {
						////console.info(parentCtl);
						me.setWidth(parentCtl.getWidth() - 10);
						me.setHeight(parentCtl.getHeight() - 110);
					});

				},
				columns: [{
					text: '측정소코드',
					dataIndex: 'PT_NO',
					hidden: true,
					hideable: false, // filter Columns영역에 보이지 않기
					width: 0
				}, {
					text: '측정소명',
					dataIndex: 'PT_NM',
					width: 100,
					//filterable: true,
					//filter: {type: 'string'},
					filter: { type: 'string', itemDefaults: { emptyText: 'Search for...' } },
					listeners: {
						click: function (tblView, el, rowCnt, colCnt, row) {
							////console.info(this.findParentByType("grid").parentIds);
							var gridCtl = this.findParentByType("grid")
							var parentIds = gridCtl.parentIds;
							var siteId = row.record.data.PT_NO;
							var parentId = "";

							for (var i = 0; i < parentIds.length; i++) {
								if (siteId == parentIds[i].siteId) {
									parentId = parentIds[i].parentId;
								}
							}

							if (parentId == "") {
								siteMovePoint(parentIds, siteId);
							} else {
								siteMovePoint(parentId, siteId);
							}
						}
					}
				}, {
					text: '측정일자',
					dataIndex: 'CURR_WMCYMD',
					width: 90,
					filter: { type: 'string', itemDefaults: { emptyText: 'Search for...' } }
				}, {
					text: '수온(℃)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_TEMP',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TEMP'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_TEMP',
						//data: [4, 3, 4, 6, 2],
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(  //'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TEMP'));
											return yVal + "(℃)";
										}

									}
								}

							),
							//tipTpl: '{x:text("00000년00월00일")}: {y:number("0.00")}',
							chartRangeMax: 5.8,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)

						}
					}]
				}, {
					text: '클로로필a (㎎/㎥)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_CLOA',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'CLOA'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_CLOA',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'CLOA'));
											return yVal + "(㎎/㎥)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 15.5,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '유해남조류세포수(cells/㎖)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_BL_GR_ALGAE',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BL_GR_ALGAE'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_BL_GR_ALGAE',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BL_GR_ALGAE'));
											return yVal + "(cells/㎖)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 11.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '마이크로시스틴-LR(PPB)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_MCYST_LR',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'MCYST_LR'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						dataIndex: 'CHART_ITEM_MCYST_LR',
						width: 80,
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'MCYST_LR'));
											return yVal + "(PPB)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.628,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '냄새물질-지오스민(ng/L)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_GEOSMIN',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'GEOSMIN'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_GEOSMIN',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'GEOSMIN'));
											return yVal + "(ng/L)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 0.237,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '냄새물질-2MIB(ng/L)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_2MIB',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, '2MIB'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_2MIB',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, '2MIB'));
											return yVal + "(ng/L)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 28.8,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: 'pH',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_PH',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'PH'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_PH',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'PH'));
											return yVal;
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 9.5,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: 'DO(㎎/L)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_DOC',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'DOC'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_DOC',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'DOC'));
											return yVal + "(㎎/L)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							renderer: function (value) {
								//console.info(value);
							},
							chartRangeMax: 27.7,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '투명도(m)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_TRANSPARENCY',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TRANSPARENCY'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_TRANSPARENCY',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]} </p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TRANSPARENCY'));
											return yVal + "(m)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 30.4,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '탁도(NTU)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_TURBIDITY',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TURBIDITY'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_TURBIDITY',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'TURBIDITY'));
											return yVal + "(NTU)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '남조류 Microcystis(cells/㎖)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_BGA_MICROCYSTIS',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_MICROCYSTIS'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_BGA_MICROCYSTIS',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_MICROCYSTIS'));
											return yVal + "(cells/㎖)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '남조류 Anabaena(cells/㎖)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_BGA_ANABAENA',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_ANABAENA'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_BGA_ANABAENA',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_ANABAENA'));
											return yVal + "(cells/㎖)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '남조류 Osillatoria(cells/㎖)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_BGA_OSILLATORIA',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_OSILLATORIA'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_BGA_OSILLATORIA',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_OSILLATORIA'));
											return yVal + "(cells/㎖)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}, {
					text: '남조류 Aphanizomenon(cells/㎖)',
					columns: [{
						text: '측정값',
						dataIndex: 'CURR_ITEM_BGA_APHANIZOMENON',
						width: 105,
						renderer: function (value) {
							if (value == 999999999) {
								return "정량한계미만";
							}
							else if (value == 888888888) {
								return "분석중";
							}
							else {
								return Ext.util.Format.number(value, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_APHANIZOMENON'));
							}
						},
						filter: { type: 'numeric'/*, fields: {}*/ }
					}, {
						text: '추이변화',
						width: 80,
						dataIndex: 'CHART_ITEM_BGA_APHANIZOMENON',
						xtype: 'widgetcolumn',
						widget: {
							xtype: 'sparklineline',
							tipTpl: new Ext.XTemplate(
								'<tpl for=".">',
								'<p>측정일자 : {[this.formatX(values.x)]}</p>',
								'<p>측 정 값 : {[this.formatY(values.y)]}</p>',
								'</tpl>',
								{
									formatX: $KRF_APP.global.CommFn.dateFormatter,
									formatY: function (yVal) {
										if (yVal == null) {
											return yVal = "";
										} else {
											yVal = Ext.util.Format.number(yVal, $KRF_APP.global.AttrFn.getAttrFormat(this.config.layerId, 'BGA_APHANIZOMENON'));
											return yVal + "(cells/㎖)";
										}
									}
								}
							),
							//tipTpl: 'Value: {y:number("0.00")}',
							chartRangeMax: 6.2,
							chartRangeMin: 0,
							spotRadius: 1,
							tooltipSkipNull: false,  // false : null 포함
							valueSpots: { '-100:': 'red' } // 포인트 간격 ('0:' 0이상인 포인트 찍기)
						}
					}]
				}]
			}]
		}];

		this.callParent();
		// 검색조건 컨트롤 초기화
		$KRF_APP.global.TabFn.searchConditionInit("", this.down("grid"));
	}
});