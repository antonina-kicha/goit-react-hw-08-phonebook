import { Label, Input, FilterField} from './Filter.styled';
import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/contacts/filterSlice.jsx";
import { RiSearchLine } from 'react-icons/ri';



export const Filter = () => {
    const dispatch = useDispatch();
    
    const changeFilter = (evt) => {
        dispatch(setStatusFilter(evt.currentTarget.value));
  }

    return (
        <FilterField>
            <Label ><RiSearchLine size={18}/> </Label> 
            <Input type="text" id="filter" onChange={changeFilter} placeholder="Find contacts by name"/>
        </FilterField> 
            
        )
    }
