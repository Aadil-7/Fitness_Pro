import React,{useState} from 'react'

const SearchContainer = (props) => {
    const [value, setValue] = useState('');
    const onchangeHandler = (e)=>{
        setValue(e.target.value)
    }
    const handleSearch = (search)=>{
        if(search){
            const searchedExcercises = props.data.filter(
                (item) => item.name.toLowerCase().includes(search)
                || item.target.toLowerCase().includes(search)
                || item.equipment.toLowerCase().includes(search)
                || item.bodyPart.toLowerCase().includes(search)
            )
            props.setter(searchedExcercises)
            setValue('')
        }
    }
    return (
        <div className='searchContainer'>
            <input onChange={onchangeHandler} id='searchValue' type='text' placeholder='search excercise...' value={value} className='searchBar' />
            <button className='searchBtn' onClick={()=>handleSearch(value)}>Search</button>
        </div>
    )
}

export default SearchContainer
