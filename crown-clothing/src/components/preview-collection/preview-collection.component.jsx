import React from 'react';
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({title, items}) => (
    <div className = "collection-preview">
        <div className = "title">
            <h1>{title}</h1>
        </div>
        <div className = "preview">
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem key = {item.id} item= {item} />
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;