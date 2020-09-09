import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(comments1, comments2) {
    if (comments1 != null && comments2 != null)
      return (
        <div>
          <ul className="list-unstyled">
            <li>{comments1}</li>
            <li>{comments2}</li>
          </ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <div>
            <h4>Comments</h4>
          </div>

          {this.renderComments()}
          {this.renderComments(
            ...[
              "Imagine all the eatables, living in conFusion!",
              "--John Lemon, Oct 17, 2012",
            ]
          )}
          {this.renderComments(
            ...[
              "Sends Anyone to heaven, I wish I could get my mother-in-law to eat!",
              "--Paul McVites, Sep 06, 2014",
            ]
          )}
          {this.renderComments(
            ...["Eat it, just eat it!", "--Michael Jaikishan, Feb 14, 2015"]
          )}
          {this.renderComments(
            ...[
              "Ultimate, Reaching for the stars!",
              "--Ringo Stary, Dec 03, 2013",
            ]
          )}
          {this.renderComments(
            ...[
              "It's your birthday, we're gonna party!",
              "--25 Cent, Dec 03, 2011",
            ]
          )}
        </div>
      </div>
    );
  }
}

export default DishDetail;
