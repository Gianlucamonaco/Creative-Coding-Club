class GuiView {
  constructor () {
    this.pane       = new Tweakpane.Pane();
    this.drawText   = false;
    this.drawRect   = true;
    this.drawPath   = false;
    this.drawVert   = false;
    this.rows       = 16;     // Numero di righe
    this.cols       = 16;     // Numero di colonne
    this.gapX       = 50;     // Spazio orizzontale tra gli elementi
    this.gapY       = 50;     // Spazio verticale tra gli elementi
    this.shiftX     = 0.0;    // Modifica la posizione orizzontale dei punti
    this.shiftY     = 0.5;    // Modifica la posizione verticale dei punti
    this.rectW      = 0.5;
    this.rectH      = 0.5;
    this.rectShiftW = 0.5;
    this.rectShiftH = 0.5;
    this.rectSpeedW = 0.02;
    this.rectSpeedH = 0.02;
    this.rectColor  = '#000000';
    this.fontSize   = 10;
    this.fontShiftX = false;

    const folder = this.pane.addFolder({ title: 'Settings' });
    const grid   = this.pane.addFolder({ title: 'Grid' });
    const rect   = this.pane.addFolder({ title: 'Rectangle' });
    const text   = this.pane.addFolder({ title: 'Text' });

    folder.addInput(this, 'drawText', { label: 'Draw text' }).on('change', (e) => this.handleChangeValue(e));
    folder.addInput(this, 'drawRect', { label: 'Draw rect' }).on('change', (e) => this.handleChangeValue(e));
    folder.addInput(this, 'drawPath', { label: 'Draw path' }).on('change', (e) => this.handleChangeValue(e));
    folder.addInput(this, 'drawVert', { label: 'Draw vert' }).on('change', (e) => this.handleChangeValue(e));

    grid.addInput(this, 'gapX',   { label: 'Gap X',   min: 10, max: 100, step: 2 }).on('change', (e) => this.handleChangeValue(e));
    grid.addInput(this, 'gapY',   { label: 'Gap Y',   min: 10, max: 100, step: 2 }).on('change', (e) => this.handleChangeValue(e));
    grid.addInput(this, 'rows',   { label: 'Rows',    min: 4,  max: 32,  step: 1 }).on('change', (e) => this.handleChangeValue(e));
    grid.addInput(this, 'cols',   { label: 'Columns', min: 4,  max: 32,  step: 1 }).on('change', (e) => this.handleChangeValue(e));
    grid.addInput(this, 'shiftX', { label: 'Shift X', min: 0,  max: 2 }).on('change', (e) => this.handleChangeValue(e));
    grid.addInput(this, 'shiftY', { label: 'Shift Y', min: 0,  max: 2 }).on('change', (e) => this.handleChangeValue(e));

    rect.addInput(this, 'rectW',      { label: 'Width',   min: 0.1,  max: 1 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectH',      { label: 'Height',  min: 0.1,  max: 1 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectShiftW', { label: 'Shift W', min: 0,    max: 1 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectShiftH', { label: 'Shift H', min: 0,    max: 1 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectSpeedW', { label: 'Speed W', min: 0.02, max: 0.50 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectSpeedH', { label: 'Speed H', min: 0.02, max: 0.50 }).on('change', (e) => this.handleChangeValue(e));
    rect.addInput(this, 'rectColor',  { label: 'Color' }).on('change', (e) => this.handleChangeValue(e));

    text.addInput(this, 'fontSize', { label: 'Font size',   min: 6, max: 60, step: 1 }).on('change', (e) => this.handleChangeValue(e));
    text.addInput(this, 'fontShiftX', { label: 'Shift X' }).on('change', (e) => this.handleChangeValue(e));
  }

  handleChangeValue () {

  }

  toggle () {
    this.pane.hidden = !this.pane.hidden;
  }
}