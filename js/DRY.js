function VottingFunc(resultCount, resultBar) {
	for (let i = 0; i < card.length; i++) {
			resultCount[0].innerHTML = `${thirdBar.toFixed(2) }%`;
			resultBar[0].style.height = `${thirdBar.toFixed(2)}%`;
			resultCount[1].innerHTML = `${secondBar.toFixed(2)}%`;
			resultBar[1].style.height = `${secondBar.toFixed(2)}%`;
			resultCount[2].innerHTML = `${(firstBar).toFixed(2)}%`;
			resultBar[2].style.height = `${(firstBar).toFixed(2)}%`;
			card[i].classList.remove("main-cards-item-active");
		}
}
function Voting(event) {
	let	resultCount = mainBlock.querySelectorAll(".result-count"),
		resultBar = mainBlock.querySelectorAll(".progress-bar");
	if (event.target == crime) {
		if (firstBar + 25 >= 100){
			firstBar = 100;
		} else {
			firstBar = firstBar + 25;
		}
		secondBar =  Math.random() * (100 - firstBar);
			thirdBar = 100 - (secondBar + firstBar);
	
		VottingFunc(resultCount, resultBar)
		} else {
		VottingFunc(resultCount, resultBar)
	}
		if (firstBar == Math.max(firstBar, secondBar, thirdBar)) {
			card[2].classList.add('main-cards-item-active');
		} else if(secondBar == Math.max(firstBar, secondBar, thirdBar)) {
			card[1].classList.add('main-cards-item-active');
		} else if(thirdBar == Math.max(firstBar, secondBar, thirdBar)) {
			card[0].classList.add('main-cards-item-active');
		}

}