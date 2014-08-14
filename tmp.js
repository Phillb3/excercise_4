// Width and height settings
var settings = {
  width:500, 
  height:400, 
  radius:7, 
  padding:40
}


var data = JSON.parse('[{"location":"ABW","region":"Latin America & Caribbean","ex_1960":"65.56936585","ex_2012":"75.2067561"},{"location":"AFG","region":"Sub-Saharan Africa","ex_1960":"31.58004878","ex_2012":"60.50912195"},{"location":"AGO","region":"Europe & Central Asia","ex_1960":"32.98482927","ex_2012":"51.464"},{"location":"ALB","region":"Europe & Central Asia","ex_1960":"62.25436585","ex_2012":"77.35046341"},{"location":"ARB","region":"Middle East & North Africa","ex_1960":"46.76269485","ex_2012":"69.94970243"},{"location":"ARE","region":"Latin America & Caribbean","ex_1960":"52.24321951","ex_2012":"76.95787805"},{"location":"ARG","region":"Europe & Central Asia","ex_1960":"65.21553659","ex_2012":"76.01268293"},{"location":"ARM","region":"East Asia & Pacific","ex_1960":"65.86346341","ex_2012":"74.43721951"},{"location":"ATG","region":"East Asia & Pacific","ex_1960":"61.78273171","ex_2012":"75.66531707"},{"location":"AUS","region":"Europe & Central Asia","ex_1960":"70.81707317","ex_2012":"82.09512195"},{"location":"AUT","region":"Europe & Central Asia","ex_1960":"68.58560976","ex_2012":"80.93658537"},{"location":"AZE","region":"Sub-Saharan Africa","ex_1960":"60.8362439","ex_2012":"70.62495122"},{"location":"BDI","region":"Europe & Central Asia","ex_1960":"41.23604878","ex_2012":"53.6287561"},{"location":"BEL","region":"Sub-Saharan Africa","ex_1960":"69.70195122","ex_2012":"80.38536585"},{"location":"BEN","region":"Sub-Saharan Africa","ex_1960":"37.27826829","ex_2012":"59.1194878"},{"location":"BFA","region":"South Asia","ex_1960":"34.47790244","ex_2012":"55.86202439"},{"location":"BGD","region":"Europe & Central Asia","ex_1960":"47.02456098","ex_2012":"70.29485366"},{"location":"BGR","region":"Middle East & North Africa","ex_1960":"69.24756098","ex_2012":"74.31463415"},{"location":"BHR","region":"Latin America & Caribbean","ex_1960":"52.08936585","ex_2012":"76.53619512"},{"location":"BHS","region":"Europe & Central Asia","ex_1960":"62.72904878","ex_2012":"74.91446341"},{"location":"BIH","region":"Europe & Central Asia","ex_1960":"60.27621951","ex_2012":"76.12114634"},{"location":"BLR","region":"Latin America & Caribbean","ex_1960":"67.70809756","ex_2012":"72.06341463"},{"location":"BLZ","region":"North America","ex_1960":"59.96136585","ex_2012":"73.69914634"},{"location":"BOL","region":"Latin America & Caribbean","ex_1960":"42.66812195","ex_2012":"66.92663415"},{"location":"BRA","region":"Latin America & Caribbean","ex_1960":"54.69214634","ex_2012":"73.61787805"},{"location":"BRB","region":"East Asia & Pacific","ex_1960":"60.76660976","ex_2012":"75.13202439"},{"location":"BRN","region":"South Asia","ex_1960":"62.45756098","ex_2012":"78.37346341"},{"location":"BTN","region":"Sub-Saharan Africa","ex_1960":"32.35936585","ex_2012":"67.88926829"},{"location":"CAF","region":"North America","ex_1960":"36.48263415","ex_2012":"49.47539024"},{"location":"CHE","region":"Europe & Central Asia","ex_1960":"71.31341463","ex_2012":"82.69756098"},{"location":"CHI","region":"Latin America & Caribbean","ex_1960":"70.63978049","ex_2012":"80.11982927"},{"location":"CHL","region":"East Asia & Pacific","ex_1960":"57.02153659","ex_2012":"79.57265854"},{"location":"CHN","region":"Sub-Saharan Africa","ex_1960":"43.46580488","ex_2012":"75.1995122"},{"location":"CMR","region":"Sub-Saharan Africa","ex_1960":"41.5237561","ex_2012":"54.5875122"},{"location":"COG","region":"Sub-Saharan Africa","ex_1960":"48.58163415","ex_2012":"58.29656098"},{"location":"COL","region":"Latin America & Caribbean","ex_1960":"56.7167561","ex_2012":"73.77707317"},{"location":"COM","region":"Sub-Saharan Africa","ex_1960":"43.44195122","ex_2012":"60.644"},{"location":"CPV","region":"Sub-Saharan Africa","ex_1960":"49.00136585","ex_2012":"74.54373171"},{"location":"CRI","region":"Latin America & Caribbean","ex_1960":"61.60636585","ex_2012":"79.70502439"},{"location":"CUB","region":"Latin America & Caribbean","ex_1960":"63.90465854","ex_2012":"79.06702439"},{"location":"CYP","region":"Europe & Central Asia","ex_1960":"69.59392683","ex_2012":"79.63712195"},{"location":"CZE","region":"Europe & Central Asia","ex_1960":"70.34878049","ex_2012":"78.07560976"},{"location":"DEU","region":"Europe & Central Asia","ex_1960":"69.31295122","ex_2012":"80.89268293"},{"location":"DJI","region":"Middle East & North Africa","ex_1960":"44.02126829","ex_2012":"61.30397561"},{"location":"DNK","region":"Europe & Central Asia","ex_1960":"72.17658537","ex_2012":"80.05121951"},{"location":"DOM","region":"Latin America & Caribbean","ex_1960":"51.84526829","ex_2012":"73.23297561"},{"location":"DZA","region":"Middle East & North Africa","ex_1960":"46.13512195","ex_2012":"70.88217073"},{"location":"ECU","region":"Latin America & Caribbean","ex_1960":"53.12443902","ex_2012":"76.19256098"},{"location":"EGY","region":"Middle East & North Africa","ex_1960":"48.01370732","ex_2012":"70.9072439"},{"location":"ERI","region":"Sub-Saharan Africa","ex_1960":"37.36290244","ex_2012":"62.23478049"},{"location":"ESP","region":"Europe & Central Asia","ex_1960":"69.10926829","ex_2012":"82.37804878"},{"location":"EST","region":"Europe & Central Asia","ex_1960":"67.90597561","ex_2012":"76.42682927"},{"location":"ETH","region":"Sub-Saharan Africa","ex_1960":"38.40570732","ex_2012":"62.96595122"},{"location":"FIN","region":"Europe & Central Asia","ex_1960":"68.8197561","ex_2012":"80.62682927"},{"location":"FJI","region":"East Asia & Pacific","ex_1960":"55.9584878","ex_2012":"69.74473171"},{"location":"FRA","region":"Europe & Central Asia","ex_1960":"69.86829268","ex_2012":"82.56585366"},{"location":"FSM","region":"East Asia & Pacific","ex_1960":"57.58658537","ex_2012":"68.85021951"},{"location":"GAB","region":"Sub-Saharan Africa","ex_1960":"39.55780488","ex_2012":"63.07392683"},{"location":"GBR","region":"Europe & Central Asia","ex_1960":"71.12682927","ex_2012":"81.5"},{"location":"GEO","region":"Europe & Central Asia","ex_1960":"63.43185366","ex_2012":"73.94487805"},{"location":"GHA","region":"Sub-Saharan Africa","ex_1960":"45.83146341","ex_2012":"60.94712195"},{"location":"GIN","region":"Sub-Saharan Africa","ex_1960":"34.88639024","ex_2012":"55.84465854"},{"location":"GMB","region":"Sub-Saharan Africa","ex_1960":"32.04221951","ex_2012":"58.60707317"},{"location":"GNB","region":"Sub-Saharan Africa","ex_1960":"42.14541463","ex_2012":"54.03363415"},{"location":"GNQ","region":"Sub-Saharan Africa","ex_1960":"36.73304878","ex_2012":"52.61290244"},{"location":"GRC","region":"Europe & Central Asia","ex_1960":"68.16390244","ex_2012":"80.63414634"},{"location":"GRD","region":"Latin America & Caribbean","ex_1960":"59.81592683","ex_2012":"72.61034146"},{"location":"GTM","region":"Latin America & Caribbean","ex_1960":"45.53163415","ex_2012":"71.66385366"},{"location":"GUM","region":"East Asia & Pacific","ex_1960":"61.22634146","ex_2012":"78.61856098"},{"location":"GUY","region":"Latin America & Caribbean","ex_1960":"58.23260976","ex_2012":"66.04626829"},{"location":"HKG","region":"East Asia & Pacific","ex_1960":"66.99970732","ex_2012":"83.4804878"},{"location":"HND","region":"Latin America & Caribbean","ex_1960":"46.28831707","ex_2012":"73.49343902"},{"location":"HRV","region":"Europe & Central Asia","ex_1960":"64.60865854","ex_2012":"76.92439024"},{"location":"HTI","region":"Latin America & Caribbean","ex_1960":"42.159","ex_2012":"62.70265854"},{"location":"HUN","region":"Europe & Central Asia","ex_1960":"68.00317073","ex_2012":"75.06341463"},{"location":"IDN","region":"East Asia & Pacific","ex_1960":"44.8065122","ex_2012":"70.6072439"},{"location":"IND","region":"South Asia","ex_1960":"41.38363415","ex_2012":"66.21085366"},{"location":"IRL","region":"Middle East & North Africa","ex_1960":"69.6917561","ex_2012":"80.89512195"},{"location":"IRN","region":"Middle East & North Africa","ex_1960":"44.9455122","ex_2012":"73.76273171"},{"location":"IRQ","region":"Europe & Central Asia","ex_1960":"48.03068293","ex_2012":"69.24192683"},{"location":"ISL","region":"Middle East & North Africa","ex_1960":"73.42865854","ex_2012":"82.91707317"},{"location":"ITA","region":"Latin America & Caribbean","ex_1960":"69.12390244","ex_2012":"82.93658537"},{"location":"JAM","region":"Middle East & North Africa","ex_1960":"64.19182927","ex_2012":"73.2824878"},{"location":"JOR","region":"East Asia & Pacific","ex_1960":"52.68526829","ex_2012":"73.74739024"},{"location":"JPN","region":"Europe & Central Asia","ex_1960":"67.66609756","ex_2012":"83.09609756"},{"location":"KAZ","region":"Sub-Saharan Africa","ex_1960":"58.36758537","ex_2012":"69.61"},{"location":"KEN","region":"Europe & Central Asia","ex_1960":"46.36241463","ex_2012":"61.08317073"},{"location":"KGZ","region":"East Asia & Pacific","ex_1960":"56.12807317","ex_2012":"70.00243902"},{"location":"KHM","region":"East Asia & Pacific","ex_1960":"41.20129268","ex_2012":"71.40882927"},{"location":"KIR","region":"Latin America & Caribbean","ex_1960":"46.875","ex_2012":"68.53234146"},{"location":"KOR","region":"Europe & Central Asia","ex_1960":"53.00131707","ex_2012":"81.36829268"},{"location":"LAC","region":"East Asia & Pacific","ex_1960":"55.88314633","ex_2012":"74.46199407"},{"location":"LAO","region":"Middle East & North Africa","ex_1960":"43.19292683","ex_2012":"67.80592683"},{"location":"LBN","region":"Sub-Saharan Africa","ex_1960":"63.28012195","ex_2012":"79.84636585"},{"location":"LBR","region":"Middle East & North Africa","ex_1960":"34.78317073","ex_2012":"60.20639024"},{"location":"LBY","region":"Latin America & Caribbean","ex_1960":"42.64119512","ex_2012":"75.17604878"},{"location":"LDC","region":"Europe & Central Asia","ex_1960":"40.62259234","ex_2012":"61.12517103"},{"location":"LIC","region":"South Asia","ex_1960":"41.78704227","ex_2012":"61.61872471"},{"location":"LMC","region":"Sub-Saharan Africa","ex_1960":"45.45047551","ex_2012":"66.20902445"},{"location":"LMY","region":"Europe & Central Asia","ex_1960":"46.20264275","ex_2012":"68.85343044"},{"location":"LSO","region":"Europe & Central Asia","ex_1960":"46.51070732","ex_2012":"48.836"},{"location":"LTU","region":"Europe & Central Asia","ex_1960":"69.84731707","ex_2012":"73.86341463"},{"location":"LUX","region":"East Asia & Pacific","ex_1960":"68.44639024","ex_2012":"81.39268293"},{"location":"LVA","region":"Latin America & Caribbean","ex_1960":"69.78682927","ex_2012":"73.77804878"},{"location":"MAC","region":"Middle East & North Africa","ex_1960":"64.66092683","ex_2012":"80.12778049"},{"location":"MAR","region":"Europe & Central Asia","ex_1960":"48.44663415","ex_2012":"70.64312195"},{"location":"MDG","region":"Latin America & Caribbean","ex_1960":"39.97468293","ex_2012":"64.24863415"},{"location":"MDV","region":"East Asia & Pacific","ex_1960":"35.85960976","ex_2012":"77.57382927"},{"location":"MEX","region":"Europe & Central Asia","ex_1960":"57.06563415","ex_2012":"77.13507317"},{"location":"MIC","region":"Middle East & North Africa","ex_1960":"46.74040745","ex_2012":"70.07561806"},{"location":"MKD","region":"East Asia & Pacific","ex_1960":"60.62280488","ex_2012":"75.03126829"},{"location":"MLT","region":"Europe & Central Asia","ex_1960":"67.60178049","ex_2012":"80.74634146"},{"location":"MMR","region":"East Asia & Pacific","ex_1960":"42.73639024","ex_2012":"64.93246341"},{"location":"MNA","region":"East Asia & Pacific","ex_1960":"46.57008377","ex_2012":"71.431472"},{"location":"MNE","region":"Sub-Saharan Africa","ex_1960":"63.70560976","ex_2012":"74.64987805"},{"location":"MNG","region":"Sub-Saharan Africa","ex_1960":"48.36880488","ex_2012":"67.33943902"},{"location":"MOZ","region":"Sub-Saharan Africa","ex_1960":"35.00370732","ex_2012":"49.83626829"},{"location":"MRT","region":"East Asia & Pacific","ex_1960":"43.48309756","ex_2012":"61.35060976"},{"location":"MWI","region":"Sub-Saharan Africa","ex_1960":"37.83558537","ex_2012":"54.72378049"},{"location":"MYS","region":"East Asia & Pacific","ex_1960":"59.47534146","ex_2012":"74.84229268"},{"location":"NAC","region":"Sub-Saharan Africa","ex_1960":"69.89360376","ex_2012":"78.99040047"},{"location":"NAM","region":"Sub-Saharan Africa","ex_1960":"46.88039024","ex_2012":"63.88114634"},{"location":"NCL","region":"Latin America & Caribbean","ex_1960":"58.63902439","ex_2012":"76.25341463"},{"location":"NER","region":"Europe & Central Asia","ex_1960":"35.51504878","ex_2012":"57.96617073"},{"location":"NIC","region":"Europe & Central Asia","ex_1960":"46.99882927","ex_2012":"74.46539024"},{"location":"NLD","region":"South Asia","ex_1960":"73.39268293","ex_2012":"81.10487805"},{"location":"NOC","region":"East Asia & Pacific","ex_1960":"65.42873223","ex_2012":"73.44282465"},{"location":"NZL","region":"Middle East & North Africa","ex_1960":"71.23658537","ex_2012":"81.15609756"},{"location":"OED","region":"South Asia","ex_1960":"67.33317642","ex_2012":"79.95512974"},{"location":"OMN","region":"Latin America & Caribbean","ex_1960":"42.66707317","ex_2012":"76.59104878"},{"location":"OSS","region":"Latin America & Caribbean","ex_1960":"45.49179869","ex_2012":"59.5348701"},{"location":"PAK","region":"East Asia & Pacific","ex_1960":"46.43373171","ex_2012":"66.43587805"},{"location":"PAN","region":"East Asia & Pacific","ex_1960":"60.87682927","ex_2012":"77.36809756"},{"location":"PER","region":"East Asia & Pacific","ex_1960":"47.69158537","ex_2012":"74.51553659"},{"location":"PHL","region":"Europe & Central Asia","ex_1960":"57.81192683","ex_2012":"68.55373171"},{"location":"PNG","region":"East Asia & Pacific","ex_1960":"38.4622439","ex_2012":"62.29892683"},{"location":"POL","region":"Europe & Central Asia","ex_1960":"67.6804878","ex_2012":"76.79756098"},{"location":"PRI","region":"Latin America & Caribbean","ex_1960":"68.71960976","ex_2012":"78.53553659"},{"location":"PRK","region":"Middle East & North Africa","ex_1960":"51.07717073","ex_2012":"69.50063415"},{"location":"PRY","region":"East Asia & Pacific","ex_1960":"63.79370732","ex_2012":"72.19373171"},{"location":"PSS","region":"Middle East & North Africa","ex_1960":"53.62091305","ex_2012":"69.68339061"},{"location":"PYF","region":"Europe & Central Asia","ex_1960":"56.35704878","ex_2012":"76.12902439"},{"location":"QAT","region":"Europe & Central Asia","ex_1960":"61.24790244","ex_2012":"78.45380488"},{"location":"ROU","region":"Sub-Saharan Africa","ex_1960":"65.64243902","ex_2012":"74.56341463"},{"location":"RWA","region":"Middle East & North Africa","ex_1960":"42.24929268","ex_2012":"63.49285366"},{"location":"SAS","region":"Sub-Saharan Africa","ex_1960":"42.38618239","ex_2012":"66.64470691"},{"location":"SAU","region":"Sub-Saharan Africa","ex_1960":"45.66626829","ex_2012":"75.49690244"},{"location":"SDN","region":"East Asia & Pacific","ex_1960":"48.18763415","ex_2012":"61.86395122"},{"location":"SEN","region":"Sub-Saharan Africa","ex_1960":"38.206","ex_2012":"63.20217073"},{"location":"SGP","region":"Latin America & Caribbean","ex_1960":"65.65982927","ex_2012":"82.14390244"},{"location":"SLB","region":"Europe & Central Asia","ex_1960":"49.38170732","ex_2012":"67.50707317"},{"location":"SLE","region":"Sub-Saharan Africa","ex_1960":"30.33153659","ex_2012":"45.32904878"},{"location":"SLV","region":"Europe & Central Asia","ex_1960":"51.29931707","ex_2012":"72.10453659"},{"location":"SOM","region":"Sub-Saharan Africa","ex_1960":"36.96587805","ex_2012":"54.6912439"},{"location":"SSD","region":"Sub-Saharan Africa","ex_1960":"31.67670732","ex_2012":"54.64295122"},{"location":"SSF","region":"Latin America & Caribbean","ex_1960":"40.2032538","ex_2012":"56.43890783"},{"location":"SST","region":"Europe & Central Asia","ex_1960":"51.93174752","ex_2012":"63.20306578"},{"location":"STP","region":"Europe & Central Asia","ex_1960":"50.45136585","ex_2012":"66.13487805"},{"location":"SUR","region":"Europe & Central Asia","ex_1960":"59.68012195","ex_2012":"70.81139024"},{"location":"SVK","region":"Sub-Saharan Africa","ex_1960":"69.97592683","ex_2012":"76.1097561"},{"location":"SVN","region":"Latin America & Caribbean","ex_1960":"68.97804878","ex_2012":"80.12439024"},{"location":"SWE","region":"Sub-Saharan Africa","ex_1960":"73.00560976","ex_2012":"81.70487805"},{"location":"SWZ","region":"Middle East & North Africa","ex_1960":"44.23378049","ex_2012":"48.85063415"},{"location":"SYR","region":"Sub-Saharan Africa","ex_1960":"52.7682439","ex_2012":"74.71070732"},{"location":"TCD","region":"Europe & Central Asia","ex_1960":"38.01612195","ex_2012":"50.70058537"},{"location":"TGO","region":"Europe & Central Asia","ex_1960":"40.27282927","ex_2012":"56.15034146"},{"location":"THA","region":"East Asia & Pacific","ex_1960":"55.23836585","ex_2012":"74.18797561"},{"location":"TJK","region":"East Asia & Pacific","ex_1960":"56.15353659","ex_2012":"67.25717073"},{"location":"TKM","region":"Latin America & Caribbean","ex_1960":"54.45868293","ex_2012":"65.31358537"},{"location":"TLS","region":"Middle East & North Africa","ex_1960":"33.72712195","ex_2012":"67.02058537"},{"location":"TON","region":"Europe & Central Asia","ex_1960":"61.36453659","ex_2012":"72.489"},{"location":"TTO","region":"East Asia & Pacific","ex_1960":"62.65758537","ex_2012":"69.81714634"},{"location":"TUN","region":"Sub-Saharan Africa","ex_1960":"42.0097561","ex_2012":"75.1"},{"location":"TUR","region":"Sub-Saharan Africa","ex_1960":"45.38441463","ex_2012":"74.86243902"},{"location":"UGA","region":"Latin America & Caribbean","ex_1960":"43.98356098","ex_2012":"58.64797561"},{"location":"UKR","region":"North America","ex_1960":"68.29953659","ex_2012":"70.94414634"},{"location":"UMC","region":"Europe & Central Asia","ex_1960":"47.80281177","ex_2012":"74.15797921"},{"location":"URY","region":"Latin America & Caribbean","ex_1960":"67.89587805","ex_2012":"76.90782927"},{"location":"USA","region":"Latin America & Caribbean","ex_1960":"69.77073171","ex_2012":"78.74146341"},{"location":"UZB","region":"Latin America & Caribbean","ex_1960":"58.88553659","ex_2012":"68.104"},{"location":"VCT","region":"East Asia & Pacific","ex_1960":"57.72387805","ex_2012":"72.40121951"},{"location":"VEN","region":"East Asia & Pacific","ex_1960":"59.52919512","ex_2012":"74.4875122"},{"location":"VNM","region":"East Asia & Pacific","ex_1960":"59.06702439","ex_2012":"75.60668293"},{"location":"VUT","region":"Middle East & North Africa","ex_1960":"46.4874878","ex_2012":"71.41068293"},{"location":"WLD","region":"Sub-Saharan Africa","ex_1960":"52.47936704","ex_2012":"70.77924335"},{"location":"WSM","region":"Sub-Saharan Africa","ex_1960":"49.9695122","ex_2012":"72.98204878"}]')

var xValues = data.map(function(d) {return d.ex_1960})
var xMin = d3.min(xValues)
var xMax = d3.max(xValues)

var yMin = d3.min(data, function(d ){return d.ex_2012})
var yMax = d3.max(data, function(d ){return d.ex_2012})

var xScale = d3.scale.linear().domain([xMin, xMax]).range([settings.radius, settings.width - settings.radius])

var yScale = d3.scale.linear().domain([yMin, yMax]).range([settings.height - settings.radius,settings.radius]) 

//circle function
var circleFunction = function(circ) {
  circ.attr('cx', function(d) {return xScale(d.ex_1960)})
  .attr('cy', function(d) {return yScale(d.ex_2012)})
  .attr('r', settings.radius)
}
                      
var myG = d3.select('#my-svg')
  .append('g')
  .attr('id', 'my-g')
  .attr('transform', 'translate(' + settings.padding + ','+ settings.padding + ')')

var colorScale = d3.scale.category10()
  
var circles = myG.selectAll('circle')
  .data(data)          
  .enter().append('circle').call(circleFunction)
  .style('fill', function(d) { return colorScale(d)})

// Axis function
var xAxisFunction = d3.svg.axis()
  .scale(xScale)
  .orient('bottom')
  .ticks(8)

// Append axis
var xAxis = d3.select('#my-g').append('g').attr('class', 'axis')
  .attr('transform', 'translate(0,'+ (settings.height) + ')')
  .call(xAxisFunction)

// yaxis function
var yAxisFunction = d3.svg.axis()
        .scale(yScale)
        .orient('left')
        .ticks(8)

// Append axis
var yAxis = d3.select('#my-g').append('g').attr('class', 'axis')
    .attr('transform', 'translate(0,0)')
    .call(yAxisFunction)                    