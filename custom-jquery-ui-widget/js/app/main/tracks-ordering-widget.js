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
			return [{ name: "blah", sequenceNumber: 1}, { name: "blah", sequenceNumber: 1} ];
		}

    });
} (jQuery));