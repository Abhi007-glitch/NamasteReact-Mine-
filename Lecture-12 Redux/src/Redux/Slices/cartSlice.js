import { createSlice } from "@reduxjs/toolkit";


const sliceConfig = { name: "cart", 
                     initialState : {items:[],total:0},
                     reducers: {
                        addToCart:(state,action)=>{
                             let flag =false;
                             
                             state.items.map( (item)=>{
                               
                              if (item.id==action.payload.id)
                              { 
                                 item.count=item.count+1;
                                 
                                 item.totalCost=item.totalCost+action.payload.price;
                                 state.total = state.total+action.payload.price;
                                 flag=true;
                              }
                              
                             });
                             
                             if (flag==false)
                             {
                              state.items.push(action.payload);
                              state.total = state.total+action.payload.price;
                             }
                             
                                 
                        },
                        removeFromCart:(state,action)=>{
                           let DeleteFlag = false;
                           state.items.map((item,i)=>{
                            
                              if (item.id === action.payload.id)
                              {  
                                 item.count=item.count-1;
                                 item.totalCost=item.totalCost-action.payload.price;
                                 state.total = state.total - action.payload.price;

                                 if (item.count==0)
                                 {
                                     DeleteFlag=i;
                                 }
                              }
                           });
                           if (DeleteFlag!==false)
                           {
                             
                              state.items.splice(DeleteFlag,1);
                           }
                        },
                        clearCart :(state,action)=>{
                           state.items = [];
                           state.total = 0;
                        },
                      
                       
                     } };

const cartSlice = createSlice(sliceConfig);

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
