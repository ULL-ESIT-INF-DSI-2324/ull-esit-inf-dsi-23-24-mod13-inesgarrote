import { Document, connect, model, Schema } from 'mongoose';
import { Color, Tipo, Rareza, fuerzaResistencia } from '../carta.js';



interface CardDocumentInterface extends Document {
  id: number;
  nombre: string;
  costeMana: number;
  color: Color;
  tipo: Tipo;
  rareza: Rareza;
  textoReglas: string;
  fuerzaResistencia: fuerzaResistencia; // sólo se incluyen en aquellas cartas de tipo Criatura
  marcasLealtad: number | undefined; // Solo en cartas Planeswalker
  valorMercado: number;
}

const CardSchema = new Schema<CardDocumentInterface>({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  costeMana: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    enum: Color,
    required: true,
  },
  tipo: {
    type: String,
    enum: Tipo,
    required: true,
  },
  rareza: {
    type: String,
    enum: Rareza,
    required: true,
  },
  textoReglas: {
    type: String,
    required: true,
  },
  fuerzaResistencia: {
    type: [Number, Number],
    default: null
  },
  marcasLealtad: {
    type: Number,
    default:null,
  },
  valorMercado: {
    type: Number,
    required: true,
  },
});

export const Card = model<CardDocumentInterface>('Card', CardSchema);

/*
const card = new Card({
  id: 1,
  nombre: 'Carta de prueba',
  costeMana: 1,
  color: Color.Azul,
  tipo: Tipo.Tierra,
  rareza: Rareza.Comun,
  textoReglas: 'Texto de reglas',
  fuerzaResistencia: null,
  marcasLealtad: null,
  valorMercado: 1,
});


card.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
*/