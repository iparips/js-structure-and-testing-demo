describe("Tracks Ordering Widget", function () {

    var trackOrderingWidget, submitButton, output;

    beforeEach(function () {
        loadFixtures('tracks-ordering-widget.html');
        trackOrderingWidget = $('#tracks-ordering-widget').TracksOrderingWidget();
        submitButton = $("button");
        output = $("#form-params-output");
    });

    it('should render the list the output div', function () {
		submitButton.click();
		var json = $.parseJSON(output.text());
	
        expect(json[0].name).toEqual('blah');
        expect(json[0].sequenceNumber).toEqual(1);
    });
	
});