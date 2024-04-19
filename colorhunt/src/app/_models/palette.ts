export class Palette {
  constructor(
    public id: string,
    public colors: string[],
    public likes: number = 0
  ) {}
}

export interface PaletteTest {
  id: number;
  likes: number;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

export var palettesTest: PaletteTest[] = [
  {
    id: 1,
    likes: 1,
    color1: '#000000',
    color2: '#FFFFFF',
    color3: '#FF0000',
    color4: '#000000',
  },
  {
    id: 2,
    likes: 0,
    color1: '#FFFFFF',
    color2: '#000000',
    color3: '#FF0000',
    color4: '#00FF00',
  },
  {
    id: 3,
    likes: 0,
    color1: '#FF0000',
    color2: '#00FF00',
    color3: '#0000FF',
    color4: '#FFFFFF',
  },
  {
    id: 4,
    likes: 0,
    color1: '#00FF00',
    color2: '#0000FF',
    color3: '#FFFFFF',
    color4: '#000000',
  },
  {
    id: 5,
    likes: 0,
    color1: '#0000FF',
    color2: '#FFFFFF',
    color3: '#000000',
    color4: '#FF0000',
  },
  {
    id: 6,
    likes: 0,
    color1: '#FF0000',
    color2: '#00FF00',
    color3: '#0000FF',
    color4: '#FFFFFF',
  },
  {
    id: 7,
    likes: 0,
    color1: '#00FF00',
    color2: '#0000FF',
    color3: '#FFFFFF',
    color4: '#000000',
  },
  {
    id: 8,
    likes: 0,
    color1: '#0000FF',
    color2: '#FFFFFF',
    color3: '#000000',
    color4: '#FF0000',
  },
];

export var palettes: Palette[] = [
  new Palette('0000FFFFFFFF000000FF000000FF', [
    '#000000',
    '#FFFFFF',
    '#FF0000',
    '#000000',
  ]),
  new Palette('FFFFFF000000FF000000FF000000FF', [
    '#FFFFFF',
    '#000000',
    '#FF0000',
    '#00FF00',
  ]),
  new Palette('FF000000FF000000FFFFFFFF000000', [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFFFF',
  ]),
  new Palette('00FF000000FFFFFFFF000000FF0000', [
    '#00FF00',
    '#0000FF',
    '#FFFFFF',
    '#000000',
  ]),
  new Palette('0000FFFFFFFF000000FF000000FF00', [
    '#0000FF',
    '#FFFFFF',
    '#000000',
    '#FF0000',
  ]),
  new Palette('FF000000FF000000FFFFFFFF000000', [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFFFF',
  ]),
  new Palette('00FF000000FFFFFFFF000000FF0000', [
    '#00FF00',
    '#0000FF',
    '#FFFFFF',
    '#000000',
  ]),
  new Palette('0000FFFFFFFF000000FF000000FF00', [
    '#0000FF',
    '#FFFFFF',
    '#000000',
    '#FF0000',
  ]),
];
