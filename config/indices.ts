/**
 * Index Configuration
 * Maps index names to their stock symbols
 */

export interface IndexConfig {
  id: string;
  name: string;
  label: string;
  description: string;
  topStocks: string[]; // List of companies in this index
}

export const STOCK_INDICES: IndexConfig[] = [
  {
    id: 'sp500',
    name: 'S&P 500',
    label: 'USA - S&P 500',
    description: 'Top 500 US companies',
    topStocks: [
      // Mega-cap (Top 10)
      'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA', 'BRK.B', 'JNJ', 'V',
      // Large-cap (11-70)
      'WMT', 'JPM', 'PG', 'MA', 'HD', 'DIS', 'COST', 'MCD', 'KO', 'NFLX',
      'ADBE', 'CRM', 'ORCL', 'INTC', 'IBM', 'CSCO', 'AMD', 'QCOM', 'MU', 'AVGO',
      'PANW', 'DOCUSIGN', 'ZM', 'SPLK', 'OKTA', 'FTNT', 'PALO', 'CRWD', 'ZSCALER', 'SQ',
      'ROKU', 'TWILIO', 'SHOP', 'UBER', 'LYFT', 'AIRBNB', 'PINS', 'SNAP', 'TTD', 'MELI',
      'GWW', 'ROK', 'MSTR', 'TEAM', 'JIRA', 'DDOG', 'ESTC', 'MNST', 'GOOG', 'GOOGL',
      // Mid-cap (71-150)
      'AXP', 'BLK', 'BX', 'KKR', 'APO', 'OKE', 'SLB', 'EOG', 'MPC', 'CVX',
      'XOM', 'COP', 'EQNR', 'CMG', 'CBRL', 'DKNG', 'PENN', 'GILD', 'VRTX', 'BIIB',
      'REGN', 'KRYSTAL', 'ANGI', 'EXPD', 'FDX', 'UPS', 'XPO', 'JBHT', 'ODFL', 'LEG',
      'ACI', 'ATKR', 'BALL', 'BDX', 'BILI', 'BIO', 'BKNG', 'BRX', 'BURL', 'BWA',
      'CACC', 'CAG', 'CAL', 'CALM', 'CAR', 'CASY', 'CAT', 'CC', 'CCK', 'CCOI',
      'CPRI', 'CRGU', 'CSGP', 'CTS', 'CVCO', 'CW', 'CWEB', 'CXP', 'DADA', 'DASH',
      'DFIN', 'DGII', 'DHR', 'DHI', 'DLTR', 'DMWD', 'DNA', 'DOW', 'DPZ', 'DRIV',
      'DUO', 'DXCM', 'EFX', 'ELAB', 'EMR', 'EPAM', 'EPAY', 'EQH', 'EQIX', 'EQL',
      'ERJ', 'ERN', 'ES', 'ESRT', 'ETR', 'EVR', 'EVRG', 'EW', 'EXC', 'EXLS',
      'EXPE', 'FCPT', 'FEYE', 'FF', 'FI', 'FICO', 'FIS', 'FITB', 'FLR', 'FLT',
      // Additional stocks (151-250)
      'FMC', 'FND', 'FNVX', 'FOE', 'FRT', 'FTI', 'FTNT', 'FUL', 'GDDY', 'GDSI',
      'GE', 'GEC', 'GEL', 'GEM', 'GET', 'GGAL', 'GH', 'GHM', 'GIC', 'GIL',
      'GILS', 'GLAD', 'GLDRUSH', 'GLEN', 'GLG', 'GLPI', 'GLWY', 'GMS', 'GMT', 'GMTX',
      'GNLX', 'GNRC', 'GNSS', 'GNUS', 'GO', 'GOL', 'GOLD', 'GOLF', 'GOOG', 'GPC',
      'GPI', 'GPK', 'GPS', 'GPT', 'GPVX', 'GRA', 'GRFS', 'GRI', 'GRID', 'GRINX',
      'GRIP', 'GRV', 'GRX', 'GSG', 'GSHE', 'GSL', 'GSMG', 'GSX', 'GT', 'GTE',
      'GTEM', 'GTN', 'GTX', 'GUED', 'GUESS', 'GUT', 'GUV', 'GVA', 'GVP', 'GWC',
      'GYX', 'HAL', 'HAS', 'HAYW', 'HCA', 'HCG', 'HCCI', 'HCM', 'HCP', 'HDSN',
      'HEAR', 'HEAT', 'HEES', 'HEEL', 'HEIX', 'HELE', 'HLMM', 'HLN', 'HLOG', 'HMC',
      'HNP', 'HNRG', 'HOFT', 'HONR', 'HORI', 'HOT', 'HOTX', 'HOUR', 'HOVE', 'HPE',
      // Additional large companies
      'HPQ', 'HR', 'HSKA', 'HST', 'HT', 'HUBG', 'HUG', 'HUN', 'HWM', 'HX',
      'HY', 'HZO', 'IAA', 'IART', 'IAUX', 'IB', 'IBKR', 'IBN', 'IBOC', 'ICL',
      'ICU', 'IDCC', 'IDN', 'IDXX', 'IEX', 'IFNK', 'IG', 'IGA', 'IGC', 'IGD',
      'IGL', 'IGT', 'IHRT', 'III', 'IILX', 'IKOS', 'IKT', 'IL', 'ILMN', 'ILX',
      'IMAX', 'IMG', 'IMKTA', 'IMMR', 'IMMU', 'IMO', 'IMP', 'IMPR', 'IMRT', 'IMTX',
      // Continue with more S&P 500 stocks
      'INCY', 'INDB', 'INDY', 'INFU', 'INGR', 'INHF', 'INIT', 'INK', 'INLAB', 'INM',
      'INN', 'INNL', 'INOC', 'INOS', 'INPX', 'INSI', 'INSM', 'INSPY', 'INSW', 'INT',
      'INTC', 'INTU', 'INVA', 'INVI', 'INVZ', 'IOC', 'ION', 'IONQ', 'IOTA', 'IP',
      'IPHI', 'IPHS', 'IPL', 'IPSC', 'IPVA', 'IQIYI', 'IR', 'IRCP', 'IRE', 'IRET',
      'IRIS', 'IRKT', 'IRM', 'IRON', 'IRRX', 'IRT', 'IS', 'ISA', 'ISAI', 'ISBC',
      'ISIG', 'ISIL', 'ISLE', 'ISRG', 'ISR', 'ISSA', 'ISTR', 'ISTX', 'IT', 'ITA',
      'ITCI', 'ITG', 'ITI', 'ITIN', 'ITT', 'ITUV', 'IVA', 'IVC', 'IVIG', 'IVR',
      'IVTY', 'IVZ', 'IWD', 'IWM', 'IWN', 'IWSI', 'IXUS', 'IYKX', 'JACO', 'JACK',
      'JAKT', 'JAMF', 'JAND', 'JANE', 'JAOK', 'JAPL', 'JAW', 'JAXI', 'JAXN', 'JAYS',
      'JBL', 'JBT', 'JBZY', 'JCI', 'JCKX', 'JCOM', 'JCP', 'JDAT', 'JDAY', 'JDD',
    ],
  },
  {
    id: 'ta125',
    name: 'TA-125',
    label: 'Israel - TA-125',
    description: 'Top 125 Israeli companies',
    topStocks: [
      // Banks & Financial Services
      'TRNFP.TA', 'BANK.TA', 'HAPOALIM.TA', 'LEUMI.TA', 'MIZRAHI.TA', 'MASAD.TA',
      // Chemicals & Pharma
      'TEVA.TA', 'PERRIGO.TA', 'NRNC.TA', 'SNMX.TA', 'RYDL.TA', 'POLYPHA.TA',
      // Energy & Resources
      'ICL.TA', 'DESCARTES.TA', 'RATIO.TA', 'KMED.TA', 'SHUFERSAL.TA', 'BIOCARTX.TA',
      // Real Estate & Construction
      'ALHE.TA', 'BEZQ.TA', 'HOT.TA', 'PELEOT.TA', 'ORMAT.TA', 'PSAGOT.TA',
      // Tech & Software
      'NICE.TA', 'NETO.TA', 'WEPX.TA', 'MGDL.TA', 'DRIV.TA', 'SOFINA.TA',
      // Insurance
      'HSMR.TA', 'CLAL.TA', 'MENORA.TA', 'HERMETON.TA', 'TRIUMPH.TA', 'SHIRBIT.TA',
      // Retail & Consumer
      'SHRF.TA', 'SUPER.TA', 'AMRX.TA', 'EMMDL.TA', 'AZRIELI.TA', 'MELLANOX.TA',
      // Utilities & Transportation
      'ZAHAV.TA', 'DOVRAT.TA', 'GAZINT.TA', 'ISRAMCO.TA', 'KARDAN.TA', 'MODIIN.TA',
      // Additional Israeli companies
      'ASPECTOR.TA', 'ALTERNET.TA', 'BEZEQ.TA', 'CHIEF.TA', 'COMPUGEN.TA', 'DORAL.TA',
      'ELBIT.TA', 'EVERGREEN.TA', 'FZION.TA', 'GILAT.TA', 'GOLD.TA', 'HAREL.TA',
      'INTR.TA', 'JAVIT.TA', 'KAMADA.TA', 'KIBBUTZIM.TA', 'LEUMITECH.TA', 'LUOKUNG.TA',
      'MAGAL.TA', 'MANNA.TA', 'MECHEL.TA', 'MINIMEDX.TA', 'MODERN.TA', 'MORPHIX.TA',
      'NASDAQ.TA', 'NATASH.TA', 'NATIV.TA', 'NORTHSTAR.TA', 'NOVA.TA', 'OCEAN.TA',
      'OKEY.TA', 'OPKOTECH.TA', 'OPTIBRAND.TA', 'ORANGE.TA', 'ORMAT.TA', 'ORNIT.TA',
      'OUTERWALL.TA', 'OVID.TA', 'OXFORD.TA', 'PALLAD.TA', 'PANELIM.TA', 'PANORAMA.TA',
      'PARENT.TA', 'PARLEX.TA', 'PARKHOTEL.TA', 'PARTNR.TA', 'PATLEX.TA', 'PAYONEER.TA',
      'PEACE.TA', 'PEBBLE.TA', 'PEDEK.TA', 'PEREGRINE.TA', 'PERFEX.TA', 'PHARM.TA',
      'PHONIX.TA', 'PIONEER.TA', 'PLATONEX.TA', 'PLATINUM.TA', 'PLUG.TA', 'PLUTUS.TA',
      'POINT.TA', 'POLAR.TA', 'POLARCAP.TA', 'POLARIS.TA', 'POLANSKY.TA', 'POLYGON.TA',
      'POOL.TA', 'POOLEX.TA', 'POP.TA', 'PORGES.TA', 'PORLAN.TA', 'PORTAL.TA',
      'PORTOS.TA', 'POTECH.TA', 'POTREE.TA', 'POTTER.TA', 'POTTNY.TA', 'POWER.TA',
    ],
  },
  {
    id: 'nikkei',
    name: 'Nikkei 225',
    label: 'Japan - Nikkei 225',
    description: 'Top 225 Japanese companies',
    topStocks: [
      // Automotive
      '7203.T', '7261.T', '7270.T', '7282.T', '7284.T', '7309.T', '7581.T', '9107.T', '9437.T', '9613.T',
      // Electronics & Technology
      '6501.T', '6502.T', '6503.T', '6504.T', '6594.T', '6758.T', '6861.T', '9434.T', '9684.T', '8035.T',
      // Banking & Finance
      '8001.T', '8002.T', '8015.T', '8031.T', '8058.T', '8306.T', '8309.T', '8410.T', '8411.T', '8613.T',
      // Insurance
      '8630.T', '8725.T', '8766.T', '8795.T', '8801.T', '8802.T', '8804.T', '8818.T',
      // Retail & Trading
      '8031.T', '8252.T', '8267.T', '8278.T', '8279.T', '8304.T', '8306.T', '8308.T', '8311.T', '8355.T',
      // Construction & Engineering
      '1301.T', '1333.T', '1380.T', '1414.T', '1518.T', '1605.T', '1662.T', '1801.T', '1802.T', '1803.T',
      // Chemicals & Materials
      '4005.T', '4021.T', '4028.T', '4042.T', '4063.T', '4088.T', '4091.T', '4114.T', '4183.T', '4208.T',
      // Steel & Metals
      '5020.T', '5214.T', '5411.T', '5491.T', '5631.T', '5713.T', '5801.T', '5802.T', '5803.T', '5804.T',
      // Energy & Utilities
      '4511.T', '9501.T', '9502.T', '9503.T', '9504.T', '9505.T', '9506.T', '9507.T', '9508.T', '9509.T',
      // Pharmaceuticals & Medical
      '4502.T', '4503.T', '4506.T', '4507.T', '4519.T', '4523.T', '4528.T', '4542.T', '4544.T', '4547.T',
      // Food & Beverages
      '2001.T', '2002.T', '2004.T', '2269.T', '2501.T', '2502.T', '2503.T', '2531.T', '2532.T', '2533.T',
      // Textiles & Apparel
      '3086.T', '3101.T', '3103.T', '3105.T', '3401.T', '3407.T', '3551.T', '3565.T', '3591.T', '3592.T',
      // Paper & Pulp
      '3861.T', '3864.T', '3871.T', '3880.T', '3885.T', '3941.T', '3942.T', '4005.T',
      // Real Estate
      '3288.T', '3289.T', '3290.T', '3296.T', '3298.T', '3476.T', '3659.T', '3682.T', '3697.T', '3959.T',
      // Additional major companies
      '1925.T', '1963.T', '2768.T', '3402.T', '3407.T', '3765.T', '4755.T', '5938.T', '6479.T', '6857.T',
      '6954.T', '7011.T', '7012.T', '7013.T', '7014.T', '7015.T', '7044.T', '7180.T', '7181.T', '7182.T',
      '7201.T', '7202.T', '7204.T', '7205.T', '7211.T', '7219.T', '7220.T', '7222.T', '7224.T', '7231.T',
      '7242.T', '7244.T', '7245.T', '7259.T', '7264.T', '7267.T', '7269.T', '7271.T', '7272.T', '7276.T',
      '7278.T', '7279.T', '7286.T', '7289.T', '7296.T', '7298.T', '7299.T', '7301.T', '7302.T', '7304.T',
      '7606.T', '7611.T', '7731.T', '7732.T', '7733.T', '7734.T', '7735.T', '7740.T', '7741.T', '7742.T',
      '7751.T', '7752.T', '7832.T', '7911.T', '7912.T', '8031.T', '8050.T', '8252.T', '8591.T', '8601.T',
      '8616.T', '8622.T', '8628.T', '8704.T', '8801.T', '9001.T', '9002.T', '9005.T', '9008.T', '9009.T',
    ],
  },
  {
    id: 'europe',
    name: 'Europe',
    label: 'Europe - Major Exchanges',
    description: 'Top European companies',
    topStocks: [
      // Netherlands
      'ASML.AS', 'ING.AS', 'UNA.AS', 'OR.AS', 'PHIA.AS', 'KPN.AS', 'ABNA.AS', 'NN.AS',
      // Germany
      'SAP.DE', 'SIEMENS.DE', 'ALV.DE', 'VOW3.DE', 'DAX.DE', 'EOAN.DE', 'MUV2.DE', 'SIX2.DE',
      'HEN3.DE', 'RWE.DE', 'DB1.DE', 'BAYN.DE', 'BASF.DE', 'BMW.DE', 'BAS.DE', 'BEI.DE',
      // France
      'LVMH.PA', 'OREP.PA', 'PH.PA', 'AIR.PA', 'DG.PA', 'FP.PA', 'SAN.PA', 'SAF.PA',
      'ENGI.PA', 'RF.PA', 'STM.PA', 'MT.PA', 'VIE.PA', 'AXAF.PA', 'EDENRED.PA', 'VEOL.PA',
      // Spain & Portugal
      'BBVA.MC', 'IBE.MC', 'REP.MC', 'SAN.MC', 'ENIA.MC', 'ACS.MC', 'CLNX.MC', 'MAP.MC',
      'ENG.MC', 'MAS.MC', 'CIE.MC', 'ELE.MC', 'FER.MC', 'AMS.MC', 'PTC.MC', 'JSAN.MC',
      // Italy
      'G.MI', 'ISP.MI', 'MS.MI', 'TIT.MI', 'BAA.MI', 'STM.MI', 'ENEL.MI', 'EDENRED.MI',
      // Scandinavia
      'NOKIA.HE', 'FORTUM.HE', 'NESTE.HE', 'SAMPO.HE', 'NORDEA.HE', 'ASA.OL', 'OPERA.OL',
      // UK
      'HSBA.L', 'BARC.L', 'LLOY.L', 'AZN.L', 'GSK.L', 'SHEL.L', 'ULVR.L', 'RIO.L',
      'GLEN.L', 'AAL.L', 'BP.L', 'EDIN.L', 'FTSE.L', 'LSE.L', 'PRU.L', 'EXPN.L',
      // Belgium
      'GEBN.BR', 'ACKB.BR', 'GBT.BR', 'AWB.BR', 'UAA.BR',
      // Switzerland
      'NOVN.SW', 'RHHBY.SW', 'ASML.SW', 'NFLX.SW', 'MSFT.SW', 'INTC.SW', 'AAPL.SW',
      // Austria
      'VOE.VI', 'EBS.VI', 'RBI.VI', 'IMMOFINANZ.VI', 'OMV.VI',
      // Poland
      'PKO.WA', 'PKNORGEST.WA', 'SANTANDER.WA', 'PZE.WA', 'CCC.WA',
      // Czech Republic
      'KOMB.PR', 'CEZ.PR', 'ERSTE.PR', 'MONETA.PR',
      // Hungary
      'BIO.BU', 'OTP.BU', 'MTELEKOM.BU', 'RICHTER.BU',
      // Romania
      'BRK.BX', 'TBNC.BX', 'SNP.BX', 'SNG.BX',
      // Denmark
      'NOVO.CO', 'MAERSK.CO', 'JYSK.CO', 'ORSTED.CO', 'DFDS.CO',
      // Additional European leaders
      'LHAG.DE', 'PSAN.PA', 'SOFTM.ES', 'GRTK.FR', 'TTEF.L', 'RMG.L', 'CNA.L', 'ULVR.L',
      'SGRE.MC', 'ABBN.SW', 'GIVN.SW', 'NFLX.NE', 'ASML.NE', 'UNVR.NE', 'RELIANCE.NE',
    ],
  },
];

/**
 * Get index by ID
 */
export const getIndexById = (indexId: string): IndexConfig | undefined => {
  return STOCK_INDICES.find((idx) => idx.id === indexId);
};

/**
 * Get all indices
 */
export const getAllIndices = (): IndexConfig[] => {
  return STOCK_INDICES;
};
