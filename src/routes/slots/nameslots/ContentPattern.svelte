<script>
	// @ts-nocheck
	let object = {
		content_1:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sint beatae ad velit obcaecati voluptate sunt fugiat doloribus nulla. Nisi aperiam, mollitia cupiditate qui consequatur unde distinctio ex quasi laboriosam. Iste excepturi vel laudantium perspiciatis deserunt nihil repellendus, in ex veniam pariatur magnam inventore laborum, cumque nisi libero, provident consectetur distinctio velit itaque quaerat nam adipisci modi. Eos, hic optio.',
		content_2: 'Lorem ipsum dolor sit, amet consectet',
		header: 'Truth header',
		footer: 'Truth footer'
	};
	//console.log($$slots.default);
</script>

<div>
	<slot name="header" header={object.header}><h3>default header</h3></slot>
	<slot content={object.content_1} />
	<slot name="footer" footer={object.footer}><h3>default footer</h3></slot>
</div>
