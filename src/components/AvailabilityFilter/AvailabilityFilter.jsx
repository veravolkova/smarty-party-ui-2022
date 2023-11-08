import React, { useState, useEffect } from "react";
import { filterChange } from "../../reducers/filter";
import { useDispatch } from "react-redux";
import constants from "../../utils/constants";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";


const AvailabilityFilter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(filterChange(filter));
  }, [filter]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    dispatch(filterChange(filter));
  };

  const formControlLabels = constants.RADIO_BUTTON_LABELS.map(
    (el, index) => {
      return (
        <FormControlLabel
          key={index}
          label={el.label}
          value={el.value}
          control={<Radio />}
        />
      );
    });

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="availability"
          name="availability"
          value={filter}
          onChange={handleChange}
        >
          {formControlLabels}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default AvailabilityFilter;
