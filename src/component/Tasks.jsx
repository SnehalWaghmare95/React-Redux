import React from 'react';
import {incrementValue,decrementValue} from '../action/action';
import {connect} from 'react-redux';
import '../styles/task.css';

 class Task extends React.Component
{
  
   
   render(){
      console.log("propsvalue:",this.props);
      return(
         <div className="increment_decrement_counter">
            <div>
               <h1>{this.props.count}</h1>
               <button onClick={this.props.incrementValueHandler}>+</button>
               <button  onClick={this.props.decrementValueHandler}>-</button>
            </div>
         </div>
      );
   }

}

const mapStateToProps = (state) => ({
   count : state.counter
});

const mapDispatchToProps = (dispatch) => ({

   incrementValueHandler:()=>dispatch(incrementValue()),
   decrementValueHandler:()=>dispatch(decrementValue())  
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Task)