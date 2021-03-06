/* eslint-disable prettier/prettier */
// Diesel Indent Confirmation was created by exciteon Ajmal
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
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Va Number*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vehicle Number*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Tripsheet No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vendor Name*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vendor Code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Diesel Liters*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="invoiceNo">
                                        Invoice No*{' '}
                                        {errors.invoiceNo && (
                                            <span className="help text-danger">{errors.invoiceNo}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="invoiceNo"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.invoiceNo && 'is-invalid'}`}
                                        size="sm"
                                        id="invoiceNo"
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        Invoice Copy*{' '}
                                        {errors.odometerPhoto && (
                                            <span className="help text-danger">{errors.odometerPhoto}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="odometerPhoto"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.odometerPhoto}
                                        className={`${errors.odometerPhoto && 'is-invalid'}`}
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="noOfLiteres">
                                        No Of Liters*{' '}
                                        {errors.noOfLiteres && (
                                            <span className="help text-danger">{errors.noOfLiteres}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="noOfLiteres"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.noOfLiteres && 'is-invalid'}`}
                                        size="sm"
                                        id="noOfLiteres"
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="ratePerLiter">
                                        Rate Per Liter*{' '}
                                        {errors.ratePerLiter && (
                                            <span className="help text-danger">{errors.ratePerLiter}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="ratePerLiter"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.ratePerLiter && 'is-invalid'}`}
                                        size="sm"
                                        id="ratePerLiter"
                                        placeholder=""
                                    />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Amount*</CFormLabel>

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
