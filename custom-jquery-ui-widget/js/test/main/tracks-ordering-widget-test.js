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
	
        expect(json[0].name).toEqual('Leave Home');
        expect(json[0].sequeceNumber).toEqual(0);
        expect(json[1].name).toEqual('In Dust We Trust');
        expect(json[1].sequeceNumber).toEqual(1);
    });
	
});