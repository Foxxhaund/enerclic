import { useOptionsContext } from "../../context/OptionsContext"
import { DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector, } from '@mui/x-data-grid';
import { labelsX, valoresX, nombreX } from '../../services/buildTables';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
export default function Tabla(){
    const {datos} = useOptionsContext()
    const {included} = datos
    //let tableData = []
    
    //const COLORES = buildColores(included) 
    const NOMBRES = nombreX(included)
    const VALORES = valoresX(included)
    const LX = labelsX(included)

    let cols = [
        {field: 'Nombre', headerName: 'Nombre', width: 85, headerAlign: 'center'},
    ]
    LX.map((lx,index) =>{
        cols.push({field: `col${index}`, headerName: lx, width: 85, headerAlign: 'center' })
    })
    console.log(cols,"cols en tabla")
    let rows = []
    VALORES.map((V,index)=> {
        let obj = {id: index, Nombre: NOMBRES[index]}
        for(let i = 0; i < V.length; i++){
            if(V[i]) obj[`col${i}`] =   V[i]
            else obj[`"col${i}"`] = V[i] = ' '
        } 
        rows.push(obj)
        obj = {}
    })
    
    return (
        <div style={{ height: 700, width: '100%' }}>
            <p>dfgdfgerg</p>
            <DataGrid rows={rows} columns={cols} slots={{toolbar: CustomToolbar}} />
        </div>
        )

 }