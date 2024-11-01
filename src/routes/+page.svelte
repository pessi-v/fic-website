<div class="heroSection">
	<div class="logo">
		<h4 class="label">FRIENDS IN COMMON</h4>
	</div>
	<div class="cardButtonMain">
		<h4 class="label">LABEL</h4>
		<p>
			Body text or body copy is the text forming the main content of a book, magazine, web page, or
			any other printed or digital work. This is as card.
		</p>
		<button class="buttonMain">BUTTON</button>
	</div>
	<div class="cardButtonSecondary">
		<h4 class="label">LABEL</h4>
		<p>
			Body text or body copy is the text forming the main content of a book, magazine, web page, or
			any other printed or digital work. This is as card.
		</p>
		<button class="buttonSecondary">BUTTON</button>
	</div>
	<div class="navBar">
		<a href="#coming" class="navLink">LINK</a>
		<a href="#coming" class="navLink">LINK</a>
		<a href="#coming" class="navLink">LINK</a>
	</div>
	<div class="heroCard">
		<h2>Promoting Community Ownership of HOUSING</h2>
		<p>
			By crowdfunding, we raise money to buy property and keep it out of the market. Join our
			mission to create housing groups where people live collectively, with secure, rent-free homes
			under resident control.
		</p>
	</div>
</div>
<div class="section1">
	<h4 class="label">LABEL</h4>
	<h2>We collect money and pass that money on to provide beginning capital</h2>
	<p>
		By crowdfunding, we raise money to buy property and keep it out of the market. Join our mission
		and donate a small amount each month to the Friends' shared fund, creating a better, more secure
		future for all.
	</p>
	<div class="section1SubFrame">
		<img src="" alt="" />
		<h4 class="label">LABEL</h4>
		<p>
			Body text or body copy is the text forming the main content of a book, magazine, web page, or
			any other printed or digital work. This is as a contrast to both additional components such as
			headings, images, charts, footnotes etc. on each page, and also the pages of front matter that
			form the introduction to a book. 0123456789 € @
		</p>
	</div>
</div>
<div class="sectionCards">
	<h4 class="label">LABEL</h4>
	<div class="cardMosaic">cards go here</div>
</div>
<div class="sectionForm">
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
	p {
		color: #3b3b3b;
	}

	h1,
	h2,
	h3,
	h4,
	a {
		font-family: 'Readex Pro';
	}

	p {
		font-family: 'Inter';
	}

	.heroSection {
		// height: auto;
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			height: 100vh;
			display: grid;
			grid-template-columns: 1fr 70vw;
			grid-template-rows: 95px 1fr 1fr;
			grid-template-areas:
				'logo navBar navBar'
				'cardButtonMain heroCard heroCard'
				'cardButtonSecondary heroCard heroCard';
			// width: 100vw;
		}
	}

	.logo {
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: logo;
		}
	}

	.cardButtonMain {
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than
			grid-area: cardButtonMain;
		}
	}

	.cardButtonSecondary {
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: cardButtonSecondary;
		}
	}

	.navBar {
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			grid-area: navBar;
		}
	}

	.heroCard {
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
			// height: 100%;
			// width: 70%;
			grid-area: heroCard;
		}
	}

	.section1 {
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
		}
	}

	.sectionCards {
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
		}
	}

	.sectionForm {
		background-color: var(--background-color-secondary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
		}
	}

	.section2 {
		background-color: var(--background-color-primary);

		@include media(tabletAndUp) {
			// The CSS for screens bigger than tablets
		}
	}
</style>
