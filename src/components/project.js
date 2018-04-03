import React, { Component } from 'react';

class Project extends Component{
	render(){
		return <p classNam={this.props.value === true ? 'project--solo' : 'project--team' }> {this.props.name}</p>
	}
}

export default Project;