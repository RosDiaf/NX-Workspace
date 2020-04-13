export interface IClientData {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const baseUrlForLogo = "https://www.euromoneyplc.com"
export const ClientData: IClientData[] = [
  {
    id: 0,
    name: 'Euromoney',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/euromoney-logo.png',
    description: 'Euromoney, founded in 1969 to chart the liberalisation of cross-border capital flows, is the leading publisher on the world\'s banking and financial markets. Our coverage provides unrivalled insight into the finance houses at the heart of global finance through our privileged access to their senior leaders. Euromoney plays a key role analysing, describing, measuring and presenting these institutions and also convening them with their peers and customers at an extensive range of conferences, awards ceremonies and seminars worldwide.'
  },
  {
    id: 1,
    name: 'Airfinance Journal',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Air%20Finance%20Journal.png',
    description: 'With over 20 years’ experience, Airfinance Journal is the leading source of business intelligence in its niche market. It tracks aircraft, airline and aerospace deals, corporate news, airline and market developments, as well as providing unique fleet and deal data. Airfinance Journal\'s global events provide the highest-quality content and networking for airlines, lessors, financiers, law firms, manufacturers, investors, MROs and associations.'
  },
  {
    id: 2,
    name: 'Global Capital',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Global%20Capital.png',
    description: 'GlobalCapital, "the voice of the markets", is a leading news, opinion and data service for people and institutions using and working in the international capital markets. Its teams in New York, London and Hong Kong provide lively coverage of markets based on the feedback of those who work in them through a wealth of transaction data and archive material from 30 years of primary markets coverage. Euromoney’s GlobalCapital service enables clients to pick up the pulse of their market, to research an issuer, intermediary or asset class or to check out how it is performing relative to its peers.'
  },
  {
    id: 3,
    name: 'Insider Publishing Group',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/05-02-2020/insider-media-group-logo.png',
    description: 'Insider Publishing Group delivers global wholesale, specialty and (re)insurance intelligence that enables our readers to act first. With our four titles, Insurance Insider, Inside P&C, Trading Risk and Inside FAC – we provide the definitive view across the London market, reinsurance, the US P&C market, Bermuda and ILS. Insider Publishing Group is synonymous with integrity. Our award winning team of journalists produce content with impartiality and independence.'
  },
  {
    id: 4,
    name: 'IJ Global',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/IJ%20Global_0.png',
    description: 'IJ Global provides detailed information on the financial structures, policy, pricing and the key players influencing transactions and trends in the infrastructure projects sector. IJ Global includes the largest database of deals, with over 18,000 projects, allowing users to search and track deals and export underlying data.'
  },
  {
    id: 5,
    name: 'Information Management Network (IMN)',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/IMN_1.png',
    description: 'IMN is a global organizer of institutional finance and investment conferences. The company arms investors in investment management, structured finance and real estate finance with the knowledge they need to survive and thrive in tomorrow’s world of finance and investment. IMN is a global leader for securitization events around the world.'
  },
  {
    id: 6,
    name: 'Total Derivatives',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Total%20Derivatives.png',
    description: 'Total Derivatives is the prime source of real-time news and analysis of the global fixed income derivatives markets. It covers the full range of fixed income derivatives markets – including swaps, options, inflation and exotics – across all of the major currencies.'
  },
  {
    id: 7,
    name: 'Euromoney TRADEDATA',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Euromoney%20TradeData.png',
    description: 'Euromoney TRADEDATA is a premier reference data provider for global exchange traded derivatives. It is an acknowledged specialist and innovator in the futures, options and OTC cleared markets. It has operated a community based quality assurance model for nearly two decades which has made it a market leader in its field with a strong and proven track record in customer service.'
  },
  {
    id: 8,
    name: 'BoardEx',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/BoardEx.png',
    description: 'The premier provider of relationship mapping since 1999, BoardEx helps companies leverage their known and unknown connections more effectively. BoardEx is the most comprehensive, continuously growing global leadership solution, covering more than 1.7 million organizations and the 1.2+ million individuals who lead them, including board members, C-suite executives and senior leaders. The leading financial institutions, law firms, accounting firms, private equity firms, consultants, corporations, quant funds, universities and not-for-profits rely on BoardEx’s accurate, ever-evolving data.'
  },
  {
    id: 9,
    name: 'Capacity Media',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Capacity.png',
    description: 'The Capacity events series offer more than 20 events each year connecting telecoms professionals to share information and trade voice and data. Capacity magazine is the leading source of wholesale news, views and comment and Capacity Intelligence offers data on 1,000 telecoms carriers.'
  },
  {
    id: 10,
    name: 'ITW',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/ITW-new.png',
    description: 'Annually, International Telecoms Week (ITW) brings together carriers and service providers from more than 140 countries for bilateral trading and networking. Together Capacity Events and ITW connect 12,000 international carrier professionals worldwide each year.'
  },
  {
    id: 11,
    name: 'Wealth-X',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/logos/WealthX_0.jpg',
    description: 'The global leader in wealth information and insight, Wealth-X partners with prestige brands across the financial services, luxury, nonprofit and higher-education industries to fuel strategic decision-making in sales, marketing and compliance.  Wealth-X has developed the world’s largest collection of records on wealthy individuals and produces unparalleled data analysis to help organizations uncover, understand, and engage their target audience, as well as mitigate risk.  Founded in 2010, with staff across North America, Europe and Asia, Wealth-X provides unique data, analysis, and counsel to a growing roster of over 500 clients, worldwide. '
  },
  {
    id: 12,
    name: 'AMM',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/pricingimg/Fastmarkets%20AMM.png',
    description: 'Founded to establish transparency in the metals markets, Fastmarkets AMM, the new name for American Metal Market, set the standard for price reporting over 130 years ago and, in the process, defined the benchmarks widely quoted today. Fastmarkets AMM provides proprietary pricing data and market news for the ferrous and non-ferrous metals markets with a focus on North America and world markets where applicable. Companies across the globe use Fastmarkets AMM prices to negotiate contracts, purchase materials, understand future raw material costs, estimate project costs in proposals, perform inventory valuations and create forecast models. Visit Fastmarkets AMM'
  },
  {
    id: 13,
    name: 'MB',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/pricingimg/Fastmarkets%20AMM.png',
    description: 'Fastmarkets MB, the new name for Metal Bulletin, is the premium global intelligence service for metals and steel professionals. It was first introduced in 1913 with the mission to provide must-have timely information, including price indications, for the global non-ferrous metals and steel markets. Fastmarkets MB covers all global metals and steel markets and provides a comprehensive package of the latest news, pricing information, expert market commentary and statistics.'
  },
  {
    id: 14,
    name: 'RISI',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/pricingimg/Fastmarkets%20AMM.png',
    description: 'Fastmarkets RISI is the leading price reporting and information provider for the global forest products industry. For over 30 years, producers, suppliers, buyers and investors have relied on Fastmarkets RISI for objective insight and market intelligence to help them make better decisions. Fastmarkets RISI’s product suite includes pricing data, industry news, forecasting, mill intelligence, conferences, and custom projects for the timber, pulp, recycled fibre, paper, packaging, wood fibre, sawlog, wood products, tissue and nonwovens markets. Headquartered in Boston, Fastmarkets RISI has 10 offices globally in North and South America, Europe and Asia.'
  },
  {
    id: 15,
    name: 'Coltrans',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Coaltrans%20Conferences.png',
    description: 'Coaltrans offers market information and unparalleled networking opportunities for the international coal industry. It organises the world\'s largest annual conference and exhibition for the international coal industry, held in a different European city each October. The company also hosts Coaltrans Americas, Coaltrans China, Coaltrans India, Coaltrans South Africa and other regional conferences, exhibitions and field trips. It runs a series of specialist residential training courses for coal, power and shipping executives.'
  },
  {
    id: 16,
    name: 'GlobalGrains',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/Global%20Grain.png',
    description: 'Global Grain in Geneva is the world\'s premier trading event in the grain calendar, attracting over 900 delegates from 50 countries. Geneva is the prime location for the leading trading companies in grain, oilseeds, and soft commodities. The business also runs events in South America, Middle East and Asia. Together these world-leading events for the global grain trading industry welcome more than 2000 attendees from 65 countries.'
  },
  {
    id: 17,
    name: 'Institutional Investor',
    imageUrl: baseUrlForLogo + '/sites/euromoney/files/II.png',
    description: 'For 50 years, Institutional Investor has built its reputation on providing must-have information for the world\'s most influential decision-makers in traditional and alternative asset management. In additional to its renowned publications, Institutional Investor offers highly respected thought leadership products as well as proprietary benchmark rankings and ratings on buy-side and sell-side research, hedge fund activity, and asset and wealth management. It has a proven history of anticipating the personalities and trends most likely to influence the global financial markets. Its Memberships and Forums division attracts an incomparable who’s-who of thought leaders to more than 100 annual events in all major markets globally.'
  },
  {
    id: 18,
    name: 'NCSC',
    imageUrl: 'https://cdn2.hubspot.net/hubfs/4921440/cyberaccelerator_acceleratormember_iaw_ncsc_logo_col.png',
    description: 'One Of The Most CREST Accredited Companies - Advising Companies On Security & Risk. Our Approach Helps Firms To Minimise Their Risks Of Encountering A Cybersecurity Breach. PCI Security Specialists. Lloyd’s Register Group. 24/7 Security Monitoring. CREST Certified.'
  },
  {
    id: 18,
    name: 'Legal & General',
    imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/legal-general-logo-png-transparent.png',
    description: 'Legal & General Group plc, commonly known as Legal & General, is a multinational financial services company headquartered in London, England. Its products and services include investment management, lifetime mortgages, pensions, annuities, and life assurance.'
  },
  {
    id: 19,
    name: 'Cafcass',
    imageUrl: 'https://www.hunteranduro.co.uk/wp-content/uploads/2017/01/CAFCASS.png',
    description: 'The Children and Family Court Advisory and Support Service is a non-departmental public body in England set up to promote the welfare of children and families involved in family court.'
  }
]


