import React, { Component } from 'react';
import Form from './Form';
import DeleteButton from './DeleteButton';

class Bibliotheque extends Component {

  render() {
    return (
      <div>
        <Form />
        <ul>
          {this.props.displayBooks.map((book, index) =>
            <li key={index}>
            <p>Titre: {book.titre}</p>
            <p>Auteur: {book.auteur}</p>
            <p>Année de publication: {book.annee_de_publication}</p>
            <p>Nombre de pages: {book.pages}</p>
            <p>Date de création: {book.date_de_creation}</p>
            <DeleteButton id={book._id}/>
          </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Bibliotheque;
