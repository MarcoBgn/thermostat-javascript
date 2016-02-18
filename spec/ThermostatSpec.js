'use strict';

describe('Thermostat', function() {
	var thermostat;
	
	beforeEach(function() {
		thermostat = new Thermostat();
	});
	
	it('Has the initial temperature set to 20 degrees', function() {
		expect(thermostat.getTemperature()).toEqual(20);
	})
	
	it('Can increase the temperature by 1 degree', function() {
		expect(thermostat.raiseTemperature()).toEqual(21);
	});
	
	it('Can decrease the temperature by 1 degree', function() {
		expect(thermostat.lowerTemperature()).toEqual(19);
	});
	
	it('Has a minimum temperature limit', function() {
		expect(thermostat.readMinTemperature()).toEqual(10)
	});
	
	it('Has a default Power Saving Mode', function() {
		expect(thermostat.isPowerSavingOn()).toBe(true);
	});
	
	it('Can be set to have Power Saving Mode disabled', function() {
		thermostat.switchPowerSaving();
		expect(thermostat.isPowerSavingOn()).toBe(false);
	});
	
	it('Can be reset to 20 degrees', function() {
		expect(thermostat.resetTemperature()).toEqual(20);
	});
	
	it('Has a function that tracks power usage', function() {
		expect(["low-usage", "medium-usage", "High-Usage"]).toContain(thermostat.display())
	})
});