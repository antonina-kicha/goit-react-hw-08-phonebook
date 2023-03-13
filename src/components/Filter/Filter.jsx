import { Label, Input } from './Filter.styled';
import { useDispatch } from "react-redux";
import { setStatusFilter } from "redux/contacts/filterSlice.jsx";
import { RiSearchLine } from 'react-icons/ri';



export const Filter = () => {
    const dispatch = useDispatch();
    
    const changeFilter = (evt) => {
        dispatch(setStatusFilter(evt.currentTarget.value));
  }
    
    return (
        <div>
            <Label for="filter"><RiSearchLine/>Find contacts by name </Label> 
            <Input type="text" id="filter" onChange={changeFilter}/>
        </div> 
            
        )
    }
