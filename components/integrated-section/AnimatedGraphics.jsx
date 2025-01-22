import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import $ from 'jquery';

export default function AnimatedGraphics(props) {
	let data = props.items;
	useEffect(() => {

		$('.animation-one .animation-wrap .firstLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-one');
        });
		$('.animation-one .animation-wrap .secondLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-one-1');
        });
		$('.animation-two .animation-wrap .firstLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-two');
        });
		$('.animation-two .animation-wrap .secondLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-two-2');
        });
		$('.animation-three .animation-wrap .firstLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-three');
        });
		$('.animation-three .animation-wrap .secondLottie lottie-player').each(function() {
			$(this).attr('id', 'animation-three-3');
        });
    }, []);
    useEffect(() => {
		let player = document.getElementById("animation-one");
		let player1 = document.getElementById("animation-one-1");
		let player2 = document.getElementById("animation-two");
		let player3 = document.getElementById("animation-two-2");
		let player4 = document.getElementById("animation-three");
		let player5 = document.getElementById("animation-three-3");
		if(player) {
			player.addEventListener("ready", () => {
					let inte = LottieInteractivity.create({
						player: "#animation-one",
						mode:"scroll",
						actions: [
							{
							visibility: [0.3, 1],
							type: "playOnce",
							frames: [0, 50]
							}
						]
					});
			});
		}
		if(player1) {
			player1.addEventListener("ready", () => {
					let inte = LottieInteractivity.create({
						player: "#animation-one-1",
						mode:"scroll",
						actions: [
							{
							visibility: [0.3, 1],
							type: "playOnce",
							frames: [0, 50]
							}
						]
					});
			});
		}
		if(player2) {
			player2.addEventListener("ready", () => {
			let inte = LottieInteractivity.create({
				player: "#animation-two",
				mode:"scroll",
				actions: [
					{
					visibility: [0.3, 1],
					type: "playOnce",
					frames: [0, 50]
					}
				]
			});
			});
		}
		if(player3) {
			player3.addEventListener("ready", () => {
			let inte = LottieInteractivity.create({
				player: "#animation-two-2",
				mode:"scroll",
				actions: [
					{
					visibility: [0.3, 1],
					type: "playOnce",
					frames: [0, 50]
					}
				]
			});
			});
		}
		if(player4) {
			player4.addEventListener("ready", () => {
			let inte = LottieInteractivity.create({
				player: "#animation-three",
				mode:"scroll",
				actions: [
					{
					visibility: [0.3, 1],
					type: "playOnce",
					frames: [0, 50]
					}
				]
			});
			});
		}
		if(player5) {
			player5.addEventListener("ready", () => {
			let inte = LottieInteractivity.create({
				player: "#animation-three-3",
				mode:"scroll",
				actions: [
					{
					visibility: [0.3, 1],
					type: "playOnce",
					frames: [0, 50]
					}
				]
			});
			});
		}
    }, [])

	return (
		<section id={data.id ? data.id : ''}  className={`LottieAnimation ${data.gatedComponent? 'GatedHide' : ''} ${data.background} ${data.classes} ${data.padding}`}>
			<div className="container">
				<div className={`animation-wrap bg-black md:py-[30px] py-[57px] md:px-[10px] tablet:px-[20px]  px-[40px] rounded-3xl`}>
					{data?.title && <h2 className="text-white mb-[37px] md:px-[10px] tablet:px-[15px] px-[20px]">{data?.title}</h2>}
					{data?.link &&<div className="firstLottie md:hidden md-up:block">
						<lottie-player
							id="firstLottie"
							className="w-full h-full"
							src={data?.link}
							background="transparent"
						></lottie-player>
					</div>}
					{data?.linkMobile && <div className="secondLottie md:block md-up:hidden">
						<lottie-player
							id="secondtLottie"
							className="w-full h-full"
							src={data?.linkMobile}
							background="transparent"
						></lottie-player>
					</div>}
				</div>
			</div>
		</section>
	);
}
