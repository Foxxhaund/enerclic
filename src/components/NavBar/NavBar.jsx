import { useEffect, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Box,
} from "@mui/material";
import { LANG, CATEGORY } from "../../const/const";
import { selectWid } from "../../services/selectWid";
import { useOptionsContext } from "../../context/OptionsContext";

export default function NavBar() {
  const { setSelectedWid } = useOptionsContext();
  const [wid, setWid] = useState(null);

  const [options, setOptions] = useState({
    lang: "",
    category: "",
    widget: "",
  });

  useEffect(() => {
    setWid(selectWid(options.category));
  }, [options.category]);

  useEffect(() => {
    setSelectedWid(options);
  }, [options.widget]);

  const handleChange = (e) => {
    setOptions((currentOptions) => ({
      ...currentOptions,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <FormControl fullWidth variant="standard">
        <InputLabel id="lang-label" width="100%">
          Idioma
        </InputLabel>
        <Select
          fullWidth
          name="lang"
          labelId="lang-label"
          id="lang-select"
          value={options.lang}
          onChange={handleChange}
          label="Idioma"
        >
          {LANG.map((l, index) => {
            return (
              <MenuItem key={index} value={l}>
                {l}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="standard">
        <InputLabel id="category-label" width="100%">
          Categoría
        </InputLabel>
        <Select
          fullWidth
          name="category"
          labelId="category-label"
          id="category-select"
          value={options.category}
          onChange={handleChange}
        >
          {CATEGORY.map((c, index) => {
            return (
              <MenuItem key={index} value={c}>
                {c}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl fullWidth variant="standard">
        <InputLabel id="widget-label" width="100%">
          Widget
        </InputLabel>
        <Select
          fullWidth
          name="widget"
          labelId="widget-label"
          id="widget-select"
          value={options.widget}
          onChange={handleChange}
        >
          {wid
            ? wid.map((w, index) => {
                return (
                  <MenuItem key={index} value={w}>
                    {w}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
    </Box>
  );
}
