import {INCREMENT,DECREMENT} from '../constants/constants';

export const incrementValue=()=>
{
   return {
      type:INCREMENT
   }
}

export const decrementValue=()=>
{
   return {
      type:DECREMENT
   }
}