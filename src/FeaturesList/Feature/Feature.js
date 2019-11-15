import React from 'react';
import Option from '../Option/Option';
import slugify from 'slugify';

class Feature extends React.Component {
    render() {
        let feature = this.props.feature;
        const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Option 
                key={itemHash}  
                itemHash={itemHash} 
                item={item} 
                feature={feature} 
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
        });
        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset> 
        )
    }
}

export default Feature;