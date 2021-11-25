/* eslint-disable prettier/prettier */
// Return Journey Sales order creation was created by exciteon Ajmal
import {
    CButton,
    CCard,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
    CFormFloating,
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
    const formValues = {
        vehicleType: '',
        OdometerKm: '',
        odometerPhoto: '',
    }

    const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
        login,
        validate,
        formValues
    )

    function login() {
        alert('No Errors CallBack Called')
    }
    return (
        <>
            <CCard>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
                        <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                            <CRow>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vehicleNo">
                                        Vehicle No*{' '}
                                        {errors.vehicleNo && (
                                            <span className="help text-danger">{errors.vehicleNo}</span>
                                        )}
                                    </CFormLabel>

                                    <CFormSelect size="sm"
                                        name="vehicleNo"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.vehicleNo}
                                        className={`mb-3 ${errors.vehicleNo && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select Vehicle No</option>

                                        <option value="1">TN45AT8614</option>

                                        <option value="2">TN45AT8612</option>

                                        <option value="3">TN45AT9687</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Tripsheet No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="driverName">
                                        Driver Name*{' '}
                                        {errors.driverName && (
                                            <span className="help text-danger">{errors.driverName}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="driverName"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.driverName}
                                        className={`mb-3 ${errors.driverName && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select Driver</option>

                                        <option value="1">Mari Muthu</option>

                                        <option value="2">Mani Kandan</option>

                                        <option value="3">Velu Chamy</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Customer code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>


                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="materialDescription">
                                        Material Description*{' '}
                                        {errors.materialDescription && (
                                            <span className="help text-danger">{errors.materialDescription}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="materialDescription"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.materialDescription}
                                        className={`mb-3 ${errors.materialDescription && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="orderQty">
                                        Order Qty*{' '}
                                        {errors.orderQty && (
                                            <span className="help text-danger">{errors.orderQty}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="orderQty"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.orderQty && 'is-invalid'}`}
                                        size="sm"
                                        id="orderQty"
                                        placeholder=""
                                    />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="uom">
                                        UOM*{' '}
                                        {errors.uom && (
                                            <span className="help text-danger">{errors.uom}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="uom"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.uom}
                                        className={`mb-3 ${errors.uom && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="freightIncome">
                                        Freight Income*{' '}
                                        {errors.freightIncome && (
                                            <span className="help text-danger">{errors.freightIncome}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="freightIncome"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.freightIncome && 'is-invalid'}`}
                                        size="sm"
                                        id="freightIncome"
                                        placeholder=""
                                    />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">HSN Code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Material Code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="rateBase">
                                        Rate Base*{' '}
                                        {errors.rateBase && (
                                            <span className="help text-danger">{errors.rateBase}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="rateBase"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.rateBase}
                                        className={`mb-3 ${errors.rateBase && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="lastDeliveryPoint">
                                        Last Delivery Point*{' '}
                                        {errors.lastDeliveryPoint && (
                                            <span className="help text-danger">{errors.lastDeliveryPoint}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="lastDeliveryPoint"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.lastDeliveryPoint}
                                        className={`mb-3 ${errors.lastDeliveryPoint && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="loadingPoint">
                                        Loading Point*{' '}
                                        {errors.loadingPoint && (
                                            <span className="help text-danger">{errors.loadingPoint}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="loadingPoint"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.loadingPoint}
                                        className={`mb-3 ${errors.loadingPoint && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Empty Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="advanceAmt">
                                        Advance Amt*{' '}
                                        {errors.advanceAmt && (
                                            <span className="help text-danger">{errors.advanceAmt}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="advanceAmt"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.advanceAmt && 'is-invalid'}`}
                                        size="sm"
                                        id="advanceAmt"
                                        placeholder=""
                                    />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Loading Point*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="unLoadingPoint">
                                        Unloading Point*{' '}
                                        {errors.unLoadingPoint && (
                                            <span className="help text-danger">{errors.unLoadingPoint}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="unLoadingPoint"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.unLoadingPoint}
                                        className={`mb-3 ${errors.unLoadingPoint && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Load Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="todayShed">
                                        Today/Shed*{' '}
                                        {errors.todayShed && (
                                            <span className="help text-danger">{errors.todayShed}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect size="sm"
                                        name="todayShed"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.todayShed}
                                        className={`mb-3 ${errors.todayShed && 'is-invalid'}`}
                                        aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Unloading Point*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Shed*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Empty Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                            </CRow>

                            <CRow>
                                <CCol
                                    className="mt-3 offset-md-9 py-2"
                                    xs={12}
                                    sm={12}
                                    md={3}
                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <CButton
                                        size="sm"
                                        color="warning"
                                        disabled={enableSubmit}
                                        className="mx-3 text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </CButton>
                                    <CButton
                                        size="sm"
                                        disabled={enableSubmit}
                                        color="warning"
                                        className="mx-3 text-white"
                                        type="submit"
                                    >
                                        Cancel
                                    </CButton>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CTabPane>
                </CTabContent>
            </CCard>
            <CCard className="mt-4">
                <CContainer className="mt-2">
                    <CustomTable />
                </CContainer>
            </CCard>
        </>
    )
}

export default ParkingYardGate
