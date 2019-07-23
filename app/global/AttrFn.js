/** 전역 변수 클래스 (탭관련함수)

 *  config 속성의 변수를 get, set 메서드로 접근 가능함. (get변수명, set변수명)
 *  get, set 뒤 첫 알파벳은 대문자로 할 것
 *  ex) setGlobalTest(1234), getGlobalTest()
 *  requires: ["KRF.global.Var"], : Ext.application에 한번만 선언하면 됨
 *  참고
 *    - http://jsfiddle.net/prajavk/YhuWT/
 *    - https://wikidocs.net/3384 5.글로벌 변수 사용 */

Ext.define("krf_new.global.AttrFn", {
	singleton: true,
	attrMap: {
		"BOD": { "format": "0.0" },
		"DOC": { "format": "0.0" },
		"COD": { "format": "0.0" },
		"CCOD": { "format": "0.00" },
		"TN": { "format": "0.000" },
		"CTN": { "format": "0" },
		"FTN": { "format": "0.00" },
		"TP": { "format": "0.000" },
		"TP": { "format": "0.000" },
		"CTP": { "format": "0" },
		"FTP": { "format": "0" },
		"TEMP": { "format": "0.0" },
		"PH": { "format": "0.0" },
		"SS": { "format": "0.0" },
		"FLW": { "format": "0.0" },
		"CLOA": { "format": "0.0" },
		"AVERAGECLOA": { "format": "0.0" },
		"TOC": { "format": "0.0" },
		"SRP": { "format": "0.0" },
		"PB": { "format": "0.0" },
		"ZN": { "format": "0.0" },
		"CU": { "format": "0.0" },
		"CR": { "format": "0.0" },
		"NI": { "format": "0.0" },
		"AS": { "format": "0.0" },
		"CD": { "format": "0.00" },
		"HG": { "format": "0.000" },
		"AL": { "format": "0.00" },
		"LI": { "format": "0.0" },
		"WL": { "format": "0.00" },
		"RF": { "format": "0" },
		"FW": { "format": "0.00" },
		"OTF": { "format": "0.0" },
		"SFW": { "format": "0" },
		"ECPC": { "format": "0" },
		"WD": { "format": "0.00" },
		"WS": { "format": "0.00" },
		"HM": { "format": "0.00" },
		"PA": { "format": "0.00" },
		"PS": { "format": "0.00" },
		"RNYN": { "format": "0" },
		"RN1HR": { "format": "0" },
		"RNDAY": { "format": "0" },
		"RND": { "format": "0.0" },
		"SIDAY": { "format": "0.0" },
		"OWL": { "format": "0.00" },
		"SFW": { "format": "0" },
		"TOTOTF": { "format": "0.00" },
		"EGOTF": { "format": "0.00" },
		"GTOTF": { "format": "0.00" },
		"CBOTF": { "format": "0.00" },
		"FWOTF": { "format": "0.00" },
		"ETCOTF": { "format": "0.00" },
		"AMT_PHYS": { "format": "0" },
		"AMT_BIO": { "format": "0" },
		"AMT_HIGHTEC": { "format": "0" },
		"COLI": { "format": "0" },
		"SURFACEBLUEGREENALGAE": { "format": "0" },
		"D004SWL": { "format": "0" },
		"D004INF": { "format": "0.0" },
		"D007SWL": { "format": "0" },
		"D007COLI": { "format": "0" },
		"D005TA": { "format": "0.00" },
		"D006TA": { "format": "0.0" },
		"AMT": { "format": "0" },
		"BYPASSAMT": { "format": "0" },
		"AMNT": { "format": "0.000" },
		"DNT": { "format": "0.000" },
		"NO3N": { "format": "0.0000" },
		"NH3N": { "format": "0.000" },
		"DTP": { "format": "0.000" },
		"POP": { "format": "0.000" },
		"TRANS": { "format": "0.0" },
		"ALGOL": { "format": "0" },
		"TCOLI": { "format": "0" },
		"ECOLI": { "format": "0" },
		"ANTIMON": { "format": "0.0000" },
		"PHENOL": { "format": "0.000" },
		"NHEX": { "format": "0.0" },
		"FE": { "format": "0.000" },
		"MN": { "format": "0.000" },
		"ACD": { "format": "0.000" },
		"CN": { "format": "0.00" },
		"APB": { "format": "0.00" },
		"CR6": { "format": "0.00" },
		"ACR": { "format": "0.00" },
		"AAS": { "format": "0.000" },
		"AHG": { "format": "0.0000000" },
		"ACU": { "format": "0.000" },
		"AZN": { "format": "0.000" },
		"FL": { "format": "0.00" },
		"ABS": { "format": "0.0" },
		"CL": { "format": "0.0" },
		"TCE": { "format": "0.000" },
		"PCE": { "format": "0.000" },
		"CCL4": { "format": "0.0000" },
		"DCETH": { "format": "0.000" },
		"DCM": { "format": "0.0000" },
		"ABENZENE": { "format": "0.0000" },
		"CHCL3": { "format": "0.000" },
		"OP": { "format": "0.0000" },
		"PCB": { "format": "0.0000" },
		"DIOX": { "format": "0.000" },
		"HCHO": { "format": "0.000" },
		"HCB": { "format": "0.000" },
		"TRANSPARENCY": { "format": "0.0" },
		"FSD": { "format": "0.0" },
		"FST": { "format": "0.0" },
		"FCL": { "format": "0.0" },
		"WTC": { "format": "0.0" },
		"PCA": { "format": "0.0" },
		"CTOC": { "format": "0.00" },
		"CL_2_PHENYL": { "format": "0.00" },
		"2_CL_2_PHENYL": { "format": "0.00" },
		"CL_2_PHENYL": { "format": "0.00" },
		"4_CL_2_PHENYL": { "format": "0.00" },
		"5_CL_2_PHENYL": { "format": "0.00" },
		"6_CL_2_PHENYL": { "format": "0.00" },
		"7_CL_2_PHENYL": { "format": "0.00" },
		"8_CL_2_PHENYL": { "format": "0.00" },
		"9_CL_2_PHENYL": { "format": "0.00" },
		"10_CL_2_PHENYL": { "format": "0.00" },
		"TOT_PCBS": { "format": "0.00" },
		"NAPTHALENE": { "format": "0.00" },
		"ACENAPTHALENE": { "format": "0.00" },
		"ACENAPTHENE": { "format": "0.00" },
		"FLUORENE": { "format": "0.00" },
		"PHENANTHRENE": { "format": "0.00" },
		"ANTHRACENE": { "format": "0.00" },
		"FLUORANTHENE": { "format": "0.00" },
		"PYRENE": { "format": "0.00" },
		"BENZO_A_ANTHRACENE": { "format": "0.00" },
		"CRYSENE": { "format": "0.00" },
		"BENZO_B_FLUORANTHENE": { "format": "0.00" },
		"BENZO_F_FLUORANTHENE": { "format": "0.00" },
		"BENZO_A_PYRENE": { "format": "0.00" },
		"INDENO_1_2_3_CD_PYRENE": { "format": "0.00" },
		"DIBENZO_A_H_ANTHRACENE": { "format": "0.00" },
		"BENZO_G_H_I_PERYLENE": { "format": "0.00" },
		"TOTAL_PAHS": { "format": "0.00" },
		"O_P_DDE": { "format": "0.00" },
		"P_P_DDE": { "format": "0.00" },
		"P_P_DDD": { "format": "0.00" },
		"O_P_DDT": { "format": "0.00" },
		"P_P_DDT": { "format": "0.00" },
		"TOTAL_DDT": { "format": "0.00" },
		"1_1_1_TRICHLOROETHANE": { "format": "0.0" },
		"1_2_DICHLOROETHANE": { "format": "0.0" },
		"CBENZENE": { "format": "0.0" },
		"CARBON_TETRA_CHLORIDE": { "format": "0.0" },
		"CHLOROFORM": { "format": "0.0" },
		"ETHYL_BENZENE": { "format": "0.0" },
		"METHYL_CHLORIDE": { "format": "0.0" },
		"TETRA_CHLORO_ETHYLENE": { "format": "0.0" },
		"TRI_CHLORO_ETHYLENE": { "format": "0.0" },
		"TOLUENE": { "format": "0.0" },
		"M_P_XYLENE": { "format": "0.0" },
		"O_XYLENE": { "format": "0.0" },
		"MXWL": { "format": "0.00" },
		"MNXL": { "format": "0.00" },
		"DOW": { "format": "0.00" },
		"DOW_SURF": { "format": "0.00" },
		"TEMP_SURF": { "format": "0" },
		"DO_SURF": { "format": "0.0" },
		"PH_SURF": { "format": "0.0" },
		"EC_SURF": { "format": "0" },
		"SURFACE_CLOA": { "format": "0.00" },
		"BL_GR_ALGAE": { "format": "0" },
		"EC": { "format": "0" },
		"GEOSMIN": { "format": "0" },
		"2MIB": { "format": "0.0" },
		"MCYST_LR": { "format": "0.0" },
		"TRANSPARENCY": { "format": "0.0" },
		"TURBIDITY": { "format": "0.0" },
		"BGA_MICROCYSTIS": { "format": "0" },
		"BGA_ANABAENA": { "format": "0" },
		"BGA_OSILLATORIA": { "format": "0" },
		"BGA_APHANIZOMENON": { "format": "0" }
	},
	getAttrFormat: function (pId, attrId) {
		var attr = this.attrMap[pId + attrId];
		if (attr == null) {
			attr = this.attrMap[attrId];
		}
		if (attr == null) {
			return "";
		}
		return attr.format;
	}
});