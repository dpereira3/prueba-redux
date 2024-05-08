import React, { Component } from 'react';
import { connect } from 'react-redux';

class datalist extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">Data List</div>
                    <div className="card-body">
                        <h5 className="card-title">List of Data</h5>
                        <p className="card-text">firest line</p>
                        <p className="card-text">second line</p>
                        <p className="card-text">therd line</p>
                    </div>
                </div>
            </>
        );
    }
}

export default datalist;