import React from 'react'
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utlis/selection-filter'

export default function Browse() {
    
    //series and film
    const { series } = useContent('series');
    const { films } = useContent('films');
    //slides
    const slides = selectionFilter({ series, films});
    //pass it to the browse container
    
    
    return (
        <>
        <BrowseContainer slides = {slides} />
     
        </>
    )
}