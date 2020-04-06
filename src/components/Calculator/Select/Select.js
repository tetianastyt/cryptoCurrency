import React, { useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import './Select.css';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { selectedNatCurrSelector } from "../../../engine/core/cryptocurrencies/selectors";
import {setSelectedNationalCurrency} from "../../../engine/core/cryptocurrencies/actions";



function Select() {
    const selectedNationalCurr = useSelector(selectedNatCurrSelector);
    const dispatch = useDispatch();
    const handleChangeSelect = useCallback((val) => {
        console.log(val);
        dispatch(setSelectedNationalCurrency(val));
    }, [dispatch]);
    return (
            <div className="national_currs">
                <ToggleButtonGroup type="radio"
                                   name="options"
                                   defaultValue={selectedNationalCurr}
                                   className="buttons_group"
                                   onChange={handleChangeSelect}>
                    <ToggleButton value={"USD"} className="btn">USD</ToggleButton>
                    <ToggleButton value={"UAH"} className="btn">UAH</ToggleButton>
                    <ToggleButton value={"RUB"} className="btn">RUB</ToggleButton>
                </ToggleButtonGroup>
            </div>
    )
}

export default Select;