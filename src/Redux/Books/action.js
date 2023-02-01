import { EDIT_BOOKS_FAILURE, EDIT_BOOKS_REQUEST, EDIT_BOOKS_SUCCESS, GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes";
import axios from "axios"



export const getBooksRequestAction=()=>{
    return {type : GET_BOOKS_REQUEST}
}

export const getBooksSuccessAction=(payload)=>{
    return {type : GET_BOOKS_SUCCESS, payload}
}

export const getBooksFailureAction=()=>{
    return {type : GET_BOOKS_FAILURE}
}

//edit
export const editBookRequest=()=>{
    return {type: EDIT_BOOKS_REQUEST}
}
export const editBookSuccess=()=>{
    return {type: EDIT_BOOKS_SUCCESS}
}
export const editBookFailure=()=>{
    return {type: EDIT_BOOKS_FAILURE}
}




export const getBooks=(param={})=>(dispatch)=>{
    dispatch(getBooksRequestAction());

    axios.get(`http://localhost:8080/books`, param).then((res)=>{
        dispatch(getBooksSuccessAction(res.data));
        console.log("resData", res.data)
    }).catch((error)=>{
        dispatch(getBooksFailureAction());
    })
}

export const editBook = (id,bookData)=>(dispatch)=>{
    dispatch(editBookRequest());
    return axios.patch(`http://localhost:8080/books/${id}`, bookData).then(()=>{
    dispatch(editBookSuccess())
    }).catch((error)=>{
        console.log("error", error);
        dispatch(editBookFailure());
    })

}