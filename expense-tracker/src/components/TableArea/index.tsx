import * as C from './styles';
import { Item } from '../../types/Item';


type Props ={
    list: Item[]
}
export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Fecha</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoría</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>

                </tr>
            </thead>
            <tbody>
                    {list.map((item, index)=>(
                        <tr key={index}>
                            <td></td>
                            <td></td>
                            <td>{item.title}</td>
                            <td></td>
                        </tr>
                    ))}
            </tbody>
        </C.Table>
    )
}