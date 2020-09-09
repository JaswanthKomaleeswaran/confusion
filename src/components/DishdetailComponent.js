import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log("DishDetail Component ComponentDidMount Invoked");
  }

  componentDidUpdate() {
    console.log("DishDetail Component ComponentDidUpdate Invoked");
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    --{comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  }

  // renderComments(comments1, comments2) {
  //   if (comments1 != null && comments2 != null)
  //     return (
  //       <div>
  //         <ul className="list-unstyled">
  //           <li>{comments1}</li>
  //           <li>{comments2}</li>
  //         </ul>
  //       </div>
  //     );
  //   else return <div></div>;
  // """
  //   {this.renderComments(
  //     ...[
  //       "Imagine all the eatables, living in conFusion!",
  //       "--John Lemon, Oct 17, 2012",
  //     ]
  //   )}
  // """
  // }

  render() {
    console.log("DishDetail Component Render Invoked");
    if (this.props.dish != null)
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
