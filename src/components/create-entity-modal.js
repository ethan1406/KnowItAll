import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import PollOptions from './modal-components/poll-options'

export default class CreateEntityModal extends Component {
  constructor(props) {
      super(props)

      this.state = {
        type: 'Poll',
        category: 'Sports',
        anonymous: false
      }
  }

  componentDidMount() {
    var componentThis = this
    $('#createModal').on('hidden.bs.modal', function () {
        componentThis.setState({category: 'Sports', type: 'Poll', anonymous: false})
        $(this).find("input,textarea").val('').end();
    });
    
    $('#datepicker').datepicker()
  }
  
  onSelectChange(event) {
     if(event.target.value == 'Review') {
      $('#createModal').off('hidden.bs.modal')

      var componentThis = this
      
      $('#createModal').on('hidden.bs.modal', function () {
        componentThis.setState({category: 'Sports', type: 'Poll', anonymous: false})
        $(this).find("input,textarea").val('').end();
      });
    }

    this.setState({type: event.target.value})
  }

  render() {
  	return (
      <div className="col-sm-4">
        <button data-toggle="modal" data-target="#createModal" style={{backgroundColor: "#db3236"}} className="col-sm-12 btn btn-success">Add Entity</button>
        <div className="modal fade" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Create Entity</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body col-sm-12">
                    <div className="col-sm-12">
                      <form className="form-horizontal" role="form">
                        <fieldset>
                          <div className="form-group">
                            <label className="col-sm-12 control-label" htmlFor="subject">Subject</label>
                            <div className="col-sm-12">
                              <input name="subject" type="text" placeholder="Insert Post Subject" className="form-control" />
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-sm-12 control-label" htmlFor="entityTypeSelect">Post Type</label>
                            <div className="col-sm-12">
                              <select value={this.state.type} onChange={this.onSelectChange.bind(this)} name="entityTypeSelect" type="text" className="form-control">
                                  <option>Poll</option>
                                  <option>Review</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <label className="col-sm-12 control-label" htmlFor="categorySelect">Category</label>
                            <div className="col-sm-12">
                              <select onChange={ (event) => { this.setState({category: event.target.value}) } } name="categorySelect" type="text" className="form-control">
                                  <option>Sports</option>
                                  <option>Education</option>
                              </select>
                            </div>
                          </div>

                          { (this.state.type == 'Poll') ? (
                              <PollOptions />
                            ) : <div></div>
                          }

                           <div className="form-group">
                                <label className="col-sm-2 control-label" htmlFor="anon">Anonymous</label>
                                <div className="col-sm-4">
                                  <input onChange={()=>{this.setState({anonymous: !this.state.anonymous})}}name="anon" type="checkbox" className="" />
                                </div>
                            </div>

                                 <div className="form-group">
                                <label className="col-sm-12 control-label" htmlFor="datepicker">Expiration Date</label>
                                <div className="col-sm-5">
                                  <input name="datepicker" type="text" id="datepicker" className="form-control"></input>
                                </div>
                            </div>
                        </fieldset>
                      </form>
                    </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </div>
  	)
  }
}

