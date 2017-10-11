import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book, i)=>{
            return (
                <li key={i} className="list-group-item">
                    {book.title}   
                </li>               
            )
        })
    }

    render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateTopProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateTopProps)(BookList);