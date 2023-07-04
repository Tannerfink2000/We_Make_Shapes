class Shape {
  constructor() {
    this.properties = {
      textColor: '',
      shapeColor: '',
      text: '',
    };
  }

  setTextColor(textColor) {
    this.properties.textColor = textColor;
  }

  setShapeColor(shapeColor) {
    this.properties.shapeColor = shapeColor;
  }

  setText(text) {
    this.properties.text = text;
  }
}

class Circle extends Shape {
  render() {
    const { textColor, shapeColor, text } = this.properties;

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    const { textColor, shapeColor, text } = this.properties;

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
      <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    const { textColor, shapeColor, text } = this.properties;

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
