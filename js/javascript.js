function convertToF() {
        var cTempVal = parseFloat(document.getElementById('cTemp').value);
        var fTempVal = (cTempVal * (9 / 5)) + 32;
        document.write(fTempVal);
        document.getElementById('fTemp').value = fTempVal;
        return false;
    }

