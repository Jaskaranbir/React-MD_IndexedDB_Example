import batchLoadDB from '@/batchLoadDB'

function loadDB () {
  const dummyData = [
    {
      compId: 1,
      compName: 'Jacobs, Ortiz and Welch',
      compAddr: '86720 Nova Avenue',
      compCity: 'Bahuang',
      compCountry: 'China',
      compPost: '91499',
      compContact: 'ashermar0@weibo.com',
      compPhone: '361-313-6086'
    },
    {
      compId: 2,
      compName: 'Orn, Larson and Ondricka',
      compAddr: '8230 Carberry Trail',
      compCity: 'Inuvik',
      compCountry: 'Canada',
      compPost: 'E8L',
      compContact: 'aateridge1@google.de',
      compPhone: '431-359-0988'
    },
    {
      compId: 3,
      compName: 'Reichert Inc',
      compAddr: '355 Arapahoe Pass',
      compCity: 'Gia Nghĩa',
      compCountry: 'Vietnam',
      compPost: '91499',
      compContact: 'mvedeshkin2@vimeo.com',
      compPhone: '852-701-5463'
    },
    {
      compId: 4,
      compName: 'Breitenberg Inc',
      compAddr: '55235 Corry Crossing',
      compCity: 'Argelia',
      compCountry: 'Colombia',
      compPost: '761517',
      compContact: 'rtaggett3@jalbum.net',
      compPhone: '166-768-8145'
    },
    {
      compId: 5,
      compName: 'Roob, Wiegand and Lindgren',
      compAddr: '12628 Service Junction',
      compCity: 'Charleston',
      compCountry: 'United States',
      compPost: '25389',
      compContact: 'sbollins4@jigsy.com',
      compPhone: '304-688-3873'
    },
    {
      compId: 6,
      compName: 'Kihn, Corkery and Hilpert',
      compAddr: '17386 Tony Street',
      compCity: 'Petkovci',
      compCountry: 'Bosnia and Herzegovina',
      compPost: '91499',
      compContact: 'mscocroft5@census.gov',
      compPhone: '769-551-6050'
    },
    {
      compId: 7,
      compName: 'Wintheiser, Armstrong and Doyle',
      compAddr: '0124 Butternut Road',
      compCity: 'Van Nuys',
      compCountry: 'United States',
      compPost: '91499',
      compContact: 'rodonegan6@miibeian.gov.cn',
      compPhone: '213-149-4250'
    },
    {
      compId: 8,
      compName: 'Schneider-Feeney',
      compAddr: '73 Mayer Park',
      compCity: 'Miedzichowo',
      compCountry: 'Poland',
      compPost: '64-361',
      compContact: 'fgodwin7@hud.gov',
      compPhone: '429-955-5695'
    },
    {
      compId: 9,
      compName: 'Prosacco Group',
      compAddr: '5 Maple Plaza',
      compCity: 'Sinabang',
      compCountry: 'Indonesia',
      compPost: '91499',
      compContact: 'kwhiteman8@purevolume.com',
      compPhone: '390-772-3099'
    },
    {
      compId: 10,
      compName: 'Casper, Hickle and Keebler',
      compAddr: '019 Buell Terrace',
      compCity: 'Resplendor',
      compCountry: 'Brazil',
      compPost: '35230-000',
      compContact: 'emeysham9@blogger.com',
      compPhone: '170-619-8018'
    }
  ]

  batchLoadDB(dummyData)
}

export default loadDB
