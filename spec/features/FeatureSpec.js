'use strict';

  // Thermostat starts at 20 degrees

describe('Thermostat Features:', function() {
	var thermostat; 
	
	beforeEach(function() {
		thermostat = new Thermostat();
	});
	
	it('Starts at 20 degrees', function() {
		expect(thermostat.getTemperature()).toEqual(20);
	});

  // You can increase the temp with the up button

   it('can be used to increase the temperature', function() {
		thermostat.raiseTemperature();
		expect(thermostat.getTemperature()).toEqual(21);
   });

  // You can decrease the temp with the down button

   it('can be used to lower the temperature', function() {
   	thermostat.lowerTemperature();
		expect(thermostat.getTemperature()).toEqual(19);
   });

  // The minimum temperature is 10 degrees
   it('has a minimum temperature limit of 10 degrees', function() {
   	for (var i = 0; i < 10; i++) {
   		thermostat.lowerTemperature();
   	}
		expect(function() {thermostat.lowerTemperature();}).toThrow("Reached Temperature Limit")
   });
	
  // If power saving mode is on, the maximum temperature is 25 degrees
  // Power saving mode is on by default
	it('Power Saving Mode limits the maximum temp to 25 degrees', function() {
		for (var i = 0; i < 5; i++) {
			thermostat.raiseTemperature();
		}
		expect(function() { thermostat.raiseTemperature();}).toThrow("Maximum Temperature Reached");
	});

  // If power saving mode is off, the maximum temperature is 32 degrees
	it('Disabling Power Saving Mode limits the temperature to 32 degrees', function() {
		thermostat.switchPowerSaving();
		for (var i =0; i < 12; i++ ) {
			thermostat.raiseTemperature();
		}
		expect(function() { thermostat.raiseTemperature();}).toThrow("Maximum Possible Temperature Reached")
	});

  // You can reset the temperature to 20 by hitting the reset button
	
	it('Has a reset temperature button', function() {
		for (var i = 0; i < 3; i++) {
		  thermostat.raiseTemperature();
		}
		thermostat.resetTemperature();
		expect(thermostat.getTemperature()).toEqual(20);
	});
	
  // The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
	
	describe('Has a tracker for temperature level', function() {
		it('Knows that low usage is up to 18 degrees', function() {
			for (var i = 0; i < 4; i++) {
				thermostat.lowerTemperature();
			}
			expect(thermostat.display()).toEqual('low-usage');
		});
		
		it('Knows that medium usage is up to 25 degrees', function() {
			for (var i = 0; i < 4; i++) {
				thermostat.raiseTemperature();
			}
			expect(thermostat.display()).toEqual('medium-usage');
		});
		
		it('Knows that High usage is above 25 degrees', function() {
			thermostat.switchPowerSaving();
			for (var i = 0; i < 5; i++) {
				thermostat.raiseTemperature();
			}
			expect(thermostat.display()).toEqual('High-Usage');
		});
	});
	
	
	
});
