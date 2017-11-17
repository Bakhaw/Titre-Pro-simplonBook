import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div className="container-fluid editForm">
        <form action={`http://localhost:3005/${this.props.id}/update`} method="POST">
          <input className="form-control" defaultValue={this.props.titre} name = "titre" placeholder="titre"/>
          <input className="form-control" defaultValue={this.props.auteur} name = "auteur" placeholder="auteur"/>
          <input className="form-control" defaultValue={this.props.annee} name = "annee_de_publication" placeholder="année de publication"/>
          <input className="form-control" defaultValue={this.props.pages} name = "pages" placeholder="nombre de pages"/>
          <input className="form-control" defaultValue={this.props.date} name = "date_de_creation" placeholder="date de création"/>
          <button type="submit" className="btn btn-light">Modifier</button>
        </form>
      </div>
    );
  }

}

export default EditForm;
