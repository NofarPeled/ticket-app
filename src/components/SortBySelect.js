import React from  'react';

const SortBySelect = props => {
   const { select } = props;

   const selectList = select.options.map( option => {       
       return (
            <option key = { option.title } value = { option.value } name = { select.name }>
                { option.title }
            </option>
        );
   });
   
    return (
        <select className = 'sort-by-select' 
            defaultValue = { select.defaultValue }
            onChange = { 
                ev => { 
                    props.sortSelected( 
                    { name: select.name, value: ev.target.value }
                )}
            }
        >   
            {
                selectList
            }

        </select>
    )
}

export default SortBySelect;