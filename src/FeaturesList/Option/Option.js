import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Option extends React.Component {
  render() {
    let feature = this.props.feature;
    let name = this.props.item.name;
    let cost = this.props.item.cost;
    return (
      <div key={this.props.itemHash} className="feature__item">
          <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={name === this.props.selected[feature].name}
          onChange={e => this.props.updateFeature(feature, this.props.item)}
          />
          <label htmlFor={this.props.itemHash} className="feature__label">
          {name} ({USCurrencyFormat.format(cost)})
          </label>
      </div>
    );
  };
}


export default Option;