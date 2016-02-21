'use strict';
	

	var Thermostat = function() {
		var _ = PrivateParts.createKey();
		_(this).temperature = 20;
		_(this).MIN_TEMPERATURE = 10;
		_(this).powerSaving = true;
	
		Thermostat.prototype.resetTemperature = function() {
			return _(this).temperature = 20;
		}
	
		Thermostat.prototype.switchPowerSaving = function() {
			if (_(this).powerSaving) {
			   return _(this).powerSaving = false ;
			} else {
				return _(this).powerSaving = true
			};
		}
	
		Thermostat.prototype.isPowerSavingOn = function() {
			if (_(this).powerSaving) {
				return true ;
			} else {
				return false ;
		   }
	   }
	
	   Thermostat.prototype._isMinimumTemp = function() {
	   	if (_(this).temperature === _(this).MIN_TEMPERATURE) return true ;
	   }
	
		Thermostat.prototype.getTemperature = function() {
			return _(this).temperature;
		}
	
		Thermostat.prototype.isMaxTempWithPSMon = function() {
			if (this.isPowerSavingOn() && _(this).temperature === 25) {return true};
		}
	
		Thermostat.prototype.isMaxTempWithPSMoff = function() {
			if (!this.isPowerSavingOn() && _(this).temperature === 32) {return true};
		}
	
		Thermostat.prototype.raiseTemperature = function() {
			if (this.isMaxTempWithPSMon()) {
				throw("Maximum Temperature Reached")
			} else if 
			   (this.isMaxTempWithPSMoff()) { 
				throw("Maximum Possible Temperature Reached")	
			} else {
				return _(this).temperature += 1;
			};	
		}
	
		Thermostat.prototype.lowerTemperature = function() {
			if (this._isMinimumTemp()) {	
				throw("Reached Temperature Limit") 
			} else {
			  return _(this).temperature -= 1 
			};
	   }
	
		Thermostat.prototype.readMinTemperature = function() {
			return _(this).MIN_TEMPERATURE;
		}
	
		Thermostat.prototype.display = function() {
			if (_(this).temperature < 18) {
				return "low-usage"
			} else if (_(this).temperature < 25) {
				return "medium-usage"
			} else {
				return "High-Usage"
			};
		}
	
	};


