(() => {
  window.addEventListener('load', (event) => {
function createVisualization(breakdown, rates) {
  var color = d3.scaleOrdinal()
      .range(['#2E69FF','#5AADC2','#79F7C6','#8B31E4','#FFCA36', '#FF3B84']);

  function createDonut(chartSelector, legendSelector) {
    var init = breakdown.filter((b) => b.PROFILE == 'Overall')
        .map((b) => ({PROFILE: 'Overall', PAYMENT_TYPE: b.PAYMENT_TYPE, TOTAL: 0}));

    var containerWidth = document.querySelector(`#${chartSelector}`).offsetWidth;

    var margin = {top: 10, right: 30, bottom: 40, left: 60},
        width = containerWidth - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    d3.select(`#${chartSelector}`).selectAll('*').remove();

    var svg = d3.select(`#${chartSelector}`)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + ((width / 2) + margin.left) + ',' +
                                          ((height / 2) + margin.top) + ')');

    var radius = Math.min(width, height) / 2;

    var arc = d3.arc()
        .padAngle(1.5 / radius)
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.TOTAL; });

    var path = svg
      .datum(init)
      .selectAll('path')
      .data(pie)
      .enter()
      .append('path')
      .attr('class', 'arc')
      .attr('fill', function (d, i) { return color(i) })
      .attr('d', arc)
      .each(function (d) { this._current = d });

    svg.update = function(filter) {
      function arcTween(a) {
        var i = d3.interpolate(this._current, a)
        this._current = i(0)
        return function (t) {
          return arc(i(t))
        }
      }

      var base = breakdown.filter((b) => b.PROFILE == 'Overall').map((b) => ({PROFILE: filter, PAYMENT_TYPE: b.PAYMENT_TYPE, TOTAL: 0}));
      var data = breakdown.filter((b) => b.PROFILE == filter).sort((a, b) => a.TOTAL - b.TOTAL).reverse().slice(0, 6);
      var total = data.reduce((memo, cur) => memo + cur.TOTAL, 0);
      var min = Math.round(total / 100);

      var pie = d3.pie()
          .sort(null)
          .value(function(d) { return d.TOTAL == 0 ? 0 : Math.max(min, d.TOTAL); });

      var legend = d3.select(`#${legendSelector}`).selectAll('div');
      var legendData = data.map((d) => d.PAYMENT_TYPE);

      legend.data(legendData, (d, i) => d + i).enter().append('div').attr('class', 'legend-item').text(d => d)
        .call((parent) => { 
          parent.append('span').lower().attr('class', 'legend-dot').style('background', (d, i) => color(i)) 
        });
      
      legend.data(legendData, (d, i) => d + i).exit().remove();

      var donutData = Object.assign(base, data);
      
      svg.datum(donutData).selectAll('path')
        .data(pie)
      .enter().append('path')
        .attr('class', 'arc')
        .attr('fill', function(d, i) { return color(i); })
        .attr('stroke', '#fff')
        .attr('d', arc)
        .each(function(d) { this._current = d; })

      svg.datum(donutData).selectAll('path').data(pie).transition().duration(500).attrTween('d', arcTween)
      
      svg.datum(donutData).selectAll('path')
        .data(pie).exit().remove();

      const tt = d3.select('.donut-tooltip').node() ? 
          d3.select('.donut-tooltip') : 
          d3.select(`#${chartSelector}`)
            .append('div')
            .attr('class', 'donut-tooltip')
            .style('opacity', 0);

      svg.selectAll('path')
          .on('mouseenter', mouseEnter)
          .on('mouseleave', mouseLeave);

      function mouseEnter(e, d) {
        const x = arc.centroid(e)[0];
        const y = arc.centroid(e)[1];

        const w = document.getElementById(chartSelector).getBoundingClientRect().width;
        const h = document.getElementById(chartSelector).getBoundingClientRect().height;

        const dy = y > 0 ? 30 : -30

        const ttx = (w / 2) + x;
        const tty = y - (h / 2) + dy;

        tt.html("<div class='tooltip-inner'>" + donutData[d].PAYMENT_TYPE + "</div>" + `${(donutData[d].TOTAL / total * 100).toFixed(1)}%`);
        
        tt.style('opacity', 1)
          .style('color', color(d))
          .style('transform', `translate(calc(-50% + ${ttx}px), calc(-100% + ${tty}px))`);
      }

      function mouseLeave() {
        tt.style('opacity', 0);
      }
    }

    return svg;
  }

  function createBars(chartSelector, legendSelector) {
    var init = rates.filter((b) => b.PROFILE == 'Overall')
        .map((r, i) => ({PROFILE: 'Overall', PAYMENT_TYPE: r.PAYMENT_TYPE, BLOCK_RATE: 0}));

    var containerWidth = document.querySelector(`#${chartSelector}`).offsetWidth;

    var margin = {top: 20, right: 0, bottom: 10, left: 100}
        width = containerWidth - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    d3.select(`#${chartSelector}`).selectAll('*').remove();

    const svg = d3.select(`#${chartSelector}`)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("transform", `translate(${margin.left / 2},0)`)
        .attr("style", "max-width: 100%; height: auto;");

    var bars = svg.append("g");

    var xAxis = svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`);

    var yAxis = svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -margin.left + 15)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("Block Rate (%)"));

    svg.update = function(filter) {
      var donutTypes = breakdown.filter((b) => b.PROFILE == filter).sort((a, b) => a.TOTAL - b.TOTAL).reverse().slice(0, 6).map((b) => b.PAYMENT_TYPE);

      var barData = rates.filter((r) => r.PROFILE == filter && r.BLOCK_RATE !== 0 && donutTypes.includes(r.PAYMENT_TYPE)).sort((a, b) => a.BLOCK_RATE - b.BLOCK_RATE).reverse().slice(0, 6);
      
      var legend = d3.select(`#${legendSelector}`).selectAll('div');
      var legendData = barData.map((d) => d.PAYMENT_TYPE);

      legend.data(legendData, (d, i) => d + i).enter().append('div').attr('class', 'legend-item').text(d => d)
        .call((parent) => { 
          parent.append('span').lower().attr('class', 'legend-dot').style('background', (d, i) => color(donutTypes.indexOf(d))) 
        });
      
      legend.data(legendData, (d, i) => d + i).exit().remove();

      const x = d3.scaleBand()
          .domain(barData.map((d) => d.PAYMENT_TYPE)) // descending frequency
          .range([margin.left, width - margin.right])
          .padding(0.1);
      
      const y = d3.scaleLinear()
          .domain([0, d3.max(barData, (d) => d.BLOCK_RATE)])
          .range([height - margin.bottom, margin.top]);

      bars
        .selectAll("rect")
        .data(barData, (d) => d.PAYMENT_TYPE + d.BLOCK_RATE)
      .enter()
        .append("rect")
        .attr("fill", (d) => color(donutTypes.indexOf(d.PAYMENT_TYPE)))
        .attr("x", (d) => x(d.PAYMENT_TYPE))
        .attr("width", x.bandwidth())
        .attr("height", 0)
        .attr("y", height - margin.bottom)
        .transition()
        .duration(500)
        .attr("y", (d) => y(d.BLOCK_RATE))
        .attr("height", (d) => y(0) - y(d.BLOCK_RATE));

      bars.selectAll('rect').data(barData, (d) => d.PAYMENT_TYPE + d.BLOCK_RATE).exit().remove();

      bars.selectAll('rect')
        .on('mouseenter', mouseEnter)
        .on('mouseleave', mouseLeave);

      xAxis.call(d3.axisBottom(x).tickSize(0).tickValues([]))

      yAxis
          .transition()
          .duration(500)
          .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed(2)).ticks(5))

      const tt = d3.select('.bar-tooltip').node() ? 
          d3.select('.bar-tooltip') : 
          d3.select(`#${chartSelector}`)
            .append('div')
            .attr('class', 'bar-tooltip')
            .style('opacity', 0);

      function mouseEnter(e, d) {
        tt.html("<div class='tooltip-inner'>" + e.PAYMENT_TYPE + "</div>" + `${(e.BLOCK_RATE * 100).toFixed(1)}%`);

        const OFFSET = 50.5;
        const ttWidth = tt.node().getBoundingClientRect().width;
        const barWidth = bars
          .selectAll("rect").node().getBBox().width;
        
        tt.style('opacity', 1)
          .style('color', color(donutTypes.indexOf(e.PAYMENT_TYPE)))
          .style('transform', `translate(${OFFSET + x(e.PAYMENT_TYPE) + (barWidth / 2) - (ttWidth / 2)}px, ${y(e.BLOCK_RATE)}px)`);
      }

      function mouseLeave() {
        tt.style('opacity', 0);
      }
    }

    return svg;
  }

  var currentFilterPt = {};

  var donut = createDonut('breakdown', 'breakdownLegend');
  var bars = createBars('rates', 'ratesLegend');
  
  updateAllPt();
   // ---------- Updated code for the dropdown menus and graphs ----------
   let industryDropdownBox = document.getElementById("filter-industry-pt-container");
   let industryDropdown = document.getElementById("filter-industry-pt");
   let industryDropdownOption = document.querySelectorAll("#filter-industry-pt li");
   let industryDropdownBoxText = document.querySelector("#filter-industry-pt-text .industry-text");
   let industryResetDropdown = document.getElementById("filter-industry-pt-reset");

   // ----- Filter by industry functionality -----
   // show and hide the dropdown menu
   industryDropdownBox.addEventListener("mouseover", () => {
     industryDropdown.classList.add("show");
     industryDropdown.classList.remove("hide");
     industryDropdownBox.classList.add("active");
     industryDropdownBox.classList.remove("non-active");
     
   });

   industryDropdownBox.addEventListener("mouseout", () => {
     industryDropdown.classList.add("hide");
     industryDropdown.classList.remove("show");
     industryDropdownBox.classList.add("non-active");
     industryDropdownBox.classList.remove("active");
   });

   // ----- Selection functionality -----
   // Loop through and add an eventlistener to each
   for(let i = 0; i < industryDropdownOption.length; i++) {
     industryDropdownOption[i].addEventListener("click", (event) => {
       // graph reset functionality
       if(event.target.getAttribute("value") === "Reset") {
         updateAllPt(null);
         industryResetDropdown.textContent = 'Filter by industry';
         industryResetDropdown.classList.remove("show");
       } else {
         // get the value from the li to update the graphs
         updateAllPt(event.target.getAttribute("value")); 
       }

       // ---------- Active dropdown item functionality ----------
       // get the active elements (the selected dropdown item)
       let active = document.querySelectorAll('#filter-industry-pt .active');

       // if a list option has the active class, remove it...
       if(active) {
         // clear the active class from all the ones that are marked active
         active.forEach(i => i.classList.remove("active"));
       }

       // ...then add the active class to the clicked dropdown
       industryDropdownOption[i].classList.add('active');
       // --------------------------------------------------------

       // when you click on an li, hide the dropdown
       industryDropdown.classList.remove("show");

       // change the text of the dropdown box to the selection
       industryDropdownBoxText.textContent = industryDropdownOption[i].textContent;

       // remove gray from the industry container, remove "active" class from the geo dropdown
       industryDropdownBox.classList.remove("grayed");

       // add dark gray to the active container
       industryDropdownBox.classList.add("active");

       // check to see if Reset was not picked
       if(event.target.getAttribute("value") !== "Reset") {
         industryResetDropdown.classList.add("show");
         industryResetDropdown.textContent = "Reset";
       } else {
         industryDropdownBox.classList.remove("active");
       }
     });
   }

  function updateAllPt(filter) {
    if (!filter) {
      filter = 'Overall';
    }
    
    donut.update(filter);
    bars.update(filter);

    currentFilterPt = {filter};
  }

  function debounce(func, time) {
      var time = time || 100;
      var timer;
      return function(event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
      };
  }

  function resizeContent() {
    donut = createDonut('breakdown', 'breakdownLegend');
    bars = createBars('rates', 'ratesLegend');
    updateAllPt(currentFilterPt.filter);
    console.log (currentFilterPt.filter);
  }

  window.addEventListener('resize', debounce( resizeContent, 150 ));
}

var breakdown = [{"PROFILE": "Overall", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 4333171}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 101155}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 151137}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 335593}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Financing", "TOTAL": 37081}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 39354}, {"PROFILE": "Overall", "PAYMENT_TYPE": "In-app Purchase", "TOTAL": 129}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Money Order", "TOTAL": 3042}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Points", "TOTAL": 151019}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 151107}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 97555}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 54843}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 149461}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 803233}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 3481}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 16660}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 82572}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 12277}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "In-app Purchase", "TOTAL": 87}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Money Order", "TOTAL": 3042}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Points", "TOTAL": 135783}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 98401}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 477}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 16}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 811180}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 554}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Points", "TOTAL": 2185}, {"PROFILE": "Loyalty", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 2749}, {"PROFILE": "Loyalty", "PAYMENT_TYPE": "Points", "TOTAL": 1367}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 238061}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 57}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 9831}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 3109}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Financing", "TOTAL": 4136}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 3357}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "In-app Purchase", "TOTAL": 42}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Points", "TOTAL": 10905}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 424621}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 37}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 10737}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 537}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Financing", "TOTAL": 741}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 8435}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Points", "TOTAL": 569}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 1044744}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 3818}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 62915}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Financing", "TOTAL": 340}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 12911}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 8362}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 143}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 1235}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 559711}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 31468}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 8527}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Financing", "TOTAL": 31724}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 2323}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Points", "TOTAL": 210}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 106012}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 2074}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Financing", "TOTAL": 140}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Credit/Debit Card", "TOTAL": 84990}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Cryptocurrency", "TOTAL": 25}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Digital Wallet", "TOTAL": 20532}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Electronic Fund Transfer", "TOTAL": 27221}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Gift Cards and Vouchers", "TOTAL": 51}];

var rates = [{"PROFILE": "Overall", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 19638.48205128205, "TOTAL": 1840031.9333333333, "BLOCK_RATE": 0.010672902842346713}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Cryptocurrency", "BLOCKS": 25268.25, "TOTAL": 929902.0, "BLOCK_RATE": 0.027173024684321572}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 2451.4576271186443, "TOTAL": 196836.08474576272, "BLOCK_RATE": 0.012454310043227054}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 6195.462962962963, "TOTAL": 288875.77777777775, "BLOCK_RATE": 0.021446806688406116}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Financing", "BLOCKS": 2448.0666666666666, "TOTAL": 47751.333333333336, "BLOCK_RATE": 0.051266980328647016}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 1172.8181818181818, "TOTAL": 60609.393939393936, "BLOCK_RATE": 0.019350435726035068}, {"PROFILE": "Overall", "PAYMENT_TYPE": "In-app Purchase", "BLOCKS": 64.5, "TOTAL": 4470.0, "BLOCK_RATE": 0.014429530201342283}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Money Order", "BLOCKS": 1521.0, "TOTAL": 64911.5, "BLOCK_RATE": 0.023431903437757563}, {"PROFILE": "Overall", "PAYMENT_TYPE": "Points", "BLOCKS": 13678.545454545454, "TOTAL": 253578.72727272726, "BLOCK_RATE": 0.053942006893322715}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 16747.333333333332, "TOTAL": 279051.22222222225, "BLOCK_RATE": 0.06001526601448319}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Cryptocurrency", "BLOCKS": 48783.5, "TOTAL": 1825023.5, "BLOCK_RATE": 0.026730340732598785}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 13710.75, "TOTAL": 179279.5, "BLOCK_RATE": 0.07647695358365011}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 11479.307692307691, "TOTAL": 768408.3076923077, "BLOCK_RATE": 0.01493907285669838}, {"PROFILE": "Cryptocurrency", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 0.0, "TOTAL": 8314.0, "BLOCK_RATE": 0.0}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 14373.102564102564, "TOTAL": 780123.9487179487, "BLOCK_RATE": 0.018424126816928565}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Cryptocurrency", "BLOCKS": 3481.0, "TOTAL": 56498.0, "BLOCK_RATE": 0.06161280045311338}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 1492.4285714285713, "TOTAL": 602905.2857142857, "BLOCK_RATE": 0.002475394737434475}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 9161.333333333334, "TOTAL": 48430.333333333336, "BLOCK_RATE": 0.18916519261344475}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 1335.4444444444443, "TOTAL": 67658.88888888889, "BLOCK_RATE": 0.01973790090815036}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "In-app Purchase", "BLOCKS": 87.0, "TOTAL": 3771.0, "BLOCK_RATE": 0.023070803500397773}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Money Order", "BLOCKS": 1521.0, "TOTAL": 64911.5, "BLOCK_RATE": 0.023431903437757563}, {"PROFILE": "Digital goods & services", "PAYMENT_TYPE": "Points", "BLOCKS": 67898.5, "TOTAL": 1110079.5, "BLOCK_RATE": 0.061165439051887725}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 9819.2, "TOTAL": 1452914.4, "BLOCK_RATE": 0.006758278395478771}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 159.33333333333334, "TOTAL": 8276.333333333334, "BLOCK_RATE": 0.019251681501470056}, {"PROFILE": "Digital wallets", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 14.0, "TOTAL": 9458.0, "BLOCK_RATE": 0.00148022837809262}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 135191.33333333334, "TOTAL": 41714000.666666664, "BLOCK_RATE": 0.0032409102740740877}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 553.0, "TOTAL": 7718.0, "BLOCK_RATE": 0.07165068670640062}, {"PROFILE": "Food ordering & delivery", "PAYMENT_TYPE": "Points", "BLOCKS": 1092.5, "TOTAL": 25433.0, "BLOCK_RATE": 0.04295600204458774}, {"PROFILE": "Loyalty", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 1374.5, "TOTAL": 174742.0, "BLOCK_RATE": 0.007865882272149799}, {"PROFILE": "Loyalty", "PAYMENT_TYPE": "Points", "BLOCKS": 455.6666666666667, "TOTAL": 109137.0, "BLOCK_RATE": 0.004175180430712469}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 9376.555555555555, "TOTAL": 516489.05555555556, "BLOCK_RATE": 0.01815441286644452}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 4915.5, "TOTAL": 435625.5, "BLOCK_RATE": 0.011283774710158153}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 861.0, "TOTAL": 136250.0, "BLOCK_RATE": 0.006319266055045872}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Financing", "BLOCKS": 1373.0, "TOTAL": 59387.666666666664, "BLOCK_RATE": 0.02311927841358756}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 431.57142857142856, "TOTAL": 86411.28571428571, "BLOCK_RATE": 0.004994387307213509}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "In-app Purchase", "BLOCKS": 42.0, "TOTAL": 5169.0, "BLOCK_RATE": 0.00812536273940801}, {"PROFILE": "Marketplaces", "PAYMENT_TYPE": "Points", "BLOCKS": 5452.5, "TOTAL": 92566.5, "BLOCK_RATE": 0.05890359903420784}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 26501.375, "TOTAL": 1125444.8125, "BLOCK_RATE": 0.023547467370817882}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 2675.5, "TOTAL": 104340.0, "BLOCK_RATE": 0.025642131493195323}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 268.0, "TOTAL": 3721.0, "BLOCK_RATE": 0.07202364955657081}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Financing", "BLOCKS": 247.0, "TOTAL": 44259.666666666664, "BLOCK_RATE": 0.005580701767598792}, {"PROFILE": "Online travel & lodging", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 2105.5, "TOTAL": 62605.25, "BLOCK_RATE": 0.033631364781707605}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 48132.166666666664, "TOTAL": 601966.2777777778, "BLOCK_RATE": 0.07995824424642466}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 1272.6666666666667, "TOTAL": 140850.66666666666, "BLOCK_RATE": 0.009035574319847027}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 10480.333333333334, "TOTAL": 367739.8333333333, "BLOCK_RATE": 0.02849931495953435}, {"PROFILE": "Payment service providers", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 4302.333333333333, "TOTAL": 141007.66666666666, "BLOCK_RATE": 0.030511343354853046}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 1672.2, "TOTAL": 149566.2, "BLOCK_RATE": 0.011180333524553008}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 71.5, "TOTAL": 45283.5, "BLOCK_RATE": 0.0015789415570792893}, {"PROFILE": "Remittances", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 298.75, "TOTAL": 81457.25, "BLOCK_RATE": 0.003667567957425521}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 8834.790322580646, "TOTAL": 219908.24193548388, "BLOCK_RATE": 0.040174894059553136}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 1084.0344827586207, "TOTAL": 56463.275862068964, "BLOCK_RATE": 0.01919893003386394}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 708.4166666666666, "TOTAL": 56751.083333333336, "BLOCK_RATE": 0.012482874776252435}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Financing", "BLOCKS": 3965.125, "TOTAL": 33233.625, "BLOCK_RATE": 0.11931063794575524}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 326.42857142857144, "TOTAL": 11943.42857142857, "BLOCK_RATE": 0.027331228170900917}, {"PROFILE": "Retail", "PAYMENT_TYPE": "Points", "BLOCKS": 105.0, "TOTAL": 2898.5, "BLOCK_RATE": 0.0362256339485941}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 17669.333333333332, "TOTAL": 347735.5, "BLOCK_RATE": 0.05081256683120743}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 957.0, "TOTAL": 490799.5, "BLOCK_RATE": 0.001949879737041297}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 0.0, "TOTAL": 8249.0, "BLOCK_RATE": 0.0}, {"PROFILE": "Ticketing", "PAYMENT_TYPE": "Financing", "BLOCKS": 140.0, "TOTAL": 139459.0, "BLOCK_RATE": 0.0010038792763464532}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Credit/Debit Card", "BLOCKS": 21206.25, "TOTAL": 1524858.0, "BLOCK_RATE": 0.013907032654843927}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Cryptocurrency", "BLOCKS": 25.0, "TOTAL": 13063.0, "BLOCK_RATE": 0.0019138023424940672}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Digital Wallet", "BLOCKS": 10235.0, "TOTAL": 1111281.5, "BLOCK_RATE": 0.00921008763306147}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Electronic Fund Transfer", "BLOCKS": 9053.666666666666, "TOTAL": 508977.0, "BLOCK_RATE": 0.017787968153112354}, {"PROFILE": "iGaming & online gambling", "PAYMENT_TYPE": "Gift Cards and Vouchers", "BLOCKS": 24.5, "TOTAL": 10469.5, "BLOCK_RATE": 0.002340130856296862}];

createVisualization(breakdown, rates);

})})();