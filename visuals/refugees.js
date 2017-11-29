	// Code help and inspiration from http://flowingdata.com/2016/01/05/causes-of-death/
//
//
// User settings
//
var USER_DEMO = 'F';
var USER_COUNTRY = null;

//
// Places meta-data  Note: these places are based on the Nativity/ Ethnicity, not country of origin or departure
//
var places_meta = {'AB': {'descrip': 'na', 'show_label': 0, 'name': 'United Arab Emirates', 'xlab': 2011}, 
 'AF': {'descrip': 'na', 'show_label': 1, 'name': 'Afghanistan', 'xlab': 2016}, 
 'AJ': {'descrip': 'na', 'show_label': 0, 'name': 'Azerbaijan', 'xlab': 2007}, 
 'AK': {'descrip': 'na', 'show_label': 0, 'name': 'Arkanese', 'xlab': 2014}, 
 'AM': {'descrip': 'na', 'show_label': 0, 'name': 'Armenia', 'xlab': 2007}, 
 'AO': {'descrip': 'na', 'show_label': 0, 'name': 'Angola', 'xlab': 2016}, 
 'AR': {'descrip': 'na', 'show_label': 0, 'name': 'Argentina', 'xlab': 2015}, 
 'AU': {'descrip': 'na', 'show_label': 0, 'name': 'Austria', 'xlab': 2015}, 
 'BA': {'descrip': 'na', 'show_label': 0, 'name': 'Bahrain', 'xlab': 2014}, 
 'BC': {'descrip': 'na', 'show_label': 0, 'name': 'Botswana', 'xlab': 2014}, 
 'BE': {'descrip': 'na', 'show_label': 0, 'name': 'Belgium', 'xlab': 2010}, 
 'BEN': {'descrip': 'na', 'show_label': 0, 'name': 'Benadir', 'xlab': 2015}, 
 'BK': {'descrip': 'na', 'show_label': 0, 'name': 'Bosnia', 'xlab': 2013}, 
 'BM': {'descrip': 'na', 'show_label': 1, 'name': 'Burma', 'xlab': 2010}, 
 'BO': {'descrip': 'na', 'show_label': 0, 'name': 'Belarus', 'xlab': 2016}, 
 'BR': {'descrip': 'na', 'show_label': 0, 'name': 'Brazil', 'xlab': 2015}, 
 'BT': {'descrip': 'na', 'show_label': 1, 'name': 'Bhutan', 'xlab': 2010}, 
 'BY': {'descrip': 'na', 'show_label': 0, 'name': 'Burundi', 'xlab': 2010}, 
 'CB': {'descrip': 'na', 'show_label': 0, 'name': 'Cambodia', 'xlab': 2015}, 
 'CD': {'descrip': 'na', 'show_label': 0, 'name': 'Chad', 'xlab': 2008}, 
 'CE': {'descrip': 'na', 'show_label': 0, 'name': 'Sri Lanka', 'xlab': 2014}, 
 'CG': {'descrip': 'na', 'show_label': 1, 'name': 'Congo', 'xlab': 2013}, 
 'CH': {'descrip': 'na', 'show_label': 0, 'name': 'China', 'xlab': 2008}, 
 'CI': {'descrip': 'na', 'show_label': 0, 'name': 'Chile', 'xlab': 2007}, 
 'CM': {'descrip': 'na', 'show_label': 0, 'name': 'Cameroon', 'xlab': 2012}, 
 'CN': {'descrip': 'na', 'show_label': 0, 'name': 'Chin', 'xlab': 2012}, 
 'CO': {'descrip': 'na', 'show_label': 0, 'name': 'Columbia', 'xlab': 2009}, 
 'CT': {'descrip': 'na', 'show_label': 0, 'name': 'Central African Republic', 'xlab': 2011}, 
 'CU': {'descrip': 'na', 'show_label': 1, 'name': 'Cuba', 'xlab': 2016}, 
 'CY': {'descrip': 'na', 'show_label': 0, 'name': 'Calendar Year', 'xlab': 2015}, 
 'DA': {'descrip': 'na', 'show_label': 0, 'name': 'Denmark', 'xlab': 2007}, 
 'DC': {'descrip': 'na', 'show_label': 1, 'name': 'Dem Republic of the Congo', 'xlab': 2016}, 
 'DJ': {'descrip': 'na', 'show_label': 0, 'name': 'Djibouti', 'xlab': 2008}, 
 'DR': {'descrip': 'na', 'show_label': 0, 'name': 'Darod', 'xlab': 2007}, 
 'EC': {'descrip': 'na', 'show_label': 0, 'name': 'Ecuador', 'xlab': 2010}, 
 'EG': {'descrip': 'na', 'show_label': 0, 'name': 'Egypt', 'xlab': 2008}, 
 'EQ': {'descrip': 'na', 'show_label': 0, 'name': 'Equateur', 'xlab': 2016}, 
 'ER': {'descrip': 'na', 'show_label': 0, 'name': 'Eritrea', 'xlab': 2008}, 
 'ET': {'descrip': 'na', 'show_label': 1, 'name': 'Ethopia', 'xlab': 2015}, 
 'GA': {'descrip': 'na', 'show_label': 0, 'name': 'The Gambia', 'xlab': 2016}, 
 'GB': {'descrip': 'na', 'show_label': 0, 'name': 'Gabon', 'xlab': 2015}, 
 'GG': {'descrip': 'na', 'show_label': 0, 'name': 'Georgia', 'xlab': 2009}, 
 'GH': {'descrip': 'na', 'show_label': 0, 'name': 'Ghana', 'xlab': 2010}, 
 'GT': {'descrip': 'na', 'show_label': 0, 'name': 'Guatemala', 'xlab': 2013}, 
 'GU': {'descrip': 'na', 'show_label': 0, 'name': 'Guinea', 'xlab': 2011}, 
 'HA': {'descrip': 'na', 'show_label': 0, 'name': 'Haiti', 'xlab': 2013}, 
 'HK': {'descrip': 'na', 'show_label': 0, 'name': 'Hong Kong', 'xlab': 2015}, 
 'HO': {'descrip': 'na', 'show_label': 0, 'name': 'Honduras', 'xlab': 2010}, 
 'HU': {'descrip': 'na', 'show_label': 0, 'name': 'Hutu', 'xlab': 2009}, 
 'HZ': {'descrip': 'na', 'show_label': 0, 'name': 'Hazara', 'xlab': 2007}, 
 'ID': {'descrip': 'na', 'show_label': 0, 'name': 'Indonesia', 'xlab': 2013}, 
 'IN': {'descrip': 'na', 'show_label': 0, 'name': 'India', 'xlab': 2015}, 
 'IR': {'descrip': 'na', 'show_label': 1, 'name': 'Iran', 'xlab': 2007}, 
 'IS': {'descrip': 'na', 'show_label': 0, 'name': 'Israel', 'xlab': 2011}, 
 'IV': {'descrip': 'na', 'show_label': 0, 'name': 'Ivory Coast', 'xlab': 2015}, 
 'IZ': {'descrip': 'na', 'show_label': 1, 'name': 'Iraq', 'xlab': 2013}, 
 'JO': {'descrip': 'na', 'show_label': 0, 'name': 'Jordan', 'xlab': 2012}, 
 'KA': {'descrip': 'na', 'show_label': 0, 'name': 'Karen', 'xlab': 2014}, 
 'KC': {'descrip': 'na', 'show_label': 0, 'name': 'Kachin', 'xlab': 2011}, 
 'KD': {'descrip': 'na', 'show_label': 0, 'name': 'Kurdish', 'xlab': 2014}, 
 'KE': {'descrip': 'na', 'show_label': 1, 'name': 'Kenya', 'xlab': 2009}, 
 'KG': {'descrip': 'na', 'show_label': 0, 'name': 'Kyrgyzstan', 'xlab': 2012}, 
 'KM': {'descrip': 'na', 'show_label': 0, 'name': 'Kunuma', 'xlab': 2009}, 
 'KN': {'descrip': 'na', 'show_label': 0, 'name': 'North Korea', 'xlab': 2011}, 
 'KO': {'descrip': 'na', 'show_label': 0, 'name': 'Kosovo', 'xlab': 2012}, 
 'KRI': {'descrip': 'na', 'show_label': 0, 'name': 'Karenni', 'xlab': 2015}, 
 'KU': {'descrip': 'na', 'show_label': 0, 'name': 'Kuwait', 'xlab': 2014}, 
 'KZ': {'descrip': 'na', 'show_label': 0, 'name': 'Kazakhstan', 'xlab': 2016}, 
 'LA': {'descrip': 'na', 'show_label': 0, 'name': 'Laos', 'xlab': 2011}, 
 'LE': {'descrip': 'na', 'show_label': 0, 'name': 'Lebanon', 'xlab': 2012}, 
 'LH': {'descrip': 'na', 'show_label': 0, 'name': 'Lhotsampa', 'xlab': 2012}, 
 'LI': {'descrip': 'na', 'show_label': 0, 'name': 'Liberia', 'xlab': 2008}, 
 'LO': {'descrip': 'na', 'show_label': 0, 'name': 'Slovakia', 'xlab': 2016}, 
 'LY': {'descrip': 'na', 'show_label': 0, 'name': 'Libya', 'xlab': 2010}, 
 'MA': {'descrip': 'na', 'show_label': 0, 'name': 'Morocco', 'xlab': 2011}, 
 'MD': {'descrip': 'na', 'show_label': 0, 'name': 'Moldova', 'xlab': 2007}, 
 'MI': {'descrip': 'na', 'show_label': 0, 'name': 'Malawi', 'xlab': 2007}, 
 'MLT': {'descrip': 'na', 'show_label': 0, 'name': 'Malta', 'xlab': 2008}, 
 'MM': {'descrip': 'na', 'show_label': 0, 'name': 'Myanmar', 'xlab': 2014}, 
 'MO': {'descrip': 'na', 'show_label': 0, 'name': 'Mon', 'xlab': 2016}, 
 'MS': {'descrip': 'na', 'show_label': 0, 'name': 'Massalit', 'xlab': 2015}, 
 'MT': {'descrip': 'na', 'show_label': 0, 'name': 'Meskhetian Turk', 'xlab': 2007}, 
 'MU': {'descrip': 'na', 'show_label': 0, 'name': 'Oman', 'xlab': 2010}, 
 'MX': {'descrip': 'na', 'show_label': 0, 'name': 'Mexico', 'xlab': 2010}, 
 'MY': {'descrip': 'na', 'show_label': 0, 'name': 'Malaysia', 'xlab': 2009}, 
 'MZ': {'descrip': 'na', 'show_label': 0, 'name': 'Mozambique', 'xlab': 2015}, 
 'NI': {'descrip': 'na', 'show_label': 0, 'name': 'Nigeria', 'xlab': 2014}, 
 'NM': {'descrip': 'na', 'show_label': 0, 'name': 'Namibia', 'xlab': 2009}, 
 'NP': {'descrip': 'na', 'show_label': 1, 'name': 'Nepal', 'xlab': 2012}, 
 'PA': {'descrip': 'na', 'show_label': 0, 'name': 'Paraguay', 'xlab': 2008}, 
 'PAL': {'descrip': 'na', 'show_label': 0, 'name': 'Palestine', 'xlab': 2008}, 
 'PE': {'descrip': 'na', 'show_label': 0, 'name': 'Peru', 'xlab': 2007}, 
 'PH': {'descrip': 'na', 'show_label': 0, 'name': 'Philippines', 'xlab': 2009}, 
 'PK': {'descrip': 'na', 'show_label': 0, 'name': 'Pakistan', 'xlab': 2016}, 
 'PS': {'descrip': 'na', 'show_label': 0, 'name': 'Pashtoon', 'xlab': 2014}, 
 'RG': {'descrip': 'na', 'show_label': 0, 'name': 'Rohingya', 'xlab': 2008}, 
 'RO': {'descrip': 'na', 'show_label': 0, 'name': 'Romania', 'xlab': 2007}, 
 'RS': {'descrip': 'na', 'show_label': 0, 'name': 'Russia', 'xlab': 2007}, 
 'RW': {'descrip': 'na', 'show_label': 1, 'name': 'Rwanda', 'xlab': 2016}, 
 'SA': {'descrip': 'na', 'show_label': 0, 'name': 'Saudi Arabia', 'xlab': 2015}, 
 'SB': {'descrip': 'na', 'show_label': 0, 'name': 'Somali Bantu', 'xlab': 2008}, 
 'SD': {'descrip': 'na', 'show_label': 0, 'name': 'El Salvador', 'xlab': 2008}, 
 'SF': {'descrip': 'na', 'show_label': 0, 'name': 'South Africa', 'xlab': 2012}, 
 'SG': {'descrip': 'na', 'show_label': 0, 'name': 'Senegal', 'xlab': 2016}, 
 'SH': {'descrip': 'na', 'show_label': 0, 'name': 'Shan', 'xlab': 2011}, 
 'SK': {'descrip': 'na', 'show_label': 0, 'name': 'South Korea', 'xlab': 2011}, 
 'SL': {'descrip': 'na', 'show_label': 0, 'name': 'Sierra Leone', 'xlab': 2016}, 
 'SN': {'descrip': 'na', 'show_label': 0, 'name': 'Suni', 'xlab': 2007}, 
 'SO': {'descrip': 'na', 'show_label': 1, 'name': 'Somalia', 'xlab': 2012}, 
 'SR': {'descrip': 'na', 'show_label': 0, 'name': 'Serbian', 'xlab': 2015}, 
 'SSU': {'descrip': 'na', 'show_label': 0, 'name': 'South Sudan', 'xlab': 2016}, 
 'SU': {'descrip': 'na', 'show_label': 0, 'name': 'Sudan', 'xlab': 2014}, 
 'SY': {'descrip': 'na', 'show_label': 0, 'name': 'Syria', 'xlab': 2016}, 
 'TA': {'descrip': 'na', 'show_label': 0, 'name': 'Tamil', 'xlab': 2015}, 
 'TB': {'descrip': 'na', 'show_label': 0, 'name': 'Tibet', 'xlab': 2011}, 
 'TG': {'descrip': 'na', 'show_label': 0, 'name': 'Tigray', 'xlab': 2008}, 
 'TH': {'descrip': 'na', 'show_label': 1, 'name': 'Thailand', 'xlab': 2011}, 
 'TI': {'descrip': 'na', 'show_label': 0, 'name': 'Tajikistan', 'xlab': 2009}, 
 'TO': {'descrip': 'na', 'show_label': 0, 'name': 'Togo', 'xlab': 2007}, 
 'TS': {'descrip': 'na', 'show_label': 0, 'name': 'Tunisia', 'xlab': 2008}, 
 'TU': {'descrip': 'na', 'show_label': 0, 'name': 'Turkey', 'xlab': 2011},
  'TX': {'descrip': 'na', 'show_label': 0, 'name': 'Turkmenistan', 'xlab': 2014}, 
  'TZ': {'descrip': 'na', 'show_label': 1, 'name': 'Tanzania', 'xlab': 2016}, 
  'UG': {'descrip': 'na', 'show_label': 1, 'name': 'Uganda', 'xlab': 2016}, 
  'UK': {'descrip': 'na', 'show_label': 0, 'name': 'United Kingdom', 'xlab': 2011}, 
  'UP': {'descrip': 'na', 'show_label': 0, 'name': 'Ukraine', 'xlab': 2007}, 
  'UZ': {'descrip': 'na', 'show_label': 0, 'name': 'Uzbekistan', 'xlab': 2011}, 
  'VE': {'descrip': 'na', 'show_label': 0, 'name': 'Venezuela', 'xlab': 2010}, 
  'VN': {'descrip': 'na', 'show_label': 0, 'name': 'Vietnam', 'xlab': 2010}, 
  'WZ': {'descrip': 'na', 'show_label': 0, 'name': 'Swaziland', 'xlab': 2015}, 
  'YM': {'descrip': 'na', 'show_label': 0, 'name': 'Yemen', 'xlab': 2013}, 
  'YO': {'descrip': 'na', 'show_label': 0, 'name': 'Yugoslavia', 'xlab': 2007}, 
  'ZA': {'descrip': 'na', 'show_label': 0, 'name': 'Zambia', 'xlab': 2008}, 
  'ZI': {'descrip': 'na', 'show_label': 0, 'name': 'Zimbabwe', 'xlab': 2007}, 
  'ZR': {'descrip': 'na', 'show_label': 0, 'name': 'Zaire', 'xlab': 2008}}

//
// Margins
// 
var margin = {top: 10, right: 25, bottom: 30, left: 60},
    width = 780 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
	percent = d3.format('%');

//
// Scales
//
var x = d3.scale.linear()
       .range([0, width]);

var y = d3.scale.linear()
       .range([height, 0]);

// Color
var z = d3.scale.category20c();

// x-axis
var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.tickFormat(function(d) {
		if (d == 100) {
			return ">100";
		} else {
			return d;
		}
	});

// y-axis
var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left')
	.tickFormat(percent);

//
// Layout
//
var stack = d3.layout.stack()
    .offset("zero")
    .values(function(d) { return d.values; })
    .x(function(d) { return d.yoa; })
    .y(function(d) { return d.perc; });
	
var nest = d3.nest()
    .key(function(d) { return d.country; });

var area = d3.svg.area()
    .x(function(d) { return x(d.yoa); })
    .y0(function(d) { return y(d.y0); })
    .y1(function(d) { return y(d.y0 + d.y); });

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//
// Load data
// 
d3.tsv("https://rawgit.com/nafisamasud/utah_refugees/master/visuals/countries.tsv", type, function(error, data_all) {
	
	// Filter to just males or females
	var data_filtered = data_all.filter(function(d) { return d.gender === USER_DEMO; });

	var layers = stack(nest.entries(data_filtered));

	x.domain(d3.extent(data_filtered, function(d) { return d.yoa; }));
	y.domain([0, d3.max(data_filtered, function(d) { return d.y0 + d.y; })]);

	//
	// Filter buttons
	//
	var filters = d3.selectAll("#filters .demo")
		.on("click", function() {
			d3.select(".demo.current").classed("current", false);
			USER_DEMO = d3.select(this).attr("data-val");
			d3.select(this).classed("current", true);
			update();
		});

	//
	// Notes for currently selected (blank to start)
	//
	
	var curr_title = svg.append("text")
		.attr("id", "currcause")
		.attr("transform", "translate("+ (width/2+margin.left) + "," + (height/2+margin.top-100) + ")");

	// 
	// Navigation buttons for previous and next
	//
	var reset_button = svg.append("text")
		.attr("id", "reset")
		.attr("class", "navbutton")
		.attr("transform", "translate("+ (width/2+margin.left) + "," + (height/2+margin.top-150) + ")")
		.text("SHOW ALL")
		.on("click", reset);
	var prev_button = svg.append("text")
		.attr("id", "previous")
		.attr("class", "navbutton")
		.attr("transform", "translate("+ (width/2+margin.left-10) + "," + (height/2+margin.top-50) + ")")
		.text("< PREV")
		.on("click", previous);
	var next_button = svg.append("text")
		.attr("id", "next")
		.attr("class", "navbutton")
		.attr("transform", "translate("+ (width/2+margin.left+10) + "," + (height/2+margin.top-50) + ")")
		.text("NEXT >")
		.on("click", next);


	// Year lookup value
		var yearKey = {2006: 0,
 				   2007: 1,
 				   2008: 2,
 				   2009: 3,
 				   2010: 4,
 				   2011: 5,
 				   2012: 6,
 				   2013: 7,
 				   2014: 8,
 				   2015: 9,
 				   2016: 10,
 				   2017: 11
 				}

	//
	// Layers
	//
	svg.selectAll(".layer")
		.data(layers)
	  .enter().append("path")
    	.attr("class", "layer")
		.attr("id", function(d) { return d.key; })
    	.attr("d", function(d) { return area(d.values); })
		.style("fill", function(d, i) { return z(d.key); });

	var layer_label = svg.selectAll(".layerlabel")
		.data(layers)
	  .enter().append("text")
		.attr("class", "layerlabel")
		.attr("transform", function(d) {
			var cmeta = places_meta[d.key];
			var tempval = yearKey[cmeta.xlab];  // added so you can index correctly based on year
			var cvalue = d.values[tempval];
			return "translate(" + x(cmeta.xlab) + "," + y(cvalue.y0 + cvalue.y / 2) + ")";
		})
		.attr("dy", ".5em")
		.text(function(d) { 
			
			if (places_meta[d.key].show_label == 1) {  // here we filter to only show certain labels due to overcrowding
				return places_meta[d.key].name;
			} else {
				return "";
			}
		});


	//
	// Axes
	//
	svg.append("g")
    	.attr("class", "x axis")
    	.attr("transform", "translate(0," + height + ")")
    	.call(xAxis);
	svg.append("text")
		.attr("class", "x axis")
		.attr("transform", "translate(10," + (height+19) + ")");
		// .text("years old");
	svg.append("g")
    	.attr("class", "y axis")
    	.call(yAxis);


	// 
	// Layer interaction
	//
	
	// Click layer.
	svg.selectAll(".layer").on("click", function(d,i) {
		if (USER_COUNTRY === null) {
			USER_COUNTRY = d3.select(this).attr("id");
		} else {
			USER_COUNTRY = null;
		}
				
		update();
	});

	// Next layer.
	function next() {
		if (USER_COUNTRY != null) {
			var curr_index = Object.keys(places_meta).indexOf(USER_COUNTRY);
			if (curr_index == Object.keys(places_meta).length-1) {
				USER_COUNTRY = Object.keys(places_meta)[0];
			} else {
				USER_COUNTRY = Object.keys(places_meta)[curr_index+1];
			}
			
			update();
		}
	}
	
	
	// Previous layer.
	function previous() {
		if (USER_COUNTRY != null) {
			var causes = Object.keys(places_meta);
			var curr_index = causes.indexOf(USER_COUNTRY);
			if (curr_index == 0) {
				USER_COUNTRY = causes[causes.length-1];
			} else {
				USER_COUNTRY = causes[curr_index-1];
			}
			
			update();
		}
	}

	// Reset and show all layers.
	function reset() {
		USER_COUNTRY = null;
		update();
	}

	// Update the chart.
	function update() {
		
		data_filtered = data_all.filter(function(d) { return d.gender === USER_DEMO; });
		
		// User selected a country
		if (USER_COUNTRY != null) {
			
			// Update current title
			curr_title.text(places_meta[USER_COUNTRY].name);
			
			// Filter data accordingly.
			data_filtered = data_filtered.map(function(d) {
				if (d.country !== USER_COUNTRY) {	// Scope issues (?). Had to create new object.
					return {
						"yoa": d.yoa,
						"country": d.country,
						"gender": d.gender,
						"perc": 0,
						"y": d.y,
						"y0": d.y0,
					}
				} else {
					return d;
				}
			});
		
		} 
		
		// Cause deselected
		else {
			// Don't need to do anything.
		}

		// Update the layers.
		var layers = stack(nest.entries(data_filtered));

		d3.selectAll(".layer")
			.data(layers)
		  .transition()
			.duration(1000)
			.attr("d", function(d) {
				return area(d.values); 
			});

		// Update layer labels.
		d3.selectAll(".layerlabel")
			.data(layers)
		  .transition()
			.duration(1000)
			.attr("transform", function(d) {


				var cmeta = places_meta[d.key];
				var tempval = yearKey[cmeta.xlab];
				var cvalue = d.values[tempval];

				return "translate(" + x(cmeta.xlab) + "," + y(cvalue.y0 + cvalue.y / 2) + ")";
			})
			.style("opacity", function() {
				if (USER_COUNTRY != null) {
					// Fade label out
					return 0;
				} else {
					return 1;
				}
			});
	} // end update func

});

//
// Set specified fields to numeric
//
function type(d) {
	d.yoa = +d.yoa;
	d.perc = +d.perc;
	return d;
}
