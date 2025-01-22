(() => {
	window.addEventListener('load', (event) => {
		function createVisualization3(overall, profile, geography) {
			const QUARTERS = overall.map((o) => o.QUARTER);
			const QUARTER_LABELS = QUARTERS.map(
				(q) =>
					`Q${Math.floor((parseInt(q.split('-')[1]) + 2) / 3)} ${parseInt(
						q.split('-')[0],
					)}`,
			);

			// DIFF
			var currentFilter = {};

			overall = overall.map((o) => {
				return {
					x: QUARTERS.indexOf(o.QUARTER),
					ar: o.ATO_ATTEMPT_RATE * 100,
					tfr: o.TFA_RATE * 100,
					// cr: o.CHARGEBACK_RATE * 100
				};
			});

			profile = profile.map((p) => {
				return {
					x: QUARTERS.indexOf(p.QUARTER),
					profile: p.PROFILE,
					ar: p.ATO_ATTEMPT_RATE * 100,
					tfr: p.TFA_RATE * 100,
					// cr: p.CHARGEBACK_RATE * 100
				};
			});

			geography = geography.map((g) => {
				return {
					x: QUARTERS.indexOf(g.QUARTER),
					geography: g.GEOGRAPHY,
					ar: g.ATO_ATTEMPT_RATE * 100,
					tfr: g.TFA_RATE * 100,
					// cr: g.CHARGEBACK_RATE * 100
				};
			});

			function createPanel(selector, dataKey, color) {
				d3.select(`#${selector}`).selectAll('*').remove();

				// line break util
				function breakLines(d) {
					var el = d3.select(this);
					var words = QUARTER_LABELS[d].split(' ');
					el.text('');

					for (var i = 0; i < words.length; i++) {
						var tspan = el.append('tspan').text(words[i]);
						if (i > 0) tspan.attr('x', 0).attr('dy', '13');
					}
				}

				// DIFF
				var containerWidth = document.querySelector(`#${selector}`).offsetWidth;

				// DIFF
				// chart setup
				var margin = { top: 10, right: 30, bottom: 40, left: 60 },
					width = containerWidth - margin.left - margin.right,
					height = 300 - margin.top - margin.bottom;

				var svg = d3
					.select(`#${selector}`)
					.append('svg')
					.attr('width', width + margin.left + margin.right)
					.attr('height', height + margin.top + margin.bottom)
					.append('g')
					.attr(
						'transform',
						'translate(' + margin.left + ',' + margin.top + ')',
					);

				var x = d3.scaleLinear().range([15, width + margin.right - 15]);
				var xAxis = d3.axisBottom().scale(x).ticks(5).tickPadding(10);
				xAxis.tickFormat((d, i) => QUARTER_LABELS[i]);

				var y = d3.scaleLinear().range([height, 0]);
				var yAxis = d3
					.axisLeft()
					.scale(y)
					.ticks(5)
					.tickFormat((d, i) => d + '%');

				svg
					.append('g')
					.attr('transform', 'translate(0,' + height + ')')
					.attr('class', 'x-axis');

				svg.append('g').attr('class', 'y-axis');

				// create gradient
				svg
					.append('linearGradient')
					.attr('id', 'gradient-' + selector)
					.attr('gradientUnits', 'userSpaceOnUse')
					.attr('x1', 0)
					.attr('y1', '0%')
					.attr('x2', 0)
					.attr('y2', height)
					.selectAll('stop')
					.data([
						{
							offset: '0%',
							color: color + '32',
						},
						{
							offset: '50%',
							color: color + '19',
						},
						{
							offset: '100%',
							color: 'transparent',
						},
					])
					.enter()
					.append('stop')
					.attr('offset', function (d) {
						return d.offset;
					})
					.attr('stop-color', function (d) {
						return d.color;
					});

				var tooltip = d3
					.select(`#${selector}`)
					.append('div')
					.attr('class', 'tooltip')
					.style('opacity', 0)
					.style('color', color);

				// data update function
				svg.update = function (data) {
					x.domain([
						0,
						d3.max(data, function (d) {
							return d.x;
						}),
					]);
					svg.selectAll('.x-axis').call(xAxis);

					svg.selectAll('g.x-axis g text').each(breakLines);

					y.domain([
						0,
						d3.max(data.concat(overall), function (d) {
							return d[dataKey];
						}),
					]);
					svg.selectAll('.y-axis').transition(500).call(yAxis);

					// DIFF
					svg
						.selectAll('.y-axis g.tick line')
						.transition(500)
						.attr('x2', containerWidth);

					// define the area
					var areaFn = d3
						.area()
						.x(function (d) {
							return x(d.x);
						})
						.y0(height)
						.y1(function (d) {
							return y(d[dataKey]);
						});

					// define the line
					var lineFn = d3
						.line()
						.x(function (d) {
							return x(d.x);
						})
						.y(function (d) {
							return y(d[dataKey]);
						});

					var area = svg.selectAll('.area').data([data, overall]);

					area
						.enter()
						.append('path')
						.data([data, overall])
						.attr('class', 'area')
						.merge(area)
						.transition()
						.duration(500)
						.attr('d', areaFn)
						.attr('fill', function (d, i) {
							if (i == 0) {
								return `url(#gradient-${selector})`;
							}
							return 'none';
						});

					var line = svg.selectAll('.line').data([data, overall]);

					line
						.enter()
						.append('path')
						.attr('class', function (d, i) {
							if (i == 0) {
								return 'line';
							}
							return 'line overall';
						})
						.merge(line)
						.transition()
						.duration(500)
						.attr(
							'd',
							d3
								.line()
								.x(function (d) {
									return x(d.x);
								})
								.y(function (d) {
									return y(d[dataKey]);
								}),
						)
						.attr('fill', 'none')
						.attr('stroke', color)
						.attr('stroke-width', 2.5);

					var yGrid = (g) =>
						g
							.attr('class', 'grid-lines')
							.selectAll('line')
							.data(y.ticks())
							.join('line')
							.attr('x1', margin.left)
							.attr('x2', width - margin.right)
							.attr('y1', (d) => yScale(d))
							.attr('y2', (d) => yScale(d));

					var cursor;

					if (svg.select('.cursor').node()) {
						cursor = svg.select('.cursor');
					} else {
						cursor = svg
							.append('g')
							.classed('cursor', true)
							.style('display', 'none');
						cursor
							.append('line')
							.attr('x1', 0)
							.attr('x2', 0)
							.attr('stroke', color);
						cursor
							.append('circle')
							.attr('r', 3.5)
							.attr('fill', color)
							.attr('stroke', color)
							.attr('stroke-width', 2.5);
					}

					const bg = svg.select('.bg').node()
						? svg.select('.bg')
						: svg
								.append('rect')
								.attr('class', 'bg')
								.attr('width', width + margin.right)
								.attr('height', height)
								.attr('opacity', '0');

					bg.on('mousemove', function (mouse) {
						var [mouseX, mouseY] = d3.mouse(this);

						var [min, max] = d3.extent(data, (d) => d.x);

						var ratioX = mouseX / width;
						var dataX = min + Math.round(ratioX * (max - min));

						var curDataY = data.find((d) => d.x === dataX)[dataKey];
						var overallDataY = overall.find((d) => d.x === dataX)[dataKey];
						var curY = y(curDataY);
						var overallY = y(overallDataY);
						var diffCur = Math.abs(mouseY - curY);
						var diffOverall = Math.abs(mouseY - overallY);

						var isCur = diffCur <= diffOverall;

						var dataY = isCur ? curDataY : overallDataY;

						cursor.attr('transform', `translate(${x(dataX)}, ${0})`);
						cursor.select('line').attr('y1', y(dataY)).attr('y2', height);
						cursor.select('circle').attr('cy', y(dataY));

						if (isCur) {
							cursor.select('circle').attr('fill', color);
						} else {
							cursor.select('circle').attr('fill', 'white');
						}

						cursor.style('display', 'block');

						tooltip.html(
							"<div class='tooltip-date'>" +
								QUARTER_LABELS[dataX] +
								'</div>' +
								dataY.toPrecision(2) +
								'%',
						);

						tooltipWidth = tooltip.node().getBoundingClientRect().width;

						tooltip
							.style('opacity', 1)
							.style('left', x(dataX) + 60 - tooltipWidth / 2 + 'px')
							.style('top', y(dataY) - 45 + 'px');
					});

					svg.select('.bg').on('mouseout', function (mouse) {
						tooltip.style('opacity', 0);
						cursor.style('display', 'none');
					});
				};

				return svg;
			}

			var panel1 = createPanel('attempt', 'ar', '#7132D6');
			var panel2 = createPanel('two-factor', 'tfr', '#36CCBE');
			// var panel2 = createPanel("chargeback", "cr", "#316CFF");

			panel1.update(overall);
			panel2.update(overall);
			// panel3.update(overall);

			document
				.getElementById('filter-industry')
				.addEventListener('change', function (event) {
					updateAll3('industry', event.target.value);
					document
						.getElementById('filter-industry')
						.classList.toggle('grayed', false);
					document.getElementById('filter-geography').selectedIndex = 0;
					document
						.getElementById('filter-geography')
						.classList.toggle('grayed', true);
				});

			document
				.getElementById('filter-geography')
				.addEventListener('change', function (event) {
					updateAll3('geography', event.target.value);
					document
						.getElementById('filter-geography')
						.classList.toggle('grayed', false);
					document.getElementById('filter-industry').selectedIndex = 0;
					document
						.getElementById('filter-industry')
						.classList.toggle('grayed', true);
				});

			// DIFF
			var updateAll3 = function (which, filter) {
				if (which === 'industry') {
					panel1.update(profile.filter((p) => p.profile === filter));
					panel2.update(profile.filter((p) => p.profile === filter));
					// panel3.update(profile.filter((p) => p.profile === filter));
				} else if (which === 'geography') {
					panel1.update(geography.filter((g) => g.geography === filter));
					panel2.update(geography.filter((g) => g.geography === filter));
					// panel3.update(geography.filter((g) => g.geography === filter));
				} else {
					panel1.update(overall);
					panel2.update(overall);
					// panel3.update(overall);
				}

				currentFilter = { which, filter };
			};

			function debounce(func, time) {
				var time = time || 100;
				var timer;
				return function (event) {
					if (timer) clearTimeout(timer);
					timer = setTimeout(func, time, event);
				};
			}

			function resizeContent() {
				panel1 = createPanel('attempt', 'ar', '#7132D6');
				panel2 = createPanel('two-factor', 'tfr', '#316CFF');
				// panel3 = createPanel("review", "rr", "#36CCBE");

				updateAll3(currentFilter.which, currentFilter.filter);
			}

			window.addEventListener('resize', debounce(resizeContent, 150));
		}

		var overall3 = [
			{
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0213451358,
				TFA_RATE: 0.0901028272,
			},
			{
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0237772706,
				TFA_RATE: 0.0876012471,
			},
			{
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.032844869,
				TFA_RATE: 0.0980872024,
			},
			{
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0320080588,
				TFA_RATE: 0.0952639647,
			},
			{
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0374706076,
				TFA_RATE: 0.116560519,
			},
		];

		var profile3 = [
			{
				PROFILE: 'B2B SaaS/Services',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.006319375,
				TFA_RATE: 0.0343319375,
			},
			{
				PROFILE: 'B2B SaaS/Services',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0092778824,
				TFA_RATE: 0.0339261765,
			},
			{
				PROFILE: 'B2B SaaS/Services',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.021349875,
				TFA_RATE: 0.06586,
			},
			{
				PROFILE: 'B2B SaaS/Services',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0196025,
				TFA_RATE: 0.0650945,
			},
			{
				PROFILE: 'B2B SaaS/Services',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0260072308,
				TFA_RATE: 0.0906738462,
			},
			{
				PROFILE: 'B2C SaaS/Services',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0276175455,
				TFA_RATE: 0.0920432727,
			},
			{
				PROFILE: 'B2C SaaS/Services',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0366499286,
				TFA_RATE: 0.0889784286,
			},
			{
				PROFILE: 'B2C SaaS/Services',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0294825714,
				TFA_RATE: 0.0804225,
			},
			{
				PROFILE: 'B2C SaaS/Services',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0228876667,
				TFA_RATE: 0.0703938667,
			},
			{
				PROFILE: 'B2C SaaS/Services',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0251455,
				TFA_RATE: 0.0871313333,
			},
			{
				PROFILE: 'Commerce Marketplaces',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0034992,
				TFA_RATE: 0.2031918,
			},
			{
				PROFILE: 'Commerce Marketplaces',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0042676,
				TFA_RATE: 0.2013098,
			},
			{
				PROFILE: 'Commerce Marketplaces',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0572544,
				TFA_RATE: 0.2021834,
			},
			{
				PROFILE: 'Commerce Marketplaces',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0940378,
				TFA_RATE: 0.2026024,
			},
			{
				PROFILE: 'Commerce Marketplaces',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0935342,
				TFA_RATE: 0.203496,
			},
			{
				PROFILE: 'Crypto Exchange',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.005366,
				TFA_RATE: 0.118907,
			},
			{
				PROFILE: 'Crypto Exchange',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0047088571,
				TFA_RATE: 0.1034378571,
			},
			{
				PROFILE: 'Crypto Exchange',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0060257143,
				TFA_RATE: 0.0915377143,
			},
			{
				PROFILE: 'Crypto Exchange',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0078278333,
				TFA_RATE: 0.1064563333,
			},
			{
				PROFILE: 'Crypto Exchange',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.014373,
				TFA_RATE: 0.1705035714,
			},
			{
				PROFILE: 'Food/Grocery Delivery',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.328589,
				TFA_RATE: 0.084458,
			},
			{
				PROFILE: 'Food/Grocery Delivery',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.391829,
				TFA_RATE: 0.069616,
			},
			{
				PROFILE: 'Food/Grocery Delivery',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.367722,
				TFA_RATE: 0.130049,
			},
			{
				PROFILE: 'Food/Grocery Delivery',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.380467,
				TFA_RATE: 0.468023,
			},
			{
				PROFILE: 'Food/Grocery Delivery',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.159713,
				TFA_RATE: 0.080621,
			},
			{
				PROFILE: 'Gambling and Sports Betting',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.000025,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Gambling and Sports Betting',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.000017,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Gambling and Sports Betting',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.000027,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Gambling and Sports Betting',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.000009,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Modern Banking and Investing Platforms',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.000131,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Modern Banking and Investing Platforms',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.000067,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Modern Banking and Investing Platforms',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.000223,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Modern Banking and Investing Platforms',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.000051,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Modern Banking and Investing Platforms',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.000095,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Online Travel Agencies & Services',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0016225,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Online Travel Agencies & Services',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.001953,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Online Travel Agencies & Services',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.00169,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Online Travel Agencies & Services',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0012725,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Online Travel Agencies & Services',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0020395,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Other Financial/Fintech*',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Other Financial/Fintech*',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Other Financial/Fintech*',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.000009,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Other Financial/Fintech*',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.000017,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Other Financial/Fintech*',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Payments',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0348675,
				TFA_RATE: 0.313058,
			},
			{
				PROFILE: 'Payments',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.040387,
				TFA_RATE: 0.3231285,
			},
			{
				PROFILE: 'Payments',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.03453775,
				TFA_RATE: 0.334228,
			},
			{
				PROFILE: 'Payments',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0311945,
				TFA_RATE: 0.28363225,
			},
			{
				PROFILE: 'Payments',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.09495525,
				TFA_RATE: 0.324462,
			},
			{
				PROFILE: 'Remittance',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.00042325,
				TFA_RATE: 0.004264,
			},
			{
				PROFILE: 'Remittance',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.000202,
				TFA_RATE: 0.0028855,
			},
			{
				PROFILE: 'Remittance',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.000108,
				TFA_RATE: 0.00422275,
			},
			{
				PROFILE: 'Remittance',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.000124,
				TFA_RATE: 0.0016363333,
			},
			{
				PROFILE: 'Remittance',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0,
				TFA_RATE: 0.0000065,
			},
			{
				PROFILE: 'Retail E-commerce',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0218344737,
				TFA_RATE: 0.0429401579,
			},
			{
				PROFILE: 'Retail E-commerce',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0242547895,
				TFA_RATE: 0.0463002632,
			},
			{
				PROFILE: 'Retail E-commerce',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0413242105,
				TFA_RATE: 0.0676916316,
			},
			{
				PROFILE: 'Retail E-commerce',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0347282273,
				TFA_RATE: 0.0477172273,
			},
			{
				PROFILE: 'Retail E-commerce',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0405175,
				TFA_RATE: 0.0737181364,
			},
			{
				PROFILE: 'Social Media/Networking and Dating',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0315843333,
				TFA_RATE: 0.1110686667,
			},
			{
				PROFILE: 'Social Media/Networking and Dating',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.035419,
				TFA_RATE: 0.118474,
			},
			{
				PROFILE: 'Social Media/Networking and Dating',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0321236667,
				TFA_RATE: 0.112898,
			},
			{
				PROFILE: 'Social Media/Networking and Dating',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.044486,
				TFA_RATE: 0.1533225,
			},
			{
				PROFILE: 'Social Media/Networking and Dating',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.045428,
				TFA_RATE: 0.1588445,
			},
			{
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.000048,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.000809,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.001307,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.000645,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.000037,
				TFA_RATE: 0.0,
			},
			{
				PROFILE: 'Ticketing & Reservations',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.1268835,
				TFA_RATE: 0.604166,
			},
			{
				PROFILE: 'Ticketing & Reservations',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.077687,
				TFA_RATE: 0.615776,
			},
			{
				PROFILE: 'Ticketing & Reservations',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.130853,
				TFA_RATE: 0.619659,
			},
			{
				PROFILE: 'Ticketing & Reservations',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0755555,
				TFA_RATE: 0.6577185,
			},
			{
				PROFILE: 'Ticketing & Reservations',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.077639,
				TFA_RATE: 0.657336,
			},
			{
				PROFILE: 'Transportation',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.009026,
				TFA_RATE: 0.0193933333,
			},
			{
				PROFILE: 'Transportation',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.004827,
				TFA_RATE: 0.017566,
			},
			{
				PROFILE: 'Transportation',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0072283333,
				TFA_RATE: 0.019988,
			},
			{
				PROFILE: 'Transportation',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0111893333,
				TFA_RATE: 0.0229816667,
			},
			{
				PROFILE: 'Transportation',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0235943333,
				TFA_RATE: 0.046766,
			},
		];

		var geography3 = [
			{
				GEOGRAPHY: 'AMER',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0286427593,
				TFA_RATE: 0.1145870556,
			},
			{
				GEOGRAPHY: 'AMER',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0305156071,
				TFA_RATE: 0.112240125,
			},
			{
				GEOGRAPHY: 'AMER',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0442160175,
				TFA_RATE: 0.1245658772,
			},
			{
				GEOGRAPHY: 'AMER',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0448138246,
				TFA_RATE: 0.1268562632,
			},
			{
				GEOGRAPHY: 'AMER',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0498368679,
				TFA_RATE: 0.1405900755,
			},
			{
				GEOGRAPHY: 'APAC',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.000001,
				TFA_RATE: 0.0547698,
			},
			{
				GEOGRAPHY: 'APAC',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0596146667,
				TFA_RATE: 0.0745955,
			},
			{
				GEOGRAPHY: 'APAC',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0235293333,
				TFA_RATE: 0.0528998333,
			},
			{
				GEOGRAPHY: 'APAC',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.007337,
				TFA_RATE: 0.03673,
			},
			{
				GEOGRAPHY: 'APAC',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0,
				TFA_RATE: 0.0378102,
			},
			{
				GEOGRAPHY: 'LATAM',
				QUARTER: '2023-10-01',
				ATO_ATTEMPT_RATE: 0.0057682857,
				TFA_RATE: 0.087043,
			},
			{
				GEOGRAPHY: 'LATAM',
				QUARTER: '2024-01-01',
				ATO_ATTEMPT_RATE: 0.0041755714,
				TFA_RATE: 0.0904055714,
			},
			{
				GEOGRAPHY: 'LATAM',
				QUARTER: '2024-04-01',
				ATO_ATTEMPT_RATE: 0.0040112857,
				TFA_RATE: 0.0959812857,
			},
			{
				GEOGRAPHY: 'LATAM',
				QUARTER: '2024-07-01',
				ATO_ATTEMPT_RATE: 0.0051961429,
				TFA_RATE: 0.0799472857,
			},
			{
				GEOGRAPHY: 'LATAM',
				QUARTER: '2024-10-01',
				ATO_ATTEMPT_RATE: 0.0116222857,
				TFA_RATE: 0.1157685714,
			},
		];

		createVisualization3(overall3, profile3, geography3);
	});
})();
