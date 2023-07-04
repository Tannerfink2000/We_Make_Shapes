const fs = require('fs');
const { Circle, Triangle, Square } = require("./shapes");
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class CLI {
  constructor() {
    this.shapeTypes = {
      circle: Circle,
      triangle: Triangle,
      square: Square,
    };
  }

  getShape(shape) {
    return new this.shapeTypes[shape]();
  }

  promptUser() {
    return inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'title',
            message: 'Enter your SVG name (max 3 characters)',
            maxLength: 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color you want to use for your text (Either a distinct color name [ie "red"] or a hex value [ie "#d8d8d8"])',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want to use?',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter color you want to use for your shape (Either a distinct color name or a hex value)',
        },
    ]);
  }

  writeFile(name, data) {
    fs.writeFile(name, data, (err) => {
      if (err) console.log(err);
    });
  }

  run() {
    return this.promptUser()
      .then(({ shape, shapeColor, textColor, title }) => {
        const newSVG = this.getShape(shape);
        newSVG.setShapeColor(shapeColor);
        newSVG.setText(title);
        newSVG.setTextColor(textColor);

        const svgFileData = newSVG.render();

        this.writeFile('logo.svg', svgFileData);
      });
  }
}

module.exports = CLI;
