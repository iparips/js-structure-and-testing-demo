(function ($) {
    $.widget('emi.TracksOrderingWidget', {

        _init: function () {
			var self = this;
			var elem = self.element;
			self.trackList = elem.find("#track-list").sortable().disableSelection();
			self.submitButton = elem.find("button");
			self.output = elem.find("#form-params-output");
			
			self.submitButton.click(function() {
				var listingJson = self._serialiseListingToJson();
				
				var jsonString = JSON.stringify(listingJson);
				
				self.output.text(jsonString);
			});
        },
		
		_serialiseListingToJson: function() {
            var counter = 0;

            return _.map($("li"), function(item) {
                var name = $(item).text();
                var sequenceNumber = counter++;

                return {
                    "name": name,
                    "sequeceNumber": sequenceNumber
                }
            });
		}

    });
} (jQuery));