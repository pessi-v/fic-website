<div class="heroSection">
	<div class="logo">
		<h4 class="label">FRIENDS IN COMMON</h4>
	</div>
	<div class="cardButtonMain">
		<div class="flex-column-row-gap">
			<h4 class="label">BEFRIEND A CAUSE</h4>
			<p>
				Your contribution makes a real difference. Every small donation to the Friend’s Fund,
				supports the creation of a a better, more secure future for all.
			</p>
			<button class="btn btn-primary buttonMain">DONATE</button>
		</div>
	</div>
	<div class="cardButtonSecondary">
		<div class="flex-column-row-gap">
			<h4 class="label">LOOKING FOR FUNDS?</h4>
			<p>
				We support initiatives that are willing to commit to Ownership Common, a legal agreement
				between the legal entity of a project, and an external party
			</p>
			<button class="btn btn-secondary buttonSecondary">APPLY</button>
		</div>
	</div>
	<div class="navBar">
		<a href="#section1" class="navLink">WHAT WE DO</a>
		<a href="#sectionForm" class="navLink">FUNDING GOALS</a>
		<a href="#sectionCards" class="navLink">CORE IDEAS</a>
	</div>
	<div class="heroCard">
		<div class="flex-column-row-gap">
			<h2>Promoting<br />Community<br />Ownership of<br />HOUSING</h2>
			<p>
				By crowdfunding, we raise money to buy property and keep it out of the market. Join our
				mission to create housing groups where people live collectively, with secure, rent-free
				homes under resident control.
			</p>
		</div>
	</div>
</div>
<div class="section1" id="section1">
	<div class="flex-column-row-gap">
		<h4 class="label">WHAT WE DO</h4>
		<h2>We collect money and pass that money on to<br />provide beginning capital</h2>
		<p>
			By crowdfunding, we raise money to buy property and keep it out of the market. Join our
			mission and donate a small amount each month to the Friends' shared fund, creating a better,
			more secure future for all.
		</p>
		<div class="section1SubFrame">
			<img src="" alt="" />
			<div class="flex-column-row-gap">
				<h4 class="label">LABEL</h4>
				<p>
					Body text or body copy is the text forming the main content of a book, magazine, web page,
					or any other printed or digital work. This is as a contrast to both additional components
					such as headings, images, charts, footnotes etc. on each page, and also the pages of front
					matter that form the introduction to a book. 0123456789 € @
				</p>
			</div>
		</div>
	</div>
</div>
<div class="sectionCards" id="sectionCards">
	<div class="flex-column-row-gap">
		<h4 class="label">CORE IDEAS</h4>
		<div class="cardMosaic">
			<div class="cardOne mosaicCard">
				<h2>A legal contract to keep property off the market.</h2>
			</div>
			<div class="cardTwo mosaicCard"><h2>Housing Should Be Free!</h2></div>
			<div class="cardThree mosaicCard">
				<h2>Less housing stress leaves more time for struggle.</h2>
			</div>
			<div class="cardFour mosaicCard">
				<h2>Housing cooperatives are social hubs for a broader community.</h2>
			</div>
			<div class="cardFive mosaicCard">
				<h2>With climate change, societal change is inevitable.</h2>
			</div>
			<div class="cardSix mosaicCard">
				<h2>
					Permanence of residence is vital for a healthy connection with the Earth and vibrant
					cities
				</h2>
			</div>
			<div class="cardSeven mosaicCard">
				<h2>Living with community is good for you.</h2>
			</div>
			<div class="cardEight mosaicCard">
				<h2>The Internet can be used to build social economic networks.</h2>
			</div>
			<div class="cardNine mosaicCard"><h2>A hopeful narrative.</h2></div>
			<div class="cardTen mosaicCard"><h2>Building a culture of the future.</h2></div>
		</div>
	</div>
</div>
<div class="sectionForm" id="sectionForm">
	<h4 class="label">JOIN US</h4>
	<h2>Big donations help a lot, small ones do too. 5e/m, hop!</h2>
	<p>
		Body text or body copy is the text forming the main content of a book, magazine, web page, or
		any other printed or digital work. This is as a contrast to both additional components such as
		headings, images, charts, footnotes etc. on each page, and also the pages of front matter that
		form the introduction to a book.
	</p>
</div>
<div class="section2">
	<h4 class="label">LABEL</h4>
	<h2>Main Title of a Reasonable Standard Length</h2>
	<p>
		Body text or body copy is the text forming the main content of a book, magazine, web page, or
		any other printed or digital work. This is as a contrast to both additional components such as
		headings, images, charts, footnotes etc. on each page, and also the pages of front matter that
		form the introduction to a book.
	</p>
</div>

<style lang="scss">
	:root {
		--background-color-primary: #fff8e6;
		--background-color-secondary: #f0e7cf;

		--fic-gray: #3b3b3b;

		--space-xxxs: 0.25rem; // 4px
		--space-xxs: 0.375rem; // 6px
		--space-xs: 0.5rem; // 8px
		--space-s: 0.75rem; // 12px
		--space-m: 1rem; // 16px
		--space-l: 1.5rem; // 24px
		--space-xl: 2rem; // 32px
		--space-xxl: 2.5rem; // 40px
		--space-xxxl: 3rem; // 48px
		--space-xxxxl: 4rem; // 64px
	}

	@font-face {
		font-family: 'Readex Pro';
		font-style: normal;
		src: url('/ReadexPro-VariableFont_HEXP,wght.ttf');
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		src: url('/Inter-VariableFont_opsz,wght.ttf');
	}

	@mixin media($query) {
		@if $query == tabletAndUp {
			@media (min-width: 50rem) {
				@content;
			}
		}
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
		padding: 0;
	}

	html {
		overflow-y: scroll;
		height: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	a {
		font-family: 'Readex Pro';
		color: #3b3b3b;
	}

	p {
		font-family: 'Inter';
		color: #3b3b3b;
	}

	h2 {
		font-size: 4.4rem;
	}

	a,
	h4 {
		font-size: 1.5rem;
	}

	.btn {
		border-radius: 100px;
		min-height: 6vh;
		min-width: 13vw;
		font-family: 'Readex Pro';
		font-size: 1.5rem;
	}

	.btn-primary {
		background-color: var(--fic-gray);
		color: var(--background-color-primary);
		border: 0;
	}

	.btn-secondary {
		background-color: var(--background-color-primary);
		color: var(--fic-gray);
		border: 2px solid var(--fic-gray);
	}

	.x-padding {
		@include media(tabletAndUp) {
			padding-left: var(--space-xxxl);
			padding-right: var(--space-xxxl);
		}
	}

	.y-padding {
		@include media(tabletAndUp) {
			padding-top: var(--space-xl);
			padding-bottom: var(--space-xl);
		}
	}

	.flex-column-row-gap {
		height: auto;
		width: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 30px;
	}

	.heroSection {
		// height: auto;
		background-color: var(--background-color-secondary);
		min-height: auto;

		@include media(tabletAndUp) {
			height: 100vh;
			display: grid;
			grid-template-columns: 1fr 75%;
			grid-template-rows: 95px 1fr 1fr;
			grid-template-areas:
				'logo navBar'
				'cardButtonMain heroCard'
				'cardButtonSecondary heroCard';

			h2 {
				font-size: 6.125rem;
			}
			p {
				font-size: 1.5rem;
			}
		}
	}

	.logo {
		@extend .x-padding;
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: logo;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
	}

	.cardButtonMain {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than
			grid-area: cardButtonMain;
		}
	}

	.cardButtonSecondary {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: cardButtonSecondary;
		}
	}

	.navBar {
		@extend .x-padding;
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: navBar;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.heroCard {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			// height: 100%;
			// width: 70%;
			grid-area: heroCard;
			text-wrap: wrap;
		}
	}

	.section1 {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-secondary);
		min-height: auto;

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			width: 100vw;
			p {
				font-size: 1.5rem;
			}
		}
	}

	.sectionCards {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-primary);
		min-height: auto;
		width: 100vw;

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
		}

		.cardMosaic {
			background-color: var(--background-color-primary);
			width: 80vw;
			aspect-ratio: 1 / 1;
			// padding-top: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
			column-gap: 30px;
			row-gap: 30px;
			grid-template-areas:
				'cardOne cardTwo cardThree'
				'cardFour cardFive cardFive'
				'cardSix cardSix cardSeven'
				'cardEight cardNine cardTen';

			.mosaicCard {
				// @extend .x-padding;
				// @extend .y-padding;
				padding-left: var(--space-l);
				padding-right: var(--space-l);
				padding-top: var(--space-l);
				padding-bottom: var(--space-l);

				container-type: size;
				resize: both;
			}

			.cardOne {
				background-color: var(--background-color-secondary);
				grid-area: cardOne;

				h2 {
					font-size: 17cqmin;
				}
			}
			.cardTwo {
				background-color: var(--background-color-secondary);
				grid-area: cardTwo;

				h2 {
					font-size: 22cqmin;
				}
			}
			.cardThree {
				background-color: var(--background-color-secondary);
				grid-area: cardThree;

				h2 {
					font-size: 17cqmin;
				}
			}
			.cardFour {
				background-color: var(--background-color-secondary);
				grid-area: cardFour;

				h2 {
					font-size: 15cqmin;
				}
			}
			.cardFive {
				background-color: var(--background-color-secondary);
				grid-area: cardFive;

				h2 {
					font-size: 20cqmin;
				}
			}
			.cardSix {
				background-color: var(--background-color-secondary);
				grid-area: cardSix;

				h2 {
					font-size: 18cqmin;
				}
			}
			.cardSeven {
				background-color: var(--background-color-secondary);
				grid-area: cardSeven;

				h2 {
					font-size: 19cqmin;
				}
			}
			.cardEight {
				background-color: var(--background-color-secondary);
				grid-area: cardEight;

				h2 {
					font-size: 15cqmin;
				}
			}
			.cardNine {
				background-color: var(--background-color-secondary);
				grid-area: cardNine;

				h2 {
					font-size: 20cqmin;
				}
			}
			.cardTen {
				background-color: var(--background-color-secondary);
				grid-area: cardTen;

				h2 {
					font-size: 17cqmin;
				}
			}
		}
	}

	.sectionForm {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-secondary);
		min-height: auto;

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			height: 100vh;
			width: 100vw;
		}
	}

	.section2 {
		@extend .x-padding;
		@extend .y-padding;
		background-color: var(--background-color-primary);
		min-height: auto;

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			height: 100vh;
			width: 100vw;
		}
	}
</style>
