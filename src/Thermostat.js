'use strict';
	

	var Thermostat = function() {
		  this.temperature = 20;
		  this.MIN_TEMPERATURE = 10;
		  this.powerSaving = true;
  };
	
		Thermostat.prototype.resetTemperature = function() {
			return this.temperature = 20;
		}
	
		Thermostat.prototype.switchPowerSaving = function() {
			(this.powerSaving == true) ? (this.powerSaving = false) : (this.powerSaving = true)
		}
	
		Thermostat.prototype.isPowerSavingOn = function() {
			if (this.powerSaving) {
				return true ;
			} else {
				return false ;
		   }
	   }
	
	   Thermostat.prototype._isMinimumTemp = function() {
	   	if (this.temperature === this.MIN_TEMPERATURE) return true ;
	   }
	
		Thermostat.prototype.getTemperature = function() {
			return this.temperature;
		}
	
		Thermostat.prototype.isMaxTempWithPSMon = function() {
			if (this.isPowerSavingOn() && this.temperature === 25) {return true};
		}
	
		Thermostat.prototype.isMaxTempWithPSMoff = function() {
			if (!this.isPowerSavingOn() && this.temperature === 32) {return true};
		}
	
		Thermostat.prototype.raiseTemperature = function() {
			if (this.isMaxTempWithPSMon()) {
				throw("Maximum Temperature Reached")
			} else if 
			   (this.isMaxTempWithPSMoff()) { 
				throw("Maximum Possible Temperature Reached")	
			} else {
				return this.temperature += 1;
			};	
		}
	
		Thermostat.prototype.lowerTemperature = function() {
			if (this._isMinimumTemp()) {	
				throw("Reached Temperature Limit") 
			} else {
			  return this.temperature -= 1 
			};
	   }
	
		Thermostat.prototype.readMinTemperature = function() {
			return this.MIN_TEMPERATURE;
		}
	
		Thermostat.prototype.display = function() {
			if (this.temperature < 18) {
				return "low-usage"
			} else if (this.temperature < 25) {
				return "medium-usage"
			} else {
				return "High-Usage"
			};
		}
	



