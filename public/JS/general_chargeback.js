'use strict';
(() => {
	window.addEventListener('load', (event) => {
		const page = document.querySelector('.fraud-benchmarking-hub');
		if (page) {
			setTimeout(() => {
				page.style.opacity = '1';
			}, 500);
		}

		function createVisualization2(overall, profile, geography) {
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
					br: o.BLOCK_RATE * 100,
					rr: o.REVIEW_RATE * 100,
					fcr: o.FCBR * 100,
					cr: o.CBR * 100,
				};
			});

			profile = profile.map((p) => {
				return {
					x: QUARTERS.indexOf(p.QUARTER),
					profile: p.PROFILE,
					br: p.BLOCK_RATE * 100,
					rr: p.REVIEW_RATE * 100,
					fcr: p.FCBR * 100,
					cr: p.CBR * 100,
				};
			});

			geography = geography.map((g) => {
				return {
					x: QUARTERS.indexOf(g.QUARTER),
					geography: g.GEOGRAPHY,
					br: g.BLOCK_RATE * 100,
					rr: g.REVIEW_RATE * 100,
					fcr: g.FCBR * 100,
					cr: g.CBR * 100,
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
				var xAxis = d3.axisBottom().scale(x).ticks(4).tickPadding(10);
				xAxis.tickFormat((d, i) => QUARTER_LABELS[i]);

				var y = d3.scaleLinear().range([height, 0]);
				var yAxis = d3
					.axisLeft()
					.scale(y)
					.ticks(4)
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

						console.log(data);

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

			var panel3 = createPanel('chargeback', 'cr', '#316CFF');
			var panel4 = createPanel('fraud-chargeback', 'fcr', '#FF3B84');

			panel3.update(overall);
			panel4.update(overall);

			document
				.getElementById('filter-industry')
				.addEventListener('change', function (event) {
					updateAll2('industry', event.target.value);
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
					updateAll2('geography', event.target.value);
					document
						.getElementById('filter-geography')
						.classList.toggle('grayed', false);
					document.getElementById('filter-industry').selectedIndex = 0;
					document
						.getElementById('filter-industry')
						.classList.toggle('grayed', true);
				});

			// DIFF
			var updateAll2 = function (which, filter) {
				if (which === 'industry') {
					panel3.update(profile.filter((p) => p.profile === filter));
					panel4.update(profile.filter((p) => p.profile === filter));
				} else if (which === 'geography') {
					panel3.update(geography.filter((g) => g.geography === filter));
					panel4.update(geography.filter((g) => g.geography === filter));
				} else {
					panel3.update(overall);
					panel4.update(overall);
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
				panel3 = createPanel('chargeback', 'cb', '#316CFF');
				panel4 = createPanel('fraud-chargeback', 'fcb', '#FF3B84');

				updateAll2(currentFilter.which, currentFilter.filter);
			}

			window.addEventListener('resize', debounce(resizeContent, 150));
		}

		var overall2 = [
			{
				QUARTER: '2023-10-01',
				BLOCK_RATE: 0.0341765533,
				REVIEW_RATE: 0.0426901233,
				CBR: 0.001258267,
				FCBR: 0.0007780421,
			},
			{
				QUARTER: '2024-01-01',
				BLOCK_RATE: 0.0387627577,
				REVIEW_RATE: 0.0420468105,
				CBR: 0.0015831262,
				FCBR: 0.0009827512,
			},
			{
				QUARTER: '2024-04-01',
				BLOCK_RATE: 0.0395850691,
				REVIEW_RATE: 0.0570543735,
				CBR: 0.001459366,
				FCBR: 0.0009827912,
			},
			{
				QUARTER: '2024-07-01',
				BLOCK_RATE: 0.0372931075,
				REVIEW_RATE: 0.0540170893,
				CBR: 0.0018993702,
				FCBR: 0.0013467432,
			},
			{
				QUARTER: '2024-10-01',
				BLOCK_RATE: 0.0315544607,
				REVIEW_RATE: 0.0522085765,
				CBR: 0.0021063848,
				FCBR: 0.0012896253,
			},
		];

		var profile2 = [
			{
				QUARTER: '2023-10-01',
				PROFILE: 'B2B SaaS/Services',
				BLOCK_RATE: 0.0264284773,
				REVIEW_RATE: 0.0206316667,
				CBR: 0.0014726348,
				FCBR: 0.0010826786,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'B2C SaaS/Services',
				BLOCK_RATE: 0.0344411935,
				REVIEW_RATE: 0.0214086667,
				CBR: 0.0022818043,
				FCBR: 0.0015018444,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Commerce Marketplaces',
				BLOCK_RATE: 0.0228648,
				REVIEW_RATE: 0.10661475,
				CBR: 0.0005981111,
				FCBR: 0.00025052,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Crypto Exchange',
				BLOCK_RATE: 0.0302946667,
				REVIEW_RATE: 0.00837175,
				CBR: 0.0020088571,
				FCBR: 0.0001589167,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Food/Grocery Delivery',
				BLOCK_RATE: 0.023967,
				REVIEW_RATE: 0.0001735,
				CBR: 0.0012508,
				FCBR: 0.0008148,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Gambling and Sports Betting',
				BLOCK_RATE: 0.004791,
				REVIEW_RATE: 0.0205178333,
				CBR: 0.00471625,
				FCBR: 0.004022625,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Modern Banking and Investing Platforms',
				BLOCK_RATE: 0.0216535,
				REVIEW_RATE: 0.0253205,
				CBR: 0.0,
				FCBR: 0.0,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Online Travel Agencies & Services',
				BLOCK_RATE: 0.0345318571,
				REVIEW_RATE: 0.1861198571,
				CBR: 0.0010065909,
				FCBR: 0.0004663636,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Other Financial/Fintech*',
				BLOCK_RATE: 0.03180975,
				REVIEW_RATE: 0.2855506667,
				CBR: 0.0005215,
				FCBR: 0.0003405,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Payments',
				BLOCK_RATE: 0.0496489431,
				REVIEW_RATE: 0.0065888667,
				CBR: 0.0005173878,
				FCBR: 0.0001400851,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Remittance',
				BLOCK_RATE: 0.0123082727,
				REVIEW_RATE: 0.0259896,
				CBR: 0.00022325,
				FCBR: 0.0001123333,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Restaurant Ordering',
				BLOCK_RATE: 0.0264303778,
				REVIEW_RATE: 0.001875,
				CBR: 0.00067256,
				FCBR: 0.0006634,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Retail E-commerce',
				BLOCK_RATE: 0.0217182545,
				REVIEW_RATE: 0.0302241071,
				CBR: 0.0006256552,
				FCBR: 0.0002457193,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Social Media/Networking and Dating',
				BLOCK_RATE: 0.0725502857,
				REVIEW_RATE: 0.0133943333,
				CBR: 0.001472125,
				FCBR: 0.0007074667,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				BLOCK_RATE: 0.0195625,
				REVIEW_RATE: 0.000199,
				CBR: 0.0007676,
				FCBR: 0.0000178,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Ticketing & Reservations',
				BLOCK_RATE: 0.045032875,
				REVIEW_RATE: 0.01856,
				CBR: 0.002354875,
				FCBR: 0.001399,
			},
			{
				QUARTER: '2023-10-01',
				PROFILE: 'Transportation',
				BLOCK_RATE: 0.01578675,
				REVIEW_RATE: 0.016026,
				CBR: 0.003266625,
				FCBR: 0.00165575,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'B2B SaaS/Services',
				BLOCK_RATE: 0.0214002273,
				REVIEW_RATE: 0.0185657778,
				CBR: 0.0014849911,
				FCBR: 0.0012412569,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'B2C SaaS/Services',
				BLOCK_RATE: 0.0473171111,
				REVIEW_RATE: 0.0216522105,
				CBR: 0.0023542826,
				FCBR: 0.0014986889,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Commerce Marketplaces',
				BLOCK_RATE: 0.0270107619,
				REVIEW_RATE: 0.1050613125,
				CBR: 0.0008922963,
				FCBR: 0.00034884,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Crypto Exchange',
				BLOCK_RATE: 0.029159,
				REVIEW_RATE: 0.007761,
				CBR: 0.0008272143,
				FCBR: 0.0000576923,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Food/Grocery Delivery',
				BLOCK_RATE: 0.033751,
				REVIEW_RATE: 0.000141,
				CBR: 0.0029116,
				FCBR: 0.0024282,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Gambling and Sports Betting',
				BLOCK_RATE: 0.005332,
				REVIEW_RATE: 0.026083,
				CBR: 0.0053681429,
				FCBR: 0.0044604286,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Modern Banking and Investing Platforms',
				BLOCK_RATE: 0.0084055,
				REVIEW_RATE: 0.0276245,
				CBR: 0.0,
				FCBR: 0.0,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Online Travel Agencies & Services',
				BLOCK_RATE: 0.0527316875,
				REVIEW_RATE: 0.165980375,
				CBR: 0.0034113478,
				FCBR: 0.0008784167,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Other Financial/Fintech*',
				BLOCK_RATE: 0.03480775,
				REVIEW_RATE: 0.289017,
				CBR: 0.0012875,
				FCBR: 0.00072775,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Payments',
				BLOCK_RATE: 0.0595428936,
				REVIEW_RATE: 0.0103008125,
				CBR: 0.0012947111,
				FCBR: 0.0002803556,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Remittance',
				BLOCK_RATE: 0.005289,
				REVIEW_RATE: 0.0242916667,
				CBR: 0.0004205,
				FCBR: 0.0001433333,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Restaurant Ordering',
				BLOCK_RATE: 0.0278621591,
				REVIEW_RATE: 0.001992,
				CBR: 0.0006780204,
				FCBR: 0.0006406327,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Retail E-commerce',
				BLOCK_RATE: 0.0176377143,
				REVIEW_RATE: 0.0307751667,
				CBR: 0.0013204528,
				FCBR: 0.0010328077,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Social Media/Networking and Dating',
				BLOCK_RATE: 0.0678498333,
				REVIEW_RATE: 0.0118073333,
				CBR: 0.0024183333,
				FCBR: 0.0012750714,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				BLOCK_RATE: 0.00338875,
				REVIEW_RATE: 0.000085,
				CBR: 0.000184,
				FCBR: 0.0000062,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Ticketing & Reservations',
				BLOCK_RATE: 0.049124875,
				REVIEW_RATE: 0.044126,
				CBR: 0.001827625,
				FCBR: 0.000983,
			},
			{
				QUARTER: '2024-01-01',
				PROFILE: 'Transportation',
				BLOCK_RATE: 0.01868525,
				REVIEW_RATE: 0.015766,
				CBR: 0.002023375,
				FCBR: 0.001027625,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'B2B SaaS/Services',
				BLOCK_RATE: 0.0324229167,
				REVIEW_RATE: 0.0170278966,
				CBR: 0.0008481714,
				FCBR: 0.000707703,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'B2C SaaS/Services',
				BLOCK_RATE: 0.0475265641,
				REVIEW_RATE: 0.0628168636,
				CBR: 0.0042957174,
				FCBR: 0.0031694,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Commerce Marketplaces',
				BLOCK_RATE: 0.0352258182,
				REVIEW_RATE: 0.119852125,
				CBR: 0.0004215385,
				FCBR: 0.0002342,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Crypto Exchange',
				BLOCK_RATE: 0.0233033571,
				REVIEW_RATE: 0.0194556,
				CBR: 0.0008443571,
				FCBR: 0.0004061538,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Food/Grocery Delivery',
				BLOCK_RATE: 0.03716775,
				REVIEW_RATE: 0.0003545,
				CBR: 0.003249,
				FCBR: 0.0027994,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Gambling and Sports Betting',
				BLOCK_RATE: 0.0034878333,
				REVIEW_RATE: 0.0302036667,
				CBR: 0.0064248571,
				FCBR: 0.0044515714,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Modern Banking and Investing Platforms',
				BLOCK_RATE: 0.0020335,
				REVIEW_RATE: 0.0232625,
				CBR: 0.0,
				FCBR: 0.0,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Online Travel Agencies & Services',
				BLOCK_RATE: 0.0585247895,
				REVIEW_RATE: 0.2364923,
				CBR: 0.0017519091,
				FCBR: 0.0008163478,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Other Financial/Fintech*',
				BLOCK_RATE: 0.039762,
				REVIEW_RATE: 0.2918556667,
				CBR: 0.001692,
				FCBR: 0.0009356667,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Payments',
				BLOCK_RATE: 0.0566806403,
				REVIEW_RATE: 0.0128466471,
				CBR: 0.0008848085,
				FCBR: 0.0003208043,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Remittance',
				BLOCK_RATE: 0.0047609167,
				REVIEW_RATE: 0.0211768333,
				CBR: 0.000572,
				FCBR: 0.000127,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Restaurant Ordering',
				BLOCK_RATE: 0.0220008837,
				REVIEW_RATE: 0.00229,
				CBR: 0.000838551,
				FCBR: 0.0008241837,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Retail E-commerce',
				BLOCK_RATE: 0.0248420656,
				REVIEW_RATE: 0.0461940909,
				CBR: 0.0006048491,
				FCBR: 0.0002836731,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Social Media/Networking and Dating',
				BLOCK_RATE: 0.0448398,
				REVIEW_RATE: 0.0154803333,
				CBR: 0.0020342308,
				FCBR: 0.00097825,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				BLOCK_RATE: 0.0087515,
				REVIEW_RATE: 0.000035,
				CBR: 0.000423,
				FCBR: 0.0000338,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Ticketing & Reservations',
				BLOCK_RATE: 0.0587278571,
				REVIEW_RATE: 0.054884,
				CBR: 0.00231325,
				FCBR: 0.0015957143,
			},
			{
				QUARTER: '2024-04-01',
				PROFILE: 'Transportation',
				BLOCK_RATE: 0.0313482,
				REVIEW_RATE: 0.01015025,
				CBR: 0.00390575,
				FCBR: 0.001819625,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'B2B SaaS/Services',
				BLOCK_RATE: 0.0299882,
				REVIEW_RATE: 0.0221095667,
				CBR: 0.0029379444,
				FCBR: 0.0023953558,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'B2C SaaS/Services',
				BLOCK_RATE: 0.0385260976,
				REVIEW_RATE: 0.0239103182,
				CBR: 0.0025435455,
				FCBR: 0.0016652093,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Commerce Marketplaces',
				BLOCK_RATE: 0.0286518696,
				REVIEW_RATE: 0.104166,
				CBR: 0.00048812,
				FCBR: 0.000180125,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Crypto Exchange',
				BLOCK_RATE: 0.0241268,
				REVIEW_RATE: 0.0168373,
				CBR: 0.0012522143,
				FCBR: 0.0007433846,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Food/Grocery Delivery',
				BLOCK_RATE: 0.04377875,
				REVIEW_RATE: 0.000534,
				CBR: 0.0028934,
				FCBR: 0.0024796,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Gambling and Sports Betting',
				BLOCK_RATE: 0.0011565714,
				REVIEW_RATE: 0.0684595714,
				CBR: 0.0037141429,
				FCBR: 0.0030745714,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Modern Banking and Investing Platforms',
				BLOCK_RATE: 0.003949,
				REVIEW_RATE: 0.0267735,
				CBR: 0.0,
				FCBR: 0.0,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Online Travel Agencies & Services',
				BLOCK_RATE: 0.0401796316,
				REVIEW_RATE: 0.232673,
				CBR: 0.0011023182,
				FCBR: 0.0005677391,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Other Financial/Fintech*',
				BLOCK_RATE: 0.014217,
				REVIEW_RATE: 0.2863653333,
				CBR: 0.0019656667,
				FCBR: 0.0013203333,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Payments',
				BLOCK_RATE: 0.0565137214,
				REVIEW_RATE: 0.01717075,
				CBR: 0.0025067292,
				FCBR: 0.001868766,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Remittance',
				BLOCK_RATE: 0.0085244167,
				REVIEW_RATE: 0.0254983333,
				CBR: 0.00044975,
				FCBR: 0.0001883333,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Restaurant Ordering',
				BLOCK_RATE: 0.0220785349,
				REVIEW_RATE: 0.001297,
				CBR: 0.0006110417,
				FCBR: 0.0005643958,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Retail E-commerce',
				BLOCK_RATE: 0.0285436024,
				REVIEW_RATE: 0.0526573235,
				CBR: 0.0005939434,
				FCBR: 0.0002448462,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Social Media/Networking and Dating',
				BLOCK_RATE: 0.0553298333,
				REVIEW_RATE: 0.0131446667,
				CBR: 0.0021008462,
				FCBR: 0.0009378333,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				BLOCK_RATE: 0.0054926667,
				REVIEW_RATE: 0.000102,
				CBR: 0.0003715,
				FCBR: 0.0000905,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Ticketing & Reservations',
				BLOCK_RATE: 0.0600276667,
				REVIEW_RATE: 0.041431,
				CBR: 0.0042765,
				FCBR: 0.001996,
			},
			{
				QUARTER: '2024-07-01',
				PROFILE: 'Transportation',
				BLOCK_RATE: 0.0021535,
				REVIEW_RATE: 0.00763375,
				CBR: 0.0020072857,
				FCBR: 0.0008224286,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'B2B SaaS/Services',
				BLOCK_RATE: 0.0284638846,
				REVIEW_RATE: 0.024492,
				CBR: 0.0023577788,
				FCBR: 0.00205925,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'B2C SaaS/Services',
				BLOCK_RATE: 0.0341555263,
				REVIEW_RATE: 0.0274815455,
				CBR: 0.0026764651,
				FCBR: 0.0017372143,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Commerce Marketplaces',
				BLOCK_RATE: 0.037763087,
				REVIEW_RATE: 0.1001201875,
				CBR: 0.0003956667,
				FCBR: 0.0001855652,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Crypto Exchange',
				BLOCK_RATE: 0.030405,
				REVIEW_RATE: 0.0074104167,
				CBR: 0.0008787857,
				FCBR: 0.0002056154,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Food/Grocery Delivery',
				BLOCK_RATE: 0.04862725,
				REVIEW_RATE: 0.000183,
				CBR: 0.0017916,
				FCBR: 0.0013226,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Gambling and Sports Betting',
				BLOCK_RATE: 0.0012875714,
				REVIEW_RATE: 0.0608917143,
				CBR: 0.0040302857,
				FCBR: 0.003439,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Modern Banking and Investing Platforms',
				BLOCK_RATE: 0.0047855,
				REVIEW_RATE: 0.0334815,
				CBR: 0.0474515,
				FCBR: 0.0,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Online Travel Agencies & Services',
				BLOCK_RATE: 0.023955,
				REVIEW_RATE: 0.2583857778,
				CBR: 0.0015629474,
				FCBR: 0.00031775,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Other Financial/Fintech*',
				BLOCK_RATE: 0.01551625,
				REVIEW_RATE: 0.2780916667,
				CBR: 0.001369,
				FCBR: 0.000915,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Payments',
				BLOCK_RATE: 0.0471510672,
				REVIEW_RATE: 0.016052,
				CBR: 0.0021483333,
				FCBR: 0.0012020638,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Remittance',
				BLOCK_RATE: 0.0100130769,
				REVIEW_RATE: 0.0159253333,
				CBR: 0.0002254,
				FCBR: 0.0001996667,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Restaurant Ordering',
				BLOCK_RATE: 0.0192250444,
				REVIEW_RATE: 0.000904,
				CBR: 0.000475383,
				FCBR: 0.0004306596,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Retail E-commerce',
				BLOCK_RATE: 0.0211578171,
				REVIEW_RATE: 0.0484281714,
				CBR: 0.0006409615,
				FCBR: 0.0004805294,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Social Media/Networking and Dating',
				BLOCK_RATE: 0.0599775714,
				REVIEW_RATE: 0.0179636667,
				CBR: 0.0014682308,
				FCBR: 0.00058675,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Streaming, On-Demand Entertainment, Media, and Publications',
				BLOCK_RATE: 0.007657,
				REVIEW_RATE: 0.001315,
				CBR: 0.0016485,
				FCBR: 0.0001585,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Ticketing & Reservations',
				BLOCK_RATE: 0.051843375,
				REVIEW_RATE: 0.040818,
				CBR: 0.004145625,
				FCBR: 0.0017032857,
			},
			{
				QUARTER: '2024-10-01',
				PROFILE: 'Transportation',
				BLOCK_RATE: 0.0074702,
				REVIEW_RATE: 0.00769,
				CBR: 0.001785875,
				FCBR: 0.000669,
			},
		];

		var geography2 = [
			{
				QUARTER: '2023-10-01',
				GEOGRAPHY: 'AMER',
				BLOCK_RATE: 0.0258107071,
				REVIEW_RATE: 0.0335737292,
				CBR: 0.0015086667,
				FCBR: 0.0009121538,
			},
			{
				QUARTER: '2023-10-01',
				GEOGRAPHY: 'APAC',
				BLOCK_RATE: 0.0253750645,
				REVIEW_RATE: 0.0108640455,
				CBR: 0.0010529798,
				FCBR: 0.000849866,
			},
			{
				QUARTER: '2023-10-01',
				GEOGRAPHY: 'EU',
				BLOCK_RATE: 0.0353484286,
				REVIEW_RATE: 0.0739205294,
				CBR: 0.0013529286,
				FCBR: 0.0005855091,
			},
			{
				QUARTER: '2023-10-01',
				GEOGRAPHY: 'LATAM',
				BLOCK_RATE: 0.0550393654,
				REVIEW_RATE: 0.2875698,
				CBR: 0.0001966316,
				FCBR: 0.0,
			},
			{
				QUARTER: '2023-10-01',
				GEOGRAPHY: 'MEA',
				BLOCK_RATE: 0.0254179,
				REVIEW_RATE: 0.0126955,
				CBR: 0.0000594545,
				FCBR: 0.0000726,
			},
			{
				QUARTER: '2024-01-01',
				GEOGRAPHY: 'AMER',
				BLOCK_RATE: 0.0278177353,
				REVIEW_RATE: 0.0348698317,
				CBR: 0.0016751339,
				FCBR: 0.0009586121,
			},
			{
				QUARTER: '2024-01-01',
				GEOGRAPHY: 'APAC',
				BLOCK_RATE: 0.0213938485,
				REVIEW_RATE: 0.0133378696,
				CBR: 0.0010628936,
				FCBR: 0.0008768065,
			},
			{
				QUARTER: '2024-01-01',
				GEOGRAPHY: 'EU',
				BLOCK_RATE: 0.0401188222,
				REVIEW_RATE: 0.0678553889,
				CBR: 0.0022421887,
				FCBR: 0.0016206923,
			},
			{
				QUARTER: '2024-01-01',
				GEOGRAPHY: 'LATAM',
				BLOCK_RATE: 0.0645959916,
				REVIEW_RATE: 0.2566036,
				CBR: 0.0004340556,
				FCBR: 0.0002147647,
			},
			{
				QUARTER: '2024-01-01',
				GEOGRAPHY: 'MEA',
				BLOCK_RATE: 0.0268157273,
				REVIEW_RATE: 0.0166871667,
				CBR: 0.004585,
				FCBR: 0.0018874,
			},
			{
				QUARTER: '2024-04-01',
				GEOGRAPHY: 'AMER',
				BLOCK_RATE: 0.0296629202,
				REVIEW_RATE: 0.0505304685,
				CBR: 0.0019014426,
				FCBR: 0.001308,
			},
			{
				QUARTER: '2024-04-01',
				GEOGRAPHY: 'APAC',
				BLOCK_RATE: 0.0263923714,
				REVIEW_RATE: 0.0119086,
				CBR: 0.00038475,
				FCBR: 0.0003993846,
			},
			{
				QUARTER: '2024-04-01',
				GEOGRAPHY: 'EU',
				BLOCK_RATE: 0.04401,
				REVIEW_RATE: 0.0680477222,
				CBR: 0.00174628,
				FCBR: 0.0009218367,
			},
			{
				QUARTER: '2024-04-01',
				GEOGRAPHY: 'LATAM',
				BLOCK_RATE: 0.0612509016,
				REVIEW_RATE: 0.3786361667,
				CBR: 0.00056055,
				FCBR: 0.0003104211,
			},
			{
				QUARTER: '2024-04-01',
				GEOGRAPHY: 'MEA',
				BLOCK_RATE: 0.0275999091,
				REVIEW_RATE: 0.0112921667,
				CBR: 0.0032277778,
				FCBR: 0.001795,
			},
			{
				QUARTER: '2024-07-01',
				GEOGRAPHY: 'AMER',
				BLOCK_RATE: 0.0279295139,
				REVIEW_RATE: 0.0424551327,
				CBR: 0.0015684069,
				FCBR: 0.0008605045,
			},
			{
				QUARTER: '2024-07-01',
				GEOGRAPHY: 'APAC',
				BLOCK_RATE: 0.0237272105,
				REVIEW_RATE: 0.01877504,
				CBR: 0.0024142766,
				FCBR: 0.0023070215,
			},
			{
				QUARTER: '2024-07-01',
				GEOGRAPHY: 'EU',
				BLOCK_RATE: 0.0387570143,
				REVIEW_RATE: 0.0833542105,
				CBR: 0.0018335102,
				FCBR: 0.0010068542,
			},
			{
				QUARTER: '2024-07-01',
				GEOGRAPHY: 'LATAM',
				BLOCK_RATE: 0.058742672,
				REVIEW_RATE: 0.3103071429,
				CBR: 0.0009375556,
				FCBR: 0.000662,
			},
			{
				QUARTER: '2024-07-01',
				GEOGRAPHY: 'MEA',
				BLOCK_RATE: 0.0253044444,
				REVIEW_RATE: 0.01304625,
				CBR: 0.010464,
				FCBR: 0.00981775,
			},
			{
				QUARTER: '2024-10-01',
				GEOGRAPHY: 'AMER',
				BLOCK_RATE: 0.0258972329,
				REVIEW_RATE: 0.0430096724,
				CBR: 0.0021119123,
				FCBR: 0.0010012955,
			},
			{
				QUARTER: '2024-10-01',
				GEOGRAPHY: 'APAC',
				BLOCK_RATE: 0.0156501622,
				REVIEW_RATE: 0.0116924,
				CBR: 0.0021956966,
				FCBR: 0.0020290805,
			},
			{
				QUARTER: '2024-10-01',
				GEOGRAPHY: 'EU',
				BLOCK_RATE: 0.0323579853,
				REVIEW_RATE: 0.0767311579,
				CBR: 0.0016776122,
				FCBR: 0.0012070833,
			},
			{
				QUARTER: '2024-10-01',
				GEOGRAPHY: 'LATAM',
				BLOCK_RATE: 0.0505890849,
				REVIEW_RATE: 0.3049531429,
				CBR: 0.0015848421,
				FCBR: 0.00037,
			},
			{
				QUARTER: '2024-10-01',
				GEOGRAPHY: 'MEA',
				BLOCK_RATE: 0.0082978571,
				REVIEW_RATE: 0.0004873333,
				CBR: 0.008769625,
				FCBR: 0.0068552857,
			},
		];

		createVisualization2(overall2, profile2, geography2);
	});
})();
