describe("Tracks Orderer", function () {

    var trackOrderer, submitButton, output;

    beforeEach(function () {
        loadFixtures('tracks-orderer.html');
        trackOrderer = new TracksOrderer($('#tracks-orderer'));
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