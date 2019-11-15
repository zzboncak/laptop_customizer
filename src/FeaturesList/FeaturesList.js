import React from 'react';
import Feature from './Feature/Feature';

class FeaturesList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
  
      return (
        <Feature 
          key={idx}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          features={this.props.features}
          feature={feature}
          featureHash={featureHash}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}


export default FeaturesList;