ServerEvents.recipes(event => {

	// Allow gyrodyne to be crafted without brass
	event.replaceInput(
		{ output:"immersive_aircrafts:gyrodyne" },
		'create:precision_mechanism',
		'create:gold_sheet'		
	)
})