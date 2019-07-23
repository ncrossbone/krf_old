/**
 * This example shows navigation tabs docked to the side.
 */
Ext.define('krf_new.view.search.ButtonPanel', {
	extend: 'Ext.toolbar.Toolbar',
	// requires: [
	// 	'krf_new.view.search.ButtonPanelController'
	// ],

	xtype: 'west-buttonpanel',
	id: 'west-button',
	title: '화면제어판',
	itemWidth: 90,
	width: 90,
	/* 사이즈 지정 끝 */

	border: 0,

	cls: 'x-toolbar-default-west-khLee',

	controller: 'buttonpanel',

	onClickListener: {
		el: {
			click: 'onClickButton'
		}
	},

	layout: {
		type: 'vbox',
		align: 'center'
	},

	initComponent: function () {

		this.items = [{
			xtype: 'image',
			id: 'btnSearchArea',//btnSearchArea
			groupId: 'group1',
			title: '위치검색',//위치검색
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: 69,
			btnOnOff: 'on',
			btnOnImg: './resources/images/button/left_menu01_on.png',
			btnOffImg: './resources/images/button/left_menu01_on.png',
			//src: './resources/images/button/left_menu01_on.png'
			src: './resources/images/button/left_menu01_on.png'
		}, {
			xtype: 'image',
			id: 'btnLayer',
			groupId: 'group1',//onClickLayer
			title: '주제도선택',
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: 45,
			listeners: { el: { click: 'onClickLayer' } },
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu02_on.png',
			btnOffImg: './resources/images/button/left_menu02.png',
			src: './resources/images/button/left_menu02.png'
		}, {
			xtype: 'image',
			id: 'btnSiteListWindow',
			groupId: 'group2',
			isOnOff: 'off',
			title: '정보창',
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: this.itemWidth,
			listeners: { el: { click: 'onClickInfo' } },
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu03_on.png',
			btnOffImg: './resources/images/button/left_menu03.png',
			src: './resources/images/button/left_menu03.png'
		}, {
			xtype: 'image',
			id: 'btnSearchResult',
			groupId: 'group3',
			title: '검색결과',
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: this.itemWidth,
			listeners: { el: { click: 'onClickResult' } },
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu04_on.png',
			btnOffImg: './resources/images/button/left_menu04.png',
			src: './resources/images/button/left_menu04.png'
		}, {
			xtype: 'image',
			id: 'btnSearchDrone',
			groupId: 'group6',
			//hidden : true, // 외부망 현제 막음 추후 삭제
			title: '조류항공사진',
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: this.itemHeight,
			//listeners: this.onClickListener,
			listeners: { el: { click: 'onClickDrone' } },
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu05_on.png',
			btnOffImg: './resources/images/button/left_menu05.png',
			src: './resources/images/button/left_menu05.png'
		}, '->', {
			xtype: 'image',
			id: 'btnModeNomal',
			groupId: 'group4',
			title: '일반모드',
			style: 'left: 0px !important;',
			width: 90,
			height: 91,
			listeners: this.onClickListener,
			btnOnOff: 'on',
			btnOnImg: './resources/images/button/left_menu06_on.png',
			btnOffImg: './resources/images/button/left_menu06.png',
			src: './resources/images/button/left_menu06_on.png'
		}, {
			xtype: 'image',
			id: 'btnModeReach',
			groupId: 'group4',
			title: '리치모드',
			style: 'left: 0px !important;',
			width: 90,
			height: 96,
			listeners: this.onClickListener,
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu07_on.png',
			btnOffImg: './resources/images/button/left_menu07.png',
			src: './resources/images/button/left_menu07.png'
		}, {
			xtype: 'image',
			id: 'btnFavorites',
			groupId: 'group5',
			title: '즐겨찾기',
			style: 'left: 0px !important;',
			width: this.itemWidth,
			height: this.itemWidth,
			listeners: { el: { click: 'onClickFavorite' } },
			btnOnOff: 'off',
			btnOnImg: './resources/images/button/left_menu08_on.png',
			btnOffImg: './resources/images/button/left_menu08.png',
			src: './resources/images/button/left_menu08.png'
		}];

		this.callParent();
	}
});