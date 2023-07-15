import { useOptionsContext } from "../../context/OptionsContext"
import { Box, Grid } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { buildLabels, buildLineValues, buildColores, buildValueLabels, buildDescription, buildTotales } from '../../services/buildTables';

export default function Tabla(){
    const {datos} = useOptionsContext()
    const {included} = datos
    let tableData = []
    //Valores para lineas
    const LABELS = buildLabels(included) //datos para el eje x
    console.log(LABELS,"LABELS")
    const VALUES = buildLineValues(included)//datos para el eje y
    console.log(VALUES,"VALUES")
    const VALUE_LABELS = buildValueLabels(included)//etiquetas de lineas de grafica
    console.log(VALUE_LABELS,"VALUE_LABELS")
    //valores para barras
    const COLORES = buildColores(included) //colores de la grafica
    console.log(COLORES,"COLORES")
    const TOTALES = buildTotales(included) //valores totales
    console.log(TOTALES,"TOTALES")
    const LASTUPDATE = buildDescription(included)
    console.log(LASTUPDATE,"LASTUP")

    TOTALES.map((t,index)=>{
        tableData.push({
            id: index,col1:LASTUPDATE[index],col2: VALUE_LABELS[index],col3: t
        })
    })
    console.log(tableData)

    const rows = tableData

    const columns = [
        { field: 'col1', headerName: 'ID', width: 150 },
        { field: 'col2', headerName: 'ENERGIA', width: 150 },
        { field: 'col3', headerName: 'VALOR', width: 150 },
      ];

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
        )

}