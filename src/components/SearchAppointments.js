/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react'

class SearchAppointments extends Component {
    render(){
        return (
            <div className="search-appointments row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchApts"
                  type="text"
                  className="form-control"
                  aria-label="Search Appointments"
                  onChange={ e => this.props.searchApts(e.target.value)}
                />
                <div class="dropdown input-group-append">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort By
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                    <li><a className={ 'dropdown-item sort-by' + (this.props.orderBy === 'petName' ? 'active' : '')}
                     href="#"
                     onClick={_e => this.props.changeOrder('petName', this.props.orderDir )}
                     >
                       Pet Name</a></li>
                    <li><a className= {'dropdown-item sort-by' + (this.props.orderBy === 'aptDate' ? 'active' : '')}
                     href="#"
                     onClick={_e => this.props.changeOrder('aptDate', this.props.orderDir)}
                     >
                       Date</a></li>
                    <li><a className={'dropdown-item sort-by' + (this.props.orderBy === 'ownerName' ? 'active' : '')}
                     href="#"
                     onClick={_e => this.props.changeOrder('ownerName', this.props.orderDir)}
                     >
                       Owner</a></li>
                    <li><a className={'dropdown-item sort-by' + (this.props.orderDir === 'asc' ? 'active' : '')}
                     href="#"
                     onClick={ _e => this.props.changeOrder(this.props.orderBy, 'asc')}
                     >
                       Asc</a></li>
                    <li><a className={'dropdown-item sort-by' + (this.propsorderDir === 'desc' ? 'active' : '')}
                     href="#"
                     onClick={_e => this.props.changeOrder(this.props.orderBy, 'desc')}
                     >
                       Desc</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default SearchAppointments;