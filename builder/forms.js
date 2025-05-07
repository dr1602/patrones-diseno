class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {}
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = '';
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: 'text',
    });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

const frmBuilder = new FormBuilder();

const formPeople = frmBuilder
  .setAction('add.php')
  .setText('firstName', 'Nombre')
  .setText('lastName', 'Apellidos')
  .build();

console.log(formPeople);
