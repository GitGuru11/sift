import StatsCard from './statsCard.jsx';
import React, { useEffect } from 'react';
import styles from "../styles/FeaturedCardGrid.module.css";

const data = [
    {
        imageUrl: '/vector-svg-blue.svg',
        stats: '5x',
        title: 'Optimize Your Entire Customer Lifecycle',
        content: 'AI-Powered Fraud Decisioning..',
        lists: ['AI-Powered Fraud Decisioning..'],
        url: '/',
        linkText: 'LEARN MORE'
    },
    {
        imageUrl: '/vector-svg-yellow.svg',
        stats: '5x',
        title: 'Secure your growth',
        url: '/',
        linkText: 'LEARN MORE',
    },
    {
        imageUrl: '/vector-svg-yellow.svg',
        stats: '110',
        title: 'Trusted leader',
        url: '/',
        linkText: 'LEARN MORE',
    },
    {
        imageUrl: '/vector-svg-yellow.svg',
        stats: '87',
        title: 'Strength in numbers',
        url: '/',
        linkText: 'LEARN MORE',
    },
    {
        imageUrl: '/vector-svg-yellow.svg',
        stats: '90%',
        title: 'Better machine learning',
        url: '/',
        linkText: 'LEARN MORE',
    }
];
const FeaturedCardGrid = () => {
    useEffect(() => {
        const addOtherCardsClass = () => {
            const container = document.querySelector('.cards-wrap');
            if (container) {
                const firstChild = container.querySelector('.card:first-child');
                if (firstChild && firstChild.classList.contains('first-card')) {
                    const otherCards = container.querySelectorAll('.card:not(:first-child)');
                    if (otherCards) {
                        otherCards.forEach((card) => {
                            card.classList.add('other-cards');
                        });
                    }
                }
            }
        };

        addOtherCardsClass();

        function chunkAndWrap(parentSelector, childSelector, wrapperClassName) {
            var parentDivs = document.querySelectorAll(parentSelector);

            parentDivs.forEach(function (parent) {
                var childrens = parent.querySelectorAll(childSelector);
                var numChildrens = childrens.length;
                var final = chunk(Array.from(childrens), numChildrens);

                final.map(function (towrap) {
                    return towrap.reduce(function (acc, el) {
                        return (acc.appendChild(el), acc);
                    }, document.createElement('div'));
                }).forEach(function (el) {
                    el.className = wrapperClassName;
                    parent.appendChild(el);
                });
            });
        }

        function forEach(array, callback, scope) {
            for (var i = 0; i < array.length; i++) {
                callback.call(scope, i, array[i]);
            }
        }

        function chunk(array, size) {
            var arr = [];
            for (var i = 0; i < array.length; i += size) {
                var newSlicedArray = array.slice(i, i + size);
                arr.push(newSlicedArray);
            }
            return arr;
        }

        const firstCard = document.querySelectorAll('.featured-card-grid .left-block');
        const otherCards = document.querySelectorAll('.featured-card-grid .right-block');
        if (firstCard.length === 0) {
            chunkAndWrap('.featured-card-grid .cards-wrap', '.first-card', 'left-block');
            chunkAndWrap('.featured-card-grid .cards-wrap', '.other-cards', 'right-block');
        }
    }, []);
    return (
        <section className={`featured-card-grid relative bg-black pt-[40px]`}>
            <div className="container">
                <div className={`${styles.cardsWrap} cards-wrap relative flex gap-6 xl:gap-4 z-10 lg:flex-wrap`}>
                    {data.map((card, index) => (
                        <StatsCard key={index} {...card} isFirstCard={index === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedCardGrid; 