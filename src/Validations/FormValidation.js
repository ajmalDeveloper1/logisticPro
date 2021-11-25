export default function validate(values, isTouched) {
  const errors = {}
  if (isTouched.vehicleType && !values.vehicleType) {
    errors.vehicleType = 'required'
  }
  if (isTouched.OdometerKm && !values.OdometerKm) {
    errors.OdometerKm = 'required'
  }
  if (isTouched.odometerPhoto && values.odometerPhoto.length > 0) {
    errors.odometerPhoto = 'Choose The File'
  }

  // This validation is done by Ajmal

  if (isTouched.vehicleNo && !values.vehicleNo) {
    errors.vehicleNo = 'required'
  }

  if (isTouched.driverName && !values.driverName) {
    errors.driverName = 'required'
  }

  if (isTouched.uom && !values.uom) {
    errors.uom = 'required'
  }

  if (isTouched.rateBase && !values.rateBase) {
    errors.rateBase = 'required'
  }

  if (isTouched.lastDeliveryPoint && !values.lastDeliveryPoint) {
    errors.lastDeliveryPoint = 'required'
  }

  if (isTouched.loadingPoint && !values.loadingPoint) {
    errors.loadingPoint = 'required'
  }

  if (isTouched.unLoadingPoint && !values.unLoadingPoint) {
    errors.unLoadingPoint = 'required'
  }

  if (isTouched.todayShed && !values.todayShed) {
    errors.todayShed = 'required'
  }

  if (isTouched.materialDescription && !values.materialDescription) {
    errors.materialDescription = 'required'
  }

  if (isTouched.orderQty && !values.orderQty) {
    errors.orderQty = 'required'
  }

  if (isTouched.freightIncome && !values.freightIncome) {
    errors.freightIncome = 'required'
  }

  if (isTouched.advanceAmt && !values.advanceAmt) {
    errors.advanceAmt = 'required'
  }

  if (isTouched.division && !values.division) {
    errors.division = 'required'
  }

  if (isTouched.selectDocument && !values.selectDocument) {
    errors.selectDocument = 'required'
  }

  if (isTouched.test && !values.test) {
    errors.test = 'required'
  }


  if (isTouched.advanceAmtRequestCreation && !values.advanceAmtRequestCreation) {
    errors.advanceAmtRequestCreation = 'required'
  }

  if (isTouched.vendorName && !values.vendorName) {
    errors.vendorName = 'required'
  }

  if (isTouched.invoiceNo && !values.invoiceNo) {
    errors.invoiceNo = 'required'
  }

  if (isTouched.noOfLiteres && !values.noOfLiteres) {
    errors.noOfLiteres = 'required'
  }

  if (isTouched.ratePerLiter && !values.ratePerLiter) {
    errors.ratePerLiter = 'required'
  }

  // validation process ends here by Ajmal

  return errors
}
