import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconsButtons'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='10'>
            <input id='description' className='form-control' 
            placeholder='Adicione uma tarefa' 
            onChange={props.handleChange} value={props.description}></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd}></IconButton>
            <IconButton style='info' icon='search'
                onClick={props.handleSearch}></IconButton>
            <IconButton style='default' icon='close'
                onClick={props.handleClear}></IconButton>
        </Grid>
    </div>
)