Ext.define('krf_new.view.south.pollution.SearchResultGrid_pollution_06', {

	extend: 'Ext.container.Container',

	xtype: 'searchResultGrid_pollution_06',

	id: 'searchResultpollution_06_container',

	height: '100%',
	width: '100%',
	closable: true,
	closeText: '×',

	items: [{
		xtype: 'container',
		width: '100%',
		height: '100%',
		items: [{
			xtype: 'grid',
			cls: 'khLee-x-column-header-text',
			//plugins: ['bufferedrenderer', 'gridfilters'],
			plugins: ['bufferedrenderer', 'gridfilters'],
			siteIds: "",
			parentIds: [],
			header: {
				height: 5
			},
			title: '검색결과',
			siteId: '',
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
				text: '조사년도',
				dataIndex: 'YYYY',
				width: 150
				//filter: {type: 'numeric'}
			}, {
				text: '대권역',
				dataIndex: 'WS_NM',
				width: 150
				//filter: {type: 'numeric'}
			}, {
				text: '중권역',
				dataIndex: 'MB_NM',
				width: 150
				//filter: {type: 'numeric'}
			}, {
				text: '표준유역',
				dataIndex: 'SB_NM',
				width: 150,
				listeners: {

					click: function (tblView, el, rowCnt, colCnt, row) {

						var value = Ext.getCmp("pollutionSelect").value;
						var coreMap = GetCoreMap();
						var pollutionLayerAdmin = coreMap.pollutionLayerAdmin;

						if (value == 11) {
							return;
						} else if (value == 22) {
							var swNm = row.record.data.SB_NM;

							var catStore = null;

							var coreMap = GetCoreMap();

							var catDids = [];
							var catDids_All = [];
							for (var i = 0; i < coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics.length; i++) {
								catDids_All.push(coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics[i].attributes.CAT_DID);
								if (coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics[i].attributes.SB_NM == swNm) {
									catDids.push(coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics[i].attributes.CAT_DID);
								}
							}

							for (var k = 0; k < catDids_All.length; k++) {
								var polySymbol = $("#polySymbol_" + catDids_All[k]);
								polySymbol[0].setAttribute("opacity", pollutionLayerAdmin.initOpacity);
							}

							for (var j = 0; j < catDids.length; j++) {
								var polySymbol = $("#polySymbol_" + catDids[j]);
								polySymbol[0].setAttribute("opacity", pollutionLayerAdmin.mouseOverOpacity);
							}

						} else {
							var cat_did = row.record.data.CAT_DID;

							var catDids_All = [];
							for (var i = 0; i < coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics.length; i++) {
								catDids_All.push(coreMap.pollutionLayerAdmin.pollutionGraphicLayerCat.graphics[i].attributes.CAT_DID);
							}

							for (var k = 0; k < catDids_All.length; k++) {
								var polySymbol = $("#polySymbol_" + catDids_All[k]);
								polySymbol[0].setAttribute("opacity", pollutionLayerAdmin.initOpacity);
							}

							var polySymbol = $("#polySymbol_" + cat_did);
							polySymbol[0].setAttribute("opacity", pollutionLayerAdmin.mouseOverOpacity);
						}
					}
				}
				//filter: {type: 'numeric'}
			}, {
				text: '집수구역',
				dataIndex: 'CAT_DID',
				width: 150,
				hidden: true
				//filter: {type: 'numeric'}
			}, {
				text: '법정동리',
				dataIndex: 'ADDR',
				width: 150,
				hidden: true
				//filter: {type: 'numeric'}
			}, {
				text: '점유율',
				dataIndex: 'FINAL_PERCENTAGE',
				width: 150,
				filter: { type: 'numeric' },
				hidden: true
				//filter: {type: 'numeric'}
			}, {
				text: '매립장명',
				dataIndex: 'FACI_NM',
				width: 150
				//filter: {type: 'numeric'}
			}, {
				text: '운영일자',
				dataIndex: 'WORK_DT',
				width: 150,
				hidden: true
				//filter: {type: 'numeric'}
			}, {
				text: '발생유량(㎥/일)',
				dataIndex: 'PRODUCT_AMT',
				width: 150,
				filter: { type: 'numeric' }
			}, {
				text: '방류유량(㎥/일)',
				dataIndex: 'DISCHARGE_AMT',
				width: 150,
				filter: { type: 'numeric' }
			}, {
				text: '발생 수질 농도',
				columns: [{
					text: 'BOD(㎎/ℓ)',
					dataIndex: 'PRODUCT_BOD',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'COD(㎎/ℓ)',
					dataIndex: 'PRODUCT_COD',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'TN(㎎/ℓ)',
					dataIndex: 'PRODUCT_TN',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'TP(㎎/ℓ)',
					dataIndex: 'PRODUCT_TP',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}]
				//filter: {type: 'numeric'}
			}, {
				text: '방류 수질 농도',
				columns: [{
					text: 'BOD(㎎/ℓ)',
					dataIndex: 'DISCHARGE_BOD',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'COD(㎎/ℓ)',
					dataIndex: 'DISCHARGE_COD(㎎/ℓ)',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'TN(㎎/ℓ)',
					dataIndex: 'DISCHARGE_TN',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}, {
					text: 'TP(㎎/ℓ)',
					dataIndex: 'DISCHARGE_TP',
					width: 150,
					filter: { type: 'numeric' },
					hidden: true
				}]
				//filter: {type: 'numeric'}
			}],

			viewConfig: {
				getRowClass: function (record, rowIndex, rowParams, store) {
					//bold 13px/15px helvetica,arial,verdana,sans-serif
					if (record.data.SB_NM == "총계" || record.data.SB_NM == "소계" || record.data.CAT_DID == "소계"
						|| record.data.ADDR == "총계" || record.data.ADDR == "소계") {
						return 'pdj_total_subTotal';
					}

				}
			}
		}]
	}]
});