import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import Project from './src/components/project'

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */

class FilterProjects extends Component {
   constructor(){
    super()
    this.state= {
      project:projectData,
      filter:'all'
    }
  }
  
 projects= (item) =>{
  this.setState({
    filter:item
  })
 }
 
 filterProjects = (item) => {
    if(item === "all") return this.state.project
    if(item === false)return this.state.project.filter(function(newItem){return newItem.solo === false});
    if(item === true)return this.state.project.filter(function(newItem){return newItem.solo === true});
}

  render() {
  
    
      const filterType= this.state.filter
      const newList= this.filterProjects(filterType)

       return (
      
         <section>
            <h4>Projects</h4>
    
            <div className="project-types-list">
              <span onClick={() => {this.projects('all')}} data-ptype="all" className="project-type project-type--all project-type--selected"> All</span>

            <span onClick={() => {this.projects(true)}} data-ptype="solo" className="project-type project-type--solo">
              <i className="ion-person"></i>Solo</span>

            <span onClick={() => {this.projects(false)}} data-ptype="team" className="project-type project-type--team" >
              <i className="ion-person-stalker"></i>Team</span>
          </div>

          <div className='projects-list'>

            { projectData.map(function(data){
                return(
                   <div className="project project--team">
                      <span className="project__title" > { data.projectName } </span>
                   </div>

                ) 
            })}
           }

          </div>
        </section>

    );
  }
}

export default FilterProjects;
