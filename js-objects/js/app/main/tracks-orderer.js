var TracksOrderer = function (elem) {

    var self = this;

    self.trackList = elem.find("#track-list").sortable().disableSelection();
    self.submitButton = elem.find("button");
    self.output = elem.find("#form-params-output");

    self.submitButton.click(function () {
        var listingJson = serialiseListingToJson();

        var jsonString = JSON.stringify(listingJson);

        self.output.text(jsonString);
    });

    function serialiseListingToJson() {
        var counter = 0;

        return _.map($("li"), function (item) {
            var name = $(item).text();
            var sequenceNumber = counter++;

            return {
                "name":name,
                "sequeceNumber":sequenceNumber
            }
        });
    }
};
