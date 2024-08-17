/*import $ from 'jquery';
import User from './models/User';
import Transaction from './models/Transaction';
import Category from './models/Category';
import UserController from './controllers/UserController';
import TransactionController from './controllers/TransactionController';
import CategoryController from './controllers/CategoryController';

// Crear un usuario de ejemplo
const user = new User(1, 'John Doe');

// Crear categorías de ejemplo
const foodCategory = new Category(1, 'Food');
const travelCategory = new Category(2, 'Travel');

// Añadir categorías al usuario
user.addCategory(foodCategory);
user.addCategory(travelCategory);

// Crear transacciones de ejemplo
const transaction1 = new Transaction(1, 20, 'Lunch', foodCategory, user);
const transaction2 = new Transaction(2, 50, 'Flight', travelCategory, user);

// Añadir transacciones al usuario y a las categorías
user.addTransaction(transaction1);
user.addTransaction(transaction2);
foodCategory.addTransaction(transaction1);
travelCategory.addTransaction(transaction2);

// Inicializar controladores
$(function () {
  'use strict';
  new UserController(user);
  new TransactionController(user);
  new CategoryController(user);
});
*/
